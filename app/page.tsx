import { Call, LocationOn, Mail } from "relume-icons";
import { Navbar3 } from "@/components/relume/navbar3";
import { Contact15, Footer3, Header113, Portfolio12, Stats3, Testimonial13 } from "@/components/relume/sections";

const logo = { src: "/images/gwhweblogo1020-4faa02ba82.png", alt: "Greenwood Homes" };

export default function Home() {
  return (
    <main>
      <Navbar3 logo={logo} navLinks={[{ title: "Portfolio", url: "#portfolio" }, { title: "About", url: "#about" }, { title: "Approach", url: "#approach" }]} />
      <Header113
        heading="Where building a home is a work of art."
        description="Award-winning custom homes, thoughtfully built from Lake Tahoe to Kauai and beyond."
        image={{ src: "/images/incline-village-lakeside-estate-greenwood-homes-web-829c2449b4.jpg", alt: "Greenwood Homes lakeside estate in Incline Village" }}
      />
      <Stats3 image={{ src: "/images/59-c3478cdc8a.jpg", alt: "Crafted wood kitchen by Greenwood Homes" }} />
      <Portfolio12 projects={[
        { title: "Minimalist Luxury", location: "Incline Village", description: "Warm timber, stone, and glass composed for modern mountain living.", image: { src: "/images/incline-village-minimalist-luxury-greenwood-homes-013-1024x683-e680462b0c.jpg", alt: "Minimalist luxury home in Incline Village" } },
        { title: "Paradise Island", location: "Hawaii", description: "An island residence designed around arrival, privacy, and open-air life.", image: { src: "/images/001-70f9404385.jpg", alt: "Paradise Island residence in Hawaii" } },
        { title: "Contemporary Tahoe Mountain", location: "Glenbrook", description: "A precise contemporary retreat settled into its wooded Tahoe site.", image: { src: "/images/15126_glenbrook-824145365a.jpg", alt: "Contemporary Tahoe Mountain home in Glenbrook" } },
      ]} />
      <Testimonial13
        image={{ src: "/images/incline-village-contemporary-remodel-greenwood-homes-002-1024x683-1c2b3f3db6.jpg", alt: "Contemporary lakeview interior remodeled by Greenwood Homes" }}
        logo={logo}
      />
      <Contact15
        image={{ src: "/images/23-4d2427cf5e.jpg", alt: "Koloa Estate terrace at sunset" }}
        contacts={[
          { icon: <LocationOn className="size-6" />, title: "Regional teams", text: "Lake Tahoe and Truckee · Kauai · Idaho · Utah" },
          { icon: <Call className="size-6" />, title: "What we build", text: "Custom homes · Renovations · Construction management" },
          { icon: <Mail className="size-6" />, title: "Planning support", text: "Pre-construction budgets, timelines, and sustainable building" },
        ]}
      />
      <Footer3 logo={logo} />
    </main>
  );
}
