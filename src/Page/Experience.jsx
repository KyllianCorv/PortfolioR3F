// src/Page/ProfessionalJourney.js
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';

const experiences = [
  {
    id: 1,
    position: 'Développeur Frontend',
    company: 'Tech Corp',
    duration: 'Jan 2021 - Présent',
    description: 'Développement d\'applications web réactives avec React et Redux.'
  },
  {
    id: 2,
    position: 'Développeur Backend',
    company: 'Innovate Ltd.',
    duration: 'Mar 2018 - Dec 2020',
    description: 'Création et maintenance d\'API avec Node.js et Express.'
  },
  {
    id: 3,
    position: 'Stagiaire Développeur',
    company: 'Web Solutions',
    duration: 'Jun 2017 - Feb 2018',
    description: 'Assistance dans le développement de sites web et d\'applications web.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 }
};

const ProfessionalJourney = () => {
  const styles = {
    container: {
      padding: '40px',
      background: '#FFF',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: "'Poppins', sans-serif"
    },
    title: {
      fontSize: '3rem',
      color: '#FFA500',
      marginBottom: '40px',
      textAlign: 'center'
    },
    experienceContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      width: '100%',
      maxWidth: '800px'
    },
    experienceCard: {
      background: '#FFF',
      borderRadius: '10px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)',
      padding: '20px',
      textAlign: 'left',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease'
    },
    yellowSquare: {
      width: '20px',
      height: '20px',
      background: 'darkorange',
      borderRadius: '4px',
      marginRight: '15px',
      flexShrink: 0,
    },
    position: {
      fontSize: '1.5rem',
      color: '#333',
      marginBottom: '10px'
    },
    company: {
      fontSize: '1.2rem',
      color: '#666',
      marginBottom: '10px'
    },
    duration: {
      fontSize: '1rem',
      color: '#999',
      marginBottom: '10px'
    },
    description: {
      fontSize: '1rem',
      color: '#666'
    }
  };

  return (
    <div style={styles.container}>
       <Navigation />
      <h1 style={styles.title}>Parcours Professionnel</h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={styles.experienceContainer}
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05, backgroundColor: '#fff', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
            style={styles.experienceCard}
          >
            <div style={styles.yellowSquare}></div>
            <div>
              <h2 style={styles.position}>{experience.position}</h2>
              <h3 style={styles.company}>{experience.company}</h3>
              <p style={styles.duration}><i>{experience.duration}</i></p>
              <p style={styles.description}>{experience.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProfessionalJourney;
