const steps = [
  {
    title: "Login",
    desc: "Access your client portal securely.",
  },
  {
    title: "Deposit",
    desc: "Click on wallet or deposit section.",
  },
  {
    title: "Select Method",
    desc: "Choose your preferred payment option.",
  },
];

export function FundSteps() {
  return (
    <section className="bg-primary text-white py-10 md:py-16">
      <div className="container text-center">
        <h2 className="HeadingH3 text-white">
          How to Fund Your Account
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              
              {/* Number */}
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#b68756] text-black font-bold">
                {i + 1}
              </div>

              <h3 className="font-semibold text-lg">{step.title}</h3>

              <p className="mt-2 text-sm text-white/80">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}