import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

const App = () => (
  <>
    <Hero />
    <Features />
    <HowItWorks />
    <CTA />
  </>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);