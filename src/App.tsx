// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import './index.css'; // Global styles
import Navbar from './components/Navbar';
import PhishGuard from './pages/Phishguard';
import LeoCosmeticsPage from './pages/LeoCosmeticsPage';
import VolunteersForCausePage from './pages/VolunteersForCausePage';

function App() {
  return (
    <Router>
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
        
      </Routes>
    </Router>
  );
}

export default App;