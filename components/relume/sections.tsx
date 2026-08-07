import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, StarFull } from "relume-icons";

type Image = { src: string; alt: string };

export function Header113({ heading, description, image }: { heading: string; description: string; image: Image }) {
  return (
    <section id="top" className="hero113 relative px-[5%]">
      <div className="container relative z-10 flex min-h-[calc(100svh-86px)] max-h-[60rem]">
        <div className="grid h-full w-full grid-cols-1 gap-12 py-16 md:grid-cols-2 md:gap-20 md:py-24 lg:py-28">
          <div className="flex flex-col justify-end">
            <p className="eyebrow text-white">Custom homes · since 1998</p>
            <h1 className="text-h1 text-white">{heading}</h1>
            <div className="mt-8">
              <Button asChild variant="alternate"><a href="#contact">Start a conversation</a></Button>
            </div>
          </div>
          <div className="flex flex-col justify-end md:items-end">
            <p className="hero-description text-medium text-white">{description}</p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0">
        <img src={image.src} className="size-full object-cover" alt={image.alt} />
        <div className="hero-shade absolute inset-0" />
      </div>
    </section>
  );
}

export function Stats3({ image }: { image: Image }) {
  const stats = [
    { value: "50+", label: "Custom homes completed" },
    { value: "5", label: "States licensed to build" },
    { value: "1998", label: "Building with purpose since" },
  ];
  return (
    <section id="about" className="proof-section relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-20 lg:mb-20">
          <div>
            <p className="eyebrow text-white">Built on reputation</p>
            <h2 className="text-h2 text-white">Quality construction, professionally delivered.</h2>
          </div>
          <div>
            <p className="text-medium text-white">From pre-construction planning through an ironclad warranty, experienced teams bring clarity, craftsmanship, and ongoing communication to every home.</p>
            <Button asChild variant="secondary-alt" className="mt-8"><a href="#contact">Start a conversation</a></Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {stats.map((stat) => (
            <div key={stat.label} className="proof-stat border-l border-white/60 pl-7">
              <p>{stat.value}</p><h3>{stat.label}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0">
        <img src={image.src} className="size-full object-cover" alt={image.alt} />
        <div className="absolute inset-0 bg-[#131812]/85" />
      </div>
    </section>
  );
}

type Project = { title: string; location: string; description: string; image: Image };

export function Portfolio12({ projects }: { projects: Project[] }) {
  return (
    <section id="portfolio" className="portfolio-section px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <header className="mx-auto mb-12 max-w-2xl text-center md:mb-20">
          <p className="eyebrow">Selected residences</p>
          <h2 className="text-h2">Homes shaped by place.</h2>
          <p className="mt-6 text-medium">Distinct homes across mountain, lake, and island landscapes, built for the way their owners live.</p>
        </header>
        <div className="portfolio-grid columns-1 after:block md:columns-2 md:gap-x-8 lg:columns-3">
          {projects.map((project) => (
            <article key={project.title} className="mb-10 break-inside-avoid">
              <div className="project-image mb-6 overflow-hidden">
                <img src={project.image.src} alt={project.image.alt} className="w-full object-cover" />
              </div>
              <Badge>{project.location}</Badge>
              <h3 className="mt-4 text-h5">{project.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{project.description}</p>
              <a href="#contact" className="project-link mt-5 inline-flex items-center gap-2">Discuss a project <ChevronRight className="size-5" /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonial13({ image, logo }: { image: Image; logo: Image }) {
  return (
    <section id="approach" className="testimonial-section px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
        <img src={image.src} alt={image.alt} className="testimonial-image aspect-square w-full object-cover" />
        <div>
          <div className="mb-7 flex gap-1" aria-label="Five star client feedback">
            {Array.from({ length: 5 }).map((_, index) => <StarFull key={index} className="size-5" />)}
          </div>
          <p className="eyebrow">Trusted through the finish</p>
          <h2 className="testimonial-quote">Clients return for honest planning, responsive communication, and quality craftsmanship that lasts well beyond move-in.</h2>
          <div className="mt-8 flex items-center gap-6">
            <div><p className="font-semibold">Built for lasting trust</p><p className="text-sm">Repeat clients across multiple homes</p></div>
            <div className="h-12 w-px bg-scheme-border" />
            <img src={logo.src} alt={logo.alt} className="testimonial-logo" />
          </div>
        </div>
      </div>
    </section>
  );
}

type ContactItem = { icon: ReactNode; title: string; text: string };

export function Contact15({ image, contacts }: { image: Image; contacts: ContactItem[] }) {
  return (
    <section id="contact" className="contact-section px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-12 md:mb-20 md:grid-cols-[1fr_.8fr] md:gap-20">
          <div className="max-w-xl">
            <p className="eyebrow">Your home starts here</p>
            <h2 className="text-h2">Let’s build something enduring.</h2>
            <p className="mt-6 text-medium">Tell us where you’re building and what you imagine. Our team can help shape the budget, timeline, and path forward.</p>
            <Button asChild className="mt-8"><a href="mailto:info@greenwood-homes.com">Start a conversation</a></Button>
          </div>
          <div className="grid gap-8">
            {contacts.map((contact) => (
              <div key={contact.title} className="flex gap-4 border-b border-black/15 pb-7">
                <span className="text-[#778315]">{contact.icon}</span>
                <div><h3 className="font-semibold">{contact.title}</h3><p className="mt-1 text-sm text-text-secondary">{contact.text}</p></div>
              </div>
            ))}
          </div>
        </div>
        <img src={image.src} className="contact-image h-[28rem] w-full object-cover" alt={image.alt} />
      </div>
    </section>
  );
}

export function Footer3({ logo }: { logo: Image }) {
  return (
    <footer className="site-footer px-[5%] py-12 md:py-20">
      <div className="container">
        <div className="grid gap-12 pb-12 md:grid-cols-[1.3fr_1fr] md:pb-16">
          <div>
            <img src={logo.src} alt={logo.alt} className="footer-logo" />
            <p className="mt-8 max-w-sm text-sm">Award-winning custom homes across the Lake Tahoe Basin, Truckee, Hawaii, Idaho, and Utah.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div className="grid content-start gap-3"><a href="#portfolio">Portfolio</a><a href="#about">About</a><a href="#approach">Approach</a></div>
            <div><p className="font-semibold">Offices</p><p className="mt-3">Incline Village, Nevada<br />Coeur d’Alene, Idaho<br />Kauai, Hawaii</p></div>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-white/25 pt-7 text-xs md:flex-row md:justify-between">
          <p>© 2026 Greenwood Homes. Licensed general contractor in CA, NV, HI, ID, and UT.</p>
          <a href="#top">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
