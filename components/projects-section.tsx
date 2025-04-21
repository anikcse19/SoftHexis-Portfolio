"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

const projectsData = [
  {
    id: 1,
    title: "Aetherial E-commerce Platform",
    description: "A premium online shopping experience for a luxury fashion brand, featuring seamless payments, product visualization, and responsive design.",
    image: "https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: ["Web Development", "UI/UX Design"],
    link: "#"
  },
  {
    id: 2,
    title: "Horizon Travel Mobile App",
    description: "An award-winning travel companion app with personalized recommendations, interactive maps, and social sharing capabilities.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: ["App Development", "UI/UX Design"],
    link: "#"
  },
  {
    id: 3,
    title: "Pulse Fitness Dashboard",
    description: "A comprehensive analytics platform for fitness enthusiasts to track workouts, nutrition, and progress with data visualizations.",
    image: "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: ["Web Development"],
    link: "#"
  },
  {
    id: 4,
    title: "Symphony Music Streaming",
    description: "A clean, intuitive interface for discovering and enjoying music with personalized playlists and artist recommendations.",
    image: "https://images.pexels.com/photos/3182744/pexels-photo-3182744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: ["UI/UX Design", "App Development"],
    link: "#"
  },
  {
    id: 5,
    title: "Verdant Smart Home System",
    description: "A comprehensive IoT control interface for managing home automation with voice commands and usage analytics.",
    image: "https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: ["Web Development", "App Development"],
    link: "#"
  },
  {
    id: 6,
    title: "Nova Creative Portfolio",
    description: "A stunning portfolio website for a creative agency, showcasing their work with immersive visuals and smooth animations.",
    image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: ["UI/UX Design", "Web Development"],
    link: "#"
  }
]

const categories = ["All", "Web Development", "UI/UX Design", "App Development"]

const ProjectCard = ({ project, index }: { project: typeof projectsData[0], index: number }) => {
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
            className="text-white hover:underline flex items-center"
          >
            View Project <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.category.map((cat) => (
            <span key={cat} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
              {cat}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
      </div>
    </motion.div>
  )
}

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All")
  
  const filteredProjects = activeFilter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category.includes(activeFilter))
  
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Explore our portfolio of successful projects that showcase our expertise in design and development.
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
  )
}

export default ProjectsSection