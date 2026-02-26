/**
 * @component MCPTools
 * @description Section highlighting the specialized MCP tools like get_k8s_context.
 */

import { motion } from "motion/react";
import { Box, Cloud, Activity, ArrowRight } from "lucide-react";
import { APP_CONTENT } from "../constants/content";

export const MCPTools = () => {
  const { mcpTools } = (APP_CONTENT as any);

  if (!mcpTools) return null;

  const icons = {
    Cloud: Cloud,
    Activity: Activity,
  };

  return (
    <section className="py-24 bg-brand-surface/30 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <div className="inline-flex items-center gap-2 text-brand-accent mb-6">
              <Box size={20} />
              <span className="text-sm font-mono uppercase tracking-widest">MCP Toolbox</span>
            </div>
            <h2 className="text-4xl font-display font-bold mb-6">{mcpTools.title}</h2>
            <p className="text-lg text-white/50 leading-relaxed font-light mb-8">
              {mcpTools.description}
            </p>
            <button className="text-brand-accent font-mono text-sm flex items-center gap-2 hover:gap-4 transition-all">
              EXPLORE ALL TOOLS <ArrowRight size={16} />
            </button>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {mcpTools.tools.map((tool: any, i: number) => {
              const Icon = (icons as any)[tool.icon] || Box;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 glass rounded-2xl group hover:bg-brand-accent/5 transition-all"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-mono text-white/40 uppercase tracking-tighter">
                      Native Go
                    </div>
                  </div>
                  <h4 className="text-xl font-mono font-bold mb-4 text-brand-accent">{tool.name}</h4>
                  <p className="text-white/40 text-sm leading-relaxed font-light">
                    {tool.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
