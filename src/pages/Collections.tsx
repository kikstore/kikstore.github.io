import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Collections = () => {
  const collections = [
    {
      title: "Summer Elegance",
      description: "Light and breezy pieces perfect for warm weather luxury.",
      image: "/placeholder.svg",
      items: "24 items"
    },
    {
      title: "Classic Timeless",
      description: "Enduring styles that never go out of fashion.",
      image: "/placeholder.svg", 
      items: "18 items"
    },
    {
      title: "Evening Glam",
      description: "Statement pieces for your most special occasions.",
      image: "/placeholder.svg",
      items: "15 items"
    },
    {
      title: "Modern Minimal",
      description: "Clean lines and sophisticated simplicity.",
      image: "/placeholder.svg",
      items: "21 items"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Collections</h1>
            <p className="text-xl text-muted-foreground">
              Carefully curated collections that define luxury and style for every occasion.
            </p>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {collections.map((collection, index) => (
                <div
                  key={collection.title}
                  className="group relative overflow-hidden rounded-lg bg-muted aspect-[4/3] hover:shadow-elegant transition-smooth"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                    <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
                    <p className="text-white/80 mb-4">{collection.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/60">{collection.items}</span>
                      <Button 
                        variant="secondary" 
                        size="sm"
                        className="group-hover:translate-x-1 transition-transform"
                      >
                        View Collection
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Collection */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured This Season</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our most coveted pieces, handpicked by our style experts to define this season's luxury trends.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-background rounded-lg p-6 text-center hover:shadow-soft transition-smooth">
                  <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-accent font-bold">{item}</span>
                  </div>
                  <h3 className="font-semibold mb-2">Featured Item {item}</h3>
                  <p className="text-sm text-muted-foreground">Luxury crafted piece</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Collections;