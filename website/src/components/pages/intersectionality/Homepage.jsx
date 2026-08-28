import {
  Box,
  Flex,
  Text,
  Image,
  Container,
  Heading,
} from "@chakra-ui/react";
import Button from "../../../ui/Button";

export default function HomePage() {
  return (
    <Box>
      {/* ---------------- HERO SECTION ---------------- */}
      <Box
        bgImage={"/images/homepage.png"} // Replace with your banner image
        bgSize="cover"
        bgPos="bottom center"
        bgRepeat="no-repeat"
        position="relative"
        color="white"
        pt="6"
        pb="32"
        h={{ base: "75vh", lg: "100vh" }}
      >
        {/* NAVBAR */}
        {/* <Flex
          maxW="1200px"
          mx="auto"
          px="6"
          justify="space-between"
          align="center"
        >
          <Image src="images/intersection-logo.png" alt="logo" w="60px" />
          <Flex gap="8" fontWeight="500" fontSize="lg">
            <Link href="#">Home</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Resources</Link>
            <Link href="#">Opportunities</Link>
            <Link href="#">Contact</Link>
          </Flex>
        </Flex> */}

        {/* HERO TEXT */}
        <Flex
          // maxW="1200px"
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
          // zIndex={10}
          // backdropFilter={"blur(3px)"}
        >
          <Heading
            fontSize={{ base: "1.5rem", sm: "1.8rem", md: "45px" }}
            fontWeight="800"
            fontFamily={"inter"}
            wordBreak={"break-word"}
          >
            INTERSECTIONAL KNOWLEDGE
          </Heading>

          <Text
            mt="3"
            fontSize={{ base: "16px", sm: "20px", md: "24px" }}
            fontFamily={"nunito"}
          >
            An intersectional learning hub of Intersex Nigeria
          </Text>

          <a href="#resources">
            <Button
              mt="8"
              maxW="fit-content"
              mx="auto"
              px={4}
              py={4}
              fontSize={{ base: "16px", md: "18px" }}
              text={"EXPLORE RESOURCES"}
            />
          </a>
        </Flex>
      </Box>

      {/* ---------------- ABOUT US SECTION ---------------- */}
      <Container
        py={{ lg: "20" }}
        px={{ base: "1rem", lg: "50px", xl: "100px" }}
        id="about"
        maxW={''}
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
              src="/images/Intersectional-Activism.png" // Replace with your illustration
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
              At The Intersection – An Intersex Nigeria E-Resource Hub
            </Heading>
            <Text
              color="blackish"
              fontSize={{ base: "14px", md: "16px" }}
              fontFamily={"nunito"}
              mt={4}
              pb={{ base: 8, lg: 0 }}
            >
              At the intersection is a learning hub and subsidiary of
              Intersex Nigeria. We are dedicated to promoting and
              advocating for the sexual reproductive health,
              self-determination, bodily autonomy, and overall human
              rights of intersex people in Nigeria.
              <br />
              <br />
              Through community building, advocacy, evidence-based
              research, empowerment, educational and informational
              resources on intersex-related issues, we engage with the
              public, partners, stakeholders, and our community.
              <br />
              <br />
              Our goal is to create a society where intersex bodies
              are not stigmatised and discriminated, and where
              intersex rights are recognised and respected.
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
