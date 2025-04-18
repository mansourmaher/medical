import { Badge } from "@/components/ui/badge";
import { BadgeCheck, Zap } from "lucide-react";
import React from "react";

interface InformationSectionProps {
  details: {
    name: string;
    description: string;
    price: number;
    discountPrice: number;
    discount: number;
    rating: number;
    reviewCount: number;
    brand: string;
    category: string;
  };
}

function InformationSection({ details }: InformationSectionProps) {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">{details.name}</h2>
      <p className="text-gray-700 mb-4">{details.description}</p>
      <div className="flex flex-row mb-4">
        <span className="text-2xl font-bold text-gray-900 mr-2">
          ${details.price.toFixed(2)}
        </span>
        {details.discount > 0 && (
          <div className="flex items-center space-x-2 mt-4">
            {" "}
            <span className="text-red-500 line-through">
              ${details.discountPrice.toFixed(2)}
            </span>
            <Badge className="bg-green-100 text-green-400">
              <span>Save ${details.price - details.discount}</span>
            </Badge>
          </div>
        )}
      </div>
      <div className="flex items-center mb-2">
        <div>
          <Badge className="bg-blue-100 text-blue-400 mr-2 ">
            <BadgeCheck className="h-4 w-4 text-blue-400" />
            {details.category}
          </Badge>
          <Badge className="bg-blue-100 text-blue-400 mr-2">
            <Zap className="h-4 w-4 text-blue-400" />
            {details.brand}
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default InformationSection;
