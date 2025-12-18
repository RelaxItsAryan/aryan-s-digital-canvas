import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Music, FileText, Users, Sparkles, Type } from 'lucide-react';

const projects = [
  {
    title: 'AryanBeats',
    description: 'A music-themed interactive website with stunning audio visualizations and immersive animations.',
    icon: Music,
    color: '#00f0ff',
    tags: ['HTML', 'CSS', 'UI', 'Animations'],
    link: 'https://aryanbeats.netlify.app/',
    github: 'https://github.com/RelaxItsAryan/Alan-Walker-Music-Player.git'
  },
  {
    title: 'OpenNotes Hub',
    description: 'A collaborative notes sharing platform for students and professionals to share knowledge.',
    icon: FileText,
    color: '#a855f7',
    tags: ['HTML', 'CSS', 'Javascript'],
    link: 'https://opennotes-hub.netlify.app/',
    github: 'https://github.com/RelaxItsAryan/Open-Notes-Hub.git'
  },
  {
    title: 'Interview Buddy',
    description: 'An AI-powered interview preparation tool with practice questions and feedback.',
    icon: Users,
    color: '#3b82f6',
    tags: ['HTML/CSS', 'AI/ML', 'JavaScript'],
    link: 'https://interview-buddy.netlify.app/',
    github: 'https://github.com/RelaxItsAryan/Interview-Prep-Buddy.git'
  },
  {
    title: 'AryanVerse Particles',
    description: 'Interactive particle animation showcase with hand gesture effects and customizable parameters.',
    icon: Sparkles,
    color: '#f43f5e',
    tags: ['Three.js', 'WebGL', 'JavaScript'],
    link: 'https://aryanverseparticles.netlify.app/',
    github: 'https://github.com/RelaxItsAryan/Particle-Controller.git'
  },
  {
    title: 'Aryan Name Particles',
    description: 'Custom particle-based text animation that morphs your name into stunning visual effects.',
    icon: Type,
    color: '#22c55e',
    tags: ['HTML/CSS','three.js', 'JavaScript', 'Particles'],
    link: 'https://aryan-name-particles.netlify.app/',
    github: 'https://github.com/RelaxItsAryan/Particle-Text-Morphing.git'
  }
];

const ProjectCard = ({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left - rect.width / 2) / 20,
      y: (e.clientY - rect.top - rect.height / 2) / 20
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg) scale(1.02)`
          : 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)',
        transition: 'transform 0.2s ease-out'
      }}
      className="group relative"
    >
      <div className="glass-card p-6 rounded-2xl h-full relative overflow-hidden">
        {/* Glow effect on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
          style={{
            background: `radial-gradient(circle at ${mousePos.x * 10 + 50}% ${mousePos.y * 10 + 50}%, ${project.color}20, transparent 50%)`
          }}
        />
        
        {/* Border glow */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            boxShadow: `0 0 30px ${project.color}30, inset 0 0 30px ${project.color}10`
          }}
        />

        <div className="relative z-10">
          {/* Icon */}
          <div 
            className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
            style={{ 
              backgroundColor: `${project.color}20`,
              boxShadow: isHovered ? `0 0 30px ${project.color}40` : 'none'
            }}
          >
            <project.icon className="w-7 h-7" style={{ color: project.color }} />
          </div>

          {/* Title */}
          <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-md bg-muted/80 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            <a
              href={project.link}
              className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
            <a
              href={project.github}
              className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">My Work</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-gradient">Projects</h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            A collection of creative web experiences I've built with passion and precision.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};
