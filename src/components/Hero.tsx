/**
 * @component Hero
 * @description High-impact landing section for PolyCrawl-Service-Copilot.
 */

import { motion } from "motion/react";
import { Terminal, ChevronRight } from "lucide-react";
import { APP_CONTENT } from "../constants/content";

export const Hero = () => {
  const { hero } = APP_CONTENT;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-8"
          >
            <Terminal size={14} className="text-brand-accent" />
            <span className="text-xs font-mono uppercase tracking-widest opacity-70">
              v1.0.0 Stable Release
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-6 leading-tight"
          >
            {hero.title.split(" ").map((word, i) => (
              <span key={i} className={word === "Copilot" ? "text-brand-accent" : ""}>
                {word}{" "}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/60 mb-10 max-w-2xl mx-auto font-light"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="px-8 py-4 bg-brand-accent text-black font-bold rounded-lg hover:bg-brand-accent/90 transition-all flex items-center gap-2 group">
              {hero.cta}
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 glass rounded-lg hover:bg-white/10 transition-all font-medium">
              {hero.secondaryCta}
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Image/Visual */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-gradient-to-t from-brand-bg to-transparent z-20 pointer-events-none"
      />
    </section>
  );
};
