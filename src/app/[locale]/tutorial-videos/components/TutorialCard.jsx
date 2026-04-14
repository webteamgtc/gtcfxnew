function TutorialCard({ featured }) {
  return (
    <div
      className={`group relative h-full w-full overflow-hidden rounded-[24px] bg-white border border-[#E5E7EB] transition hover:shadow-lg`}
    >
      {/* Image */}
      <div className="relative h-full w-full">
        <img
          src="/images/tutorial/sample.webp"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 p-4 md:p-6 text-white">

          <h3
            className={`font-semibold ${
              featured ? "text-xl md:text-2xl" : "text-base md:text-lg"
            }`}
          >
            How to Open an Account
          </h3>

          {featured && (
            <p className="text-sm text-white/80 mt-2">
              Step-by-step guide to get started quickly.
            </p>
          )}
        </div>

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-12 w-12 rounded-xl bg-white/90 flex items-center justify-center">
            ▶
          </div>
        </div>
      </div>
    </div>
  );
}