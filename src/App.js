import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Strengths from './components/Strengths';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ToastStyles.css";
import "react-toastify/dist/ReactToastify.css";



function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Preloader />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Services />
              <Strengths />
              <Contact />
              {/* <ToastContainer position="top-center" autoClose={3000} /> */}
              <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} 
              theme="colored"
              progressStyle={{ background: "limegreen" }} />
            </>
          }
        />
        <Route path="/" element={<HeroSection />} />
        <Route path="/services" element={<Services />} />
        <Route path="/strengths" element={<Strengths />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
