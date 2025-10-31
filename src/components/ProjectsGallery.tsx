import React from "react";
import { Square, ArrowUp, Bed, Bath } from "lucide-react";

interface ProjectInfo {
  area?: string;
  height?: string;
  rooms?: string;
  baths?: string;
}

interface Project {
  id: number;
  title: string;
  image: string;
  info: ProjectInfo;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer h-full">
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Hidden Overlay (shows on hover) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
        <div>
          <h3 className="text-2xl font-semibold mb-4 tracking-wide text-gray-100">
            {project.title}
          </h3>

          <ul className="flex flex-wrap gap-4 text-sm">
            {project.info.area && (
              <li className="flex items-center gap-2">
                <Square className="w-4 h-4 text-red-400" />
                <span className="text-gray-200">{project.info.area}</span>
              </li>
            )}
            {project.info.height && (
              <li className="flex items-center gap-2">
                <ArrowUp className="w-4 h-4 text-red-400" />
                <span className="text-gray-200">{project.info.height}</span>
              </li>
            )}
            {project.info.rooms && (
              <li className="flex items-center gap-2">
                <Bed className="w-4 h-4 text-red-400" />
                <span className="text-gray-200">{project.info.rooms}</span>
              </li>
            )}
            {project.info.baths && (
              <li className="flex items-center gap-2">
                <Bath className="w-4 h-4 text-red-400" />
                <span className="text-gray-200">{project.info.baths}</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ProjectGallery: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Project Management",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
      info: {
        area: "96 m²",
        height: "3.3 m",
        rooms: "5 Offices",
        baths: "Station",
      },
    },
    {
      id: 2,
      title: "Design Drawing",
      image:
        "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?w=800&q=80",
      info: {
        area: "100 m²",
        height: "5.3 m",
        rooms: "6 rooms",
        baths: "3 baths",
      },
    },
    {
      id: 3,
      title: "Renovation & Remodeling",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      info: {
        area: "120 m²",
        height: "7.3 m",
        rooms: "24 rooms",
        baths: "28 baths",
      },
    },
    {
      id: 4,
      title: "3D Drawing",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      info: {
        area: "150 m²",
        height: "7.4 m",
      },
    },
  ];

  return (
    <section className="w-full py-20 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Left Large Project */}
          <div className="md:col-span-4 h-[600px]">
            <ProjectCard project={projects[0]} />
          </div>

          {/* Right Side: 3 Smaller Projects */}
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-[290px]">
              <ProjectCard project={projects[1]} />
            </div>
            <div className="h-[290px]">
              <ProjectCard project={projects[2]} />
            </div>
            <div className="md:col-span-2 h-[290px]">
              <ProjectCard project={projects[3]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
