import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Target, Eye, Shield, Globe2, Award, Zap } from "lucide-react";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-20 pt-24"
    >
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md mb-8"
            >
              <span className="text-sm font-medium text-primary-foreground tracking-wide uppercase">Corporate Overview</span>
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-black text-white font-heading leading-[1.1] tracking-tight mb-8"
            >
              Shaping the Global<br />
              <span className="text-primary neon-text">Short Drama Landscape</span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-white/70 max-w-2xl leading-relaxed"
            >
              ESHON D&L is a premier media licensing and OTT platform company dedicated to bringing high-quality, fully localized short dramas to international audiences.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-3xl"
            >
              <Target size={40} className="text-primary mb-6" />
              <h2 className="text-3xl font-bold text-white font-heading mb-4">Our Mission</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                To break down cultural barriers through legal, high-quality localization and deliver compelling short-form narratives to every corner of the globe. We believe great stories deserve a global stage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-10 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-secondary/20 blur-[50px] rounded-full" />
              <Eye size={40} className="text-secondary mb-6 relative z-10" />
              <h2 className="text-3xl font-bold text-white font-heading mb-4 relative z-10">Our Vision</h2>
              <p className="text-white/70 text-lg leading-relaxed relative z-10">
                To become the world's most trusted partner for short drama distribution and the premier destination for audiences seeking addictive, high-production-value mobile entertainment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Activities */}
      <section className="py-24 border-t border-white/5 relative bg-card/20">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-white font-heading mb-4">Core Activities</h2>
            <p className="text-white/60 text-lg max-w-2xl">The pillars of our global entertainment ecosystem.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Global Licensing",
                desc: "Acquiring exclusive distribution rights for premium content from leading Asian production studios, ensuring legal and protected global release.",
                icon: Shield
              },
              {
                title: "Professional Localization",
                desc: "End-to-end translation, subtitling, and dubbing services adapted for cultural nuances by native speakers and professional voice actors.",
                icon: Globe2
              },
              {
                title: "OTT Platform Operation",
                desc: "Developing and managing DramaCha, our state-of-the-art streaming platform optimized for vertical viewing and seamless user experience.",
                icon: Zap
              }
            ].map((activity, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-colors bg-background"
              >
                <activity.icon size={32} className="text-primary mb-6 group-hover:text-accent transition-colors" />
                <h3 className="text-2xl font-bold text-white font-heading mb-4">{activity.title}</h3>
                <p className="text-white/60 leading-relaxed">{activity.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 skew-y-3 transform origin-bottom-right" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-black text-white font-heading leading-tight">
                A Global<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Footprint.</span>
              </h2>
              <p className="text-xl text-white/70">
                While our roots are deeply embedded in the heart of Asian entertainment, our reach is truly global. We operate across multiple continents, bringing diverse stories to diverse audiences.
              </p>
              <div className="pt-8 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl font-black text-white mb-2">12+</h4>
                  <p className="text-white/60">Supported Languages</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-white mb-2">50+</h4>
                  <p className="text-white/60">Target Markets</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-white mb-2">3</h4>
                  <p className="text-white/60">Regional Hubs</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-white mb-2">24/7</h4>
                  <p className="text-white/60">Global Support</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              {/* Abstract Globe representation */}
              <div className="aspect-square rounded-full border border-white/10 relative flex items-center justify-center bg-card/20 backdrop-blur-sm">
                <div className="absolute w-3/4 h-3/4 rounded-full border border-white/10 border-dashed animate-[spin_60s_linear_infinite]" />
                <div className="absolute w-1/2 h-1/2 rounded-full border border-primary/20 border-dashed animate-[spin_40s_linear_infinite_reverse]" />
                <Globe2 size={64} className="text-primary/50" />
                
                {/* Pins */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-accent rounded-full neon-glow animate-pulse" />
                <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-primary rounded-full neon-glow animate-pulse" />
                <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-secondary rounded-full neon-glow animate-pulse" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto glass-card p-12 rounded-3xl"
          >
            <h2 className="text-4xl font-black text-white font-heading mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl text-white/70 mb-8">
              Join leading studios and creators in bringing your content to the global stage.
            </p>
            <Link href="/contacts" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-bold text-lg transition-all hover:neon-glow hover:bg-primary/90">
              Get in Touch <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}