import { Footer, Nav } from "~components";
import { useScrollReveal } from "~hooks";

import { About } from "./About";
import { BigMark } from "./BigMark";
import { Contact } from "./Contact";
import { Hero } from "./Hero";
import { Process } from "./Process";
import { Services } from "./Services";
import { Work } from "./Work";

export const HomePage = () => {
  useScrollReveal();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Process />
        <Work />
        <About />
        <Contact />
        <BigMark />
      </main>
      <Footer />
    </>
  );
};
