import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { gallery } from "./items";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../../../ui/Button";
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const { t } = useTranslation();
  const scrollingDivRef = useRef(null);
  // const contentRef = useRef(null);

  useEffect(() => {
    const container = document.querySelector(".scroll-container");
    const content = document.querySelector(".scroll-content");
    // Get the container and content elements

    // Set the scroll amount and interval time
    const scrollAmount = 1; // Adjust this value to control the scroll speed
    const interval = 15;

    // Clone the content and append it to the container
    // if (isLargerThan768) {
    container.appendChild(content.cloneNode(true));
    // }
    // Function to scroll the content horizontally
    function scrollHorizontally() {
      container.scrollLeft += scrollAmount;

      if (container.scrollLeft >= content.offsetWidth) {
        container.scrollLeft = 0;
      }

      setTimeout(() => {
        requestAnimationFrame(scrollHorizontally);
      }, interval);
    }

    scrollHorizontally();
  }, []);
  return (
    <Box
      py={{ base: "2rem", lg: "3rem" }}
      fontFamily={"nunito"}
      bg={"#fefefe"}
    >
      <Flex
        gap={"10px"}
        alignItems={"center"}
        px={{ base: "1rem", lg: "50px", xl: "100px" }}
      >
        <Box w={"50px"} h={"4px"} bg={"purple"}></Box>
        <Text
          fontSize={{ base: "12px", md: "16px" }}
          fontWeight="bold"
          textTransform={"uppercase"}
        >
          {t("home.galleryLabel", "gallery")}
        </Text>
      </Flex>
      <Flex
        justifyContent={"space-between"}
        alignItems={"baseline"}
        w={"100%"}
        px={{ base: "1rem", lg: "50px", xl: "100px" }}
        // pb={{ base: "1rem", lg: "1.5rem" }}
      >
        <Text
          fontWeight={700}
          color={"#1d2130"}
          w={"100%"}
          fontSize={{ base: "22px", md: "40px" }}
          pb={{ base: "1.5rem", lg: "2rem" }}
          lineHeight={"120%"}
          maxW={{ lg: "790px" }}
          fontFamily={"inter"}
          as={"h2"}
        >
          {t(
            "home.galleryTitle",
            "A Visualization of Intersex Nigeria’s Advocacy and Community Impact"
          )}
        </Text>
        <Link to={"/gallery"}>
          <Button
            text={t("common.seeMore", "See more")}
            fontSize={"16px"}
            display={{ base: "none", lg: "flex" }}
            bg={"#F2C94C"}
            px={"32px"}
            py={"16px"}
            maxW={"200px"}
            textTransform={""}
            hoverBg={"purple"}
            hoverColor={"white"}
            color={"black"}
          />
        </Link>
      </Flex>

      <Flex
        // flexDir={"column"}
        alignItems={"center"}
        px={"100px"}
        pb={{ base: "1rem", md: 0 }}
        mx={"20px"}
        overflowX={"hidden"}
        ref={scrollingDivRef}
        className={"scroll-container"}
      >
        <Flex
          id="containeris"
          className="scroll-content"
          // ref={contentRef}
          // display={{ base: "none", md: "flex" }}
        >
          {gallery.map((item, idx) => {
            return (
              <Flex
                key={idx}
                w={{ base: "250px", md: "380px" }}
                pl={{ base: "15px", md: "22px" }}
                h={{ base: "328px", md: "500px" }}
              >
                <Image
                  src={item}
                  alt={
                    "Intersex Nigeria Advocacy, Events, and Community Impact"
                  }
                  borderRadius={{ base: "22px", md: "42px" }}
                  objectFit={"cover"}
                />
              </Flex>
            );
          })}
        </Flex>
      </Flex>
      <Flex
        display={{ base: "flex", lg: "none" }}
        w={"100%"}
        // mt={"1rem"}
        justifyContent={"center"}
      >
        <Link to={"/gallery"}>
          <Button
            text={t("common.discoverMore", "Discover more")}
            fontSize={"14px"}
            display={{ base: "flex", lg: "none" }}
            bg={"#F2C94C"}
            px={"28px"}
            py={"16px"}
            maxW={"200px"}
            textTransform={""}
            hoverBg={"purple"}
            hoverColor={"white"}
            color={"black"}
          />
        </Link>
      </Flex>
    </Box>
  );
};

export default Gallery;
