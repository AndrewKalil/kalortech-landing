import { Nav } from "~components/Nav";
import { useScrollReveal } from "~hooks";

import { About } from "./About";
import { BigMark } from "./BigMark";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Process } from "./Process";
import { Services } from "./Services";

export const HomePage = () => {
  useScrollReveal();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Contact />
        <BigMark />
      </main>
      <Footer />
    </>
  );
};
