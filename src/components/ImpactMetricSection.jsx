export default function ImpactMetricsSection() {
  return (
    <section className="bg-[#121212] text-white py-20 px-6 font-roboto">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Side Heading */}

        <div className="flex flex-col gap-10">
          {/* Metric 1 */}
          <div className="flex justify-between border-t border-dotted border-white/30 pt-6">
            <div className="text-4xl md:text-6xl font-light">100K+</div>

            <div className="text-sm md:text-base">
              CDL drivers going home daily
            </div>
          </div>

          {/* Metric 2 */}
          <div className="flex justify-between border-t border-dotted border-white/30 pt-6">
            <div className="text-4xl md:text-6xl font-light">50%</div>

            <div className="text-sm md:text-base">Truck idling reduced</div>
          </div>

          {/* Metric 3 */}
          <div className="flex justify-between border-t border-dotted border-white/30 pt-6">
            <div className="text-4xl md:text-6xl font-light">2×</div>

            <div className="text-sm md:text-base">Asset utilization</div>
          </div>

          {/* Metric 4 */}
          <div className="flex justify-between border-t border-dotted border-white/30 pt-6">
            <div className="text-4xl md:text-6xl font-light">&lt;60%</div>

            <div className="text-sm md:text-base">
              Potential emissions reduction
            </div>
          </div>
        </div>

        {/* Right Side Metrics */}
        <div className="flex items-start">
          <h2 className="text-2xl md:text-5xl font-light leading-snug ml-10">
            Delivering impact <br /> that drives resilient logistics &
            sustainability
          </h2>
        </div>
      </div>
    </section>
  );
}
