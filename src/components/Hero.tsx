import heroBg from "../assets/gall4.jpg";

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
      {/* Subtle Overlay to brighten the image slightly and improve text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white w-full">
        <div className="max-w-2xl mt-[-40px]">
          {/* Main Heading */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-3 leading-tight animate-fadeInUp"
            style={{
              animationDelay: "0.2s",
              color: "#ffffff",
              textShadow:
                "3px 3px 10px rgba(0,0,0,0.9), -1px -1px 5px rgba(0,0,0,0.7), 0 0 25px rgba(0,0,0,0.8)",
            }}
          >
            Perfect Design
            <br />
            For Your Plans
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl font-semibold mb-4 leading-relaxed animate-fadeInUp max-w-lg"
            style={{
              animationDelay: "0.4s",
              color: "#f0f0f0",
              textShadow:
                "2px 2px 8px rgba(0,0,0,0.9), -1px -1px 4px rgba(0,0,0,0.7), 0 0 20px rgba(0,0,0,0.8)",
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
              style={{
                boxShadow: "0 4px 20px rgba(0,0,0,0.6)",
              }}
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
