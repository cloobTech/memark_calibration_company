import React from "react";
import AboutCard from "../components/AboutCard";
import { where_choose_us_content } from "../constant";
import WhyChooseUsCard from "../components/WhyChooseUsCard";
import Logos from "../components/Logos";

const About = () => {
  return (
    <div className="" id="about_us">
      <section className="h-[40vh]">
        <div className="text-center flex flex-col">
          <h1 className="text-center text-gray-700 text-3xl md:text-4xl md:mb-2 font-bold my-4 mt-8 ">
            This is who we are
          </h1>
          <p className="text-center justify-center flex items-center gap-2 text-gray-500">
            <span className="w-[50px] h-[2px] bg-gray-500"></span>our mission
            and vision <span className="w-[50px] h-[2px] bg-gray-500"></span>
          </p>
        </div>
      </section>
      <AboutCard />
      <section className="relative top-[-70px] container">
        <h3 className="text-center text-gray-700 text-3xl">Why choose us?</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mt-4">
          {where_choose_us_content.map((item, index) => (
            <WhyChooseUsCard key={index} {...item} />
          ))}
        </div>
      </section>
      <section className="relative top-[-10px] container " id="clientele">
        <h3 className="text-center text-gray-700 text-2xl mb-4">
          Trusted by Industry Leaders
        </h3>
        <p className="text-center text-gray-600 mb-4 text-xs md:text-sm lg:text-base">
          We are proud to be the trusted partner of some of the most reputable
          companies in the industry. Our commitment to quality and excellence
          has earned us the confidence of our esteemed clientele.
        </p>
        <Logos />
      </section>
    </div>
  );
};

export default About;
