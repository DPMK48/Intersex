import { Box, Flex, Image, Text } from "@chakra-ui/react";

const AboutUs = () => {
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
          About us
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
        Intersex Nigeria{" "}
        <Text as={"span"} color={"grey"}>
          (Center for Healthcare Development and Youth Empowerment)
        </Text>{" "}
        is an Intersex-led Non-Governmental Organization in Nigeria
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
          We promote and advocate for the sexual reproductive health,
          self-determination, bodily autonomy and overall human rights
          of intersex people in Nigeria.
          <br />
          <br />
          Through community building, advocacy, evidence-based
          research, empowerment, educational and informational
          resources on intersex-related issues to the public,
          partners, stakeholders and our community.
          <br />
          <br />
          Intersex Nigeria is a body by and for people with intersex
          variations. We promote the human rights, self-determination
          and bodily autonomy of intersex people in Nigeria. We build
          community, evidence, capacity, education and information
          resources. Our goals are to help create a society where our
          bodies are not stigmatized and discriminated against, and
          where our rights as a people are recognized and respected.
        </Text>
      </Flex>
    </Flex>
  );
};

export default AboutUs;
