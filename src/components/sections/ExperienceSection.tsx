import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Front-end Developer Intern',
    company: 'Cognifyz Technologies',
    period: 'Dec 2025 - Present',
    description: 'Building immersive web experiences with cutting-edge animations and 3D graphics. Specializing in interactive portfolios, creative websites, and WebGL applications.',
    skills: ['HTML', 'CSS', 'React', 'JavaScript', 'Website Building'],
    color: 'primary'
  },
  {
    title: 'Web Developer Intern',
    company: 'Abhyaz MTAB Technologies',
    period: 'OCT 2025 - DEC 2025',
    description: 'Developed multiple interactive web applications focusing on user experience and creative animations. Created unique particle systems and visual effects.',
    skills: ['Zoho Tools', 'UI/UX Design', 'Canva'],
    color: 'secondary'
  },
  {
    title: 'College Journey',
    company: 'Vellore Institute of Technology, Bhopal',
    period: '2025 - 2029',
    description: 'Currently pursuing a Bachelor\'s degree in Computer Science and Engineering with specialiazation in Artificial Intelligence and Machine Learning. Engaged in various projects and hackathons, honing my skills in web development and creative coding.',
    skills: ['Communication', 'Time Management', 'Team Work', 'Problem Solving'],
    color: 'accent'
  }
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-32 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
      
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">My Journey</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-gradient">Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary hidden lg:block z-10">
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
              </div>

              {/* Content card */}
              <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-card p-6 rounded-2xl glow-hover relative group"
                >
                  {/* Glow effect */}
                  <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r from-${exp.color}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-foreground">{exp.title}</h3>
                        <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                          <Briefcase className="w-4 h-4" />
                          <span className="text-sm">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-primary text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-foreground/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
