/**
 * @component CategoryTabs
 * @description Horizontal tabs for filtering templates by category.
 */

import * as Icons from "lucide-react";
import { REPLIT_CONTENT } from "../constants/replit_content";

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (id: string) => void;
}

export const CategoryTabs = ({ activeCategory, onCategoryChange }: CategoryTabsProps) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide mb-8">
      {REPLIT_CONTENT.categories.map((category) => {
        const Icon = (Icons as any)[category.icon];
        const isActive = activeCategory === category.id;
        
        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all border ${
              isActive 
                ? "bg-replit-accent/10 border-replit-accent text-replit-accent" 
                : "bg-replit-sidebar border-replit-border text-replit-text-dim hover:border-replit-text-dim/50"
            }`}
          >
            {Icon && <Icon size={16} />}
            {category.name}
          </button>
        );
      })}
    </div>
  );
};
