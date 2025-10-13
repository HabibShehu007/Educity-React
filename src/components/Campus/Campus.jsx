import React from 'react';
import './Campus.css';
import gallery_1 from '../../assets/gallery-1.png';
import gallery_2 from '../../assets/gallery-2.png';
import gallery_3 from '../../assets/gallery-3.png';
import gallery_4 from '../../assets/gallery-4.png';
import white_arrow from '../../assets/white-arrow.png';
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

const Campus = () => {
  const galleryImages = [gallery_1, gallery_2, gallery_3, gallery_4];

  return (
    <div className='campus'>
      <div className="gallery">
        {galleryImages.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt=""
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
        See More Here <img src={white_arrow} alt="" />
      </motion.button>
    </div>
  );
};

export default Campus;
