import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import productBag from "@/assets/product-bag.jpg";
import productWatch from "@/assets/product-watch.jpg";
import productSunglasses from "@/assets/product-sunglasses.jpg";
import productPerfume from "@/assets/product-perfume.jpg";

const ProductGrid = () => {
  const categories = ["All", "Bags", "Accessories", "Fragrance", "Jewelry"];

  const products = [
    {
      id: "1",
      name: "Premium Leather Handbag",
      price: 299,
      originalPrice: 399,
      image: productBag,
      category: "Bags",
      isNew: false,
      isSale: true,
      rating: 4.8,
    },
    {
      id: "2",
      name: "Luxury Gold Watch",
      price: 899,
      image: productWatch,
      category: "Accessories",
      isNew: true,
      isSale: false,
      rating: 4.9,
    },
    {
      id: "3",
      name: "Designer Sunglasses",
      price: 249,
      originalPrice: 329,
      image: productSunglasses,
      category: "Accessories",
      isNew: false,
      isSale: true,
      rating: 4.6,
    },
    {
      id: "4",
      name: "Signature Perfume",
      price: 149,
      image: productPerfume,
      category: "Fragrance",
      isNew: true,
      isSale: false,
      rating: 4.7,
    },
    {
      id: "5",
      name: "Classic Leather Tote",
      price: 399,
      image: productBag,
      category: "Bags",
      isNew: false,
      isSale: false,
      rating: 4.5,
    },
    {
      id: "6",
      name: "Evening Clutch",
      price: 199,
      originalPrice: 259,
      image: productBag,
      category: "Bags",
      isNew: false,
      isSale: true,
      rating: 4.4,
    },
  ];

  return (
    <section id="shop" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Featured Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium products designed to elevate your style
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "outline"}
              className={index === 0 
                ? "gradient-primary text-primary-foreground hover:shadow-accent" 
                : "border-border hover:border-accent hover:text-accent transition-smooth"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth px-8 py-6"
          >
            Load More Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;