import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

const carouselImages = [
  "/benefits/one.jpg",
  "/benefits/two.jpg",
  "/benefits/three.jpg",
  "/benefits/four.jpg",
  "/benefits/five.jpg",
];

export default function Benefits() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % carouselImages.length);
  const prevSlide = () =>
    setCurrent((current - 1 + carouselImages.length) % carouselImages.length);

  return (
    <section id="platform" className="bg-white py-20 px-6 font-roboto">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div>
          <p className="text-sm text-gray-600 mb-2">
            Smart Load & Carrier Matching, Automated by Fr8relay AI
          </p>
          <h2 className="text-4xl md:text-3xl font-roboto text-[#111] leading-tight mb-10">
            AI-driven platform that finds, negotiates, and follows up — so you
            don’t have to.
          </h2>

          <ul className="space-y-8">
            <li className="flex items-start gap-5">
              <div className="bg-[#75399d3a] p-4 rounded-full">
                <FaCheckCircle className="text-[#75399d] text-xl" />
              </div>
              <div>
                <h4 className="font-roboto text-[#222] mb-1">
                  AI Negotiation Agent
                </h4>
                <p className="text-gray-600">
                  Automatically negotiates with carriers to get the best rates —
                  saving hours of manual work and maximizing profitability.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-5">
              <div className="bg-[#75399d3a] p-4 rounded-full">
                <FaCheckCircle className="text-[#75399d] text-xl" />
              </div>
              <div>
                <h4 className="font-roboto text-[#222] mb-1">
                  Automated Follow-Up
                </h4>
                <p className="text-gray-600">
                  Voice + Email agents handle communication with carriers in
                  real time — no chasing, no back-and-forth.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-5">
              <div className="bg-[#75399d3a] p-4 rounded-full">
                <FaCheckCircle className="text-[#75399d] text-xl" />
              </div>
              <div>
                <h4 className="font-roboto text-[#222] mb-1">
                  Seamless All-in-One Platform
                </h4>
                <p className="text-gray-600">
                  Intuitive dashboard for brokers to manage loads,
                  communications, and insights — all in one place.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Image Carousel */}
        <div className="relative h-[650px] w-full max-w-lg mx-auto rounded-2xl overflow-hidden shadow-md">
          <img
            src={carouselImages[current]}
            alt="AI feature screenshot"
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <div
              onClick={prevSlide}
              className="text-white text-3xl cursor-pointer hover:scale-110 transition"
            >
              ❮
            </div>
            <div
              onClick={nextSlide}
              className="text-white text-3xl cursor-pointer hover:scale-110 transition"
            >
              ❯
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
