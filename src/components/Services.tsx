import React from "react";
import { Award, Pencil, Building2, ClipboardList } from "lucide-react";

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
      icon: <Award className="w-20 h-20 stroke-[1.5]" />,
      title: "QUALITY WORK",
      description: "Consultations, Trainings & Procurements",
    },
    {
      id: 2,
      icon: <Pencil className="w-20 h-20 stroke-[1.5]" />,
      title: "DESIGNS",
      description: "Architectural and Engineering Designs and Construction",
    },
    {
      id: 3,
      icon: <Building2 className="w-20 h-20 stroke-[1.5]" />,
      title: "REAL ESTATES DEVELOPMENT",
      description: "Manages and Develops Real Estate at all levels",
    },
    {
      id: 4,
      icon: <ClipboardList className="w-20 h-20 stroke-[1.5]" />,
      title: "PROJECT MANAGEMENT",
      description: "Manage Projects with Deadlines in mind for Job duration",
    },
  ];

  return (
    <section id="services" className="relative w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-red-500 text-sm font-semibold uppercase tracking-wider block mb-4">
            OUR SERVICES
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
            Why you will enjoy working with us
          </h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="text-center group cursor-pointer">
              {/* Icon Container with Red Background on Hover */}
              <div className="mb-6 inline-flex items-center justify-center w-32 h-32 bg-white border-4 border-gray-200 group-hover:bg-red-500 group-hover:border-red-500 transition-all duration-300">
                <span className="text-red-500 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </span>
              </div>

              {/* Service Info */}
              <div>
                <h3 className="text-lg font-bold text-blue-900 mb-3 uppercase tracking-wide">
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
