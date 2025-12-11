import { motion } from 'framer-motion';
import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
}

const Button = ({
  text,
  onClick,
  type = 'button',
  variant = 'primary',
}: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </motion.button>
  );
};

export default Button;
