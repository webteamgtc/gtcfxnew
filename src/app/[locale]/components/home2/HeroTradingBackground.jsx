export default function HeroTradingBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#1f2d98_0%,#3147b8_45%,#d9dfef_100%)]" />

      {/* Grid overlay */}
      <div className="hero-grid absolute inset-0 opacity-[0.14]" />

      {/* Moving bars */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.18]">
        <div className="hero-bars" />
      </div>

      {/* Animated line */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.32]"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#b68756" stopOpacity="0.8" />
          </linearGradient>

          <filter id="heroGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          className="hero-line"
          d="M0,520 
             C120,500 170,430 260,450
             C330,465 380,580 470,545
             C570,505 610,335 710,360
             C820,388 855,565 980,520
             C1110,470 1160,270 1290,320
             C1360,350 1400,410 1440,395"
          fill="none"
          stroke="url(#heroLine)"
          strokeWidth="4"
          filter="url(#heroGlow)"
          strokeLinecap="round"
        />

        {/* glow dots */}
        <circle className="hero-dot hero-dot-1" cx="260" cy="450" r="6" fill="#fff" />
        <circle className="hero-dot hero-dot-2" cx="710" cy="360" r="7" fill="#b68756" />
        <circle className="hero-dot hero-dot-3" cx="1290" cy="320" r="6" fill="#fff" />
      </svg>
    </div>
  );
}