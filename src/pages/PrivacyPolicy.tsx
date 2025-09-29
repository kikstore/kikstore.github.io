
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          
          <div className="space-y-8">
            <section>
              <p className="text-muted-foreground mb-4">
                <strong>Last updated:</strong> December 2024
              </p>
              <p className="text-muted-foreground mb-4">
                At Luxe, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or make a purchase.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
              <h3 className="text-xl font-medium text-foreground mb-3">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Name and contact information (email address, phone number, billing and shipping addresses)</li>
                <li>Payment information (credit card details, billing address)</li>
                <li>Account information (username, password, purchase history)</li>
                <li>Communication preferences and marketing preferences</li>
              </ul>
              
              <h3 className="text-xl font-medium text-foreground mb-3">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Browser type, device information, and operating system</li>
                <li>IP address and location data</li>
                <li>Website usage patterns and analytics data</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your account and orders</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Improve our website and customer experience</li>
                <li>Prevent fraud and ensure security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell, rent, or trade your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Service providers who help us operate our business (payment processors, shipping companies)</li>
                <li>Professional advisors (lawyers, accountants) when necessary</li>
                <li>Law enforcement or regulatory authorities when required by law</li>
                <li>Business partners in case of merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. This includes SSL encryption, secure servers, 
                and regular security assessments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access and review your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict processing of your information</li>
                <li>Withdraw consent for marketing communications</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies</h2>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, 
                and personalize content. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy or how we handle your personal information, 
                please contact us at:
              </p>
              <div className="bg-muted/50 p-6 rounded-lg">
                <p className="text-foreground font-medium mb-2">Luxe Customer Privacy Team</p>
                <p className="text-muted-foreground">Email: privacy@luxestore.com</p>
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

export default PrivacyPolicy;
