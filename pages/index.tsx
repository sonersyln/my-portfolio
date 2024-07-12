import About from "@/Components/AboutMe/About";
import Footer from "@/Components/Footer/Footer";
import Hero from "@/Components/Welcome/Hero";
import MobileNav from "@/Components/Navbar/MobileNav";
import Nav from "@/Components/Navbar/Nav";
import Projects from "@/Components/Projects/Projects";
import Services from "@/Components/MyServices/Services";
import Skils from "@/Components/EducationSkill/Skils";
import Testimonial from "@/Components/ReferenceReview/Testimonial";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  useEffect(() => {
    AOS.init({
      disable: false,
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,

      offset: 120,
      delay: 0,
      duration: 400,
      easing: "ease",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        <Hero />
        <div className="relative z-[30]">
        
          <div id="aboutSection">
            <About />
          </div>
          <div id="servicesSection">
            <Services />
          </div>
          <Skils />
          <div id="projectSection">
            <Projects />
          </div>
          <Testimonial />
          <div id="footerSection">
            <Footer />
          </div>
        
          </div>
      </div>
    </div>
  );
};

export default HomePage;
