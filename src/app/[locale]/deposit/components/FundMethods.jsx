const methods = [
  {
    title: "Online Payments",
    desc: "Secure online payment channels based on your region.",
    icon: "💳",
  },
  {
    title: "Wallet Payments",
    desc: "Apple Pay, Google Pay, Skrill, Neteller and more.",
    icon: "👛",
  },
  {
    title: "Bank Transfer",
    desc: "Reliable wire transfers to our global banking partners.",
    icon: "🏦",
  },
];

export function FundMethods() {
  return (
    <section className="bg-gray-100 border-t border-b border-gray-300 py-10 md:py-16">
      <div className="container text-center">
        <h2 className="HeadingH3">
          Different <span className="text-[#b68756]">Payment Methods</span> to Fund
        </h2>

        <p className="Text mt-5">
          Choose your preferred funding method and start trading instantly.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {methods.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl border p-10 transition hover:shadow-xl hover:-translate-y-1 bg-white"
            >
              <div className="text-3xl mb-4">{item.icon}</div>

              <h3 className="text-lg font-semibold">{item.title}</h3>

              <p className="mt-2 text-sm text-[#6B7280] max-w-56 mx-auto">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}