/**
 * @component TemplateCard
 * @description A card representing a Replit template.
 */

import { motion } from "motion/react";
import { Play, User, Globe } from "lucide-react";

interface TemplateCardProps {
  template: {
    id: number;
    title: string;
    author: string;
    description: string;
    language: string;
    runs: string;
    tags: string[];
    color: string;
  };
}

export const TemplateCard = ({ template }: TemplateCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="replit-card group p-5 flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-4">
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg"
          style={{ backgroundColor: template.color }}
        >
          {template.language.charAt(0)}
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-2 bg-replit-accent rounded-full text-white hover:bg-replit-accent/90 transition-colors">
            <Play size={16} fill="currentColor" />
          </button>
        </div>
      </div>

      <h3 className="text-lg font-bold mb-1 group-hover:text-replit-accent transition-colors">
        {template.title}
      </h3>
      
      <div className="flex items-center gap-1.5 text-xs text-replit-text-dim mb-3">
        <User size={12} />
        <span>{template.author}</span>
        <span className="mx-1">•</span>
        <Globe size={12} />
        <span>{template.runs} runs</span>
      </div>

      <p className="text-sm text-replit-text-dim/80 line-clamp-2 mb-4 flex-grow">
        {template.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {template.tags.map((tag) => (
          <span 
            key={tag} 
            className="px-2 py-0.5 bg-replit-surface rounded text-[10px] font-medium text-replit-text-dim uppercase tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
