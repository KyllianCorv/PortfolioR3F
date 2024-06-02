import React from 'react';
import Navigation from '../components/Navigation';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/AboutMe.css';
import '../index.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const quotes = [
  { text: "HTML, CSS, JS, PHP, SQL with framework React, Three.js (R3F), Ajax, Laravel 10, Tailwind", author: "Web development" },
  { text: "I have a solid grasp of Flutter thanks to my ongoing learning.", author: "Mobile development" },
  { text: "I am proficient in Python and C#, thanks to both personal and academic practice.", author: "OPP" }
];

const AboutMe = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="about-me-container">
      <Navigation />
      <div className="centered-content">
        <div className="left-column">
          <div className="image-container">
            <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="Profile" />
          </div>
        </div>
        <div className="right-column">
          <div className="text-container" style={{ textAlign: 'justify' }}>
            <h1 className="micro-5-charted-regular" style={{ color: "darkorange" }}>Welcome</h1>
            <h2 className="micro-5-charted-regular2">Passionate Developer and Student</h2>
            <p style={{ marginTop: "20px" }} className="micro-5-charted-regular3">
              I am a student from Jura passionate about the world of computing. Since the beginning of my training, I have been learning a lot, including web development, mobile development, and object-oriented programming (OOP). I am also interested in game design and 3D with R3F.
            </p>
            <div style={{ display: 'flex', justifyContent: 'start', marginTop: '30px' }}>
              <ContactIcon icon={<FaGithub style={{ color: 'darkorange', fontSize: '25px' }} />} link="https://github.com/yourgithub" />
              <ContactIcon icon={<FaLinkedin style={{ color: 'darkorange', fontSize: '25px' }} />} link="https://www.linkedin.com/in/yourlinkedin" />
              <ContactIcon2 email="mai@email.com" />
            </div>
          </div>
          <div className="slider-container">
            <Slider {...settings}>
              {quotes.map((quote, index) => (
                <div key={index}>
                  <blockquote className='micro-5-charted-regular3'>{quote.text}</blockquote>
                  <p className='micro-5-charted-regular3'>{quote.author}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

function ContactIcon2({ email }) {
  const handleMailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div onClick={handleMailClick} style={{ cursor: 'pointer', textDecoration: 'none', margin: '0 10px' }}>
      <div className="contact-icon">
        <FiMail style={{ color: 'darkorange', fontSize: '25px' }} />
      </div>
    </div>
  );
}

function ContactIcon({ icon, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', margin: '0 10px' }}>
      <div className="contact-icon">
        {icon}
      </div>
    </a>
  );
}

export default AboutMe;
