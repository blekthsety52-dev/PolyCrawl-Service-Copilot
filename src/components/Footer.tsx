/**
 * @component Footer
 * @description Simple technical footer for the landing page.
 */

import { Terminal } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-accent rounded flex items-center justify-center">
              <Terminal size={18} className="text-black" />
            </div>
            <span className="font-display font-bold tracking-tight">PolyCrawl Copilot</span>
          </div>
          
          <div className="flex gap-8 text-sm text-white/40 font-mono">
            <a href="#" className="hover:text-brand-accent transition-colors">GitHub</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Documentation</a>
            <a href="#" className="hover:text-brand-accent transition-colors">MCP Protocol</a>
          </div>
          
          <div className="text-xs text-white/20 font-mono">
            © 2026 PolyCrawl Infrastructure. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
