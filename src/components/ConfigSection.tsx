/**
 * @component ConfigSection
 * @description Explains the Viper configuration and LLM factory strategy.
 */

import { motion } from "motion/react";
import { Settings, Shield, Cpu, Zap } from "lucide-react";
import { APP_CONTENT } from "../constants/content";

export const ConfigSection = () => {
  const { configStrategy } = (APP_CONTENT as any);

  if (!configStrategy) return null;

  const icons = [Shield, Cpu, Zap];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-brand-accent mb-6">
            <Settings size={20} />
            <span className="text-sm font-mono uppercase tracking-widest">Configuration Strategy</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">{configStrategy.title}</h2>
          <p className="text-xl text-white/60 leading-relaxed font-light">
            {configStrategy.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {configStrategy.benefits.map((benefit: any, i: number) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 glass rounded-2xl border-l-4 border-l-brand-accent"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center mb-6">
                  <Icon size={20} className="text-brand-accent" />
                </div>
                <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                <p className="text-white/50 font-light leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
