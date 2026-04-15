"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import "react-phone-number-input/style.css";
import OtpInput from "react-otp-input";
import { countryList } from "@/context/countriesList";
import { useLocationDetail } from "@/context/useLocationDetail";
import { toast } from "react-toastify";
import Select from "react-select";
import { usePathname, useRouter, useSearchParams, useParams } from "next/navigation";
import enDefault from "@/messages/en.json";
import { usePathTranslation } from "../../LocaleProvider";

/** Default visual tokens — override via `appearance` prop */
export const DEFAULT_LEAD_FORM_APPEARANCE = {
    cardBackground: "rgba(255, 255, 255, 0.83)",
    cardShadowIb: "0px 0px 10px 0px rgba(0,0,0,0.1)",
    decorativeBlob: "#E9ECF7",
    labelColor: "#868686",
    fieldText: "#111827",
    fieldBorder: "#E5E7EB",
    fieldFocusBorder: "#2E59D9",
    fieldPlaceholder: "#9CA3AF",
    errorText: "#ef4444",
    phoneWrapperBg: "#ffffff",
    sendOtpBorder: "#2E59D9",
    sendOtpText: "#293B93",
    sendOtpBg: "#ffffff",
    otpInputOutline: "#2E59D9",
    otpInputBorder: "#E5E7EB",
    otpInputBg: "#ffffff",
    otpInputText: "#000000",
    disclaimerMuted: "#7A7A7A",
    linkColor: "#293B93",
    ibTitleClass: "text-primary",
    ibHighlight: "#B48755",
    ibSubtitleClass: "text-primary",
    submitGradientFrom: "#293B93",
    submitGradientTo: "#0D122D",
    submitText: "#ffffff",
    submitDisabledBg: "#DCDCDC",
    submitDisabledText: "#868686",
    selectFocus: "#2E59D9",
    selectBorder: "#E5E7EB",
    selectMenuBg: "#ffffff",
    selectText: "#000000",
    selectPlaceholder: "#B6BCC8",
};

/** Default API paths — use absolute URLs if needed */
export const DEFAULT_LEAD_FORM_ENDPOINTS = {
    validateEmail: "/api/validate-email",
    sendPhoneOtp: "/api/send-phone-otp",
    verifyOtp: "/api/verify-otp",
    /** Strapi (or CMS) lead save — runs first; `null` skips */
    strapiIfxExpos: null,
    /** Marketing Cloud / IFX event API — runs in parallel with Zapier after Strapi; `null` skips */
    ifxEvent2026: null,
    /** Set to `null` to skip webhook */
    webhookUrl: null,
};

export const DEFAULT_LEAD_FORM_LINKS = {
    clientAgreementPdf:
        "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Global+Trade+Capital+Co.+Ltd+(VANUATU)/T%26S+-+GTC+GLOBAL+TRADE+CAPITAL+CO.+LTD.pdf",
    termsPdf:
        "https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Website+Client+Document/GTC+Global+LTD/TERMS+AND+CONDITIONS+-+GTC+Global+Ltd.pdf",
};

function mergeAppearance(overrides) {
    return { ...DEFAULT_LEAD_FORM_APPEARANCE, ...(overrides || {}) };
}

function mergeEndpoints(overrides) {
    return { ...DEFAULT_LEAD_FORM_ENDPOINTS, ...(overrides || {}) };
}

function mergeLinks(overrides) {
    return { ...DEFAULT_LEAD_FORM_LINKS, ...(overrides || {}) };
}

function buildSelectStyles(appearance) {
    const focus = appearance.selectFocus;
    const border = appearance.selectBorder;
    return {
        control: (base, state) => ({
            ...base,
            backgroundColor: appearance.selectMenuBg,
            color: appearance.selectText,
            borderColor: state.isFocused ? focus : border,
            boxShadow: "none",
            ":hover": { borderColor: focus },
            minHeight: 46,
        }),
        valueContainer: (base) => ({ ...base, color: appearance.selectText }),
        singleValue: (base) => ({ ...base, color: appearance.selectText }),
        input: (base) => ({ ...base, color: appearance.selectText }),
        placeholder: (base) => ({ ...base, color: appearance.selectPlaceholder }),
        menu: (base) => ({
            ...base,
            backgroundColor: appearance.selectMenuBg,
            color: appearance.selectText,
            zIndex: 9999,
        }),
        menuList: (base) => ({ ...base, backgroundColor: appearance.selectMenuBg }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isSelected
                ? "#e5e7eb"
                : state.isFocused
                  ? "#f3f4f6"
                  : appearance.selectMenuBg,
            color: appearance.selectText,
            ":active": { backgroundColor: "#e5e7eb" },
        }),
        indicatorSeparator: (base) => ({ ...base, backgroundColor: border }),
        dropdownIndicator: (base, state) => ({
            ...base,
            color: state.isFocused ? focus : "#9CA3AF",
            ":hover": { color: focus },
        }),
    };
}

// Blocked fake/temporary email domains
const BLOCKED_EMAIL_DOMAINS = [
    "yopmail.com",
    "yopmail.fr",
    "yopmail.net",
    "mailinator.com",
    "guerrillamail.com",
    "guerrillamailblock.com",
    "10minutemail.com",
    "tempmail.com",
    "throwaway.email",
    "temp-mail.org",
    "mohmal.com",
    "trashmail.com",
    "maildrop.cc",
    "tempail.com",
    "getnada.com",
    "mintemail.com",
    "mytrashmail.com",
    "sharklasers.com",
    "spamgourmet.com",
    "mailnesia.com",
    "meltmail.com",
    "mailcatch.com",
    "emailondeck.com",
    "fakeinbox.com",
    "dispostable.com",
    "emailfake.com",
    "getairmail.com",
    "mailin8r.com",
    "mailme.lv",
    "tempr.email",
    "tmpmail.org",
    "mail.tm",
    "emailnator.com",
];

/**
 * Reusable lead form (OTP + optional Zapier / custom success).
 *
 * @param {object} [props]
 * @param {boolean} [props.isIb] — IB/partner header layout
 * @param {object} [props.messages] — optional `dict.home` or `{ form: { ... } }` for copy (falls back to en.json)
 * @param {Partial<typeof DEFAULT_LEAD_FORM_APPEARANCE>} [props.appearance] — colors / surfaces
 * @param {Partial<typeof DEFAULT_LEAD_FORM_ENDPOINTS>} [props.endpoints] — API URLs (`webhookUrl: null` skips Zapier; `strapiIfxExpos` / `ifxEvent2026` optional)
 * @param {Partial<typeof DEFAULT_LEAD_FORM_LINKS>} [props.links] — legal PDF links
 * @param {string|null} [props.successRedirect] — post-success route; `null` disables navigation
 * @param {(values: object, ctx: { locale: string }) => void|Promise<void>} [props.onSuccess] — runs after email validation + lead APIs
 * @param {(values: object, ctx: { locale: string, defaultPayload: object }) => object} [props.mapPartnerPayload] — body for Strapi + `/api/ifx-event-2026` (default: email, names, phone, country, optinEmail)
 * @param {(values: object, ctx: { locale: string }) => object} [props.mapWebhookPayload] — customize Zapier JSON body
 * @param {string} [props.otpChannel] — passed to send-phone-otp (default `whatsapp`)
 * @param {string} [props.className] — form element class
 * @param {string} [props.cardClassName] — inner card class
 * @param {CSSProperties} [props.cardStyle] — extra card inline styles
 */
export default function CommonLeadForm({
    isIb = false,
    messages: messagesProp = {},
    appearance: appearanceProp,
    endpoints: endpointsProp,
    links: linksProp,
    successRedirect = "/uae/partners/success",
    onSuccess,
    mapPartnerPayload,
    mapWebhookPayload,
    otpChannel = "whatsapp",
    className = "",
    cardClassName = "",
    cardStyle,
}) {
    const { countryData } = useLocationDetail();
    const [phoneOtpLoading, setPhoneOtpLoading] = useState(false);
    const [showOtp, setShowOtp] = useState(false);
    const [loading, setLoading] = useState(false);
    const [otpPhoneNumber, setOtpPhoneNumber] = useState("");
    const [isOtpVerified, setIsOtpVerified] = useState(false);
    const searchParams = useSearchParams();
    const campaign = searchParams.get("utm_source");
    const fbclid = searchParams.get("fbclid");
    const path = usePathname();
    const router = useRouter();
    const routeParams = useParams();
    const locale = routeParams?.locale ?? "en";

    const appearance = useMemo(() => mergeAppearance(appearanceProp), [appearanceProp]);
    const endpoints = useMemo(() => mergeEndpoints(endpointsProp), [endpointsProp]);
    const links = useMemo(() => mergeLinks(linksProp), [linksProp]);
    const selectStyles = useMemo(() => buildSelectStyles(appearance), [appearance]);

    const formMessages = messagesProp?.home?.form ?? messagesProp?.form ?? {};
    const fallbackForm = enDefault?.home?.form ?? {};
   const t = usePathTranslation("home.form");

    const offers = useMemo(
        () => [
            { label: t("offers.level1"), full: true },
            { label: t("offers.level2") },
            { label: t("offers.level3") },
            { label: t("offers.level4") },
            { label: t("offers.level5") },
            { label: t("offers.premium") },
            { label: t("offers.eliteRaw") },
        ],
        [t]
    );

    const options = countryList?.map((item) => ({
        value: item.alpha_2_code,
        label: (
            <div className="flex items-center gap-2">
                <img
                    src={`https://flagcdn.com/w40/${item.alpha_2_code.toLowerCase()}.png`}
                    alt={item.en_short_name}
                    className="w-5 h-4 object-cover"
                />
                <span>{item.en_short_name}</span>
            </div>
        ),
    }));

    const validationSchema = useMemo(
        () =>
            Yup.object({
                firstName: Yup.string().required(t("errors.firstName")),
                lastName: Yup.string().required(t("errors.lastName")),
                email: Yup.string()
                    .email(t("errors.emailInvalid"))
                    .required(t("errors.emailRequired"))
                    .test(
                        "no-plus-sign",
                        t("errors.emailNoPlus"),
                        (value) => !value || !value.includes("+")
                    )
                    .test(
                        "blocked-domain",
                        t("errors.emailBlockedDomain"),
                        (value) => {
                            if (!value) return true;
                            const emailDomain = value.split("@")[1]?.toLowerCase();
                            return !BLOCKED_EMAIL_DOMAINS.includes(emailDomain);
                        }
                    ),
                phone: Yup.string()
                    .required(t("errors.phoneRequired"))
                    .test("is-valid-e164", t("errors.phoneInvalid"), (value) => {
                        if (!value) return false;
                        return isValidPhoneNumber(value);
                    })
                    .test(
                        "matches-selected-country",
                        t("errors.phoneCountryMismatch"),
                        function (value) {
                            const selectedCountryCode = this.parent.country;
                            if (!value || !selectedCountryCode) return true;
                            const pn = parsePhoneNumberFromString(value);
                            if (!pn) return false;
                            return pn.country === selectedCountryCode;
                        }
                    ),
                country: Yup.string().required(t("errors.countryRequired")),
                otp: Yup.string()
                    .length(6, t("errors.otpLength"))
                    .required(t("errors.otpRequired")),
                terms: Yup.bool().oneOf([true], t("errors.termsRequired")),
            }),
        [t]
    );

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            country: "",
            otp: "",
            terms: false,
            offer: offers[0]?.label ?? "",
            fbclid: "",
            utm_campaign: "",
            utm_source: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            setLoading(true);
            if (!isOtpVerified) {
                toast.error(t("toast.verifyPhoneFirst"));
                setLoading(false);
                return;
            }

            try {
                const validationResponse = await axios.post(endpoints.validateEmail, {
                    email: formik.values.email,
                });

                if (!validationResponse.data.valid) {
                    toast.error(t("toast.invalidEmail"));
                    setLoading(false);
                    return;
                }

                const defaultPartnerPayload = {
                    email: values.email,
                    firstName: values.firstName,
                    lastName: values.lastName,
                    phone: values.phone,
                    country: values.country,
                    optinEmail: values.terms ?? true,
                };
                const partnerPayload = mapPartnerPayload
                    ? mapPartnerPayload(values, { locale, defaultPayload: defaultPartnerPayload })
                    : defaultPartnerPayload;

                if (endpoints.strapiIfxExpos) {
                    await axios.post(endpoints.strapiIfxExpos, partnerPayload);
                }

                const defaultWebhookPayload = {
                    nickname: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    phone: values.phone,
                    country: values.country,
                    offer: values.offer,
                    locale,
                    fbclid: values.fbclid,
                    utm_campaign: values.utm_campaign,
                    utm_source: values.utm_source,
                };
                const webhookPayload = mapWebhookPayload
                    ? mapWebhookPayload(values, { locale, defaultPayload: defaultWebhookPayload })
                    : defaultWebhookPayload;

                const parallelTasks = [];
                if (endpoints.ifxEvent2026) {
                    parallelTasks.push(axios.post(endpoints.ifxEvent2026, partnerPayload));
                }
                if (endpoints.webhookUrl) {
                    parallelTasks.push(
                        axios.post(endpoints.webhookUrl, JSON.stringify(webhookPayload))
                    );
                }
                if (parallelTasks.length > 0) {
                    await Promise.all(parallelTasks);
                }

                toast.success(t("toast.success"));
                localStorage.setItem("user", JSON.stringify({ ...values }));
                await onSuccess?.(values, { locale });
                if (successRedirect != null && successRedirect !== "") {
                    router.push(successRedirect);
                }
                formik.resetForm();
                setIsOtpVerified(false);
            } catch (err) {
                console.error("Form submission error:", err);
                const apiMsg =
                    err?.response?.data?.details ||
                    err?.response?.data?.error ||
                    err?.response?.data?.message ||
                    (typeof err?.response?.data === "string" ? err.response.data : null);
                toast.error(apiMsg || err?.message || t("toast.genericError"));
            } finally {
                setLoading(false);
            }
        },
    });

    useEffect(() => {
        if (countryData?.country) {
            const filterData = countryList.find(
                (item) =>
                    item?.en_short_name == countryData.country ||
                    item?.alpha_2_code == countryData.country
            );
            formik.setFieldValue("country", filterData ? filterData?.alpha_2_code : "");
        }
        if (fbclid) {
            formik.setFieldValue("fbclid", fbclid);
        }
        if (campaign) {
            formik.setFieldValue("utm_source", campaign);
        }
        if (path) {
            formik.setFieldValue("utm_campaign", path);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countryData?.country, countryList, fbclid, campaign, path]);

    useEffect(() => {
        const label = offers[0]?.label;
        if (label) {
            formik.setFieldValue("offer", label);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [offers]);

    useEffect(() => {
        if (
            otpPhoneNumber &&
            formik.values.phone &&
            formik.values.phone !== otpPhoneNumber
        ) {
            setShowOtp(false);
            setIsOtpVerified(false);
            formik.setFieldValue("otp", "");
            setOtpPhoneNumber("");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formik.values.phone, otpPhoneNumber]);

    const sendPhoneVerificationCode = () => {
        if (!formik.values.phone) {
            toast.error(t("toast.phoneRequired"));
            return;
        }
        if (!isValidPhoneNumber(formik.values.phone)) {
            toast.error(t("toast.phoneInvalid"));
            return;
        }
        setPhoneOtpLoading(true);
        axios
            .post(endpoints.sendPhoneOtp, {
                phone: formik.values.phone,
                first_name: formik.values.firstName,
                locale,
                channel: otpChannel,
            })
            .then((res) => {
                if (res?.data?.success || res?.data?.message) {
                    setShowOtp(true);
                    formik.setFieldValue("otp", "");
                    setIsOtpVerified(false);
                    setOtpPhoneNumber(formik.values.phone);
                    toast.success(t("toast.otpSent"));
                } else {
                    toast.error(res?.data?.message || t("toast.otpSendFailed"));
                }
            })
            .catch((error) => {
                console.error(error);
                toast.error(
                    error?.response?.data?.message || error?.message || t("toast.otpSendFailed")
                );
            })
            .finally(() => setPhoneOtpLoading(false));
    };

    const isPhoneValid = formik.values.phone && isValidPhoneNumber(formik.values.phone);

    const verifyOtpCode = async (otp) => {
        if (!otp || otp.length !== 6) {
            return;
        }

        try {
            const res = await axios.post(endpoints.verifyOtp, {
                phone: formik.values.phone,
                otp: otp,
            });

            if (res?.data?.success) {
                toast.success(t("toast.otpVerified"));
                setShowOtp(false);
                setIsOtpVerified(true);
            } else {
                toast.error(res?.data?.message || t("toast.otpInvalid"));
                setIsOtpVerified(false);
            }
        } catch (error) {
            console.error("OTP verification error:", error);
            toast.error(
                error?.response?.data?.message || error?.message || t("toast.otpVerifyFailed")
            );
            setIsOtpVerified(false);
        }
    };

    const phoneStyleId = useMemo(() => `phone-input-styles-${Math.random().toString(36).slice(2, 9)}`, []);

    useEffect(() => {
        const bg = appearance.phoneWrapperBg;
        const fg = appearance.fieldText;
        const ph = appearance.fieldPlaceholder;
        const style = document.createElement("style");
        style.id = phoneStyleId;
        style.textContent = `
      .${phoneStyleId} .phone-input-wrapper { background: ${bg} !important; }
      .${phoneStyleId} .phone-input-wrapper .PhoneInput {
        display: flex; align-items: center; width: 100%; height: 100%;
        background: ${bg} !important;
      }
      .${phoneStyleId} .phone-input-wrapper .PhoneInputInput {
        border: none !important; outline: none !important;
        background: ${bg} !important; font-size: 14px !important; font-weight: 500 !important;
        color: ${fg} !important; height: 100% !important; padding: 0 !important; flex: 1; margin-left: 8px;
      }
      .${phoneStyleId} .phone-input-wrapper .PhoneInputInput::placeholder { color: ${ph} !important; }
      .${phoneStyleId} .PhoneInputCountry { flex-direction: row !important; }
      .${phoneStyleId} .phone-input-wrapper .PhoneInputCountryIcon { width: 20px !important; height: 15px !important; }
      .${phoneStyleId} .phone-input-wrapper .PhoneInputCountrySelect {
        border: none !important; background: ${bg} !important; font-size: 14px !important;
        font-weight: 500 !important; color: ${fg} !important; padding: 0 4px !important;
        height: auto !important; cursor: pointer; appearance: none; -webkit-appearance: none; -moz-appearance: none;
      }
      .${phoneStyleId} .phone-input-wrapper .PhoneInputCountrySelect:focus {
        background: ${bg} !important; color: ${fg} !important; outline: none !important;
      }
      .${phoneStyleId} .phone-input-wrapper .PhoneInputCountrySelectArrow { opacity: 0.7; color: ${ph} !important; }
      .${phoneStyleId} .phone-input-wrapper .PhoneInputCountrySelectArrow svg { fill: ${ph} !important; stroke: ${ph} !important; }
      .${phoneStyleId} .phone-input-wrapper input[type="tel"], .${phoneStyleId} .phone-input-wrapper select {
        background: ${bg} !important; color: ${fg} !important;
      }
      .${phoneStyleId} .phone-input-wrapper .PhoneInputCountryIcon img { width: 20px !important; height: 15px !important; }
    `;
        document.head.appendChild(style);
        return () => {
            const el = document.getElementById(phoneStyleId);
            if (el) el.remove();
        };
    }, [appearance.fieldPlaceholder, appearance.fieldText, appearance.phoneWrapperBg, phoneStyleId]);

    const inputBase =
        "h-[46px] w-full min-w-0 rounded-[8px] border px-3 text-[14px] font-medium outline-none transition-colors";
    const fieldErr = (touched, err) => touched && err;

    return (
        <form onSubmit={formik.handleSubmit} className={`relative w-full min-w-0 ${className}`}>
            <div className={phoneStyleId}>
                <div
                    className={`relative overflow-hidden rounded-[20px] md:p-5 p-4 ${
                        isIb ? "md:px-16 px-4 md:py-12 py-8" : ""
                    } ${cardClassName}`}
                    style={{
                        backgroundColor: appearance.cardBackground,
                        boxShadow: isIb ? appearance.cardShadowIb : "none",
                        ...cardStyle,
                    }}
                >
                    {!isIb && (
                        <div
                            className="md:flex hidden pointer-events-none absolute -bottom-10 right-6 h-[460px] md:w-[88%] rounded-xl"
                            style={{ backgroundColor: appearance.decorativeBlob }}
                        />
                    )}

                    <div className="relative min-w-0">
                        {isIb && (
                            <div className="text-center mb-6">
                                <h2
                                    className={`text-center md:text-[25px] lg:text-[36px] text-[20px] uppercase font-extrabold ${appearance.ibTitleClass}`}
                                >
                                    {t("ibTitle")}{" "}
                                    <span style={{ color: appearance.ibHighlight }}>
                                        {t("ibTitleHighlight")}
                                    </span>
                                </h2>
                                <p
                                    className={`md:text-[16px] text-[14px] text-center font-normal ${appearance.ibSubtitleClass}`}
                                >
                                    {t("ibSubtitle")}
                                </p>
                            </div>
                        )}

                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                            <div className="min-w-0">
                                <div
                                    className="mb-1 text-[14px] font-normal"
                                    style={{ color: appearance.labelColor }}
                                >
                                    {t("firstNameLabel")}
                                </div>
                                <input
                                    type="text"
                                    {...formik.getFieldProps("firstName")}
                                    className={inputBase}
                                    style={{
                                        color: appearance.fieldText,
                                        borderColor: fieldErr(formik.touched.firstName, formik.errors.firstName)
                                            ? appearance.errorText
                                            : appearance.fieldBorder,
                                    }}
                                    onFocus={(e) => {
                                        if (!formik.errors.firstName)
                                            e.target.style.borderColor = appearance.fieldFocusBorder;
                                    }}
                                    onBlur={(e) => {
                                        formik.handleBlur(e);
                                        e.target.style.borderColor = fieldErr(
                                            formik.touched.firstName,
                                            formik.errors.firstName
                                        )
                                            ? appearance.errorText
                                            : appearance.fieldBorder;
                                    }}
                                    placeholder={t("firstNamePlaceholder")}
                                />
                                {formik.touched.firstName && formik.errors.firstName && (
                                    <p className="text-xs mt-1" style={{ color: appearance.errorText }}>
                                        {formik.errors.firstName}
                                    </p>
                                )}
                            </div>

                            <div className="min-w-0">
                                <div
                                    className="mb-1 text-[14px] font-normal"
                                    style={{ color: appearance.labelColor }}
                                >
                                    {t("lastNameLabel")}
                                </div>
                                <input
                                    type="text"
                                    {...formik.getFieldProps("lastName")}
                                    className={inputBase}
                                    style={{
                                        color: appearance.fieldText,
                                        borderColor: fieldErr(formik.touched.lastName, formik.errors.lastName)
                                            ? appearance.errorText
                                            : appearance.fieldBorder,
                                    }}
                                    onFocus={(e) => {
                                        if (!formik.errors.lastName)
                                            e.target.style.borderColor = appearance.fieldFocusBorder;
                                    }}
                                    onBlur={(e) => {
                                        formik.handleBlur(e);
                                        e.target.style.borderColor = fieldErr(
                                            formik.touched.lastName,
                                            formik.errors.lastName
                                        )
                                            ? appearance.errorText
                                            : appearance.fieldBorder;
                                    }}
                                    placeholder={t("lastNamePlaceholder")}
                                />
                                {formik.touched.lastName && formik.errors.lastName && (
                                    <p className="text-xs mt-1" style={{ color: appearance.errorText }}>
                                        {formik.errors.lastName}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="mt-3 min-w-0">
                            <div
                                className="mb-1 text-[14px] font-normal"
                                style={{ color: appearance.labelColor }}
                            >
                                {t("emailLabel")}
                            </div>
                            <input
                                type="email"
                                {...formik.getFieldProps("email")}
                                className={inputBase}
                                style={{
                                    color: appearance.fieldText,
                                    borderColor: fieldErr(formik.touched.email, formik.errors.email)
                                        ? appearance.errorText
                                        : appearance.fieldBorder,
                                }}
                                onFocus={(e) => {
                                    if (!formik.errors.email)
                                        e.target.style.borderColor = appearance.fieldFocusBorder;
                                }}
                                onBlur={(e) => {
                                    formik.handleBlur(e);
                                    e.target.style.borderColor = fieldErr(
                                        formik.touched.email,
                                        formik.errors.email
                                    )
                                        ? appearance.errorText
                                        : appearance.fieldBorder;
                                }}
                                placeholder={t("emailPlaceholder")}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <p className="text-xs mt-1" style={{ color: appearance.errorText }}>
                                    {formik.errors.email}
                                </p>
                            )}
                        </div>

                        <div className="mt-3 min-w-0">
                            <div
                                className="mb-1 text-[14px] font-normal"
                                style={{ color: appearance.labelColor }}
                            >
                                {t("countryLabel")}
                            </div>
                            <div className="min-w-0">
                                <Select
                                    name="country"
                                    options={options}
                                    styles={selectStyles}
                                    onChange={(opt) => formik.setFieldValue("country", opt?.value)}
                                    onBlur={() => formik.setFieldTouched("country", true)}
                                    value={options?.find((opt) => opt.value === formik.values.country)}
                                    placeholder={t("countryPlaceholder")}
                                />
                            </div>
                            {formik.touched.country && formik.errors.country && (
                                <p className="text-xs mt-1" style={{ color: appearance.errorText }}>
                                    {formik.errors.country}
                                </p>
                            )}
                        </div>

                        <div className="mt-3 min-w-0">
                            <div
                                className="mb-1 text-[14px] font-normal"
                                style={{ color: appearance.labelColor }}
                            >
                                {t("phoneLabel")}
                            </div>

                            <div
                                className="phone-input-wrapper flex items-center rounded-[8px] border px-3 min-w-0 w-full"
                                style={{
                                    height: 46,
                                    backgroundColor: appearance.phoneWrapperBg,
                                    borderColor: fieldErr(formik.touched.phone, formik.errors.phone)
                                        ? appearance.errorText
                                        : appearance.fieldBorder,
                                }}
                            >
                                <PhoneInput
                                    international
                                    defaultCountry={
                                        countryData?.country_code || countryData?.country || "AE"
                                    }
                                    value={formik.values.phone}
                                    onChange={(phone) => formik.setFieldValue("phone", phone)}
                                    className="w-full min-w-0"
                                />
                            </div>

                            {formik.touched.phone && formik.errors.phone && (
                                <p className="text-xs mt-1" style={{ color: appearance.errorText }}>
                                    {formik.errors.phone}
                                </p>
                            )}
                        </div>

                        <div className="mt-3 flex flex-col md:flex-row items-stretch md:items-center gap-4 min-w-0">
                            <button
                                type="button"
                                onClick={sendPhoneVerificationCode}
                                disabled={phoneOtpLoading || !isPhoneValid}
                                className="h-[46px] w-full md:w-auto whitespace-nowrap rounded-[8px] border px-6 text-[14px] font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                                style={{
                                    borderColor: appearance.sendOtpBorder,
                                    backgroundColor: appearance.sendOtpBg,
                                    color: appearance.sendOtpText,
                                }}
                            >
                                {phoneOtpLoading ? t("sendingOtp") : t("sendOtp")}
                            </button>

                            <div className="w-full min-w-0">
                                <OtpInput
                                    value={formik.values.otp}
                                    onChange={(otp) => {
                                        formik.setFieldValue("otp", otp);
                                        if (otp?.length === 6) verifyOtpCode(otp);
                                    }}
                                    numInputs={6}
                                    containerStyle={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        gap: "8px",
                                        width: "100%",
                                        maxWidth: "100%",
                                    }}
                                    isInputNum
                                    renderInput={(props) => (
                                        <input
                                            {...props}
                                            type="tel"
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                        />
                                    )}
                                    inputStyle={{
                                        fontSize: "16px",
                                        borderRadius: "6px",
                                        paddingBottom: "10px",
                                        paddingTop: "10px",
                                        width: "44px",
                                        maxWidth: "44px",
                                        minWidth: "44px",
                                        textAlign: "center",
                                        backgroundColor: appearance.otpInputBg,
                                        color: appearance.otpInputText,
                                        fontWeight: "700",
                                        outlineColor: appearance.otpInputOutline,
                                        border:
                                            formik.touched.otp && formik.errors.otp
                                                ? `1px solid ${appearance.errorText}`
                                                : `1px solid ${appearance.otpInputBorder}`,
                                    }}
                                />
                            </div>
                        </div>

                        {formik.touched.otp && formik.errors.otp && (
                            <p className="text-xs mt-1" style={{ color: appearance.errorText }}>
                                {formik.errors.otp}
                            </p>
                        )}

                        <p
                            className="mt-3 text-[13px] font-normal leading-[1.5] break-words"
                            style={{ color: appearance.disclaimerMuted }}
                        >
                            <span className="font-medium" style={{ color: appearance.linkColor }}>
                                {t("disclaimerTitle")}
                            </span>{" "}
                            {t("disclaimerBefore")}{" "}
                            <a
                                className="underline break-words"
                                style={{ color: appearance.linkColor }}
                                href={links.clientAgreementPdf}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {t("clientAgreement")}
                            </a>
                            {t("disclaimerAfter")}
                        </p>

                        <label
                            className="mt-3 flex items-start gap-3 text-xs md:text-[13px] font-medium"
                            style={{ color: appearance.disclaimerMuted }}
                        >
                            <input
                                type="checkbox"
                                {...formik.getFieldProps("terms")}
                                className="mt-0.5 h-4 w-4 rounded border-[#D1D5DB]"
                                checked={formik.values.terms}
                            />
                            <span className="break-words">
                                {t("termsPrefix")}{" "}
                                <a
                                    className="underline"
                                    style={{ color: appearance.linkColor }}
                                    href={links.termsPdf}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {t("termsLink")}
                                </a>
                            </span>
                        </label>

                        {formik.touched.terms && formik.errors.terms && (
                            <p className="text-xs mt-1" style={{ color: appearance.errorText }}>
                                {formik.errors.terms}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={loading || !isOtpVerified}
                            className="mt-5 py-4 w-full rounded-xl text-[16px] font-medium transition hover:brightness-110 disabled:cursor-not-allowed"
                            style={
                                loading || !isOtpVerified
                                    ? {
                                          backgroundColor: appearance.submitDisabledBg,
                                          color: appearance.submitDisabledText,
                                      }
                                    : {
                                          background: `linear-gradient(to right, ${appearance.submitGradientFrom}, ${appearance.submitGradientTo})`,
                                          color: appearance.submitText,
                                      }
                            }
                        >
                            {loading ? t("submitting") : t("submit")}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}
