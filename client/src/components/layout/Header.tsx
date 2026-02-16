import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sun } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Subsidy", href: "/subsidy" },
    { name: "Projects", href: "/projects" },
    { name: "Calculator", href: "/calculator" },
    { name: "Contact", href: "/contact" },
  ];

  const NavLink = ({ item }: { item: typeof navItems[0] }) => (
    <Link href={item.href}>
      <span
        className={`text-sm font-medium transition-colors hover:text-secondary cursor-pointer ${
          location === item.href ? "text-secondary font-bold" : "text-white"
        }`}
        onClick={() => setIsOpen(false)}
      >
        {item.name}
      </span>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#002B5B] text-white shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/">
          <div className="flex items-center gap-2 text-xl font-bold font-heading text-white hover:opacity-90 transition-opacity cursor-pointer">
            <Sun className="h-8 w-8 text-secondary fill-secondary" />
            <span>Solar<span className="text-secondary">Solutions</span></span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink key={item.name} item={item} />
          ))}
          <Link href="/contact">
            <Button className="bg-secondary text-[#002B5B] hover:bg-secondary/90 font-bold ml-4">
              Get Quote
            </Button>
          </Link>
        </nav>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#002B5B] text-white border-l-white/10">
            <div className="flex flex-col gap-6 mt-10">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span 
                    className={`text-lg font-medium cursor-pointer ${
                      location === item.href ? "text-secondary" : "text-white"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
              <Link href="/contact">
                <Button className="bg-secondary text-[#002B5B] hover:bg-secondary/90 font-bold w-full">
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}