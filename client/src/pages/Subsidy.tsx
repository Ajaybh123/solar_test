import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, FileText, ArrowRight } from "lucide-react";

export default function Subsidy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Page Header */}
        <div className="bg-[#002B5B] py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">PM Solar Rooftop Subsidy 2024</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Get financial assistance from the government to install solar panels on your home.
            </p>
          </div>
        </div>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Subsidy Highlights */}
              <div className="bg-secondary/10 border border-secondary rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-[#002B5B] mb-6">Subsidy Scheme Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-800">Up to 40% Subsidy</h3>
                      <p className="text-sm text-gray-600">For residential systems up to 3kW capacity.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-800">20% Subsidy</h3>
                      <p className="text-sm text-gray-600">For systems above 3kW and up to 10kW.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-800">Net Metering</h3>
                      <p className="text-sm text-gray-600">Sell excess electricity back to the grid for credits.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-800">Direct Bank Transfer</h3>
                      <p className="text-sm text-gray-600">Subsidy amount credited directly to customer's account.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Eligibility */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-[#002B5B] mb-6">Eligibility Criteria</h2>
                <ul className="space-y-4 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    Must be an Indian citizen.
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    Property must be owned by the applicant (residential).
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    Valid electricity connection in applicant's name.
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    Shadow-free rooftop area should be available.
                  </li>
                </ul>
              </div>

              {/* Process */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-[#002B5B] mb-6">How to Apply?</h2>
                <div className="relative border-l-2 border-dashed border-[#002B5B]/30 ml-4 pl-8 space-y-8">
                  <div className="relative">
                    <span className="absolute -left-[41px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#002B5B] text-white font-bold text-sm">1</span>
                    <h3 className="font-bold text-lg mb-2">Book Site Visit</h3>
                    <p className="text-gray-600">Contact us to inspect your roof and suggest the best system size.</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[41px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#002B5B] text-white font-bold text-sm">2</span>
                    <h3 className="font-bold text-lg mb-2">Document Submission</h3>
                    <p className="text-gray-600">We help you submit necessary documents to the DISCOM portal.</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[41px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#002B5B] text-white font-bold text-sm">3</span>
                    <h3 className="font-bold text-lg mb-2">Installation & Commissioning</h3>
                    <p className="text-gray-600">Our team installs the system and gets the net meter approved.</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[41px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#002B5B] text-white font-bold text-sm">4</span>
                    <h3 className="font-bold text-lg mb-2">Receive Subsidy</h3>
                    <p className="text-gray-600">Get subsidy amount directly in your bank account within 30 days.</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center bg-[#002B5B] rounded-2xl p-10 text-white">
                <h3 className="text-2xl font-bold mb-4">Need Help with Subsidy?</h3>
                <p className="mb-8 text-gray-300">Our experts handle all the paperwork for you. Experience a hassle-free solar switch.</p>
                <Link href="/contact">
                  <Button size="lg" className="bg-secondary text-[#002B5B] hover:bg-secondary/90 font-bold px-8 h-12">
                    Apply For Subsidy Assistance <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}