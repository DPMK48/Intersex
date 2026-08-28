import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "./items";
import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // const BannerSlider = Slider.default.default;
  const settings = {
    // dots: true,
    // arrows: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
  };

  const [animateY, setAnimateY] = useState(320);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setAnimateY(270); // Mobile screen
      } else if (window.innerWidth < 1024) {
        setAnimateY(300); // Tablet screen
      } else {
        setAnimateY(320); // Desktop screen
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial values

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Box
        as="section"
        className="carousel"
        id="home"
        // mt={"150px"}
        overflowX={"hidden"}
        w={"100%"}
        pos={"relative"}
        transition="margin-top 0.3s ease-in-out"
      >
        <Slider {...settings}>
          {list.map((item, idx) => {
            const { title, text, image } = item;
            const isActiveSlide = currentSlide === idx;
            return (
              <Flex key={idx} fontFamily={"nunito"}>
                <img src={image} alt="Intersex Nigeria community" />
                <Flex
                  flexDir={"column"}
                  className="carousel-bg"
                  justifyContent={"flex-start"}
                  pt={{ base: "60px", md: "0px" }}
                >
                  <motion.div
                    key={`${idx}-title-${isActiveSlide}`}
                    initial={{ y: 600, opacity: 0 }}
                    animate={{ y: 170, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 2 }}
                  >
                    <Text
                      as={"h1"}
                      fontSize={{
                        base: "1.1rem",
                        sm: "1.5rem",
                        md: "2rem",
                        lg: "60px",
                      }}
                      textTransform={"uppercase"}
                    >
                      {title}
                    </Text>
                  </motion.div>
                  <motion.div
                    key={`${idx}-text-${isActiveSlide}`}
                    initial={{ y: 750, opacity: 0 }}
                    animate={{ y: animateY, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 2 }}
                  >
                    <Text
                      as={"p"}
                      className="main"
                      fontSize={{
                        base: "0.9rem",
                        sm: "1.1rem",
                        md: "1.3rem",
                        lg: "20px",
                      }}
                    >
                      {text}
                    </Text>
                  </motion.div>
                </Flex>
                {/* <FaQuoteRight className="icon"  /> */}
                {/* <Button text={"donate now"} /> */}
              </Flex>
            );
          })}
        </Slider>
        {/* <Box
          bg={"linear-gradient(180deg, #FFB832C9 0%, #F48634 100%)"}
          w={"340px"}
          h={"250px"}
          pos={'absolute'}
          bottom={-10}
          zIndex={10}
        ></Box> */}
      </Box>
    </>
  );
};
export default Banner;
