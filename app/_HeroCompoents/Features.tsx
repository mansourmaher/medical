import { Clock, RefreshCw, Truck, type LucideIcon } from "lucide-react";

export function FeatureCard() {
  return (
    <div className="container mx-auto px-4 -mt-16 relative z-10">
      <div className="bg-white rounded-lg shadow-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <Truck className="h-8 w-8 text-blue-500" />
          </div>
          <h3 className="text-xl font-semibold text-blue-500 mb-2">
            Livraison Gratuite
          </h3>
          <p className="text-gray-600">à partir de 200 TND d'achat</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <RefreshCw className="h-8 w-8 text-blue-500" />
          </div>
          <h3 className="text-xl font-semibold text-blue-500 mb-2">
            100% de remboursement
          </h3>
          <p className="text-gray-600">
            Vous avez 10 jours pour retourner le produit
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <Clock className="h-8 w-8 text-blue-500" />
          </div>
          <h3 className="text-xl font-semibold text-blue-500 mb-2">
            Support 24/7
          </h3>
          <p className="text-gray-600">Contactez-nous 24/24.</p>
        </div>
      </div>
    </div>
  );
}
