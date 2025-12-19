// src/pages/CapitalConnect.tsx
import { motion } from "framer-motion";
import {
  MdSearch,
  MdMap,
  MdDevices,
  MdHelpOutline,
  MdFilterList,
} from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import Button from "../components/common/Button";
import styles from "./CapitalConnect.module.css";
import Carousel from "../components/common/Carousel";

const CapitalConnectPage = () => {
  const screenshots = [15, 16, 17, 18];

  return (
    <div className={styles.page}>
      {/* HEADER */}
      <header className={styles.header}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Capital Connect
        </motion.h1>

        <p className={styles.subtitle}>
          Local Services Discovery Platform (Abuja). Search, verify, and contact
          trusted providers
        </p>

        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <strong>Role:</strong> Full Stack Developer (Solo Project)
          </div>
          <div className={styles.metaItem}>
            <strong>Duration:</strong> 2 Weeks
          </div>

          <div className={styles.metaItem}>
            <strong>Live Demo:</strong>{" "}
            <a
              href="https://capital-connect-5fjc.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              capital-connect.vercel.app
            </a>
          </div>
          <div className={styles.metaItem}>
            <a
              href="https://https://github.com/DevJerry1738/capital-connect"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub Repository
            </a>
          </div>
        </div>
      </header>

      {/* OVERVIEW */}
      <section id="overview" className={styles.section}>
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Project Overview
        </motion.h2>

        <p>
          Capital Connect is a modern, mobile-first web application designed to
          help people discover trusted local service providers across Abuja. It
          addresses a common everyday challenge, finding reliable artisans and
          professionals quickly by combining location awareness, clear
          verification signals, and an intuitive user experience.
        </p>

        <p>
          The platform enables users to search and filter providers by service
          type and district, view verified profiles, and explore providers on an
          interactive map, making informed decisions with confidence and speed.
        </p>
      </section>

      {/* SCREENSHOTS */}
      <section id="screenshots" className={styles.section}>
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Screenshots
        </motion.h2>

        <Carousel images={screenshots} />
      </section>

      {/* FEATURES */}
      <section id="features" className={styles.section}>
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Key Features
        </motion.h2>

        <ul className={styles.list}>
          <li>
            <MdSearch className={styles.icon} /> Search and filter providers by
            category, district, and availability
          </li>
          <li>
            <FaCheckCircle className={styles.icon} /> Verified provider badges
            to build trust (KYC-ready UI)
          </li>
          <li>
            <MdMap className={styles.icon} /> Interactive map view showing
            provider locations across Abuja
          </li>
          <li>
            <MdDevices className={styles.icon} /> Mobile-first responsive
            layouts optimized for all screen sizes
          </li>
          <li>
            <MdFilterList className={styles.icon} /> Dedicated provider profiles
            with contact actions and ratings
          </li>
          <li>
            <MdHelpOutline className={styles.icon} /> FAQ and provider guidance
          </li>
        </ul>
      </section>

      {/* TECH STACK */}
      <section className={styles.section}>
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Tech Stack
        </motion.h2>

        <div className={styles.techGrid}>
          <span>React</span>
          <span>TypeScript</span>
          <span>Custom CSS (Scoped Modules)</span>
          <span>React Router</span>
          <span>Leaflet / Google Maps</span>
          <span>React Icons</span>
        </div>
      </section>

      {/* CHALLENGES & IMPACT */}
      <section className={styles.section}>
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Challenges & Impact
        </motion.h2>

        <ul className={styles.list}>
          <li>
            <FaLightbulb className={styles.icon} /> Designed a KYC-ready badge
            system that balances trust and privacy
          </li>
          <li>
            <FaLightbulb className={styles.icon} /> Built performant map
            integration with lazy-loaded markers and clustering
          </li>
          <li>
            <FaLightbulb className={styles.icon} /> Implemented mobile-first UI
            patterns to reduce layout shifts and prevent overflow
          </li>
        </ul>
      </section>

      {/* ---------------------- IMPACT ---------------------- */}
      <section className={styles.section}>
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Impact & Learning
        </motion.h2>

        <p>
          Building this project strengthened my skills in TypeScript-driven
          React architecture, responsive UI design, map and GPS integrations,
          and designing scalable component systems with real-world product
          considerations.
        </p>

        <blockquote>
          “Great products don’t just look good. They remove friction and
          connect people to what they need.”
        </blockquote>
      </section>

      <div className={styles.btn}>
        <Button to="/projects" text="Back to Projects" variant="secondary" />
      </div>
    </div>
  );
};

export default CapitalConnectPage;
