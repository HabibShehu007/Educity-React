import React from 'react';
import './Campus.css';
import { motion } from 'framer-motion';

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const galleryImages = [
  '/assets/gallery-1.webp',
  '/assets/gallery-2.webp',
  '/assets/gallery-3.webp',
  '/assets/gallery-4.webp',
];

const Campus = () => {
  return (
    <section className="campus">
      <motion.h2
        className="campus-heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Explore Our Campus
      </motion.h2>

      <div className="gallery">
        {galleryImages.map((img, index) => (
          <motion.figure
            key={index}
            className="gallery-item"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img src={img} alt={`Campus view ${index + 1}`} />
            <figcaption>Campus view {index + 1}</figcaption>
          </motion.figure>
        ))}
      </div>

      <motion.button
        className="btn dark-btn"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        See More
      </motion.button>
    </section>
  );
};

export default Campus;
