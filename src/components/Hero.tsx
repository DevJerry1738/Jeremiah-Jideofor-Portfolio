import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import Button from "../components/common/Button";

import { FaReact, FaGitAlt, FaFigma } from "react-icons/fa";

import {
  SiTypescript,
  SiFirebase,
  SiJavascript,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";
import { FaFlutter, FaWordpress } from "react-icons/fa6";
import { PiFramerLogo } from "react-icons/pi";

const techStack = [
  { name: "React", icon: <FaReact size={32} /> },
  { name: "TypeScript", icon: <SiTypescript size={32} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={32} /> },
  { name: "JavaScript", icon: <SiJavascript size={32} /> },
  { name: "Firebase", icon: <SiFirebase size={32} /> },
  { name: "Git", icon: <FaGitAlt size={32} /> },
  { name: "Figma", icon: <FaFigma size={32} /> },
  { name: "Postman", icon: <SiPostman size={32} /> }, 
  { name: "WordPress", icon: <FaWordpress size={32} /> },
  { name: "Flutter", icon: <FaFlutter size={32} /> },
  { name: "Framer", icon: <PiFramerLogo size={32} /> },
];

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.contentWrapper}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.content}
        >
          <h1>Crafting Secure, Modern Websites That Solve Real Problems</h1>
          <h4>
            I help businesses and individuals bring their ideas to life through
            clean, reliable, and secure web solutions built with modern
            technology.
          </h4>

          <div className={styles.heroButtons}>
            <Button
              text="Work With Me"
              to="/contact"
              variant="primary"
            />

            <Button text="See Projects" variant="secondary" to="/projects"/>
          </div>
        </motion.div>
      </div>

      {/* Centered Tech Stack Scroller */}
      <div className={styles.techScroller}>
        <motion.div
          className={styles.scrollerInner}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 16,
            ease: "linear",
          }}
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <div className={styles.techItem} key={index}>
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
