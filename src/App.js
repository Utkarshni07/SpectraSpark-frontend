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
              {/* Sections with matching IDs for react-scroll */}
              <div id="home"><HeroSection /></div>
              <div id="services"><Services /></div>
              <div id="strengths"><Strengths /></div>
              <div id="contact"><Contact /></div>

              <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                theme="colored"
                progressStyle={{ background: "limegreen" }}
              />
            </>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;