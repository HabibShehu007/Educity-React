import React from 'react'
import './hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We Ensure Better Education For  Better World</h1>
        <p>Our Cutting-edge Curriculum is Designed to Empower Students
          With the Knowledge, Skills, and Experiences
          Needed to Excel in teh Dynamin field of Education</p>
        <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default hero