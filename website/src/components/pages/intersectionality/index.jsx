import ScrollToTop from "../../../ui/ScrollToTop";
import Footer from "./Footer";
import HomePage from "./Homepage";
import Navbar from "./Navbar";
import Resources from "./Resources";
import WhatIs from "./WhatIs";
import WhyIntersectionality from "./WhyIntersectionality";

const Intersectionality = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <HomePage />
      <WhatIs />
      <WhyIntersectionality />
      <Resources />
      <Footer />
    </>
  );
};

export default Intersectionality;
