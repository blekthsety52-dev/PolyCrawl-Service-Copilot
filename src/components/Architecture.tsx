/**
 * @component Architecture
 * @description Section explaining the Hexagonal Architecture and performance metrics.
 */

import { motion } from "motion/react";
import { APP_CONTENT } from "../constants/content";
import { Layers, Activity } from "lucide-react";

export const Architecture = () => {
  const { architecture, performance } = APP_CONTENT;

  return (
    <section className="py-24 bg-brand-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-accent mb-6">
              <Layers size={20} />
              <span className="text-sm font-mono uppercase tracking-widest">System Design</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">{architecture.title}</h2>
            <p className="text-xl text-white/60 mb-10 leading-relaxed">
              {architecture.description}
            </p>
            
            <ul className="space-y-4">
              {architecture.points.map((point, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 text-white/80"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="glass p-10 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Activity size={120} />
              </div>
              
              <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                <Activity className="text-brand-accent" />
                {performance.title}
              </h3>

              <div className="space-y-8">
                {performance.metrics.map((metric, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm text-white/40 uppercase tracking-wider">{metric.label}</span>
                      <span className="text-2xl font-mono text-brand-accent">{metric.value}</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                        className="h-full bg-brand-accent/50"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
