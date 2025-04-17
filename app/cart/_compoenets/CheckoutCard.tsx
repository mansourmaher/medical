"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign } from "lucide-react";
import React from "react";

function CheckoutCard() {
  const [shippingMethod, setShippingMethod] = React.useState<
    "standard" | "express" | "economy" | undefined
  >("standard");
  const activeCartItems = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      originalPrice: 120,
      quantity: 1,
      image: "/path/to/image.jpg",
      color: "Red",
      inStock: true,
      estimatedDelivery: "2023-10-01",
      freeShipping: false,
      warranty: "1 year",
      saved: false,
    },
    {
      id: 2,
      name: "Product 2",
      price: 50,
      originalPrice: 60,
      quantity: 2,
      image: "/path/to/image.jpg",
      color: "Blue",
      inStock: true,
      estimatedDelivery: "2023-10-02",
      freeShipping: true,
      warranty: "6 months",
      saved: false,
    },
  ];
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky ">
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-semibold flex items-center gap-2 ">
          <DollarSign className="h-4 w-4 " />
          Order Summary
        </h2>
      </div>
      <div className="p-4 border-b border-gray-200">
        <div className="flex flex-col gap-2 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold">Subtotal</span>
            <span className="text-sm text-gray-500">$349.98</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold">Shipping</span>
            <span className="text-sm text-gray-500">$12.98</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold">Estimated Tax</span>
            <span className="text-sm text-gray-500">$3.98</span>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center p-4 ">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-lg font-semibold">$366.94</span>
        </div>
      </div>
      <div className="p-4 border-t border-gray-200">
        <span className="text-sm font-semibold ">Promo Code</span>
        <div className="flex flex-row items-center gap-2 mt-2">
          <Input
            type="text"
            placeholder="Enter promo code"
            className="mt-2 flex-1"
          />
          <Button className="mt-2 " variant="outline">
            Apply
          </Button>
        </div>
        <p className="text-xs text-slate-500 mt-1">
          Try "DISCOUNT20" for 20% off
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm font-semibold">Discount</span>
          <span className="text-sm text-gray-500">$0.00</span>
        </div>
      </div>
      <div className="mt-4 p-4 border-t border-gray-200">
        <Label className="text-sm font-medium">Shipping Method</Label>
        <div className="space-y-2 mt-2">
          <div
            className={`flex items-center justify-between p-3 border rounded-md cursor-pointer ${
              shippingMethod === "standard" ? "border-primary bg-primary/5" : ""
            }`}
            onClick={() => setShippingMethod("standard")}
          >
            <div className="flex items-center">
              <div
                className={`w-4 h-4 rounded-full border-2 mr-2 flex items-center justify-center ${
                  shippingMethod === "standard"
                    ? "border-primary"
                    : "border-slate-300"
                }`}
              >
                {shippingMethod === "standard" && (
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                )}
              </div>
              <div>
                <div className="font-medium text-sm">Standard Shipping</div>
                <div className="text-xs text-slate-500">3-5 business days</div>
              </div>
            </div>
            <div className="text-sm font-medium">
              {activeCartItems.some((item) => !item.freeShipping)
                ? "$5.99"
                : "Free"}
            </div>
          </div>

          <div
            className={`flex items-center justify-between p-3 border rounded-md cursor-pointer ${
              shippingMethod === "express" ? "border-primary bg-primary/5" : ""
            }`}
            onClick={() => setShippingMethod("express")}
          >
            <div className="flex items-center">
              <div
                className={`w-4 h-4 rounded-full border-2 mr-2 flex items-center justify-center ${
                  shippingMethod === "express"
                    ? "border-primary"
                    : "border-slate-300"
                }`}
              >
                {shippingMethod === "express" && (
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                )}
              </div>
              <div>
                <div className="font-medium text-sm">Express Shipping</div>
                <div className="text-xs text-slate-500">1-2 business days</div>
              </div>
            </div>
            <div className="text-sm font-medium">$12.99</div>
          </div>

          <div
            className={`flex items-center justify-between p-3 border rounded-md cursor-pointer ${
              shippingMethod === "economy" ? "border-primary bg-primary/5" : ""
            }`}
            onClick={() => setShippingMethod("economy")}
          >
            <div className="flex items-center">
              <div
                className={`w-4 h-4 rounded-full border-2 mr-2 flex items-center justify-center ${
                  shippingMethod === "economy"
                    ? "border-primary"
                    : "border-slate-300"
                }`}
              >
                {shippingMethod === "economy" && (
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                )}
              </div>
              <div>
                <div className="font-medium text-sm">Economy Shipping</div>
                <div className="text-xs text-slate-500">5-7 business days</div>
              </div>
            </div>
            <div className="text-sm font-medium">$3.99</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutCard;
