import { motion } from 'framer-motion';
import styles from './Button.module.css';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface ButtonProps {
  text: ReactNode;
  to?: string;                  // NEW: navigate to route
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button = ({
  text,
  to,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
}: ButtonProps) => {
  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${styles.button} ${styles[variant]}`}
    >
      {text}
    </motion.span>
  );

  // If "to" exists → render Link instead of button
  if (to) {
    return (
      <Link to={to} className={styles.linkWrapper}>
        {buttonContent}
      </Link>
    );
  }

  // Default: normal button with onClick
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </motion.button>
  );
};

export default Button;