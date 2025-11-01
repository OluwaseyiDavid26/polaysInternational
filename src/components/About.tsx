// import React from "react";
import aboutImg from "../assets/about.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-20 bg-white overflow-hidden"
    >
      {/* Background Decorative SVG */}
      <svg
        className="absolute bottom-0 right-0 opacity-5 pointer-events-none"
        width="444"
        height="721"
        viewBox="0 0 444 721"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M0.769252 365.057L117.32 627.406H292.971L176.421 365.057H0.769252Z"
            stroke="#000000"
          />
          <path
            d="M605.475 68.2185L488.925 330.567L313.273 330.567L429.823 68.2185H605.475Z"
            stroke="#000000"
          />
          <path
            d="M157.597 458.151L274.147 720.5H449.799L333.249 458.151H157.597Z"
            stroke="#000000"
          />
          <path
            d="M449.8 161.312L333.249 423.661L157.598 423.661L274.148 161.312H449.8Z"
            stroke="#000000"
          />
          <path
            d="M233.605 297.339L350.155 559.688H525.807L409.256 297.339H233.605Z"
            stroke="#000000"
          />
          <path
            d="M372.64 0.499969L256.089 262.849L80.4375 262.849L196.988 0.499969H372.64Z"
            stroke="#000000"
          />
        </g>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <img
              src={aboutImg}
              alt="About Polays International"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            {/* Section Label */}
            <span className="text-red-500 text-sm font-semibold uppercase tracking-wider">
              About Us
            </span>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 leading-tight">
              Polays International Concept Limited
              <span className="block w-20 h-1 bg-red-500 mt-4"></span>
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                PICL is a 21st century company, and prides itself in its highly
                effective and streamlined methodology for conducting business
                and service delivery. A wholly Nigerian owned company
                incorporated on the 22nd of June, 2016 as a Private Limited
                Liability Company, operating under the provisions of the
                Companies and Allied Matters Act of 1990.
              </p>
              <p>
                PICL is established to provide a broad spectrum of services
                ranging from but not limited to Architectural and Engineering
                Designs and Construction, Consulting, Project Management, Real
                Estates Oil and Gas, Renewable energy, procurement,
                Communication, and Trainings.
              </p>
            </div>

            {/* CTA Link */}
          </div>
        </div>
      </div>
    </section>
  );
}
