"use client";

import { useState, useEffect, useMemo } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import ReCAPTCHA from "react-google-recaptcha";
import useCountriesDetails from "@/context/useCountriesDetails";
import { useLocationDetail } from "@/context/useLocationDetail";


const getBaseInitialValues = () => ({
  registration_status: "",
  query_type: "General Query",
  email: "",
  first_name: "",
  last_name: "",
  phone: "",
  country: "",
  ticket_type: "",
  complaint_type: "",
  trading_complaint_type: "",
  promotion_bonus_type: "",
  trade_account: "",
  transaction_ids: "",
  trade_order_ids: "",
  date_time_incident: "",
  deposit_amount: "",
  subject: "",
  message: "",
  attachment: null,
  captchaToken: "",
});

const getValidationSchema = (text) =>
  Yup.lazy((values) => {
    const base = {
      registration_status: Yup.string().required(
        text("errorRegistrationStatus", "Registration status is required")
      ),
      query_type: Yup.string().required(
        text("errorQueryType", "Query type is required")
      ),
      email: Yup.string()
        .email(text("errorInvalidEmail", "Invalid email"))
        .required(text("errorEmail", "Email is required")),
      first_name: Yup.string()
        .min(2, text("errorMinLetters", "At least 2 letters"))
        .required(text("errorFirstName", "First name is required")),
      last_name: Yup.string()
        .min(2, text("errorMinLetters", "At least 2 letters"))
        .required(text("errorLastName", "Last name is required")),
      phone: Yup.string().required(text("errorPhone", "Phone is required")),
      country: Yup.string().required(text("errorCountry", "Country is required")),
      subject: Yup.string().required(text("errorSubject", "Subject is required")),
      message: Yup.string().required(
        text("errorDescription", "Description is required")
      ),
      captchaToken: Yup.string().required(
        text("errorCaptcha", "Please complete the captcha")
      ),
    };
    // Ticket type required only when Query type is General Query
    if (values.query_type === "General Query") {
      base.ticket_type = Yup.string().required(
        text("errorTicketType", "Ticket type is required")
      );
    }

    const ticket = values.ticket_type;

    if (ticket === "Promotions/Bonuses") {
      base.promotion_bonus_type = Yup.string().required(
        text("errorPromotionBonusType", "Promotion/Bonus type is required")
      );
    }

    if (ticket === "Trading investigation") {
      base.trade_account = Yup.string().required(
        text("errorTradeAccount", "Trade account is required")
      );
      base.trade_order_ids = Yup.string().required(
        text("errorTradeOrderIds", "Trade order(s) ID is required")
      );
      base.date_time_incident = Yup.string().required(
        text("errorDateTimeIncident", "Date and time of incident is required")
      );
    }

    if (ticket === "Add account opening links" || ticket === "Partner / Client Transfer Request") {
      base.trade_account = Yup.string().required(
        text("errorTradeAccount", "Trade account is required")
      );
    }

    if (ticket === "KYC queries") {
      base.trade_account = Yup.string().required(
        text("errorTradeAccount", "Trade account is required")
      );
    }

    return Yup.object().shape(base);
  });

const inputClass = (touched, error) =>
  `block w-full rounded-lg bg-white px-3 py-2.5 text-[15px] leading-6 text-gray-900 placeholder:text-gray-400 shadow-sm ring-1 ring-inset outline-none transition ${touched && error
    ? "ring-red-600 focus:ring-red-600"
    : "ring-gray-200 focus:ring-primary/80"
  } focus:ring-2`;

const selectClass = (touched, error) =>
  `w-full appearance-none rounded-lg bg-white bg-[url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2020%2020'%20fill='none'%3E%3Cpath%20d='M6%208l4%204%204-4'%20stroke='%236B7280'%20stroke-width='1.8'%20stroke-linecap='round'%20stroke-linejoin='round'/%3E%3C/svg%3E")] bg-no-repeat bg-[position:right_0.85rem_center] bg-[length:14px_14px] pl-3 pr-12 py-2.5 text-[15px] leading-6 text-gray-900 shadow-sm ring-1 ring-inset outline-none transition ${touched && error
    ? "ring-red-600 focus:ring-red-600"
    : "ring-gray-200 focus:ring-primary/80"
  } focus:ring-2`;

const ContactForm = ({ locale = "en", messages = {} }) => {
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("AE");
  const router = useRouter();

  const text = (key, fallback) => {
    const v = messages?.[key];
    return typeof v === "string" && v.length ? v : fallback;
  };

  const { countryList } = useCountriesDetails(locale);
  const { countryData } = useLocationDetail();

  const REGISTRATION_OPTIONS = useMemo(
    () => [
      { value: "", label: text("registrationStatusSelect", "Select registration status") },
      { value: "Registered", label: text("registrationStatusRegistered", "Registered") },
      { value: "Not Registered", label: text("registrationStatusNotRegistered", "Not Registered") },
    ],
    [messages]
  );

  const QUERY_TYPE_OPTIONS = useMemo(
    () => [
      { value: "", label: text("queryTypeSelect", "Select query type") },
      { value: "General Query", label: text("queryTypeGeneral", "General Query") },
      { value: "Compliance Query", label: text("queryTypeCompliance", "Compliance Query") },
    ],
    [messages]
  );

  const TICKET_TYPES = useMemo(
    () => [
      { value: "", label: text("ticketTypeSelect", "Select ticket type") },
      { value: "Account/Registration", label: text("ticketTypeAccountRegistration", "Account/Registration") },
      { value: "Deposits", label: text("ticketTypeDeposits", "Deposits") },
      { value: "Withdrawals", label: text("ticketTypeWithdrawals", "Withdrawals") },
      { value: "Trading account queries", label: text("ticketTypeTradingAccountQueries", "Trading account queries") },
      { value: "Add account opening links", label: text("ticketTypeAccountOpeningLinks", "Add account opening links") },
      { value: "Partner / Client Transfer Request", label: text("ticketTypePartnerClientTransfer", "Partner / Client Transfer Request") },
      { value: "Promotions/Bonuses", label: text("ticketTypePromotionsBonuses", "Promotions/Bonuses") },
      { value: "Trading investigation", label: text("ticketTypeTradingInvestigation", "Trading investigation") },
      // { value: "Complaint", label: t("options.ticketType.complaint") },
      { value: "KYC queries", label: text("ticketTypeKycQueries", "KYC queries") },
      { value: "Other", label: text("ticketTypeOther", "Other") },
    ],
    [messages]
  );


  const PROMOTION_BONUS_TYPES = useMemo(
    () => [
      { value: "", label: text("promotionBonusTypeSelect", "Select type") },
      { value: "Issue", label: text("promotionBonusTypeIssue", "Issue") },
      { value: "Request", label: text("promotionBonusTypeRequest", "Request") },
    ],
    [messages]
  );

  const formik = useFormik({
    initialValues: getBaseInitialValues(),
    validationSchema: getValidationSchema(text),
    onSubmit: async (values) => {
      try {
        setLoading(true);

        // Build attachment base64 for support email / Zapier (flat payload)
        let attachmentBase64 = null;
        if (values.attachment?.size > 0) {
          attachmentBase64 = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
              const dataUrl = reader.result;
              const base64 = dataUrl?.includes(",") ? dataUrl.split(",")[1] : dataUrl;
              resolve(base64);
            };
            reader.onerror = reject;
            reader.readAsDataURL(values.attachment);
          });
        }

        // Build files array for Salesforce: [{ fileName, contentType, base64Data }]
        const files = [];
        if (values.attachment?.size > 0) {
          files.push({
            fileName: values.attachment.name,
            contentType: values.attachment.type || "application/octet-stream",
            base64Data: attachmentBase64,
          });
        }

        // Dynamic fields (only include if filled) – sent inside additionalFields for Salesforce
        const additionalFields = {};
        if (values.complaint_type) additionalFields.complaintType = values.complaint_type;
        if (values.trading_complaint_type) additionalFields.tradingComplaintType = values.trading_complaint_type;
        if (values.promotion_bonus_type) additionalFields.promotionBonusType = values.promotion_bonus_type;
        if (values.trade_account) additionalFields.tradingAccount = values.trade_account;
        if (values.transaction_ids) additionalFields.transactionId = values.transaction_ids;
        if (values.trade_order_ids) additionalFields.tradeOrderIds = values.trade_order_ids;
        if (values.date_time_incident) additionalFields.dateTimeIncident = values.date_time_incident;
        if (values.deposit_amount) additionalFields.depositAmount = values.deposit_amount;
        if (values.query_type) additionalFields.queryType = values.query_type;

        // For Compliance Query we don't have a ticket type selection; send query type as ticketType
        const ticketTypeValue = values.query_type === "Compliance Query" ? "Compliance Query" : values.ticket_type;

        // Payload in exact Salesforce Contact Us API structure
        const salesforcePayload = {
          email: values.email,
          firstName: values.first_name,
          lastName: values.last_name,
          phone: values.phone,
          country: values.country,
          ticketType: ticketTypeValue,
          subject: values.subject,
          description: values.message,
          registeredClient: values.registration_status,
          additionalFields,
          query_type: values.query_type,
          files,
          recaptchaToken: values.captchaToken,
        };

        // Legacy flat payload for send-support-email and Zapier
        const supportPayload = {
          ...values,
          attachment_name: values.attachment?.name || null,
          attachment_base64: attachmentBase64,
        };
        delete supportPayload.attachment;

        // 1) Submit to Salesforce (required for success)
        const res = await fetch("/api/sales-force-with-auth", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(salesforcePayload),
        });

        const data = await res.json().catch(() => ({}));
        if (!res.ok || data.status === "error") {
          throw new Error(data.message || "Failed to submit to Salesforce");
        }

        // 2) Also send support email and to Zapier (non-blocking)
        try {
          await fetch("/api/send-support-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(supportPayload),
          });
        } catch (_) { }

        toast.success(text("toastSubmitted", "Submitted successfully."));
        formik.resetForm({ values: getBaseInitialValues() });
        router.push(`/${locale}/thank-you`);
      } catch (error) {
        console.error(error);
        toast.error(error?.message || text("toastError", "An error occurred."));
      } finally {
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    if (countryData?.country) {
      const matched = countryList.find((c) => c.code === countryData.country);
      if (matched) {
        formik.setFieldValue("country", matched.nameInEnglish);
        setCountryCode(matched.code);
      }
    }
  }, [countryData?.country, countryList]);

  const ticketType = formik.values.ticket_type;
  const complaintType = formik.values.complaint_type;
  const showDepositDisclaimer =
    ticketType === "Deposits";
  const showWithdrawalDisclaimer =
    ticketType === "Withdrawals";

  const showTradeAccount =
    ([
      "Account/Registration",
      "Deposits",
      "Withdrawals",
      "Trading account queries",
      "Add account opening links",
      "Partner / Client Transfer Request",
      "Promotions/Bonuses",
      "Trading investigation",
      "KYC queries",
      "Other",
    ].includes(ticketType) ||
      (ticketType === "Complaint" && complaintType));
  const tradeAccountRequired =
    ["Add account opening links", "Partner / Client Transfer Request", "Trading investigation", "KYC queries"].includes(ticketType) ||
    (ticketType === "Complaint" && ["Trading Issues", "Deposits / Withdrawals"].includes(complaintType));

  const showTransactionIds = ticketType === "Deposits" || ticketType === "Withdrawals" || (ticketType === "Complaint" && complaintType === "Deposits / Withdrawals");
  const showTradeOrderIds = ticketType === "Trading investigation" || (ticketType === "Complaint" && complaintType === "Trading Issues");
  const showDateTimeIncident = ticketType === "Trading investigation" || (ticketType === "Complaint" && complaintType === "Trading Issues");
  const showPromotionBonusType = ticketType === "Promotions/Bonuses";
  const showDepositAmount = ticketType === "Promotions/Bonuses";
  const showTradingComplaintType = ticketType === "Complaint" && complaintType === "Trading Issues";


  return (
    <div className="p-4 md:p-8 rounded-2xl border border-gray-200 bg-white shadow-sm">
      <form onSubmit={formik.handleSubmit}>
        <div className="space-y-6">
          {/* Two-column layout (fixed left/right) */}
          <div className=" text-left">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Left Column */}
              <div className="space-y-4">
                {/* Are you a registered client? */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 ltr:text-left rtl:text-right">
                    {text("registrationStatusLabel", "Are you a registered client?")} *
                  </label>
                  <select
                    name="registration_status"
                    className={selectClass(
                      formik.touched.registration_status,
                      formik.errors.registration_status
                    )}
                    value={formik.values.registration_status}
                    onChange={(e) => {
                      formik.handleChange(e);
                      const status = e.target.value;
                      if (status === "Not Registered") {
                        formik.setFieldValue("ticket_type", "Lead");
                        formik.setFieldValue("complaint_type", "");
                        formik.setFieldValue("trading_complaint_type", "");
                        formik.setFieldValue("promotion_bonus_type", "");
                      } else {
                        formik.setFieldValue("ticket_type", "");
                      }
                    }}
                    onBlur={formik.handleBlur}
                  >
                    {REGISTRATION_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {formik.touched.registration_status &&
                    formik.errors.registration_status && (
                      <p className="text-red-600 text-xs mt-1 rtl:text-right ltr:text-left">
                        {formik.errors.registration_status}
                      </p>
                    )}
                </div>

                {/* Query type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 ltr:text-left rtl:text-right">
                    {text("queryTypeLabel", "Query type")} *
                  </label>
                  <select
                    name="query_type"
                    className={selectClass(
                      formik.touched.query_type,
                      formik.errors.query_type
                    )}
                    value={formik.values.query_type}
                    onChange={(e) => {
                      formik.handleChange(e);
                      const q = e.target.value;
                      if (q === "Compliance Query") {
                        formik.setFieldValue("ticket_type", "");
                        formik.setFieldValue("complaint_type", "");
                        formik.setFieldValue("trading_complaint_type", "");
                        formik.setFieldValue("promotion_bonus_type", "");
                      }
                    }}
                    onBlur={formik.handleBlur}
                  >
                    {QUERY_TYPE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {formik.touched.query_type && formik.errors.query_type && (
                    <p className="text-red-600 text-xs mt-1 rtl:text-right ltr:text-left">
                      {formik.errors.query_type}
                    </p>
                  )}
                </div>

                {/* Ticket type */}
                {formik.values.query_type === "General Query" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 ltr:text-left rtl:text-right">
                      {text("ticketTypeLabel", "Ticket type")} *
                    </label>
                    <select
                      name="ticket_type"
                      className={selectClass(
                        formik.touched.ticket_type,
                        formik.errors.ticket_type
                      )}
                      value={formik.values.ticket_type}
                      onChange={(e) => {
                        formik.handleChange(e);
                        formik.setFieldValue("complaint_type", "");
                        formik.setFieldValue("trading_complaint_type", "");
                        formik.setFieldValue("promotion_bonus_type", "");
                      }}
                      onBlur={formik.handleBlur}
                    >
                      {TICKET_TYPES.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {formik.touched.ticket_type &&
                      formik.errors.ticket_type && (
                        <p className="text-red-600 text-xs mt-1 rtl:text-right ltr:text-left">
                          {formik.errors.ticket_type}
                        </p>
                      )}
                  </div>
                )}

                {formik.values.query_type === "Compliance Query" && (
                  <div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1 ltr:text-left rtl:text-right">
                        {text("tradeAccountLabel", "Trade account")} {tradeAccountRequired ? "*" : ""}
                      </label>
                      <input
                        type="text"
                        name="trade_account"
                        placeholder={text("tradeAccountPlaceholder", "Trade account")}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.trade_account}
                        className={inputClass(formik.touched.trade_account, formik.errors.trade_account)}
                      />
                      {formik.touched.trade_account && formik.errors.trade_account && (
                        <p className="text-red-600 text-xs mt-1 rtl:text-right ltr:text-left">{formik.errors.trade_account}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Additional Dynamic fields */}
                {(showPromotionBonusType ||
                  showTransactionIds ||
                  showTradeOrderIds ||
                  showTradeAccount ||
                  showDateTimeIncident ||
                  showDepositAmount) && (
                    <div className="">
                      {showTradeAccount && (
                        <div className="mb-3">
                          <label className="block text-sm font-medium text-gray-700 mb-1 ltr:text-left rtl:text-right">
                            {text("tradeAccountLabel", "Trade account")} {tradeAccountRequired ? "*" : ""}
                          </label>
                          <input
                            type="text"
                            name="trade_account"
                            placeholder={text("tradeAccountPlaceholder", "Trade account")}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.trade_account}
                            className={inputClass(formik.touched.trade_account, formik.errors.trade_account)}
                          />
                          {formik.touched.trade_account && formik.errors.trade_account && (
                            <p className="text-red-600 text-xs mt-1 rtl:text-right ltr:text-left">{formik.errors.trade_account}</p>
                          )}
                        </div>
                      )}
                      {showTransactionIds && (
                        <div className="mb-3">
                          <label className="block text-sm font-medium text-gray-700 mb-1 ltr:text-left rtl:text-right">
                            {text("transactionIdsLabel", "Transaction ID(s)")}
                          </label>
                          <input
                            type="text"
                            name="transaction_ids"
                            placeholder={text("transactionIdsPlaceholder", "Transaction ID(s)")}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.transaction_ids}
                            className={inputClass(false, false)}
                          />
                        </div>
                      )}

                      {showTradeOrderIds && (
                        <div className="mb-3">
                          <label className="block text-sm font-medium text-gray-700 mb-1 ltr:text-left rtl:text-right">
                            {text("tradeOrderIdsLabel", "Trade order(s) ID")} *
                          </label>
                          <input
                            type="text"
                            name="trade_order_ids"
                            placeholder={text("tradeOrderIdsPlaceholder", "Trade order(s) ID")}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.trade_order_ids}
                            className={inputClass(
                              formik.touched.trade_order_ids,
                              formik.errors.trade_order_ids
                            )}
                          />
                          {formik.touched.trade_order_ids &&
                            formik.errors.trade_order_ids && (
                              <p className="text-red-600 text-xs mt-1 rtl:text-right ltr:text-left">
                                {formik.errors.trade_order_ids}
                              </p>
                            )}
                        </div>
                      )}

                      {showDateTimeIncident && (
                        <div className="mb-3">
                          <label className="block text-sm font-medium text-gray-700 mb-1 ltr:text-left rtl:text-right">
                            {text("dateTimeIncidentLabel", "Date and time of incident")} *
                          </label>
                          <input
                            type="text"
                            name="date_time_incident"
                            placeholder={text("dateTimeIncidentPlaceholder", "e.g. 2024-01-15 14:30")}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.date_time_incident}
                            className={inputClass(
                              formik.touched.date_time_incident,
                              formik.errors.date_time_incident
                            )}
                          />
                          {formik.touched.date_time_incident &&
                            formik.errors.date_time_incident && (
                              <p className="text-red-600 text-xs mt-1 rtl:text-right ltr:text-left">
                                {formik.errors.date_time_incident}
                              </p>
                            )}
                        </div>
                      )}

                      {showPromotionBonusType && (
                        <div className="mb-3">
                          <label className="block text-sm font-medium text-gray-700 mb-1 ltr:text-left rtl:text-right">
                            {text("promotionBonusTypeLabel", "Promotion/Bonus type")} *
                          </label>
                          <select
                            name="promotion_bonus_type"
                            className={selectClass(
                              formik.touched.promotion_bonus_type,
                              formik.errors.promotion_bonus_type
                            )}
                            value={formik.values.promotion_bonus_type}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          >
                            {PROMOTION_BONUS_TYPES.map((opt) => (
                              <option key={opt.value} value={opt.value}>
                                {opt.label}
                              </option>
                            ))}
                          </select>
                          {formik.touched.promotion_bonus_type &&
                            formik.errors.promotion_bonus_type && (
                              <p className="text-red-600 text-xs mt-1 rtl:text-right ltr:text-left">
                                {formik.errors.promotion_bonus_type}
                              </p>
                            )}
                        </div>
                      )}

                      {showDepositAmount && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1 ltr:text-left rtl:text-right">
                            {text("depositAmountLabel", "Deposit amount")}
                          </label>
                          <input
                            type="text"
                            name="deposit_amount"
                            placeholder={text("depositAmountPlaceholder", "Deposit amount")}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.deposit_amount}
                            className={inputClass(false, false)}
                          />
                        </div>
                      )}
                    </div>
                  )}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 ltr:text-left rtl:text-right">
                    {text("subjectLabel", "Subject")} *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder={text("subjectPlaceholder", "Subject")}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subject}
                    className={inputClass(formik.touched.subject, formik.errors.subject)}
                  />
                  {formik.touched.subject && formik.errors.subject && (
                    <p className="text-red-600 text-xs mt-1 rtl:text-right ltr:text-left">{formik.errors.subject}</p>
                  )}
                </div>

              </div>

              {/* Right Column */}
              <div className="space-y-4">

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 ltr:text-left rtl:text-right">
                    {text("firstNameLabel", "First name")} *
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    placeholder={text("firstNamePlaceholder", "First name")}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.first_name}
                    className={inputClass(formik.touched.first_name, formik.errors.first_name)}
                  />
                  {formik.touched.first_name && formik.errors.first_name && (
                    <p className="text-red-600 text-xs mt-1 rtl:text-right ltr:text-left">{formik.errors.first_name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 ltr:text-left rtl:text-right">
                    {text("lastNameLabel", "Last name")} *
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    placeholder={text("lastNamePlaceholder", "Last name")}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.last_name}
                    className={inputClass(formik.touched.last_name, formik.errors.last_name)}
                  />
                  {formik.touched.last_name && formik.errors.last_name && (
                    <p className="text-red-600 text-xs mt-1 rtl:text-right ltr:text-left">{formik.errors.last_name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 ltr:text-left rtl:text-right">
                    {text("emailLabel", "Email")} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder={text("emailPlaceholder", "Email")}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={inputClass(formik.touched.email, formik.errors.email)}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-600 text-xs mt-1 rtl:text-right ltr:text-left">{formik.errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 ltr:text-left rtl:text-right">
                    {text("phoneLabel", "Phone number")} *
                  </label>
                  <PhoneInput
                    international
                    countryCallingCodeEditable={false}
                    defaultCountry={countryCode}
                    value={formik.values.phone}
                    onChange={(phone) => formik.setFieldValue("phone", phone)}
                    onBlur={() => formik.setFieldTouched("phone", true)}
                    className={`w-full rounded-lg bg-white px-3 py-2.5 text-[15px] leading-6 text-gray-900 shadow-sm ring-1 ring-inset outline-none transition focus:ring-2 ${formik.touched.phone && formik.errors.phone
                      ? "ring-red-600 focus:ring-red-600"
                      : "ring-gray-200 focus:ring-primary/80"
                      }`}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="text-red-600 text-xs mt-1 rtl:text-right ltr:text-left">{formik.errors.phone}</p>
                  )}
                </div>




                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 ltr:text-left rtl:text-right">
                    {text("countryLabel", "Country")} *
                  </label>
                  <select
                    className={selectClass(formik.touched.country, formik.errors.country)}
                    name="country"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="" disabled hidden>
                      {text("countrySelect", "Select country")}
                    </option>
                    {countryList.map((country, index) => (
                      <option key={index} value={country.nameInEnglish}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                  {formik.touched.country && formik.errors.country && (
                    <p className="text-red-600 text-xs mt-1 rtl:text-right ltr:text-left">{formik.errors.country}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Full-width fields */}
            <div className="mt-6 grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 ltr:text-left rtl:text-right">
                  {text("ticketDescriptionLabel", "Ticket description")} *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder={text("ticketDescriptionPlaceholder", "Detailed explanation of your case...")}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  className={inputClass(formik.touched.message, formik.errors.message)}
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="text-red-600 text-xs mt-1 rtl:text-right ltr:text-left">{formik.errors.message}</p>
                )}
              </div>

              {showDepositDisclaimer && (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded text-sm text-amber-800">
                  {text("depositDisclaimer", "Please make sure your deposit details are correct before submitting.")}
                </div>
              )}

              {showWithdrawalDisclaimer && (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded text-sm text-amber-800">
                  {text("withdrawalDisclaimer", "Please ensure your withdrawal details are correct before submitting.")}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 ltr:text-left rtl:text-right">
                  {text("attachmentLabel", "Attachment")}{" "}
                  {text("attachmentOptional", "(optional)")}
                </label>
                <input
                  type="file"
                  accept=".pdf,.png,.jpg,.jpeg,.gif,.doc,.docx"
                  onChange={(e) =>
                    formik.setFieldValue("attachment", e.target.files?.[0] ?? null)
                  }
                  onBlur={() => formik.setFieldTouched("attachment", true)}
                  className="block w-fit pr-2 rounded-lg bg-white text-sm text-gray-600 shadow-sm ring-1 ring-inset ring-gray-200 file:mr-4 file:rounded-md file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:opacity-95"
                />
                <p className="text-xs text-gray-500 mt-1 ltr:text-left rtl:text-right">
                  {text("attachmentHelp", "Screenshots, receipts, logs, or supporting documents.")}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-3 items-center">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
              onChange={(token) => {
                formik.setFieldValue("captchaToken", token || "");
              }}
              onExpired={() => formik.setFieldValue("captchaToken", "")}
            />
            {formik.touched.captchaToken && formik.errors.captchaToken && (
              <p className="text-red-600 text-xs mt-1 rtl:text-right ltr:text-left">
                {formik.errors.captchaToken}
              </p>
            )}
            <p className="text-sm text-gray-600 italic">
              {text(
                "submitDisclaimer",
                "By submitting this form, you agree that we may contact you regarding your query."
              )}
            </p>
          </div>

          <div className="mt-6 flex flex-col items-center justify-end gap-x-6">
            <button
              disabled={loading || !formik.values.captchaToken}
              type="submit"
              className="w-[140px] h-[50px] rounded-xl bg-primary text-white text-[16px] font-semibold shadow-sm transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? text("sending", "Sending...") : text("submit", "Submit")}
            </button>
            <p className="inline px-3 text-[11px] text-primary pt-5">
              {text("termsPrefix", "Terms")}{" "}
              <Link
                href="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/pdf-files/Vanuatu.pdf"
                target="_blank"
                className="underline text-secondary underline]"
              >
                {text("termsLinkText", "Read more")}
              </Link>{" "}
              {text("termsSuffix", "before submitting.")}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
