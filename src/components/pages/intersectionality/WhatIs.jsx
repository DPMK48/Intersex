import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const WhatIs = () => {
  const { t } = useTranslation();

  return (
    <Container
      maxW=""
      py={{ base: "10", lg: "20" }}
      bg={"#fffbef"}
      px={{ base: "1rem", lg: "50px", xl: "100px" }}
    >
      {/* 2-COLUMN CONTENT */}
      <Flex
        direction={["column", "column", "column"]}
        align="center"
        gap="14"
        maxW={"1560px"}
        mx={"auto"}
      >
        {/* TEXT CONTENT */}
        <Box flex="1">
          <Heading
            fontSize={{ base: "20px", md: "40px" }}
            fontWeight="700"
            color="blackish"
            mb="4"
            fontFamily={"inter"}
          >
            {t("intersectionality.whatIsTitle", "What is Intersectionality?")}
          </Heading>
          <Box
            w={"100%"}
            h={"100%"}
            display={{ base: "block", md: "none" }}
            mb={6}
          >
            <Image
              src="/images/Why-Intersectionality.png"
              alt="why intersectionality illustration"
              w="100%"
              objectFit={"cover"}
              h={"234px"}
            />
          </Box>
          <Text
            color="blackish"
            fontSize={{ base: "14px", md: "16px" }}
            fontFamily={"nunito"}
            textAlign={{ md: "justify" }}
          >
            {t(
              "intersectionality.whatIsP1",
              "Intersectionality conceptualizes the ways that individuals and groups face multiple forms of discrimination or privilege at once based on the disadvantages (intersectionally marginalized) or advantages (intersectionally privileged) associated with their identities within two or more social categories (such as sex, sexual orientation, ethnicity, tribe, descent or inherited status, age, class, disability or health status), rather than a single category. Intersectionality exposes the socio-structural nature of discrimination and inequality and the role of exclusionary social and cultural norms in including or marginalizing certain categories (Sosa, 2017, p. 16)."
            )}
            <br />
            <br />
            {t(
              "intersectionality.whatIsP2",
              "Individuals belong to more than one social category, and as a result, they can simultaneously experience both discrimination and privilege. Different combinations of these social categories may increase or decrease the likelihood that a person will experience systemic oppression and discrimination."
            )}
            <br />
            <br />
            {t(
              "intersectionality.whatIsP3",
              "As a framework or lens, intersectionality is used to analyze social complexity and address the intersection of social categories at the individual level and the overlapping and interlocking systems of power (laws, policies, state governments, political unions, religious institutions, and media) and oppression that impact different groups in distinct ways at structural levels (Bowleg, 2012). As a tool, intersectionality is used to engineer appropriate interventions to address marginalization and social exclusion."
            )}
          </Text>
        </Box>
        {/* IMAGE CARD */}
        <Box
          w={"100%"}
          h={"100%"}
          display={{ base: "none", md: "block" }}
        >
          <Image
            src="/images/Why-Intersectionality.png"
            alt="why intersectionality illustration"
            w="100%"
            objectFit={"cover"}
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default WhatIs;
