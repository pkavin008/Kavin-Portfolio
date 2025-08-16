import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then(
      (result) => {
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        alert('Failed to send message. Please try again.');
        console.error(error);
      }
    );
  };

  const contactItems = [
    { 
      icon: <FiMail style={{ color: '#6366f1' }} />, 
      text: "kavinkanna.p63@gmail.com",
      color: '#6366f1'
    },
    { 
      icon: <FiPhone style={{ color: '#00c9a7' }} />, 
      text: "+91 63698 35001",
      color: '#00c9a7'
    },
    { 
      icon: <FiMapPin style={{ color: '#ff6584' }} />, 
      text: "Thiruchengodu, Tamil Nadu",
      color: '#ff6584'
    },
    { 
      icon: <FiLinkedin style={{ color: '#ff9e3d' }} />, 
      text: "linkedin.com/in/yourprofile",
      link: "https://linkedin.com/in/yourprofile",
      color: '#ff9e3d'
    },
    { 
      icon: <FiGithub style={{ color: '#6366f1' }} />, 
      text: "github.com/yourusername",
      link: "https://github.com/yourusername",
      color: '#6366f1'
    }
  ];

  return (
    <section id="contact" className="section" style={{
      background: 'linear-gradient(135deg, rgba(245,255,255,0.8) 0%, rgba(255,245,255,0.8) 100%)'
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-center mt-5">
            Contact <span style={{
              background: 'linear-gradient(90deg, #6366f1, #ff6584)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>Me</span>
          </h2>
          
          <div className="row g-4">
            <motion.div 
              className="col-md-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="card h-100 border-0" style={{
                background: 'rgba(255, 255, 255, 0.95)',
                boxShadow: '0 10px 30px rgba(99, 102, 241, 0.1)',
                borderRadius: '15px',
                borderTop: '5px solid #6366f1'
              }}>
                <div className="card-body p-4 p-lg-5">
                  <h4 className="fw-bold mb-4" style={{ color: '#6366f1' }}>Get in Touch</h4>
                  
                  <ul className="list-unstyled">
                    {contactItems.map((item, index) => (
                      <motion.li 
                        key={index}
                        className="mb-3 d-flex align-items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      >
                        <div className="p-2 rounded-circle me-3" style={{
                          background: `${item.color}20`
                        }}>
                          {item.icon}
                        </div>
                        <div>
                          {item.link ? (
                            <a 
                              href={item.link} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-decoration-none"
                              style={{ color: item.color }}
                            >
                              {item.text}
                            </a>
                          ) : (
                            <span style={{ color: '#4b5563' }}>{item.text}</span>
                          )}
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="col-md-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="card h-100 border-0" style={{
                background: 'rgba(255, 255, 255, 0.95)',
                boxShadow: '0 10px 30px rgba(99, 102, 241, 0.1)',
                borderRadius: '15px',
                borderTop: '5px solid #00c9a7'
              }}>
                <div className="card-body p-4 p-lg-5">
                  <h4 className="fw-bold mb-4" style={{ color: '#00c9a7' }}>Send Me a Message</h4>
                  
                  <form ref={form} onSubmit={sendEmail}>
                    <motion.div
                      className="mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <label htmlFor="name" className="form-label">Name</label>
                      <input 
                        type="text" 
                        name="user_name" 
                        className="form-control" 
                        required 
                        placeholder="Your name"
                        style={{ 
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px',
                          padding: '0.75rem 1rem'
                        }}
                      />
                    </motion.div>
                    
                    <motion.div
                      className="mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <label htmlFor="email" className="form-label">Email</label>
                      <input 
                        type="email" 
                        name="user_email" 
                        className="form-control" 
                        required 
                        placeholder="Your email"
                        style={{ 
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px',
                          padding: '0.75rem 1rem'
                        }}
                      />
                    </motion.div>
                    
                    <motion.div
                      className="mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea 
                        name="message" 
                        className="form-control" 
                        rows="5" 
                        required
                        placeholder="Your message"
                        style={{ 
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px',
                          padding: '0.75rem 1rem'
                        }}
                      ></textarea>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      <button 
                        type="submit" 
                        className="btn d-flex align-items-center"
                        style={{
                          background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          padding: '0.75rem 1.5rem',
                          fontWeight: '500'
                        }}
                      >
                        <FiSend className="me-2" />
                        Send Message
                      </button>
                    </motion.div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;