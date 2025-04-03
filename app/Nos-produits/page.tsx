"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  ArrowDownUp,
  ChevronRight,
  Filter,
  Grid3x3,
  Heart,
  Info,
  List,
  Minus,
  Plus,
  Search,
  ShoppingCart,
  Sliders,
  Star,
  X,
} from "lucide-react";

export default function ProductListingPage() {
  // State for filters and products
  const [viewMode, setViewMode] = useState("grid");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [showFilters, setShowFilters] = useState(true);
  const [sortBy, setSortBy] = useState("featured");
  const [showComparison, setShowComparison] = useState(false);
  const [comparisonProducts, setComparisonProducts] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [activeFilters, setActiveFilters] = useState(0);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  // Mock data for products
  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Medical Device ${i + 1}`,
    description:
      "Professional-grade medical equipment for healthcare providers and home use",
    price: Math.floor(Math.random() * 900) + 100,
    rating: Math.floor(Math.random() * 2) + 3,
    category: ["Diagnostic", "Monitoring", "Surgical", "Rehabilitation"][
      Math.floor(Math.random() * 4)
    ],
    brand: ["MediTech", "HealthPlus", "CarePlus", "VitalScan"][
      Math.floor(Math.random() * 4)
    ],
    features: ["FDA Approved", "Wireless", "Battery Operated", "Portable"][
      Math.floor(Math.random() * 4)
    ],
    inStock: Math.random() > 0.2,
    isNew: Math.random() > 0.7,
    isFeatured: Math.random() > 0.8,
    discount: Math.random() > 0.7 ? Math.floor(Math.random() * 30) + 10 : 0,
  }));

  // Categories and brands from products
  const categories = [...new Set(products.map((p) => p.category))];
  const brands = [...new Set(products.map((p) => p.brand))];

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    // Price range filter
    if (product.price < priceRange[0] || product.price > priceRange[1])
      return false;

    // Category filter
    if (
      selectedCategories.length > 0 &&
      !selectedCategories.includes(product.category)
    )
      return false;

    // Brand filter
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand))
      return false;

    // Rating filter
    if (selectedRating > 0 && product.rating < selectedRating) return false;

    // Search query
    if (
      searchQuery &&
      !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !product.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;

    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return b.id - a.id;
      case "featured":
      default:
        return b.isFeatured - a.isFeatured;
    }
  });

  // Handle search input
  const handleSearchInput = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 1) {
      const suggestions = products
        .filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 5)
        .map((p) => p.name);
      setSearchSuggestions(suggestions);
    } else {
      setSearchSuggestions([]);
    }
  };

  // Toggle product in comparison
  const toggleProductComparison = (product) => {
    if (comparisonProducts.some((p) => p.id === product.id)) {
      setComparisonProducts(
        comparisonProducts.filter((p) => p.id !== product.id)
      );
    } else {
      if (comparisonProducts.length < 3) {
        setComparisonProducts([...comparisonProducts, product]);
      }
    }
  };

  // Calculate active filters
  useEffect(() => {
    let count = 0;
    if (selectedCategories.length > 0) count++;
    if (selectedBrands.length > 0) count++;
    if (selectedRating > 0) count++;
    if (priceRange[0] > 0 || priceRange[1] < 1000) count++;
    setActiveFilters(count);
  }, [selectedCategories, selectedBrands, selectedRating, priceRange]);

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedRating(0);
    setPriceRange([0, 1000]);
    setSearchQuery("");
  };

  // Toggle category selection
  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Toggle brand selection
  const toggleBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-30">
        <div className="container px-4 py-4 mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-2xl font-bold">Medical Products</h1>

            <div className="flex items-center gap-3">
              {/* Search Bar */}
              <div className="relative flex-1 min-w-[200px] md:min-w-[300px]">
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearchInput}
                  className="pl-10 pr-4 h-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />

                {/* Search Suggestions */}
                <AnimatePresence>
                  {searchSuggestions.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-md mt-1 z-50 overflow-hidden"
                    >
                      <ul className="py-2">
                        {searchSuggestions.map((suggestion, index) => (
                          <li
                            key={index}
                            className="px-4 py-2 hover:bg-slate-100 cursor-pointer"
                            onClick={() => {
                              setSearchQuery(suggestion);
                              setSearchSuggestions([]);
                            }}
                          >
                            {suggestion}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Filter Button */}
              <Drawer
                open={isFilterDrawerOpen}
                onOpenChange={setIsFilterDrawerOpen}
              >
                <DrawerTrigger asChild>
                  <Button variant="outline" size="icon" className="md:hidden">
                    <Filter className="h-4 w-4" />
                    {activeFilters > 0 && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white rounded-full text-[10px] flex items-center justify-center">
                        {activeFilters}
                      </span>
                    )}
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="p-4 max-h-[80vh] overflow-auto">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">Filters</h3>
                    <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                      Clear All
                    </Button>
                  </div>
                  {/* Mobile Filters - Same as desktop filters */}
                  <div className="space-y-6">
                    {/* Price Range Filter */}
                    <div>
                      <h3 className="font-medium mb-3">Price Range</h3>
                      <div className="px-2">
                        <Slider
                          defaultValue={priceRange}
                          min={0}
                          max={1000}
                          step={10}
                          value={priceRange}
                          onValueChange={setPriceRange}
                          className="mb-6"
                        />
                        <div className="flex justify-between items-center">
                          <div className="bg-white border rounded-md px-3 py-1 text-sm">
                            ${priceRange[0]}
                          </div>
                          <div className="text-sm text-slate-500">to</div>
                          <div className="bg-white border rounded-md px-3 py-1 text-sm">
                            ${priceRange[1]}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Category Filter */}
                    <div>
                      <h3 className="font-medium mb-3">Category</h3>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <div
                            key={category}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={`category-mobile-${category}`}
                              checked={selectedCategories.includes(category)}
                              onCheckedChange={() => toggleCategory(category)}
                            />
                            <Label
                              htmlFor={`category-mobile-${category}`}
                              className="text-sm cursor-pointer"
                            >
                              {category}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Brand Filter */}
                    <div>
                      <h3 className="font-medium mb-3">Brand</h3>
                      <div className="space-y-2">
                        {brands.map((brand) => (
                          <div
                            key={brand}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={`brand-mobile-${brand}`}
                              checked={selectedBrands.includes(brand)}
                              onCheckedChange={() => toggleBrand(brand)}
                            />
                            <Label
                              htmlFor={`brand-mobile-${brand}`}
                              className="text-sm cursor-pointer"
                            >
                              {brand}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Rating Filter */}
                    <div>
                      <h3 className="font-medium mb-3">Rating</h3>
                      <div className="space-y-2">
                        {[4, 3, 2, 1].map((rating) => (
                          <div
                            key={rating}
                            className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer ${
                              selectedRating === rating
                                ? "bg-primary/10"
                                : "hover:bg-slate-100"
                            }`}
                            onClick={() =>
                              setSelectedRating(
                                selectedRating === rating ? 0 : rating
                              )
                            }
                          >
                            <div className="flex">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < rating
                                      ? "fill-yellow-400 text-yellow-400"
                                      : "text-slate-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm">{rating}+ stars</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button
                      className="w-full"
                      onClick={() => setIsFilterDrawerOpen(false)}
                    >
                      Apply Filters
                    </Button>
                  </div>
                </DrawerContent>
              </Drawer>

              {/* View Mode Toggle */}
              <div className="hidden md:flex items-center border rounded-md overflow-hidden">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  className="rounded-none h-10 px-3"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3x3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  className="rounded-none h-10 px-3"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>

              {/* Sort Dropdown */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] h-10">
                  <div className="flex items-center">
                    <ArrowDownUp className="h-4 w-4 mr-2" />
                    <span>Sort By</span>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>

              {/* Compare Button */}
              <Button
                variant="outline"
                size="sm"
                className="hidden md:flex items-center gap-1"
                onClick={() => setShowComparison(!showComparison)}
                disabled={comparisonProducts.length === 0}
              >
                <Sliders className="h-4 w-4" />
                Compare
                {comparisonProducts.length > 0 && (
                  <Badge className="ml-1 h-5 w-5 p-0 flex items-center justify-center">
                    {comparisonProducts.length}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container px-4 py-6 mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Desktop Filters Sidebar */}
          <aside
            className={`hidden md:block w-64 shrink-0 transition-all ${
              showFilters ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
            }`}
          >
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-24">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                  {activeFilters > 0 && (
                    <Badge className="ml-2">{activeFilters}</Badge>
                  )}
                </h2>
                {activeFilters > 0 && (
                  <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                    Clear
                  </Button>
                )}
              </div>

              <div className="space-y-6">
                {/* Price Range Filter */}
                <div>
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <div className="px-2">
                    <Slider
                      defaultValue={priceRange}
                      min={0}
                      max={1000}
                      step={10}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="mb-6"
                    />
                    <div className="flex justify-between items-center">
                      <div className="bg-white border rounded-md px-3 py-1 text-sm">
                        ${priceRange[0]}
                      </div>
                      <div className="text-sm text-slate-500">to</div>
                      <div className="bg-white border rounded-md px-3 py-1 text-sm">
                        ${priceRange[1]}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <h3 className="font-medium mb-3">Category</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div
                        key={category}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={`category-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => toggleCategory(category)}
                        />
                        <Label
                          htmlFor={`category-${category}`}
                          className="text-sm cursor-pointer"
                        >
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Brand Filter */}
                <div>
                  <h3 className="font-medium mb-3">Brand</h3>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox
                          id={`brand-${brand}`}
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={() => toggleBrand(brand)}
                        />
                        <Label
                          htmlFor={`brand-${brand}`}
                          className="text-sm cursor-pointer"
                        >
                          {brand}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <h3 className="font-medium mb-3">Rating</h3>
                  <div className="space-y-2">
                    {[4, 3, 2, 1].map((rating) => (
                      <div
                        key={rating}
                        className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer ${
                          selectedRating === rating
                            ? "bg-primary/10"
                            : "hover:bg-slate-100"
                        }`}
                        onClick={() =>
                          setSelectedRating(
                            selectedRating === rating ? 0 : rating
                          )
                        }
                      >
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-slate-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm">{rating}+ stars</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Availability Filter */}
                <div>
                  <h3 className="font-medium mb-3">Availability</h3>
                  <div className="flex items-center space-x-2">
                    <Switch id="in-stock" />
                    <Label htmlFor="in-stock">In Stock Only</Label>
                  </div>
                </div>

                {/* Special Offers */}
                <div>
                  <h3 className="font-medium mb-3">Special Offers</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="on-sale" />
                      <Label
                        htmlFor="on-sale"
                        className="text-sm cursor-pointer"
                      >
                        On Sale
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="new-arrivals" />
                      <Label
                        htmlFor="new-arrivals"
                        className="text-sm cursor-pointer"
                      >
                        New Arrivals
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            {/* Active Filters */}
            {activeFilters > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-3 mb-4">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-sm font-medium">Active Filters:</span>

                  {priceRange[0] > 0 || priceRange[1] < 1000 ? (
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      Price: ${priceRange[0]} - ${priceRange[1]}
                      <X
                        className="h-3 w-3 ml-1 cursor-pointer"
                        onClick={() => setPriceRange([0, 1000])}
                      />
                    </Badge>
                  ) : null}

                  {selectedCategories.map((category) => (
                    <Badge
                      key={category}
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      {category}
                      <X
                        className="h-3 w-3 ml-1 cursor-pointer"
                        onClick={() => toggleCategory(category)}
                      />
                    </Badge>
                  ))}

                  {selectedBrands.map((brand) => (
                    <Badge
                      key={brand}
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      {brand}
                      <X
                        className="h-3 w-3 ml-1 cursor-pointer"
                        onClick={() => toggleBrand(brand)}
                      />
                    </Badge>
                  ))}

                  {selectedRating > 0 && (
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      {selectedRating}+ Stars
                      <X
                        className="h-3 w-3 ml-1 cursor-pointer"
                        onClick={() => setSelectedRating(0)}
                      />
                    </Badge>
                  )}

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearAllFilters}
                    className="ml-auto"
                  >
                    Clear All
                  </Button>
                </div>
              </div>
            )}

            {/* Results Info */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm text-slate-600">
                  Showing{" "}
                  <span className="font-medium">{sortedProducts.length}</span>{" "}
                  results
                </p>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="hidden md:flex items-center"
                onClick={() => setShowFilters(!showFilters)}
              >
                {showFilters ? (
                  <>
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Hide Filters
                  </>
                ) : (
                  <>
                    <Filter className="h-4 w-4 mr-1" />
                    Show Filters
                  </>
                )}
              </Button>
            </div>

            {/* Products Grid/List */}
            {sortedProducts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-medium mb-2">No products found</h3>
                <p className="text-slate-500 mb-4">
                  Try adjusting your filters or search criteria
                </p>
                <Button onClick={clearAllFilters}>Clear All Filters</Button>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                {sortedProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full overflow-hidden group hover:shadow-md transition-shadow">
                      <div className="relative">
                        <div className="aspect-square bg-slate-100 flex items-center justify-center overflow-hidden">
                          <img
                            src={`/placeholder.svg?height=300&width=300&text=${product.name}`}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>

                        {/* Product Badges */}
                        <div className="absolute top-2 left-2 flex flex-col gap-1">
                          {product.isNew && (
                            <Badge className="bg-blue-500">New</Badge>
                          )}
                          {product.discount > 0 && (
                            <Badge className="bg-red-500">
                              -{product.discount}%
                            </Badge>
                          )}
                        </div>

                        {/* Quick Actions */}
                        <div className="absolute top-2 right-2 flex flex-col gap-1">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => toggleProductComparison(product)}
                          >
                            <Sliders
                              className={`h-4 w-4 ${
                                comparisonProducts.some(
                                  (p) => p.id === product.id
                                )
                                  ? "text-primary"
                                  : ""
                              }`}
                            />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>

                        {/* Quick View Button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            className="bg-white/80 hover:bg-white text-slate-900 backdrop-blur-sm"
                            onClick={() => setQuickViewProduct(product)}
                          >
                            Quick View
                          </Button>
                        </div>
                      </div>

                      <CardContent className="p-4">
                        <div className="mb-2">
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < product.rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-slate-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        <h3 className="font-medium line-clamp-1 mb-1">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {product.category}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {product.brand}
                          </Badge>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            {product.discount > 0 ? (
                              <>
                                <span className="font-bold">
                                  $
                                  {(
                                    product.price *
                                    (1 - product.discount / 100)
                                  ).toFixed(2)}
                                </span>
                                <span className="text-sm text-slate-500 line-through">
                                  ${product.price.toFixed(2)}
                                </span>
                              </>
                            ) : (
                              <span className="font-bold">
                                ${product.price.toFixed(2)}
                              </span>
                            )}
                          </div>

                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0 rounded-full"
                          >
                            <ShoppingCart className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {sortedProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row">
                        <div className="relative md:w-48 lg:w-64">
                          <div className="aspect-square md:h-full bg-slate-100 flex items-center justify-center overflow-hidden">
                            <img
                              src={`/placeholder.svg?height=200&width=200&text=${product.name}`}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Product Badges */}
                          <div className="absolute top-2 left-2 flex flex-col gap-1">
                            {product.isNew && (
                              <Badge className="bg-blue-500">New</Badge>
                            )}
                            {product.discount > 0 && (
                              <Badge className="bg-red-500">
                                -{product.discount}%
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div className="flex-1 p-4">
                          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-medium">{product.name}</h3>
                                <Badge variant="outline" className="text-xs">
                                  {product.category}
                                </Badge>
                              </div>

                              <div className="flex mb-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < product.rating
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-slate-300"
                                    }`}
                                  />
                                ))}
                              </div>

                              <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                                {product.description}
                              </p>

                              <div className="flex flex-wrap gap-2 mb-4">
                                <Badge
                                  variant="outline"
                                  className="bg-slate-100"
                                >
                                  {product.brand}
                                </Badge>
                                <Badge
                                  variant="outline"
                                  className="bg-slate-100"
                                >
                                  {product.features}
                                </Badge>
                                {product.inStock ? (
                                  <Badge
                                    variant="outline"
                                    className="bg-green-100 text-green-800"
                                  >
                                    In Stock
                                  </Badge>
                                ) : (
                                  <Badge
                                    variant="outline"
                                    className="bg-red-100 text-red-800"
                                  >
                                    Out of Stock
                                  </Badge>
                                )}
                              </div>
                            </div>

                            <div className="flex flex-col items-end gap-3">
                              <div className="text-right">
                                {product.discount > 0 ? (
                                  <>
                                    <div className="font-bold text-lg">
                                      $
                                      {(
                                        product.price *
                                        (1 - product.discount / 100)
                                      ).toFixed(2)}
                                    </div>
                                    <div className="text-sm text-slate-500 line-through">
                                      ${product.price.toFixed(2)}
                                    </div>
                                  </>
                                ) : (
                                  <div className="font-bold text-lg">
                                    ${product.price.toFixed(2)}
                                  </div>
                                )}
                              </div>

                              <div className="flex gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() =>
                                    toggleProductComparison(product)
                                  }
                                  className={
                                    comparisonProducts.some(
                                      (p) => p.id === product.id
                                    )
                                      ? "bg-primary/10"
                                      : ""
                                  }
                                >
                                  <Sliders className="h-4 w-4 mr-1" />
                                  Compare
                                </Button>
                                <Button size="sm">
                                  <ShoppingCart className="h-4 w-4 mr-1" />
                                  Add to Cart
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
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
      </main>

      {/* Comparison Drawer */}
      <AnimatePresence>
        {showComparison && comparisonProducts.length > 0 && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-40"
          >
            <div className="container mx-auto p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">
                  Compare Products ({comparisonProducts.length})
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowComparison(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {comparisonProducts.map((product) => (
                  <Card key={product.id} className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-6 w-6 rounded-full"
                      onClick={() => toggleProductComparison(product)}
                    >
                      <X className="h-3 w-3" />
                    </Button>

                    <div className="flex items-center p-4">
                      <div className="w-16 h-16 bg-slate-100 rounded-md flex-shrink-0 mr-3">
                        <img
                          src={`/placeholder.svg?height=64&width=64&text=${product.name}`}
                          alt={product.name}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{product.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {product.category}
                          </Badge>
                          <div className="text-sm font-semibold">
                            ${product.price.toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t px-4 py-2">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="text-slate-500">Brand:</div>
                        <div>{product.brand}</div>
                        <div className="text-slate-500">Rating:</div>
                        <div className="flex">
                          {Array.from({ length: product.rating }).map(
                            (_, i) => (
                              <Star
                                key={i}
                                className="h-3 w-3 fill-yellow-400 text-yellow-400"
                              />
                            )
                          )}
                        </div>
                        <div className="text-slate-500">Features:</div>
                        <div>{product.features}</div>
                        <div className="text-slate-500">Availability:</div>
                        <div>
                          {product.inStock ? "In Stock" : "Out of Stock"}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}

                {Array.from({ length: 3 - comparisonProducts.length }).map(
                  (_, i) => (
                    <Card
                      key={i}
                      className="border-dashed flex items-center justify-center p-8"
                    >
                      <div className="text-center text-slate-400">
                        <Plus className="h-8 w-8 mx-auto mb-2" />
                        <p>Add product to compare</p>
                      </div>
                    </Card>
                  )
                )}
              </div>

              <div className="flex justify-end mt-4">
                <Button>View Full Comparison</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick View Modal */}
      <AnimatePresence>
        {quickViewProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setQuickViewProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6">
                  <div className="aspect-square bg-slate-100 rounded-md flex items-center justify-center mb-4">
                    <img
                      src={`/placeholder.svg?height=400&width=400&text=${quickViewProduct.name}`}
                      alt={quickViewProduct.name}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="aspect-square bg-slate-100 rounded-md cursor-pointer hover:ring-2 hover:ring-primary"
                      >
                        <img
                          src={`/placeholder.svg?height=80&width=80&text=${i}`}
                          alt={`Product view ${i}`}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4"
                    onClick={() => setQuickViewProduct(null)}
                  >
                    <X className="h-5 w-5" />
                  </Button>

                  <div className="mb-2">
                    <Badge className="mb-2">{quickViewProduct.category}</Badge>
                    <h2 className="text-2xl font-bold mb-1">
                      {quickViewProduct.name}
                    </h2>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < quickViewProduct.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-slate-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-slate-500">12 reviews</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    {quickViewProduct.discount > 0 ? (
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">
                          $
                          {(
                            quickViewProduct.price *
                            (1 - quickViewProduct.discount / 100)
                          ).toFixed(2)}
                        </span>
                        <span className="text-slate-500 line-through">
                          ${quickViewProduct.price.toFixed(2)}
                        </span>
                        <Badge className="bg-red-500 ml-2">
                          Save {quickViewProduct.discount}%
                        </Badge>
                      </div>
                    ) : (
                      <span className="text-2xl font-bold">
                        ${quickViewProduct.price.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <p className="text-slate-600 mb-6">
                    {quickViewProduct.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <Label htmlFor="quick-view-quantity">Quantity</Label>
                      <div className="flex items-center mt-1">
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-r-none h-10 w-10"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <Input
                          id="quick-view-quantity"
                          type="number"
                          className="rounded-none text-center h-10 w-16"
                          value="1"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-l-none h-10 w-10"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mb-6">
                    <Button className="flex-1">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Heart className="h-4 w-4 mr-2" />
                      Add to Wishlist
                    </Button>
                  </div>

                  <div className="border-t pt-4">
                    <div className="grid grid-cols-2 gap-y-2 text-sm">
                      <div className="text-slate-500">Brand:</div>
                      <div>{quickViewProduct.brand}</div>
                      <div className="text-slate-500">Features:</div>
                      <div>{quickViewProduct.features}</div>
                      <div className="text-slate-500">Availability:</div>
                      <div className="flex items-center">
                        <span
                          className={`w-2 h-2 rounded-full mr-2 ${
                            quickViewProduct.inStock
                              ? "bg-green-500"
                              : "bg-red-500"
                          }`}
                        ></span>
                        {quickViewProduct.inStock ? "In Stock" : "Out of Stock"}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button
                      variant="link"
                      className="p-0 h-auto text-sm flex items-center"
                    >
                      <Info className="h-4 w-4 mr-1" />
                      View full product details
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
