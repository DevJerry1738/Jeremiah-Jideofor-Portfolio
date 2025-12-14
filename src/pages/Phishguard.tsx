// src/pages/PhishGuardPage.tsx
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  MdDashboard,
  MdBuild,
  MdAnalytics,
  MdWarning,
  MdSchool,
  MdDevices,
} from "react-icons/md";

import {
  FaGithub,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";
import styles from "./PhishGuard.module.css";
import Button from "../components/common/Button";

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
                src={`/screenshots/screen-${num}.png`}
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

/* --------------------------------
   PAGE COMPONENT
----------------------------------*/

const PhishGuardPage = () => {
  const screenshots = [1, 2, 3, 4];

  return (
    <div className={styles.page}>
      {/* ---------------------- HEADER ---------------------- */}
      <header className={styles.header}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          PhishGuard NG
        </motion.h1>

        <p className={styles.subtitle}>Advanced Phishing Simulation Platform</p>

        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <strong>Role:</strong> Full Stack Developer (Solo Project)
          </div>
          <div className={styles.metaItem}>
            <strong>Duration:</strong> 2 Months (2025)
          </div>
          <div className={styles.metaItem}>
            <strong>GitHub:</strong>
            <a
              href="https://github.com/DevJerry1738/phishing-simulator"
            >
              <FaGithub /> github.com/DevJerry1738/phishing-simulator
            </a>
          </div>
        </div>
      </header>

      {/* ---------------------- OVERVIEW ---------------------- */}
      <section id="overview" className={styles.section}>
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Project Overview
        </motion.h2>

        <p>
          PhishGuard NG is a phishing simulation and cybersecurity awareness
          platform designed for organizations to test and improve employee
          resilience against phishing attacks.
        </p>
        <p>
          Inspired by enterprise-grade tools, the system includes an admin
          dashboard, campaign builder, realistic phishing templates, analytics,
          and interactive training modules.
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
      <section id="features" className={styles.section}>
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Key Features
        </motion.h2>

        <ul className={styles.list}>
          <li>
            <MdDashboard className={styles.icon} /> Admin Dashboard with
            real-time metrics
          </li>
          <li>
            <MdBuild className={styles.icon} /> Campaign Builder with multiple
            templates
          </li>
          <li>
            <FaUsers className={styles.icon} /> Role-based User Management
          </li>
          <li>
            <MdAnalytics className={styles.icon} /> Detailed analytics &
            exportable reports
          </li>
          <li>
            <MdWarning className={styles.icon} /> Realistic phishing landing
            pages
          </li>
          <li>
            <MdSchool className={styles.icon} /> Instant training after phishing
            clicks
          </li>
          <li>
            <MdDevices className={styles.icon} /> Fully responsive across
            devices
          </li>
        </ul>
      </section>

      

      {/* ---------------------- CHALLENGES ---------------------- */}
      <section id="challenges" className={styles.section}>
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Challenges & Solutions
        </motion.h2>

        <ul className={styles.list}>
          <li>
            <FaLightbulb className={styles.icon} /> Built realistic phishing
            pages using safe tracking logic.
          </li>
          <li>
            <FaLightbulb className={styles.icon} /> Secure click-tracking
            pipeline with encoded URL params.
          </li>
          <li>
            <FaLightbulb className={styles.icon} /> Fixed complex modal & layout
            issues using CSS grid.
          </li>
          <li>
            <FaLightbulb className={styles.icon} /> Implemented live dashboard
            stats from backend API.
          </li>
        </ul>
      </section>

      {/* ---------------------- IMPACT ---------------------- */}
      <section id="impact" className={styles.section}>
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Impact & Learning
        </motion.h2>

        <p>
          Building this platform strengthened my expertise in full-stack
          development, secure tracking mechanisms, UX for cybersecurity
          training, and advanced CSS for complex multi-layer layouts.
        </p>

        <blockquote>
          “The best way to defend against phishing is to experience it safely.”
        </blockquote>
      </section>

      

      {/* ---------------------- BACK BUTTON ---------------------- */}

      <div className={styles.btn}>
        <Button to="/projects" text="Back to Projects" variant="secondary" />
      </div>
    </div>
  );
};

export default PhishGuardPage;
