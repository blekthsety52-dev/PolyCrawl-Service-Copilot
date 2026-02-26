/**
 * @component App
 * @description Main application entry point composing the PolyCrawl-Service-Copilot landing page.
 */

import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Architecture } from "./components/Architecture";
import { CodeShowcase } from "./components/CodeShowcase";
import { Stack } from "./components/Stack";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-accent selection:text-black">
      <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand-accent rounded flex items-center justify-center">
              <span className="text-[10px] font-bold text-black">PC</span>
            </div>
            <span className="font-display font-bold tracking-tight">PolyCrawl</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-mono text-white/60">
            <a href="#" className="hover:text-white transition-colors">Features</a>
            <a href="#" className="hover:text-white transition-colors">Architecture</a>
            <a href="#" className="hover:text-white transition-colors">Code</a>
            <button className="px-4 py-1.5 bg-white text-black font-bold rounded hover:bg-brand-accent transition-colors">
              Install
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Features />
        <Architecture />
        <CodeShowcase />
        <Stack />
      </main>

      <Footer />
    </div>
  );
}
