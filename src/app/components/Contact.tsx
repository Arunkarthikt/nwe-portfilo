import { useState } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { Send, User, Mail, MessageSquare, Terminal, MapPin, Phone, Loader2 } from "lucide-react";
import { toast } from "sonner";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xdalwkge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        reset();
      } else {
        const errorData = await response.json();
        toast.error(errorData?.errors?.[0]?.message || "Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0B1120] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366F1]/10 text-[#6366F1] text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#6366F1] animate-pulse"></span>
              Get In Touch
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white font-['Poppins'] mb-6 leading-tight">
              Let’s turn your data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#22C55E]">decisions.</span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Whether you need to refine raw data, build predictive models, or visualize complex insights, I'm ready to help you extract value.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#111827]/50 border border-gray-800">
                <div className="w-12 h-12 rounded-full bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <a href="mailto:arunkarthik966@gmail.com" className="text-gray-400 hover:text-[#6366F1] transition-colors">arunkarthik966@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#111827]/50 border border-gray-800">
                <div className="w-12 h-12 rounded-full bg-[#22C55E]/20 flex items-center justify-center text-[#22C55E]">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Connect</h4>
                  <a href="https://linkedin.com/in/arun-sundar-a-" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#22C55E] transition-colors">linkedin.com/in/arun-sundar-a-</a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#111827]/50 border border-gray-800">
                <div className="w-12 h-12 rounded-full bg-[#22C55E]/20 flex items-center justify-center text-[#22C55E]">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Github</h4>
                  <a href="https://github.com/Arunkarthikt" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#22C55E] transition-colors">https://github.com/Arunsundar424-svg</a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#111827]/50 border border-gray-800">
                <div className="w-12 h-12 rounded-full bg-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <span className="text-gray-400">Chennai, Tamil Nadu, India</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#111827]/50 border border-gray-800">
                <div className="w-12 h-12 rounded-full bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <a href="tel:+916374871428" className="text-gray-400 hover:text-[#6366F1] transition-colors">+91-6374871428</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#111827] p-8 rounded-2xl border border-gray-800 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6366F1] via-[#22C55E] to-[#F59E0B]"></div>

            <h3 className="text-2xl font-bold text-white mb-6 font-['Poppins']">Send a Message</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    className="w-full bg-[#0B1120] border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] transition-all"
                    placeholder="Your Name"
                  />
                </div>
                {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    type="email"
                    className="w-full bg-[#0B1120] border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] transition-all"
                    placeholder="Your Email"
                  />
                </div>
                {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-500" />
                  <textarea
                    {...register("message", { required: "Message is required" })}
                    rows={4}
                    className="w-full bg-[#0B1120] border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] transition-all resize-none"
                    placeholder="How can I help you refine your data?"
                  ></textarea>
                </div>
                {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#6366F1] to-[#4F46E5] text-white font-bold py-3 rounded-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    Sending...
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
