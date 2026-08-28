/* eslint-disable react/prop-types */
import {
  Box,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function SectionTitle({ children, ...rest }) {
  return (
    <Heading
      as="h2"
      size="lg"
      fontFamily={"inter"}
      mb={4}
      mt={8}
      {...rest}
    >
      {children}
    </Heading>
  );
}

function BulletList({ items }) {
  return (
    <List spacing={3} pl={2} fontSize={{ base: "15px", md: "1rem" }}>
      {items.map((item, idx) => (
        <ListItem key={idx}>
          <ListIcon as={FaCheckCircle} color="purple" />
          {item}
        </ListItem>
      ))}
    </List>
  );
}

const ReportAbuse = () => {
  return (
    <Flex
      flexDir={"column"}
      fontFamily={"nunito"}
      boxShadow={"inner"}
      w={"100%"}
      pt={{ base: "60px", md: "0px" }}
      h={"100%"}
    >
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
          // zIndex={10}
          backdropFilter={"blur(3px)"}
        >
          <Text
            fontWeight={700}
            color={"#fff"}
            // maxW={"640px"}
            // w={"100%"}
            fontSize={{ base: "30px", lg: "48px" }}
            py={{ base: "1.5rem", lg: "2rem" }}
            lineHeight={"120%"}
            fontFamily={"inter"}
            textAlign={"center"}
            as={"h1"}
          >
            Safeguarding at Intersex Nigeria
          </Text>
        </Flex>
      </Box>
      <Box
        maxW="1560px"
        mx="auto"
        px={{ base: "1rem", lg: "50px", xl: "100px" }}
        py={{ base: "2rem", lg: "3rem" }}
      >
        <Text mb={8} fontSize={{ base: "15px", md: "1rem" }}>
          Intersex Nigeria is committed to keeping every stakeholder
          and community member safe. We work to prevent harm, respond
          quickly to concerns and ensure that people can engage with
          us without fear. Safeguarding is everyone’s duty — including
          staff, volunteers, consultants, partners, and the wider
          community.
        </Text>

        {/* What Safeguarding Means */}
        <SectionTitle>What Safeguarding Means</SectionTitle>

        <BulletList
          items={[
            "Protecting people from any form of abuse, discrimination or exploitation",
            "Respecting confidentiality while taking action when safety is at risk",
            "Maintaining clear boundaries in online and in-person engagement",
            "Following the Code of Conduct and responding to concerns without delay",
            "Supporting children, young people and vulnerable adults in line with best practice",
          ]}
        />

        {/* When to Raise a Concern */}
        <SectionTitle mt={10}>When to Raise a Concern</SectionTitle>

        <Text>You can report if you notice or experience:</Text>

        <BulletList
          items={[
            "Unsafe behaviour by anyone connected to Intersex Nigeria",
            "Boundary violations",
            "Harassment or discrimination",
            "Abuse or suspected abuse",
            "Misconduct during online or offline activities",
            "Any situation that makes you feel unsafe or unsure",
          ]}
        />

        <Text mt={4}>
          You can report for yourself or for someone else.
        </Text>

        {/* How We Handle Reports */}
        <SectionTitle mt={10}>How We Handle Reports</SectionTitle>

        <BulletList
          items={[
            "Every report is received with respect and confidentiality",
            "Only the relevant safeguarding staff will see the information",
            "The Designated Safeguarding Lead reviews the case",
            "Actions are taken quickly and records are kept securely",
            "If the concern involves senior staff, it is escalated to the Disciplinary Committee",
            "No one is punished for reporting in good faith",
          ]}
        />

        {/* Reporting Options */}
        <SectionTitle mt={10}>Reporting Options</SectionTitle>

        <Text mb={4}>
          You can choose the option that feels safest:
        </Text>

        <Stack spacing={4}>
          <Text
            as={"a"}
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSexz4JMt4KxlXq-ziIhAB40y-yRus3GtE8EaEWkja_hKIE_HQ/viewform?usp=dialog"
            }
            color={"purple"}
            _hover={{ color: "orange", textDecor: "underline" }}
            w="fit-content"
            fontWeight={700}
          >
            Submit an Anonymous Report
          </Text>

          <Text>
            Or email the safeguarding team at:{" "}
            <Link
              href="mailto:info@intersexnigeria.org"
              style={{ fontWeight: 700 }}
            >
              info@intersexnigeria.org
            </Link>
          </Text>
        </Stack>
      </Box>
    </Flex>
  );
};

export default ReportAbuse;
