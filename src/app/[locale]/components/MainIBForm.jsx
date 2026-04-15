import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { RiLockPasswordLine, RiUserLocationLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { GiWorld } from "react-icons/gi";
import { MdManageAccounts } from "react-icons/md";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import OtpInput from "react-otp-input";
import useCountriesDetails from "@/context/useCountriesDetails";
import { useLocationDetail } from "@/context/useLocationDetail";
import { toast } from "react-toastify";

const MainIBForm = ({ messages = {} }) => {
    const params = useParams();
    const locale = params?.locale || "en";

    // Dictionary-based translation helper (matches how other modules work)
    const t = (key) => {
        if (!key) return "";
        const parts = String(key).split(".");
        let cur = messages;
        for (const part of parts) cur = cur?.[part];
        return typeof cur === "string" ? cur : "";
    };
    const { countryData } = useLocationDetail();
    const { countryList } = useCountriesDetails(locale);
    const [showOtp, setShowOtp] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadingOTP, setLoadingOTP] = useState(false);
    const [phoneOtpLoading, setPhoneOtpLoading] = useState(false);
    const [isOtpVerified, setIsOtpVerified] = useState(false);

    const platforms = [
        // { id: 1, name: "ECN Demo Account", value: "demo\\webECN.hedged" },
        { id: 1, name: t("mt5Account"), value: "demo\\web.hedged" },
    ];

    useEffect(() => {
        if (countryData?.country) {
            const filterData = countryList.find(
                (item) => item?.code === countryData.country
            );
            formik.setFieldValue(
                "country",
                filterData ? filterData?.nameInEnglish : ""
            );
        }
    }, [countryData?.country, countryList]);

    const [storedOtp, setStoredOtp] = useState("");
    const [state, setState] = useState({
        verifed: false,
    });

    const sendPhoneVerificationCode = async () => {
        if (!formik?.values?.phone) {
            toast.error(t("error.phone") || "Phone is required");
            return;
        }
        if (!isValidPhoneNumber(formik?.values?.phone)) {
            toast.error(t("error.phoneInvalid") || "Invalid phone number");
            return;
        }

        setPhoneOtpLoading(true);

        try {
            const res = await axios.post(`/api/send-phone-otp`, {
                phone: formik.values.phone,
                first_name: formik.values.nickname,
                locale,
                channel: "whatsapp",
            });

            if (res?.data?.success || res?.data?.message) {
                setState((st) => ({
                    ...st,
                    verifed: false,
                }));
                formik.setFieldValue("otp", "");
                setShowOtp(true);
                toast.success(t("sentPhone") || "OTP sent successfully");
            } else {
                toast.error(res?.data?.message || t("error") || "An error occurred");
            }
        } catch (err) {
            setShowOtp(false);
            toast.error(
                err?.response?.data?.message ||
                err?.message ||
                t("error") ||
                "An error occurred"
            );
        } finally {
            setPhoneOtpLoading(false);
        }
    };

    // verify OTP server-side
    const verifyOtpCode = async (otp) => {
        if (!otp || otp.length !== 6) {
            return;
        }

        try {
            const res = await axios.post("/api/verify-otp", {
                phone: formik.values.phone,
                otp: otp,
            });

            if (res?.data?.success) {
                toast.success(t("otpSuccess") || "OTP verified successfully");
                setShowOtp(false);
                setIsOtpVerified(true); // Mark OTP as verified
            } else {
                toast.error(res?.data?.message || t("otpFail") || "Invalid OTP");
                setIsOtpVerified(false); // Ensure it's false on failure
            }
        } catch (error) {
            console.error("OTP verification error:", error);
            toast.error(
                error?.response?.data?.message ||
                error?.message ||
                t("otpFail") ||
                "Failed to verify OTP"
            );
            setIsOtpVerified(false); // Ensure it's false on error
        }
    };

    const generatePassword = (length = 12) => {
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const number = "0123456789";
        const special = "!@#$%^&*";

        const all = lower + upper + number + special;

        // Ensure at least one of each type
        const password = [
            lower[Math.floor(Math.random() * lower.length)],
            upper[Math.floor(Math.random() * upper.length)],
            number[Math.floor(Math.random() * number.length)],
            special[Math.floor(Math.random() * special.length)],
        ];

        // Fill the rest with random chars
        for (let i = password.length; i < length; i++) {
            password.push(all[Math.floor(Math.random() * all.length)]);
        }

        // Shuffle to avoid predictable positions
        return password.sort(() => Math.random() - 0.5).join("");
    };

    const formik = useFormik({
        initialValues: {
            nickname: "",
            email: "",
            phone: "",
            password: generatePassword(),
            invest_password: generatePassword(),
            confirm_password: "",
            country: "",
            /* platform: "", */
            otp: "",
            terms: false,
        },
        validationSchema: Yup.object({
            nickname: Yup.string().required(t("error.firstName")),
            email: Yup.string()
                .email(t("error.emailInvalid") || "Invalid email address")
                .required(t("error.email")),
            phone: Yup.string().required(t("error.phone")),
            country: Yup.string().required(t("error.country")),
            otp: Yup.string()
                .length(6, t("error.otpLength") || "OTP must be 6 digits")
                .required(t("error.otpRequired") || "OTP is required"),
            terms: Yup.bool().oneOf([true], t("error.termOfService")),
        }),
        onSubmit: async (values) => {
            // Check if OTP is verified before submitting
            if (!isOtpVerified) {
                toast.error(
                    "Please verify your phone number with OTP before submitting."
                );
                setLoading(false);
                return;
            }

            setLoading(true);
            try {
                // Analytics (non-blocking)

                const validationResponse = await axios.post(`/api/validate-email`, {
                    email: formik.values.email,
                });

                if (!validationResponse.data.valid) {
                    toast.error(
                        t("invalidEmail") ||
                        "Invalid email address. Please use a valid email."
                    );
                    return;
                }
                try {
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({ event: "formSubmission", formName: "Form" });
                } catch { }

                // Build payloads once
                const payloadForm = {
                    first_name: formik?.values?.nickname,
                    phone: formik?.values?.phone,
                    email: formik?.values?.email,
                    password: `${formik?.values?.password}`,
                    company: "no",
                    country: formik?.values?.country,
                    group: formik?.values?.platform,
                    invest_password: `${formik?.values?.invest_password}`,
                };

                // 1) Create MT5 account (must succeed first)
                const mt5Res = await axios.post("/api/mt5-server", payloadForm);

                if (!mt5Res?.data?.success) {
                    toast.error(mt5Res?.data?.message || "MT5 account creation failed.");
                    return; // stop here if MT5 failed
                }

                toast.success(mt5Res?.data?.message || "MT5 account created.");
                const mt5User = mt5Res?.data?.data?.user;

                // Optional UI resets
                formik.resetForm();
                setShowOtp?.(false);

                // 2) Fire Zapier + Email AFTER MT5 success (run in parallel; don’t block redirect)
                const zapierWebhookUrl =
                    "https://hooks.zapier.com/hooks/catch/16420445/3ajp4wk/"; // <- adjust if you use a direct Zapier hook

                const emailPayload = {
                    name: formik?.values?.nickname,
                    phone: formik?.values?.phone,
                    email: formik?.values?.email,
                    password: formik?.values?.password,
                    user: mt5User,
                    invest_password: formik?.values?.invest_password,
                    server_name: formik?.values?.platform,
                };

                // Fire both; handle outcomes individually
                const [zapierResult, emailResult] = await Promise.allSettled([
                    axios.post(zapierWebhookUrl, JSON.stringify(values)),
                    axios.post("/api/mt5-completion-mail", emailPayload),
                ]);

                if (zapierResult.status === "fulfilled") {
                    const ok = zapierResult.value?.data?.success ?? true;
                    ok
                        ? toast.success(
                            zapierResult.value?.data?.message || "Synced with CRM/Zapier."
                        )
                        : toast.error(
                            zapierResult.value?.data?.message ||
                            "Zapier sync reported an issue."
                        );
                } else {
                    toast.error("Zapier sync failed.");
                }

                if (emailResult.status === "fulfilled") {
                    const ok = emailResult.value?.data?.success ?? true;
                    ok
                        ? toast.success(
                            emailResult.value?.data?.message || "Confirmation email sent."
                        )
                        : toast.error(
                            emailResult.value?.data?.message ||
                            "Email service reported an issue."
                        );
                } else {
                    toast.error("Failed to send confirmation email.");
                }

                // 3) Redirect (success path)
                window.location.href = `/${locale}/thank-you`;
            } catch (err) {
                // Top-level failure (network/unexpected)
                const apiMsg =
                    err?.response?.data?.message ||
                    err?.message ||
                    "Something went wrong. Please try again.";
                toast.error(apiMsg);
            } finally {
                setLoading(false);
            }
        },
    });

    return (
        <section className="demo-account">
            <div className="demo">

                <div className="relative">
                    <form
                        onSubmit={formik.handleSubmit}
                        className="bg-white relative text-gray-700 rounded-b-xl mx-auto"
                    >
                        {/* Full Name & Email */}
                        <div className="grid grid-cols-1 gap-4 mb-3">
                            <div className="relative">
                                <RiUserLocationLine className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
                                <input
                                    type="text"
                                    className={`w-full px-4 bg-white py-3 pl-9 border ${formik.touched.nickname && formik.errors.nickname ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none`}
                                    placeholder={t("firstName")}
                                    {...formik.getFieldProps("nickname")}
                                />
                                {formik.touched.nickname && formik.errors.nickname && (
                                    <p className="text-red-500 text-sm">
                                        {formik.errors.nickname}
                                    </p>
                                )}
                            </div>
                            <div className="relative">
                                <CiMail className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
                                <input
                                    type="email"
                                    className={`w-full bg-white px-4 py-3 pl-9 border ${formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none`}
                                    placeholder={t("email")}
                                    {...formik.getFieldProps("email")}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <p className="text-red-500 text-sm">{formik.errors.email}</p>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 mb-4">
                            <div className="relative">
                                <PhoneInput
                                    international
                                    countryCallingCodeEditable={false}
                                    defaultCountry="AE"
                                    value={formik.values.phone}
                                    onChange={(phone) => formik.setFieldValue("phone", phone)}
                                    className={`w-full px-4 py-3 border ${formik.touched.phone && formik.errors.phone ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none`}
                                />
                                {formik.touched.phone && formik.errors.phone && (
                                    <p className="text-red-500 text-sm">{formik.errors.phone}</p>
                                )}
                                <button
                                    type="button"
                                    onClick={sendPhoneVerificationCode}
                                    disabled={
                                        phoneOtpLoading ||
                                        !formik.values.phone ||
                                        !isValidPhoneNumber(formik.values.phone)
                                    }
                                    className="absolute top-2.5 bg-primary right-3 rounded-md cursor-pointer text-white py-1.5 px-2 text-xs disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {phoneOtpLoading ? t("sending") : t("getCode")}
                                </button>
                            </div>
                            {showOtp && !state.verifed && (
                                <div className="grid grid-cols-1 gap-2 mb-4">
                                    <div />
                                    <div className=" flex items-end gap-1">
                                        <div>
                                            <p className="mb-1">{t("otpSendPhone")}</p>
                                            <OtpInput
                                                value={formik.values.otp}
                                                onChange={(otp) => {
                                                    formik.setFieldValue("otp", otp);
                                                    if (otp?.length == 6) {
                                                        verifyOtpCode(otp);
                                                    }
                                                }}
                                                numInputs={6}
                                                containerStyle={{
                                                    justifyContent: "space-around",
                                                    alignItems: "center",
                                                    gap: "5px",
                                                }}
                                                renderInput={(props) => (
                                                    <input
                                                        {...props}
                                                        type="tel"
                                                        inputMode="numeric"
                                                        pattern="[0-9]*"
                                                    />
                                                )}
                                                isInputNum
                                                inputStyle={{
                                                    fontSize: "16px",
                                                    borderRadius: "5px",
                                                    paddingBottom: "8px",
                                                    paddingTop: "8px",
                                                    width: "20%",
                                                    backgroundColor: "#f3f4f6",
                                                    color: "#000",
                                                    fontWeight: "700",
                                                    outlineColor: "#f9c617",
                                                    border:
                                                        formik.touched.otp && formik.errors.otp
                                                            ? "1px solid red"
                                                            : "1px solid gray",
                                                }}
                                            />
                                            {formik.touched.otp && formik.errors.otp && (
                                                <p className="text-red-500 text-sm mt-2">
                                                    {formik.errors.otp}
                                                </p>
                                            )}
                                        </div>
                                        {/* <div>
                    <button
                      disabled={state?.verifed === true}
                      type="button"
                      className=" bg-primary whitespace-pre right-3 rounded-md cursor-pointer text-white  py-2 px-2"
                      onClick={(e) => {
                        e.preventDefault();
                        verifyPhoneOtp(formik.values.otp);
                      }}
                    >
                      {t("verifyOTP")}
                    </button>
                  </div> */}
                                    </div>
                                </div>
                            )}
                            <div className="relative">
                                <MdManageAccounts className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
                                <select
                                    className={`w-full bg-white px-4 py-3 pl-9 border ${formik.touched.platform && formik.errors.platform ? "border-red-500" : "border-gray-300"} rounded-lg text-gray-700`}
                                    {...formik.getFieldProps("platform")}
                                >
                                    <option value="">{t("accountType")}</option>
                                    {platforms.map((item) => (
                                        <option key={item.id} value={item.value}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                                {formik.touched.platform && formik.errors.platform && (
                                    <p className="text-red-500 text-sm">
                                        {formik.errors.platform}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Password & Confirm Password */}
                        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <RiLockPasswordLine className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
                <input
                  type="password"
                  className={`w-full px-4 bg-white py-3 pl-9 border ${formik.touched.password && formik.errors.password ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none`}
                  placeholder="Password"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-sm">{formik.errors.password}</p>
                )}
              </div>
              <div className="relative">
                <RiLockPasswordLine className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
                <input
                  type="password"
                  className={`w-full bg-white px-4 py-3 pl-9 border ${formik.touched.confirm_password && formik.errors.confirm_password ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none`}
                  placeholder="Confirm Password"
                  {...formik.getFieldProps("confirm_password")}
                />
                {formik.touched.confirm_password && formik.errors.confirm_password && (
                  <p className="text-red-500 text-sm">{formik.errors.confirm_password}</p>
                )}
              </div>
            </div> */}

                        <div className="relative mb-4">
                            <GiWorld className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
                            <select
                                className={`w-full bg-white px-4 py-3 pl-9 border ${formik.touched.country && formik.errors.country ? "border-red-500" : "border-gray-300"} rounded-lg text-gray-700`}
                                {...formik.getFieldProps("country")}
                            >
                                <option value="">{t("accountType")}</option>
                                {countryList.map((item) => (
                                    <option key={item?.code} value={item?.nameInEnglish}>
                                        {item?.name}
                                    </option>
                                ))}
                            </select>
                            {formik.touched.country && formik.errors.country && (
                                <p className="text-red-500 text-sm">{formik.errors.country}</p>
                            )}
                        </div>
                        <div>
                            <label
                                className={`block text-sm pb-2 ${formik.touched.terms && formik.errors.terms
                                    ? "text-red-500"
                                    : ""
                                    }`}
                                htmlFor="terms"
                            >
                                {formik.touched.terms && formik.errors.terms
                                    ? formik.errors.terms
                                    : t("termOfService")}
                            </label>
                            <div className="flex items-center gap-1">
                                <input
                                    type="checkbox"
                                    name="terms"
                                    id="terms"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value="checked"
                                    className="h-5 w-5"
                                />
                                <p className="inline px-3 text-[10px] text-primary">
                                    {t("termText")}
                                    <a
                                        className="text-secondary\"
                                        href="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/pdf-files/Vanuatu.pdf"
                                    >
                                        {" "}
                                        {t("termText2")}
                                    </a>
                                    ; (2) {t("termText3")}.
                                </p>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center mt-3">
                            <button
                                disabled={!isOtpVerified}
                                type="submit"
                                className="bg-primary text-white font-semibold py-1 px-8 rounded-xl text-lg"
                            >
                                {loading ? t("sending") : t("submit")}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default MainIBForm;
