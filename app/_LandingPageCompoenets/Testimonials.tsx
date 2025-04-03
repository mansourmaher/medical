import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Star } from "lucide-react";

function Testimonials() {
  return (
    <section className="container mx-auto py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl font-bold">What Our Customers Say</h2>
          <p className="text-slate-600 mt-2">
            Real experiences from healthcare professionals and patients
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory gap-6">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="min-w-[300px] md:min-w-[400px] snap-center"
              >
                <Card className="h-full p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                      <img
                        src={`/placeholder.svg?height=48&width=48&text=${item}`}
                        alt={`Customer ${item}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">Dr. Customer {item}</h4>
                      <p className="text-sm text-slate-500">
                        Medical Specialist
                      </p>
                    </div>
                    <div className="ml-auto">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600">
                    "The quality of medical equipment from MediCare has exceeded
                    my expectations. The diagnostic tools are precise, reliable,
                    and have significantly improved our patient care
                    capabilities."
                  </p>
                </Card>
              </div>
            ))}
          </div>

          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full shadow-lg flex items-center justify-center cursor-pointer z-10 -ml-6 hidden md:flex">
            <ChevronRight className="h-5 w-5 rotate-180" />
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full shadow-lg flex items-center justify-center cursor-pointer z-10 -mr-6 hidden md:flex">
            <ChevronRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
