// src/components/Contact.tsx
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Oval } from 'react-loader-spinner';
import {
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
  FaEnvelope,
} from 'react-icons/fa';
import styles from './Contact.module.css';
import Button from './common/Button';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsLoading(true);

    emailjs
      .sendForm(
        'service_iglaytl', 
        'template_l4yuf9d', 
        form.current,
        { publicKey: 'TLXn4ZdVecoCHri_u' } 
      )
      .then(
        () => {
          toast.success('Message sent successfully!');
          form.current?.reset(); 
        },
        (error) => {
          toast.error('Failed to send message. Please try again.');
          console.error('EmailJS error:', error);
        }
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <section className={styles.contact}>
      <div className={styles.divider}></div>
      <h2>Contact Me</h2>
      <p className={styles.lead}>Have a project or opportunity in mind? Send a message and I’ll get back to you shortly.</p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.contactInner}
      >
        {/* FORM */}
        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={styles.form}
        >
          <h2>Send a Message</h2>

          <div className={styles.inputRow}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              aria-label="Your name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              aria-label="Your email"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            aria-label="Your message"
            required
          />

          <div>
            <Button
              text={
                isLoading ? (
                  <Oval height={20} width={20} color="#fff" secondaryColor="#ddd" />
                ) : (
                  'Send Message'
                )
              }
              type="submit"
              variant="primary"
              disabled={isLoading}
            />
            <small style={{ color: '#6c757d', marginTop: '0.6rem', display: 'block' }}>I respect your privacy. Your message is sent securely.</small>
          </div>
        </motion.form>

        {/* SIDE CARD (desktop) */}
        <aside className={styles.sideCard}>
          <div className={styles.infoCard}>
            <h3 style={{margin:0}}>Get in touch</h3>
            <p style={{color:'#495057', marginTop:'0.5rem'}}>Email, social links and quick contact shortcuts.</p>

          

            <div style={{marginTop:'1rem'}} className={styles.links}>
              <a href="mailto:devjerry1738@gmail.com" aria-label="Email" className={styles.link}><FaEnvelope /></a>
              <a href="https://www.linkedin.com/in/onyeka-jeremiah-jideofor-46154736b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.link}><FaLinkedin /></a>
              <a href="https://wa.me/2349011448616" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={styles.link}><FaWhatsapp /></a>
              <a href="https://github.com/DevJerry1738/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.link}><FaGithub /></a>
            </div>

          </div>
        </aside>

      </motion.div>

      {/* FAQ SECTION - Accordion style */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={styles.faq}
      >
        <h2>Frequently Asked Questions</h2>
        <details className={styles.faqItem}>
          <summary>What are your working hours?</summary>
          <p>I'm available Monday to Friday, 9 AM to 6 PM WAT. For urgent matters, feel free to WhatsApp me.</p>
        </details>
        <details className={styles.faqItem}>
          <summary>How long does a project take?</summary>
          <p>It depends on scope. Small projects: 1-2 weeks; Larger ones: 4-6 weeks. Let's discuss your needs!</p>
        </details>
        <details className={styles.faqItem}>
          <summary>Do you offer free consultations?</summary>
          <p>Yes, initial 30-minute calls are free.</p>
        </details>
      </motion.div>

      {/* Toast Container - Place at the end for global toasts */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick pauseOnHover theme="light" />
    </section>
  );
};

export default Contact;