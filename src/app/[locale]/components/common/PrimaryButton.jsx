import Link from "next/link";

export default function PrimaryButton({
  children,
  href = "/",
  variant = "primary", // primary | outline | dark
  size = "md", // sm | md | lg
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center rounded-full transition text-center duration-300 font-medium  hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary whitespace-nowrap";

  const variants = {
    primary: "bg-gradient-to-r hover:from-[#B68756] hover:via-[#995F22] hover:to-[#995F22] from-[#263788] via-[#101638] to-[#263788] text-white hover:opacity-90",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white",
    dark: "bg-[#2f2f2f] text-white hover:opacity-90 bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#995F22]",
  };

  const sizes = {
    sm: "px-4 py-2 text-[13px]",
    md: "px-6 py-3 TextButton",
    lg: "px-8 py-4 text-[16px]",
  };

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}