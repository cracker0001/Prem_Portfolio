import { useState } from "react";
import { cn } from "@/lib/utils";
import Icon from "../assets/html-css.png";
import ReactIcon from "../assets/react_icon.png";
import JavascriptIcon from "../assets/javascriptIcon.png";
import TypescriptIcon from "../assets/TypescriptIcon.png";
import TailwindIcon from "../assets/TailwindIcon.png";
import NextjsIcon from "../assets/NextjsIcon.png";
import NodeIcon from "../assets/NodeIcon.png";
import ExpressIcon from "../assets/ExpressIcon.png";
import mongoDbIcon from "../assets/mongoDbIcon.png";
import postgIcon from "../assets/postg.webp";
import githubIcon from "../assets/githubIcon.png";
import figmaIcon from "../assets/figmaIcon.webp";
import graphqlicon from "../assets/graphqlicon.webp";

const skills = [

  { name: "HTML/CSS", category: "frontend",icon: Icon },
  { name: "JavaScript", category: "frontend",icon: JavascriptIcon },
  { name: "React", category: "frontend",icon: ReactIcon },
  { name: "TypeScript", category: "frontend",icon: TypescriptIcon },
  { name: "Tailwind CSS", category: "frontend",icon: TailwindIcon },
  { name: "Next.js", category: "frontend",icon: NextjsIcon },

  { name: "Node.js", category: "backend",icon: NodeIcon },
  { name: "Express",category: "backend",icon: ExpressIcon },
  { name: "MongoDB", category: "backend",icon: mongoDbIcon },
  { name: "PostgreSQL", category: "backend",icon: postgIcon },
  { name: "GraphQL", category: "backend",icon: graphqlicon },

  { name: "Git/GitHub",  category: "tools",icon: githubIcon },
  { name: "Docker", category: "tools" },
  { name: "Figma", category: "tools",icon: figmaIcon },
  { name: "VS Code", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4 flex justify-between items-center">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                <img className="w-22 h-12 object-contain bg-transparent"src={skill.icon} alt="" />
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
              </div>

            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
