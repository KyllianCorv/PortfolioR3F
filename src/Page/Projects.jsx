import React from 'react';
import { motion } from 'framer-motion';
import '../css/Projects.css';
import Navigation from '../components/Navigation';

const projects = [
  {
    title: "Site web Sneakers",
    description: [
      "Langages : HTML - CSS - JS - PHP",
      "Ce projet est une copie du site de S2 Vichy, cela m’a permis de valider mes compétences dans ces langages. Ce site a été réalisé durant mon temps libre et n’est pas présent en ligne pour des raisons juridiques."
    ],
    link: "#",
    image: "projects/S2S.png" 
  },
  {
    title: "Monopoly",
    description: [
      "Langage : Python",
      "Projet réalisé lors de ma première année de BTS SIO, ce projet a été réalisé par groupe de 3 entièrement en python dans le cadre de la programmation orienté objet (POO). Le jeu est parfaitement jouable depuis le terminal avec un aspect graphique réalisé par mes soins. Pour l’aspect graphique, j’ai utilisé TKinter afin de créer le plateau ainsi que les pions se déplacent sur celui-ci."
    ],
    link: "#",
    image: "projects/Monopoly.png"
  },
  {
    title: "Blind Test",
    description: [
      "Langage : Python",
      "Projet réalisé lors de ma première année de BTS SIO, ce projet a été réalisé seul. Ce blind test est composé d’une base de données interne, le jeu fonctionne simplement avec deux champs de texte afin de rentrer les réponses, un compteur de point est présent pour voir l’évolution des points du joueur."
    ],
    link: "#",
    image: "projects/BlindTest.png"
  },
  {
    title: "La suite arrive",
    description: ["..."],
    link: "#",
    image: "https://via.placeholder.com/300"
  },
  
];

const Projects = () => {
  return (
    <div className="projects-container">
      <Navigation />
      <h1 className="projects-title">My Projects</h1>
      <motion.div 
        className="projects-grid"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card"
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h2>{project.title}</h2>
              {project.description.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              {/* <a href={project.link} className="project-link">Learn More</a> */}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
