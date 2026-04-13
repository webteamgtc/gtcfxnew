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
    primary: "bg-primary-gradient bg-primary-gradient bg-[length:200%_200%] transition-all duration-500 hover:bg-right text-white hover:opacity-90",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white",
    dark: "bg-primary text-white hover:opacity-90 bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#995F22]",
  };

  const sizes = {
    sm: "px-4 py-2 text-[13px]",
    md: "px-6 py-3 TextButton",
    lg: "px-8 py-4 text-[16px]",
  };

  return (
    <Link
      href="https://mygtcfx.com/getview?view=register&token=exhowww.z8owwwww"
        target="_blank"
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}