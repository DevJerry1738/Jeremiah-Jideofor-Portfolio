import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import styles from './About.module.css';
import avatar from '../assets/avatar.png';

const WhatImAbout = () => {
  return (
    <section className={styles.section}>
      <div className={styles.divider}></div>

      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* LEFT SIDE */}
        <div className={styles.left}>
          <img src={avatar} alt="Jeremiah Jideofor" className={styles.avatar} />
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          <h2 className={styles.name}>Jeremiah Jideofor</h2>

          <p className={styles.description}>
           Experienced web developer focused on solving real problems for real people. Expert in secure, modern, and highly maintainable web apps. Currently studying for a Master’s in Cybersecurity.
          </p>

          <Link to="/about">
            <Button text="Learn More About Me" variant="primary" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default WhatImAbout;
