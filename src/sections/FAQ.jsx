import React from "react";
import { Accordion } from "@mantine/core";
import { faqs } from "../constant";

// See groceries data above
const items = faqs.map((item) => (
  <Accordion.Item key={item.title} value={item.title}>
    <Accordion.Control
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        // borderRadius: "10px",
        fontWeight: 900,
        marginTop: "10px",
      }}
    >
      {item.title}
    </Accordion.Control>
    <Accordion.Panel
      style={{
        fontSize: "12px",
      }}
    >
      {item.description}
    </Accordion.Panel>
  </Accordion.Item>
));

const FAQ = () => {
  return (
    <div id="faq" className="my-[30px] sm:my-[60px] w-[80%] mx-auto">
      <div className="text-center font-bold text-2xl sm:text-3xl mb-4">
        Frequently Asked Questions
      </div>
      <div className="max-w-[800px] mx-auto">
        <Accordion transitionDuration={500} defaultValue="Apples">
          {items}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
