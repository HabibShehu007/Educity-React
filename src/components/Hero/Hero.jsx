import React from 'react';
import './hero.css';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='hero container'>
      <motion.div
        className='hero-text'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 120,
          damping: 12,
          duration: 0.8,
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 10,
            delay: 0.1,
          }}
        >
          We Ensure Better Education For Better World
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 14,
            delay: 0.3,
          }}
        >
          Our Cutting-edge Curriculum is Designed to Empower Students
          With the Knowledge, Skills, and Experiences
          Needed to Excel in the Dynamic field of Education
        </motion.p>

        <motion.button
          className='btn'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 15,
            delay: 0.5,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore More <img src="/assets/dark-arrow.png" alt="Arrow icon" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
