import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "RealTime Collaborative Code Editor",
    description:
      "A real-time collaborative code editor that allows multiple users to write and edit code simultaneously using WebSockets. Features include live cursor updates, instant synchronization, and a smooth React-based UI.",
    image: "/project1.png",
    tags: ["React", "WebSocket", "Node"],
    githubUrl: "https://github.com/cracker0001/RealTime_Code_Editor/",
  },
  {
    id: 2,
    title: "Hello Mate",
    description:
      "A Tinder-like matching application built with Node.js and MongoDB that enables user profile creation, swipe-based interactions, and real-time match handling through RESTful APIs.",
    image: "/project2.png",
    tags: ["Node", "API", "MongoDB"],
    githubUrl: "https://github.com/cracker0001/Tinder/",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform featuring secure user authentication, product management, cart functionality, and online payments integration using Stripe.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    githubUrl: "https://github.com/cracker0001/E-Commerce/",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted
          with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover h-full flex flex-col"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                {/* Description (FIXED HEIGHT) */}
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {project.description}
                </p>

                {/* Footer pinned bottom */}
                <div className="mt-auto pt-4 flex justify-between items-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/cracker0001"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
