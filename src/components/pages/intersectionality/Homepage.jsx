import {
  Box,
  Flex,
  Text,
  Image,
  Container,
  Heading,
} from "@chakra-ui/react";
import Button from "../../../ui/Button";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <Box>
      {/* ---------------- HERO SECTION ---------------- */}
      <Box
        bgImage={"/images/homepage.png"}
        bgSize="cover"
        bgPos="bottom center"
        bgRepeat="no-repeat"
        position="relative"
        color="white"
        pt="6"
        pb="32"
        h={{ base: "75vh", lg: "100vh" }}
      >
        {/* HERO TEXT */}
        <Flex
          mx="auto"
          px="6"
          direction="column"
          textAlign="center"
          pos={"absolute"}
          h={{ base: "75vh", lg: "100vh" }}
          w={"100%"}
          bg={"#121a1cc5"}
          top={0}
          bottom={0}
          justifyContent={"center"}
          alignItems={"center"}
          left={0}
          right={0}
        >
          <Heading
            fontSize={{ base: "1.5rem", sm: "1.8rem", md: "45px" }}
            fontWeight="800"
            fontFamily={"inter"}
            wordBreak={"break-word"}
          >
            {t("intersectionality.heroTitle", "INTERSECTIONAL KNOWLEDGE")}
          </Heading>

          <Text
            mt="3"
            fontSize={{ base: "16px", sm: "20px", md: "24px" }}
            fontFamily={"nunito"}
          >
            {t(
              "intersectionality.heroSubtitle",
              "An intersectional learning hub of Intersex Nigeria"
            )}
          </Text>

          <a href="#resources">
            <Button
              mt="8"
              maxW="fit-content"
              mx="auto"
              px={4}
              py={4}
              fontSize={{ base: "16px", md: "18px" }}
              text={t("intersectionality.exploreResources", "EXPLORE RESOURCES")}
            />
          </a>
        </Flex>
      </Box>

      {/* ---------------- ABOUT US SECTION ---------------- */}
      <Container
        py={{ lg: "20" }}
        px={{ base: "1rem", lg: "50px", xl: "100px" }}
        id="about"
        maxW={""}
      >
        {/* 2-COLUMN CONTENT */}
        <Flex
          mt="16"
          direction={{ base: "column", lg: "row" }}
          align="center"
          gap={{ base: "14px", lg: "10" }}
          maxW={"1560px"}
          mx={"auto"}
        >
          {/* IMAGE CARD */}
          <Box bg="white" rounded="lg" shadow="md" flex="1">
            <Image
              src="/images/Intersectional-Activism.png"
              alt="About illustration"
              w="100%"
              h={{ lg: "480px", xl: "100%" }}
              objectFit={"cover"}
              rounded="md"
            />
          </Box>

          {/* TEXT CONTENT */}
          <Box flex="1">
            <Heading
              as={"h2"}
              fontSize={{ base: "20px", md: "40px" }}
              fontFamily={"inter"}
              color="blackish"
            >
              {t(
                "intersectionality.aboutHeading",
                "At The Intersection – An Intersex Nigeria E-Resource Hub"
              )}
            </Heading>
            <Text
              color="blackish"
              fontSize={{ base: "14px", md: "16px" }}
              fontFamily={"nunito"}
              mt={4}
              pb={{ base: 8, lg: 0 }}
            >
              {t(
                "intersectionality.aboutP1",
                "At the intersection is a learning hub and subsidiary of Intersex Nigeria. We are dedicated to promoting and advocating for the sexual reproductive health, self-determination, bodily autonomy, and overall human rights of intersex people in Nigeria."
              )}
              <br />
              <br />
              {t(
                "intersectionality.aboutP2",
                "Through community building, advocacy, evidence-based research, empowerment, educational and informational resources on intersex-related issues, we engage with the public, partners, stakeholders, and our community."
              )}
              <br />
              <br />
              {t(
                "intersectionality.aboutP3",
                "Our goal is to create a society where intersex bodies are not stigmatised and discriminated, and where intersex rights are recognised and respected."
              )}
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
