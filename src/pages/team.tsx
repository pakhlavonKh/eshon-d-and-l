import { motion } from "framer-motion";
import { ArrowRight, Mail, UserRound } from "lucide-react";
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
      className="glass-card rounded-3xl px-6 py-8 text-left"
    >
      <div className="text-5xl font-black text-primary mb-3">
        {displayValue}
        {value > 100 ? '+' : ''}
      </div>
      <div className="text-sm uppercase tracking-[0.35em] text-white/60">{label}</div>
    </motion.div>
  );
}

const team = [
  {
    name: "Elena Park",
    role: "Chief Executive Officer",
    dept: "Leadership",
    email: "elena.park@eshondl.com",
    bio: "Former VP of Global Licensing at major OTT platforms. 15+ years in media distribution."
  },
  {
    name: "David Chen",
    role: "Head of Content",
    dept: "Leadership",
    email: "david.chen@eshondl.com",
    bio: "Pioneered the short drama format acquisition strategy across Asian markets."
  },
  {
    name: "Sarah Kim",
    role: "VP of Localization",
    dept: "Localization",
    email: "sarah.kim@eshondl.com",
    bio: "Manages a network of 500+ translators and voice actors globally."
  },
  {
    name: "Marcus Wright",
    role: "CTO, DramaCha",
    dept: "Technology",
    email: "marcus.wright@eshondl.com",
    bio: "Architected DramaCha's high-performance video delivery network."
  },
  {
    name: "Yuki Tanaka",
    role: "Lead Voice Director",
    dept: "Production",
    email: "yuki.tanaka@eshondl.com",
    bio: "Award-winning voice director specializing in high-emotion short formats."
  },
  {
    name: "James Wilson",
    role: "Head of Legal & Licensing",
    dept: "Legal",
    email: "james.wilson@eshondl.com",
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
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 opacity-40 blur-3xl bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-primary shadow-sm shadow-primary/10">
              Team Spotlight
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white font-heading leading-tight mb-6">
              The Minds Behind<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">The Magic.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/75 leading-relaxed mx-auto max-w-2xl">
              Our leaders blend global media licensing, localization expertise, and streaming innovation to build experiences that scale across markets.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/contacts"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-black transition hover:bg-primary/90 shadow-lg shadow-primary/20"
              >
                Partner with Us
                <ArrowRight size={16} className="ml-2" />
              </a>
              <a
                href="#team-grid"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-semibold text-white/80 transition hover:border-primary/40 hover:text-white"
              >
                Explore Leadership
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section id="team-grid" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-card rounded-[32px] p-7 group hover:-translate-y-1 hover:border-primary/40 focus-within:-translate-y-1 transition-all duration-300 relative overflow-hidden outline-none"
              >
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/15 to-transparent rounded-t-[32px] pointer-events-none" />
                <div className="relative z-10 flex items-start gap-4 mb-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-accent text-xl font-black text-white shadow-lg shadow-primary/20">
                    {member.name.split(" ").map((part) => part[0]).join("")}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-primary/90 mb-1">
                      {member.dept}
                    </p>
                    <h3 className="text-2xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-sm text-white/60">{member.role}</p>
                  </div>
                </div>

                <p className="text-sm leading-7 text-white/70 mb-8 min-h-[5.5rem]">
                  {member.bio}
                </p>

                <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-primary/40 hover:bg-primary/10 hover:text-white"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={16} />
                    Email
                  </a>
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-primary/40 hover:bg-primary hover:text-white"
                    aria-label={`View ${member.name}'s role details`}
                  >
                    <UserRound size={16} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Global Network Stats */}
      <section className="py-24 bg-card/30 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white font-heading mb-4">Supported by a Global Network</h2>
            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-12">
              From localization specialists to engineering and legal counsel, our extended network is calibrated to move content from rights to release with velocity and accuracy.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <CountUpStat value={500} label="Voice Actors" />
            <CountUpStat value={150} label="Translators" />
            <CountUpStat value={40} label="Engineers" />
            <CountUpStat value={25} label="Legal Experts" />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
