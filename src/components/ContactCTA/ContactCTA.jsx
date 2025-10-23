import React from 'react';
import { Link } from 'react-router-dom';
import './ContactCTA.css';
import { motion } from 'framer-motion';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaComments,
} from 'react-icons/fa';

const contactOptions = [
  {
    icon: <FaPhoneAlt />,
    title: 'Call Us',
    description: 'Reach our support team directly via phone for quick assistance.',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email Us',
    description: 'Send us your questions or feedback and we’ll respond promptly.',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Visit Us',
    description: 'Stop by our campus to speak with admissions or explore our facilities.',
  },
  {
    icon: <FaComments />,
    title: 'Live Chat',
    description: 'Connect instantly with a student advisor through our online chat system.',
  },
];

const ContactCTA = () => {
  return (
    <section id="contact" className="contact-preview section-preview container">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      >
        Get in Touch
      </motion.h2>

      <motion.p
        className="intro"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 90 }}
      >
        Whether you have questions, need support, or want to visit — we’re here for you.
      </motion.p>

      <div className="contact-grid">
        {contactOptions.map((option, index) => (
          <motion.div
            className="contact-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 120 }}
          >
            <div className="icon">{option.icon}</div>
            <h3>{option.title}</h3>
            <p>{option.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="learn-more-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 150 }}
      >
        <Link to="/contact" className="btn learn-more-btn">
          Contact Us
        </Link>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
