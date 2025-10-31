// import React from "react";
import heroBg from "../assets/hero-img.png";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0  to-transparent z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-white w-full">
        <div className="max-w-2xl">
          {/* Small Title */}
          <div className="mb-6 animate-fadeInUp">
            <span className="inline-block bg-red-500 text-white px-5 py-2 rounded-lg text-sm font-semibold">
              Polays International Concept Limited
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fadeInUp"
            style={{
              animationDelay: "0.2s",
              color: "#0039E6",
              textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            Perfect Design
            <br />
            For Your Plans
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl font-bold mb-12 leading-relaxed animate-fadeInUp max-w-lg"
            style={{
              animationDelay: "0.4s",
              color: "#0039E6",
            }}
          >
            Transform your vision into reality with innovative architectural
            solutions.
          </p>

          {/* CTA Button */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
            <a
              href="#about"
              className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold px-10 py-4 rounded-sm transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group"
            >
              <span className="relative z-10">Learn More</span>
              {/* Hover effect borders */}
              <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white transition-all duration-300 group-hover:w-full group-hover:h-full"></span>
              <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white transition-all duration-300 group-hover:w-full group-hover:h-full"></span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scrollDown {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }

        .animate-scrollDown {
          animation: scrollDown 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
