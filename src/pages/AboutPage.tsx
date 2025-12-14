// src/pages/AboutPage.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import styles from "./AboutPage.module.css";
import { RiShieldCheckLine, RiRocketLine, RiCodeLine } from "react-icons/ri";

const About = () => {
  return (
    <section className={styles.about}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1>Jideofor Jeremiah</h1>
        <h2>Developer</h2>
        <p>
          I am a web developer with years of experience building robust,
          scalable, and secure digital solutions for both individuals and
          businesses. I strive to continue learning and adapting best practices
          in every project I undertake.
        </p>
        <p>
          Currently, I am pursuing a Master's degree in Cybersecurity where my
          top priority is security in applications. I am not only innovative,
          but also practical for real-world use.
        </p>
        <p>
          I prioritize code quality, performance, and maintainability that are
          secure, clearly architected, and built to last.
        </p>

        <Link to="/projects">
          <Button text="View My Projects" />
        </Link>

        <Link to="/contact">
          <Button text="Contact Me" variant="secondary" />
        </Link>

        <ul className={styles.list}>
          <li>
            <RiShieldCheckLine className={styles.icon} />
            Secure website
          </li>

          <li>
            <RiRocketLine className={styles.icon} />
            Fast performance
          </li>

          <li>
            <RiCodeLine className={styles.icon} />
            Maintainable code
          </li>
        </ul>
      </motion.div>
      
      <footer className={styles.footer}>© 2025. All Rights Reserved.</footer>
    </section>
  );
};

export default About;
