
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Cookie Policy</h1>
          
          <div className="space-y-8">
            <section>
              <p className="text-muted-foreground mb-4">
                <strong>Last updated:</strong> December 2024
              </p>
              <p className="text-muted-foreground mb-4">
                This Cookie Policy explains how Luxe ("we," "us," or "our") uses cookies and similar technologies 
                when you visit our website. It explains what these technologies are and why we use them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">What Are Cookies?</h2>
              <p className="text-muted-foreground mb-4">
                Cookies are small text files that are placed on your device when you visit our website. They help us 
                provide you with a better user experience by remembering your preferences, analyzing how you use our 
                website, and personalizing content and advertisements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-foreground mb-3">Essential Cookies</h3>
                  <p className="text-muted-foreground mb-2">
                    These cookies are necessary for the website to function properly and cannot be switched off.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Shopping cart functionality</li>
                    <li>User authentication</li>
                    <li>Security features</li>
                    <li>Basic website functionality</li>
                  </ul>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-foreground mb-3">Performance Cookies</h3>
                  <p className="text-muted-foreground mb-2">
                    These cookies help us understand how visitors interact with our website.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Google Analytics</li>
                    <li>Page load times</li>
                    <li>Error tracking</li>
                    <li>Usage statistics</li>
                  </ul>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-foreground mb-3">Functionality Cookies</h3>
                  <p className="text-muted-foreground mb-2">
                    These cookies enable enhanced functionality and personalization.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Language preferences</li>
                    <li>User interface customization</li>
                    <li>Remember your choices</li>
                    <li>Personalized content</li>
                  </ul>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-foreground mb-3">Marketing Cookies</h3>
                  <p className="text-muted-foreground mb-2">
                    These cookies are used to deliver advertisements relevant to you.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Targeted advertising</li>
                    <li>Social media integration</li>
                    <li>Retargeting campaigns</li>
                    <li>Conversion tracking</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Cookies</h2>
              <p className="text-muted-foreground mb-4">
                We may also use third-party cookies from trusted partners to enhance your experience:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                <li><strong>Google Ads:</strong> For advertising and remarketing purposes</li>
                <li><strong>Social Media Platforms:</strong> For social sharing and authentication</li>
                <li><strong>Payment Processors:</strong> For secure payment processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Managing Your Cookie Preferences</h2>
              
              <h3 className="text-xl font-medium text-foreground mb-3">Browser Settings</h3>
              <p className="text-muted-foreground mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>View what cookies are stored on your device</li>
                <li>Delete cookies individually or all at once</li>
                <li>Block cookies from specific websites</li>
                <li>Block all cookies from being set</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-3">Opting Out</h3>
              <p className="text-muted-foreground mb-4">
                You can opt out of certain types of cookies:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Google Analytics: Visit the <a href="https://tools.google.com/dlpage/gaoptout" className="text-accent hover:underline">Google Analytics opt-out page</a></li>
                <li>Google Ads: Use the <a href="https://adssettings.google.com/" className="text-accent hover:underline">Google Ad Settings</a></li>
                <li>Social Media: Check individual platform privacy settings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Impact of Disabling Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Please note that disabling certain cookies may affect your experience on our website:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Shopping cart may not function properly</li>
                <li>You may need to re-enter information repeatedly</li>
                <li>Personalized features may not work</li>
                <li>Some pages may load more slowly</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Updates to This Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, 
                or our business practices. We will notify you of any significant changes by posting the updated 
                policy on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="bg-muted/50 p-6 rounded-lg">
                <p className="text-foreground font-medium mb-2">Luxe Privacy Team</p>
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

export default CookiePolicy;
