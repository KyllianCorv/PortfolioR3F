import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Icône de menu SVG
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{ position: 'absolute', top: '20px', right: '20px', zIndex: '2', cursor: 'pointer' }}
      onClick={toggleMenu}
    >
      <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'darkorange', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
        <MenuIcon />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: isMobile ? '100vw' : '20vw',
              height: '100vh',
              backgroundColor: 'white',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
              zIndex: '3',
              overflowY: 'auto',
              borderRadius: isMobile ? '0px' : '10px',
            }}
          >
            <div style={{ padding: '20px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>
              <h1 className="micro-5-charted-regular" style={{ fontSize: '2rem', margin: '0' }}>Menu</h1>
            </div>
            <ul style={{ listStyleType: 'none', padding: '20px' }}>
              <li style={{ marginTop: "10px" }}>
                <Link to='/' className="micro-5-charted-regular3" style={{ textDecoration: 'none', color: location.pathname === '/' ? 'darkorange' : 'black' }}>Home</Link>
              </li>
              <li style={{ marginTop: "10px" }}>
                <Link to='/aboutme' className="micro-5-charted-regular3" style={{ textDecoration: 'none', color: location.pathname === '/aboutme' ? 'darkorange' : 'black' }}>About Me</Link>
              </li>
              <li style={{ marginTop: "10px" }}>
                <Link to='/projects' className="micro-5-charted-regular3" style={{ textDecoration: 'none', color: location.pathname === '/projects' ? 'darkorange' : 'black' }}>Projects</Link>
              </li>
              <li style={{ marginTop: "10px" }}>
                <Link to='/experience' className="micro-5-charted-regular3" style={{ textDecoration: 'none', color: location.pathname === '/experience' ? 'darkorange' : 'black' }}>Experience</Link>
              </li>
              <br></br>
              {/* <li style={{ marginTop: "10px" }}>
                <Link to='https://willyblanc.netlify.app' className="micro-5-charted-regular3" style={{ textDecoration: 'none', color: location.pathname === '/route2' ? 'darkorange' : 'black' }}>- Site WB</Link>
              </li> */}
              {/* Add more routes as needed */}
            </ul>
            <div style={{ borderTop: '1px solid #ddd', padding: '20px', textAlign: 'center' }}>
              <p style={{ fontSize: '0.8rem', color: '#777' }}>© 2024 YourWebsite. All Rights Reserved.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default MenuButton;
