import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  mobile: z.string().min(10, "Valid mobile number is required"),
  city: z.string().min(1, "Please select a city"),
  bill: z.string().min(1, "Please enter monthly bill"),
});

export function ContactCTA() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      mobile: "",
      city: "",
      bill: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Request Submitted!",
      description: "Our solar expert will contact you shortly.",
    });
    form.reset();
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-10 bg-[#002B5B] text-white flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Ready to Switch to Solar?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book your free site survey today and get a customized proposal for your home or business.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-[#002B5B] font-bold">1</div>
                <span>Fill the form with your details</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-[#002B5B] font-bold">2</div>
                <span>Get a free consultation call</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-[#002B5B] font-bold">3</div>
                <span>Site visit & final quotation</span>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/2 p-10">
            <h3 className="text-2xl font-bold font-heading text-[#002B5B] mb-6">Book Free Site Survey</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter mobile number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select City" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="delhi">Delhi</SelectItem>
                            <SelectItem value="jaipur">Jaipur</SelectItem>
                            <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
                            <SelectItem value="bengaluru">Bengaluru</SelectItem>
                            <SelectItem value="mumbai">Mumbai</SelectItem>
                            <SelectItem value="surat">Surat</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="bill"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Monthly Electricity Bill</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1000-2000">₹1,000 - ₹2,000</SelectItem>
                            <SelectItem value="2000-5000">₹2,000 - ₹5,000</SelectItem>
                            <SelectItem value="5000-10000">₹5,000 - ₹10,000</SelectItem>
                            <SelectItem value="10000+">Above ₹10,000</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-[#002B5B] text-white hover:bg-[#002B5B]/90 font-bold">
                  Submit Request
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}