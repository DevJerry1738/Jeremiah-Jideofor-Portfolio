// src/App.tsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import Blog from './pages/Blog';
import BlogArticle from './pages/BlogArticle';
import './index.css'; // Global styles
import Navbar from './components/Navbar';
import PhishGuard from './pages/Phishguard';
import LeoCosmeticsPage from './pages/LeoCosmeticsPage';
import VolunteersForCausePage from './pages/VolunteersForCausePage';
import CapitalConnectPage from './pages/CapitalConnect';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects/phishing-simulation-tool" element={<PhishGuard />} />
        <Route path="/projects/leo-cosmetics" element={<LeoCosmeticsPage />} />
        <Route path="/projects/volunteers4cause-ngo-website" element={<VolunteersForCausePage />} />
        <Route path="/projects/capital-connect" element={<CapitalConnectPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogArticle />} />
      </Routes>
    </Router>
  );
}

export default App;