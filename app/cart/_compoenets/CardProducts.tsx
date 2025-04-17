"use client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Check, Clock, Heart, ShoppingBag, Trash2, Truck } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import equipement from "../../../public/equipment.jpg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CartItem {
  item: {
    id: number;
    name: string;
    price: number;
    originalPrice: number;
    quantity: number;
    image: string;
    color: string;
    inStock: boolean;
    estimatedDelivery: string;
    freeShipping: boolean;
    warranty: string;
    saved: boolean;
  };
}
const CardItem = ({ item }: CartItem) => {
  const [quantityToAdd, setQuantityToAdd] = useState(1);
  return (
    <>
      <div className="flex flex-col items-center lg:flex-row lg:items-start  gap-4 p-4 border bg-primary/5 border-primary rounded-md hover:bg-primary/20 transition duration-200 ease-in-out cursor-pointer">
        <div className="w-full sm:w-24 h-24 bg-slate-100 rounded-md flex-shrink-0 flex items-center justify-center">
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className="flex flex-row justify-between w-full">
          <div>
            {" "}
            <span>
              <h2 className="text-lg font-semibold">{item.name}</h2>
            </span>
            <div className="flex items-center gap-2 mt-2">
              {item.inStock ? (
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-200"
                >
                  <Check className="h-3 w-3 mr-1" />
                  In Stock
                </Badge>
              ) : (
                <Badge
                  variant="outline"
                  className="bg-amber-50 text-amber-700 border-amber-200"
                >
                  <Clock className="h-3 w-3 mr-1" />
                  Ships in 1-2 weeks
                </Badge>
              )}
              {item.freeShipping && (
                <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                  <Truck className="h-3 w-3 mr-1" />
                  Free Shipping
                </Badge>
              )}
            </div>
            <div className="mt-4 flex items-center ">
              <Button
                variant={"outline"}
                size={"icon"}
                className="text-sm font-semibold "
                onClick={() => {
                  setQuantityToAdd((prev) => Math.max(prev - 1, 1));
                }}
              >
                -
              </Button>
              <Input
                type="text"
                className="w-12 text-center"
                value={quantityToAdd}
                readOnly
              />
              <Button
                variant={"outline"}
                size={"sm"}
                className="text-sm font-semibold "
                onClick={() => {
                  setQuantityToAdd((prev) => prev + 1);
                }}
              >
                +
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-end justify-between  ">
            <div className="flex flex-col items-end ">
              <div className="flex flex-row ">
                <span className="text-2xl font-bold text-gray-900 mr-2">
                  ${item.price.toFixed(2)}
                </span>
                <div>
                  <div className="flex  space-x-2 mt-2 ">
                    {" "}
                    <span className="text-slate-500 line-through">
                      ${item.originalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-200"
                >
                  <Check className="h-3 w-3 mr-1" />
                  Save ${(item.originalPrice - item.price).toFixed(2)}
                </Badge>
              </div>
            </div>
            <div className="flex  items-center gap-2 w-full">
              <Button
                variant={"outline"}
                className="text-sm font-semibold cursor-pointer "
              >
                <Heart className="h-4 w-4" />
                Save for Later
              </Button>
              <Button
                variant={"outline"}
                className="text-sm font-semibold cursor-pointer"
                onClick={() => {
                  setQuantityToAdd((prev) => prev + 1);
                }}
              >
                <Trash2 className="h-4 w-4" />
                Remove
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b px-4 border-gray-200 "></div>
    </>
  );
};

function CardProducts() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 199.99,
      originalPrice: 249.99,
      quantity: 1,
      image: equipement.src,
      color: "Black",
      inStock: true,
      estimatedDelivery: "2-3 business days",
      freeShipping: true,
      warranty: "2-year warranty",
      saved: false,
    },
    {
      id: 2,
      name: "Smart Fitness Tracker",
      price: 89.99,
      originalPrice: 89.99,
      quantity: 1,
      image:
        "data:image/jpeg;base64,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",
      color: "Blue",
      inStock: true,
      estimatedDelivery: "1-2 business days",
      freeShipping: true,
      warranty: "1-year warranty",
      saved: false,
    },
    {
      id: 3,
      name: "Portable Bluetooth Speaker",
      price: 59.99,
      originalPrice: 79.99,
      quantity: 1,
      image:
        "data:image/jpeg;base64,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",
      color: "Red",
      inStock: true,
      estimatedDelivery: "2-3 business days",
      freeShipping: false,
      warranty: "1-year warranty",
      saved: false,
    },
  ]);
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-24">
      <div className="p-4 border-b">
        <h2 className="font-semibold flex gap-2 items-center">
          <ShoppingBag className="h-4 w-4 mr-2" />
          Shopping Cart
        </h2>
      </div>

      <div className="flex flex-col gap-4 p-4">
        <CardItem item={cartItems[0]} />
        <CardItem item={cartItems[1]} />
        <CardItem item={cartItems[2]} />
      </div>
    </div>
  );
}

export default CardProducts;
