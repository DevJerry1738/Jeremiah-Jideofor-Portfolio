// src/pages/Blog.tsx
import { motion } from 'framer-motion';
import styles from './Blog.module.css';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';




const Blog = () => {
  return (
    <section className={styles.blog}>
      <div className={styles.inner}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Articles & Blog
        </motion.h1>

        <p className={styles.lead}>Insights, guides, and lessons from projects and technical work.</p>

        <div className={styles.grid}>
          {articles.map((a) => (
            <article key={a.id} className={styles.card}>
              <Link to={`/blog/${a.id}`} className={styles.coverLink}>
                <img src={a.cover} alt={a.title} />
              </Link>

              <div className={styles.content}>
                <div className={styles.meta}>{a.date} • {a.author} • {a.readTime}</div>
                <h3>{a.title}</h3>
                <p className={styles.excerpt}>{a.excerpt}</p>
                <Link to={`/blog/${a.id}`} className={styles.readMore}>Read article →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
