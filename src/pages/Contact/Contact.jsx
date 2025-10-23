import React from 'react';
import './Contact.css';
import { motion } from 'framer-motion';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "42016a29-9d48-4cd9-90e3-607b6006b0be");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      className='contact'
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <motion.div
        className='contact-col'
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h3>Send Us a Message <img src="/assets/msg-icon.png" alt="Message icon" /></h3>
        <p>
          Feel free to reach out through the contact form or find our contact information below. 
          Your feedback, questions, and suggestions are important to us as we strive to provide 
          exceptional service to our university community.
        </p>
        <ul>
          <li><img src="/assets/mail-icon.png" alt="Mail icon" /> Contact@HabibShehu</li>
          <li><img src="/assets/phone-icon.png" alt="Phone icon" /> +2349130710700</li>
          <li><img src="/assets/location-icon.png" alt="Location icon" /> Katsina State, Nigeria</li>
        </ul>
      </motion.div>

      <motion.div
        className='contact-col'
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter Your Name' required />
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required />
          <label>Write Your Message Here</label>
          <textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>
          <motion.button
            type='submit'
            className='btn dark-btn'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Now <img src="/assets/white-arrow.png" alt="Arrow icon" />
          </motion.button>
        </form>
        <span>{result}</span>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
