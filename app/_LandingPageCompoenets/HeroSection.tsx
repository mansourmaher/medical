"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, ShieldCheck, Star, Truck } from "lucide-react";
import docteurs from "../../public/docteurs-image.jpg";

function HeroSection() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section
      className="relative min-h-[90vh] flex items-center p-22 overflow-hidden pt-34 "
      style={{
        background: `radial-gradient(circle at ${cursorPosition.x}% ${cursorPosition.y}%, #e0f2fe, #f0f9ff, #f8fafc)`,
      }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-4">
                Transforming Healthcare Access
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Medical Excellence,
                <span className="text-primary block mt-2">
                  At Your Fingertips
                </span>
              </h1>
              <p className="mt-4 text-lg text-slate-600 max-w-md">
                Discover premium medical equipment and supplies for
                professionals and patients, delivered with care and expertise.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                size="lg"
                className="rounded-full px-6"
                variant={"primary"}
              >
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-6 gap-2"
                onClick={() => setShowVideo(true)}
              >
                <Play className="h-4 w-4" />
                Watch How It Works
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-6 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={`/placeholder.svg?height=40&width=40&text=${i}`}
                      alt={`User ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-600">From 2,000+ reviews</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden">
              <img
                src={docteurs.src}
                alt="Featured medical device"
                className="w-full h-auto"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white font-bold text-xl">
                  Advanced Monitoring System
                </h3>
                <p className="text-white/80 text-sm">
                  Professional-grade accuracy for home use
                </p>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-10 -right-10 bg-white rounded-xl shadow-lg p-4 w-40 z-20"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <ShieldCheck className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-medium">FDA Approved</p>
                  <p className="text-xs text-slate-500">Medical Grade</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 w-48 z-20"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Truck className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-medium">Fast Delivery</p>
                  <p className="text-xs text-slate-500">2-3 Business Days</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <p className="text-sm text-slate-500 mb-2">Scroll to explore</p>
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-slate-300 flex items-center justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-slate-400 rounded-full"
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
