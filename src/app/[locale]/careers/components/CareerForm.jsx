"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";

const ApplyNow = ({ messages = {}, selectedJobTitle }) => {
  const formText = (key, fallback = "") => {
    const readPath = (obj, path) =>
      path.split(".").reduce((acc, part) => (acc && acc[part] != null ? acc[part] : undefined), obj);

    const val = readPath(messages?.form, key);
    return typeof val === "string" && val.length ? val : fallback;
  };

  const inputClass = (touched, error) =>
    `block w-full rounded-lg bg-white px-3 py-2.5 text-[15px] leading-6 text-gray-900 placeholder:text-gray-400 shadow-sm ring-1 ring-inset outline-none transition ${touched && error
      ? "ring-red-600 focus:ring-red-600"
      : "ring-gray-200 focus:ring-primary/80"
    } focus:ring-2`;

  const textareaClass = (touched, error) =>
    `block w-full rounded-lg bg-white px-3 py-2.5 text-[15px] leading-6 text-gray-900 placeholder:text-gray-400 shadow-sm ring-1 ring-inset outline-none transition ${touched && error
      ? "ring-red-600 focus:ring-red-600"
      : "ring-gray-200 focus:ring-primary/80"
    } focus:ring-2`;

  const selectClass = (touched, error) =>
    `w-full appearance-none rounded-lg bg-white bg-[url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2020%2020'%20fill='none'%3E%3Cpath%20d='M6%208l4%204%204-4'%20stroke='%236B7280'%20stroke-width='1.8'%20stroke-linecap='round'%20stroke-linejoin='round'/%3E%3C/svg%3E")] bg-no-repeat bg-[position:right_0.85rem_center] bg-[length:14px_14px] pl-3 pr-12 py-2.5 text-[15px] leading-6 text-gray-900 shadow-sm ring-1 ring-inset outline-none transition ${touched && error
      ? "ring-red-600 focus:ring-red-600"
      : "ring-gray-200 focus:ring-primary/80"
    } focus:ring-2`;

  const [resume, setResume] = useState({
    file: null,
    error: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader?.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result.split(',')[1]; // Extract base64 content after the comma
        resolve(base64String);
      };
      reader.onerror = error => reject(error);
    });
  }
  const campaign = useSearchParams().get("utm_source");
  const fbclid = useSearchParams().get("fbclid");
  const path = usePathname();
  const formik = useFormik({
    initialValues: {
      ip: "",
      fbclid: "",
      utm_campain: "",
      utm_source: "",
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      message: "",
      city: "",
      url: "",
      experience: "",
      job_title: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .min(2, "min 3 ")
        .required("First name is required"),
      last_name: Yup.string().min(2, "min 3").required("Last name is required"),
      email: Yup.string().email("invalid email").required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      message: Yup.string().required("Message is required"),
      city: Yup.string().required("City is required"),
      url: Yup.string().required("Linkdin is required"),
      experience: Yup.string().required("Experience is required"),
    }),
    onSubmit: async (values) => {
      if (resume?.file == null) {
        return setResume((st) => ({ ...st, error: true }));
      }

      setIsSubmitting(true);
      const payload = { ...values };
      payload.resume = resume?.file;
      
      try {
        // Send the form data to both APIs in parallel
        const [careerFormResponse, zapierResponse] = await Promise.allSettled([
          axios.post(`/api/career-form`, JSON.stringify(payload)),
          axios.post(
            "https://hooks.zapier.com/hooks/catch/16420445/2yulun6/",
            JSON.stringify(payload)
          )
        ]);

        // Check if at least one succeeded
        const hasSuccess = careerFormResponse.status === 'fulfilled' || zapierResponse.status === 'fulfilled';
        
        if (hasSuccess) {
          toast.success("Form Submitted Successfully!");
          formik.resetForm();
          setResume({
            file: null,
            error: false,
          });
          
          // Clear the file input
          const fileInput = document.getElementById("resume");
          if (fileInput) {
            fileInput.value = "";
          }
        } else {
          toast.error("Failed to submit form. Please try again.");
        }
      } catch (error) {
        console.log(error);
        toast.error("An error occurred. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
  });


  // Update job_title when selectedJobTitle changes
  useEffect(() => {
    if (selectedJobTitle) {
      formik.setFieldValue("job_title", selectedJobTitle);
    }
  }, [selectedJobTitle]);

  return (
    <form
      id="apply-now-form"
      className="relative z-30 mt-8 sm:my-14 rounded-2xl border border-gray-200 bg-white md:px-6 px-4 md:py-10 py-6 shadow-sm"
      onSubmit={formik.handleSubmit}
    >
      <p className="TextSmall text-center text-gray-600 pb-2">
        {formText("title", "What Are You Looking For In Your Next Job")}
      </p>
      <h2 className="HeadingH3 text-center text-primary pb-6">
        {formText("sub_title", "Apply Now For Success")}
      </h2>
      <div className="grid grid-cols-12 gap-4 mt-3">
        <div className=" md:col-span-3 col-span-12">

          <input
            name="fbclid"
            className="hidden"
            type="text"
            onChange={formik.handleChange}
            value={
              !formik.values.fbclid || formik.values.fbclid === ""
                ? (formik.values.fbclid = fbclid)
                : (formik.values.fbclid = fbclid)
            }
          />
          <input
            name="utm_campain"
            className="hidden"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={
              !formik.values.utm_campain || formik.values.utm_campain === ""
                ? (formik.values.utm_campain = path)
                : (formik.values.utm_campain = path)
            }
          />
          <input
            name="utm_source"
            className="hidden"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={
              !formik.values.utm_source || formik.values.utm_source === ""
                ? (formik.values.utm_source = campaign)
                : (formik.values.utm_source = campaign)
            }
          />
          <input
            name="job_title"
            className="hidden"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.job_title}
          />
          <input
            type="text"
            name="first_name"
            id="first_name"
            placeholder={formText("first_name", "First Name")}
            className={inputClass(formik.touched.first_name, formik.errors.first_name)}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.first_name}
          />
        </div>
        <div className=" md:col-span-3 col-span-12">
          <input
            type="text"
            name="last_name"
            id="last_name"
            placeholder={formText("last_name", "Last Name")}
            className={inputClass(formik.touched.last_name, formik.errors.last_name)}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.last_name}
          />
        </div>
        <div className=" md:col-span-3 col-span-12">
          <input
            type="email"
            name="email"
            id="email"
            placeholder={formText("email", "Email Address")}
            className={inputClass(formik.touched.email, formik.errors.email)}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>
        <div className=" md:col-span-3 col-span-12">
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder={formText("phone", "Phone Number")}
            className={inputClass(formik.touched.phone, formik.errors.phone)}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
        </div>
        <div className=" md:col-span-3 col-span-12">
          <input
            type="text"
            name="city"
            id="city"
            placeholder={formText("city", "City")}
            className={inputClass(formik.touched.city, formik.errors.city)}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
          />
        </div>
        <div className=" md:col-span-6 col-span-12">
          <input
            type="text"
            name="url"
            id="url"
            placeholder={formText("url", "LinkedIn Profile URL")}
            className={inputClass(formik.touched.url, formik.errors.url)}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.url}
          />
        </div>
        <div className=" md:col-span-3 col-span-12">
          <select
            id="experience"
            name="experience"
            autoComplete="country-name"
            placeholder={formText("note", "Personal Note")}
            className={selectClass(formik.touched.experience, formik.errors.experience)}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.experience}
          >
            <option value="">{formText("exper.label", "Experience")}</option>
            <option value="fresher">{formText("exper.one", "Fresher")}</option>
            <option value="1-2">{formText("exper.sec", "1 - 2 years")}</option>
            <option value="3-5">{formText("exper.third", "3 - 5 years")}</option>
            <option value="5-10">{formText("exper.fourth", "5 - 10 years")}</option>
            <option value="10">{formText("exper.fivth", "10+ years")}</option>
          </select>
        </div>

        <div className="col-span-12">
          <textarea
            placeholder={formText("note", "Personal Note")}
            className={textareaClass(formik.touched.message, formik.errors.message)}
            rows="4"
            name="message"
            id="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
        </div>
      </div>
      <div className="mt-4">
        <p className="TextSmall text-gray-700 mb-2">{formText("attach", "Attach your cv")}</p>
        <input
          type="file"
          accept=".doc, .docx,.pdf"
          name="resume"
          id="resume"
          className={inputClass(true, resume?.error)}
          onChange={(e) => {
            let file = e.target.files[0];
            if (file) {
              getBase64(file).then(res => {
                setResume((st) => ({ ...st, file: res, error: false }));
              })
            } else {
              setResume((st) => ({ ...st, file: null, error: false }));
            }
          }}
        />
      </div>
      <div className="mt-4 text-right">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-[160px] h-[50px] rounded-xl bg-primary text-white text-[16px] font-semibold shadow-sm transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60 inline-flex items-center justify-center ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              {formText("submitting", "Submitting...")}
            </>
          ) : (
            <>
              {formText("btnText", "Apply Now")} <FaLongArrowAltRight className="ml-2" />
            </>
          )}
        </button>
      </div>
      <p className="text-xs py-3 text-gray-600">
        {formText(
          "terms",
          "By clicking Submit, I acknowledge that I have read, understood and agree to the Clients Agreement and give my consent to GTCFX to contact me."
        )}
      </p>
    </form>
  );
};

export default ApplyNow;
