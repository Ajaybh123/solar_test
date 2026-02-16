import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { CheckCircle2, Award, Users, MapPin } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Page Header */}
        <div className="bg-[#002B5B] py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About Us</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Leading the solar revolution in India with world-class technology and service.
            </p>
          </div>
        </div>

        {/* Company Intro */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <img 
                  src="/images/hero-solar.png" 
                  alt="Solar Installation Team" 
                  className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-video"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-heading font-bold text-[#002B5B] mb-6">Who We Are</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We are one of the fastest growing solar installation companies in India, dedicated to promoting clean energy and affordable power for everyone. With over a decade of experience, we have successfully installed 500+ solar plants across residential, commercial, and industrial sectors.
                </p>
                <div className="bg-secondary/10 p-6 rounded-xl border border-secondary/20">
                  <h3 className="text-xl font-bold text-[#002B5B] mb-2">Our Mission</h3>
                  <p className="text-gray-700 italic">
                    "To accelerate India's transition to renewable energy by providing high-quality, affordable, and sustainable solar solutions to every household and business."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-[#002B5B] mb-12 text-center">Certifications & Approvals</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                <Award className="h-16 w-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">MNRE Registered</h3>
                <p className="text-gray-600">Authorized vendor by Ministry of New and Renewable Energy</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                <CheckCircle2 className="h-16 w-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">ISO Certified</h3>
                <p className="text-gray-600">ISO 9001:2015 certified for Quality Management Systems</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                <Users className="h-16 w-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Govt Approved</h3>
                <p className="text-gray-600">Empaneled with state electricity boards (DISCOMs)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-heading font-bold text-[#002B5B] mb-12">Service Areas</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Delhi', 'Jaipur', 'Ahmedabad', 'Bengaluru', 'Mumbai', 'Surat', 'Pune', 'Lucknow'].map((city) => (
                <div key={city} className="flex items-center justify-center gap-2 p-4 bg-white shadow-md rounded-lg border border-gray-100">
                  <MapPin className="h-5 w-5 text-secondary" />
                  <span className="font-bold text-gray-700">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}