import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Camera,
  ChevronRight,
  Edit3,
  ImagePlus,
  Layers,
  Package,
  Palette,
  Plus,
  Save,
  Tag,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProductCreatorWorkspace() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with progress indicator */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold">Product Creator Studio</h1>
            <p className="text-muted-foreground">
              Bring your medical product to life
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
            <Badge variant="outline" className="bg-primary text-white">
              1
            </Badge>
            <span className="text-sm font-medium">Details</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <Badge variant="outline">2</Badge>
            <span className="text-sm text-muted-foreground">Pricing</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <Badge variant="outline">3</Badge>
            <span className="text-sm text-muted-foreground">Publish</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left sidebar - Quick actions */}

          {/* Main workspace - 3 columns on large screens */}
          <div className="lg:col-span-5 space-y-6">
            <Tabs defaultValue="canvas" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="canvas">Visual Canvas</TabsTrigger>
                <TabsTrigger value="preview">Customer Preview</TabsTrigger>
                <TabsTrigger value="data">Data View</TabsTrigger>
              </TabsList>

              {/* Visual Canvas Tab */}
              <TabsContent value="canvas" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Product Identity Card */}
                  <Card className="overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 flex justify-between items-center border-b">
                      <h3 className="font-semibold flex items-center">
                        <Package className="mr-2 h-4 w-4" />
                        Product Identity
                      </h3>
                      <Button variant="ghost" size="sm">
                        <Edit3 className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <Label
                            htmlFor="name"
                            className="text-xs uppercase text-muted-foreground"
                          >
                            Name
                          </Label>
                          <Input
                            id="name"
                            placeholder="Enter product name"
                            className="mt-1 text-lg font-medium"
                          />
                        </div>

                        <div>
                          <Label
                            htmlFor="brand"
                            className="text-xs uppercase text-muted-foreground"
                          >
                            Brand
                          </Label>
                          <Input
                            id="brand"
                            placeholder="Product brand"
                            className="mt-1"
                          />
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                            Medical
                          </Badge>
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                            Equipment
                          </Badge>
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 flex items-center gap-1">
                            <Plus className="h-3 w-3" />
                            Add Category
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Visual Gallery Card */}
                  <Card className="overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 flex justify-between items-center border-b">
                      <h3 className="font-semibold flex items-center">
                        <Camera className="mr-2 h-4 w-4" />
                        Visual Gallery
                      </h3>
                      <Button variant="ghost" size="sm">
                        <Edit3 className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="aspect-square bg-slate-100 rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-slate-200 transition-colors border-2 border-dashed">
                          <ImagePlus className="h-8 w-8 text-slate-400 mb-2" />
                          <span className="text-xs text-slate-500">
                            Main Image
                          </span>
                        </div>

                        <div className="aspect-square bg-slate-100 rounded-md flex items-center justify-center cursor-pointer hover:bg-slate-200 transition-colors border-2 border-dashed">
                          <Plus className="h-6 w-6 text-slate-400" />
                        </div>

                        <div className="aspect-square bg-slate-100 rounded-md flex items-center justify-center cursor-pointer hover:bg-slate-200 transition-colors border-2 border-dashed">
                          <Plus className="h-6 w-6 text-slate-400" />
                        </div>

                        <div className="aspect-square bg-slate-100 rounded-md flex items-center justify-center cursor-pointer hover:bg-slate-200 transition-colors border-2 border-dashed">
                          <Plus className="h-6 w-6 text-slate-400" />
                        </div>
                      </div>

                      <div className="mt-4 text-center">
                        <Button variant="outline" size="sm" className="w-full">
                          <ImagePlus className="h-4 w-4 mr-2" />
                          Drag & Drop or Browse
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Description Card */}
                  <Card className="overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 flex justify-between items-center border-b">
                      <h3 className="font-semibold flex items-center">
                        <Layers className="mr-2 h-4 w-4" />
                        Product Description
                      </h3>
                      <Button variant="ghost" size="sm">
                        <Edit3 className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <Label
                            htmlFor="desc1"
                            className="text-xs uppercase text-muted-foreground"
                          >
                            Primary Description
                          </Label>
                          <Textarea
                            id="desc1"
                            placeholder="Main product description"
                            className="mt-1 resize-none"
                            rows={3}
                          />
                        </div>

                        <div>
                          <Label
                            htmlFor="desc2"
                            className="text-xs uppercase text-muted-foreground"
                          >
                            Technical Details
                          </Label>
                          <Textarea
                            id="desc2"
                            placeholder="Additional technical information"
                            className="mt-1 resize-none"
                            rows={3}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Pricing & Inventory Card */}
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
                            <span className="text-2xl font-bold">$99.00</span>
                          </div>
                          <Slider
                            defaultValue={[99]}
                            max={500}
                            step={1}
                            className="mt-2"
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Switch id="promotion" />
                            <Label htmlFor="promotion">Promotional Price</Label>
                          </div>
                          <Input
                            type="number"
                            className="w-24"
                            placeholder="$0.00"
                            disabled
                          />
                        </div>

                        <div>
                          <Label
                            htmlFor="quantity"
                            className="text-xs uppercase text-muted-foreground"
                          >
                            Quantity in Stock
                          </Label>
                          <div className="flex items-center mt-1">
                            <Button
                              variant="outline"
                              size="icon"
                              className="rounded-r-none"
                            >
                              -
                            </Button>
                            <Input
                              id="quantity"
                              type="number"
                              className="rounded-none text-center"
                              value="100"
                            />
                            <Button
                              variant="outline"
                              size="icon"
                              className="rounded-l-none"
                            >
                              +
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Preview Tab */}
              <TabsContent value="preview" className="mt-6">
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
              </TabsContent>

              {/* Data View Tab */}
              <TabsContent value="data" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-xs text-muted-foreground">
                            Name
                          </Label>
                          <div className="font-medium">Product Name</div>
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground">
                            Brand
                          </Label>
                          <div className="font-medium">Brand Name</div>
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground">
                            Categories
                          </Label>
                          <div className="font-medium">Medical, Equipment</div>
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground">
                            Price
                          </Label>
                          <div className="font-medium">$99.00</div>
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground">
                            Promotional Price
                          </Label>
                          <div className="font-medium">Not set</div>
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground">
                            Quantity
                          </Label>
                          <div className="font-medium">100</div>
                        </div>
                      </div>

                      <div>
                        <Label className="text-xs text-muted-foreground">
                          Primary Description
                        </Label>
                        <div className="font-medium">
                          Main product description will appear here.
                        </div>
                      </div>

                      <div>
                        <Label className="text-xs text-muted-foreground">
                          Technical Details
                        </Label>
                        <div className="font-medium">
                          Additional technical information will appear here.
                        </div>
                      </div>

                      <div>
                        <Label className="text-xs text-muted-foreground">
                          Images
                        </Label>
                        <div className="font-medium">0 images uploaded</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Action Bar */}
            <div className="flex justify-between items-center bg-white rounded-lg p-4 shadow-sm">
              <Button variant="outline">Save Draft</Button>

              <div className="flex items-center gap-2">
                <Button variant="outline">Preview</Button>
                <Button className="gap-2">
                  <Save className="h-4 w-4" />
                  Publish Product
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Product List Section */}
      <div className="mt-12 space-y-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Your Product Collection</h2>
            <p className="text-muted-foreground">
              Manage and monitor your medical inventory
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center space-x-2 bg-white rounded-md px-3 py-1 border shadow-sm">
              <Label htmlFor="view-type" className="text-sm">
                View:
              </Label>
              <Select defaultValue="grid">
                <SelectTrigger
                  id="view-type"
                  className="border-0 h-8 p-0 hover:bg-transparent focus:ring-0 w-24"
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="grid">Grid</SelectItem>
                  <SelectItem value="list">List</SelectItem>
                  <SelectItem value="compact">Compact</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="relative">
              <Input
                placeholder="Search products..."
                className="w-[200px] pl-8"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* Product Card 1 */}
          <Card className="group overflow-hidden transition-all hover:shadow-md">
            <div className="relative">
              <div className="aspect-[4/3] bg-slate-100 flex items-center justify-center overflow-hidden">
                <img
                  src="/placeholder.svg?height=240&width=320"
                  alt="Medical Thermometer"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <Badge className="absolute top-2 right-2 bg-green-100 text-green-800 hover:bg-green-200">
                Active
              </Badge>
            </div>

            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium line-clamp-1">
                  Digital Thermometer Pro
                </h3>
                <Badge variant="outline" className="text-xs">
                  Medical
                </Badge>
              </div>

              <div className="flex justify-between items-center mb-3">
                <div className="font-bold">$49.99</div>
                <div className="text-xs text-muted-foreground">Stock: 78</div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <div className="text-xs text-muted-foreground">
                  Updated 2d ago
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Product Card 2 */}
          <Card className="group overflow-hidden transition-all hover:shadow-md">
            <div className="relative">
              <div className="aspect-[4/3] bg-slate-100 flex items-center justify-center overflow-hidden">
                <img
                  src="/placeholder.svg?height=240&width=320"
                  alt="Blood Pressure Monitor"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <Badge className="absolute top-2 right-2 bg-green-100 text-green-800 hover:bg-green-200">
                Active
              </Badge>
            </div>

            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium line-clamp-1">
                  Blood Pressure Monitor
                </h3>
                <Badge variant="outline" className="text-xs">
                  Device
                </Badge>
              </div>

              <div className="flex justify-between items-center mb-3">
                <div className="font-bold">$89.99</div>
                <div className="text-xs text-muted-foreground">Stock: 42</div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <div className="text-xs text-muted-foreground">
                  Updated 5d ago
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Product Card 3 */}
          <Card className="group overflow-hidden transition-all hover:shadow-md">
            <div className="relative">
              <div className="aspect-[4/3] bg-slate-100 flex items-center justify-center overflow-hidden">
                <img
                  src="/placeholder.svg?height=240&width=320"
                  alt="Pulse Oximeter"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <Badge className="absolute top-2 right-2 bg-amber-100 text-amber-800 hover:bg-amber-200">
                Low Stock
              </Badge>
            </div>

            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium line-clamp-1">Pulse Oximeter</h3>
                <Badge variant="outline" className="text-xs">
                  Device
                </Badge>
              </div>

              <div className="flex justify-between items-center mb-3">
                <div className="font-bold">$34.99</div>
                <div className="text-xs text-muted-foreground">Stock: 8</div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <div className="text-xs text-muted-foreground">
                  Updated 1w ago
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Product Card 4 */}
          <Card className="group overflow-hidden transition-all hover:shadow-md">
            <div className="relative">
              <div className="aspect-[4/3] bg-slate-100 flex items-center justify-center overflow-hidden">
                <img
                  src="/placeholder.svg?height=240&width=320"
                  alt="First Aid Kit"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <Badge className="absolute top-2 right-2 bg-green-100 text-green-800 hover:bg-green-200">
                Active
              </Badge>
            </div>

            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium line-clamp-1">
                  Premium First Aid Kit
                </h3>
                <Badge variant="outline" className="text-xs">
                  First Aid
                </Badge>
              </div>

              <div className="flex justify-between items-center mb-3">
                <div className="font-bold">$29.99</div>
                <div className="text-xs text-muted-foreground">Stock: 124</div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <div className="text-xs text-muted-foreground">
                  Updated 3d ago
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Product Card 5 */}
          <Card className="group overflow-hidden transition-all hover:shadow-md">
            <div className="relative">
              <div className="aspect-[4/3] bg-slate-100 flex items-center justify-center overflow-hidden">
                <img
                  src="/placeholder.svg?height=240&width=320"
                  alt="Stethoscope"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <Badge className="absolute top-2 right-2 bg-red-100 text-red-800 hover:bg-red-200">
                Out of Stock
              </Badge>
            </div>

            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium line-clamp-1">
                  Professional Stethoscope
                </h3>
                <Badge variant="outline" className="text-xs">
                  Equipment
                </Badge>
              </div>

              <div className="flex justify-between items-center mb-3">
                <div className="font-bold">$119.99</div>
                <div className="text-xs text-muted-foreground">Stock: 0</div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <div className="text-xs text-muted-foreground">
                  Updated 2w ago
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Product Card 6 */}
          <Card className="group overflow-hidden transition-all hover:shadow-md">
            <div className="relative">
              <div className="aspect-[4/3] bg-slate-100 flex items-center justify-center overflow-hidden">
                <img
                  src="/placeholder.svg?height=240&width=320"
                  alt="Surgical Masks"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <Badge className="absolute top-2 right-2 bg-blue-100 text-blue-800 hover:bg-blue-200">
                New
              </Badge>
            </div>

            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium line-clamp-1">
                  Surgical Masks (50pk)
                </h3>
                <Badge variant="outline" className="text-xs">
                  Supplies
                </Badge>
              </div>

              <div className="flex justify-between items-center mb-3">
                <div className="font-bold">$19.99</div>
                <div className="text-xs text-muted-foreground">Stock: 250</div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <div className="text-xs text-muted-foreground">
                  Added 1d ago
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Add New Product Card */}
          <Card className="border-dashed bg-slate-50/50 flex flex-col items-center justify-center aspect-[4/3] cursor-pointer hover:bg-slate-50 transition-colors">
            <div className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                <Plus className="h-6 w-6 text-slate-500" />
              </div>
              <h3 className="font-medium text-slate-700">Add New Product</h3>
              <p className="text-xs text-slate-500 mt-1">
                Click to create a new listing
              </p>
            </div>
          </Card>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">6</span> of{" "}
            <span className="font-medium">24</span> products
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
