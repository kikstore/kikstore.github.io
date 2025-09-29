import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Shipping = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Shipping Information</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Shipping Options</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">Standard Shipping</h3>
                  <p className="text-muted-foreground mb-2">5-7 Business Days</p>
                  <p className="font-medium">Free on orders over $50</p>
                  <p className="text-sm text-muted-foreground">$5.99 for orders under $50</p>
                </div>
                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">Express Shipping</h3>
                  <p className="text-muted-foreground mb-2">2-3 Business Days</p>
                  <p className="font-medium">$12.99</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Processing Time</h2>
              <p className="text-muted-foreground mb-4">
                Orders are typically processed within 1-2 business days. During peak seasons or sales events, 
                processing may take up to 3-5 business days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">International Shipping</h2>
              <p className="text-muted-foreground mb-4">
                We currently ship to select international destinations. International shipping rates 
                and delivery times vary by location. Additional customs fees may apply.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Order Tracking</h2>
              <p className="text-muted-foreground mb-4">
                Once your order ships, you'll receive a tracking number via email. You can track 
                your package using this number on our website or the carrier's tracking page.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shipping;