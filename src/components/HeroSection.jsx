export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden font-roboto">
      {/* Background Video */}
      <video
        className="absolute w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/file.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay from Purple to Black */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-[#8e4ab53a]" />

      {/* Centered Content Container */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4">
        {/* Stylish Transparent Box */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 text-center max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white leading-tight tracking-tight">
            <strong className="bg-gradient-to-r from-[#3b55d1] to-[#8d4ab5] bg-clip-text text-transparent">
              FR8relay
            </strong>
            <br />
            Revolutionizing Freight with{" "}
            <strong className="bg-gradient-to-r from-[#3b55d1] to-[#8d4ab5] bg-clip-text text-transparent">
              AI.
            </strong>
          </h1>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto md:text-lg">
            We make freight faster, fairer, and more efficient—giving brokers
            better deals and drivers better days. FR8relay helps brokers
            automate outreach, negotiate smarter, and deliver faster, all
            powered by cutting-edge logistics AI.
          </p>

          <button className="mt-8 bg-[#93e2ff] text-black font-bold text-lg md:text-xl px-8 py-3 rounded-md hover:bg-[#b34aaf] hover:text-white transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
