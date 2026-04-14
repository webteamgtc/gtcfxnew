"use client";
import React, { useState,useContext } from "react";
import { LocationContext } from "@/context/location-context";
import { usePathname, useSearchParams } from "next/navigation";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useFormik } from "formik";
import * as Yup from "yup";
// import nationality from '../../../../../public/data/nationality.json';
import { translationText } from "@/i18n/tranlsationText";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocationDetail } from "@/context/useLocationDetail";



const platforms = [
  { id: 1, name: "MT4", value: "mt4" },
  { id: 2, name: "MT5", value: "mt5" },
];
const packages = [
  { id: 1, name: "Bronze", value: "bronze" },
  { id: 2, name: "Silver", value: "silver" },
  { id: 3, name: "Gold", value: "gold" },
];
const VpsHostingForm = ({ copy }) => {
  const [loading, setLoading] = useState(false);
  const campaign = useSearchParams().get('utm_source');
  const path = usePathname();
  
    const {country:originCountry,ip:originIp} = useLocationDetail();

  const formik = useFormik({
    initialValues: {
      ip:"",
      utm_campain:"",
      utm_source:"",
      first_name: '',
      last_name: '',
      platform:'',
      account_no:'',
      package:'',
      phone: '',
      email: '',
      country: '',
      terms: false,
    },
    validationSchema: Yup.object({
      first_name: Yup.string().min(2, translationText("error.minLimit", "At least 2 letters", copy)).required(translationText("error.firstName", "First Name is required", copy)),
      last_name: Yup.string().min(2, translationText("error.minLimit", "At least 2 letters", copy)).required(translationText("error.lastName", "Last Name is required", copy)),
      platform: Yup.string().required(translationText("error.platform", "Platform is required", copy )),
      account_no:Yup.string().min(6,'minimum 6 numbers').max(7,"maximum 7 numbers").required(translationText("error.account_no", "Account Number is required", copy )),
      package:Yup.string().required(translationText("error.package", "Please Choose a package", copy )),
      email: Yup.string().email(translationText("error.invalidEmail", "Invalid email address", copy )).required(translationText("error.email", "Email Address is required", copy )),
      country: Yup.string().required(translationText("error.country", "Country is required", copy )),
    }),
    validate: values => {
      const errors = {};
      if (!values.phone) {
        errors.phone = translationText("vpsHosting.hero.vpsForm.error.phone", "Phone number is required", copy );
      }
      return errors;
    },
    onSubmit: async(values) => {
      console.log(values);
      try {
        setLoading(true);
     try{   
     const response = await axios.post(`https://hooks.zapier.com/hooks/catch/16420445/38odhxb/`,JSON.stringify(values));
    }catch(err){
      console.log(err.message);
    }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
            toast(translationText("vpsHosting.hero.vpsForm.toastSubmitted", "Form Submitted Successfully!", copy ))
        formik.resetForm();
      }
    },
  });

  return (
    <section className="w-full max-w-xl mx-auto">
      <div className="overflow-hidden rounded-2xl border border-[#D9DEE8] bg-white shadow-sm">
        <div className="bg-[linear-gradient(180deg,#293B93_0%,#0D153A_100%)] px-6 py-4 text-center">
          <h3 className="HeadingH5 text-[#B48755]">
            {translationText("vpsHosting.hero.vpsForm.formTitle", "SUBSCRIBE", copy)}
          </h3>
        </div>

        <form onSubmit={formik.handleSubmit} className="p-6 md:p-7">
            <input
              name="ip"
              className="hidden"
              type="number"
              onChange={formik.handleChange}
              value={!formik.values.ip || formik.values.ip === "" ? formik.values.ip = originIp : formik.values.ip = originIp}
                  />
            <input
              name="utm_campain"
              className="hidden"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={!formik.values.utm_campain || formik.values.utm_campain === '' ? formik.values.utm_campain = path: formik.values.utm_campain = path}
            />
            <input
              name="utm_source"
              className="hidden"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={!formik.values.utm_source || formik.values.utm_source === '' ? formik.values.utm_source = campaign: formik.values.utm_source = campaign}
            />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-4">
          <div className="flex flex-col">
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder={translationText("vpsHosting.hero.vpsForm.firstName", "First Name", copy )}
              className={`w-full rounded-lg border bg-white px-4 py-3 text-gray-700 outline-none transition focus:ring-2 focus:ring-primary/25 ${
                formik.touched.first_name && formik.errors.first_name ? "border-red-500" : "border-gray-300"
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.first_name}
            />
            {formik.touched.first_name && formik.errors.first_name ? (
              <p className="TextSmall mt-1 text-red-500">{formik.errors.first_name}</p>
            ) : null}
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="last_name"
              id="last_name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.last_name}
              placeholder={translationText("vpsHosting.hero.vpsForm.lastName", "Last Name", copy )}
              className={`w-full rounded-lg border bg-white px-4 py-3 text-gray-700 outline-none transition focus:ring-2 focus:ring-primary/25 ${
                formik.touched.last_name && formik.errors.last_name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {formik.touched.last_name && formik.errors.last_name ? (
              <p className="TextSmall mt-1 text-red-500">{formik.errors.last_name}</p>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <select
                  className={`w-full rounded-lg border bg-white px-4 py-3 text-gray-700 outline-none transition focus:ring-2 focus:ring-primary/25 ${
                    formik.touched.platform && formik.errors.platform ? "border-red-500" : "border-gray-300"
                  }`}
                  name="platform"
                  value={formik.values.platform}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="">{translationText("vpsHosting.hero.vpsForm.selectPlaceholder", "Please Select One", copy )}</option>
                  {platforms.map((platform, el) => {
                    return (
                      <option key={platform.id} value={platform.value}>
                        {platform.name}
                      </option>
                    );
                  })}
                </select>  
          {formik.touched.platform && formik.errors.platform ? (
            <p className="TextSmall mt-1 text-red-500">{formik.errors.platform}</p>
          ) : null}
          </div>  
          <div className="flex flex-col mb-4">
          <input
              type="number"
              name="account_no"
              id="account_no"
              placeholder={translationText("vpsHosting.hero.vpsForm.account_no", "Enter Your Account Number", copy )}
              className={`w-full rounded-lg border bg-white px-4 py-3 text-gray-700 outline-none transition focus:ring-2 focus:ring-primary/25 ${
                formik.touched.account_no && formik.errors.account_no ? "border-red-500" : "border-gray-300"
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.account_no}
            />
          {formik.touched.account_no && formik.errors.account_no ? (
            <p className="TextSmall mt-1 text-red-500">{formik.errors.account_no}</p>
          ) : null}
        </div>    
        <div className="flex flex-col mb-4">
          <select
                  className={`w-full rounded-lg border bg-white px-4 py-3 text-gray-700 outline-none transition focus:ring-2 focus:ring-primary/25 ${
                    formik.touched.package && formik.errors.package ? "border-red-500" : "border-gray-300"
                  }`}
                  name="package"
                  value={formik.values.package}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="">{translationText("vpsHosting.hero.vpsForm.selectPlaceholder", "Please Select One", copy )}</option>
                  {packages.map((el) => {
                    return (
                      <option key={el.id} value={el.value}>
                        {el.name}
                      </option>
                    );
                  })}
                </select>  
          {formik.touched.package && formik.errors.package ? (
            <p className="TextSmall mt-1 text-red-500">{formik.errors.package}</p>
          ) : null}
          </div>      
        <div className="flex flex-col">
       
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            autoComplete="email"
            placeholder={translationText("vpsHosting.hero.vpsForm.email", "Email Address", copy )}
            className={`w-full rounded-lg border bg-white px-4 py-3 text-gray-700 outline-none transition focus:ring-2 focus:ring-primary/25 mb-4 ${
              formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="TextSmall -mt-3 mb-3 text-red-500">{formik.errors.email}</p>
          ) : null}
         
          <PhoneInput
            className={`w-full rounded-lg border bg-white px-4 py-3 text-gray-700 outline-none transition focus:ring-2 focus:ring-primary/25 mb-4 ${
              formik.touched.phone && formik.errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            onChange={(value) => formik.setFieldValue('phone', value)}
            onBlur={formik.handleBlur}
            name="phone"
            value={formik.values.phone}
            defaultCountry={originCountry}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <p className="TextSmall -mt-3 mb-3 text-red-500">{formik.errors.phone}</p>
          ) : null}
       
          <select
            className={`w-full rounded-lg border bg-white px-4 py-3 text-gray-700 outline-none transition focus:ring-2 focus:ring-primary/25 ${
              formik.touched.country && formik.errors.country ? "border-red-500" : "border-gray-300"
            }`}
            name='country'
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value='' >{translationText("vpsHosting.hero.vpsForm.selectPlaceholder", "Please Select One", copy   )}</option>
            {/* {
              nationality.map((country, index) => {
                return (
                  <option className="text-primary" key={index} value={country.en_short_name}>{country.en_short_name}</option>
                )
              })
            } */}
          </select>
          {formik.touched.country && formik.errors.country ? (
            <p className="TextSmall mt-1 text-red-500">{formik.errors.country}</p>
          ) : null}
        </div>
        <div className="mt-3">
        </div>
        <button
          disabled={loading}
          className="mt-4 w-full rounded-xl bg-primary py-3 TextButton text-center text-white transition hover:opacity-95 disabled:opacity-60"
          type="submit"
        >
          {loading
            ? translationText("vpsHosting.hero.vpsForm.sending", "Sending...", copy)
            : translationText("vpsHosting.hero.vpsForm.submit", "Submit", copy)}
        </button>
      </form>
      </div>
    </section>
  );
};

export default VpsHostingForm;
