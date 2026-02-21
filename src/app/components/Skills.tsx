import { motion } from "motion/react";
import { Code, Database, BarChart3, Settings, PenTool, Layout, Terminal, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "SQL", "Java"],
    color: "text-blue-400",
    border: "border-blue-400/20",
    bg: "bg-blue-400/5"
  },
  {
    title: "Libraries",
    icon: Settings,
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn"],
    color: "text-green-400",
    border: "border-green-400/20",
    bg: "bg-green-400/5"
  },
  {
    title: "BI Tools",
    icon: BarChart3,
    skills: ["Power BI"],
    color: "text-yellow-400",
    border: "border-yellow-400/20",
    bg: "bg-yellow-400/5"
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL"],
    color: "text-purple-400",
    border: "border-purple-400/20",
    bg: "bg-purple-400/5"
  },
  {
    title: "Platforms",
    icon: Terminal,
    skills: ["VS Code", "Jupyter", "Google Colab"],
    color: "text-orange-400",
    border: "border-orange-400/20",
    bg: "bg-orange-400/5"
  },
  {
    title: "Soft Skills",
    icon: Layout,
    skills: ["Communication", "Teamwork", "Reporting"],
    color: "text-teal-400",
    border: "border-teal-400/20",
    bg: "bg-teal-400/5"
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0B1120] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white font-['Poppins'] mb-4 flex items-center justify-center gap-3"
          >
            <Cpu className="text-[#F59E0B]" />
            Technical <span className="text-[#F59E0B]">Skills</span>
          </motion.h2>
          <div className="h-1 w-20 bg-[#F59E0B] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The instruments I use to extract, process, and refine data into actionable intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-xl border ${category.border} ${category.bg} backdrop-blur-sm hover:border-opacity-50 transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-[#0B1120]/50 border ${category.border}`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white font-['Poppins']">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className={`px-3 py-1 text-sm font-medium rounded-md bg-[#0B1120]/40 border ${category.border} ${category.color} bg-opacity-20`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
