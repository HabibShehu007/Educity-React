import React from 'react';
import { Link } from 'react-router-dom';
import './ProgramsPreview.css';
import { motion } from 'framer-motion';
import {
  FaLaptopCode,
  FaPalette,
  FaBriefcase,
  FaGlobe,
  FaMicroscope,
  FaHeartbeat,
} from 'react-icons/fa';

const programs = [
  {
    icon: <FaLaptopCode />,
    title: 'Computer Science',
    description: 'Master coding, AI, and software development through hands-on learning.',
  },
  {
    icon: <FaPalette />,
    title: 'Creative Arts',
    description: 'Explore design, media, and visual storytelling to unleash your creativity.',
  },
  {
    icon: <FaBriefcase />,
    title: 'Business & Management',
    description: 'Develop leadership and entrepreneurial skills for the global market.',
  },
  {
    icon: <FaGlobe />,
    title: 'Global Studies',
    description: 'Understand international relations, diplomacy, and cultural exchange.',
  },
  {
    icon: <FaMicroscope />,
    title: 'Biological Sciences',
    description: 'Dive into genetics, ecology, and biotechnology with modern lab experience.',
  },
  {
    icon: <FaHeartbeat />,
    title: 'Health Sciences',
    description: 'Prepare for careers in medicine, nursing, and public health.',
  },
];

const ProgramsPreview = () => {
  return (
    <section id="programs" className="programs-preview section-preview container">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      >
        Our Academic Programs
      </motion.h2>

      <motion.p
        className="intro"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 90 }}
      >
        At Educity, we offer a diverse range of programs designed to equip students with the skills and mindset to thrive in a dynamic world.
      </motion.p>

      <div className="programs-grid">
        {programs.map((program, index) => (
          <motion.div
            className="program-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 120 }}
          >
            <div className="icon">{program.icon}</div>
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="learn-more-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 150 }}
      >
        <Link to="/programs" className="btn learn-more-btn">
          See All Programs
        </Link>
      </motion.div>
    </section>
  );
};

export default ProgramsPreview;
