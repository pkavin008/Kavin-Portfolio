import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiGlobe, FiCode, FiCpu, FiUser } from 'react-icons/fi';
import profile from './assets/Aprofile.jpg';

const About = () => {
  return (
    <section id="about" className="section" style={{
      background: 'linear-gradient(135deg, rgba(255,245,245,0.8) 0%, rgba(245,245,255,0.8) 100%)'
    }}>
      <div className="container">
        <motion.div
          className="mx-auto"
          style={{ maxWidth: '1100px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="text-center mb-5"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h2 className="display-5 fw-bold mb-3" style={{
              background: 'linear-gradient(90deg, #6366f1, #ff6584)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>
              ABOUT ME
            </h2>
            <div className="mx-auto" style={{ 
              width: '80px', 
              height: '4px', 
              background: 'linear-gradient(90deg, #6366f1, #ff6584)',
              borderRadius: '2px'
            }} />
          </motion.div>

          <div className="row mb-4">
            <div className="col-12">
              <motion.div
                className="p-4 rounded-4 mb-4"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
                  borderLeft: '5px solid #6366f1'
                }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <span className="badge mb-3" style={{
                  background: 'linear-gradient(90deg, rgba(99,102,241,0.1), rgba(255,101,132,0.1))',
                  color: '#6366f1',
                  fontWeight: 600,
                  padding: '0.5rem 1rem',
                  borderRadius: '6px'
                }}>
                  INTRODUCTION
                </span>
                <h1 className="display-5 fw-bold mb-3">
                  Kavin <span style={{
                    background: 'linear-gradient(90deg, #6366f1, #ff6584)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent'
                  }}>P</span>
                </h1>
                <h4 className="mb-4 fw-normal" style={{
                  color: '#6b7280'
                }}>
                  Full-Stack Developer & Problem Solver
                </h4>
                <div className="mb-4">
                  <p className="lead mb-4" style={{ 
                    color: '#4b5563',
                    lineHeight: '1.7'
                  }}>
                    I specialize in crafting <span style={{ fontWeight: 600 }}>exceptional digital experiences</span> using modern technologies like React, Node.js, and Spring Boot. With a passion for clean code and intuitive design.
                  </p>
                  <p style={{ 
                    color: '#6b7280',
                    lineHeight: '1.7'
                  }}>
                    My approach combines technical expertise with creative problem-solving to deliver scalable solutions that users love.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="row g-4 align-items-center">
            <div className="col-lg-5">
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
            </div>

            <div className="col-lg-7">
              <motion.div
                className="p-4 p-md-5 rounded-4"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
                  borderTop: '5px solid #00c9a7'
                }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="d-flex flex-wrap gap-2 mb-4">
                  <span className="badge py-2 px-3 d-flex align-items-center" style={{
                    background: 'linear-gradient(90deg, rgba(99,102,241,0.1), rgba(140,92,246,0.1))',
                    color: '#6366f1',
                    fontWeight: 500,
                    borderRadius: '6px'
                  }}>
                    <FiCode className="me-2" /> Frontend Development
                  </span>
                  <span className="badge py-2 px-3 d-flex align-items-center" style={{
                    background: 'linear-gradient(90deg, rgba(0,201,167,0.1), rgba(0,184,217,0.1))',
                    color: '#00c9a7',
                    fontWeight: 500,
                    borderRadius: '6px'
                  }}>
                    <FiCpu className="me-2" /> Backend Systems
                  </span>
                </div>

                <div className="mt-4 pt-3 border-top">
                  <h5 className="fw-semibold mb-3" style={{ color: '#374151' }}>Personal Details</h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <div className="p-2 rounded-circle me-3" style={{
                          background: 'linear-gradient(90deg, rgba(99,102,241,0.1), rgba(140,92,246,0.1))'
                        }}>
                          <FiMail style={{ color: '#6366f1' }} />
                        </div>
                        <div>
                          <small className="d-block" style={{ color: '#9ca3af' }}>Email</small>
                          <span className="fw-medium" style={{ color: '#374151' }}>kavinkanna.p63@gmail.com</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <div className="p-2 rounded-circle me-3" style={{
                          background: 'linear-gradient(90deg, rgba(255,101,132,0.1), rgba(255,158,61,0.1))'
                        }}>
                          <FiMapPin style={{ color: '#ff6584' }} />
                        </div>
                        <div>
                          <small className="d-block" style={{ color: '#9ca3af' }}>Location</small>
                          <span className="fw-medium" style={{ color: '#374151' }}>Thiruchengode, TN</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <div className="p-2 rounded-circle me-3" style={{
                          background: 'linear-gradient(90deg, rgba(0,201,167,0.1), rgba(0,184,217,0.1))'
                        }}>
                          <FiGlobe style={{ color: '#00c9a7' }} />
                        </div>
                        <div>
                          <small className="d-block" style={{ color: '#9ca3af' }}>Languages</small>
                          <span className="fw-medium" style={{ color: '#374151' }}>Tamil, English</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;