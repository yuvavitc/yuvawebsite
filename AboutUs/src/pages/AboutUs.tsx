
// import React from "react";
// import { motion } from "framer-motion";
// import TeamCard from "../components/TeamCard.tsx";
// import "../styles/aos-custom.css";

// const coreTeam = [
//   { name: "Yogesh Ravi", role: "Chair", linkedin: "#" },
//   { name: "Suba shree", role: "Co-chair", linkedin: "#" },
//   { name: "Sanjith", role: "Advisory", linkedin: "#" },
//   { name: "Aathi", role: "Marketing", linkedin: "#" },
//   { name: "Giri, Dheepika, Akshara", role: "Design", linkedin: "#" },
//   { name: "Yuvaraj, Dharshini", role: "Event Management", linkedin: "#" },
//   { name: "Anish, Brindha", role: "Visual Media", linkedin: "#" },
//   { name: "Mansa", role: "Social Media", linkedin: "#" },
//   { name: "Karthi", role: "Photography", linkedin: "#" },
//   { name: "Yashwant, Arun", role: "Discipline", linkedin: "#" },
//   { name: "Andrew", role: "Technical", linkedin: "#" },
// ];

// const AboutUs = () => (
//   <main className="min-h-screen font-sans bg-matisse">
//     {/* Title */}
//     <section className="text-center py-12 bg-matisse">
//       <h1 className="text-4xl md:text-5xl font-extrabold text-tango font-serif tracking-wide">
//         About <span className="text-apple">YUVA</span>
//       </h1>
//     </section>

//     {/* Mission Section */}
//     <section className="bg-woodsmoke py-12 px-4">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-apple font-serif mb-6">
//           MISSION
//         </h2>
//         <p className="text-lg md:text-xl text-white font-light leading-relaxed">
//           YUVA’s mission is to empower the youth of India by creating a vibrant
//           platform that nurtures leadership, fosters creativity, and drives
//           community-led transformation. We aim to inspire young minds to become
//           changemakers through collaboration, innovation, and purposeful action
//           toward a brighter, inclusive future.
//         </p>
//       </div>
//     </section>

//     {/* Yi Section */}
//     <section className="bg-matisse py-12 px-4">
//       <div className="max-w-4xl mx-auto text-center">
//         <motion.img
//           src="/yi.png"
//           alt="Young Indians Logo"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="w-32 h-auto mx-auto mb-6"
//         />
//         <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">
//           Young Indians (Yi)
//         </h2>
//         <p className="text-lg md:text-xl text-white font-light leading-relaxed max-w-3xl mx-auto">
//           Young Indians (Yi) is a movement under the{" "}
//           <strong>Confederation of Indian Industry (CII)</strong> that aims to
//           create a platform for young Indians to lead, co-create, and influence
//           India's future. Established in 2002, Yi provides a unique opportunity
//           for young minds to work towards realizing the dream of a developed
//           nation and to imbue in them the qualities of responsible citizenship.
//         </p>
//       </div>
//     </section>

//     {/* Story Section */}
//     <section className="bg-woodsmoke py-12 px-4">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-tango font-serif mb-6">
//           Our Story
//         </h2>
//         <p className="text-lg md:text-xl text-white font-light leading-relaxed max-w-3xl mx-auto">
//           YUVA VIT Chennai is a proud chapter of YUVA, the student wing of
//           Young Indians (Yi), an initiative of the Confederation of Indian
//           Industry (CII). As a vibrant and dynamic community of passionate
//           student leaders, YUVA VIT Chennai strives to inspire, engage, and
//           empower the youth of our campus to become active contributors to the
//           nation-building process. Being a part of Young Indians, we align with
//           Yi’s national vision to “influence, inspire, and lead”. Our platform
//           nurtures responsible citizenship, leadership development, and social
//           impact by engaging youth in meaningful, action-oriented programs.
//         </p>
//       </div>
//     </section>

//     {/* Core Team Section */}
//     <section className="bg-woodsmoke pb-16 pt-10 px-4">
//       <h2 className="text-3xl md:text-4xl font-bold text-tango text-center mb-10 font-serif tracking-wider">
//         Our Core Team
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//         {coreTeam.map((member, idx) => (
//           <motion.div
//             key={member.name}
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 * idx, duration: 0.5 }}
//           >
//             <TeamCard {...member} />
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   </main>
// );

// export default AboutUs;






//with white background
// import React from "react";
// import { motion } from "framer-motion";
// import TeamCard from "../components/TeamCard.tsx";
// import "../styles/aos-custom.css";

// const coreTeam = [
//   { name: "Yogesh Ravi", role: "Chair", linkedin: "#" },
//   { name: "Suba shree", role: "Co-chair", linkedin: "#" },
//   { name: "Sanjith", role: "Advisory", linkedin: "#" },
//   { name: "Aathi", role: "Marketing", linkedin: "#" },
//   { name: "Giri, Dheepika, Akshara", role: "Design", linkedin: "#" },
//   { name: "Yuvaraj, Dharshini", role: "Event Management", linkedin: "#" },
//   { name: "Anish, Brindha", role: "Visual Media", linkedin: "#" },
//   { name: "Mansa", role: "Social Media", linkedin: "#" },
//   { name: "Karthi", role: "Photography", linkedin: "#" },
//   { name: "Yashwant, Arun", role: "Discipline", linkedin: "#" },
//   { name: "Andrew", role: "Technical", linkedin: "#" },
// ];

// const AboutUs = () => {
//   return (
//     <main className="bg-white text-woodsmoke font-sans leading-relaxed">
//       {/* Page Title */}
//       <section className="px-6 py-20 text-center max-w-4xl mx-auto">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-5xl font-extrabold font-serif text-tango"
//         >
//           About <span className="text-apple">YUVA</span>
//         </motion.h1>
//       </section>

//       {/* Mission */}
//       <section className="px-6 py-16 max-w-3xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-3xl font-semibold mb-6 text-matisse"
//         >
//           Mission
//         </motion.h2>
//         <p className="text-lg text-woodsmoke">
//           YUVA’s mission is to empower the youth of India by creating a vibrant
//           platform that nurtures leadership, fosters creativity, and drives
//           community-led transformation. We aim to inspire young minds to become
//           changemakers through collaboration, innovation, and purposeful action
//           toward a brighter, inclusive future.
//         </p>
//       </section>

//       {/* Yi Section */}
//       <section className="px-6 py-16 bg-[#f9fafb]">
//         <motion.div
//           className="max-w-3xl mx-auto text-center"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <motion.img
//             src="/yi.png"
//             alt="Young Indians Logo"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="w-24 mx-auto mb-6"
//           />
//           <h2 className="text-3xl font-semibold mb-4 text-tango font-serif">
//             Young Indians (Yi)
//           </h2>
//           <p className="text-lg text-woodsmoke">
//             Young Indians (Yi) is a movement under the{" "}
//             <strong>Confederation of Indian Industry (CII)</strong> that aims to
//             create a platform for young Indians to lead, co-create, and
//             influence India's future. Established in 2002, Yi provides a unique
//             opportunity for young minds to work towards realizing the dream of a
//             developed nation and to imbue in them the qualities of responsible
//             citizenship.
//           </p>
//         </motion.div>
//       </section>

//       {/* Our Story */}
//       <section className="px-6 py-16 max-w-3xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-3xl font-semibold mb-6 text-apple font-serif"
//         >
//           Our Story
//         </motion.h2>
//         <p className="text-lg text-woodsmoke">
//           YUVA VIT Chennai is a proud chapter of YUVA, the student wing of
//           Young Indians (Yi), an initiative of the Confederation of Indian
//           Industry (CII). As a vibrant and dynamic community of passionate
//           student leaders, YUVA VIT Chennai strives to inspire, engage, and
//           empower the youth of our campus to become active contributors to the
//           nation-building process. Being a part of Young Indians, we align with
//           Yi’s national vision to “influence, inspire, and lead”. Our platform
//           nurtures responsible citizenship, leadership development, and social
//           impact by engaging youth in meaningful, action-oriented programs.
//         </p>
//       </section>

//       {/* Divider */}
//       <div className="border-t border-matisse my-10 w-2/3 mx-auto opacity-30" />

//       {/* Core Team */}
//       <section className="px-6 py-16 max-w-6xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-3xl font-bold text-center mb-12 text-tango font-serif"
//         >
//           Our Core Team
//         </motion.h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {coreTeam.map((member, idx) => (
//             <motion.div
//               key={member.name}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.05 * idx, duration: 0.4 }}
//             >
//               <TeamCard {...member} />
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// };

// export default AboutUs;





import React from "react";
import { motion } from "framer-motion";
import TeamCard from "../components/TeamCard.tsx";
import "../styles/aos-custom.css";

const coreTeam = [
  { name: "Yogesh Ravi", role: "Chair", linkedin: "#" },
  { name: "Suba shree", role: "Co-chair", linkedin: "#" },
  { name: "Sanjith", role: "Advisory", linkedin: "#" },
  { name: "Aathi", role: "Marketing", linkedin: "#" },
  { name: "Giri, Dheepika, Akshara", role: "Design", linkedin: "#" },
  { name: "Yuvaraj, Dharshini", role: "Event Management", linkedin: "#" },
  { name: "Anish, Brindha", role: "Visual Media", linkedin: "#" },
  { name: "Mansa", role: "Social Media", linkedin: "#" },
  { name: "Karthi", role: "Photography", linkedin: "#" },
  { name: "Yashwant, Arun", role: "Discipline", linkedin: "#" },
  { name: "Andrew", role: "Technical", linkedin: "#" },
];

// Static variant for single section motion
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Dynamic variant for delayed animations
const fadeInUpWithDelay = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  },
});

const AboutUs = () => {
  return (
    <main className="bg-[#2b2826] text-woodsmoke font-sans leading-relaxed">
      {/* Page Title */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="px-6 py-20 text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-tango">
          About <span className="text-apple">YUVA</span>
        </h1>
      </motion.section>

      {/* Mission */}
      <motion.section
        className="px-6 py-16 max-w-3xl mx-auto bg-[#eddfd5] shadow-md rounded-xl mb-12 hover:shadow-lg transition-shadow duration-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-semibold mb-6 text-matisse">Mission</h2>
        <p className="text-lg text-woodsmoke">
          YUVA’s mission is to empower the youth of India by creating a vibrant
          platform that nurtures leadership, fosters creativity, and drives
          community-led transformation. We aim to inspire young minds to become
          changemakers through collaboration, innovation, and purposeful action
          toward a brighter, inclusive future.
        </p>
      </motion.section>

      {/* Yi Section */}
      <motion.section
        className="px-6 py-16 max-w-3xl mx-auto bg-[#f4f1ef] shadow-md rounded-xl mb-12 hover:shadow-lg transition-shadow duration-300 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.img
          src="/yi.png"
          alt="Young Indians Logo"
          className="w-24 mx-auto mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />
        <h2 className="text-3xl font-semibold mb-4 text-tango font-serif">
          Young Indians (Yi)
        </h2>
        <p className="text-lg text-woodsmoke">
          Young Indians (Yi) is a movement under the{" "}
          <strong>Confederation of Indian Industry (CII)</strong> that aims to
          create a platform for young Indians to lead, co-create, and influence
          India's future. Established in 2002, Yi provides a unique opportunity
          for young minds to work towards realizing the dream of a developed
          nation and to imbue in them the qualities of responsible citizenship.
        </p>
      </motion.section>

      {/* Our Story */}
      <motion.section
        className="px-6 py-16 max-w-3xl mx-auto bg-[#eddfd5] shadow-md rounded-xl mb-12 hover:shadow-lg transition-shadow duration-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-semibold mb-6 text-apple font-serif">
          Our Story
        </h2>
        <p className="text-lg text-woodsmoke">
          YUVA VIT Chennai is a proud chapter of YUVA, the student wing of
          Young Indians (Yi), an initiative of the Confederation of Indian
          Industry (CII). As a vibrant and dynamic community of passionate
          student leaders, YUVA VIT Chennai strives to inspire, engage, and
          empower the youth of our campus to become active contributors to the
          nation-building process. Being a part of Young Indians, we align with
          Yi’s national vision to “influence, inspire, and lead”. Our platform
          nurtures responsible citizenship, leadership development, and social
          impact by engaging youth in meaningful, action-oriented programs.
        </p>
      </motion.section>

      {/* Divider */}
      <div className="border-t border-matisse my-10 w-2/3 mx-auto opacity-30" />

      {/* Core Team */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-3xl font-bold text-center mb-12 text-tango font-serif"
        >
          Our Core Team
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {coreTeam.map((member, idx) => (
            <motion.div
              key={member.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpWithDelay(idx * 0.1)}
            >
              <TeamCard {...member} />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
