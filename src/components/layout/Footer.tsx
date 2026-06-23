import { Link } from "wouter";
import { Play, Mail, MapPin, Phone, Globe, Link2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group inline-block">
              <span className="text-2xl font-black tracking-tight text-white font-heading">
                ESHON
                <span className="text-primary ml-1">D&L</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Global short drama licensing and localization company. Connecting premium content with audiences worldwide through legal distribution and cutting-edge streaming technology.
            </p>
            <div className="flex gap-4">
              {[Globe, Link2, Mail, Phone].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all hover:neon-glow">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 font-heading text-lg">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Team", "Reference & Licensing", "Careers", "News & Press"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/60 hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 font-heading text-lg">Products</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/dramacha" className="text-white/60 hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <Play size={14} className="text-primary" /> DramaCha App
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-primary transition-colors text-sm">Content Library</Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-primary transition-colors text-sm">Partner Portal</Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-primary transition-colors text-sm">Localization Services</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 font-heading text-lg">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>123 Innovation Drive, Media District, Seoul, South Korea</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:partners@eshondl.com" className="hover:text-white transition-colors">partners@eshondl.com</a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+82212345678" className="hover:text-white transition-colors">+82 2 1234 5678</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} ESHON D&L. All rights reserved. DramaCha is a registered trademark.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Legal Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}