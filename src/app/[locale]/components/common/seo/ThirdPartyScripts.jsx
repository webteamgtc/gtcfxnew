import Script from "next/script";

const ThirdPartyScripts = () => {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-EGK1L0DGDX" />

      <Script
        id="aw-gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EGK1L0DGDX');
          `,
        }}
      />

      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '884963704127462');
          fbq('track', 'PageView');
        `}
      </Script>

      <Script
        id="finteza-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(a,e,f,g,b,c,d){a[b]||(a.FintezaCoreObject=b,a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)},a[b].l=1*new Date,c=e.createElement(f),d=e.getElementsByTagName(f)[0],c.async=!0,c.defer=!0,c.src=g,d&&d.parentNode&&d.parentNode.insertBefore(c,d))})
            (window,document,"script","https://content.mql5.com/core.js","fz");
            fz("register","website",{id:"dzwzfjftdagmxioapjzjratbyxemivrdqi",trackLinks:true,timeOnPage:true});
          `,
        }}
      />

      <Script
        src="https://cloud.umami.is/script.js"
        data-website-id="6e6d0916-5871-41f5-8ef5-1f89b83e611b"
        defer
      />

      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', "GTM-PSWH9QF");
          `,
        }}
      />

      <Script
        id="aw-conv"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') window.location = url;
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-10835048699/LUb0CNmY5OsYEPvxxq4o',
                'event_callback': callback
              });
              return false;
            }
            document.addEventListener("wpcf7submit", function(){
              gtag_report_conversion();
            }, false);
          `,
        }}
      />

      <Script
        defer
        id="convrs-webchat"
        src="https://webchat.conv.rs/0bc7dfc471ae1a9e19e6a0418f9b6fd3724bfbcf.js"
      />

      <Script id="trustpilot-script" strategy="afterInteractive">
        {`
          (function(w,d,s,r,n){
            w.TrustpilotObject=n;
            w[n]=w[n]||function(){
              (w[n].q=w[n].q||[]).push(arguments)
            };
            var a=d.createElement(s);
            a.async=1;
            a.src=r;
            a.type='text/javascript';
            var f=d.getElementsByTagName(s)[0];
            f.parentNode.insertBefore(a,f);
          })(window,document,'script','https://invitejs.trustpilot.com/tp.min.js','tp');
          tp('register', '4fTEXBqNZH9fKyyp');
        `}
      </Script>

      <noscript
        dangerouslySetInnerHTML={{
          __html: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PSWH9QF"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `,
        }}
      />
    </>
  );
};

export default ThirdPartyScripts;

