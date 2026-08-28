// import React from 'react'
import { Box } from "@chakra-ui/react";
import Banner from "./Banner";
import Center from "./Center";
import Contact from "./Contact";
import Faq from "./Faq";
import Volunteer from "./Volunteer";
import Wwd from "./Wwd";
import AboutUs from "./AboutUs";
import Priorities2 from "./Priorities2";
import News from "./News";
import Gallery from "./Gallery";
// import Contact1 from "./Contact1";
import ScrollToTopButton from "./ScrollToTop";
import NewsletterSignup from "./Newsletter";
import Popup from "./Popup";
import Epublications from "./Epublications";

const Home = () => {
  return (
    <Box w={"100%"} overflowX={"hidden"}>
      <Popup />
      <section>
        <Banner />
      </section>
      <section>
        <AboutUs />
      </section>
      <section>
        <Priorities2 />
      </section>
      <section>
        <Center />
      </section>
      <section>
        <Wwd />
      </section>
      <section>
        <Faq />
      </section>
      <section>
        <Epublications />
      </section>
      <section>
        <Gallery />
      </section>
      <section>
        <News />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <NewsletterSignup />
      </section>
      <section>
        <Volunteer />
      </section>
      <ScrollToTopButton />
    </Box>
  );
};

export default Home;
