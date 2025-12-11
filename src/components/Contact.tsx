// src/components/Contact.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaWhatsapp, FaGithub, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';
import styles from './Contact.module.css';
import Button from '../components/common/Button';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send to backend or Formspree
    console.log('Form submitted:', formData);
  };

  return (
    <section className={styles.contact}>
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <h2>Contact Me</h2>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} required />
        <Button text="Send Message" type="submit" />
      </motion.form>
      <div className={styles.links}>
        <a href="mailto:your@email.com" aria-label="Email" className={styles.link}>
          <FaEnvelope />
        </a>
        <a href="https://linkedin.com/yourprofile" aria-label="LinkedIn" className={styles.link}>
          <FaLinkedin />
        </a>
        <a href="https://wa.me/yournumber" aria-label="Whatsapp" className={styles.link}>
          <FaWhatsapp />
        </a>
        <a href="https://github.com/yourusername" aria-label="Github" className={styles.link}>
          <FaGithub />
        </a>
        <a href="https://calendly.com/yourlink" aria-label="Schedule" className={styles.link}>
          <FaCalendarAlt />
        </a>
      </div>
    </section>
  );
};

export default Contact;