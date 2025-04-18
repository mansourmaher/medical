import { Badge } from "@/components/ui/badge";
import { ShieldCheck } from "lucide-react";
import React from "react";

interface Certififcations_and_Recemended {
  certifications: string[];
  usageScenarios: string[];
}

function Certififcations_and_Recemended({
  certifications,
  usageScenarios,
}: Certififcations_and_Recemended) {
  return (
    <div>
      {" "}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Certifications</h3>
        <div className="flex flex-wrap gap-2">
          {certifications.map((cert, index) => (
            <Badge
              key={index}
              variant="outline"
              className="bg-slate-50 py-1.5 px-3 flex items-center gap-1.5"
            >
              <ShieldCheck className="h-4 w-4 text-green-600" />
              {cert}
            </Badge>
          ))}
        </div>
      </div>
      {/* Usage Scenarios */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Recommended For</h3>
        <div className="flex flex-wrap gap-2">
          {usageScenarios.map((scenario, index) => (
            <Badge
              key={index}
              variant="outline"
              className="bg-slate-50 py-1.5 px-3"
            >
              {scenario}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certififcations_and_Recemended;
