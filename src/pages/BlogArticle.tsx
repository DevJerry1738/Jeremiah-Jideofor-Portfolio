// src/pages/BlogArticle.tsx
import { useParams, Link } from 'react-router-dom';
import styles from './Blog.module.css';
import { articles } from '../data/articles';




const BlogArticle = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  if (!article) return (<div style={{padding: '3rem'}}>Article not found. <Link to="/blog">Back to blog</Link></div>);

  return (
    <section className={styles.articlePage}>
      <div className={styles.articleInner}>
        <img src={article.cover} alt={article.title} className={styles.articleCover} />
        <h1 className={styles.articleTitle}>{article.title}</h1>
        <div className={styles.articleMeta}> • {article.author} • {article.readTime}</div>
        <div className={styles.articleContent} dangerouslySetInnerHTML={{ __html: article.content }} />
        <div style={{marginTop:12}}><Link to="/blog" style={{color:'#0d6efd'}}>← Back to articles</Link></div>
      </div>
    </section>
  );
};

export default BlogArticle;
