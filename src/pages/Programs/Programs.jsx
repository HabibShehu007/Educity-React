import React, { useState } from 'react';
import './Programs.css';
import './ProgramModal.css';
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
    img: '/assets/program-1.webp',
    icon: '/assets/program-icon-1.png',
    label: 'Graduation Degree',
    desc: 'Build foundational knowledge and skills for your career journey with our undergraduate programs.',
    details: 'Our graduation programs offer a wide range of disciplines, hands-on learning, and mentorship to prepare you for real-world challenges. You’ll gain critical thinking, communication, and technical skills that form the backbone of any successful career. Whether you’re entering business, science, arts, or technology, our undergraduate degrees are designed to launch you forward.'
  },
  {
    img: '/assets/program-2.webp',
    icon: '/assets/program-icon-2.png',
    label: 'Masters Degree',
    desc: 'Advance your expertise and open doors to leadership roles with our graduate-level programs.',
    details: 'Our master’s programs are designed for deep specialization, research opportunities, and career advancement in your chosen field. You’ll work closely with faculty mentors, engage in real-world projects, and develop leadership skills that set you apart. Whether you’re pursuing an MBA, MSc, or MA, our graduate degrees help you lead with confidence.'
  },
  {
    img: '/assets/program-3.webp',
    icon: '/assets/program-icon-3.png',
    label: 'Post Degree',
    desc: 'Specialize further or shift your career path with our post-degree certifications and diplomas.',
    details: 'Post-degree programs help professionals pivot or deepen their expertise with flexible, targeted learning tracks. These include diplomas, certificates, and professional development courses that fit your schedule and goals. Ideal for career changers, upskillers, and lifelong learners looking to stay ahead in a competitive world.'
  }
];

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const openModal = (program) => {
    setSelectedProgram(program);
  };

  const closeModal = () => {
    setSelectedProgram(null);
  };

  return (
    <div className="programs-preview">
      <div className="programs-intro">
        <h2>Explore Our Academic Programs</h2>
        <p>
          At Educity, we offer a range of degree paths designed to empower students with knowledge, skills, and global perspectives. Whether you&apos;re pursuing undergraduate studies or advancing through postgraduate research, our programs are built to inspire and prepare you for the future.
        </p>
      </div>

      <div className="programs-grid">
        {programs.map((item, index) => (
          <motion.div
            className="program-block"
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
          >
            <img src={item.img} alt={item.label} loading="lazy" className="program-img" />
            <div className="program-content">
              <img src={item.icon} alt={`${item.label} icon`} loading="lazy" className="program-icon" />
              <h3>{item.label}</h3>
              <p>{item.desc}</p>
              <button className="learn-more-btn" onClick={() => openModal(item)}>Learn More</button>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedProgram && (
        <div className="program-modal">
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <img src={selectedProgram.icon} alt={`${selectedProgram.label} icon`} loading="lazy" className="modal-icon" />
            <h3>{selectedProgram.label}</h3>
            <p>{selectedProgram.details}</p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Programs;
