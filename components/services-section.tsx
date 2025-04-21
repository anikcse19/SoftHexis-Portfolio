"use client"

import { motion, useInView } from "framer-motion"
import { Code, Palette, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRef } from "react"

const servicesData = [
  {
    title: "UI/UX Design",
    description: "We create intuitive, engaging interfaces that delight users and enhance brand perception. Our design process is deeply rooted in user research, ensuring every interaction feels natural and purposeful.",
    icon: Palette,
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Usability Testing"]
  },
  {
    title: "Web Development",
    description: "We build responsive, fast, and scalable websites that look stunning on any device. Using modern technologies and development practices, we ensure your web presence is both beautiful and functional.",
    icon: Code,
    features: ["Responsive Design", "Front-end Development", "Back-end Systems", "E-commerce Solutions", "CMS Integration"]
  },
  {
    title: "App Development",
    description: "Our mobile applications combine elegant design with powerful functionality. We develop native and cross-platform apps that provide seamless experiences across iOS and Android devices.",
    icon: Smartphone,
    features: ["iOS Development", "Android Development", "Cross-platform Solutions", "UI Animation", "API Integration"]
  }
]

const ServiceCard = ({ service, index }: { service: typeof servicesData[0], index: number }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })
  
  const { title, description, icon: Icon, features } = service
  
  return (
    <motion.div 
      ref={cardRef}
      className="group bg-card border rounded-2xl p-8 h-full flex flex-col hover-card"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <div className="mt-auto">
        <h4 className="font-medium mb-4">What we offer:</h4>
        <ul className="space-y-2 mb-6">
          {features.map((feature, i) => (
            <motion.li 
              key={i} 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.1) }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
        
        <Button 
          asChild 
          variant="outline" 
          className="w-full mt-4 hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <Link href="#contact">Learn More</Link>
        </Button>
      </div>
    </motion.div>
  )
}

const ServicesSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  return (
    <section id="services" className="py-24 bg-muted/30 section-container" ref={sectionRef}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 section-content">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg">
            We provide comprehensive design and development solutions tailored to your unique needs.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection