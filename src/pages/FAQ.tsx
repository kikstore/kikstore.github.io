import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 5-7 business days and is free on orders over $50. Express shipping takes 2-3 business days for $12.99."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for items in original condition with tags attached. Returns are free and we provide a prepaid return label."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's site."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to select international destinations. Shipping rates and delivery times vary by location, and additional customs fees may apply."
    },
    {
      question: "How do I know what size to order?",
      answer: "We have a comprehensive size guide available on each product page and as a dedicated page. If you're between sizes, we recommend sizing up."
    },
    {
      question: "Can I cancel or modify my order?",
      answer: "Orders can be cancelled or modified within 2 hours of placement. After that, the order enters processing and cannot be changed."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, and Google Pay."
    },
    {
      question: "How do I care for my items?",
      answer: "Care instructions are included with each item and on the product page. Generally, we recommend following the care label on the garment."
    },
    {
      question: "Do you offer gift cards?",
      answer: "Yes, we offer digital gift cards in various denominations. They can be purchased on our website and are delivered via email."
    },
    {
      question: "How can I contact customer service?",
      answer: "You can reach our customer service team via email at hello@luxestore.com, phone at +1 (555) 123-4567, or through our contact form."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground">
            Find answers to the most common questions about our products, shipping, and policies.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-foreground">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Contact Us
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;