// src/pages/LeoCosmeticsPage.tsx

import { motion } from "framer-motion";

import {
  MdShoppingCart,
  MdAccountCircle,
  MdDashboard,
  MdAnalytics,
  MdSecurity,
  MdDevices,
} from "react-icons/md";
import {
  FaLightbulb,
  FaStore,
} from "react-icons/fa";
import Button from "../components/common/Button";

import styles from "./LeoCosmetics.module.css";

import Carousel from '../components/common/Carousel';

/* --------------------------------
   PAGE COMPONENT
----------------------------------*/
const LeoCosmeticsPage = () => {
  const screenshots = [5, 6, 7, 8, 9];
  return (
    <div className={styles.page}>
      {/* ---------------------- HEADER ---------------------- */}
      <header className={styles.header}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Leo Cosmetics
        </motion.h1>
        <p className={styles.subtitle}>
          Luxury E-Commerce Platform for Premium Skincare and Beauty Products
        </p>
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <strong>Role:</strong> Full Stack Developer (Solo Project)
          </div>
          <div className={styles.metaItem}>
            <strong>Duration:</strong> 1 Months
          </div>
          
          <div className={styles.metaItem}>
            <strong>Live Demo:</strong>{" "}
            <a
              href="https://leo-cosmetics.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              leo-cosmetics.vercel.app
            </a>
          </div>
          <div className={styles.metaItem}>
            <a
              href="https://github.com/DevJerry1738/leo-cosmetics"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub Repository
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
          Leo Cosmetics is a luxury e-commerce platform built for premium
          skincare and beauty products, focusing on clean design, smooth user
          experience, and secure data handling.
        </p>

        <p>
          The platform features a modern storefront, user authentication,
          shopping cart, and an admin dashboard for managing products and orders
          in real time.
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
            <FaStore className={styles.icon} /> Modern product catalog with
            category and brand filtering
          </li>
          <li>
            <MdShoppingCart className={styles.icon} /> Shopping cart with
            quantity control and checkout flow
          </li>
          <li>
            <MdAccountCircle className={styles.icon} /> User authentication with
            profile and order history
          </li>
          <li>
            <MdDashboard className={styles.icon} /> Admin dashboard for product
            and order management
          </li>
          <li>
            <MdAnalytics className={styles.icon} /> User and order statistics
          </li>
          <li>
            <MdSecurity className={styles.icon} /> Secure role-based access
            control
          </li>
          <li>
            <MdDevices className={styles.icon} /> Fully responsive design across
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
            <FaLightbulb className={styles.icon} /> Implemented real-time data
            updates using Firestore listeners.
          </li>
          <li>
            <FaLightbulb className={styles.icon} /> Built secure authentication
            flows with role-based access.
          </li>
          <li>
            <FaLightbulb className={styles.icon} /> Designed a luxury UI using
            smooth animations and clean layouts.
          </li>
          <li>
            <FaLightbulb className={styles.icon} /> Optimized Firestore queries
            for efficient product loading.
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
          This project strengthened my skills in full-stack development,
          Firebase integration, and building scalable e-commerce systems with a
          strong focus on user experience.
        </p>

        <blockquote>
          “Crafting elegant digital experiences for the beauty industry.”
        </blockquote>
      </section>

      {/* ---------------------- BACK BUTTON ---------------------- */}
      <div className={styles.btn}>
        <Button to="/projects" text="Back to Projects" variant="secondary" />
      </div>
    </div>
  );
};

export default LeoCosmeticsPage;
