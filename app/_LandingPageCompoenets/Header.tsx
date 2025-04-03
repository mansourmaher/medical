"use client";
import { Button } from "@/components/ui/button";
import { Heart, Search, Stethoscope } from "lucide-react";

function Header() {
  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md rounded-full shadow-lg px-2 py-2 flex items-center justify-between w-[90%] max-w-4xl">
      <div className="flex items-center gap-2 px-4">
        <Stethoscope className="h-5 w-5 text-primary" />
        <span className="font-bold text-lg">MediCare</span>
      </div>

      <div className="hidden md:flex items-center space-x-1">
        {["Products", "Professionals", "Patients", "About"].map((item) => (
          <Button key={item} variant="ghost" className="rounded-full text-sm">
            {item}
          </Button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Search className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Heart className="h-4 w-4" />
        </Button>
        <Button className="rounded-full">Sign In</Button>
      </div>
    </div>
  );
}

export default Header;
