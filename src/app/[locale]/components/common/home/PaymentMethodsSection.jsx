import Image from "next/image";

export default function PaymentMethodsSection() {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-[28px] bg-[#F1F2F4] border border-gray-300 px-6 py-10 md:px-10 md:py-12 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
            
            {/* Left Content */}
            <div className="max-w-md">
              <h2 className="HeadingH3">
                Method of Payment, Card Types Accepted & Currency
              </h2>

              <p className="mt-4 text-[14px] md:text-[15px] text-[#666] leading-6">
                We accept payments online using Visa and MasterCard credit/debit
                card in AED (and/or any other available currency listed in the
                payments section).
              </p>
            </div>

            {/* Right Image */}
            <div className="w-full relative h-[300px]">
              <Image
                src="/home/clientpayment.webp" // 👉 replace with your image path
                alt="Payment Methods"
                fill
                className="object-contain"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}