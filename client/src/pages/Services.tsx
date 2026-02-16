import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Home, Building2, Factory, Zap, Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Home className="h-12 w-12 text-secondary" />,
      title: "Residential Solar",
      capacity: "1kW – 10kW",
      features: ["Net Metering Support", "Subsidy Assistance", "25 Years Warranty", "App Monitoring"],
      desc: "Perfect for independent houses and villas. Cut your electricity bill to zero."
    },
    {
      icon: <Building2 className="h-12 w-12 text-secondary" />,
      title: "Commercial Solar",
      capacity: "10kW – 100kW",
      features: ["Faster ROI", "3–5 Years Payback", "Tax Benefits", "OpEx/CapEx Models"],
      desc: "Ideal for offices, schools, hospitals, and showrooms. Reduce operational costs."
    },
    {
      icon: <Factory className="h-12 w-12 text-secondary" />,
      title: "Industrial Solar",
      capacity: "100kW+",
      features: ["Customized Design", "Load Analysis", "Grid Sync Technology", "Annual Maintenance"],
      desc: "High-capacity plants for factories and industries with heavy power consumption."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Page Header */}
        <div className="bg-[#002B5B] py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Services</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Customized solar solutions for every need. From small homes to large factories.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="flex flex-col h-full hover:shadow-xl transition-shadow border-t-4 border-t-secondary">
                  <CardHeader>
                    <div className="mb-4 p-4 bg-[#002B5B]/5 rounded-full w-fit">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold font-heading text-[#002B5B]">{service.title}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-secondary">{service.capacity}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-6">{service.desc}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <Check className="h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/contact" className="w-full">
                      <Button className="w-full bg-[#002B5B] text-white hover:bg-[#002B5B]/90 font-bold">Get Quote</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-heading font-bold text-[#002B5B] mb-6">Return on Investment (ROI)</h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Solar is not just an expense, it's an investment with guaranteed returns. Most solar systems pay for themselves within 3-5 years, after which you enjoy free electricity for the next 20+ years.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="p-2 bg-green-100 rounded-lg"><Zap className="h-6 w-6 text-green-600" /></div>
                    <div>
                      <h4 className="font-bold text-[#002B5B]">Immediate Savings</h4>
                      <p className="text-sm text-gray-600">Bill reduction starts from Day 1.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-2 bg-green-100 rounded-lg"><Zap className="h-6 w-6 text-green-600" /></div>
                    <div>
                      <h4 className="font-bold text-[#002B5B]">High Returns</h4>
                      <p className="text-sm text-gray-600">ROI of 20-30% per annum, better than FD or Mutual Funds.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="h-64 flex items-end justify-between gap-4">
                  {/* Simple Bar Chart Visualization using CSS */}
                  <div className="w-full flex flex-col justify-end items-center gap-2">
                    <div className="h-[20%] w-full bg-gray-200 rounded-t-md relative group">
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold">Year 1</span>
                    </div>
                    <span className="text-xs text-gray-500">Inv</span>
                  </div>
                  <div className="w-full flex flex-col justify-end items-center gap-2">
                    <div className="h-[40%] w-full bg-secondary/50 rounded-t-md relative">
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold">Year 2</span>
                    </div>
                    <span className="text-xs text-gray-500">Save</span>
                  </div>
                  <div className="w-full flex flex-col justify-end items-center gap-2">
                    <div className="h-[60%] w-full bg-secondary/70 rounded-t-md relative">
                       <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold">Year 3</span>
                    </div>
                    <span className="text-xs text-gray-500">Save</span>
                  </div>
                  <div className="w-full flex flex-col justify-end items-center gap-2">
                    <div className="h-[80%] w-full bg-secondary/90 rounded-t-md relative">
                       <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold">Year 4</span>
                    </div>
                    <span className="text-xs text-gray-500">Break Even</span>
                  </div>
                  <div className="w-full flex flex-col justify-end items-center gap-2">
                    <div className="h-[100%] w-full bg-secondary rounded-t-md relative">
                       <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold">Year 5+</span>
                    </div>
                    <span className="text-xs text-gray-500">Profit</span>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-500 mt-4 font-medium">Cumulative Savings vs Investment</p>
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