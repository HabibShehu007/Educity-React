import React from 'react';
import { Link } from 'react-router-dom';
import './CampusPreview.css';
import { motion } from 'framer-motion';
import {
  FaBookReader,
  FaUsers,
  FaTree,
  FaWifi,
  FaBasketballBall,
  FaMusic,
} from 'react-icons/fa';

const campusFeatures = [
  {
    icon: <FaBookReader />,
    title: 'Modern Library',
    description: 'Access thousands of books, journals, and digital resources in a serene study environment.',
  },
  {
    icon: <FaUsers />,
    title: 'Student Clubs',
    description: 'Join vibrant student communities that foster leadership, creativity, and collaboration.',
  },
  {
    icon: <FaTree />,
    title: 'Green Spaces',
    description: 'Relax and recharge in beautifully landscaped gardens and eco-friendly zones.',
  },
  {
    icon: <FaWifi />,
    title: 'Smart Campus',
    description: 'Enjoy high-speed Wi-Fi and tech-enabled classrooms for seamless learning.',
  },
  {
    icon: <FaBasketballBall />,
    title: 'Sports Facilities',
    description: 'Stay active with access to courts, gyms, and recreational programs.',
  },
  {
    icon: <FaMusic />,
    title: 'Cultural Events',
    description: 'Experience music, drama, and art through regular campus-wide festivals.',
  },
];

const CampusPreview = () => {
  return (
    <section id="campus" className="campus-preview section-preview container">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      >
        Campus Life
      </motion.h2>

      <motion.p
        className="intro"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 90 }}
      >
        Discover our vibrant and inclusive campus environment where learning extends beyond the classroom.
      </motion.p>

      <div className="campus-grid">
        {campusFeatures.map((feature, index) => (
          <motion.div
            className="campus-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 120 }}
          >
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="learn-more-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 150 }}
      >
        <Link to="/campus" className="btn learn-more-btn">
          Explore Campus
        </Link>
      </motion.div>
    </section>
  );
};

export default CampusPreview;
