/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Flex,
  Heading,
  Text,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { Routes } from "../../../routes/baseRoutes";
import { useTranslation } from "react-i18next";

export default function ReportsLanding() {
  const { t } = useTranslation();

  return (
    <Flex
      flexDir={"column"}
      fontFamily={"nunito"}
      boxShadow={"inner"}
      w={"100%"}
      pt={{ base: "60px", md: "0px" }}
      h={"100%"}
    >
      {/* Hero Section */}
      <Box
        bgImage={"/images/abuse-bg.jpg"}
        bgAttachment={"fixed"}
        h={{ base: "200px", lg: "380px" }}
        w={"100%"}
        bgSize={"cover"}
        bgPos={"center"}
        pos={"relative"}
      >
        <Flex
          pos={"absolute"}
          h={{ base: "200px", lg: "380px" }}
          w={"100%"}
          bg={"#000000c5"}
          top={0}
          bottom={0}
          justifyContent={"center"}
          alignItems={"center"}
          left={0}
          right={0}
          backdropFilter={"blur(3px)"}
        >
          <Text
            fontWeight={700}
            color={"#fff"}
            fontSize={{ base: "30px", lg: "48px" }}
            py={{ base: "1.5rem", lg: "2rem" }}
            lineHeight={"120%"}
            fontFamily={"inter"}
            textAlign={"center"}
            as={"h1"}
          >
            {t("reports.landingTitle", "Reports at Intersex Nigeria")}
          </Text>
        </Flex>
      </Box>

      {/* Intro & Cards */}
      <Box
        maxW="1560px"
        mx="auto"
        px={{ base: "1.5rem", lg: "50px", xl: "100px" }}
        py={{ base: "3rem", lg: "4rem" }}
        w="100%"
      >
        <Box maxW="800px" mx="auto" textAlign="center" mb={{ base: "3rem", lg: "4rem" }}>
          <Heading
            as="h2"
            size="lg"
            fontFamily="inter"
            color="purple.800"
            mb={4}
          >
            {t("reports.howCanWeHelp", "How Can We Support You Today?")}
          </Heading>
          <Text fontSize={{ base: "16px", md: "18px" }} color="gray.600" lineHeight="tall">
            {t(
              "reports.landingIntro",
              "Intersex Nigeria is dedicated to creating a safe, just, and supportive environment. We offer two distinct reporting channels. Please select the option below that best matches your situation. Your safety and privacy are our top priorities."
            )}
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, lg: 12 }} maxW="1200px" mx="auto">
          {/* Card 1: Intersex Violations and Cases */}
          <Flex
            as={Link}
            to={Routes.intersexViolations}
            flexDir="column"
            justifyContent="space-between"
            bg="white"
            border="1px solid"
            borderColor="purple.100"
            borderRadius="2xl"
            p={{ base: 6, lg: 10 }}
            boxShadow="md"
            _hover={{
              transform: "translateY(-6px)",
              boxShadow: "2xl",
              borderColor: "purple.300",
              textDecoration: "none",
            }}
            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            cursor="pointer"
          >
            <Box>
              <Heading
                as="h3"
                fontSize={{ base: "20px", lg: "24px" }}
                fontFamily="inter"
                color="purple.900"
                mb={4}
              >
                {t(
                  "reports.violationsTitle",
                  "Intersex Violations and Cases"
                )}
              </Heading>
              <Text fontSize={{ base: "15px", lg: "16px" }} color="gray.600" lineHeight="relaxed" mb={8}>
                {t(
                  "reports.violationsDesc",
                  "Report human rights violations, acts of discrimination, violence, or systemic rights violations experienced by or witnessed against intersex individuals in Nigeria. The information and data collected here is protected and handled confidentially under our strict data privacy policies."
                )}
              </Text>
            </Box>
            <Flex alignItems="center" color="purple.600" fontWeight="bold" fontSize="16px" gap={2}>
              {t("reports.reportViolation", "Report a Rights Violation")} <Icon as={FaArrowRight} />
            </Flex>
          </Flex>

          {/* Card 2: Safeguarding at Intersex Nigeria */}
          <Flex
            as={Link}
            to={Routes.safeguarding}
            flexDir="column"
            justifyContent="space-between"
            bg="white"
            border="1px solid"
            borderColor="purple.100"
            borderRadius="2xl"
            p={{ base: 6, lg: 10 }}
            boxShadow="md"
            _hover={{
              transform: "translateY(-6px)",
              boxShadow: "2xl",
              borderColor: "purple.300",
              textDecoration: "none",
            }}
            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            cursor="pointer"
          >
            <Box>
              <Heading
                as="h3"
                fontSize={{ base: "20px", lg: "24px" }}
                fontFamily="inter"
                color="purple.900"
                mb={4}
              >
                {t(
                  "reports.safeguardingTitle",
                  "Safeguarding at Intersex Nigeria"
                )}
              </Heading>
              <Text fontSize={{ base: "15px", lg: "16px" }} color="gray.600" lineHeight="relaxed" mb={8}>
                {t(
                  "reports.safeguardingDesc",
                  "Report concerns regarding safety, abuse, harassment, boundary violations, or misconduct involving staff, volunteers, consultants, partners, or anyone else connected to Intersex Nigeria. We are committed to responding swiftly, respectfully, and with complete confidentiality."
                )}
              </Text>
            </Box>
            <Flex alignItems="center" color="#c98a00" _hover={{ color: "orange" }} fontWeight="bold" fontSize="16px" gap={2}>
              {t(
                "reports.reportSafeguarding",
                "Report a Safeguarding Concern"
              )}{" "}
              <Icon as={FaArrowRight} />
            </Flex>
          </Flex>
        </SimpleGrid>

        {/* Security / Safety assurance info */}
        <Box
          mt={{ base: 12, lg: 16 }}
          p={{ base: 6, lg: 8 }}
          bg="rgba(100, 17, 126, 0.05)"
          borderLeft="4px solid"
          borderColor="purple.500"
          borderRadius="md"
          maxW="1200px"
          mx="auto"
        >
          <Heading as="h4" size="sm" fontFamily="inter" color="purple.900" mb={2}>
            {t(
              "reports.privacyTitle",
              "Your Privacy and Confidentiality are Assured"
            )}
          </Heading>
          <Text fontSize={{ base: "14px", md: "15px" }} color="gray.700" lineHeight="relaxed">
            {t(
              "reports.privacyText",
              "All reports submitted through our portals are stored securely and reviewed exclusively by designated, highly trained personnel. Your information will never be shared without your explicit consent, and no one will face repercussions for reporting concerns in good faith."
            )}
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}
