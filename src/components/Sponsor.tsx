import React from "react";

// Import sponsor logos
import allGraceEnergy from "../assets/BitmapAll Grace Energy (1).png";
import allesCharis from "../assets/BitmapAlles Charis.png";
import citec from "../assets/BitmapCitec.png";
import greenEnergy from "../assets/BitmapGreen Energy Int'l.png";
import rbd from "../assets/RBD.jpeg";
import oau from "../assets/OAU.jpeg";
import folton from "../assets/folton.jpeg";

interface Sponsor {
  id: number;
  name: string;
  logo: string;
  url?: string;
  height?: string;
}

const SponsorsSection: React.FC = () => {
  const sponsors: Sponsor[] = [
    { id: 1, name: "All Grace Energy", logo: allGraceEnergy, url: "#" },
    { id: 2, name: "Alles Charis Group", logo: allesCharis, url: "#" },
    { id: 3, name: "CITEC", logo: citec, url: "#", height: "90px" },
    { id: 4, name: "Green Energy International", logo: greenEnergy, url: "#" },
    { id: 5, name: "Redeemed Business District", logo: rbd, url: "#" },
    { id: 6, name: "OAU", logo: oau, url: "#", height: "90px" },
    { id: 7, name: "Folton", logo: folton, url: "#", height: "90px" },
  ];

  return (
    <section className="w-full py-20 bg-white relative overflow-hidden">
      {/* Subtle background color blobs (not blurred logos) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
              Our Partners
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto" />
          </div>

          {/* Sponsors Grid */}
          <div className="flex flex-wrap justify-center items-center gap-8 lg:flex-nowrap lg:gap-12">
            {sponsors.map((sponsor, index) => (
              <div
                key={sponsor.id}
                className="group transition-transform duration-300 hover:scale-110"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <a
                  href={sponsor.url || "#"}
                  className="block p-4 rounded-lg transition-all duration-300 hover:shadow-xl bg-white"
                  title={sponsor.name}
                >
                  <div
                    className="flex items-center justify-center"
                    style={{ height: sponsor.height || "80px" }}
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-w-full max-h-full object-contain transition-all duration-300"
                      style={{
                        width: "auto",
                        maxWidth: "180px",
                      }}
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default SponsorsSection;
