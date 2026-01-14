import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Glowing line above name */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-8 max-w-md mx-auto"
        />

        {/* Name with animated reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-wider"
        >
          <span className="text-gradient neon-text">ARYAN</span>
        </motion.h1>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-6"
        >
          <span className="text-lg md:text-xl text-muted-foreground font-light tracking-[0.3em] uppercase">
            Front-end Developer
          </span>
          <span className="mx-3 text-primary">•</span>
          <span className="text-lg md:text-xl text-muted-foreground font-light tracking-[0.3em] uppercase">
            Creative Coder
          </span>
          <span className="mx-3 text-primary">•</span>
          <span className="text-lg md:text-xl text-muted-foreground font-light tracking-[0.3em] uppercase">
            Tech Enthusiast
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl text-foreground/80 mb-12 font-light"
        >
          Building{' '}
          <span className="text-primary font-medium">immersive</span> web experiences
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-primary/10 border border-primary/50 rounded-lg font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.5)] min-w-[180px]"
          >

            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            <span className="relative z-10 group-hover:text-primary-foreground">View Projects</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 glass-card rounded-lg font-medium text-foreground hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--neon-purple)/0.3)] min-w-[180px]"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-full animate-spin-slow opacity-30" />
      <div className="absolute bottom-20 right-20 w-24 h-24 border border-secondary/20 rounded-full animate-spin-slow opacity-30" style={{ animationDirection: 'reverse' }} />
    </section>
  );
};
