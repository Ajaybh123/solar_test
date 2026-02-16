import { Link } from "wouter";
import { Sun, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#002B5B] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-bold font-heading">
              <Sun className="h-6 w-6 text-secondary fill-secondary" />
              <span>Solar<span className="text-secondary">Solutions</span></span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              We are one of the fastest growing solar installation companies in India. 
              Switch to clean energy today and save up to 80% on your electricity bills.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-secondary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about"><a className="hover:text-secondary transition-colors">About Us</a></Link></li>
              <li><Link href="/services"><a className="hover:text-secondary transition-colors">Our Services</a></Link></li>
              <li><Link href="/projects"><a className="hover:text-secondary transition-colors">Projects</a></Link></li>
              <li><Link href="/subsidy"><a className="hover:text-secondary transition-colors">Subsidy Info</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-secondary transition-colors">Contact Us</a></Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-secondary">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services"><a className="hover:text-secondary transition-colors">Residential Rooftop</a></Link></li>
              <li><Link href="/services"><a className="hover:text-secondary transition-colors">Commercial Solar</a></Link></li>
              <li><Link href="/services"><a className="hover:text-secondary transition-colors">Industrial Plants</a></Link></li>
              <li><Link href="/services"><a className="hover:text-secondary transition-colors">Solar Water Pumps</a></Link></li>
              <li><Link href="/services"><a className="hover:text-secondary transition-colors">Maintenance</a></Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-secondary">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>123 Solar Park, Tech City, Delhi, India - 110001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span>info@solarsolutions.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Solar Solutions. All rights reserved. Government Approved Vendor.</p>
        </div>
      </div>
    </footer>
  );
}