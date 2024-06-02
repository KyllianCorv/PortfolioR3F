// LoadingBox.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../css/LoadingBox.css';

const LoadingBox = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount < 100 ? prevCount + 1 : 100));
    }, 20); // Vitesse d'animation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-box">
      <motion.div
        className="loading-counter"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ repeat: Infinity, duration: 0.5 }}
      >
        {count}%
      </motion.div>
    </div>
  );
};

export default LoadingBox;
