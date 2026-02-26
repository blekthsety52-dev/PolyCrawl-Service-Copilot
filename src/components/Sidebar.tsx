/**
 * @component Sidebar
 * @description Sidebar navigation for the Replit Templates Gallery.
 */

import * as Icons from "lucide-react";
import { REPLIT_CONTENT } from "../constants/replit_content";

export const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-replit-border h-screen sticky top-0 hidden lg:flex flex-col p-4 bg-replit-bg">
      <div className="flex items-center gap-2 mb-8 px-2">
        <div className="w-8 h-8 bg-replit-accent rounded-lg flex items-center justify-center">
          <Icons.Code2 size={20} className="text-white" />
        </div>
        <span className="font-bold text-lg tracking-tight">Replit</span>
      </div>

      <nav className="space-y-1">
        {REPLIT_CONTENT.sidebarLinks.map((link) => {
          const Icon = (Icons as any)[link.icon];
          return (
            <div
              key={link.name}
              className={`replit-sidebar-item ${link.name === "Templates" ? "active" : ""}`}
            >
              {Icon && <Icon size={18} />}
              <span className="text-sm font-medium">{link.name}</span>
            </div>
          );
        })}
      </nav>

      <div className="mt-auto pt-4 border-t border-replit-border">
        <div className="replit-sidebar-item">
          <Icons.Settings size={18} />
          <span className="text-sm font-medium">Settings</span>
        </div>
        <div className="replit-sidebar-item mt-1">
          <Icons.HelpCircle size={18} />
          <span className="text-sm font-medium">Help & Feedback</span>
        </div>
      </div>
    </aside>
  );
};
