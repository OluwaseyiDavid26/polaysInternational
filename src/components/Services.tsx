import React from "react";
import { Award, PenTool, Armchair, Search } from "lucide-react";

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      icon: <Award className="w-20 h-20 stroke-[1]" />,
      title: "QUALITY WORK",
      description: "Consultations, Trainings & Procurements",
    },
    {
      id: 2,
      icon: <PenTool className="w-20 h-20 stroke-[1]" />,
      title: "DESIGNS",
      description: "Architectural and Engineering Designs and Construction",
    },
    {
      id: 3,
      icon: <Armchair className="w-20 h-20 stroke-[1]" />,
      title: "REAL ESTATES DEVELOPMENT",
      description: "Manages and Develops Real Estate at all levels",
    },
    {
      id: 4,
      icon: <Search className="w-20 h-20 stroke-[1]" />,
      title: "PROJECT MANAGEMENT",
      description: "Manage Projects with Deadlines in mind for Job duration",
    },
  ];

  return (
    <section id="services" className="relative w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-20">
          <span className="text-red-500 text-xs font-semibold uppercase tracking-widest block mb-4">
            OUR SERVICES
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif text-blue-900 mb-6">
            Why you will enjoy working with us
          </h2>
          <div className="w-16 h-0.5 bg-blue-900 mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service) => (
            <div key={service.id} className="text-center group">
              {/* Icon Container */}
              <div className="mb-8 inline-flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="text-red-500">{service.icon}</span>
              </div>

              {/* Service Info */}
              <div>
                <h3 className="text-sm font-bold text-blue-900 mb-4 uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
