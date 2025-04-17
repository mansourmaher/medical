import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    ImagePlus
} from "lucide-react";

function Preview() {
  return (
    <Card>
    <CardContent className="p-0">
      <div className="bg-white p-6 border-b text-center">
        <p className="text-sm text-muted-foreground">
          This is how customers will see your product
        </p>
      </div>

      <div className="p-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Product Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center">
              <ImagePlus className="h-12 w-12 text-slate-300" />
            </div>

            <div className="grid grid-cols-4 gap-2">
              <div className="aspect-square bg-slate-100 rounded-md"></div>
              <div className="aspect-square bg-slate-100 rounded-md"></div>
              <div className="aspect-square bg-slate-100 rounded-md"></div>
              <div className="aspect-square bg-slate-100 rounded-md"></div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Product Name</h2>
              <p className="text-muted-foreground">
                By Brand Name
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Badge>Medical</Badge>
              <Badge>Equipment</Badge>
            </div>

            <div>
              <div className="text-3xl font-bold">$99.00</div>
              <div className="text-sm text-muted-foreground">
                In Stock: 100 units
              </div>
            </div>

            <div className="space-y-2">
              <Button className="w-full">Add to Cart</Button>
              <Button variant="outline" className="w-full">
                Add to Wishlist
              </Button>
            </div>

            <div>
              <h3 className="font-medium mb-2">Description</h3>
              <p className="text-sm text-muted-foreground">
                Main product description will appear here.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">
                Technical Details
              </h3>
              <p className="text-sm text-muted-foreground">
                Additional technical information will appear here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
  )
}

export default Preview