import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import React from "react";

interface FeatureProps {
  features: string[];
}
function KeyFeatures({ features }: FeatureProps) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium mb-4">Key Features</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {features.slice(0, 6).map((feature, index) => (
          <div key={index} className="flex items-start">
            <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
              <Check className="h-3 w-3 text-primary" />
            </div>
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
      {features.length > 6 && (
        <Button variant="link" className="text-sm p-0 h-auto mt-2">
          See all features
        </Button>
      )}
    </div>
  );
}

export default KeyFeatures;
