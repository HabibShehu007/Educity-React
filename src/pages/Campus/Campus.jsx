import React from 'react';
import './Campus.css';
import { motion } from 'framer-motion';

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

const galleryImages = [
  '/assets/gallery-1.png',
  '/assets/gallery-2.png',
  '/assets/gallery-3.png',
  '/assets/gallery-4.png'
];

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        {galleryImages.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Campus gallery ${index + 1}`}
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        ))}
      </div>

      <motion.button
        className='btn dark-btn'
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        See More Here <img src="/assets/white-arrow.png" alt="Arrow icon" />
      </motion.button>
    </div>
  );
};

export default Campus;
