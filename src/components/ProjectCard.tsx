// src/components/ProjectCard.tsx
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  type: string;
  image: string;
}

const ProjectCard = ({ title, type, image }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3>{title}</h3>
      <p>{type}</p>
    </div>
  );
};

export default ProjectCard;