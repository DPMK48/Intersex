/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import {
  Box,
  Flex,
  Heading,
  Text,
  ListItem,
  List,
  ListIcon,
  Icon,
} from "@chakra-ui/react";
import { SafeguardingSection } from "./SafeguardingSection";
import { ReportingCard } from "./ReportingCard";
import ReportAbuseForm from "./ReportAbuseForm";
import { FaCheckCircle, FaWpforms } from "react-icons/fa";
import {
  MdOutlineEmail,
  MdReportGmailerrorred,
} from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FiLock, FiShield } from "react-icons/fi";

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

export default function Report() {
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
        <Box>
          <Box mx="auto" px={{ md: 4 }} py={{ base: 2, md: 12 }}>
            {/* What Safeguarding Means */}
            <SafeguardingSection
              title="What Safeguarding Means"
              icon={<FiShield size={26} />}
              accentColor="#64117e"
            >
              <BulletList
                items={[
                  "Protecting people from any form of abuse, discrimination or exploitation",
                  "Respecting confidentiality while taking action when safety is at risk",
                  "Maintaining clear boundaries in online and in-person engagement",
                  "Following the Code of Conduct and responding to concerns without delay",
                  "Supporting children, young people and vulnerable adults in line with best practice",
                ]}
              />
            </SafeguardingSection>

            {/* When to Raise a Concern */}
            <SafeguardingSection
              title="When to Raise a Concern"
              icon={<MdReportGmailerrorred size={28} />}
              accentColor="#64117e"
            >
              <Text mb={4}>
                You can report if you notice or experience:
              </Text>
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

              <Box
                mt={{ base: 6, md: 8 }}
                p={{ base: 2, md: 4 }}
                bg="rgba(245, 172, 7, 0.1)"
                borderLeft="4px solid #f5ac07"
                borderRadius="md"
              >
                <Text fontWeight={600}>
                  You can report for yourself or for someone else.
                </Text>
              </Box>
            </SafeguardingSection>

            {/* How We Handle Reports */}
            <SafeguardingSection
              title="How We Handle Reports"
              icon={<HiOutlineDocumentReport size={28} />}
              accentColor="#64117e"
            >
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
            </SafeguardingSection>

            {/* Reporting Options */}
            <Box mt={{ base: 8, md: 12 }}>
              <Flex align="center" gap={3} mb={6}>
                <Icon
                  as={FiLock}
                  fontSize={{ base: 24, md: 28 }}
                  color="#64117e"
                />
                <Heading
                  as="h2"
                  fontSize={{ base: "1.2rem", md: "1.8rem" }}
                  fontFamily={"inter"}
                  color="blackish"
                >
                  Reporting Options
                </Heading>
              </Flex>

              <Text mb={{ base: 4, md: 6 }} color="#1d2130">
                You can choose the option that feels safest:
              </Text>

              {/* Inline Report Abuse Form */}
              <ReportAbuseForm />

              {/* Email Alternative */}
              <Flex
                direction={{ base: "column", md: "row" }}
                gap={6}
                mt={8}
                justify="center"
              >
                <ReportingCard
                  icon={<MdOutlineEmail size={28} />}
                  title="Email"
                  description="Or email the safeguarding team at"
                  email="info@intersexnigeria.org"
                  subtitle="This will forward directly to the safeguarding team."
                  color="#f5ac07"
                />
              </Flex>
            </Box>
          </Box>

          {/* Footer */}
          <Box
            bg="rgba(245, 172, 7, 0.1)"
            borderLeft="4px solid #f5ac07"
            borderRadius="md"
            textAlign={"center"}
            mx={"auto"}
            py={8}
            px={4}
            mt={{ base: 12, md: 0 }}
            color={"blackish"}
          >
            <Text fontWeight={700} fontSize={"18px"}>
              Safeguarding is everyone's responsibility. If you have
              any concerns, please don't hesitate to report them.
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
