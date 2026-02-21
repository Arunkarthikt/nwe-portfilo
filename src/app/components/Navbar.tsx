import { useState, useEffect } from "react";
import { Menu, X, Database, Terminal, Cpu, FileJson, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

const navItems = [
  { name: "Home", href: "#hero", icon: Database },
  { name: "About", href: "#about", icon: Terminal },
  { name: "Skills", href: "#skills", icon: Cpu },
  { name: "Project", href: "#projects", icon: FileJson },
  { name: "Intern", href: "#experience", icon: Database },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-[#0B1120]/90 backdrop-blur-md border-[#6366F1]/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick("#hero")}>
            <div className="w-8 h-8 rounded bg-gradient-to-br from-[#6366F1] to-[#22C55E] flex items-center justify-center">
              <Database className="text-white w-5 h-5" />
            </div>
            <span className="font-['Poppins'] font-bold text-xl text-white tracking-tight">
              ARUN<span className="text-[#6366F1]"> SUNDAR</span>
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 font-['Inter'] flex items-center gap-1.5",
                    activeSection === item.href.substring(1)
                      ? "text-[#22C55E] bg-[#22C55E]/10"
                      : "text-gray-300 hover:text-white hover:bg-[#6366F1]/10"
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#6366F1]/20 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0B1120] border-b border-[#6366F1]/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-[#6366F1]/10 flex items-center gap-3"
                >
                  <item.icon className="w-5 h-5 text-[#6366F1]" />
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
