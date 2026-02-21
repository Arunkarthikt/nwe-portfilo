import { motion } from "motion/react";
import { Filter, Search, Cpu, PieChart, FolderKanban, Award, Building2 } from "lucide-react";

const philosophyItems = [
  {
    title: "Data Cleaning",
    subtitle: "Refining Stage",
    description: "Removing impurities and inconsistencies to ensure high-quality input.",
    icon: Filter,
    color: "text-[#F59E0B]",
    borderColor: "border-[#F59E0B]/20",
    bg: "bg-[#F59E0B]/5"
  },
  {
    title: "Exploratory Data Analysis",
    subtitle: "Distillation",
    description: "Analyzing distributions and correlations to extract the essence.",
    icon: Search,
    color: "text-[#6366F1]",
    borderColor: "border-[#6366F1]/20",
    bg: "bg-[#6366F1]/5"
  },
  {
    title: "Modeling",
    subtitle: "Conversion to Value",
    description: "Applying algorithms to transform processed data into predictive power.",
    icon: Cpu,
    color: "text-[#EC4899]",
    borderColor: "border-[#EC4899]/20",
    bg: "bg-[#EC4899]/5"
  },
  {
    title: "Visualization",
    subtitle: "Delivering Fuel",
    description: "Presenting actionable insights that drive decision-making.",
    icon: PieChart,
    color: "text-[#22C55E]",
    borderColor: "border-[#22C55E]/20",
    bg: "bg-[#22C55E]/5"
  }
];

const stats = [
  { label: "Projects", value: "3+", icon: FolderKanban },
  { label: "Certifications", value: "3", icon: Award },
  { label: "Experience", value: "Intern", icon: Building2 },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-[#0B1120] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#111827] to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white font-['Poppins'] mb-4"
          >
            <span className="text-[#6366F1]">About Me</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            className="h-1 bg-[#6366F1] mx-auto rounded-full"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
          >
           Motivated and detail-oriented aspiring data and technology professional with a strong foundation in Python, SQL, and 
           Java, along with hands-on experience in data analytics and visualization tools. Aiming to apply technical skills, expand 
           practical knowledge, and contribute effectively to organizational growth while continuously learning and improving.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {philosophyItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-xl border ${item.borderColor} ${item.bg} hover:bg-opacity-20 transition-all duration-300 group hover:-translate-y-1`}
            >
              <div className={`w-12 h-12 rounded-lg ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-1 font-['Poppins']">{item.title}</h3>
              <span className={`text-xs font-semibold uppercase tracking-wider ${item.color} mb-3 block`}>{item.subtitle}</span>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-[#111827]/50 border border-gray-800 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.4 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-[#6366F1] opacity-80" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white font-['Poppins'] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wide font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
