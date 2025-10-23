import React from 'react';
import { Link } from 'react-router-dom';
import './TestimonialsPreview.css';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    icon: <FaUserGraduate />,
    name: 'Amina Yusuf',
    quote: 'Educity transformed my academic journey. The support and resources were beyond expectations.',
  },
  {
    icon: <FaStar />,
    name: 'David Okoro',
    quote: 'The campus life is vibrant and inclusive. I made lifelong friends and discovered my passion.',
  },
  {
    icon: <FaQuoteLeft />,
    name: 'Fatima Bello',
    quote: 'The faculty genuinely care. I felt seen, heard, and challenged to grow every single day.',
  },
  {
    icon: <FaUserGraduate />,
    name: 'Samuel Adeyemi',
    quote: 'From academics to extracurriculars, Educity gave me the tools to succeed and lead with confidence.',
  },
];


const TestimonialsPreview = () => {
  return (
    <section id="testimonials" className="testimonials-preview section-preview container">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      >
        What Our Students Say
      </motion.h2>

      <motion.p
        className="intro"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 90 }}
      >
        Hear from students whose lives have been shaped by their experience at Educity.
      </motion.p>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <motion.div
            className="testimonial-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 120 }}
          >
            <div className="icon">{testimonial.icon}</div>
            <p className="quote">“{testimonial.quote}”</p>
            <h4 className="name">— {testimonial.name}</h4>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="learn-more-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 150 }}
      >
        <Link to="/testimonials" className="btn learn-more-btn">
          Read More Testimonials
        </Link>
      </motion.div>
    </section>
  );
};

export default TestimonialsPreview;
