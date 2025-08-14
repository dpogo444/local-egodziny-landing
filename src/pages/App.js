import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

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


function App() {
  const [progress, setProgress] = useState(0);

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
      <Hero />
      <Analytics />
      <Reviews />
      <Partners />
      <Functionality />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
