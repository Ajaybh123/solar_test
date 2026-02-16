import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useState, useEffect } from "react";
import { Zap, IndianRupee, CalendarClock } from "lucide-react";

export default function Calculator() {
  const [systemSize, setSystemSize] = useState(3); // kW
  const [costPerKw] = useState(60000); // Avg cost per kW in India
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(9); // %
  const [tenure, setTenure] = useState(5); // Years

  const [totalCost, setTotalCost] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [emi, setEmi] = useState(0);
  const [monthlySavings, setMonthlySavings] = useState(0);

  useEffect(() => {
    const cost = systemSize * costPerKw;
    const dp = (cost * downPaymentPercent) / 100;
    const loan = cost - dp;
    
    // EMI Calculation
    // P x R x (1+R)^N / [(1+R)^N-1]
    const r = interestRate / 12 / 100; // Monthly interest
    const n = tenure * 12; // Months
    
    const calculatedEmi = (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    
    // Savings Calculation (Approx ₹1200 per kW per month)
    const savings = systemSize * 1200;

    setTotalCost(cost);
    setDownPayment(dp);
    setLoanAmount(loan);
    setEmi(Math.round(calculatedEmi));
    setMonthlySavings(Math.round(savings));

  }, [systemSize, downPaymentPercent, interestRate, tenure, costPerKw]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Page Header */}
        <div className="bg-[#002B5B] py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Solar EMI & Savings Calculator</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Plan your solar investment. Check estimated cost, EMI, and savings.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Inputs */}
              <Card className="border-t-4 border-t-secondary">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[#002B5B]">System Configuration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label className="font-bold text-gray-700">System Size (kW)</Label>
                      <span className="font-bold text-secondary text-lg">{systemSize} kW</span>
                    </div>
                    <Slider 
                      value={[systemSize]} 
                      onValueChange={(val) => setSystemSize(val[0])} 
                      min={1} 
                      max={20} 
                      step={1}
                      className="py-2"
                    />
                    <p className="text-xs text-gray-500">1kW requires approx 100 sq.ft shade-free area.</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label className="font-bold text-gray-700">Down Payment (%)</Label>
                      <span className="font-bold text-secondary text-lg">{downPaymentPercent}%</span>
                    </div>
                    <Slider 
                      value={[downPaymentPercent]} 
                      onValueChange={(val) => setDownPaymentPercent(val[0])} 
                      min={10} 
                      max={50} 
                      step={5}
                      className="py-2"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Interest Rate (%)</Label>
                      <Input 
                        type="number" 
                        value={interestRate} 
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Loan Tenure (Years)</Label>
                      <Input 
                        type="number" 
                        value={tenure} 
                        onChange={(e) => setTenure(Number(e.target.value))}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Results */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-[#002B5B] text-white border-none">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-300 text-sm">Monthly EMI</span>
                        <IndianRupee className="h-5 w-5 text-secondary" />
                      </div>
                      <div className="text-3xl font-bold text-secondary">₹{emi.toLocaleString()}</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-green-600 text-white border-none">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-100 text-sm">Monthly Bill Savings</span>
                        <Zap className="h-5 w-5 text-yellow-300" />
                      </div>
                      <div className="text-3xl font-bold text-white">₹{monthlySavings.toLocaleString()}</div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-bold text-lg text-gray-800 border-b pb-2">Financial Breakdown</h3>
                    
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Total System Cost</span>
                      <span className="font-bold">₹{totalCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Down Payment</span>
                      <span className="font-bold">₹{downPayment.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Loan Amount</span>
                      <span className="font-bold">₹{loanAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between py-2 pt-4">
                      <span className="text-gray-600 font-bold flex items-center gap-2">
                        <CalendarClock className="h-4 w-4" /> Payback Period
                      </span>
                      <span className="font-bold text-green-600">~ {(totalCost / (monthlySavings * 12)).toFixed(1)} Years</span>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <p className="text-sm text-gray-600 italic">
                    * Note: This is an estimation. Actual savings depend on sun availability, panel efficiency, and government policies. Does not include subsidy calculation in cost.
                  </p>
                </div>
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