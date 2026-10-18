// import React from 'react'
import { Box, Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Center = () => {
  const { t } = useTranslation();
  return (
    <Flex
      // alignItems={"center"}
      flexDir={"column"}
      pos={"relative"}
      w={"100%"}
      bg={"#fefefe"}
      // h={"75vh"}
      px={{ base: "1rem", lg: "50px", xl: "100px" }}
      py={{ base: "2rem", lg: "3rem" }}
      // gap={"100px"}
      fontFamily={"nunito"}
    >
      <Flex
      // alignItems={"center"}
      // flexDir={"column"}
      // w={"60%"}
      // pos={"absolute"}
      >
        <Text
          as={"h2"}
          color={"blackish"}
          lineHeight={"120%"}
          w={{ base: "100%", xl: "85%" }}
          fontWeight={700}
          textAlign={"left"}
          fontSize={{ base: "22px", md: "40px" }}
          pb={{ base: "1.5rem", lg: "2rem" }}
          textTransform={"capitalize"}
          fontFamily={"inter"}
        >
          {t("home.documentaryTitle")}
        </Text>
      </Flex>
      {/* <Text
        color={"#000"}
        fontSize={"16px"}
        fontWeight={400}
        textAlign={"justify"}
        pb={"30px"}
        ml={{ md: "", xl: "8rem" }}
        lineHeight={"30px"}
      >

      </Text> */}
      <Box
        borderRadius={"1rem"}
        w={"100%"}
        h={{ base: "40vh", md: "90vh" }}
      >
        <iframe
          width="100%"
          height="100%"
          style={{ borderRadius: "1rem" }}
          src="https://www.youtube.com/embed/iqR08YvUPIg?rel=0"
          title="In between sexes - A documentary of intersex persons and
          their lived experiences in nigeria"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          // frameBorder="0"
        ></iframe>
      </Box>
    </Flex>
  );
};

export default Center;
