import React from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Contacts from "../sections/Contacts";
import Footer from "../sections/Footer";
import FAQ from "../sections/FAQ";

const Index = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Services />
      <Contacts />
      <FAQ/>
      <Footer />
    </div>
  );
};

export default Index;
