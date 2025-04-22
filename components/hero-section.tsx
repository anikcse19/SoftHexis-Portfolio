"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40 dark:from-background/90 dark:to-background/60 z-10"
          style={{ opacity }}
        />
        <motion.div
          className="absolute inset-0 z-0 bg-[url('https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"
          style={{ y, filter: "blur(2px)" }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-20">
        <div className="max-w-3xl">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We craft <span className="text-gradient">exceptional</span> digital
            experiences
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From concept to implementation, we bring your vision to life with
            beautiful design and flawless functionality.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="rounded-full hover:scale-105 transition-transform"
              variant="default"
            >
              <Link href="#projects">View Our Work</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full hover:scale-105 transition-transform"
            >
              <Link href="#contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full p-1">
          <div className="w-1.5 h-1.5 bg-primary rounded-full mx-auto animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
