import PrimaryButton from "../../components/common/PrimaryButton";
export function FundHero() {
  return (
  <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#fff] to-[#fff] py-10 md:py-16">
  {/* subtle glow */}
  <div className="pointer-events-none absolute left-[-80px] top-10 h-[220px] w-[220px] rounded-xl bg-[#263788]/10 blur-3xl" />
  <div className="pointer-events-none absolute right-[-80px] bottom-10 h-[240px] w-[240px] rounded-xl bg-[#b68756]/10 blur-3xl" />

  <div className="container text-center">
    
    {/* Badge */}
    <span className="inline-flex rounded-xl border border-[#b68756]/20 bg-[#b68756]/10 px-4 py-1.5 text-sm font-semibold text-[#b68756]">
      Fund Your Account
    </span>

    {/* Heading */}
    <h1 className="HeadingH3 py-5">
      Deposit Funds{" "}
      <span className="text-[#b68756]">Quickly & Securely</span>
    </h1>

    {/* Description */}
    <p className="Text max-w-2xl mx-auto text-gray-600">
      Fund your account with multiple secure payment options. Enjoy fast
      processing, global accessibility, and a seamless trading experience.
    </p>

    {/* CTA */}
    <div className="mt-8 flex flex-wrap justify-center gap-4">
     <PrimaryButton href="/register">
       Open Live Account
     </PrimaryButton>
    </div>

  </div>
</section>
  );
}