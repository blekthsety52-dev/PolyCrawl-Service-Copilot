/**
 * @component App
 * @description Main application entry point for the Replit Templates Gallery replica.
 */

import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import { CategoryTabs } from "./components/CategoryTabs";
import { TemplateCard } from "./components/TemplateCard";
import { REPLIT_CONTENT } from "./constants/replit_content";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTemplates = activeCategory === "all" 
    ? REPLIT_CONTENT.templates 
    : REPLIT_CONTENT.templates.filter(t => t.category === activeCategory);

  return (
    <div className="flex min-h-screen bg-replit-bg text-replit-text selection:bg-replit-accent selection:text-white">
      <Sidebar />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar />
        
        <main className="flex-1 p-6 md:p-10 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <header className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Templates</h1>
              <p className="text-lg text-replit-text-dim max-w-2xl font-light">
                Start your next project with a pre-configured environment. Choose from over 100+ languages and frameworks.
              </p>
            </header>

            <CategoryTabs 
              activeCategory={activeCategory} 
              onCategoryChange={setActiveCategory} 
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredTemplates.map((template) => (
                  <motion.div
                    key={template.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <TemplateCard template={template} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredTemplates.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 text-replit-text-dim">
                <p className="text-lg font-medium">No templates found in this category.</p>
                <button 
                  onClick={() => setActiveCategory("all")}
                  className="mt-4 text-replit-accent hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
