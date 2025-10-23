import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPreview.css';
import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaLightbulb,
  FaHandsHelping,
  FaGlobeAfrica,
} from 'react-icons/fa';

const aboutHighlights = [
  {
    icon: <FaGraduationCap />,
    title: 'Empowering Education',
    description: 'We equip students with the knowledge and mindset to thrive in a changing world.',
  },
  {
    icon: <FaLightbulb />,
    title: 'Innovative Learning',
    description: 'Our programs foster creativity, critical thinking, and real-world problem solving.',
  },
  {
    icon: <FaHandsHelping />,
    title: 'Inclusive Community',
    description: 'We believe in diversity, support, and collaboration across all backgrounds and cultures.',
  },
  {
    icon: <FaGlobeAfrica />,
    title: 'Global Impact',
    description: 'Educity alumni are making a difference across industries and continents.',
  },
];

const AboutPreview = () => {
  return (
    <section id="about" className="about-preview section-preview container">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      >
        About Educity
      </motion.h2>

      <motion.p
        className="intro"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 90 }}
      >
        Discover who we are, what we stand for, and how we’re shaping the future through education.
      </motion.p>

      <div className="about-grid">
        {aboutHighlights.map((item, index) => (
          <motion.div
            className="about-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 120 }}
          >
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="learn-more-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 150 }}
      >
        <Link to="/about" className="btn learn-more-btn">
          Learn More About Us
        </Link>
      </motion.div>
    </section>
  );
};

export default AboutPreview;
