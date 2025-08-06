import React from "react";

export default function TrustedBy() {
  return (
    <section
      id="platform"
      className="bg-[#ffffff] text-black py-16 px-6 font-roboto relative overflow-hidden"
    >
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
          {[
            "USDA",
            "NSF",
            "Arkansas Inc",
            "womenintech",
            "StartupJunkie",
            "watco",
            "Us Department of Energy",
            "Chouteau",
            "forth",
          ].map((name, idx) => (
            <img
              key={idx}
              src={`/logos/${name}.png`}
              alt={`${name} logo`}
              className="h-12 md:h-12 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
