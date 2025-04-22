"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import projectImage1 from "@/public/images/project_1.png";
import projectImage2 from "@/public/images/project_2.png";
import projectImage3 from "@/public/images/project_3.png";
import projectImage4 from "@/public/images/project_4.png";

const projectsData = [
  {
    id: 1,
    title: "Luxemart E-commerce Platform",
    description:
      "A premium online shopping experience for a luxury fashion brand, featuring seamless payments, product visualization, and responsive design.",
    image: projectImage1,
    category: ["Web Development", "UI/UX Design"],
    link: "https://modern-ecommerce-chi.vercel.app/home",
  },
  {
    id: 2,
    title: "Bondhu Group MLM Business",
    description:
      "A multi-level marketing platform for a local business, designed to manage user accounts, transactions, and product listings with an intuitive interface.",
    image: projectImage2,
    category: ["Web Development", "UI/UX Design"],
    link: "https://multi-level-marketing-bice.vercel.app/",
  },
  {
    id: 3,
    title: "Porbo Sobai Education Platform",
    description:
      "An online learning platform that connects students and educators, offering courses, quizzes, and progress tracking in a user-friendly environment.",
    image: projectImage3,
    category: ["Web Development"],
    link: "https://porbo-shobai-v01.web.app/",
  },
  {
    id: 4,
    title: "Note Nest - Note sharing Platform",
    description:
      "A collaborative note-sharing platform for students, enabling easy sharing, commenting, and organizing notes in a visually appealing interface.",

    image: projectImage4,
    category: ["UI/UX Design", "Web Development"],
    link: "https://notenest.tech/",
  },
  {
    id: 5,
    title: "HR Pool - IoT Control Interface",
    description:
      "An IoT control interface for managing smart devices in a home or office, featuring real-time monitoring, device management, and user-friendly navigation.",
    image:
      "https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: ["UI/UX Design"],
    link: "https://www.behance.net/gallery/221193433/HR-Pool%28Client-Work%29",
  },

  {
    id: 6,
    title: "Constol Business Solution",
    description:
      "A comprehensive business solution platform for managing various aspects of a business, including finance, inventory, and customer relations.",
    image:
      "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: ["UI/UX Design"],
    link: "https://www.behance.net/gallery/188573147/Web-UI-Assignment",
  },
];

const categories = ["All", "Web Development", "UI/UX Design"];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projectsData)[0];
  index: number;
}) => {
  return (
    <motion.div
      className="group relative bg-card rounded-xl overflow-hidden border h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <Link
            href={project.link}
            target="_blank"
            className="text-white hover:underline flex items-center"
          >
            View Project <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.category.map((cat) => (
            <span
              key={cat}
              className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) =>
          project.category.includes(activeFilter)
        );

  return (
    <section id="projects" className="py-24">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Explore our portfolio of successful projects that showcase our
              expertise in design and development.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className={cn(
                  "rounded-full",
                  activeFilter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-transparent text-foreground"
                )}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Button asChild size="lg" className="rounded-full">
            <Link href="#" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
