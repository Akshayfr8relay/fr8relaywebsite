import { FaClock, FaRecycle, FaHome, FaLeaf } from "react-icons/fa";

export default function RelayModelSection() {
  return (
    <section className="bg-[#0d0d0d] text-white py-20 px-4 md:px-8 font-roboto">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12">
        {/* Left Title Column */}
        <div className="md:col-span-2 flex items-start">
          <h2 className="text-3xl md:text-[2.5rem] font-light leading-snug tracking-tight">
            Relay Long-Haul Trucking
            <br />
            Smarter logistics for a resilient, efficient future.
          </h2>
        </div>

        {/* Right Features Grid */}
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-[#141414] p-7 md:p-8 rounded-xl shadow-sm hover:bg-[#1c1c1c] transition duration-200">
            <FaClock className="text-white text-[18px] mb-6" />
            <h3 className="text-base md:text-[18px] font-normal mb-2">
              Reduce Idle Time & Empty Miles
            </h3>
            <p className="text-[16px] text-white/80 leading-[1.7]">
              Patented Technology for matching trucks & effective utilization of
              trucks by using machine learning models, Relay nodes cut waiting
              time by 50% & boosting efficiency.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#141414] p-7 md:p-8 rounded-xl shadow-sm hover:bg-[#1c1c1c] transition duration-200">
            <FaRecycle className="text-white text-[18px] mb-6" />
            <h3 className="text-base md:text-[18px] font-normal mb-2">
              Maximize Asset Utilization
            </h3>
            <p className="text-[16px] text-white/80 leading-[1.7]">
              One trailer, multiple drivers, with smart patented algorithm would
              be matched in real-time, Enabling 24/7 relay motion and fewer
              empty miles.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#141414] p-7 md:p-8 rounded-xl shadow-sm hover:bg-[#1c1c1c] transition duration-200">
            <FaHome className="text-white text-[18px] mb-6" />
            <h3 className="text-base md:text-[18px] font-normal mb-2">
              Driver Well-Being
            </h3>
            <p className="text-[16px] text-white/80 leading-[1.7]">
              Drivers switch loads at nodes. More home time, less fatigue, and
              safer roads, effectively Increasing driver satisfaction by 80%.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#141414] p-7 md:p-12 rounded-xl shadow-sm hover:bg-[#1c1c1c] transition duration-200">
            <FaLeaf className="text-white text-[18px] mb-6" />
            <h3 className="text-base md:text-[18px] font-normal mb-2">
              Decarbonize the Supply Chain
            </h3>
            <p className="text-[16px] text-white/80 leading-[1.7]">
              Less idling, fewer emissions. Sets the foundation for electric
              fleets & more Opportunities for rural Infrastructure development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
