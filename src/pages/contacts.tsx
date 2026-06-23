import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Building2, Send } from "lucide-react";

export default function Contacts() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-20 pt-24"
    >
      <div className="container mx-auto px-6 pt-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-white font-heading mb-6 tracking-tight">
            Let's <span className="text-primary neon-text">Connect.</span>
          </h1>
          <p className="text-xl text-white/70">
            Whether you're a content creator looking for global distribution, or an investor interested in the future of short dramas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-white font-heading mb-8">Global Headquarters</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Seoul Office (HQ)</h4>
                    <p className="text-white/60 leading-relaxed">
                      123 Innovation Drive, Tower B, Level 45<br />
                      Media District, Seoul 06123<br />
                      South Korea
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Email Inquiries</h4>
                    <a href="mailto:partners@eshondl.com" className="text-white/60 hover:text-primary transition-colors block">partners@eshondl.com</a>
                    <a href="mailto:press@eshondl.com" className="text-white/60 hover:text-primary transition-colors block mt-1">press@eshondl.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Phone</h4>
                    <p className="text-white/60">+82 2 1234 5678 (KOR)</p>
                    <p className="text-white/60 mt-1">+1 800 123 4567 (US)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h3 className="text-xl font-bold text-white font-heading mb-4">Business Cooperation</h3>
              <p className="text-white/60 leading-relaxed">
                We are actively acquiring rights for high-quality short dramas. If you represent a production studio, please select "Content Licensing" in the inquiry form.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
              
              <h3 className="text-2xl font-bold text-white font-heading mb-8 relative z-10">Send an Inquiry</h3>
              
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">First Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Company / Studio</label>
                  <div className="relative">
                    <Building2 size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                    <input 
                      type="text" 
                      className="w-full bg-background/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="Acme Production Co."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Email Address</label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                    <input 
                      type="email" 
                      className="w-full bg-background/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Inquiry Type</label>
                  <select className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none">
                    <option value="licensing">Content Licensing & Distribution</option>
                    <option value="localization">Localization Services</option>
                    <option value="investment">Investment & Partnerships</option>
                    <option value="other">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <button 
                  type="button"
                  className="w-full bg-primary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 hover:neon-glow transition-all"
                >
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}