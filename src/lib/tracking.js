const getCommonData = () => {
  if (typeof window === "undefined") return {};

  return {
    page_path: window.location.pathname,
    page_url: window.location.href,
    page_title: document.title,
  };
};

export const pushToDataLayer = (eventName, eventData = {}) => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...getCommonData(),
    ...eventData,
  });
};

export const trackLeadSubmit = (data = {}) => {
  pushToDataLayer("lead_submit", data);
};

export const trackLeadSuccess = (data = {}) => {
  pushToDataLayer("lead_success", data);
};

export const trackRegisterClick = (data = {}) => {
  pushToDataLayer("register_click", data);
};

export const trackAppDownloadClick = (data = {}) => {
  pushToDataLayer("app_download_click", data);
};

export const trackDepositClick = (data = {}) => {
  pushToDataLayer("deposit_click", data);
};

export const trackContactClick = (data = {}) => {
  pushToDataLayer("contact_click", data);
};

export const trackOtpSent = (data = {}) => {
  pushToDataLayer("otp_sent", data);
};

export const trackOtpVerified = (data = {}) => {
  pushToDataLayer("otp_verified", data);
};