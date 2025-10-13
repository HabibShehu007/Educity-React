import React from 'react';
import './hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='hero container'>
      <motion.div
        className='hero-text'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          We Ensure Better Education For Better World
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
        >
          Our Cutting-edge Curriculum is Designed to Empower Students
          With the Knowledge, Skills, and Experiences
          Needed to Excel in the Dynamic field of Education
        </motion.p>

        <motion.button
          className='btn'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore More <img src={dark_arrow} alt="" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
