import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaLinkedin, FaGithub, FaFileDownload, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import profile from './assets/Aprofile.jpg';

const Home = () => {
  return (
    <section 
      id="home" 
      className="d-flex align-items-center"
      style={{
        minHeight: '100vh',
        paddingTop: '5rem',
        background: 'linear-gradient(135deg, rgba(108,99,255,0.1) 0%, rgba(255,101,132,0.1) 100%)'
      }}
    >
      <div className="container">
        <div className="row align-items-center">
      
          <div className="col-lg-6 order-2 order-lg-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h6 className="mb-3" style={{
                color: '#6366f1',
                letterSpacing: '2px',
                fontSize: '1rem',
                fontWeight: 700,
                textTransform: 'uppercase'
              }}>
                Hello, I'm
              </h6>
              
              <h1 className="display-4 fw-bold mb-3" style={{
                color: '#111827'
              }}>
                KAVIN <span style={{ color: '#6366f1' }}>P</span>
              </h1>
              
              <h2 className="h4 mb-4" style={{
                color: '#4b5563',
                fontWeight: 500
              }}>
                <span style={{ 
                  background: 'linear-gradient(90deg, #6366f1, #ff6584)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  fontWeight: 600 
                }}>Full Stack Developer</span> | Java Specialist
              </h2>
              
              <p className="mb-4" style={{
                color: '#6b7280',
                fontSize: '1rem',
                lineHeight: '1.7'
              }}>
                I build <span style={{ fontWeight: 600, color: '#111827' }}>high-quality web applications</span> with modern technologies and clean, maintainable code.
              </p>
              
              <div className="d-flex flex-wrap gap-3 mb-4">
                <ScrollLink 
                  to="contact" 
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="btn btn-primary px-4 py-2 d-flex align-items-center"
                  style={{
                    background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: 500
                  }}
                >
                  Contact Me <FaArrowRight className="ms-2" />
                </ScrollLink>
                
                <a 
                  href="/path-to-cv.pdf"
                  download
                  className="btn btn-outline-primary px-4 py-2 d-flex align-items-center"
                  style={{
                    borderColor: '#6366f1',
                    color: '#6366f1',
                    borderRadius: '6px',
                    fontWeight: 500
                  }}
                >
                  <FaFileDownload className="me-2" /> Download CV
                </a>
              </div>

              <div className="d-flex gap-3">
                <a 
                  href="https://www.linkedin.com/in/kavin-p" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  style={{
                    color: '#6366f1',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(99, 102, 241, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <FaLinkedin size={18} />
                </a>
                <a 
                  href="https://github.com/pkavin008" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  style={{
                    color: '#6366f1',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(99, 102, 241, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <FaGithub size={18} />
                </a>
              </div>
            </motion.div>
          </div>

         
          <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <motion.div 
                className="position-relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  className="position-absolute top-0 start-0 w-100 h-100 rounded-4"
                  style={{
                    background: 'linear-gradient(45deg, #6366f1, #ff6584)',
                    transform: 'rotate(5deg)',
                    zIndex: 0,
                    opacity: 0.7
                  }}
                />
               <img
                  src={profile}
                  alt="Kavin P"
                  className="img-fluid rounded-4 position-relative"
                  style={{ 
                  zIndex: 1,
                  border: '4px solid white',
                  boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.25)'
                  }}
               />
              </motion.div>

             
              <div className="d-flex justify-content-center gap-2 mt-4 flex-wrap">
                {[
                  { tech: 'Java', color: '#6366f1' },
                  { tech: 'React', color: '#00c9a7' },
                  { tech: 'SpringBoot', color: '#ff9e3d' },
                  { tech: 'SQL', color: '#ff6584' }
                ].map((item, index) => (
                  <motion.span 
                    key={index}
                    whileHover={{ y: -3 }}
                    style={{
                      backgroundColor: `${item.color}20`,
                      padding: '0.35rem 0.9rem',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: item.color,
                      border: `1px solid ${item.color}30`
                    }}
                  >
                    {item.tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;