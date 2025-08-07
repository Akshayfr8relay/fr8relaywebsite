import { FaClock, FaRecycle, FaHome, FaLeaf } from "react-icons/fa";

export default function RelayModelSection() {
  const features = [
    {
      title: "Reduce Idle Time & Empty Miles",
      description:
        "Patented Technology for matching trucks & effective utilization of trucks by using machine learning models, Relay nodes cut waiting time by 50% & boosting efficiency.",
      icon: <FaClock className="text-[#75399d] text-xl mb-2" />,
      image: "/images/slide1.png",
    },
    {
      title: "Maximize Asset Utilization",
      description:
        "One trailer, multiple drivers, with smart patented algorithm would be matched in real-time, Enabling 24/7 relay motion and fewer empty miles.",
      icon: <FaRecycle className="text-[#75399d] text-xl mb-2" />,
      image: "/images/slide1.png",
    },
    {
      title: "Driver Well-Being",
      description:
        "Drivers switch loads at nodes. More home time, less fatigue, and safer roads, effectively Increasing driver satisfaction by 80%.",
      icon: <FaHome className="text-[#75399d] text-xl mb-2" />,
      image: "/images/slide1.png",
    },
    {
      title: "Decarbonize the Supply Chain",
      description:
        "Less idling, fewer emissions. Sets the foundation for electric fleets & more Opportunities for rural Infrastructure development.",
      icon: <FaLeaf className="text-[#75399d] text-xl mb-2" />,
      image: "/images/slide1.png",
    },
  ];

  return (
    <>
      <section
        id="platform"
        className="bg-[#fff] text-black py-20 px-4 md:px-10 font-roboto"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 ">
          <p className="text-xl font-roboto text-black-600 mb-2 ml-15 pb-5">
            Benefits of using Fr8relay AI Platform
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 ">
          {features.map((feature, index) => {
            // Check if the card is in the first row (index 0 or 1)
            const isInFirstRow = index < 2;

            return (
              <div
                key={index}
                className={`flex shadow-md bg-white  overflow-hidden h-[320px] ${
                  // Apply flex-row-reverse for the first row to get Text | Image layout
                  isInFirstRow ? "" : "flex-row-reverse"
                }`}
              >
                {/* Image with inward triangle */}
                <div className="relative w-1/2 h-full">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className={`w-full h-full object-cover ${
                      // Use 'left' triangle for the first row, 'right' for the second
                      isInFirstRow
                        ? "clip-triangle-right"
                        : "clip-triangle-left"
                    }`}
                  />
                </div>

                {/* Text Content */}
                <div className="w-1/2 p-6 md:p-5 flex flex-col justify-center">
                  {feature.icon}
                  <h3 className="text-[#8d4ab5] font-roboto text-base md:text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-black/80 text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                  <h3 className="text-[#8d4ab5] font-roboto text-base md:text-sm mb-2">
                    Read More
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Triangle Cut Styles */}
        <style jsx="true">{`
          .clip-triangle-right {
            clip-path: polygon(
              0 0,
              100% 0,
              100% 40%,
              90% 50%,
              100% 60%,
              100% 100%,
              0 100%
            );
          }
          .clip-triangle-left {
            clip-path: polygon(
              0 0,
              100% 0,
              100% 100%,
              0 100%,
              0 60%,
              10% 50%,
              0 40%
            );
          }

          @media (max-width: 768px) {
            .clip-triangle-right,
            .clip-triangle-left {
              clip-path: none;
            }
          }
        `}</style>
      </section>
    </>
  );
}
