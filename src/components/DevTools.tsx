/**
 * @component DevTools
 * @description Section showcasing the internal development utilities and instruments.
 */

import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { APP_CONTENT } from "../constants/content";

export const DevTools = () => {
  const { devTools } = (APP_CONTENT as any);

  if (!devTools) return null;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-mono text-brand-accent uppercase tracking-[0.4em] mb-4">Engineering Excellence</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">{devTools.title}</h3>
          <p className="text-xl text-white/50 font-light">
            {devTools.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {devTools.modules.map((module: any, i: number) => {
            const Icon = (Icons as any)[module.icon] || Icons.Wrench;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-10 glass rounded-3xl group hover:border-brand-accent/40 transition-all flex gap-8 items-start"
              >
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-black transition-all">
                  <Icon size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-4 group-hover:text-brand-accent transition-colors">{module.title}</h4>
                  <p className="text-white/40 leading-relaxed font-light text-lg">
                    {module.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
