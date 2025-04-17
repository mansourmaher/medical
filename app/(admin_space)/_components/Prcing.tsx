"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Edit3, Tag } from "lucide-react";
import { useState } from "react";

function Prcing() {
  const [promotion, setPromotion] = useState(false);
  return (
    <Card className="overflow-hidden">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 flex justify-between items-center border-b">
        <h3 className="font-semibold flex items-center">
          <Tag className="mr-2 h-4 w-4" />
          Pricing & Inventory
        </h3>
        <Button variant="ghost" size="sm">
          <Edit3 className="h-4 w-4" />
        </Button>
      </div>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <Label
                htmlFor="price"
                className="text-xs uppercase text-muted-foreground"
              >
                Price
              </Label>
            </div>
            <Input type="number" id="price" placeholder="$0.00" />
          </div>

          <div className="flex flex-col space-y-2 p-4 bg-slate-100 rounded-md">
            <div className="flex justify-between items-center ">
              <span>Promotion %</span>
              <Input
                type="number"
                id="promotion"
                placeholder="0%"
                className="w-16 text-center"
                disabled={!promotion}
              />
              <Switch
                id="promotion"
                checked={promotion}
                onCheckedChange={setPromotion}
                className="ml-2"
              />
            </div>
            {!promotion ? (
              <span className="text-xs text-muted-foreground">
                Enable to apply a discount percentage to the product price.
              </span>
            ) : (
              <span className="text-xs text-muted-foreground">
                Until you remove the promotion, the product will be sold at a
                his new price <strong>New price</strong>.
                <br />
              </span>
            )}
          </div>

          <div>
            <Label
              htmlFor="quantity"
              className="text-xs uppercase text-muted-foreground"
            >
              Quantity in Stock
            </Label>
            <div className="flex items-center mt-1">
              <Button variant="outline" size="icon" className="rounded-r-none">
                -
              </Button>
              <Input
                id="quantity"
                type="number"
                className="rounded-none text-center"
                value="100"
              />
              <Button variant="outline" size="icon" className="rounded-l-none">
                +
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Prcing;
