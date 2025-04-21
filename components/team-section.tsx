"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Linkedin, Twitter, Mail } from "lucide-react";
import sumonPic from "@/public/images/sumon_pic.jpg";
import sajidPic from "@/public/images/sajid_pic.jpg";
import anikPic from "@/public/images/anik_pic.jpeg";
import akibPic from "@/public/images/akib_pic.jpg";
import payelPic from "@/public/images/payel_pic.jpg";
import samihaPic from "@/public/images/samiha_pic.jpg";

const teamData = [
  {
    name: "Md Sumon Meah",
    role: "Lead Backend Developer",
    bio: "Sumon is a backend developer with a strong focus on building robust APIs and server-side applications, ensuring seamless data flow and security.",
    image: sumonPic,
    social: {
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/sumoncse19",
      email: "mdsumoncse19@gmail.com",
    },
  },
  {
    name: "Md Sajidul Alam",
    role: "Full Stack Developer",
    bio: "Sajid is a full-stack developer with a knack for problem-solving and a passion for building scalable web applications.",
    image: sajidPic,
    social: {
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/md-sajidul-alam",
      email: "mdsajidulalam1245@gmail.com",
    },
  },
  {
    name: "Anik Chandra Deb",
    role: "Frontend Developer",
    bio: "Anik is a frontend developer with a keen eye for detail and a passion for creating responsive, user-friendly web applications.",
    image: anikPic,
    social: {
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/anikcse19",
      email: "anikdebcse@gmail.com",
    },
  },
  {
    name: "Fahim Muntasir Akib",
    role: "Frontend Developer",
    bio: "Fahim is a frontend developer who specializes in crafting interactive and engaging user interfaces, with a strong emphasis on performance and accessibility.",

    image: akibPic,
    social: {
      twitter: "#",
      linkedin: "#",
      email: "olivia@designcraft.com",
    },
  },

  {
    name: "Fatema Tuz Zohra",
    role: "UI/UX Designer",
    bio: "Fatema is a UI/UX designer with a passion for creating intuitive and visually appealing user experiences, focusing on user-centered design principles.",
    image: samihaPic,
    social: {
      twitter: "#",
      linkedin: "#",
      email: "olivia@designcraft.com",
    },
  },
  {
    name: "Payel Tilak",
    role: "SEO Specialist & Digital Marketer",
    bio: "Payel is an SEO specialist with a deep understanding of search engine algorithms and a passion for optimizing websites to improve visibility and traffic.",
    image: payelPic,
    social: {
      twitter: "#",
      linkedin: "#",
      email: "olivia@designcraft.com",
    },
  },
];

const TeamMemberCard = ({
  member,
  index,
}: {
  member: (typeof teamData)[0];
  index: number;
}) => {
  return (
    <motion.div
      className="group bg-card border rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          width={500}
          height={500}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
          <div className="flex space-x-4">
            <Link
              href={member.social.linkedin}
              target="_blank"
              className="bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-2 transition-colors"
              aria-label={`${member.name}'s LinkedIn`}
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href={`mailto:${member.social.email}`}
              className="bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-2 transition-colors"
              aria-label={`Email ${member.name}`}
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold">{member.name}</h3>
        <p className="text-slate-600 text-sm font-medium mb-3">{member.role}</p>
        {/* <p className="text-muted-foreground text-justify text-sm">
          {member.bio}
        </p> */}
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground text-lg">
            Our talented professionals are passionate about creating exceptional
            digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
