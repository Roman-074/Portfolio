import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { Approach } from "../components/sections/Approach";
import { Background } from "../components/sections/Background";
import { Contact } from "../components/sections/Contact";
import { Hero } from "../components/sections/Hero";
import { Projects } from "../components/sections/Projects";
import { Stack } from "../components/sections/Stack";
import { contactChannels } from "../content/contacts";
import { profile } from "../content/profile";
import { site } from "../content/site";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: `${profile.role}, ${profile.specialization}`,
  url: site.url,
  sameAs: contactChannels.filter((channel) => channel.href.startsWith("https://")).map((channel) => channel.href),
  knowsAbout: ["AI agents", "LLM workflows", "Software architecture", "Android", "Kotlin", "Automation"],
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Projects />
        <Approach />
        <Stack />
        <Background />
        <Contact />
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
    </>
  );
}
