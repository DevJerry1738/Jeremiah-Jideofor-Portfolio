// src/components/WhatImAbout.tsx
import { motion } from 'framer-motion';
import { MdPublic, MdSecurity, MdSettings } from 'react-icons/md';
import styles from './WhatImAbout.module.css';

const cards = [
  {
    title: 'Real-world Impact',
    subtitle: 'Building practical digital solutions that solve real problems for individuals and businesses.',
    icon: <MdPublic />,
  },
  {
    title: 'Security Expertise',
    subtitle: 'Leveraging my Master’s in Cybersecurity to ensure secure, robust applications.',
    icon: <MdSecurity />,
  },
  {
    title: 'Tailored Results',
    subtitle: 'Creating custom, scalable tools designed specifically for your needs.',
    icon: <MdSettings />,
  },
];

const WhatImAbout = () => {
  return (
    <section className={styles.section}>
      <div className={styles.cardGrid}>
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className={styles.icon}>{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatImAbout;