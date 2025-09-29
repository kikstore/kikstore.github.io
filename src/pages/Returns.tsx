import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Returns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Returns & Exchanges</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Return Policy</h2>
              <p className="text-muted-foreground mb-4">
                We want you to be completely satisfied with your purchase. If you're not happy with your order, 
                you can return it within <strong>30 days</strong> of delivery for a full refund or exchange.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Return Requirements</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Items must be in original, unworn condition</li>
                <li>Items must include all original tags and packaging</li>
                <li>Items must be returned within 30 days of delivery</li>
                <li>Proof of purchase (order number or receipt) required</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How to Return</h2>
              <div className="space-y-4">
                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">Step 1: Initiate Return</h3>
                  <p className="text-muted-foreground">Contact our customer service team or use our online return portal to start your return process.</p>
                </div>
                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">Step 2: Package Items</h3>
                  <p className="text-muted-foreground">Carefully package your items in their original packaging with all tags attached.</p>
                </div>
                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">Step 3: Ship Return</h3>
                  <p className="text-muted-foreground">Use the prepaid return label we provide or ship via your preferred carrier.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Refund Processing</h2>
              <p className="text-muted-foreground mb-4">
                Once we receive your return, please allow 3-5 business days for processing. 
                Refunds will be credited to your original payment method within 5-10 business days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Exchanges</h2>
              <p className="text-muted-foreground mb-4">
                For exchanges, please return your original item and place a new order for the desired item. 
                This ensures you receive your new item as quickly as possible.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Returns;