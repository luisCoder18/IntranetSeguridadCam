import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import TechnologyPage from './pages/TechnologyPage';
import BenefitsPage from './pages/BenefitsPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import DocumentationPage from './pages/DocumentationPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import FAQPage from './pages/FAQPage';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './index.css';  // Asumiendo que tu archivo CSS contiene las reglas necesarias

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900">
        {/* Header: contiene el logo y la barra de navegación */}
        <Header />
        
        {/* Cuerpo principal de la aplicación */}
        <div className="flex flex-1">
          {/* Sidebar: puede contener enlaces a otras secciones */}
          <Sidebar />
          
          {/* Contenido principal de cada ruta */}
          <main className="flex-1 p-6 bg-gray-800">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/technology" element={<TechnologyPage />} />
              <Route path="/benefits" element={<BenefitsPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/documentation" element={<DocumentationPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/faq" element={<FAQPage />} />
            </Routes>
          </main>
        </div>

        {/* Footer: con información de derechos de autor u otros enlaces */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
