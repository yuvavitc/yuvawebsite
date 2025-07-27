import React from "react";
import { motion } from "framer-motion";
import TeamCard from "../components/TeamCard.tsx";
import "../styles/aos-custom.css";

const coreTeam = [
  {
    name: "Yogesh Ravi",
    role: "Chair",
    linkedin: "#"
  },
  {
    name: "Suba shree",
    role: "Co-chair",
    linkedin: "#"
  },
  {
    name: "Sanjith",
    role: "Advisory",
    linkedin: "#"
  },
  {
    name: "Aathi",
    role: "Marketing",
    linkedin: "#"
  },
  {
    name: "Giri, Dheepika, Akshara",
    role: "Design",
    linkedin: "#"
  },
  {
    name: "Yuvaraj, Dharshini",
    role: "Event Management",
    linkedin: "#"
  },
  {
    name: "Anish, Brindha",
    role: "Visual Media",
    linkedin: "#"
  },
  {
    name: "Mansa",
    role: "Social Media",
    linkedin: "#"
  },
  {
    name: "Karthi",
    role: "Photography",
    linkedin: "#"
  },
  {
    name: "Yashwant, Arun",
    role: "Discipline",
    linkedin: "#"
  },
  {
    name: "Andrew",
    role: "Technical",
    linkedin: "#"
  },
];

const AboutUs = () => (
  <main className="min-h-screen bg-matisse font-sans">
    {/* Mission & Story */}
    <section className="max-w-4xl mx-auto px-4 py-16 flex flex-col gap-8">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-tango mb-4 font-serif tracking-wide">
          About <span className="text-apple">YUVA</span>
        </h1>
        <p className="text-xl md:text-2xl text-white mb-4 font-light">
          <span className="font-bold text-apple">MISSION:</span> Empower youth to lead with purpose, compassion, and creativity.
        </p>
        <p className="max-w-2xl mx-auto text-white text-lg md:text-xl">
          YUVA is more than a movement—it's a living canvas for young minds to paint their dreams.<br />
          Our story is woven with threads of hope, action, and unity. From humble beginnings, YUVA has grown into a vibrant community, igniting meaningful change through education, innovation, and empathy.
        </p>
      </motion.div>
    </section>

    {/* Core Team */}
    <section className="bg-woodsmoke pb-16 pt-10 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-tango text-center mb-10 font-serif tracking-wider">
        Our Core Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {coreTeam.map((member, idx) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * idx, duration: 0.5 }}
          >
            <TeamCard {...member} />
          </motion.div>
        ))}
      </div>
    </section>
  </main>
);

export default AboutUs;