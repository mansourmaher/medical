import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Award, Heart, Minus, Plus, ShoppingCart, Truck } from "lucide-react";
import React from "react";

function Purchase() {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-4">
        <div>
          <Label htmlFor="quantity" className="text-sm font-medium">
            Quantity
          </Label>
          <div className="flex items-center mt-1">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-r-none"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <Input
              id="quantity"
              type="number"
              className="h-10 w-16 rounded-none text-center"
              min={1}
            />
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-l-none"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex-1">
          <Label className="text-sm font-medium">Estimated Delivery</Label>
          <div className="flex items-center mt-1 text-sm">
            <Truck className="h-4 w-4 mr-2 text-slate-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        <Button size="lg" className="w-full">
          <ShoppingCart className="h-5 w-5 mr-2" />
          Add to Cart
        </Button>

        <Button variant="outline" size="lg" className="w-full">
          <Heart
            className="h-5 w-5 mr-2
              fill-red-500 text-red-500"
          />
          "Add to Wishlist"
        </Button>
      </div>

      <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
        <h3 className="font-medium flex items-center mb-2">
          <Award className="h-5 w-5 mr-2 text-primary" />
          Purchase Options
        </h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="radio"
              id="purchase-standard"
              name="purchase-option"
              className="h-4 w-4 text-primary"
              defaultChecked
            />
            <label htmlFor="purchase-standard" className="ml-2 text-sm">
              <span className="font-medium">Standard Purchase</span> - One-time
              payment
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="purchase-subscription"
              name="purchase-option"
              className="h-4 w-4 text-primary"
            />
            <label htmlFor="purchase-subscription" className="ml-2 text-sm">
              <span className="font-medium">Subscription</span> - Save 10% with
              annual maintenance plan
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="purchase-leasing"
              name="purchase-option"
              className="h-4 w-4 text-primary"
            />
            <label htmlFor="purchase-leasing" className="ml-2 text-sm">
              <span className="font-medium">Leasing Option</span> -
              $199.99/month for 12 months
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purchase;
