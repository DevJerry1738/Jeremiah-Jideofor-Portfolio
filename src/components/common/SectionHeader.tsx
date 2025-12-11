import { motion } from 'framer-motion';
import styles from './SectionHeader.module.css';

const SectionHeader = ({ text }: { text: string }) => {
  return (
    <motion.h2
      initial={{ width: 0 }}
      whileInView={{ width: 'auto' }}
      transition={{ duration: 0.5 }}
      className={styles.header}
    >
      {text}
    </motion.h2>
  );
};

export default SectionHeader;