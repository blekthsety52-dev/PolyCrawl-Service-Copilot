/**
 * @component CodeShowcase
 * @description Displays Go code snippets from the specification.
 */

import { motion } from "motion/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { APP_CONTENT } from "../constants/content";
import { Code2, Copy } from "lucide-react";

export const CodeShowcase = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-brand-accent uppercase tracking-[0.3em] mb-4">Implementation</h2>
          <h3 className="text-4xl font-display font-bold">Type-Safe Infrastructure Control</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {APP_CONTENT.codeSnippets.map((snippet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-white/10 bg-[#0d0d0d]"
            >
              <div className="px-6 py-4 bg-white/5 border-b border-white/10 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Code2 size={16} className="text-brand-accent" />
                  <span className="text-sm font-mono text-white/60">{snippet.title}</span>
                </div>
                <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                  <Copy size={14} className="text-white/40" />
                </button>
              </div>
              <div className="p-4 overflow-x-auto">
                <SyntaxHighlighter
                  language={snippet.language}
                  style={atomDark}
                  customStyle={{
                    background: "transparent",
                    padding: 0,
                    margin: 0,
                    fontSize: "13px",
                    lineHeight: "1.6",
                  }}
                >
                  {snippet.code}
                </SyntaxHighlighter>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
