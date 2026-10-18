import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <Flex
      flexDir={"column"}
      px={{ base: "1rem", lg: "50px", xl: "100px" }}
      py={{ base: "2rem", lg: "3rem" }}
      fontFamily={"nunito"}
      bg={"#fefefe"}
    >
      <Flex gap={"10px"} alignItems={"center"}>
        <Box
          w={{ base: "30px", md: "50px" }}
          h={"4px"}
          bg={"purple"}
        ></Box>
        <Text
          fontSize={{ base: "12px", md: "16px" }}
          fontWeight="bold"
          textTransform={"uppercase"}
        >
          {t("home.aboutUs")}
        </Text>
      </Flex>
      <Text
        as={"h1"}
        fontSize={{ base: "22px", md: "40px" }}
        fontWeight={700}
        color={"#1d2130"}
        // maxW={"640px"}
        w={{ base: "100%", xl: "85%" }}
        lineHeight={{ base: "120%", md: "120%" }}
        fontFamily={"inter"}
        // textAlign={{base:'justify', md:''}}
        pb={"2rem"}
      >
        {t("home.aboutUsTitle")}
      </Text>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        gap={{ base: "2rem", md: "" }}
      >
        <Flex
          w={{ base: "100%", md: "50%" }}
          alignItems={"center"}
          flexDir={"column"}
          // borderBottom={"1px solid #1d2130"}
        >
          <Image
            src="https://res.cloudinary.com/dcjebpvia/image/upload/f_auto/v1751212316/intersex-ng-images/logo.webp"
            alt="Intersex Nigeria logo"
            w={{ base: "", md: "auto" }}
            h={{ base: "auto", md: "270px" }}
          />
          <Box w={"50%"} h={"1px"} bg={"#1d21302d"}></Box>
        </Flex>
        <Text
          fontSize={"16px"}
          lineHeight={"20px"}
          color={"#1d2130"}
          textAlign={"justify"}
          pb={"1rem"}
          w={{ md: "40%" }}
        >
          {t("home.aboutUsTextPara1")}
          <br />
          <br />
          {t("home.aboutUsTextPara2")}
          <br />
          <br />
          {t("home.aboutUsTextPara3")}
        </Text>
      </Flex>
    </Flex>
  );
};

export default AboutUs;
