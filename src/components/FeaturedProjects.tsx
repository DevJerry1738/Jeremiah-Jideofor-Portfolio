// src/components/FeaturedProjects.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import styles from './FeaturedProjects.module.css'; 
import placeholder from '../assets/placeholder.webp';
import Button from '../components/common/Button';

const featuredProjectsData = [
  {
    title: 'PhishGuard NG',
    type: 'Cybersecurity Tool',
    image: placeholder,
    detailPath: '/projects/phishing-simulation-tool',
  },
  {
    title: 'Leo Cosmetics',
    type: 'E-commerce Platform',
    image: placeholder,
    detailPath: '/projects/e-commerce-website',
  },
  {
    title: 'Volunteers4Cause',
    type: 'NGO Website',
    image: placeholder,
    detailPath: '/projects/volunteers4cause-ngo-website',
  },
  {
    title: 'Harvestwealth Nigeria Ltd',
    type: 'Business Website',
    image: placeholder,
    detailPath: '/projects/harvestwealth-nigeria-ltd',
  },
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
        <Link to="/projects" className={styles.viewAllButton}>
        {/* link to github */}
          <Button text="View GitHub Projects" variant="secondary" />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjects;