import React from 'react';
import './Programs.css';
import { motion } from 'framer-motion';

const cardVariants = {
  offscreen: { opacity: 0, y: 100 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.6
    }
  }
};

const programs = [
  {
    img: '/assets/program-1.png',
    icon: '/assets/program-icon-1.png',
    label: 'Graduation Degree'
  },
  {
    img: '/assets/program-2.png',
    icon: '/assets/program-icon-2.png',
    label: 'Masters Degree'
  },
  {
    img: '/assets/program-3.png',
    icon: '/assets/program-icon-3.png',
    label: 'Post Degree'
  }
];

const Programs = () => {
  return (
    <div className="programs-preview">
      <div className="programs-intro">
        <h2>Explore Our Academic Programs</h2>
        <p>
          At Educity, we offer a range of degree paths designed to empower students with knowledge, skills, and global perspectives. Whether you're pursuing undergraduate studies or advancing through postgraduate research, our programs are built to inspire and prepare you for the future.
        </p>
      </div>

      <div className="programs-grid">
        {programs.map((item, index) => (
          <motion.div
            className="program-card"
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
          >
            <img src={item.img} alt={item.label} />
            <div className="caption">
              <img src={item.icon} alt={`${item.label} icon`} />
              <p>{item.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
