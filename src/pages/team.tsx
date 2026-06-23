import { motion } from "framer-motion";
import { Mail, UserRound } from "lucide-react";

const team = [
  {
    name: "Elena Park",
    role: "Chief Executive Officer",
    dept: "Leadership",
    bio: "Former VP of Global Licensing at major OTT platforms. 15+ years in media distribution."
  },
  {
    name: "David Chen",
    role: "Head of Content",
    dept: "Leadership",
    bio: "Pioneered the short drama format acquisition strategy across Asian markets."
  },
  {
    name: "Sarah Kim",
    role: "VP of Localization",
    dept: "Localization",
    bio: "Manages a network of 500+ translators and voice actors globally."
  },
  {
    name: "Marcus Wright",
    role: "CTO, DramaCha",
    dept: "Technology",
    bio: "Architected DramaCha's high-performance video delivery network."
  },
  {
    name: "Yuki Tanaka",
    role: "Lead Voice Director",
    dept: "Production",
    bio: "Award-winning voice director specializing in high-emotion short formats."
  },
  {
    name: "James Wilson",
    role: "Head of Legal & Licensing",
    dept: "Legal",
    bio: "Expert in international IP law and anti-piracy enforcement."
  }
];

export default function Team() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-20 pt-24"
    >
      {/* Hero */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black text-white font-heading leading-tight mb-6">
              The Minds Behind<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">The Magic.</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Our global team combines deep expertise in media rights, elite localization craft, and cutting-edge streaming technology.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-3xl p-6 group hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-0" />
                
                {/* Avatar Placeholder */}
                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-card to-background border border-white/5 mb-6 relative z-10 overflow-hidden flex items-center justify-center">
                   {/* Initials as fallback */}
                   <span className="text-6xl font-black text-white/10 font-heading">
                     {member.name.split(' ').map(n => n[0]).join('')}
                   </span>
                </div>
                
                <div className="relative z-10">
                  <div className="text-primary text-xs font-bold tracking-wider uppercase mb-2">
                    {member.dept}
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading mb-1">{member.name}</h3>
                  <p className="text-white/50 font-medium mb-4">{member.role}</p>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  
                  <div className="flex gap-3 pt-4 border-t border-white/10">
                    <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-primary hover:text-white transition-colors">
                      <UserRound size={14} />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-primary hover:text-white transition-colors">
                      <Mail size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Network Stats */}
      <section className="py-24 bg-card/30 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white font-heading mb-12">Supported by a Global Network</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-black text-primary mb-2">500+</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">Voice Actors</div>
            </div>
            <div>
              <div className="text-4xl font-black text-primary mb-2">150+</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">Translators</div>
            </div>
            <div>
              <div className="text-4xl font-black text-primary mb-2">40+</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">Engineers</div>
            </div>
            <div>
              <div className="text-4xl font-black text-primary mb-2">25+</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">Legal Experts</div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}