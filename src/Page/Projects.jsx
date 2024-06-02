import React from 'react';
import { motion } from 'framer-motion';
import '../css/Projects.css';
import Navigation from '../components/Navigation';
const projects = [
  {
    title: "Project One",
    description: "Description of project one.",
    link: "#",
    image: "https://via.placeholder.com/300"
  },
  {
    title: "Project Two",
    description: "Description of project two.",
    link: "#",
    image: "https://via.placeholder.com/300"
  },
  {
    title: "Project Three",
    description: "Description of project three.",
    link: "#",
    image: "https://via.placeholder.com/300"
  },
  {
    title: "Project One",
    description: "Description of project one.",
    link: "#",
    image: "https://via.placeholder.com/300"
  },
  {
    title: "Project Two",
    description: "Description of project two.",
    link: "#",
    image: "https://via.placeholder.com/300"
  },
  {
    title: "Project Three",
    description: "Description of project three.",
    link: "#",
    image: "https://via.placeholder.com/300"
  },
  {
    title: "Project One",
    description: "Description of project one.",
    link: "#",
    image: "https://via.placeholder.com/300"
  },
  {
    title: "Project Two",
    description: "Description of project two.",
    link: "#",
    image: "https://via.placeholder.com/300"
  },
  {
    title: "Project Three",
    description: "Description of project three.",
    link: "#",
    image: "https://via.placeholder.com/300"
  },
  {
    title: "Project One",
    description: "Description of project one.",
    link: "#",
    image: "https://via.placeholder.com/300"
  },
  {
    title: "Project Two",
    description: "Description of project two.",
    link: "#",
    image: "https://via.placeholder.com/300"
  },
  {
    title: "Project Three",
    description: "Description of project three.",
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} className="project-link">Learn More</a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
