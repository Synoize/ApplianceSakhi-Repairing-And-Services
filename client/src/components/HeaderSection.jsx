import React, { useState, useEffect } from "react";
import { MoveRight } from "lucide-react";
import { slides } from "../assets/assets";

const HeaderSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden h-[78vh]">
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-blue-600/20"></div>

            <div className="relative z-10 flex flex-col items-start justify-center px-6 md:px-12 py-24 md:py-40 h-full text-white">
              <h4 className="text-yellow-400 font-light text-lg mb-8">
                {slide.subtitle}
              </h4>
              <h1 className="text-4xl md:text-7xl max-w-2xl font-bold mb-8">
                {slide.title}
              </h1>
              <p className="text-gray-200 text-lg font-light max-w-xl mb-8">{slide.description}</p>
              <button onClick={() => scrollTo(0, 700)} className="bg-yellow-400 text-black px-5 py-3 rounded-full group flex gap-4 cursor-pointer hover:scale-102">
                Read More{" "}
                <MoveRight className="group-hover:ml-1 transition-all ease-in-out duration-300" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              current === i ? "bg-yellow-400 scale-110" : "bg-white/60"
            }`}
            onClick={() => setCurrent(i)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeaderSection;
