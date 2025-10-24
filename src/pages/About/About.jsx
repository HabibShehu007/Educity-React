import React from 'react';
import './About.css';
import './AboutDeveloper.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="about">
      {/* Left image section */}
      <motion.div
        className="about-left"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <img src="/assets/about.webp" alt="Educity platform" className="about-img" />
      </motion.div>

      {/* Right text section */}
      <motion.div
        className="about-right"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h3>ABOUT EDUCITY</h3>
        <h2>Empowering Learners, Everywhere</h2>
        <p>
          Educity is a modern education platform built to inspire, equip, and connect learners across the globe. We believe that education should be accessible, personalized, and deeply impactful — not just a path to a degree, but a launchpad for life.
        </p>
        <p>
          Whether you&#39;re a student exploring academic programs, a professional upgrading your skills, or a dreamer chasing new goals, Educity offers tools, resources, and mentorship to help you grow. Our mission is to bridge the gap between traditional learning and real-world opportunity.
        </p>
        <p>
          Created by passionate educators and digital builders, Educity is more than a website — it&#39;s a movement. Join us in shaping a smarter, more connected future through learning that truly matters.
        </p>
      </motion.div>

      {/* Developer section */}
      <motion.div
        className="developer-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <img src="/assets/habib.jpg" alt="Habib - Developer" className="dev-pic" />
        <div className="dev-bio">
          <h4>Meet the Developer</h4>
          <p>
            Hi, I&#39;m Habib — the creator of Educity. I built this platform to make learning more accessible, inspiring, and future-focused. I’m passionate about frontend development, clean UI, and building tools that empower people. Thanks for visiting!
          </p>
          <div className="dev-social-cards">
  <div className="dev-social-cards">
  <a
    href="https://www.linkedin.com/in/habib-shehu"
    className="social-card linkedin"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fab fa-linkedin"></i>
    <span>LinkedIn</span>
  </a>
  <a
    href="https://wa.me/2349130710700"
    className="social-card whatsapp"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fab fa-whatsapp"></i>
    <span>WhatsApp</span>
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=100089234567890" 
    className="social-card facebook"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fab fa-facebook"></i>
    <span>Facebook</span>
  </a>

  <a
    href="https://www.instagram.com/_devhabib"
    className="social-card instagram"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fab fa-instagram"></i>
    <span>Instagram</span>
  </a>

  <a
    href="https://github.com/HabibShehu007"
    className="social-card github"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fab fa-github"></i>
    <span>GitHub</span>
  </a>
</div>
</div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
