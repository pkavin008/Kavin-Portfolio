import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaServer, FaTools } from 'react-icons/fa';

const skillGroups = [
  {
    title: 'Frontend',
    icon: <FaReact style={{ color: '#6366f1' }} />,
    skills: [
      { name: 'HTML5', level: 90, color: '#ff6584' },
      { name: 'CSS3', level: 85, color: '#00c9a7' },
      { name: 'JavaScript (ES6+)', level: 80, color: '#ff9e3d' },
      { name: 'React', level: 75, color: '#6366f1' },
    ],
  },
  {
    title: 'Backend & APIs',
    icon: <FaServer style={{ color: '#00c9a7' }} />,
    skills: [
      { name: 'Spring Boot', level: 70, color: '#00c9a7' },
      { name: 'Core Java', level: 75, color: '#ff6584' },
      { name: 'SQL', level: 80, color: '#6366f1' },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: <FaTools style={{ color: '#ff9e3d' }} />,
    skills: [
      { name: 'Git & GitHub', level: 85, color: '#ff9e3d' },
      { name: 'Postman', level: 80, color: '#6366f1' },
      { name: 'Maven', level: 70, color: '#00c9a7' },
    ],
  },
];

const Skill = () => (
  <section id="skills" className="section" style={{
    background: 'linear-gradient(135deg, rgba(255,245,250,0.8) 0%, rgba(245,255,255,0.8) 100%)'
  }}>
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center fw-bold mb-5 display-5">
          My <span style={{
            background: 'linear-gradient(90deg, #6366f1, #ff6584)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>Technical Skills</span>
        </h2>
        
        <div className="card border-0 overflow-hidden mt-3 mb-5" style={{
          background: 'rgba(255, 255, 255, 0.95)',
          boxShadow: '0 10px 30px rgba(99, 102, 241, 0.1)',
          borderRadius: '15px'
        }}>
          <div className="card-body p-4 p-lg-5">
            <div className="row g-4">
              {skillGroups.map((group, idx) => (
                <motion.div
                  key={idx}
                  className="col-md-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                >
                  <div className="h-100 p-3">
                    <div className="d-flex align-items-center mb-4">
                      <div className="p-2 rounded-circle me-3" style={{
                        background: `${group.icon.props.color}20`
                      }}>
                        {group.icon}
                      </div>
                      <h4 className="mb-0 fw-bold" style={{ color: group.icon.props.color }}>
                        {group.title}
                      </h4>
                    </div>
                    
                    <div className="skill-list">
                      {group.skills.map((skill, i) => (
                        <div key={i} className="mb-3">
                          <div className="d-flex justify-content-between mb-1">
                            <span className="fw-medium" style={{ color: skill.color }}>
                              {skill.name}
                            </span>
                            <span className="text-muted">{skill.level}%</span>
                          </div>
                          <div className="progress" style={{ height: '8px', borderRadius: '4px' }}>
                            <motion.div
                              className="progress-bar"
                              style={{ 
                                background: skill.color,
                                borderRadius: '4px'
                              }}
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ 
                                delay: idx * 0.15 + i * 0.1, 
                                duration: 0.8,
                                type: 'spring'
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Skill;