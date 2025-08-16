import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobileAlt, FaLaptopCode } from 'react-icons/fa';

const Experience = () => {
  const projects = [
    {
      title: "CRUD Application",
      icon: <FaServer className="fs-3" style={{ color: '#6366f1' }} />,
      tech: "Java, Spring Boot, React, Postman",
      points: [
        "Designed and implemented a full-stack CRUD web application",
        "Developed RESTful APIs using Spring Boot",
        "Built responsive React frontend with dynamic forms",
        "Integrated frontend with backend using Axios"
      ],
      color: '#6366f1'
    },
    {
      title: "E-commerce Website",
      icon: <FaMobileAlt className="fs-3" style={{ color: '#00c9a7' }} />,
      tech: "HTML, CSS, Bootstrap, JavaScript, React",
      points: [
        "Developed responsive online store with cart functionality",
        "Used Bootstrap and custom CSS for UI",
        "Implemented React state management",
        "Focused on smooth user experience"
      ],
      color: '#00c9a7'
    },
    {
      title: "Login Portal",
      icon: <FaLaptopCode className="fs-3" style={{ color: '#ff9e3d' }} />,
      tech: "React, Bootstrap",
      points: [
        "Secure login and sign-up system with validation",
        "Designed reusable input components",
        "Managed login state and conditional routing"
      ],
      color: '#ff9e3d'
    },
    {
      title: "Personal Portfolio",
      icon: <FaCode className="fs-3" style={{ color: '#ff6584' }} />,
      tech: "React, HTML, CSS, JavaScript, Bootstrap",
      points: [
        "Built modern responsive portfolio website",
        "Implemented smooth navigation with React Router",
        "Added scroll-based animations",
        "Structured sections for professional presentation"
      ],
      color: '#ff6584'
    }
  ];

  return (
    <section id="experience" className="section" style={{
      background: 'linear-gradient(135deg, rgba(245,245,255,0.8) 0%, rgba(245,255,250,0.8) 100%)'
    }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-center">My <span style={{
            background: 'linear-gradient(90deg, #6366f1, #ff6584)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>Experience</span></h2>
          <p className="text-center mb-5" style={{ color: '#6b7280' }}>Here are some of my notable projects and experiences</p>
          
          <div className="row g-4">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className="col-md-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="card card-custom h-100" style={{
                  borderTop: `3px solid ${project.color}`,
                  boxShadow: `0 5px 15px ${project.color}20`
                }}>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3">
                        {project.icon}
                      </div>
                      <div>
                        <h4 className="mb-0" style={{ color: project.color }}>{project.title}</h4>
                        <small className="text-muted">{project.tech}</small>
                      </div>
                    </div>
                    <ul className="list-unstyled">
                      {project.points.map((point, i) => (
                        <li key={i} className="mb-2 d-flex">
                          <span className="me-2" style={{ color: project.color }}>•</span>
                          <span style={{ color: '#4b5563' }}>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;