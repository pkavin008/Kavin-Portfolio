import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-5" style={{
      background: 'linear-gradient(135deg, #2d3748, #1e293b)',
      color: 'white'
    }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-4" style={{
              background: 'linear-gradient(90deg, #6366f1, #ff6584)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              fontWeight: '700'
            }}>
              KAVIN P
            </h5>
            <p style={{ color: '#e5e7eb' }}>Fullstack Developer creating modern web applications with Java and React.</p>
            <div className="social-icons mt-4">
              <a 
                href="https://www.linkedin.com/in/kavin-p" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="me-3"
                style={{
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease'
                }}
              >
                <FaLinkedin size={18} />
              </a>
              <a 
                href="https://github.com/pkavin008" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="me-3"
                style={{
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease'
                }}
              >
                <FaGithub size={18} />
              </a>
              <a 
                href="mailto:kavinkanna.p63@gmail.com" 
                className="me-3"
                style={{
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease'
                }}
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-4" style={{
              background: 'linear-gradient(90deg, #6366f1, #ff6584)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              fontWeight: '700'
            }}>
              Quick Links
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#home" className="text-white text-decoration-none">Home</a></li>
              <li className="mb-2"><a href="#about" className="text-white text-decoration-none">About</a></li>
              <li className="mb-2"><a href="#experience" className="text-white text-decoration-none">Experience</a></li>
              <li className="mb-2"><a href="#skills" className="text-white text-decoration-none">Skills</a></li>
              <li className="mb-2"><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="mb-4" style={{
              background: 'linear-gradient(90deg, #6366f1, #ff6584)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              fontWeight: '700'
            }}>
              Contact Info
            </h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-center">
                <FaEnvelope className="me-2" style={{ color: '#6366f1' }} />
                <span>kavinkanna.p63@gmail.com</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FaPhoneAlt className="me-2" style={{ color: '#00c9a7' }} />
                <span>+91 63698 35001</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <span>Thiruchengodu, Tamil Nadu</span>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        <div className="text-center">
          <p className="mb-0" style={{ color: '#e5e7eb' }}>
            &copy; {new Date().getFullYear()} KAVIN P. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;