import { motion } from "framer-motion";
import { Link } from "wouter";
import { Play, Globe, Shield, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

function CountUpStat({ value, label }: { value: number; label: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (!isStarted) return;

    const duration = 2000;
    const start = Date.now();
    
    const updateCount = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      setDisplayValue(Math.floor(value * progress));
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setDisplayValue(value);
      }
    };
    
    requestAnimationFrame(updateCount);
  }, [isStarted, value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsStarted(true)}
      transition={{ delay: Math.random() * 0.3 }}
      className="text-center space-y-2"
    >
      <h3 className="text-4xl md:text-5xl font-black text-white font-heading">
        {displayValue}
        {value > 100 ? '+' : ''}
      </h3>
      <p className="text-sm md:text-base text-white/50 uppercase tracking-widest font-semibold">{label}</p>
    </motion.div>
  );
}

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-20"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 pb-12 overflow-hidden">
        {/* Cinematic Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cinematic-radial opacity-50" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 mix-blend-overlay" />
        </div>

        <div className="container mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-primary-foreground tracking-wide uppercase">The Future of Short Dramas</span>
            </motion.div>
            
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white font-heading leading-[1.15] tracking-tight"
            >
              Global Short Dramas.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary neon-text">
                Officially Localized.
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
            >
              ESHON D&L bridges the gap between premium content and global audiences. Through our DramaCha platform, we deliver fully licensed, expertly localized short dramas to the world.
            </motion.p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
            >
              <Link href="/dramacha" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-background font-bold text-lg transition-transform hover:scale-105 flex items-center justify-center gap-2">
                <Play size={20} className="fill-background" /> Explore DramaCha
              </Link>
              <Link href="/contacts" className="w-full sm:w-auto px-8 py-4 rounded-full bg-card border border-white/10 text-white font-bold text-lg transition-all hover:bg-white/5 hover:border-white/20 flex items-center justify-center gap-2 group">
                Partner With Us <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/5 bg-background/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <CountUpStat value={50} label="Countries Reached" />
            <CountUpStat value={10000} label="Episodes Licensed" />
            <CountUpStat value={12} label="Languages Supported" />
            <CountUpStat value={100} label="Legal Compliance %" />
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white font-heading mb-6">Our Ecosystem</h2>
            <p className="text-white/60 text-lg">We manage the entire lifecycle of short drama distribution, from initial licensing to end-user streaming.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Official Licensing",
                desc: "We secure exclusive legal distribution rights for top-tier short dramas from major studios worldwide."
              },
              {
                icon: Globe,
                title: "Premium Localization",
                desc: "Our expert team of translators and voice actors adapt content perfectly for regional markets."
              },
              {
                icon: Zap,
                title: "DramaCha Platform",
                desc: "Our proprietary OTT streaming platform delivers seamless, high-quality viewing experiences."
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass-card p-8 rounded-3xl group hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors group-hover:neon-glow">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DramaCha Teaser */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 skew-y-[-3deg] transform origin-top-left" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-white/10">
                <Play size={16} className="text-primary fill-primary" />
                <span className="text-sm font-bold text-white">Meet DramaCha</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-heading leading-tight">
                The Next Era of<br />
                <span className="text-primary">Mobile Entertainment.</span>
              </h2>
              <p className="text-xl text-white/70">
                Designed for the modern viewer. DramaCha combines the addictive scroll of short-form video with the production value of premium television.
              </p>
              <ul className="space-y-4">
                {["Vertical cinematic viewing", "AI-powered recommendations", "Multi-language subtitles & dubbing", "Pay-per-episode or subscription"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 size={20} className="text-accent" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <Link href="/dramacha" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-bold text-lg transition-all hover:neon-glow hover:bg-primary/90">
                  Discover The App
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[600px] flex items-center justify-center"
            >
              {/* Abstract Phone Mockup representation */}
              <div className="w-[300px] h-[600px] rounded-[3rem] border-[8px] border-card bg-background relative overflow-hidden shadow-2xl shadow-primary/20 flex flex-col">
                <div className="absolute top-0 inset-x-0 h-6 bg-card flex justify-center items-center z-20">
                  <div className="w-20 h-4 rounded-full bg-background mt-2" />
                </div>
                {/* Screen Content Fake */}
                <div className="flex-1 bg-gradient-to-b from-secondary/40 to-background relative pt-12 p-4 flex flex-col">
                   <div className="flex justify-between items-center mb-4">
                     <div className="font-heading font-bold text-white text-lg">DramaCha</div>
                     <div className="w-8 h-8 rounded-full bg-white/20" />
                   </div>
                   
                   <div className="flex-1 rounded-2xl bg-card border border-white/10 overflow-hidden relative group">
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                     <div className="absolute bottom-4 left-4 z-20 w-3/4">
                       <div className="h-6 w-3/4 bg-white/20 rounded mb-2" />
                       <div className="h-4 w-1/2 bg-white/10 rounded" />
                     </div>
                     <div className="absolute right-4 bottom-4 z-20 flex flex-col gap-3">
                       <div className="w-10 h-10 rounded-full bg-white/20 flex justify-center items-center backdrop-blur-md" />
                       <div className="w-10 h-10 rounded-full bg-white/20 flex justify-center items-center backdrop-blur-md" />
                     </div>
                   </div>
                   
                   <div className="h-16 mt-4 flex justify-around items-center px-4">
                     {[1,2,3,4].map(i => <div key={i} className="w-6 h-6 rounded-full bg-white/20" />)}
                   </div>
                </div>
              </div>
              
              {/* Decorative elements behind phone */}
              <div className="absolute -z-10 w-full h-full bg-primary/20 blur-[100px] rounded-full mix-blend-screen" />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}