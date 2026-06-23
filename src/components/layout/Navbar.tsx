import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Reference", path: "/reference" },
  { name: "DramaCha", path: "/dramacha" },
  { name: "Team", path: "/team" },
  { name: "Contacts", path: "/contacts" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-nav py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group relative z-50">
              <span className="text-2xl font-black tracking-tight text-white font-heading">
                ESHON
                <span className="text-primary ml-1">D&L</span>
              </span>
              <span className="flex items-center gap-1 bg-card border border-white/10 px-2 py-0.5 rounded-full text-xs font-semibold text-white/80 tracking-wide transition-colors group-hover:border-primary/50 group-hover:text-white">
                <Play size={10} className="text-primary" />
                DramaCha
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-sm font-medium transition-all relative ${
                    location === link.path
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.name}
                  {location === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary neon-glow"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
              <Link
                href="/contacts"
                className="bg-primary/10 hover:bg-primary/20 border border-primary/50 text-primary px-5 py-2 rounded-full text-sm font-semibold transition-all hover:neon-glow"
              >
                Partner With Us
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden relative z-50 text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 pb-8 px-6 flex flex-col md:hidden"
          >
            <div className="flex flex-col gap-6 items-center justify-center flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-heading font-bold ${
                    location === link.path ? "text-primary neon-text" : "text-white/70"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contacts"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 bg-primary text-white px-8 py-3 rounded-full font-bold text-lg w-full text-center neon-glow"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}