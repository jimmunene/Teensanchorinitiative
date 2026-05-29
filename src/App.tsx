import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Contact from './pages/Contact';
import WaysToHelp from './pages/WaysToHelp';
import FAQ from './pages/FAQ';
import Donate from './pages/Donate';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import CookieConsent from './components/CookieConsent/CookieConsent';
import Logo from './components/assets/logo.jpg';
import './i18n/config';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 4000);
    return () => window.clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="splash-screen" aria-busy="true" aria-live="polite">
        <div className="splash-screen__content">
          <div className="splash-screen__mark">
            <div className="splash-screen__logo-panel splash-screen__logo-panel--layered">
              <img src={Logo} alt="Teens Anchor Initiative logo" className="splash-screen__logo splash-screen__logo--base" />
              <div className="splash-screen__wing splash-screen__wing--left" aria-hidden="true">
                <img src={Logo} alt="" className="splash-screen__logo splash-screen__logo--wing" />
              </div>
              <div className="splash-screen__wing splash-screen__wing--right" aria-hidden="true">
                <img src={Logo} alt="" className="splash-screen__logo splash-screen__logo--wing" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App app-loaded">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="programs" element={<Programs />} />
            <Route path="help" element={<WaysToHelp />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="donate" element={<Donate />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
          </Route>
        </Routes>
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;