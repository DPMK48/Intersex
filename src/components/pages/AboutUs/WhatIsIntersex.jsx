import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Icon,
  SimpleGrid,
  Image,
  Circle,
  Divider,
} from "@chakra-ui/react";
import { PiDotOutlineFill } from "react-icons/pi";
import { variations } from "./items";
import { Routes } from "../../../routes/baseRoutes";
import { useTranslation } from "react-i18next";

const WhatIsIntersex = () => {
  const { t } = useTranslation();
  const cardShadow = "lg";

  return (
    <Flex
      flexDir={"column"}
      pos={"relative"}
      w={"100%"}
      bg={"#fff"}
      px={{ base: "1rem", lg: "50px", xl: "100px" }}
      py={{ base: "2rem", lg: "3rem" }}
      fontFamily={"nunito"}
      boxShadow={"inner"}
    >
      <Box
        pt={{ base: "60px", md: "0px" }}
        fontSize={{ base: "16px", md: "18px" }}
      >
        <a
          href={Routes.faq}
          style={{
            color: "purple",
            textDecoration: "underline",
            marginBottom: "16px",
            fontFamily: "inter",
            fontWeight: 500,
          }}
        >
          {t("nav.faq", "Frequently Asked Questions")}
        </a>
      </Box>
      <Text
        as={"h1"}
        color={"#000"}
        lineHeight={"120%"}
        w={{ base: "100%", xl: "85%" }}
        fontWeight={700}
        textAlign={"left"}
        fontSize={{ base: "24px", md: "48px" }}
        textTransform={"capitalize"}
        fontFamily={"inter"}
        pt={{ base: "24px", md: "0px" }}
      >
        {t("nav.whatIsIntersex", "What is Intersex?")}
      </Text>
      <Text
        fontSize={{ base: "14px", sm: "16px", md: "18px" }}
        color={"blackish"}
        textAlign={"left"}
        pt={{ base: "0.5rem", lg: "10px" }}
        pb={{ base: "1.5rem", lg: "2rem" }}
      >
        {t(
          "whatIsIntersex.subtitle",
          "Learning about the natural diversity of human sex characteristics and promoting awareness. Let us Understand Intersex."
        )}
      </Text>
      <Divider borderColor="gray.200" />

      {/* Definition Section */}
      <Box
        bg={"white"}
        shadow={cardShadow}
        border={"1px solid #F3F4F6"}
        borderRadius="16px"
        p={{ base: "12px", md: "49px" }}
        mb={{ base: "24px", md: "64px" }}
        mx="auto"
        mt={{ base: "1rem", md: "3rem" }}
      >
        <VStack spacing={4} align="start">
          <Flex
            gap={{ base: "12px", md: "16px" }}
            alignItems={"center"}
          >
            <Circle
              bgGradient={"linear(to-r, #64117E, #7E22CE)"}
              borderRadius={{ base: "10px", md: "12px" }}
              w={{ base: "40px", md: "48px" }}
              h={{ base: "40px", md: "48px" }}
            >
              <Image src="/icons/book.svg" />
            </Circle>
            <Heading
              fontSize={{ base: "20px", md: "30px" }}
              fontFamily={"inter"}
            >
              {t("whatIsIntersex.definitionTitle", "Definition of Intersex")}
            </Heading>
          </Flex>
          <Box>
            <Text
              fontSize={{ base: "14px", md: "16px" }}
              color="blackish"
              fontFamily={"nunito"}
            >
              {t(
                "whatIsIntersex.definitionP1",
                "Intersex is an umbrella term for the spectrum of innate variations of sex characteristics that naturally occur within the human species. Intersex people are born with variations of sex characteristics (such as genitals, gonads, reproductive organs, hormonal and chromosomal patterns) that are more diverse than stereotypical definitions of male or female bodies."
              )}
              <br />
              <br />{" "}
              {t(
                "whatIsIntersex.definitionP2",
                "Some intersex traits are noticed at birth, while others may not be discovered until puberty, later in life, or never known."
              )}
            </Text>
          </Box>
        </VStack>
      </Box>

      {/* Gender vs Sex Characteristics */}
      <Box
        bg={"#f9f4f9"}
        border={"1px solid #E5E7EB"}
        borderRadius="16px"
        p={{ base: "12px", md: "49px" }}
        mb={{ base: "42px", md: "64px" }}
        mx="auto"
      >
        <Heading
          fontSize={{ base: "20px", md: "30px" }}
          fontFamily={"inter"}
          mb={"32px"}
        >
          {t(
            "whatIsIntersex.genderVsSexTitle",
            "Distinguishing Gender from Sex Characteristics"
          )}
        </Heading>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
          <Box
            bg="white"
            p={{ base: "10px", md: "32px" }}
            borderRadius="12px"
            shadow="sm"
          >
            <Flex gap={"12px"} mb={"16px"}>
              <Image src="/icons/users.svg" />
              <Heading
                fontSize={{ base: "16px", md: "20px" }}
                fontFamily={"inter"}
              >
                {t("whatIsIntersex.genderTitle", "Gender")}
              </Heading>
            </Flex>
            <Text
              fontSize={{ base: "14px", md: "16px" }}
              color="blackish"
            >
              {t(
                "whatIsIntersex.genderDesc",
                "Gender is a concept that refers to socially constructed roles, behaviors, expressions, and identities that a given society considers appropriate for individuals based on their perceived or assigned sex at birth."
              )}
            </Text>
          </Box>

          <Box
            bg="white"
            p={{ base: "10px", md: "32px" }}
            borderRadius="12px"
            shadow="sm"
          >
            <Flex gap={"12px"} mb={"16px"}>
              <Image src="/icons/sex.svg" />
              <Heading
                fontSize={{ base: "16px", md: "20px" }}
                fontFamily={"inter"}
              >
                {t("whatIsIntersex.sexCharacteristicsTitle", "Sex Characteristics")}
              </Heading>
            </Flex>
            <Text
              fontSize={{ base: "14px", md: "16px" }}
              color="blackish"
            >
              {t(
                "whatIsIntersex.sexCharacteristicsDesc",
                "Sex characteristics are physical features relating to sex. Everyone is born with innate primary and secondary sex characteristics."
              )}
            </Text>
            <Flex
              alignItems={"flex-start"}
              gap={{ base: "1px", md: "12px" }}
              mt={"8px"}
            >
              <Icon
                as={PiDotOutlineFill}
                color={"orange"}
                fontSize={{ base: "26px", md: "36px" }}
              >
                .
              </Icon>
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                color="blackish"
              >
                <Text
                  as={"span"}
                  fontWeight={700}
                  color={"gray.700"}
                  fontFamily={"inter"}
                >
                  {t(
                    "whatIsIntersex.primaryLabel",
                    "Primary sex characteristics - "
                  )}
                </Text>
                {t(
                  "whatIsIntersex.primaryDesc",
                  "present at birth and includes genitals, gonads (internal reproductive organs), chromosomes and hormones."
                )}
              </Text>
            </Flex>
            <Flex
              alignItems={"flex-start"}
              gap={{ base: "1px", md: "12px" }}
              mt={"8px"}
            >
              <Icon
                as={PiDotOutlineFill}
                color={"orange"}
                fontSize={{ base: "26px", md: "36px" }}
              >
                .
              </Icon>
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                color="blackish"
              >
                <Text
                  as={"span"}
                  fontWeight={700}
                  color={"gray.700"}
                  fontFamily={"inter"}
                >
                  {t(
                    "whatIsIntersex.secondaryLabel",
                    "Secondary sex characteristics - "
                  )}
                </Text>
                {t(
                  "whatIsIntersex.secondaryDesc",
                  "develops during puberty e.g facial hair, breast, voice pitch, muscle development,etc."
                )}
              </Text>
            </Flex>
            <Text
              fontSize={{ base: "14px", md: "16px" }}
              color="blackish"
            >
              <br />
              {t(
                "whatIsIntersex.sexDefinition",
                "Sex is the biological categorization of a person based on their sex characteristics."
              )}
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Stats Section */}
      <Box
        bg={"#fffbef"}
        border={"1px solid #E5E7EB"}
        borderRadius="16px"
        p={{ base: "12px", md: "49px" }}
        shadow={cardShadow}
        mb={{ base: "42px", md: "64px" }}
        w={"100%"}
        mx="auto"
      >
        <Heading
          fontFamily={"inter"}
          textAlign={"center"}
          mb={{ base: "24px", md: "32px" }}
          fontSize={{ base: "20px", md: "30px" }}
        >
          {t("whatIsIntersex.howCommonTitle", "How Common is Intersex?")}
        </Heading>
        <Flex
          justify="center"
          gap={{ base: "8px", sm: "32px" }}
          mb={"32px"}
          flexDir={{ base: "column", sm: "row" }}
          borderRadius={"16px"}
          flexWrap="wrap"
          align="center"
          textAlign="center"
          maxW={"768px"}
          w={"100%"}
          mx={"auto"}
          h={{ sm: "140px" }}
          p={{ base: "24px", md: "0" }}
          bgGradient={"linear(to-r, #64117E, #7E22CE)"}
        >
          <Box
            color="white"
            fontWeight="bold"
            fontSize={{ base: "28px", md: "36px" }}
            fontFamily={"inter"}
          >
            {t("whatIsIntersex.stat1Number", "1.7%")}
            <Text
              fontSize={{ base: "16px", md: "18px" }}
              fontWeight={400}
              fontFamily={"inter"}
            >
              {t("whatIsIntersex.stat1Label", "of world population")}
            </Text>
          </Box>
          <Image
            src={"/icons/line.svg"}
            transform={{ base: "rotate(90deg)", sm: "none" }}
          />

          <Box
            color="white"
            fontSize={{ base: "28px", md: "36px" }}
            fontFamily={"inter"}
            fontWeight="bold"
          >
            {t("whatIsIntersex.stat2Number", "1 in 60")}
            <Text
              fontSize={{ base: "16px", md: "18px" }}
              fontWeight={400}
              fontFamily={"inter"}
            >
              {t("whatIsIntersex.stat2Label", "births worldwide")}
            </Text>
          </Box>
        </Flex>
        <Text
          fontSize={{ base: "14px", md: "16px" }}
          color="blackish"
          mx={"auto"}
        >
          {t(
            "whatIsIntersex.statsDescP1",
            "Intersex variations are a natural and healthy part of human biodiversity, not a rare anomaly. Experts says that 1.7 percent of the world's population are intersex, highlighting that intersex traits occur in about 1 in 60 births worldwide, making them as common as people with left handedness."
          )}
          <br />
          <br />{" "}
          {t(
            "whatIsIntersex.statsDescP2",
            "This challenges the notion that intersex is an exceptional difference and underscores its status as a natural human variation."
          )}
        </Text>
      </Box>

      {/* Common Intersex Variations */}
      <Box>
        <Heading
          fontSize={{ base: "20px", md: "30px" }}
          fontFamily={"inter"}
        >
          {t(
            "whatIsIntersex.variationsTitle",
            "SOME EXISTING INTERSEX VARIATIONS"
          )}
        </Heading>
        <Text
          fontSize={{ base: "14px", md: "18px" }}
          color={"blackish"}
          textAlign={"left"}
          py={{ base: "24px", lg: "24px" }}
        >
          {t(
            "whatIsIntersex.variationsDesc",
            "Intersex variations can be present in various ways, visible at birth, during puberty, or later in life. Some intersex persons live through life or even die without knowing that they are intersex. Some of the common intersex variations include:"
          )}
        </Text>
        <VStack spacing={"24px"} align="stretch">
          {variations.map((item, idx) => (
            <Box
              key={idx}
              p={{ base: "12px", md: "32px" }}
              shadow={cardShadow}
              borderTop={"1px solid #F3F4F6"}
              borderRadius="12px"
              borderLeft={"3px solid #64117e"}
              borderRight={"3px solid #f5ac07"}
              _hover={{ transform: "scale(1.005)" }}
            >
              <Heading
                fontSize={{ base: "18px", md: "20px" }}
                mb={"10px"}
                fontWeight={600}
                color={"purple"}
                fontFamily={"inter"}
                textAlign={{ base: "center", md: "left" }}
              >
                {item.keyTitle ? t(item.keyTitle, item.title) : item.title}
              </Heading>
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                color="blackish"
              >
                {item.keyDesc ? t(item.keyDesc, item.desc) : item.desc}
              </Text>
            </Box>
          ))}
        </VStack>
      </Box>
    </Flex>
  );
};

export default WhatIsIntersex;
