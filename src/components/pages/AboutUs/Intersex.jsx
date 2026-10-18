import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { objectives } from "./items";
import { useTranslation } from "react-i18next";

const Intersex = () => {
  const { t } = useTranslation();
  const images = [
    "https://res.cloudinary.com/dcjebpvia/image/upload/f_auto/v1751211793/intersex-ng-images/about3.jpg",
    "https://res.cloudinary.com/dcjebpvia/image/upload/f_auto/v1751211792/intersex-ng-images/about2.jpg",
    "https://res.cloudinary.com/dcjebpvia/image/upload/f_auto/v1751211794/intersex-ng-images/about4.jpg",
  ];

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Flex
      flexDir={"column"}
      pos={"relative"}
      w={"100%"}
      bg={"#fefefe"}
      // h={"75vh"}
      pt={{ base: "60px", md: "0px" }}
      fontFamily={"nunito"}
      boxShadow={"inner"}
    >
      <Box
        bgImg={"https://res.cloudinary.com/dcjebpvia/image/upload/f_auto/v1751212981/intersex-ng-images/staff.webp"}
        bgAttachment={"fixed"}
        h={{ base: "40vh", md: "60vh" }}
        bgPos={{ base: "center", md: "" }}
        bgSize={"cover"}
      >
        <Flex
          as={"h1"}
          color={"#fff"}
          lineHeight={"120%"}
          w={{ base: "100%", xl: "100%" }}
          fontWeight={700}
          fontSize={{ base: "35px", md: "48px" }}
          textTransform={"capitalize"}
          textAlign={"center"}
          fontFamily={"inter"}
          pb={"1rem"}
          bg={"#000000c5"}
          backdropFilter={"blur(2px)"}
          h={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {t("about.briefHistory", "Brief history of Intersex Nigeria")}
        </Flex>
      </Box>

      <Flex
        flexDir={"column"}
        px={{ base: "1rem", lg: "50px", xl: "100px" }}
        py={{ base: "2rem", lg: "3rem" }}
        gap={"100px"}
      >
        <Text
          textAlign={{ base: "justify", md: "left" }}
          fontSize={{ base: "16px", md: "16px" }}
          fontFamily={"nunito"}
          color={"blackish"}
          whiteSpace="pre-line"
        >
          {t(
            "about.historyText",
            "Intersex Nigeria was established on November 25th, 2019, by Obioma Chukwuike, in response to the critical need for dedicated support, advocacy, and visibility for intersex persons in Nigeria. The organization was born out of a recognition of the systemic challenges and societal stigmas faced by the intersex community.\n\nSince its inception, Intersex Nigeria has worked tirelessly to advocate for the rights of intersex persons, striving to create a society where they can enjoy bodily integrity and autonomy without fear of discrimination or stigma. By employing a feminist lens, we have engaged in community organizing, conducted research, and spearheaded public advocacy efforts, significantly advancing the rights and well-being of intersex persons in Nigeria.\n\nWe have made remarkable progress in raising public awareness and understanding of intersex issues. Through advocacy, social media campaigns, youth-focused sensitization, workshops, and community outreach programs, we have aimed to dispel myths and stereotypes surrounding people with variations in sex characteristics and promote a climate of acceptance and respect."
          )}
        </Text>
      </Flex>

      <Flex
        direction={{ base: "column", md: "row" }}
        fontFamily={"nunito"}
        pb={"3rem"}
        alignItems={"center"}
        gap={{ base: "2rem", md: "1rem", lg: "3rem" }}
      >
        <Box
          mt={{ base: 4, md: 0 }}
          w={"100%"}
          borderRadius="xl"
          display={{ base: "block", md: "none" }}
        >
          <Box overflow="hidden">
            <Slider {...settings}>
              {images.map((src, index) => (
                <div key={index}>
                  <Image
                    src={src}
                    alt="Intersex Nigeria Mission and Vision"
                    h={"350px"}
                    w={"100%"}
                    objectFit={"cover"}
                    objectPosition={"center"}
                  />
                </div>
              ))}
            </Slider>
          </Box>
        </Box>

        <VStack
          align="flex-start"
          spacing={8}
          pl={{ base: "1rem", lg: "100px" }}
          pr={{ base: "1rem", lg: 0 }}
          // flex={1}
          w={{ base: "100%", md: "50%" }}
          // justifyContent={'center'}
        >
          <Box>
            <Heading
              mb={2}
              color="blackish"
              fontSize={{ base: "24px", md: "32px" }}
              fontFamily={"inter"}
            >
              {t("about.ourVision", "Our Vision")}
            </Heading>
            <Text
              color="blackish"
              fontSize={{ base: "16px", md: "16px" }}
              textAlign={"justify"}
            >
              {t(
                "about.visionText",
                "Our vision is to see a society where intersex persons, from birth, have rights to bodily integrity and autonomy and are free from stigma and discrimination."
              )}
            </Text>
          </Box>

          <Box>
            <Heading
              mb={2}
              color="blackish"
              fontSize={{ base: "24px", md: "32px" }}
              fontFamily={"inter"}
            >
              {t("about.ourMission", "Our Mission")}
            </Heading>
            <Text
              color="blackish"
              fontSize={{ base: "16px", md: "16px" }}
              textAlign={"justify"}
            >
              {t(
                "about.missionText",
                "To create an enabling society that promotes the visibility, inclusion, bodily autonomy, sexual and reproductive health including mental well-being and human rights of intersex persons in Nigeria, through community organizing, research, advocacy, and public engagements using a feminist lens."
              )}
            </Text>
          </Box>
        </VStack>

        <Box
          // flex={1}
          // ml={{ base: 0, md: 8 }}
          mt={{ base: 8, md: 0 }}
          w={"50%"}
          // mr={"-2%"}
          p={2}
          mr={{ base: "1rem", lg: "100px" }}
          // border={"3px solid orange"}
          borderRadius="xl"
          display={{ base: "none", md: "block" }}
        >
          <Box
            // bg="white"
            borderRadius="lg"
            // boxShadow="lg"
            overflow="hidden"
          >
            <Slider {...settings}>
              {images.map((src, index) => (
                <div key={index}>
                  <Image
                    src={src}
                    alt="Intersex Nigeria Mission and Vision"
                    h={"450px"}
                    w={"100%"}
                    objectFit={"cover"}
                    objectPosition={"center 40%"}
                  />
                </div>
              ))}
            </Slider>
          </Box>
        </Box>
      </Flex>

      <Box
        bgImg={"https://res.cloudinary.com/dcjebpvia/image/upload/f_auto/v1751212563/intersex-ng-images/report.jpg"}
        bgPos={"center"}
        // bgAttachment={"fixed"}
        h={{ base: "30vh", md: "50vh" }}
        mt={{ base: 0, md: "1rem" }}
        mx={{ base: "1rem", lg: "100px" }}
        borderRadius={{ base: "12px", md: "1rem" }}
      >
        <Flex
          as={"h2"}
          borderRadius={"1rem"}
          mb={2}
          color="white"
          fontSize={{ base: "26px", md: "48px" }}
          fontFamily={"inter"}
          fontWeight={700}
          textAlign={"center"}
          bg={"#000000c5"}
          backdropFilter={"blur(2px)"}
          h={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {t("about.ourObjectives", "Our Objectives")}
        </Flex>
      </Box>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={8}
        px={{ base: "1rem", lg: "50px", xl: "100px" }}
        py={{ base: "2rem", lg: "3rem" }}
      >
        {objectives.map((feature, index) => (
          <VStack key={index} spacing={4} w={"100%"}>
            <Box
              // bg="purple"
              // p={4}
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              gap={2}
              w={"100%"}
            >
              <Box
                bg={"orange"}
                p={4}
                borderRadius="5px"
                boxSize="35px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon
                  as={feature.icon}
                  boxSize={{ base: 5, md: 5 }}
                  color="purple"
                />
              </Box>

              <Heading
                as="h3"
                fontSize={{ base: "20px", md: "22px" }}
                // textAlign="center"
                color="blackish"
                fontFamily={"inter"}
              >
                {feature.keyTitle ? t(feature.keyTitle, feature.title) : feature.title}
              </Heading>
            </Box>
            <Text
              color="blackish"
              textAlign="justify"
              fontSize={{ base: "16px", md: "16px" }}
            >
              {feature.keyDesc ? t(feature.keyDesc, feature.description) : feature.description}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Intersex;
