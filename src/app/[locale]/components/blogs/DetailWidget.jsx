// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    if (!container.current) return;
    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "colorTheme": "light",
          "dateRange": "12M",
          "locale": "en",
          "largeChartUrl": "",
          "isTransparent": true,
          "showFloatingTooltip": false,
          "plotLineColorGrowing": "rgba(36, 53, 139, 1)",
          "plotLineColorFalling": "rgba(36, 53, 139, 1)",
          "gridLineColor": "rgba(240, 243, 250, 0)",
          "scaleFontColor": "#24358b",
          "belowLineFillColorGrowing": "rgba(36, 53, 139, 0.12)",
          "belowLineFillColorFalling": "rgba(36, 53, 139, 0.12)",
          "belowLineFillColorGrowingBottom": "rgba(36, 53, 139, 0)",
          "belowLineFillColorFallingBottom": "rgba(36, 53, 139, 0)",
          "symbolActiveColor": "rgba(36, 53, 139, 0.12)",
          "tabs": [
            {
              "title": "Indices",
              "symbols": [
                {
                  "s": "FOREXCOM:SPXUSD",
                  "d": "S&P 500 Index"
                },
                {
                  "s": "FOREXCOM:NSXUSD",
                  "d": "US 100 Cash CFD"
                },
                {
                  "s": "FOREXCOM:DJI",
                  "d": "Dow Jones Industrial Average Index"
                },
                {
                  "s": "INDEX:NKY",
                  "d": "Japan 225"
                },
                {
                  "s": "INDEX:DEU40",
                  "d": "DAX Index"
                },
                {
                  "s": "FOREXCOM:UKXGBP",
                  "d": "FTSE 100 Index"
                }
              ],
              "originalTitle": "Indices"
            },
            {
              "title": "Futures",
              "symbols": [
                {
                  "s": "BMFBOVESPA:ISP1!",
                  "d": "S&P 500"
                },
                {
                  "s": "BMFBOVESPA:EUR1!",
                  "d": "Euro"
                },
                {
                  "s": "CMCMARKETS:GOLD",
                  "d": "Gold"
                },
                {
                  "s": "PYTH:WTI3!",
                  "d": "WTI Crude Oil"
                },
                {
                  "s": "BMFBOVESPA:CCM1!",
                  "d": "Corn"
                }
              ],
              "originalTitle": "Futures"
            },
            {
              "title": "Bonds",
              "symbols": [
                {
                  "s": "EUREX:FGBL1!",
                  "d": "Euro Bund"
                },
                {
                  "s": "EUREX:FBTP1!",
                  "d": "Euro BTP"
                },
                {
                  "s": "EUREX:FGBM1!",
                  "d": "Euro BOBL"
                }
              ],
              "originalTitle": "Bonds"
            },
            {
              "title": "Forex",
              "symbols": [
                {
                  "s": "FX:EURUSD",
                  "d": "EUR to USD"
                },
                {
                  "s": "FX:GBPUSD",
                  "d": "GBP to USD"
                },
                {
                  "s": "FX:USDJPY",
                  "d": "USD to JPY"
                },
                {
                  "s": "FX:USDCHF",
                  "d": "USD to CHF"
                },
                {
                  "s": "FX:AUDUSD",
                  "d": "AUD to USD"
                },
                {
                  "s": "FX:USDCAD",
                  "d": "USD to CAD"
                }
              ],
              "originalTitle": "Forex"
            }
          ],
          "support_host": "https://www.tradingview.com",
          "backgroundColor": "rgba(0, 0, 0, 0)",
          "width": "100%",
          "height": "520",
          "showSymbolLogo": true,
          "showChart": true
        }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div>
      <div
        className="tradingview-widget-container overflow-hidden rounded-2xl border border-[#D9DBE5] bg-white p-2"
        ref={container}
      >
        <div className="tradingview-widget-container__widget" />
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
