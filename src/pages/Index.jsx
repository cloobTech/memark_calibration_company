import React, { useState } from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Contacts from "../sections/Contacts";
import Footer from "../sections/Footer";
import FAQ from "../sections/FAQ";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <Hero isOpen={isOpen} setIsOpen={setIsOpen} />
      <About />
      <Services />
      <Contacts />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
