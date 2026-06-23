import { motion } from "framer-motion";
import { Link } from "wouter";
import { ShieldCheck, FileText, Lock, CheckCircle, Scale, Building2, ArrowRight } from "lucide-react";

export default function Reference() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-20 pt-24"
    >
      {/* Hero */}
      <section className="py-20 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card to-background z-0" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black text-white font-heading leading-[1.1] tracking-tight mb-6">
              Reference & <span className="text-primary">Licensing.</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
              Trust is the foundation of our business. We operate with complete transparency, adhering to the highest standards of international legal compliance and intellectual property protection.
            </p>
          </div>
        </div>
      </section>

      {/* Licensing Process */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-white font-heading mb-4">Our Licensing Process</h2>
            <p className="text-white/60 text-lg max-w-2xl">A rigorous, legally-sound workflow ensuring complete protection for content creators.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Verification", desc: "Thorough verification of copyright ownership and chain of title." },
              { step: "02", title: "Agreement", desc: "Drafting of formal international distribution and localization agreements." },
              { step: "03", title: "Certification", desc: "Issuance of official licensing certificates and authorizations." },
              { step: "04", title: "Protection", desc: "Ongoing anti-piracy monitoring and enforcement across all territories." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-2xl relative overflow-hidden group"
              >
                <div className="absolute -right-4 -top-4 text-7xl font-black text-white/5 font-heading group-hover:text-primary/10 transition-colors">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white font-heading mb-3 relative z-10">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Documents */}
      <section className="py-24 bg-card/30 border-y border-white/5 relative">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl font-black text-white font-heading mb-4">Official Documents</h2>
              <p className="text-white/60 text-lg max-w-2xl">Our corporate registrations and compliance certifications.</p>
            </div>
            <Link href="/contacts" className="text-primary hover:text-white transition-colors flex items-center gap-2 text-sm font-bold">
              Request Full Documentation <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { type: "Corporate", title: "Certificate of Incorporation", id: "CR-2023-8942", icon: Building2 },
              { type: "Tax & Legal", title: "Tax Residency Certificate", id: "TR-2023-1124", icon: Scale },
              { type: "IP", title: "DramaCha Trademark", id: "TM-2023-5591", icon: ShieldCheck }
            ].map((doc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-white/10 rounded-2xl p-6 relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-50 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex justify-between items-start mb-8">
                  <div className="bg-background border border-white/5 p-3 rounded-xl">
                    <doc.icon size={24} className="text-white/80" />
                  </div>
                  <span className="text-xs font-mono text-white/40 bg-white/5 px-2 py-1 rounded">{doc.id}</span>
                </div>
                
                <div className="space-y-1">
                  <p className="text-xs text-primary font-bold tracking-wider uppercase">{doc.type}</p>
                  <h3 className="text-lg font-bold text-white font-heading">{doc.title}</h3>
                </div>
                
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-sm text-white/50">
                  <CheckCircle size={14} className="text-green-400" /> Confirmed Valid
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Guarantees */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 border border-primary/20">
            <div className="flex items-center gap-4 mb-8">
              <Lock size={32} className="text-primary" />
              <h2 className="text-3xl font-black text-white font-heading">Partner Guarantees</h2>
            </div>
            
            <div className="space-y-6">
              {[
                "Strict adherence to international copyright laws and WIPO treaties.",
                "Zero-tolerance policy for piracy with active takedown mechanisms.",
                "Transparent revenue reporting and royalty distribution.",
                "Data privacy compliance (GDPR, CCPA) for all DramaCha users.",
                "Secure content delivery networks (CDN) with DRM protection."
              ].map((guarantee, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-full">
                    <CheckCircle size={16} className="text-primary" />
                  </div>
                  <p className="text-white/80 text-lg">{guarantee}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}