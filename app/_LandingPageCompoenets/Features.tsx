"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, ShieldCheck, Stethoscope, Truck } from "lucide-react";

function Features() {
  const [showVideo, setShowVideo] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  return (
    <section
      className="container mx-auto py-20 "
      style={{
        background: `radial-gradient(circle at ${cursorPosition.x}% ${cursorPosition.y}%, #e0f2fe, #f0f9ff, #f8fafc)`,
      }}
    >
      <div className="container px-4 md:px-6 ">
        <div className="text-center mb-16">
          <Badge className="mb-4">Why Choose Us</Badge>
          <h2 className="text-3xl font-bold">The MediCare Advantage</h2>
          <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
            We combine medical expertise with cutting-edge technology to deliver
            an exceptional experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {[
            {
              title: "Expert Consultation",
              description:
                "Get personalized advice from medical professionals for your specific needs",
              icon: <Stethoscope className="h-6 w-6" />,
              color: "bg-blue-50 text-blue-600",
            },
            {
              title: "Quality Assurance",
              description:
                "All products undergo rigorous testing and certification for medical use",
              icon: <ShieldCheck className="h-6 w-6" />,
              color: "bg-green-50 text-green-600",
            },
            {
              title: "Fast Delivery",
              description:
                "Expedited shipping options available for urgent medical requirements",
              icon: <Truck className="h-6 w-6" />,
              color: "bg-amber-50 text-amber-600",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="h-full p-6 hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div
                  className={`w-12 h-12 rounded-full ${feature.color} flex items-center justify-center mb-4`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-slate-900 rounded-3xl opacity-[0.03]" />
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4">Interactive Demo</Badge>
                <h3 className="text-2xl font-bold mb-4">
                  See Our Products in Action
                </h3>
                <p className="text-slate-600 mb-6">
                  Experience how our medical equipment works in real-world
                  scenarios through our interactive demonstrations.
                </p>
                <Button
                  className="rounded-full px-6 gap-2"
                  onClick={() => setShowVideo(true)}
                >
                  <Play className="h-4 w-4" />
                  Watch Demo
                </Button>
              </div>

              <div
                className="relative aspect-video bg-slate-100 rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => setShowVideo(true)}
              >
                <img
                  src="/placeholder.svg?height=400&width=600&text=Video+Thumbnail"
                  alt="Demo video thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <Play className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
