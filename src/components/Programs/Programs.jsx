import React from 'react';
import './Programs.css';
import program_1 from '../../assets/program-1.png';
import program_2 from '../../assets/program-2.png';
import program_3 from '../../assets/program-3.png';
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png';
import program_icon_3 from '../../assets/program-icon-3.png';
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

const Programs = () => {
  return (
    <div className="programs">
      {[{
        img: program_1,
        icon: program_icon_1,
        label: 'Graduation Degree'
      }, {
        img: program_2,
        icon: program_icon_2,
        label: 'Masters Degree'
      }, {
        img: program_3,
        icon: program_icon_3,
        label: 'Post Degree'
      }].map((item, index) => (
        <motion.div
          className="program"
          key={index}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
        >
          <img src={item.img} alt="" />
          <div className="caption">
            <img src={item.icon} alt="" />
            <p>{item.label}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Programs;
