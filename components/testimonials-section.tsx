"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonialsData = [
  {
    id: 1,
    quote:
      "SoftHexis transformed our digital presence completely. Their attention to detail and understanding of our brand was exceptional.",
    author: "Sarah Thompson",
    position: "CEO, Lumina Brands",
    company: "Lumina Brands",
  },
  {
    id: 2,
    quote:
      "The team delivered our mobile app ahead of schedule with quality that exceeded our expectations. Our user engagement has increased by 150% since launch.",
    author: "Michael Chen",
    position: "Product Manager",
    company: "TechVision Inc.",
  },
  {
    id: 3,
    quote:
      "Working with SoftHexis has been a game-changer for our e-commerce platform. Their UX improvements directly led to a 35% increase in conversion rates.",
    author: "Jessica Williams",
    position: "Marketing Director",
    company: "StyleHub",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client Testimonials
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it – here's what our clients have to
            say.
          </p>
        </motion.div>

        <div
          ref={testimonialsRef}
          className="relative max-w-4xl mx-auto overflow-hidden py-8"
        >
          <div
            className="transition-transform duration-500 ease-in-out flex"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className="min-w-full px-4">
                <div className="bg-card border rounded-xl p-8 md:p-10 text-center">
                  <Quote className="mx-auto h-12 w-12 text-primary/30 mb-6" />
                  <p className="text-xl md:text-2xl italic mb-8">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-lg">
                      {testimonial.author}
                    </p>
                    <p className="text-muted-foreground">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  index === activeIndex
                    ? "bg-primary"
                    : "bg-muted-foreground/30"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
