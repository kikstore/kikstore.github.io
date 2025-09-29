import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Luxe</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Curating luxury fashion and lifestyle products for the discerning individual since 2020.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded with a passion for exceptional quality and timeless elegance, Luxe has become 
                  a trusted destination for luxury fashion enthusiasts worldwide.
                </p>
                <p className="text-muted-foreground mb-4">
                  We carefully curate each piece in our collection, ensuring that every item meets our 
                  rigorous standards for craftsmanship, design, and authenticity.
                </p>
                <p className="text-muted-foreground">
                  From premium handbags to exquisite jewelry, our products are sourced from renowned 
                  artisans and luxury brands that share our commitment to excellence.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="text-accent">•</span>
                    <span>Quality craftsmanship in every piece</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent">•</span>
                    <span>Authentic luxury products only</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent">•</span>
                    <span>Exceptional customer service</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent">•</span>
                    <span>Sustainable luxury practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;