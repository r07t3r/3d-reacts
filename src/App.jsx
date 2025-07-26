// App.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Palette, Zap, Sparkles, ChevronDown, Info, Code, Layers, Rocket } from 'lucide-react';
import './App.css';

// Dual-mode color system implementation
const useTheme = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(mediaQuery.matches);
    
    const handler = (e) => setDarkMode(e.matches);
    mediaQuery.addEventListener('change', handler);
    
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Dual-mode color system
  const colors = {
    primary: darkMode ? '#ADBFFF' : '#4A6CF7',
    secondary: darkMode ? '#FFCEA3' : '#F7A14A',
    accent: darkMode ? '#E7BFFF' : '#D14AF7',
    background: darkMode ? '#1A1A1A' : '#FFFFFF',
    'background-alt': darkMode ? '#2A2C33' : '#F0F2F5',
    text: darkMode ? '#E0E0E0' : '#333333',
    'text-muted': darkMode ? '#A0A0A0' : '#666666',
    success: darkMode ? '#A0E7A0' : '#00C853',
    warning: darkMode ? '#FFF9B0' : '#FFD600',
    error: darkMode ? '#FFB3B3' : '#FF1744'
  };

  return { darkMode, setDarkMode, colors };
};

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description, delay, theme }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -10 }}
    className="feature-card"
    style={{ 
      backgroundColor: theme['background-alt'],
      border: `1px solid ${theme['background-alt']}`
    }}
  >
    <div 
      className="feature-icon"
      style={{ 
        background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
        color: theme.background
      }}
    >
      <Icon size={24} />
    </div>
    <h3 
      className="feature-title"
      style={{ color: theme.text }}
    >
      {title}
    </h3>
    <p 
      className="feature-description"
      style={{ color: theme['text-muted'] }}
    >
      {description}
    </p>
  </motion.div>
);

// Pipeline Step Component
const PipelineStep = ({ number, title, description, active, theme }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="pipeline-step"
  >
    <div className="pipeline-number" style={{ 
      backgroundColor: active ? theme.primary : theme['background-alt'],
      color: active ? theme.background : theme.text
    }}>
      {number}
    </div>
    <div className="pipeline-content">
      <h3 
        className="pipeline-title"
        style={{ color: theme.text }}
      >
        {title}
      </h3>
      <p 
        className="pipeline-description"
        style={{ color: theme['text-muted'] }}
      >
        {description}
      </p>
    </div>
  </motion.div>
);

// Color Palette Component
const ColorPalette = ({ colors }) => (
  <div className="color-palette">
    <div className="color-group">
      <div className="color-item">
        <div 
          className="color-swatch primary"
          style={{ backgroundColor: colors.primary }}
        ></div>
        <div className="color-info">
          <span className="color-name">Primary</span>
          <span className="color-value">{colors.primary}</span>
        </div>
      </div>
      
      <div className="color-item">
        <div 
          className="color-swatch secondary"
          style={{ backgroundColor: colors.secondary }}
        ></div>
        <div className="color-info">
          <span className="color-name">Secondary</span>
          <span className="color-value">{colors.secondary}</span>
        </div>
      </div>
      
      <div className="color-item">
        <div 
          className="color-swatch accent"
          style={{ backgroundColor: colors.accent }}
        ></div>
        <div className="color-info">
          <span className="color-name">Accent</span>
          <span className="color-value">{colors.accent}</span>
        </div>
      </div>
    </div>
    
    <div className="color-group">
      <div className="color-item">
        <div 
          className="color-swatch background"
          style={{ backgroundColor: colors.background }}
        ></div>
        <div className="color-info">
          <span className="color-name">Background</span>
          <span className="color-value">{colors.background}</span>
        </div>
      </div>
      
      <div className="color-item">
        <div 
          className="color-swatch neutral"
          style={{ backgroundColor: colors['background-alt'] }}
        ></div>
        <div className="color-info">
          <span className="color-name">Neutral</span>
          <span className="color-value">{colors['background-alt']}</span>
        </div>
      </div>
    </div>
  </div>
);

// App Component
function App() {
  const { darkMode, setDarkMode, colors } = useTheme();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div 
      className={`app ${darkMode ? 'dark' : ''}`}
      style={{ 
        backgroundColor: colors.background,
        color: colors.text
      }}
    >
      {/* Header */}
      <header className="app-header">
        <div className="container">
          <div className="header-content">
            <motion.div 
              className="logo-container"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div 
                className="logo"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                  color: colors.background
                }}
              >
                <Palette size={20} />
              </div>
              <h1>Dual-Mode System</h1>
            </motion.div>
            
            <motion.button
              className="dark-mode-toggle"
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ 
                backgroundColor: colors['background-alt'],
                color: colors.text,
                border: `1px solid ${colors['background-alt']}`
              }}
            >
              {darkMode ? <Zap size={20} /> : <Sparkles size={20} />}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <motion.div 
              className="hero-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                style={{ 
                  background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                The Art of <span>Dual-Mode</span> Design
              </motion.h1>
              
              <motion.p 
                className="hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                style={{ color: colors['text-muted'] }}
              >
                Experience a revolutionary approach to digital design where one palette seamlessly transforms between light and dark modes while maintaining visual harmony.
              </motion.p>
              
              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <button 
                  className="btn primary"
                  style={{ 
                    background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
                    color: colors.background
                  }}
                >
                  <Rocket size={18} />
                  Explore Experience
                </button>
                
                <button 
                  className="btn secondary"
                  style={{ 
                    backgroundColor: 'transparent',
                    color: colors.text,
                    border: `2px solid ${colors['background-alt']}`
                  }}
                >
                  <Code size={18} />
                  View Implementation
                </button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="visual-placeholder">
                <div className="cube">
                  <div className="face front"></div>
                  <div className="face back"></div>
                  <div className="face right"></div>
                  <div className="face left"></div>
                  <div className="face top"></div>
                  <div className="face bottom"></div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            style={{ color: colors['text-muted'] }}
          >
            <ChevronDown size={32} className="bounce" />
          </motion.div>
        </div>
      </section>

      {/* Color System Section */}
      <section className="color-system" style={{ backgroundColor: colors['background-alt'] }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2 className="section-title">Dual-Mode Color System</h2>
            <p className="section-subtitle" style={{ color: colors['text-muted'] }}>
              One unified palette that inverts brightness while preserving hue and saturation
            </p>
          </motion.div>
          
          <ColorPalette colors={colors} />
        </div>
      </section>

      {/* 3D Pipeline Section */}
      <section className="pipeline">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2 className="section-title">3D Interactive Statue Pipeline</h2>
            <p className="section-subtitle" style={{ color: colors['text-muted'] }}>
              From high-resolution sculpt to interactive experience
            </p>
          </motion.div>
          
          <div className="pipeline-steps">
            <PipelineStep
              number="1"
              title="High-Res Sculpting"
              description="Starting with detailed digital sculpting in industry-standard tools, we create intricate models with millions of polygons to capture every nuance and detail."
              active={true}
              theme={colors}
            />
            
            <PipelineStep
              number="2"
              title="Mesh Optimization"
              description="We optimize the high-poly model into a clean, efficient topology suitable for real-time rendering while preserving the artistic details."
              active={false}
              theme={colors}
            />
            
            <PipelineStep
              number="3"
              title="PBR Texturing"
              description="Using advanced texturing techniques, we create physically-based rendering materials that respond realistically to lighting conditions."
              active={false}
              theme={colors}
            />
            
            <PipelineStep
              number="4"
              title="Dynamic Lighting"
              description="We implement advanced lighting techniques including global illumination, reflections, and shadows to bring the statue to life in any environment."
              active={false}
              theme={colors}
            />
            
            <PipelineStep
              number="5"
              title="Interactive Experience"
              description="Finally, we add interactive elements like orbit controls, hover effects, and responsive design to create an engaging user experience."
              active={false}
              theme={colors}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" style={{ backgroundColor: colors['background-alt'] }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2 className="section-title">Micro-UX Flourishes</h2>
            <p className="section-subtitle" style={{ color: colors['text-muted'] }}>
              Thoughtful interactions that enhance the user experience
            </p>
          </motion.div>
          
          <div className="features-grid">
            <FeatureCard 
              icon={Info}
              title="Scroll-Triggered Animations"
              description="Elements fade in smoothly as you scroll through the page, creating a natural and engaging flow."
              delay={0.1}
              theme={colors}
            />
            
            <FeatureCard 
              icon={Zap}
              title="Tilt Parallax"
              description="Interactive elements respond to mouse movement with subtle parallax effects for added depth."
              delay={0.2}
              theme={colors}
            />
            
            <FeatureCard 
              icon={Palette}
              title="Seamless Dark Mode"
              description="A carefully crafted dual-mode color system that preserves visual harmony across light and dark themes."
              delay={0.3}
              theme={colors}
            />
            
            <FeatureCard 
              icon={Sparkles}
              title="Smooth Transitions"
              description="Thoughtful easing functions create fluid animations between states and interactions."
              delay={0.4}
              theme={colors}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" style={{ backgroundColor: colors['background-alt'] }}>
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <div className="footer-logo">
                <Palette size={24} style={{ color: colors.primary }} />
                <span>Dual-Mode System</span>
              </div>
              <p className="footer-text" style={{ color: colors['text-muted'] }}>
                A showcase of advanced React development with Framer Motion
              </p>
            </div>
            
            <div className="footer-links">
              <a href="#" className="footer-link" style={{ color: colors['text-muted'] }}>Documentation</a>
              <a href="#" className="footer-link" style={{ color: colors['text-muted'] }}>GitHub</a>
              <a href="#" className="footer-link" style={{ color: colors['text-muted'] }}>License</a>
            </div>
          </div>
          
          <div className="footer-bottom" style={{ borderTop: `1px solid ${colors['background-alt']}`, color: colors['text-muted'] }}>
            <p>&copy; {new Date().getFullYear()} Dual-Mode System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;