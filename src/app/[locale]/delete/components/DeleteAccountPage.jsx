"use client";

import { useState } from "react";

export default function DeleteAccountPage() {
  const [platform, setPlatform] = useState("MT4");
  const [checks, setChecks] = useState({
    owner: false,
    inaccessible: false,
    positions: false,
  });

  const handleCheck = (key) => {
    setChecks((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section className="min-h-screen bg-[#f7fbff] py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero */}
        <div className="mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-700">
            <svg className="h-5 w-5 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
  <line x1="12" y1="9" x2="12" y2="13" />
  <line x1="12" y1="17" x2="12.01" y2="17" />
</svg>
            Account Deletion Request
          </div>

          <div className="mt-5 max-w-3xl">
            <h2 className="HeadingH2">
              Delete Your <span className="text-secondary">Trading Account</span> 
            </h2>
            <p className="mt-4 text-base md:text-lg leading-7 text-slate-600">
              Submit a secure request to permanently delete your trading account.
              Please review the important notes carefully before continuing.
            </p>
          </div>
        </div>

        {/* Main layout */}
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Left side info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                  <svg className="h-5 w-5 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  <line x1="12" y1="8" x2="12" y2="12" />
  <line x1="12" y1="16" x2="12.01" y2="16" />
</svg>
                </div>
                <h2 className="HeadingH5 text-secondary font-semibold">
                  Before You Continue
                </h2>
              </div>

              <div className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  Account deletion is permanent and may remove access to account
                  history, balances, and platform records.
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  Please ensure all open positions are closed before submitting
                  your request.
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  For security verification, the submitted details must match
                  your registered account information.
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#0F3B8C]">
                  <svg className="h-5 w-5 text-[#0F3B8C]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
  <rect x="2" y="6" width="20" height="12" rx="2" />
  <path d="M16 12h.01" />
</svg>
                </div>
                <h2 className="HeadingH5 text-secondary font-semibold">
                  Helpful Notes
                </h2>
              </div>

              <ul className="mt-5 space-y-3 text-sm text-slate-600">
                <li className="rounded-xl bg-slate-50 px-4 py-3">
                  Use your registered email address for faster verification.
                </li>
                <li className="rounded-xl bg-slate-50 px-4 py-3">
                  Add all trading account numbers you want to delete.
                </li>
                <li className="rounded-xl bg-slate-50 px-4 py-3">
                  Include your reason if you want the support team to review it.
                </li>
              </ul>
            </div>
          </div>

          {/* Right side form */}
          <div className="lg:col-span-8">
            <div className="rounded-[32px] border border-slate-200 bg-white p-6 md:p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)]">
              <div className="mb-8">
                <h2 className="HeadingH4">
                  Trading <span className="text-secondary">Account</span> Deletion Request Form
                </h2>
                <p className="mt-2 text-slate-600">
                  Complete the form below and confirm the required statements to
                  proceed.
                </p>
              </div>

              <form className="space-y-8">
                {/* Personal details */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    Personal Information
                  </h3>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="md:col-span-2">
                     <div className="relative">
                        <svg
                            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <circle cx="12" cy="7" r="4" />
                            <path d="M5.5 21a6.5 6.5 0 0113 0" />
                        </svg>

                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-slate-900 outline-none transition focus:border-[#0F3B8C] focus:ring-4 focus:ring-[#0F3B8C]/10"
                        />
                        </div>
                    </div>

                    <div className="md:col-span-2">
                      <div className="relative flex-1">
  <svg
    className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 6l-10 7L2 6" />
  </svg>

  <input
    type="email"
    placeholder="Enter email address"
    className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-slate-900 outline-none transition focus:border-[#0F3B8C] focus:ring-4 focus:ring-[#0F3B8C]/10"
  />
</div>
                    </div>

                    <div className="md:col-span-2">
                     <div className="relative">
  <svg
    className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M22 16.92V20a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012 4.18 2 2 0 014 2h3.09a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>

  <input
    type="text"
    placeholder="+971"
    className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-slate-900 outline-none transition focus:border-[#0F3B8C] focus:ring-4 focus:ring-[#0F3B8C]/10"
  />
</div>
                    </div>
                  </div>
                </div>

                {/* Account details */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    Account Details
                  </h3>

                  <div className="space-y-5">
                    <div>
                      <label className="mb-3 block text-sm font-medium text-slate-700">
                        Platform
                      </label>

                      <div className="grid gap-3 sm:grid-cols-3">
                        {["MT4", "MT5", "Both"].map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => setPlatform(item)}
                            className={`rounded-2xl border px-4 py-4 text-sm font-semibold transition ${
                              platform === item
                                ? "border-[#0F3B8C] bg-blue-50 text-[#0F3B8C] shadow-[0_10px_25px_rgba(15,59,140,0.10)]"
                                : "border-slate-200 bg-white text-slate-700 hover:border-[#0F3B8C]"
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Accounts to Delete
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 502131, 502145, 503201"
                        className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-4 text-slate-900 outline-none transition focus:border-[#0F3B8C] focus:ring-4 focus:ring-[#0F3B8C]/10"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Reason for Deletion <span className="text-slate-400">(optional)</span>
                      </label>
                      <textarea
                        rows="5"
                        placeholder="Tell us why you want to delete your account"
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 outline-none transition focus:border-[#0F3B8C] focus:ring-4 focus:ring-[#0F3B8C]/10"
                      />
                    </div>
                  </div>
                </div>

                {/* Confirmations */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    Confirmations
                  </h3>

                  <div className="space-y-3">
                    <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={checks.owner}
                        onChange={() => handleCheck("owner")}
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-[#0F3B8C] focus:ring-[#0F3B8C]"
                      />
                      <span className="text-sm leading-6 text-slate-700">
                        I confirm that I am the rightful owner of the above
                        trading accounts and wish to permanently delete them.
                      </span>
                    </label>

                    <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={checks.inaccessible}
                        onChange={() => handleCheck("inaccessible")}
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-[#0F3B8C] focus:ring-[#0F3B8C]"
                      />
                      <span className="text-sm leading-6 text-slate-700">
                        I understand that once deleted, all account data,
                        balances, and history may no longer be accessible.
                      </span>
                    </label>

                    <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={checks.positions}
                        onChange={() => handleCheck("positions")}
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-[#0F3B8C] focus:ring-[#0F3B8C]"
                      />
                      <span className="text-sm leading-6 text-slate-700">
                        I understand that any pending positions must be closed
                        prior to deletion.
                      </span>
                    </label>
                  </div>
                </div>

                {/* Signature */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    Signature & Verification
                  </h3>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                     <div className="relative">
  <svg
    className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
  </svg>

  <input
    type="text"
    placeholder="Type your full name"
    className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-slate-900 outline-none transition focus:border-[#0F3B8C] focus:ring-4 focus:ring-[#0F3B8C]/10"
  />
</div>
                    </div>

                    <div>
                     <div className="relative">
  <svg
    className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>

  <input
    type="date"
    className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-slate-900 outline-none transition focus:border-[#0F3B8C] focus:ring-4 focus:ring-[#0F3B8C]/10"
  />
</div>
                    </div>
                  </div>
                </div>

                {/* bottom action */}
                <div className="rounded-[24px] border border-red-200 bg-red-50 p-4 md:p-5">
                  <p className="text-sm leading-6 text-red-700">
                    Please review all information carefully before submitting.
                    This request may result in permanent removal of your trading
                    account access.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-slate-500">
                    Need help instead? Contact support before submitting this
                    request.
                  </p>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-2xl bg-[#0F3B8C] px-8 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,59,140,0.22)] transition hover:bg-[#0c3277]"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}