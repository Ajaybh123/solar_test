import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calculator } from "lucide-react";

export function CalculatorTeaser() {
  return (
    <section className="py-16 bg-[#002B5B] relative overflow-hidden">
      {/* Abstract Pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <Calculator className="h-16 w-16 text-secondary mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
          Check How Much You Can Save With Solar
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
          Calculate your estimated savings, ROI, and payback period instantly with our advanced solar calculator.
        </p>
        <Link href="/calculator">
          <Button size="lg" className="bg-secondary text-[#002B5B] hover:bg-secondary/90 font-bold text-lg px-10 h-14">
            Calculate Now
          </Button>
        </Link>
      </div>
    </section>
  );
}