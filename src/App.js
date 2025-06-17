import React, { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, Code, GraduationCap, Briefcase } from 'lucide-react';

const App = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const titles = [
    "Software Developer",
    "Full Stack Developer", 
    "Cloud Engineer",
    "Problem Solver"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Cloud Native Health Monitor",
      description: "Developed health check API service using Node.js and MySQL with AWS infrastructure automation using Terraform and CI/CD pipelines",
      tech: ["Node.js", "MySQL", "AWS", "Terraform", "Jest", "CloudWatch"],
      github: "https://github.com/BHIMASAIKAUSHIK/AWS_webapp"
    },
    {
      title: "Game-On (Sports Event Management)",
      description: "Full-stack sports event management system with real-time booking using React.js, Node.js, and Socket.IO for WebSocket communication",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT"],
      github: "https://github.com/BHIMASAIKAUSHIK/Game-On"
    },
    {
      title: "Shop Savy (E-commerce Platform)",
      description: "E-commerce platform built with Java and JavaFX, featuring comprehensive controller architecture and secure authentication system",
      tech: ["Java", "JavaFX", "MySQL", "Authentication"],
      github: "https://github.com/BHIMASAIKAUSHIK/JAVA-Shop-savy"
    }
  ];

  const skills = [
    { category: "Programming Languages", items: ["Java", "Python", "JavaScript", "TypeScript", "C#", "HTML", "CSS"] },
    { category: "Web Development", items: ["Node.js", "Express.js", "React.js", "Redux", "Spring Boot"] },
    { category: "Cloud & Database", items: ["AWS", "GCP", "Terraform", "Packer", "MongoDB", "MySQL"] },
    { category: "Tools & Version Control", items: ["GitHub", "JIRA", "Jest", "Unity", "Socket.IO"] }
  ];

  const education = [
    {
      degree: "Master of Science, Software Engineering Systems",
      school: "Northeastern University, Boston, MA, USA",
      year: "Expected May 2026",
      description: "GPA: 3.55 | Coursework: Network structures and cloud computing, Web design and user experience, Program structure and algorithms"
    },
    {
      degree: "Bachelor of Technology, Computer Science and Engineering",
      school: "Vellore Institute of Technology, India",
      year: "June 2022",
      description: "GPA: 3.3 | Foundation in Computer Science and Engineering principles"
    }
  ];

  const experience = [
    {
      role: "Software Developer",
      company: "Kreedaloka, Bengaluru, India",
      period: "Sep 2022 – Jun 2024",
      bullets: [
        "Led team of 5 developers to integrate Pairing Engine using Java and Spring Boot, improving efficiency by 28%",
        "Built real-time pairing display using React.js and JavaScript with automated round generation and standings",
        "Created dynamic scroll view using Unity and C# replacing static dashboard for flexible leaderboard updates",
        "Processed 1000+ concurrent chess position evaluations by developing chess analysis system using Spring Boot and Stockfish integration",
        "Implemented hierarchical file management using Java increasing user activity usage by 26%"
      ],
      techStack: ["Java", "Spring Boot", "React.js", "JavaScript", "Unity", "C#", "MySQL"]
    },
    {
      role: "Junior Software Engineer",
      company: "Kreedaloka, Bengaluru, India",
      period: "Aug 2022 – Jul 2023",
      bullets: [
        "Created and deployed Chessera website using HTML, CSS, JavaScript, and Bootstrap",
        "Delivered persistent data management for ChessEra platform by developing Java JDBC database operations with MySQL for tournament, user, and chat data storage",
        "Designed diary feature using Unity, C#, and Java with in-app notes storage",
        "Resolved 40+ production bugs in tournament registration functionality, improving overall application stability"
      ],
      techStack: ["HTML", "CSS", "JavaScript", "Bootstrap", "Java", "JDBC", "MySQL", "Unity", "C#"]
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'black',
      color: 'white',
      overflowX: 'hidden',
      scrollBehavior: 'smooth'
    }}>
      <style jsx>{`
        * {
          scroll-behavior: smooth;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes matrix {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes particle-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }
        
        @keyframes code-rain {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.4; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25%); }
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-out;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out 0.3s both;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-matrix {
          animation: matrix 8s linear infinite;
        }
        
        .animate-particle-float {
          animation: particle-float 4s ease-in-out infinite;
        }
        
        .animate-code-rain {
          animation: code-rain 10s linear infinite;
        }
        
        /* Responsive Styles */
        .mobile-layout {
          display: flex;
        }
        
        .desktop-layout {
          display: none;
        }
        
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        
        .grid-3 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        
        .grid-4 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        
        .buttons-mobile {
          flex-direction: column;
        }
        
        .contact-buttons-mobile {
          flex-direction: column;
        }
        
        @media (min-width: 640px) {
          .buttons-mobile {
            flex-direction: row;
          }
          .contact-buttons-mobile {
            flex-direction: row;
          }
          .grid-4 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 768px) {
          .grid-2 {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
          .grid-3 {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
          .contact-buttons-mobile {
            gap: 32px;
          }
        }
        
        @media (min-width: 1024px) {
          .mobile-layout {
            display: none;
          }
          .desktop-layout {
            display: grid;
          }
          .grid-3 {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media (min-width: 1280px) {
          .grid-4 {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: '0',
          background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)'
        }}></div>
        
        {/* Floating Background Elements */}
        <div style={{
          position: 'absolute',
          inset: '0',
          pointerEvents: 'none',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '80px',
            left: '40px',
            width: '288px',
            height: '288px',
            background: 'rgba(147, 51, 234, 0.1)',
            borderRadius: '50%',
            filter: 'blur(48px)',
            animation: 'pulse 2s infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '80px',
            right: '40px',
            width: '384px',
            height: '384px',
            background: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '50%',
            filter: 'blur(48px)',
            animation: 'pulse 2s infinite',
            animationDelay: '2s'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '33.333%',
            width: '256px',
            height: '256px',
            background: 'rgba(236, 72, 153, 0.05)',
            borderRadius: '50%',
            filter: 'blur(32px)',
            animation: 'pulse 2s infinite',
            animationDelay: '4s'
          }}></div>
          
          {/* Individual skills rain */}
          {(() => {
            const skillsList = ["Java", "Python", "JavaScript", "React", "Node.js", "AWS", "MySQL", "Spring Boot", "Unity", "C#", "HTML", "CSS", "Express", "MongoDB", "Terraform", "TypeScript", "Redux", "Jest", "GCP", "JIRA", "Bootstrap", "Socket.IO"];
            return [...Array(10)].map((_, i) => (
              <div
                key={`skill-${i}`}
                className="animate-matrix"
                style={{
                  position: 'absolute',
                  color: 'rgba(96, 165, 250, 0.6)',
                  fontWeight: '600',
                  fontSize: '18px',
                  left: `${5 + (i * 9)}%`,
                  animationDelay: `${i * 1}s`,
                  animationDuration: `6s`
                }}
              >
                {skillsList[i]}
              </div>
            ));
          })()}
          
          {/* Floating code symbols */}
          {['{', '}', '<', '>', '/', '*', '+', '=', ';', '(', ')'].map((symbol, i) => (
            <div
              key={`symbol-${i}`}
              className="animate-particle-float"
              style={{
                position: 'absolute',
                color: 'rgba(96, 165, 250, 0.2)',
                fontFamily: 'monospace',
                fontSize: '18px',
                left: `${10 + (i * 8)}%`,
                top: `${20 + (i % 3) * 30}%`,
                animationDelay: `${i * 0.5}s`
              }}
            >
              {symbol}
            </div>
          ))}
          
          {/* Geometric shapes */}
          <div style={{
            position: 'absolute',
            top: '25%',
            right: '25%',
            width: '16px',
            height: '16px',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            transform: 'rotate(45deg)',
            animation: 'spin-slow 8s linear infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '33.333%',
            left: '20%',
            width: '24px',
            height: '24px',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '50%',
            animation: 'pulse 2s infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '66.666%',
            right: '33.333%',
            width: '20px',
            height: '20px',
            background: 'rgba(244, 114, 182, 0.2)',
            transform: 'rotate(45deg)',
            animation: 'bounce 2s infinite'
          }}></div>
        </div>

        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 16px',
          zIndex: 10,
          minHeight: '100vh'
        }}>
          {/* Mobile/Tablet Layout */}
          <div className="mobile-layout" style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            padding: '80px 0',
            gap: '48px'
          }}>
            {/* Photo First on Mobile */}
            <div className="animate-fadeInRight" style={{
              display: 'flex',
              justifyContent: 'center',
              order: 1
            }}>
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'relative',
                  width: '224px',
                  height: '224px'
                }}>
                  <div className="animate-spin-slow" style={{
                    position: 'absolute',
                    inset: '0',
                    background: 'linear-gradient(to right, #a855f7, #ec4899, #3b82f6)',
                    borderRadius: '50%'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    inset: '8px',
                    backgroundColor: 'black',
                    borderRadius: '50%'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    inset: '16px',
                    background: 'linear-gradient(135deg, #374151, #1f2937)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(to right, #a78bfa, #60a5fa)',
                        borderRadius: '50%',
                        margin: '0 auto 12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <span style={{
                          fontSize: '24px',
                          fontWeight: 'bold',
                          color: 'white'
                        }}>BK</span>
                      </div>
                      <p style={{
                        color: '#9ca3af',
                        fontSize: '14px'
                      }}>Add Your Photo</p>
                    </div>
                  </div>
                </div>
                <div className="animate-float" style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(to right, #3b82f6, #a855f7)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0.8
                }}>
                  <span style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '14px'
                  }}>⚡</span>
                </div>
                <div className="animate-float" style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: '-8px',
                  width: '32px',
                  height: '32px',
                  background: 'linear-gradient(to right, #10b981, #3b82f6)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animationDelay: '1s',
                  opacity: 0.8
                }}>
                  <span style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '10px'
                  }}>🚀</span>
                </div>
              </div>
            </div>

            {/* Text Content Below Photo on Mobile */}
            <div className="animate-fadeInLeft" style={{
              textAlign: 'center',
              order: 2,
              width: '100%',
              maxWidth: '512px',
              padding: '0 16px'
            }}>
              {/* Name */}
              <div style={{ marginBottom: '32px' }}>
                <h1 style={{
                  fontSize: '2.25rem',
                  fontWeight: 'bold',
                  lineHeight: 1.2,
                  marginBottom: '16px'
                }}>
                  <span style={{ color: 'white' }}>Hi, I'm</span><br/>
                  <span style={{
                    background: 'linear-gradient(to right, #a78bfa, #60a5fa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    Bhima Sai Kaushik
                  </span>
                </h1>
              </div>

              {/* Dynamic Text */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  marginBottom: '16px'
                }}>
                  <span style={{
                    fontSize: '1.5rem',
                    fontWeight: 300,
                    color: '#d1d5db'
                  }}>I'm a</span>
                </div>
                <div style={{
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <h2 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    background: 'linear-gradient(to right, #a78bfa, #f472b6, #60a5fa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    transition: 'all 1s'
                  }}>
                    {titles[currentTitle]}
                  </h2>
                </div>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '8px',
                  marginTop: '24px'
                }}>
                  {titles.map((_, index) => (
                    <div
                      key={index}
                      style={{
                        height: '4px',
                        borderRadius: '9999px',
                        transition: 'all 0.5s',
                        backgroundColor: index === currentTitle ? '#a78bfa' : '#4b5563',
                        width: index === currentTitle ? '32px' : '16px'
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="buttons-mobile" style={{
                display: 'flex',
                gap: '16px',
                justifyContent: 'center'
              }}>
                <a href="#contact" style={{
                  background: 'linear-gradient(to right, #a855f7, #3b82f6)',
                  padding: '12px 24px',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  color: 'white',
                  fontWeight: '600',
                  textAlign: 'center',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  border: 'none',
                  cursor: 'pointer'
                }}>
                  <Mail size={20} />
                  Get In Touch
                </a>
                <a href="#projects" style={{
                  border: '2px solid white',
                  padding: '12px 24px',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  color: 'white',
                  fontWeight: '600',
                  textAlign: 'center',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  backgroundColor: 'transparent',
                  cursor: 'pointer'
                }}>
                  <Code size={20} />
                  View Projects
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="desktop-layout" style={{
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center',
            minHeight: '100vh'
          }}>
            {/* Left Side - Split Vertically */}
            <div className="animate-fadeInLeft" style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%'
            }}>
              {/* Top Half - Static Name */}
              <div style={{
                flex: 1,
                display: 'flex',
                alignItems: 'end',
                justifyContent: 'start',
                paddingBottom: '32px'
              }}>
                <div style={{ textAlign: 'left' }}>
                  <h1 style={{
                    fontSize: '4rem',
                    fontWeight: 'bold',
                    lineHeight: 1.2
                  }}>
                    <span style={{ color: 'white' }}>Hi, I'm</span><br/>
                    <span style={{
                      background: 'linear-gradient(to right, #a78bfa, #60a5fa)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      Bhima Sai Kaushik
                    </span>
                  </h1>
                </div>
              </div>

              {/* Bottom Half - Dynamic Text */}
              <div style={{
                flex: 1,
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'start',
                paddingTop: '32px'
              }}>
                <div style={{ textAlign: 'left' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '16px'
                  }}>
                    <span style={{
                      fontSize: '2.25rem',
                      fontWeight: 300,
                      color: '#d1d5db'
                    }}>I'm a</span>
                  </div>
                  <div style={{
                    height: '80px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <h2 style={{
                      fontSize: '3rem',
                      fontWeight: 'bold',
                      background: 'linear-gradient(to right, #a78bfa, #f472b6, #60a5fa)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      transition: 'all 1s'
                    }}>
                      {titles[currentTitle]}
                    </h2>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    gap: '12px',
                    marginTop: '32px'
                  }}>
                    {titles.map((_, index) => (
                      <div
                        key={index}
                        style={{
                          height: '4px',
                          borderRadius: '9999px',
                          transition: 'all 0.5s',
                          backgroundColor: index === currentTitle ? '#a78bfa' : '#4b5563',
                          width: index === currentTitle ? '48px' : '24px'
                        }}
                      />
                    ))}
                  </div>

                  <div style={{
                    display: 'flex',
                    gap: '16px',
                    marginTop: '48px'
                  }}>
                    <a href="#contact" style={{
                      background: 'linear-gradient(to right, #a855f7, #3b82f6)',
                      padding: '16px 32px',
                      borderRadius: '9999px',
                      textDecoration: 'none',
                      color: 'white',
                      fontWeight: '600',
                      textAlign: 'center',
                      boxShadow: '0 10px 15px -3px rgba(168, 85, 247, 0.25)',
                      transition: 'transform 0.3s',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      border: 'none',
                      cursor: 'pointer'
                    }}>
                      <Mail size={20} />
                      Get In Touch
                    </a>
                    <a href="#projects" style={{
                      border: '2px solid white',
                      padding: '16px 32px',
                      borderRadius: '9999px',
                      textDecoration: 'none',
                      color: 'white',
                      fontWeight: '600',
                      textAlign: 'center',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.3s',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      backgroundColor: 'transparent',
                      cursor: 'pointer'
                    }}>
                      <Code size={20} />
                      View Projects
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Photo Only */}
            <div className="animate-fadeInRight" style={{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'relative',
                  width: '320px',
                  height: '320px'
                }}>
                  <div className="animate-spin-slow" style={{
                    position: 'absolute',
                    inset: '0',
                    background: 'linear-gradient(to right, #a855f7, #ec4899, #3b82f6)',
                    borderRadius: '50%'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    inset: '8px',
                    backgroundColor: 'black',
                    borderRadius: '50%'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    inset: '16px',
                    background: 'linear-gradient(135deg, #374151, #1f2937)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: '128px',
                        height: '128px',
                        background: 'linear-gradient(to right, #a78bfa, #60a5fa)',
                        borderRadius: '50%',
                        margin: '0 auto 16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <span style={{
                          fontSize: '3rem',
                          fontWeight: 'bold',
                          color: 'white'
                        }}>BK</span>
                      </div>
                      <p style={{
                        color: '#9ca3af',
                        fontSize: '18px'
                      }}>Add Your Photo</p>
                    </div>
                  </div>
                </div>

                <div className="animate-float" style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '-12px',
                  width: '64px',
                  height: '64px',
                  background: 'linear-gradient(to right, #3b82f6, #a855f7)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0.8
                }}>
                  <span style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '24px'
                  }}>⚡</span>
                </div>
                <div className="animate-float" style={{
                  position: 'absolute',
                  bottom: '-12px',
                  left: '-12px',
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(to right, #10b981, #3b82f6)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animationDelay: '1s',
                  opacity: 0.8
                }}>
                  <span style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '18px'
                  }}>🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite'
        }}>
          <div style={{
            width: '24px',
            height: '40px',
            border: '2px solid white',
            borderRadius: '9999px',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '4px',
              height: '12px',
              backgroundColor: 'white',
              borderRadius: '9999px',
              marginTop: '8px',
              animation: 'pulse 2s infinite'
            }}></div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" style={{ padding: '64px 16px' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '64px',
            transition: 'all 1s',
            opacity: isVisible.education ? 1 : 0,
            transform: isVisible.education ? 'translateY(0)' : 'translateY(40px)'
          }}>
            <GraduationCap style={{
              width: '48px',
              height: '48px',
              margin: '0 auto 16px',
              color: '#a78bfa'
            }} />
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '16px',
              background: 'linear-gradient(to right, #a78bfa, #60a5fa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Education
            </h2>
          </div>
          <div className="grid-2" style={{
            display: 'grid',
            gap: '24px'
          }}>
            {education.map((edu, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#1f2937',
                  padding: '32px',
                  borderRadius: '16px',
                  border: '1px solid #374151',
                  transition: 'all 0.5s',
                  opacity: isVisible.education ? 1 : 0,
                  transform: isVisible.education ? 'translateY(0)' : 'translateY(40px)',
                  transitionDelay: `${index * 200}ms`
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#a855f7';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#374151';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '8px'
                }}>{edu.degree}</h3>
                <p style={{
                  color: '#a78bfa',
                  fontSize: '1.125rem',
                  marginBottom: '8px'
                }}>{edu.school}</p>
                <p style={{
                  color: '#9ca3af',
                  marginBottom: '16px',
                  fontSize: '14px'
                }}>{edu.year}</p>
                <p style={{
                  color: '#d1d5db',
                  fontSize: '14px'
                }}>{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{
        padding: '64px 16px',
        backgroundColor: 'rgba(17, 24, 39, 0.5)'
      }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '64px',
            transition: 'all 1s',
            opacity: isVisible.experience ? 1 : 0,
            transform: isVisible.experience ? 'translateY(0)' : 'translateY(40px)'
          }}>
            <Briefcase style={{
              width: '48px',
              height: '48px',
              margin: '0 auto 16px',
              color: '#60a5fa'
            }} />
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '16px',
              background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Experience
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {experience.map((exp, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'black',
                  padding: '32px',
                  borderRadius: '16px',
                  border: '1px solid #374151',
                  transition: 'all 0.5s',
                  opacity: isVisible.experience ? 1 : 0,
                  transform: isVisible.experience ? 'translateY(0)' : 'translateX(40px)',
                  transitionDelay: `${index * 200}ms`
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#3b82f6';
                  e.target.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#374151';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginBottom: '16px'
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      color: 'white',
                      marginBottom: '8px'
                    }}>{exp.role}</h3>
                    <p style={{
                      color: '#60a5fa',
                      fontSize: '1.125rem'
                    }}>{exp.company}</p>
                  </div>
                  <span style={{
                    color: '#9ca3af',
                    fontSize: '14px',
                    marginTop: '8px'
                  }}>{exp.period}</span>
                </div>
                <ul style={{
                  color: '#d1d5db',
                  fontSize: '14px',
                  lineHeight: 1.6,
                  paddingLeft: '20px',
                  marginBottom: '24px'
                }}>
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} style={{ marginBottom: '8px' }}>{bullet}</li>
                  ))}
                </ul>
                
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}>
                  {exp.techStack && exp.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      style={{
                        background: 'linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))',
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                        padding: '6px 16px',
                        borderRadius: '9999px',
                        fontSize: '12px',
                        fontWeight: 500,
                        transition: 'transform 0.3s'
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ padding: '64px 16px' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '64px',
            transition: 'all 1s',
            opacity: isVisible.skills ? 1 : 0,
            transform: isVisible.skills ? 'translateY(0)' : 'translateY(40px)'
          }}>
            <Code style={{
              width: '48px',
              height: '48px',
              margin: '0 auto 16px',
              color: '#10b981'
            }} />
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '16px',
              background: 'linear-gradient(to right, #10b981, #60a5fa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Skills
            </h2>
          </div>
          <div className="grid-4" style={{
            display: 'grid',
            gap: '24px'
          }}>
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#1f2937',
                  padding: '32px',
                  borderRadius: '16px',
                  border: '1px solid #374151',
                  transition: 'all 0.5s',
                  opacity: isVisible.skills ? 1 : 0,
                  transform: isVisible.skills ? 'translateY(0)' : 'translateY(40px)',
                  transitionDelay: `${index * 200}ms`
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#10b981';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#374151';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '24px',
                  textAlign: 'center'
                }}>{skillGroup.category}</h3>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}>
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      style={{
                        background: 'linear-gradient(to right, rgba(16, 185, 129, 0.2), rgba(59, 130, 246, 0.2))',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        padding: '6px 16px',
                        borderRadius: '9999px',
                        fontSize: '12px',
                        fontWeight: 500,
                        transition: 'transform 0.3s'
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{
        padding: '64px 16px',
        backgroundColor: 'rgba(17, 24, 39, 0.5)'
      }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '64px',
            transition: 'all 1s',
            opacity: isVisible.projects ? 1 : 0,
            transform: isVisible.projects ? 'translateY(0)' : 'translateY(40px)'
          }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '16px',
              background: 'linear-gradient(to right, #f472b6, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Projects
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#d1d5db'
            }}>Check out some of my recent work</p>
          </div>
          <div className="grid-3" style={{
            display: 'grid',
            gap: '24px'
          }}>
            {projects.map((project, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'black',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #374151',
                  transition: 'all 0.5s',
                  opacity: isVisible.projects ? 1 : 0,
                  transform: isVisible.projects ? 'translateY(0)' : 'translateY(40px)',
                  transitionDelay: `${index * 200}ms`
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#ec4899';
                  e.target.style.transform = 'scale(1.05)';
                  const title = e.target.querySelector('.project-title');
                  if (title) title.style.color = '#f472b6';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#374151';
                  e.target.style.transform = 'scale(1)';
                  const title = e.target.querySelector('.project-title');
                  if (title) title.style.color = 'white';
                }}
              >
                <div style={{ padding: '20px 24px' }}>
                  <h3 className="project-title" style={{
                    fontSize: '1.125rem',
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: '12px',
                    transition: 'color 0.3s'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    color: '#d1d5db',
                    marginBottom: '16px',
                    fontSize: '14px',
                    lineHeight: 1.6
                  }}>{project.description}</p>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '20px'
                  }}>
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        style={{
                          background: 'rgba(236, 72, 153, 0.2)',
                          border: '1px solid rgba(236, 72, 153, 0.3)',
                          padding: '4px 8px',
                          borderRadius: '9999px',
                          fontSize: '12px'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <a
                      href={project.github}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'linear-gradient(to right, #374151, #1f2937)',
                        padding: '12px 24px',
                        borderRadius: '9999px',
                        textDecoration: 'none',
                        color: 'white',
                        fontWeight: '600',
                        transition: 'transform 0.3s',
                        justifyContent: 'center'
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    >
                      <Github size={20} />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '64px 16px' }}>
        <div style={{
          maxWidth: '896px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '32px',
            background: 'linear-gradient(to right, #a78bfa, #f472b6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Let's Connect
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#d1d5db',
            marginBottom: '48px',
            padding: '0 16px'
          }}>
            I'm always open to discussing new opportunities and interesting projects
          </p>
          <div className="contact-buttons-mobile" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            padding: '0 16px'
          }}>
            <a
              href="mailto:bhima.s@northeastern.edu"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                background: 'linear-gradient(to right, #a855f7, #ec4899)',
                padding: '12px 24px',
                borderRadius: '9999px',
                textDecoration: 'none',
                color: 'white',
                fontWeight: '600',
                transition: 'transform 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              <Mail size={24} />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/kaushik-sai-bhima-864497230/"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                border: '2px solid white',
                padding: '12px 24px',
                borderRadius: '9999px',
                textDecoration: 'none',
                color: 'white',
                fontWeight: '600',
                transition: 'all 0.3s',
                backgroundColor: 'transparent'
              }}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = 'black';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'white';
              }}
            >
              <Linkedin size={24} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '24px 16px',
        borderTop: '1px solid #374151'
      }}>
        <div style={{
          maxWidth: '1152px',
          margin: '0 auto',
          textAlign: 'center',
          color: '#9ca3af'
        }}>
          <p style={{ fontSize: '14px' }}>Built with React and lots of ☕</p>
        </div>
      </footer>
    </div>
  );
};

export default App;