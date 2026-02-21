import { Database } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0B1120] border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="flex items-center gap-2 mb-6 opacity-80 hover:opacity-100 transition-opacity">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-[#6366F1] to-[#22C55E] flex items-center justify-center">
            <Database className="text-white w-5 h-5" />
          </div>
          <span className="font-['Poppins'] font-bold text-xl text-white tracking-tight">
            ARUN<span className="text-[#6366F1]">.DATA</span>
          </span>
        </div>
        
        <p className="text-gray-400 font-medium text-lg mb-8 font-['Poppins'] tracking-wide">
          Refining data. Powering decisions.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-xs border-t border-gray-800 pt-8 text-xs text-gray-500">
          <span>© 2026 Arun Sundar A</span>
          <span className="hidden md:inline">•</span>
          <span>All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}
