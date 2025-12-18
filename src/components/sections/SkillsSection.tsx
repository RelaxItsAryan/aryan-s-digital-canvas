import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'HTML5', level: 95, color: '#E34F26' },
  { name: 'CSS3', level: 92, color: '#1572B6' },
  { name: 'JavaScript', level: 90, color: '#F7DF1E' },
  { name: 'Python', level: 85, color: '#3178C6' },
  { name: 'C++', level: 88, color: '#61DAFB' },
  { name: 'Three.js / WebGL', level: 80, color: '#f3eaeaff' },
  { name: 'Godot Engine', level: 85, color: '#88CE02' },
  { name: 'Canva & Figma', level: 92, color: '#06B6D4' },
  { name: 'Git & Deployment', level: 88, color: '#F05032' },
  { name: 'UI/UX Design', level: 82, color: '#FF61F6' },
];

const orbitingSkills = [
  { name: 'HTML', angle: 0, color: '#E34F26' },
  { name: 'CSS', angle: 45, color: '#1572B6' },
  { name: 'JS', angle: 90, color: '#F7DF1E' },
  { name: 'React', angle: 135, color: '#61DAFB' },
  { name: 'TS', angle: 180, color: '#3178C6' },
  { name: '3D', angle: 225, color: '#00f0ff' },
  { name: 'GSAP', angle: 270, color: '#88CE02' },
  { name: 'Git', angle: 315, color: '#F05032' },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-32 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">What I Do</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-gradient">Skills</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Orbiting Skills Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            {/* Center circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full glass-card flex items-center justify-center z-10">
              <span className="font-display text-2xl font-bold text-gradient">WEB</span>
            </div>

            {/* Orbit rings */}
            <div className="absolute inset-8 border border-border/30 rounded-full animate-spin-slow" style={{ animationDuration: '30s' }} />
            <div className="absolute inset-16 border border-border/20 rounded-full animate-spin-slow" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
            <div className="absolute inset-24 border border-border/10 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }} />

            {/* Orbiting skills */}
            <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '40s' }}>
              {orbitingSkills.map((skill, i) => {
                const radius = 45; // percentage from center
                const x = 50 + radius * Math.cos((skill.angle * Math.PI) / 180);
                const y = 50 + radius * Math.sin((skill.angle * Math.PI) / 180);
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    className="absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full glass-card flex items-center justify-center text-xs font-bold animate-spin-slow"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      backgroundColor: `${skill.color}20`,
                      color: skill.color === '#000000' ? '#ffffff' : skill.color,
                      boxShadow: `0 0 20px ${skill.color}30`,
                      animationDirection: 'reverse',
                      animationDuration: '40s'
                    }}
                  >
                    {skill.name}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Progress Bars */}
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                className="group"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.05, ease: 'easeOut' }}
                    className="h-full rounded-full relative"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                      boxShadow: `0 0 10px ${skill.color}50`
                    }}
                  >
                    <div 
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                      style={{ 
                        backgroundColor: skill.color,
                        boxShadow: `0 0 10px ${skill.color}`
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
