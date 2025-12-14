// src/components/Contact.tsx
import { motion } from 'framer-motion';
import {
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
  FaEnvelope,
} from 'react-icons/fa';
import styles from './Contact.module.css';
import Button from '../components/common/Button';

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.divider}></div>

      {/* FORM */}
      <motion.form
        action="https://formsubmit.co/devjerry1738@gmail.com"
        method="POST"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={styles.form}
      >
        <h2>Contact Me</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
        />

        {/* Hidden fields for FormSubmit */}
        <input
          type="hidden"
          name="_subject"
          value="New Contact Message from Portfolio"
        />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />

        <Button text="Send Message" type="submit" />
      </motion.form>

      {/* CONTACT LINKS */}
      <div className={styles.links}>
        <a
          href="mailto:devjerry1738@gmail.com"
          aria-label="Email"
          className={styles.link}
        >
          <FaEnvelope />
        </a>

        <a
          href="https://www.linkedin.com/in/onyeka-jeremiah-jideofor-46154736b/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={styles.link}
        >
          <FaLinkedin />
        </a>

        <a
          href="https://wa.me/2349011448616"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className={styles.link}
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://github.com/DevJerry1738/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={styles.link}
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
};

export default Contact;
