
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          
          <div className="space-y-8">
            <section>
              <p className="text-muted-foreground mb-4">
                <strong>Last updated:</strong> December 2024
              </p>
              <p className="text-muted-foreground mb-4">
                Welcome to Luxe. These Terms of Service ("Terms") govern your use of our website and services. 
                By accessing or using our website, you agree to be bound by these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms and provision 
                of this agreement. If you do not agree to abide by these Terms, do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Products and Services</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>All products are subject to availability</li>
                <li>We reserve the right to limit quantities and discontinue products</li>
                <li>Product descriptions and images are as accurate as possible</li>
                <li>Prices are subject to change without notice</li>
                <li>We reserve the right to refuse service to anyone</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Orders and Payment</h2>
              <h3 className="text-xl font-medium text-foreground mb-3">Order Acceptance</h3>
              <p className="text-muted-foreground mb-4">
                All orders are subject to acceptance and availability. We reserve the right to refuse or cancel 
                any order for any reason, including but not limited to product availability, errors in product 
                or pricing information, or problems with your account.
              </p>
              
              <h3 className="text-xl font-medium text-foreground mb-3">Payment Terms</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Payment is due at time of purchase</li>
                <li>We accept major credit cards and secure payment methods</li>
                <li>All prices are in USD unless otherwise specified</li>
                <li>You are responsible for any applicable taxes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Shipping and Delivery</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Delivery times are estimates and not guaranteed</li>
                <li>Risk of loss passes to you upon delivery to the carrier</li>
                <li>You are responsible for providing accurate shipping information</li>
                <li>Additional fees may apply for expedited shipping or international delivery</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Returns and Refunds</h2>
              <p className="text-muted-foreground mb-4">
                Please refer to our Returns & Exchanges page for detailed information about our return policy. 
                Returns must be made within 30 days of delivery and meet our return requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">User Accounts</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>You are responsible for maintaining account security</li>
                <li>You must provide accurate and complete information</li>
                <li>You are responsible for all activities under your account</li>
                <li>We may suspend or terminate accounts that violate these Terms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                All content on this website, including text, images, logos, and designs, is the property of Luxe 
                or its licensors and is protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                To the maximum extent permitted by law, Luxe shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages arising out of your use of our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
              <p className="text-muted-foreground mb-4">
                These Terms shall be governed by and construed in accordance with the laws of New York, 
                without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground mb-4">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately 
                upon posting. Your continued use of the website constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-muted/50 p-6 rounded-lg">
                <p className="text-foreground font-medium mb-2">Luxe Legal Team</p>
                <p className="text-muted-foreground">Email: legal@luxestore.com</p>
                <p className="text-muted-foreground">Phone: +1 (555) 123-4567</p>
                <p className="text-muted-foreground">Address: 123 Luxury Lane, Fashion District, NY 10001</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
