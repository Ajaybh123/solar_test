import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-[#002B5B]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-solar.png" 
          alt="Rooftop Solar Installation" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002B5B] via-[#002B5B]/80 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-2xl text-white space-y-6 animate-in slide-in-from-left duration-700">
          <div className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full border border-secondary/30 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-secondary font-bold text-sm tracking-wide uppercase">Government Approved Solar Installer</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
            Switch to Solar & Save Up To <span className="text-secondary">80%</span> On Electricity Bills
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200">
            Government Subsidy Available Under PM Solar Yojana – Book Free Site Visit Today
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-secondary text-[#002B5B] hover:bg-secondary/90 font-bold text-lg h-14 px-8 shadow-lg shadow-secondary/20">
                Get Free Quote
              </Button>
            </Link>
            <Link href="/subsidy">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                Apply For Subsidy
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-6 pt-4 text-sm font-medium text-gray-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-secondary" />
              <span>MNRE Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-secondary" />
              <span>25 Years Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}