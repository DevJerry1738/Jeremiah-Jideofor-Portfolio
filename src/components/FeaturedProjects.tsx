// src/components/FeaturedProjects.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import styles from './FeaturedProjects.module.css'; 
import phishguardImg from '../assets/phishguard.webp';
import leoCosmeticsImg from '../assets/leo-cosmetics.webp';
import v4c from '../assets/v4c.webp';
import capitalConnectImg from '../assets/capital-connect.webp';
import Button from '../components/common/Button';

const featuredProjectsData = [
  {
    title: 'Capital Connect',
    type: 'Local Services Discovery',
    image: capitalConnectImg,
    detailPath: '/projects/capital-connect',
  },
  {
    title: 'PhishGuard NG',
    type: 'Cybersecurity Tool',
    image: phishguardImg,
    detailPath: '/projects/phishing-simulation-tool',
  },
  {
    title: 'Leo Cosmetics',
    type: 'E-commerce Platform',
    image: leoCosmeticsImg,
    detailPath: '/projects/leo-cosmetics',
  },
  {
    title: 'Volunteers4Cause',
    type: 'NGO Website',
    image: v4c,
    detailPath: '/projects/volunteers4cause-ngo-website',
  }
];

const FeaturedProjects = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.divider}></div>
      <h2>Featured Projects</h2>
      <p>Explore some of my recent works that demonstrate practical solutions for real-world challenges.</p>
      <div className={styles.grid}>
        {featuredProjectsData.map((proj, idx) => (
          <Link key={idx} to={proj.detailPath} className={styles.link}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <ProjectCard title={proj.title} type={proj.type} image={proj.image} />
            </motion.div>
          </Link>
        ))}
      </div>
      
      
      <div className={styles.viewAllContainer}>
        <a href="https://github.com/DevJerry1738?tab=repositories" target="_blank" rel="noopener noreferrer" className={styles.viewAllButton}>
          <Button text="View GitHub Repository" variant="secondary" />
        </a>
      </div>
    </section>
  );
};

export default FeaturedProjects;