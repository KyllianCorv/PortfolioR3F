// src/Page/ProfessionalJourney.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';

const experiences = [
  {
    id: 1,
    position: 'BTS SIO option SLAM & Mathématique approfondie',
    company: 'Lycée Georges Brassens - Rive de Gier 42800',
    duration: '2022 - 2024',
    description: 'Au cours de mon BTS SIO option SLAM & Mathématique approfondie, j\'ai développé une solide expertise en informatique à travers une variété de projets. J\'ai exploré la programmation orientée objet (POO) et les principes fondamentaux du développement logiciel. Mes projets ont couvert une large gamme de domaines, incluant le développement web, le développement mobile et la conception d\'applications. J\'ai eu l\'occasion de travailler sur des technologies diverses telles que PHP, JavaScript, C# et bien d\'autres, sans oublier la conception de bases de données relationnelles. Cette expérience m\'a permis de découvrir de multiples facettes du développement logiciel et de développer ma passion pour l\'informatique.',
    additionalInfo: 'Cliquer pour voir les stages',
    stages: [
      {
        id: 3,
        position: 'JCOM',
        duration: 'Mai / Juin 2023',
        description: 'J\'ai travaillé sur des projets variés lors de mon stage chez JCOM. Mon principal domaine d\'intervention était le développement web sur des plateformes telles que WordPress, utilisant des outils tels que Divi et Elementor pour concevoir et personnaliser des sites web. Mon rôle impliquait principalement la correction et l\'optimisation du code PHP, CSS et JavaScript, ainsi que l\'intégration de fonctionnalités complexes avec jQuery. Cette expérience m\'a permis de développer mes compétences techniques tout en apprenant à travailler sur des projets réels dans un environnement professionnel, ce qui m\'a été précieux pour ma croissance en tant que développeur web.'
      },      
      {
        id: 4,
        position: 'YATA !',
        duration: 'Novembre / Décembre 2023',
        description: 'Pendant mon stage chez YATA !, j\'ai été impliqué dans un projet de grande envergure axé sur l\'écoconception web pour réduire l\'impact environnemental des sites web. Mon rôle était polyvalent et comprenait plusieurs aspects du développement. J\'ai commencé par concevoir des maquettes pour les interfaces utilisateur, en tenant compte des meilleures pratiques d\'écoconception. Ensuite, j\'ai développé un panel administrateur complet en utilisant Flutter et Dart, offrant une interface intuitive pour gérer la consommation du site dans son intégralité. J\'ai utilisé une API pour optimiser les requêtes et minimiser la charge serveur. Ce stage m\'a permis d\'acquérir une compréhension approfondie des défis et des solutions liés à l\'écoconception web, ainsi que des compétences pratiques en conception, développement dans un contexte professionnel.'
      },
    ]
  },
  {
    id: 2,
    position: 'Baccalauréat général mathématiques et physique chimie',
    company: 'LEGTA - Montmorot 39362',
    duration: '2019 - 2022',
    description: 'Pendant mon Baccalauréat général en mathématiques et physique chimie, j\'ai développé une rigueur de travail et une détermination indéfectibles malgré les notes parfois faibles. Ce parcours m\'a permis de consolider mes connaissances dans les matières scientifiques et d\'acquérir des compétences essentielles telles que l\'analyse critique et la résolution de problèmes.'
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
  const [openStages, setOpenStages] = useState(false);

  const toggleStages = () => {
    setOpenStages(!openStages);
  };

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
      flexDirection: 'column', // Ensuring column direction
      alignItems: 'flex-start', // Align items to the start
      position: 'relative',
      transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer'
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
      textAlign: "justify",
      color: '#666',
      marginTop: '10px',
      marginRight: '15px'
    },
    additionalInfo: {
      fontSize: '1rem',
      color: '#FFA500',
      marginTop: '10px'
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
          <React.Fragment key={experience.id}>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.005, backgroundColor: '#fff', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
              style={styles.experienceCard}
              onClick={experience.stages ? toggleStages : null}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={styles.yellowSquare}></div>
                <div>
                  <h2 style={styles.position}>{experience.position}</h2>
                  <h3 style={styles.company}>{experience.company}</h3>
                  <p style={styles.duration}><i>{experience.duration}</i></p>
                  <p style={styles.description}>{experience.description}</p>
                  {experience.stages && <p style={styles.additionalInfo}>{experience.additionalInfo}</p>}
                </div>
              </div>
            </motion.div>
            {openStages && experience.stages && experience.stages.map((stage) => (
              <motion.div
                key={stage.id}
                variants={itemVariants}
                style={{ ...styles.experienceCard, marginLeft: '40px', cursor: 'default' }}
              >
                <div>
                  <h2 style={styles.position}>{stage.position}</h2>
                  <h3 style={styles.company}>{stage.company}</h3>
                  <p style={styles.duration}><i>{stage.duration}</i></p>
                  <p style={styles.description}>{stage.description}</p>
                </div>
              </motion.div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default ProfessionalJourney;
