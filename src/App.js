import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';

import RotatingBox from './components/Experience';
import Navigation from './components/Navigation';

import Page2 from './Page/AboutMe';
import Projects from './Page/Projects'
import Experience from './Page/Experience'

import LoadingBox from './components/LoadingBox';

import './index.css';

function Popup({ children, onClose, position }) {
  const [xPos, yPos] = position.split('-');

  return (
    <motion.div
      initial={{ opacity: 0, x: '-5%', y: '-5%' }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: '-5%', y: '-5%' }}
      transition={{ duration: 0.3 }}
      style={{ position: 'absolute', top: yPos, left: xPos, transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', zIndex: '2' }}
    >
      {children}
      <button onClick={onClose} style={{ position: 'relative', top: '10px', right: '10px', backgroundColor: 'darkorange', color: 'white', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }}>Fermer</button>
    </motion.div>
  );
}

function Home() {
  const [isMailPopupOpen, setIsMailPopupOpen] = useState(false);
  const [isPhonePopupOpen, setIsPhonePopupOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const openMailPopup = () => {
    setIsMailPopupOpen(true);
    setIsPhonePopupOpen(false); // Fermer l'autre popup si ouverte
  };

  const openPhonePopup = () => {
    setIsPhonePopupOpen(true);
    setIsMailPopupOpen(false); // Fermer l'autre popup si ouverte
  };

  const closePopups = () => {
    setIsMailPopupOpen(false);
    setIsPhonePopupOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Définissez ici la largeur de l'écran à laquelle vous considérez que c'est un affichage mobile
    };

    handleResize(); // Vérifier la taille de l'écran au chargement de la page
    window.addEventListener('resize', handleResize); // Ajouter un écouteur d'événements pour redimensionner
    return () => window.removeEventListener('resize', handleResize); // Supprimer l'écouteur d'événements lors du démontage du composant
  }, []);

  useEffect(() => {
    const handlePageLoad = () => {
      setIsLoading(false);
    };

    // Simuler un temps de chargement pour la démonstration
    const timeout = setTimeout(handlePageLoad, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      {/* <AnimatePresence>
        {isLoading && <LoadingBox />}
      </AnimatePresence> */}
      {!isLoading && (
        <>
          <Canvas shadows camera={{ position: [0, 0, 14], fov: 58 }}>
            <ambientLight />
            <pointLight position={[20, 0, 0]} />
            <RotatingBox />
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          </Canvas>
          <AnimatePresence>
            {isMailPopupOpen && (
              <Popup onClose={closePopups} position="1%-2%">
                <p className="micro-5-charted-regular2">Email : kycorvaisier@gmail.com</p>
              </Popup>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isPhonePopupOpen && (
              <Popup onClose={closePopups} position="1%-2%">
                <p className="micro-5-charted-regular2">Numero : 07 68 49 79 32</p>
              </Popup>
            )}
          </AnimatePresence>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', zIndex: '1', pointerEvents: 'none' }}>
            <h1 className="micro-5-charted-regular" style={{ fontSize: '6rem', fontWeight: 'revert', margin: 0 }}>Kyllian Corvaisier</h1>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '3rem', margin: '0.5rem 0' }}>- Student in BTS SIO option SLAM - </h2>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', pointerEvents: 'auto' }}>
              <ContactIcon icon={<FaGithub style={{ color: 'darkorange', fontSize: '25px' }} />} link="https://github.com/KyllianCorv" />
              <ContactIcon icon={<FiMail style={{ color: 'darkorange', fontSize: '25px' }} />} onClick={openMailPopup} />
              <ContactIcon icon={<FiPhone style={{ color: 'darkorange', fontSize: '25px' }} />} onClick={openPhonePopup} />
            </div>
          </div>

          {!isMobile && (
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', zIndex: '2', backgroundColor: 'white', padding: '20px', borderRadius: '10px', fontSize: '1.2rem', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
              <div className="micro-5-charted-regular2" style={{ color: 'darkorange', fontFamily: 'Poppins, sans-serif', fontSize: '23px' }}>Creative Developer</div>
              <div className="micro-5-charted-regular3" style={{ color: 'dark', fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}>French Student in Lyon</div>
            </div>
          )}
          <Navigation />
        </>
      )}
    </div>
  );
}

function ContactIcon({ icon, link, onClick }) {
  const content = (
    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <span>{icon}</span>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        {content}
      </a>
    );
  }

  return <div onClick={onClick} style={{ cursor: 'pointer' }}>{content}</div>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/aboutme" element={<Page2 />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
