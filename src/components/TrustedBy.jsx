import React from "react";

export default function TrustedBy() {
  return (
    <section className="bg-[#ffffff] text-black py-16 px-6 font-roboto relative overflow-hidden">
      {/* Text & Trustpilot Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-normal leading-relaxed">
          <p className="text-md md:text-2xl font-light leading-relaxed text-black">
            FR8relay connects shippers, carriers, and drivers through our
            patented relay system. By intelligently matching trucks every 4–5
            hours, we enable drivers to swap trailers, reduce idle time, and get
            home daily Improving delivery times and asset utilization for
            everyone on the road.
          </p>
        </h2>
      </div>

      {/* Divider */}
      <div
        className="w-[80%] mx-auto my-10 h-[1px] bg-[length:8px_1px] bg-repeat-x bg-black/30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, white 0px, white 2px, transparent 2px, transparent 10px)",
        }}
      />

      <div className="text-center text-xs text-black/60 uppercase tracking-widest mb-6">
        Backed By
      </div>
      {/* Trusted By Logos */}
      <div className="overflow-hidden relative w-full">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-10">
          {["USDA", "NSF", "Arkansas Inc", "Us Department of Energy"].map(
            (name, idx) => (
              <img
                key={idx}
                src={`/logos/${name}.png`}
                alt={`${name} logo`}
                className="h-12 md:h-12 object-contain"
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
