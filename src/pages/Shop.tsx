import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter } from "lucide-react";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedSort, setSelectedSort] = useState('featured');

  // Update category when URL parameter changes
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory('all');
    }
  }, [searchParams]);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    if (value === 'all') {
      navigate('/shop');
    } else {
      navigate(`/shop?category=${value}`);
    }
  };

  const handleSortChange = (value: string) => {
    setSelectedSort(value);
  };

  // Get page title based on category
  const getPageTitle = () => {
    const categoryParam = searchParams.get('category');
    if (!categoryParam || categoryParam === 'all') return 'Shop Collection';
    
    const categoryNames: { [key: string]: string } = {
      'handbags': 'Handbags',
      'jewelry': 'Jewelry', 
      'accessories': 'Accessories',
      'fragrance': 'Fragrance',
      'sale': 'Sale Items',
      'new': 'New Arrivals'
    };
    
    return categoryNames[categoryParam] || 'Shop Collection';
  };

  const getPageDescription = () => {
    const categoryParam = searchParams.get('category');
    if (!categoryParam || categoryParam === 'all') {
      return 'Discover our curated selection of luxury fashion and accessories.';
    }
    
    const descriptions: { [key: string]: string } = {
      'handbags': 'Elegant handbags and purses crafted with the finest materials.',
      'jewelry': 'Exquisite jewelry pieces to complement your style.',
      'accessories': 'Premium accessories to complete your luxury look.',
      'fragrance': 'Sophisticated fragrances for the discerning individual.',
      'sale': 'Exclusive luxury items at special prices.',
      'new': 'The latest additions to our luxury collection.'
    };
    
    return descriptions[categoryParam] || 'Discover our curated selection of luxury fashion and accessories.';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="py-16 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">{getPageTitle()}</h1>
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
              {getPageDescription()}
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Items</SelectItem>
                    <SelectItem value="handbags">Handbags</SelectItem>
                    <SelectItem value="jewelry">Jewelry</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                    <SelectItem value="fragrance">Fragrance</SelectItem>
                    <SelectItem value="sale">Sale Items</SelectItem>
                    <SelectItem value="new">New Arrivals</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Select value={selectedSort} onValueChange={handleSortChange}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProductGrid />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;