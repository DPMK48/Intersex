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
import { FaCheckCircle } from "react-icons/fa";
import {
  MdOutlineEmail,
  MdReportGmailerrorred,
} from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FiLock, FiShield } from "react-icons/fi";
import { useTranslation } from "react-i18next";

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
            {t("safeguarding.bannerTitle", "Safeguarding at Intersex Nigeria")}
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
          {t(
            "safeguarding.intro",
            "Intersex Nigeria is committed to keeping every stakeholder and community member safe. We work to prevent harm, respond quickly to concerns and ensure that people can engage with us without fear. Safeguarding is everyone’s duty — including staff, volunteers, consultants, partners, and the wider community."
          )}
        </Text>
        <Box>
          <Box mx="auto" px={{ md: 4 }} py={{ base: 2, md: 12 }}>
            {/* What Safeguarding Means */}
            <SafeguardingSection
              title={t("safeguarding.whatMeansTitle", "What Safeguarding Means")}
              icon={<FiShield size={26} />}
              accentColor="#64117e"
            >
              <BulletList
                items={[
                  t(
                    "safeguarding.whatMeans1",
                    "Protecting people from any form of abuse, discrimination or exploitation"
                  ),
                  t(
                    "safeguarding.whatMeans2",
                    "Respecting confidentiality while taking action when safety is at risk"
                  ),
                  t(
                    "safeguarding.whatMeans3",
                    "Maintaining clear boundaries in online and in-person engagement"
                  ),
                  t(
                    "safeguarding.whatMeans4",
                    "Following the Code of Conduct and responding to concerns without delay"
                  ),
                  t(
                    "safeguarding.whatMeans5",
                    "Supporting children, young people and vulnerable adults in line with best practice"
                  ),
                ]}
              />
            </SafeguardingSection>

            {/* When to Raise a Concern */}
            <SafeguardingSection
              title={t("safeguarding.whenRaiseTitle", "When to Raise a Concern")}
              icon={<MdReportGmailerrorred size={28} />}
              accentColor="#64117e"
            >
              <Text mb={4}>
                {t(
                  "safeguarding.whenRaiseIntro",
                  "You can report if you notice or experience:"
                )}
              </Text>
              <BulletList
                items={[
                  t(
                    "safeguarding.whenRaise1",
                    "Unsafe behaviour by anyone connected to Intersex Nigeria"
                  ),
                  t("safeguarding.whenRaise2", "Boundary violations"),
                  t("safeguarding.whenRaise3", "Harassment or discrimination"),
                  t("safeguarding.whenRaise4", "Abuse or suspected abuse"),
                  t(
                    "safeguarding.whenRaise5",
                    "Misconduct during online or offline activities"
                  ),
                  t(
                    "safeguarding.whenRaise6",
                    "Any situation that makes you feel unsafe or unsure"
                  ),
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
                  {t(
                    "safeguarding.reportForSelf",
                    "You can report for yourself or for someone else."
                  )}
                </Text>
              </Box>
            </SafeguardingSection>

            {/* How We Handle Reports */}
            <SafeguardingSection
              title={t("safeguarding.howHandleTitle", "How We Handle Reports")}
              icon={<HiOutlineDocumentReport size={28} />}
              accentColor="#64117e"
            >
              <BulletList
                items={[
                  t(
                    "safeguarding.howHandle1",
                    "Every report is received with respect and confidentiality"
                  ),
                  t(
                    "safeguarding.howHandle2",
                    "Only the relevant safeguarding staff will see the information"
                  ),
                  t(
                    "safeguarding.howHandle3",
                    "The Designated Safeguarding Lead reviews the case"
                  ),
                  t(
                    "safeguarding.howHandle4",
                    "Actions are taken quickly and records are kept securely"
                  ),
                  t(
                    "safeguarding.howHandle5",
                    "If the concern involves senior staff, it is escalated to the Disciplinary Committee"
                  ),
                  t(
                    "safeguarding.howHandle6",
                    "No one is punished for reporting in good faith"
                  ),
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
                  {t("safeguarding.optionsTitle", "Reporting Options")}
                </Heading>
              </Flex>

              <Text mb={{ base: 4, md: 6 }} color="#1d2130">
                {t(
                  "safeguarding.optionsIntro",
                  "You can choose the option that feels safest:"
                )}
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
                  title={t("safeguarding.emailCardTitle", "Email")}
                  description={t(
                    "safeguarding.emailCardDesc",
                    "Or email the safeguarding team at"
                  )}
                  email="reports@intersexnigeria.org"
                  subtitle={t(
                    "safeguarding.emailCardSub",
                    "This will forward directly to the safeguarding team."
                  )}
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
              {t(
                "safeguarding.footerNote",
                "Safeguarding is everyone's responsibility. If you have any concerns, please don't hesitate to report them."
              )}
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
