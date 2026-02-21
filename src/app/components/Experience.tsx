import { motion } from "motion/react";
import { Calendar, Building2, CheckCircle2, Award, BookOpen } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0B1120] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Experience Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white font-['Poppins'] mb-4"
            >
              Industrial <span className="text-[#6366F1]">Experience</span>
            </motion.h2>
            <div className="h-1 w-20 bg-[#6366F1] mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-[#6366F1]/30 ml-4 md:ml-0"
            >
              <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-[#6366F1] shadow-[0_0_10px_#6366F1]"></div>
              
              <div className="bg-[#111827]/50 border border-gray-800 rounded-xl p-8 backdrop-blur-sm hover:border-[#6366F1]/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-['Poppins']">Data Analyst Intern</h3>
                    <div className="flex items-center gap-2 text-[#6366F1] mt-1 font-medium">
                      <Building2 className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 bg-[#0B1120] px-4 py-2 rounded-lg border border-gray-800">
                    <Calendar className="w-4 h-4" />
                    <span>July 2025</span>
                  </div>
                </div>

                <ul className="space-y-4">
                  {[
                    "Performed rigorous data cleaning and preprocessing on large datasets.",
                    "Conducted Exploratory Data Analysis (EDA) to uncover hidden patterns.",
                    "Executed complex SQL queries for data extraction and manipulation.",
                    "Designed interactive Power BI dashboards for real-time monitoring.",
                    "Provided data-driven support for strategic decision-making."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-[#22C55E] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white font-['Poppins'] mb-4"
            >
              Professional <span className="text-[#F59E0B]">Validation</span>
            </motion.h2>
            <div className="h-1 w-20 bg-[#F59E0B] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Data Science Using Python",
                issuer: "NPTEL",
                year: "2025",
                color: "text-[#6366F1]",
                border: "border-[#6366F1]/30",
                icon: BookOpen
              },
              {
                title: "Data Analytics",
                issuer: "IBM",
                year: "2025",
                color: "text-[#22C55E]",
                border: "border-[#22C55E]/30",
                icon: Award
              },
              {
                title: "Acquiring Data",
                issuer: "NASSCOM",
                year: "2024",
                color: "text-[#F59E0B]",
                border: "border-[#F59E0B]/30",
                icon: Award
              }
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-[#111827]/30 border ${cert.border} p-6 rounded-xl hover:bg-[#111827]/60 transition-all group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-[#0B1120] ${cert.color} border border-gray-800`}>
                    <cert.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-gray-500 bg-[#0B1120] px-2 py-1 rounded border border-gray-800">
                    {cert.year}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white font-['Poppins'] mb-1 group-hover:text-[#6366F1] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  Issued by <span className="text-gray-300 font-semibold">{cert.issuer}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
