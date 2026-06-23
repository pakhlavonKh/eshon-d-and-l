import { motion } from "framer-motion";
import { Play, Smartphone, Sparkles, CreditCard, ClosedCaption, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function DramaCha() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-20 pt-24 bg-[#020202]"
    >
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10" />
          {/* Abstract background suggesting a playing video */}
          <div className="absolute top-0 right-0 w-[70%] h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-background to-background opacity-60" />
          <div className="absolute right-0 w-1/2 h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] mix-blend-overlay z-0" />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2"
              >
                <div className="bg-primary px-3 py-1 rounded text-xs font-bold text-white tracking-widest uppercase">APP SHOWCASE</div>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-black text-white font-heading leading-none tracking-tighter"
              >
                Drama<span className="text-primary">Cha</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-white/70 leading-relaxed font-light"
              >
                Bite-sized brilliance. Premium short dramas optimized for your screen, perfectly localized for your world.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex gap-4 pt-4"
              >
                <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2">
                  <Play size={20} className="fill-black" /> Get the App
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative hidden lg:flex justify-center"
            >
              {/* Phone Mockup 1 (Back) */}
              <div className="absolute right-10 top-10 w-[280px] h-[580px] rounded-[3rem] border-8 border-[#1a1a24] bg-card opacity-50 scale-90 rotate-6 shadow-2xl overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-card" />
              </div>
              
              {/* Phone Mockup 2 (Front) */}
              <div className="w-[300px] h-[620px] rounded-[3rem] border-[10px] border-[#2a2a35] bg-black relative z-10 shadow-[0_0_50px_rgba(217,70,239,0.3)] overflow-hidden flex flex-col">
                {/* Screen Content */}
                <div className="flex-1 relative bg-gradient-to-b from-[#3a1c42] to-black">
                  {/* Fake Video Player UI */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 z-10" />
                  
                  {/* Top Bar */}
                  <div className="absolute top-0 inset-x-0 h-20 p-6 flex justify-between items-start z-20">
                    <span className="font-heading font-bold text-white text-xl">DramaCha</span>
                    <Sparkles size={20} className="text-white" />
                  </div>
                  
                  {/* Right Actions */}
                  <div className="absolute right-4 bottom-32 z-20 flex flex-col gap-6 items-center">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <div className="w-6 h-6 rounded-full bg-primary" />
                    </div>
                    <div className="flex flex-col items-center gap-1 text-white">
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">♥</div>
                      <span className="text-xs">12K</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-white">
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">💬</div>
                      <span className="text-xs">842</span>
                    </div>
                  </div>
                  
                  {/* Bottom Info */}
                  <div className="absolute bottom-6 left-4 right-16 z-20">
                    <div className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded inline-block mb-2 border border-primary/30">EP 12 / 80</div>
                    <h3 className="text-white font-bold text-lg mb-1">The CEO's Secret Double Life</h3>
                    <p className="text-white/70 text-sm line-clamp-2">She thought she was marrying a regular office worker, but he was actually...</p>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-white/20 z-20">
                    <div className="h-full w-1/3 bg-primary" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative z-10 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white font-heading mb-4">Engineered for Binge-Watching</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Vertical Native",
                desc: "Every frame is shot and optimized for vertical screens. No rotating required."
              },
              {
                icon: ClosedCaption,
                title: "Perfect Localization",
                desc: "High-quality subtitles and professional dubbing in over 12 languages."
              },
              {
                icon: CreditCard,
                title: "Flexible Access",
                desc: "Watch free with ads, pay-per-episode with coins, or unlock everything with VIP."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-3xl"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-heading">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Showcase */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
          <h2 className="text-4xl font-black text-white font-heading">Trending Now</h2>
        </div>
        
        {/* Horizontal scroll mock */}
        <div className="flex gap-6 px-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
          {[
            { title: "Love in the Fast Lane", genre: "Romance", color: "from-pink-500/40" },
            { title: "Heir's Revenge", genre: "Drama", color: "from-blue-500/40" },
            { title: "Midnight Secrets", genre: "Thriller", color: "from-purple-500/40" },
            { title: "Royal Bloodline", genre: "Historical", color: "from-yellow-500/40" },
            { title: "The Contract", genre: "Romance", color: "from-red-500/40" },
          ].map((show, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[240px] md:min-w-[280px] aspect-[3/4] rounded-2xl relative overflow-hidden group snap-center cursor-pointer border border-white/10"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${show.color} to-card z-0`} />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                <div className="bg-background/80 backdrop-blur-md text-xs px-2 py-1 rounded w-fit mb-2 border border-white/10 text-white/80 uppercase tracking-wider">
                  {show.genre}
                </div>
                <h3 className="text-xl font-bold text-white font-heading leading-tight">{show.title}</h3>
                <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  <Play size={16} className="fill-primary" /> <span className="text-sm font-bold">Watch Trailer</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* For Partners CTA */}
      <section className="py-24 border-t border-white/5 bg-gradient-to-b from-transparent to-primary/5">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-black text-white font-heading mb-6">Are you a Content Creator?</h2>
          <p className="text-xl text-white/60 mb-8">
            Distribute your short dramas on DramaCha and reach millions of viewers globally with our secure, revenue-sharing model.
          </p>
          <Link href="/contacts" className="inline-flex items-center gap-2 text-primary hover:text-white font-bold text-lg transition-colors group">
            Apply for Distribution <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}