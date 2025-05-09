import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); 
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="loader"></div>
    </div>
  );
};

export default Preloader;