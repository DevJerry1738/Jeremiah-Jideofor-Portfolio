// src/components/Services.tsx
import { motion } from 'framer-motion';
import { MdWeb, MdSecurity, MdDesignServices, MdBusinessCenter, MdArticle } from 'react-icons/md';
import { FaPenFancy } from 'react-icons/fa';
import styles from './Services.module.css';

const servicesData = [
  {
    icon: <MdWeb />,
    title: 'Web Development',
    description: 'Custom websites tailored to your needs, built with modern technologies for optimal performance and scalability.',
  },
  {
    icon: <MdSecurity />,
    title: 'Website Security Consulting',
    description: 'Audits and implementations to protect your online assets, ensuring compliance and robust defense against threats.',
  },
  {
    icon: <MdDesignServices />,
    title: 'UI/UX Design',
    description: 'Intuitive interfaces that enhance user engagement, focusing on seamless experiences across all devices.',
  },
  {
    icon: <MdBusinessCenter />,
    title: 'Custom Business Solutions',
    description: 'Tailored tools like e-commerce platforms or booking systems to solve specific business challenges efficiently.',
  },
  {
    icon: <FaPenFancy />,
    title: 'Article Writing',
    description: 'High-quality, researched articles tailored to your brand and audience—SEO friendly and ready to publish.',
  },
  {
    icon: <MdArticle />,
    title: 'Technical Writing',
    description: 'Clear, accurate technical documentation, guides, and developer-facing content for software products.',
  },
];

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.SectionDivider}></div>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Services
      </motion.h2>
      <p className={styles.intro}>
        I offer a range of services focused on delivering secure, user-friendly, and scalable digital solutions.
      </p>
      <div className={styles.grid}>
        {servicesData.map((service, idx) => (
          <motion.div
            key={idx}
            className={styles.card}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className={styles.icon}>{service.icon}</div>
            <h3>{service.title}</h3>
            <div className={styles.divider}></div>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;