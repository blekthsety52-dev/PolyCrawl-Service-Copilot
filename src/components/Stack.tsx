/**
 * @component Stack
 * @description Displays the recommended libraries and tools.
 */

import { APP_CONTENT } from "../constants/content";
import { Package } from "lucide-react";

export const Stack = () => {
  return (
    <section className="py-24 bg-brand-surface/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-md">
            <h2 className="text-3xl font-display font-bold mb-4">The Recommended Stack</h2>
            <p className="text-white/50 font-light">
              Built on battle-tested Go libraries for CLI excellence, Kubernetes interaction, and high-performance JSON-RPC handling.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center md:justify-end">
            {APP_CONTENT.stack.map((lib, i) => (
              <div 
                key={i}
                className="px-4 py-2 glass rounded-full text-sm font-mono text-white/70 flex items-center gap-2 hover:border-brand-accent/50 transition-colors cursor-default"
              >
                <Package size={14} className="text-brand-accent" />
                {lib.split("/").pop()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
