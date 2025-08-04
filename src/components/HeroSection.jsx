export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden font-roboto">
      <video
        className="absolute w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/file.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6 text-white/80">
        <h1 className="text-[3.5rem] md:text-[5rem] leading-[1.1] tracking-tight">
          <strong className="text-white"> FR8relay</strong> <br />{" "}
          Revolutionizing Freight with
          <strong className="text-white"> AI.</strong>
        </h1>
        <p>
          We make freight faster, fairer, and more efficient giving brokers
          better deals and drivers better days.
        </p>

        <p>
          FR8relay helps brokers automate outreach, negotiate smarter, and
          deliver faster all powered by cutting-edge logistics AI.
        </p>

        <button className="mt-8 bg-[#93e2ff] text-black text-lg md:text-xl px-8 py-3 rounded-md  hover:bg-[#b34aaf] transition">
          Get Started
        </button>
      </div>
    </div>
  );
}
