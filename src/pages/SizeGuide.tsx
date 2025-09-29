import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const SizeGuide = () => {
  const sizingData = {
    bags: [
      { size: "Mini", dimensions: "15 x 10 x 5 cm", description: "Perfect for evening events" },
      { size: "Small", dimensions: "25 x 18 x 10 cm", description: "Ideal for daily essentials" },
      { size: "Medium", dimensions: "35 x 28 x 15 cm", description: "Great for work and travel" },
      { size: "Large", dimensions: "45 x 35 x 20 cm", description: "Spacious for extended use" }
    ],
    jewelry: [
      { size: "XS", measurement: "14-15 cm", description: "Delicate wrists" },
      { size: "S", measurement: "15-16 cm", description: "Small wrists" },
      { size: "M", measurement: "16-17 cm", description: "Average wrists" },
      { size: "L", measurement: "17-18 cm", description: "Larger wrists" }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Size Guide</h1>
            <p className="text-xl text-muted-foreground">
              Find your perfect fit with our comprehensive sizing information.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Handbags */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Handbag Sizes</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Size</TableHead>
                    <TableHead>Dimensions (L x H x W)</TableHead>
                    <TableHead>Best For</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sizingData.bags.map((item) => (
                    <TableRow key={item.size}>
                      <TableCell className="font-medium">{item.size}</TableCell>
                      <TableCell>{item.dimensions}</TableCell>
                      <TableCell>{item.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Jewelry */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Jewelry Sizes</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Size</TableHead>
                    <TableHead>Measurement</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sizingData.jewelry.map((item) => (
                    <TableRow key={item.size}>
                      <TableCell className="font-medium">{item.size}</TableCell>
                      <TableCell>{item.measurement}</TableCell>
                      <TableCell>{item.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Measuring Tips */}
            <div className="bg-muted/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">How to Measure</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">For Jewelry:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Use a soft measuring tape</li>
                    <li>• Measure around the intended area</li>
                    <li>• Add 1-2cm for comfortable fit</li>
                    <li>• Measure at room temperature</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">For Handbags:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Consider your daily essentials</li>
                    <li>• Think about occasion usage</li>
                    <li>• Check strap length preferences</li>
                    <li>• Consider body proportions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SizeGuide;