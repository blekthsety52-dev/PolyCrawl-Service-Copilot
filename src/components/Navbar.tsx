/**
 * @component Navbar
 * @description Top navigation bar for the Replit Templates Gallery.
 */

import { Search, Bell, Plus, User } from "lucide-react";

export const Navbar = () => {
  return (
    <header className="h-16 border-b border-replit-border flex items-center justify-between px-6 sticky top-0 bg-replit-bg z-30">
      <div className="flex-1 max-w-2xl relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-replit-text-dim" size={18} />
        <input 
          type="text" 
          placeholder="Search templates, languages, and more..." 
          className="w-full replit-input pl-10 h-10 text-sm"
        />
      </div>

      <div className="flex items-center gap-4 ml-4">
        <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-replit-accent text-white rounded-lg font-bold text-sm hover:bg-replit-accent/90 transition-colors">
          <Plus size={18} />
          Create Repl
        </button>
        <button className="p-2 text-replit-text-dim hover:text-replit-text transition-colors">
          <Bell size={20} />
        </button>
        <div className="w-8 h-8 rounded-full bg-replit-surface border border-replit-border flex items-center justify-center cursor-pointer overflow-hidden">
          <User size={20} className="text-replit-text-dim" />
        </div>
      </div>
    </header>
  );
};
