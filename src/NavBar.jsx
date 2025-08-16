import React, { useState, useEffect } from 'react';
import { FaLaptopCode, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'experience', name: 'Experience' },
    { id: 'skills', name: 'Skills' },
    { id: 'contact', name: 'Contact' }
  ];

  return (
    <motion.nav
      className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'nav-scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(12px)',
        boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        padding: isScrolled ? '10px 0' : '15px 0',
        borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.05)' : 'none'
      }}
    >
      <div className="container">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            to="home" 
            className="navbar-brand d-flex align-items-center"
            smooth={true}
            duration={500}
            onClick={() => {
              setIsOpen(false);
              setActiveSection('home');
            }}
            style={{ textDecoration: 'none' }}
          >
            <FaLaptopCode className="me-2" style={{ 
              color: '#6366f1', 
              fontSize: '1.8rem',
              transition: 'transform 0.3s ease'
            }} />
            <span style={{
              background: 'linear-gradient(90deg, #6366f1, #ff6584)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              fontWeight: '700',
              fontSize: '1.3rem',
              letterSpacing: '0.5px',
              display: 'inline-block' // Add this line
            }}>
              KAVIN P
            </span>
          </Link>
        </motion.div>

        <motion.button
          className="navbar-toggler border-0 p-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ 
            fontSize: '1.5rem',
            outline: 'none',
            zIndex: 1001
          }}
        >
          {isOpen ? (
            <FaTimes style={{ color: '#6366f1' }} />
          ) : (
            <FaBars style={{ color: '#6366f1' }} />
          )}
        </motion.button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            {navItems.map((item, index) => (
              <motion.li 
                key={item.id} 
                className="nav-item mx-lg-1 mx-0"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  delay: 0.1 * index,
                  duration: 0.3,
                  ease: "easeOut"
                }}
              >
                <Link
                  to={item.id}
                  className={`nav-link px-3 py-2 rounded position-relative ${activeSection === item.id ? 'active' : ''}`}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => {
                    setIsOpen(false);
                    setActiveSection(item.id);
                  }}
                  onSetActive={() => setActiveSection(item.id)}
                  style={{
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    color: activeSection === item.id ? '#6366f1' : '#4b5563',
                    fontWeight: activeSection === item.id ? '600' : '500',
                    fontSize: '0.95rem',
                    letterSpacing: '0.3px',
                    margin: '0.2rem 0',
                    textDecoration: 'none'
                  }}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.span 
                      className="active-indicator"
                      layoutId="activeIndicator"
                      style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        height: '2px',
                        width: '20px',
                        background: 'linear-gradient(90deg, #6366f1, #ff6584)',
                        borderRadius: '2px'
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 20 
                      }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;