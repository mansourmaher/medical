"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Heart } from "lucide-react";
import { useState } from "react";
import equipement from "../../public/equipment.jpg";
import { useRouter } from "next/navigation";

function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("featured");
  const router = useRouter();

  return (
    <section className="container mx-auto py-12 relative">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Explore Our Categories</h2>
          <p className="text-slate-600 mt-2">
            Discover specialized equipment for every medical need
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            "Featured",
            "Diagnostic",
            "Monitoring",
            "Surgical",
            "Rehabilitation",
          ].map((category) => (
            <Button
              key={category}
              variant={
                activeCategory === category.toLowerCase()
                  ? "primary"
                  : "outline"
              }
              className="rounded-full cursor-pointer px-6 py-2"
              onClick={() => setActiveCategory(category.toLowerCase())}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item * 0.1 }}
              className="group"
            >
              <Card
                className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg cursor-pointer"
                onClick={() => {
                  router.push("/product/1");
                }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={equipement.src}
                    alt={`Medical product ${item}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Button
                    className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    size="sm"
                    variant={"primary"}
                  >
                    Quick View
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8 rounded-full"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">Medical Device {item}</h3>
                      <p className="text-sm text-slate-500">
                        Professional Grade
                      </p>
                    </div>
                    <Badge variant="outline">New</Badge>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="font-bold">
                      ${(item * 49.99).toFixed(2)}
                    </div>
                    <div className="text-sm text-slate-500">★★★★★</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="rounded-full px-8">
            View All Products
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
