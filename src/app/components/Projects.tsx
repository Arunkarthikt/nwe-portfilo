import { motion } from "motion/react";
import { ArrowRight, BarChart3, Database, ChevronRight, Zap, Cpu, LineChart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "E-Commerce Sales Analysis",
    category: "Data Analysis & Visualization",
    description: "Analyzed complex sales data to identify seasonal trends and customer purchasing patterns. Created interactive dashboards to visualize key performance indicators.",
    tech: ["Python", "Pandas", "Matplotlib", "Power BI"],
    image: "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?q=80&w=1080",
    pipeline: [
      { step: "Raw Sales Data", icon: Database },
      { step: "Cleaning & EDA", icon: Zap },
      { step: "Strategic Dashboard", icon: BarChart3 }
    ],
    highlight: "Identified 15% growth opportunity in underperforming regions."
  },

  {
    title: "HR Analytics",
    category: "Workforce Optimization",
    description: "Analyzed employee workforce data to understand attrition trends, hiring patterns, and department distribution. Explored relationships between experience, salary, performance, and work mode to identify retention factors. Built visual dashboards to monitor employee status, workforce structure, and organizational growth. Enabled data-driven HR decisions for better hiring, planning, and employee retention.",
    tech: ["Python", "Pandas", "Power BI", "SQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080",
    pipeline: [
      { step: "Data Extraction", icon: Database },
      { step: "Processing", icon: Zap },
      { step: "Dashboard", icon: BarChart3 }
    ],
    highlight: "Improved HR decision making using workforce insights."
  },

  {
    title: "Car Price Prediction",
    category: "Machine Learning",
    description: "Developed a machine learning model to predict used car prices based on features such as year, mileage, fuel type, and transmission. Performed preprocessing, feature engineering, and evaluation using regression metrics. Built an interactive app for real-time predictions.",
    tech: ["Python", "Pandas", "Scikit-Learn", "Streamlit"],
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1080",
    pipeline: [
      { step: "Data Cleaning", icon: Database },
      { step: "Model Training", icon: Cpu },
      { step: "Prediction App", icon: LineChart }
    ],
    highlight: "Achieved R² score of 0.82 using Linear Regression."
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0B1120] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white font-['Poppins'] mb-4 flex items-center justify-center gap-3"
          >
            <BarChart3 className="text-[#22C55E]" />
            Refined <span className="text-[#22C55E]">Projects</span>
          </motion.h2>

          <div className="h-1 w-20 bg-[#22C55E] mx-auto rounded-full mb-6"></div>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing the transformation of raw inputs into valuable, decision-ready products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#111827]/80 border border-gray-800 rounded-2xl overflow-hidden hover:border-[#6366F1]/50 transition-all duration-300 group shadow-lg shadow-black/50"
            >

              {/* Image */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent z-10 opacity-60"></div>
                <ImageWithFallback 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="px-3 py-1 bg-[#6366F1] text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 font-['Poppins'] group-hover:text-[#6366F1] transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Pipeline */}
                <div className="mb-6 p-4 bg-[#0B1120]/50 rounded-xl border border-gray-800">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Process Pipeline
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    {project.pipeline.map((stage, i) => (
                      <div key={i} className="flex flex-col items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          i === 0 ? "bg-[#F59E0B]/20 text-[#F59E0B]" : 
                          i === 1 ? "bg-[#6366F1]/20 text-[#6366F1]" : 
                          "bg-[#22C55E]/20 text-[#22C55E]"
                        }`}>
                          <stage.icon className="w-4 h-4" />
                        </div>
                        <span className="text-gray-400 font-medium text-[10px] text-center max-w-[80px] leading-tight">
                          {stage.step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 text-xs font-medium text-gray-400 bg-gray-800 rounded border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-[#6366F1] hover:text-[#22C55E] transition-colors font-semibold text-sm group/link"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

