import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import CookieConsent from "react-cookie-consent";


import Menu from '../sections/Menu';
import Footer from '../sections/Footer';
import Hero from '../sections/Hero';
import Analytics from '../sections/Analytics';
import Reviews from '../sections/Reviews';
import Partners from '../sections/Partners';
import Functionality from '../sections/Functionality';
import Pricing from '../sections/Offer';
import FAQ from '../sections/FAQ';
import CTA from '../sections/CTA';
import Form from '../sections/Form';


function App() {
  const [progress, setProgress] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Menu />
      <ProgressBar now={progress} className='progress-bar' />
      <Hero/>
      <Form isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <Analytics />
      <Reviews />
      <Partners />
      <Functionality />
      <Pricing />
      <FAQ />
      <CTA/>
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Akceptuję"
        cookieName="myCookieConsent"
        style={{ background: "#27272B" }}
        buttonStyle={{ color: "black", fontSize: "13px", backgroundColor: "#FAC141" }}
        expires={150}
      >
        Ta strona używa plików cookies, aby zapewnić najlepszą jakość korzystania z serwisu.{" "}
        <a href="/privacy" style={{ color: "#ffd700" }}>
          Dowiedz się więcej
        </a>
      </CookieConsent>
    </>
  );
}

export default App;
