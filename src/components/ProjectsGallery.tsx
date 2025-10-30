import React from "react";
import { Square, ArrowUp, Bed, Bath } from "lucide-react";

// Import project images
import projectImg1 from "../assets/gall1.jpg";
import projectImg2 from "../assets/gall2.jpg";
import projectImg3 from "../assets/wuse-height1.jpg";
import projectImg4 from "../assets/gall4.jpg";

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
    <div className="relative group overflow-hidden cursor-pointer h-full">
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 tracking-wide drop-shadow-lg">
            {project.title}
          </h3>

          <ul className="flex flex-wrap gap-6 mb-4">
            {project.info.area && (
              <li className="flex items-center gap-2">
                <Square className="w-5 h-5 text-red-500 drop-shadow-lg" />
                <span className="text-sm font-medium drop-shadow-lg">
                  {project.info.area}
                </span>
              </li>
            )}
            {project.info.height && (
              <li className="flex items-center gap-2">
                <ArrowUp className="w-5 h-5 text-red-500 drop-shadow-lg" />
                <span className="text-sm font-medium drop-shadow-lg">
                  {project.info.height}
                </span>
              </li>
            )}
            {project.info.rooms && (
              <li className="flex items-center gap-2">
                <Bed className="w-5 h-5 text-red-500 drop-shadow-lg" />
                <span className="text-sm font-medium drop-shadow-lg">
                  {project.info.rooms}
                </span>
              </li>
            )}
            {project.info.baths && (
              <li className="flex items-center gap-2">
                <Bath className="w-5 h-5 text-red-500 drop-shadow-lg" />
                <span className="text-sm font-medium drop-shadow-lg">
                  {project.info.baths}
                </span>
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
      image: projectImg1,
      info: {
        area: "96 m2",
        height: "3.3 m",
        rooms: "5 Offices",
        baths: "Station",
      },
    },
    {
      id: 2,
      title: "Design Drawing",
      image: projectImg2,
      info: {
        area: "100 m2",
        height: "5.3 m",
        rooms: "6 rooms",
        baths: "3 bath",
      },
    },
    {
      id: 3,
      title: "Renovation & Remodeling",
      image: projectImg3,
      info: {
        area: "120 m2",
        height: "7.3 m",
        rooms: "24 rooms",
        baths: "28 bath",
      },
    },
    {
      id: 4,
      title: "3D Drawing",
      image: projectImg4,
      info: {
        area: "150 m2",
        height: "7.4 m",
      },
    },
  ];

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* First large project - left column */}
          <div className="md:col-span-4 h-[600px]">
            <ProjectCard project={projects[0]} />
          </div>

          {/* Right column with 3 projects */}
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Top two projects */}
            <div className="h-[290px]">
              <ProjectCard project={projects[1]} />
            </div>
            <div className="h-[290px]">
              <ProjectCard project={projects[2]} />
            </div>

            {/* Bottom full-width project */}
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
