import React from 'react';
import PropTypes from 'prop-types';
import './About.css';
import { motion } from 'framer-motion';

const About = ({ setPlayState }) => {
  return (
    <div className='about'>
      <motion.div
        className="about-left"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <img src="/assets/about.png" alt="About section" className='about-img' />
        <motion.img
          src="/assets/play-icon.png"
          alt="Play icon"
          className='play-icon'
          onClick={() => setPlayState(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        />
      </motion.div>

      <motion.div
        className="about-right"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrows Leaders Today</h2>
        <p>
          Embark on a transformative educational journey with our university’s comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.
        </p>
      </motion.div>
    </div>
  );
};

About.propTypes = {
  setPlayState: PropTypes.func.isRequired,
};

export default About;
