import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Sparkles, Zap } from 'lucide-react';

const techStack = [
  { name: 'HTML5', color: '#E34F26' },
  { name: 'CSS3', color: '#1572B6' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'Python', color: '#3178C6' },
  { name: 'C++', color: '#61DAFB' },
  { name: 'React.js', color: '#88CE02' },
  { name: 'Tailwind', color: '#06B6D4' },
  { name: 'UI/UX', color: '#61DAFB' },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">Get to know me</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-gradient">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/80 leading-relaxed">
              Hey! I'm <span className="text-primary font-semibold">Aryan</span>, a passionate front-end developer 
              with a love for creating stunning, interactive web experiences that push the boundaries of 
              what's possible in the browser.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I specialize in crafting <span className="text-secondary font-semibold">immersive animations</span>, 
              creative UIs, and performant web applications. Every line of code I write is aimed at 
              delivering experiences that are not just functional, but memorable.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              When I'm not coding, you'll find me exploring the latest in <span className="text-accent font-semibold">web technologies</span>, 
              experimenting with 3D graphics, or diving deep into the world of creative coding.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {[
                { icon: Code2, label: 'Clean Code', color: 'text-primary' },
                { icon: Palette, label: 'Creative UI', color: 'text-secondary' },
                { icon: Sparkles, label: 'Animations', color: 'text-accent' },
                { icon: Zap, label: 'Performance', color: 'text-neon-pink' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 glass-card p-4 rounded-lg glow-hover"
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-8 rounded-2xl relative overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
            
            <h3 className="font-display text-xl font-semibold mb-6 relative">Tech Stack</h3>
            <div className="grid grid-cols-4 gap-4 relative">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-300 cursor-pointer group"
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-xl font-bold transition-shadow duration-300 group-hover:shadow-[0_0_20px_var(--glow-color)]"
                    style={{ 
                      backgroundColor: `${tech.color}20`,
                      color: tech.color === '#000000' ? '#ffffff' : tech.color,
                      ['--glow-color' as string]: `${tech.color}60`
                    }}
                  >
                    {tech.name.charAt(0)}
                  </div>
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
