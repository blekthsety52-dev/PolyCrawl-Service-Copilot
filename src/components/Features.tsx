/**
 * @component Features
 * @description Grid display of key features for PolyCrawl-Service-Copilot.
 */

import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { APP_CONTENT } from "../constants/content";

export const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-brand-accent uppercase tracking-[0.3em] mb-4">Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">Engineered for Precision</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {APP_CONTENT.features.map((feature, index) => {
            const IconComponent = (Icons as any)[feature.icon];
            
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 glass rounded-2xl hover:border-brand-accent/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-black transition-all">
                  {IconComponent && <IconComponent size={24} />}
                </div>
                <div className="text-xs font-mono text-brand-accent/50 mb-2">{feature.id}</div>
                <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
                <p className="text-white/50 leading-relaxed font-light">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
