// src/pages/VolunteersForCausePage.tsx
import { motion } from "framer-motion";
import {
  MdCampaign,
  MdGroups,
  MdDevices,
  MdSpeed,
  MdDesignServices,
  MdSecurity,
} from "react-icons/md";
import {
  FaReact,
  FaCss3Alt,
  FaGithub,
  FaLightbulb,
} from "react-icons/fa";

import Button from "../components/common/Button";
import styles from "./VolunteersForCause.module.css";
import { useState } from "react";

/* --------------------------------
   CAROUSEL COMPONENT
----------------------------------*/
const Carousel = ({ images }: { images: number[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  return (
    <div className={styles.carouselWrapper}>
      <button className={styles.navBtn} onClick={prevSlide}>
        ‹
      </button>
      <div className={styles.carousel}>
        <div
          className={styles.carouselTrack}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((num) => (
            <div className={styles.slide} key={num}>
              <img
                src={`/screenshots/screen-${num}.webp`}
                alt={`Screenshot ${num}`}
              />
            </div>
          ))}
        </div>
      </div>
      <button className={styles.navBtn} onClick={nextSlide}>
        ›
      </button>
    </div>
  );
};

const VolunteersForCausePage = () => {
    const screenshots = [10, 11, 12, 13, 14];
  return (
    <div className={styles.page}>
      {/* ---------------------- HEADER ---------------------- */}
      <header className={styles.header}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Volunteers4Cause Abuja
        </motion.h1>

        <p className={styles.subtitle}>
          Official Website for a Youth-Led Nonprofit Organization
        </p>

        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <strong>Role:</strong> Full-Stack Developer (Solo Project)
          </div>
          <div className={styles.metaItem}>
            <strong>Type:</strong> Real-World NGO Website
          </div>
          <div className={styles.metaItem}>
            <strong>GitHub:</strong>
            <a
              href="https://github.com/DevJerry1738/v4c-abuja"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> github.com/DevJerry1738/v4c-abuja
            </a>
          </div>
          <div className={styles.metaItem}>
            <strong>Live:</strong>
            <a
              href="https://v4c-abuja.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              v4c-abuja.vercel.app
            </a>
          </div>
        </div>
      </header>

      {/* ---------------------- OVERVIEW ---------------------- */}
      <section className={styles.section}>
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Project Overview
        </motion.h2>

        <p>
          Volunteers4Cause Abuja is a modern, responsive single-page application
          built as the official digital presence for a youth-led nonprofit
          organization in Nigeria.
        </p>

        <p>
          The platform highlights the organization’s mission, campaigns, and
          impact while driving volunteer sign-ups through a fast, frictionless
          user experience.
        </p>
      </section>

      {/* ---------------------- SCREENSHOTS (CAROUSEL) ---------------------- */}
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

      {/* ---------------------- FEATURES ---------------------- */}
      <section className={styles.section}>
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Key Features
        </motion.h2>

        <ul className={styles.list}>
          <li>
            <MdCampaign className={styles.icon} /> Dynamic hero section with
            call-to-action
          </li>
          <li>
            <MdGroups className={styles.icon} /> Campaign showcase and impact
            gallery
          </li>
          <li>
            <MdDesignServices className={styles.icon} /> Dedicated About and Team
            pages with animations
          </li>
          <li>
            <MdSecurity className={styles.icon} /> WhatsApp-integrated volunteer
            recruitment flow
          </li>
          <li>
            <MdSpeed className={styles.icon} /> Optimized performance, SEO, and
            accessibility
          </li>
          <li>
            <MdDevices className={styles.icon} /> Fully responsive,
            mobile-first design
          </li>
        </ul>
      </section>

      {/* ---------------------- TECH STACK ---------------------- */}
      <section className={styles.section}>
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Tech Stack
        </motion.h2>

        <div className={styles.techGrid}>
          <span><FaReact /> React 19</span>
          <span><FaReact /> TypeScript</span>
          <span><FaCss3Alt /> Custom CSS</span>
          <span><FaReact /> React Router</span>
          <span><FaReact /> Framer Motion</span>
          <span><FaReact /> Vite</span>
        </div>
      </section>

      {/* ---------------------- CHALLENGES ---------------------- */}
      <section className={styles.section}>
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Challenges & Solutions
        </motion.h2>

        <ul className={styles.list}>
          <li>
            <FaLightbulb className={styles.icon} /> Designed a WhatsApp-based
            volunteer form to remove signup friction.
          </li>
          <li>
            <FaLightbulb className={styles.icon} /> Implemented smooth
            scroll-to-section logic across routes.
          </li>
          <li>
            <FaLightbulb className={styles.icon} /> Built reusable modal and
            navigation components.
          </li>
          <li>
            <FaLightbulb className={styles.icon} /> Ensured accessibility and
            mobile usability throughout the site.
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
          This project delivered a professional, conversion-focused platform
          that enables the organization to recruit volunteers and showcase
          impact continuously.
        </p>

        <blockquote>
          “Designing digital platforms that inspire action.”
        </blockquote>
      </section>

      {/* ---------------------- BACK BUTTON ---------------------- */}
      <div className={styles.btn}>
        <Button to="/projects" text="Back to Projects" variant="secondary" />
      </div>
    </div>
  );
};

export default VolunteersForCausePage;
