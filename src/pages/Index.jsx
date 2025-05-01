import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Contacts from "../sections/Contacts";
import Footer from "../sections/Footer";
import FAQ from "../sections/FAQ";
import Gallery from "../sections/Gallery";

const Index = () => {
  // State to manage mobile menu
  const [isOpen, setIsOpen] = useState(false);
  // State to manage the modal
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModalWithImage = (image) => {
    setSelectedImage(image);
    open();
  };

  return (
    <div className="">
      <Hero isOpen={isOpen} setIsOpen={setIsOpen} />
      <About />
      <Services />
      <Contacts />
      <Gallery open={openModalWithImage} />
      <FAQ />
      <Footer />
      <Modal
        opened={opened}
        onClose={close}
        title="Memark Gallery"
        size="lg"
        centered
        transition="fade"
        transitionDuration={600}
        transitionTimingFunction="ease"
        styles={{
          modal: {
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
            padding: "20px",
          },
        }}
      >
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Selected"
            className="w-full h-auto rounded"
          />
        )}
      </Modal>
    </div>
  );
};

export default Index;
