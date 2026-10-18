import {
  Box,
  Flex,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Error from "../ErrorPage/Error";
import { positions } from "./item";
import { positionsFr } from "./itemFr";
import { Helmet } from "react-helmet-async";
import React from "react";
import { useTranslation } from "react-i18next";

// Helper function to linkify emails and URLs in text
const linkifyText = (text) => {
  if (!text) return text;
  
  // Regex patterns for URLs and emails
  const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/g;
  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
  const isUrl = /^(https?:\/\/[^\s]+|www\.[^\s]+)$/i;
  const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  // Split text by URLs first
  const parts = text.split(urlRegex);
  
  return parts.map((part, index) => {
    // Check if this part is a URL
    if (isUrl.test(part)) {
      const href = part.startsWith("http") ? part : `https://${part}`;
      return (
        <Link
          key={`url-${index}`}
          href={href}
          color="purple"
          isExternal
          _hover={{ textDecoration: "underline" }}
        >
          {part}
        </Link>
      );
    }
    
    // Check for emails in the remaining text
    const emailParts = part.split(emailRegex);
    return emailParts.map((emailPart, emailIndex) => {
      if (isEmail.test(emailPart)) {
        return (
          <Link
            key={`email-${index}-${emailIndex}`}
            href={`mailto:${emailPart}`}
            color="purple"
            _hover={{ textDecoration: "underline" }}
          >
            {emailPart}
          </Link>
        );
      }
      return emailPart;
    });
  });
};

const Job = () => {
  const { t, i18n } = useTranslation();
  const isFr = i18n.language === "fr";
  const slugify = (title) =>
    title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "") // Remove special characters
      .replace(/\s+/g, "-"); // Replace spaces with dashes
  let { title } = useParams();

  let jobIndex = positions.findIndex((jd) => slugify(jd.title) === title);
  if (jobIndex === -1 && positionsFr) {
    jobIndex = positionsFr.findIndex((jd) => slugify(jd.title) === title);
  }
  const job = jobIndex !== -1 
    ? (isFr && positionsFr ? positionsFr[jobIndex] : positions[jobIndex])
    : null;

  if (!job) {
    return <Error />;
  }

  if (job.customFormat) {
    return (
      <>
        <Helmet>
          <title>Careers | {job.title}</title>
          <meta name="description" content={job.description} />
          <meta
            property="og:title"
            content={`Careers | ${job.title}`}
          />
          <meta property="og:description" content={job.description} />
          <meta
            property="og:url"
            content={`https://intersexnigeria.org/career/${slugify(
              job.title
            )}`}
          />
          <meta
            name="twitter:title"
            content={`Careers | ${job.title}`}
          />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:description"
            content={job.description}
          />
        </Helmet>
        <Box
          w={"100%"}
          bg={"#fefefe"}
          px={{ base: "1rem", lg: "50px", xl: "100px" }}
          py={{ base: "2rem", lg: "3rem" }}
          fontFamily={"nunito"}
          boxShadow={"inner"}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              delay: 0.1,
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <Flex flexDir={"column"} pos={"relative"} w={"100%"}>
              <Box
                color={"gray.600"}
                mb={5}
                fontWeight={600}
                fontSize={"1rem"}
              >
                <Link
                  href={"/career/join-the-team"}
                  color={"gray.600"}
                  _hover={{ color: "purple" }}
                >
                  {t("jobDetails.careers", "Careers")}{" "}
                </Link>
                / {job.title}
              </Box>

              <Text
                as={"h1"}
                color={"#000"}
                lineHeight={"120%"}
                w={"100%"}
                fontWeight={600}
                textAlign={{ base: "center", md: "left" }}
                fontSize={{ base: "1.2rem", md: "2rem" }}
                pb={{ base: "1.5rem", lg: "24px" }}
                fontFamily={"inter"}
              >
                {job.customTitle
                  ? job.customTitle
                  : `${t("jobDetails.termsOfReference", "Terms of Reference for")} ${job.title}`}
              </Text>

              {job.customMeta?.map((line, idx) => (
                <Text key={idx} mb={1} fontWeight={600} color={"blackish"}>
                  {linkifyText(line)}
                </Text>
              ))}

              {job.customSections?.map((section, idx) => (
                <Box key={idx} mt={section.title ? 5 : 3}>
                  {section.title && (
                    <Text
                      as={"h3"}
                      color={"blackish"}
                      fontSize={{ base: "1rem", lg: "1.2rem" }}
                      fontWeight={600}
                      mb={1}
                      fontFamily={"inter"}
                      textTransform={"uppercase"}
                    >
                      {section.title}
                    </Text>
                  )}

                  {section.intro && (
                    <Text mb={2} color={"blackish"} textAlign={"justify"}>
                      {linkifyText(section.intro)}
                    </Text>
                  )}

                  {section.bullets && (
                    <UnorderedList ml={{ base: 4, md: 6 }}>
                      {section.bullets.map((item, bIdx) => (
                        <ListItem key={bIdx} mb={2}>
                          <Text color={"blackish"}>{linkifyText(item)}</Text>
                        </ListItem>
                      ))}
                    </UnorderedList>
                  )}

                  {section.groups?.map((group, gIdx) => (
                    <Box key={gIdx} mb={3}>
                      <Text fontWeight={600} mb={1} color={"blackish"}>
                        {group.title}
                      </Text>
                      <UnorderedList ml={{ base: 4, md: 6 }}>
                        {group.bullets.map((item, gbIdx) => (
                          <ListItem key={gbIdx} mb={2}>
                            <Text color={"blackish"}>
                              {linkifyText(item)}
                            </Text>
                          </ListItem>
                        ))}
                      </UnorderedList>
                    </Box>
                  ))}

                  {section.table && (
                    <TableContainer
                      my={6}
                      border="1px solid"
                      borderColor="gray.200"
                      borderRadius="lg"
                      boxShadow="sm"
                      overflowX="auto"
                    >
                      <Table variant="simple" size="md">
                        <Thead bg="purple.50">
                          <Tr>
                            {section.table.headers.map((header, hIdx) => (
                              <Th
                                key={hIdx}
                                color="purple.900"
                                fontSize="0.9rem"
                                fontWeight="700"
                                fontFamily="inter"
                                textTransform="none"
                                py={4}
                                px={6}
                              >
                                {header}
                              </Th>
                            ))}
                          </Tr>
                        </Thead>
                        <Tbody>
                          {section.table.rows.map((row, rIdx) => (
                            <Tr key={rIdx} _hover={{ bg: "purple.50" }}>
                              {row.map((cell, cIdx) => (
                                <Td
                                  key={cIdx}
                                  color="blackish"
                                  fontSize="0.95rem"
                                  lineHeight="1.6"
                                  py={4}
                                  px={6}
                                  borderBottom="1px solid"
                                  borderColor="gray.100"
                                  verticalAlign="top"
                                  whiteSpace="normal"
                                >
                                  {linkifyText(cell)}
                                </Td>
                              ))}
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    </TableContainer>
                  )}

                  {section.paragraphs?.map((paragraph, pIdx) => (
                    <Text
                      key={pIdx}
                      mb={2}
                      color={"blackish"}
                      textAlign={"justify"}
                    >
                      {linkifyText(paragraph)}
                    </Text>
                  ))}
                </Box>
              ))}

              <Text
                as={"h3"}
                color={"blackish"}
                fontSize={{
                  base: "1rem",
                  lg: "1.2rem",
                }}
                fontWeight={600}
                mb={1}
                fontFamily={"inter"}
                textTransform={"uppercase"}
                mt={5}
              >
                {t("jobDetails.note", "Note")}
              </Text>
              <Box
                color={"blackish"}
                fontSize={{
                  base: "0.9rem",
                  lg: "1rem",
                }}
                textAlign={"justify"}
                mb={5}
              >
                <Text>
                  {job.customNote ||
                    "Intersex Nigeria is an equal opportunity employer and encourages applications from qualified individuals regardless of gender, sex, sexual orientation, (dis)ability, religion, or ethnic background."}
                </Text>
              </Box>
            </Flex>
          </motion.div>
        </Box>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Careers | {job.title}</title>
        <meta name="description" content={job.description} />
        <meta
          property="og:title"
          content={`Careers | ${job.title}`}
        />
        <meta property="og:description" content={job.description} />
        <meta
          property="og:url"
          content={`https://intersexnigeria.org/career/${slugify(
            job.title
          )}`}
        />
        <meta
          name="twitter:title"
          content={`Careers | ${job.title}`}
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content={job.description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            title: `${job.title}`,
            description: `${job.description}`,
            employmentType: `${job.type}`,
            hiringOrganization: {
              "@type": "Organization",
              name: "Intersex Nigeria",
              url: `https://intersexnigeria.org/career/${slugify(
                job.title
              )}`,
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressRegion: `${job.location}`,
              },
            },
          })}
        </script>
      </Helmet>
      <Box
        w={"100%"}
        bg={"#fefefe"}
        // h={"75vh"}
        px={{ base: "1rem", lg: "50px", xl: "100px" }}
        py={{ base: "2rem", lg: "3rem" }}
        // gap={"100px"}
        fontFamily={"nunito"}
        boxShadow={"inner"}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            delay: 0.1,
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <Flex flexDir={"column"} pos={"relative"} w={"100%"}>
            <Box
              color={"gray.600"}
              mb={5}
              fontWeight={600}
              fontSize={"1rem"}
            >
              <Link
                href={"/career/join-the-team"}
                color={"gray.600"}
                _hover={{ color: "purple" }}
              >
                {t("jobDetails.careers", "Careers")}{" "}
              </Link>
              / {job.title}
            </Box>
            <Text
              as={"h1"}
              color={"#000"}
              lineHeight={"120%"}
              w={"100%"}
              fontWeight={600}
              textAlign={{ base: "center", md: "left" }}
              fontSize={{ base: "1.2rem", md: "2rem" }}
              pb={{ base: "1.5rem", lg: "24px" }}
              fontFamily={"inter"}
            >
              {t("jobDetails.termsOfReference", "Terms of Reference for")} {job.title}
            </Text>

            <Text
              as={"h3"}
              color={"blackish"}
              fontSize={{
                base: "1rem",
                lg: "1.2rem",
              }}
              fontWeight={600}
              mb={1}
              fontFamily={"inter"}
              textTransform={"uppercase"}
            >
              {t("jobDetails.background", "Background")}
            </Text>

            <Box
              color={"blackish"}
              fontSize={{
                base: "0.9rem",
                lg: "1rem",
              }}
              textAlign={"justify"}
              mb={5}
              ml={{ md: 3 }}
            >
              <Text mb={1}>
                {t(
                  "jobDetails.standardBackgroundP1",
                  "Intersex Nigeria (Center for Healthcare Development and Youth Empowerment) is an intersex-led and focused Non-Governmental Organization in Nigeria. We promote and advocate for the sexual reproductive health, self-determination, bodily autonomy, and overall human rights of intersex people in all diversity in Nigeria. Through community building, advocacy, evidence-based research, empowerment, educational and informational resources on intersex-related issues to the public, partners, stakeholders, and our community."
                )}{" "}
                <br />
                {t(
                  "jobDetails.standardBackgroundP2",
                  "We want to see a society where intersex bodies are not stigmatized and discriminated against, and where intersex rights are recognized and respected."
                )}{" "}
                {t("jobDetails.seeMoreAbout", "See more about Intersex Nigeria")}{" "}
                <Link
                  style={{ color: "purple" }}
                  href="https://intersexnigeria.org/"
                >
                  {t("jobDetails.here", "here")}
                </Link>
                .
              </Text>
            </Box>
            <Text
              as={"h3"}
              color={"blackish"}
              fontSize={{
                base: "1rem",
                lg: "1.2rem",
              }}
              fontWeight={600}
              mb={1}
              fontFamily={"inter"}
              textTransform={"uppercase"}
            >
              {t("jobDetails.aboutPosition", "About the position")}
            </Text>
            <Box
              color={"blackish"}
              fontSize={{
                base: "0.9rem",
                lg: "1rem",
              }}
              textAlign={"justify"}
              mb={5}
              ml={{ md: 3 }}
            >
              <Text mb={1}>
                {" "}
                {(job.about || "")
                  .split("\n")
                  .map((item, index) => (
                    <React.Fragment key={index}>
                      <Text pb={"6px"} as={"span"}>
                        {item}
                      </Text>
                      <br />
                    </React.Fragment>
                  ))}
              </Text>
            </Box>
            {job.objectives && (
              <>
                <Text
                  as={"h3"}
                  color={"blackish"}
                  fontSize={{
                    base: "1rem",
                    lg: "1.2rem",
                  }}
                  fontWeight={600}
                  mb={1}
                  fontFamily={"inter"}
                  textTransform={"uppercase"}
                >
                  {t("jobDetails.objectives", "Objectives")}
                </Text>
                <Box
                  color={"blackish"}
                  fontSize={{
                    base: "0.9rem",
                    lg: "1rem",
                  }}
                  textAlign={"justify"}
                  mb={5}
                  ml={{ md: 3 }}
                >
                  <UnorderedList>
                    {job.objectives.map((item, idx) => (
                      <ListItem key={idx}>
                        <Text mb={2}>{item}</Text>
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              </>
            )}
            <Text
              as={"h3"}
              color={"blackish"}
              fontSize={{
                base: "1rem",
                lg: "1.2rem",
              }}
              fontWeight={600}
              mb={1}
              fontFamily={"inter"}
              textTransform={"uppercase"}
            >
              {t("jobDetails.keyResponsibilities", "Key Responsibilities")}
            </Text>
            <Box
              color={"blackish"}
              fontSize={{
                base: "0.9rem",
                lg: "1rem",
              }}
              textAlign={"justify"}
              mb={5}
              ml={{ md: 3 }}
            >
              <OrderedList>
                {job.responsibilities.map((data, idx) => {
                  return (
                    <Flex
                      flexDir={"column"}
                      key={`responsibility-${idx}`}
                      fontWeight={500}
                      mb={3}
                    >
                      {data.title && (
                        <ListItem>
                          <Text
                            as={"h5"}
                            fontSize={{
                              base: "1rem",
                              lg: "1.1rem",
                            }}
                            color={"blackish"}
                            my={1}
                            fontFamily={"inter"}
                            fontWeight={600}
                          >
                            {data.title}
                          </Text>
                        </ListItem>
                      )}

                      <UnorderedList ml={0}>
                        {data.subItems &&
                          data.subItems.map((item, subIdx) => (
                            <ListItem
                              key={`subItem-${idx}-${subIdx}`}
                            >
                              <Text
                                mb={2}
                                fontSize={{
                                  base: "0.9rem",
                                  lg: "1rem",
                                }}
                              >
                                {item.subtitle && (
                                  <Text as={"span"} fontWeight={600}>
                                    {item.subtitle}:
                                  </Text>
                                )}{" "}
                                {item.task}
                              </Text>
                            </ListItem>
                          ))}
                      </UnorderedList>
                    </Flex>
                  );
                })}
              </OrderedList>
            </Box>

            {job.deliverables && (
              <>
                <Text
                  as={"h3"}
                  color={"blackish"}
                  fontSize={{
                    base: "1rem",
                    lg: "1.2rem",
                  }}
                  fontWeight={600}
                  mb={1}
                  fontFamily={"inter"}
                  textTransform={"uppercase"}
                >
                  {t("jobDetails.deliverables", "Deliverables")}
                </Text>
                <Box
                  color={"blackish"}
                  fontSize={{
                    base: "0.9rem",
                    lg: "1rem",
                  }}
                  textAlign={"justify"}
                  mb={5}
                  ml={{ md: 3 }}
                >
                  <UnorderedList>
                    {job.deliverables.map((item, idx) => (
                      <ListItem key={idx}>
                        <Text mb={2}>{item}</Text>
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              </>
            )}

            <Text
              as={"h3"}
              color={"blackish"}
              fontSize={{
                base: "1rem",
                lg: "1.2rem",
              }}
              fontWeight={600}
              fontFamily={"inter"}
              textTransform={"uppercase"}
              mb={1}
            >
              {t("jobDetails.keySkills", "Key Skills and Qualifications")}
            </Text>
            <Box
              color={"blackish"}
              fontSize={{
                base: "0.9rem",
                lg: "1rem",
              }}
              textAlign={"justify"}
              mb={5}
              ml={{ md: 3 }}
            >
              <UnorderedList>
                {job.skills.map((item, idx) => (
                  <>
                    <ListItem key={idx}>
                      <Text
                        mb={2}
                        fontSize={{
                          base: "0.9rem",
                          lg: "1rem",
                        }}
                      >
                        {item.name && (
                          <Text as={"span"} fontWeight={600}>
                            {item.name}:
                          </Text>
                        )}{" "}
                        {item.description && item.description}
                      </Text>
                    </ListItem>
                    <Text mb={1}>
                      {item.description1 && "- " + item.description1}
                    </Text>
                    <Text mb={1}>
                      {item.description2 && "- " + item.description2}
                    </Text>
                    <Text mb={1}>
                      {item.description3 && "- " + item.description3}
                    </Text>
                  </>
                ))}
              </UnorderedList>
            </Box>
            {job.requirements && (
              <>
                <Text
                  as={"h3"}
                  color={"blackish"}
                  fontSize={{
                    base: "1.rem",
                    lg: "1.2rem",
                  }}
                  fontWeight={600}
                  mb={1}
                  fontFamily={"inter"}
                  textTransform={"uppercase"}
                >
                  {t("jobDetails.requirements", "Requirements")}
                </Text>
                <Text>{t("jobDetails.academicQualification", "Academic Qualification & Experience:")}</Text>
                <Box
                  color={"blackish"}
                  fontSize={{
                    base: "0.9rem",
                    lg: "1rem",
                  }}
                  textAlign={"justify"}
                  mb={5}
                  ml={{ md: 3 }}
                >
                  <UnorderedList>
                    {job.requirements.map((item, idx) => (
                      <ListItem key={idx}>
                        <Text mb={2}>{item}</Text>
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              </>
            )}
            {job.expectations && (
              <>
                <Text
                  as={"h3"}
                  color={"blackish"}
                  fontSize={{
                    base: "1.rem",
                    lg: "1.2rem",
                  }}
                  fontWeight={600}
                  mb={1}
                  fontFamily={"inter"}
                  textTransform={"uppercase"}
                >
                  {t("jobDetails.expectedOutcomes", "Expected Outcomes")}
                </Text>
                <Box
                  color={"blackish"}
                  fontSize={{
                    base: "0.9rem",
                    lg: "1rem",
                  }}
                  textAlign={"justify"}
                  mb={5}
                  ml={{ md: 3 }}
                >
                  <UnorderedList>
                    {job.expectations.map((item, idx) => (
                      <ListItem key={idx}>
                        <Text mb={2}>{item}</Text>
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              </>
            )}

            <Text
              as={"h3"}
              color={"blackish"}
              fontSize={{
                base: "1rem",
                lg: "1.2rem",
              }}
              fontWeight={600}
              mb={1}
              fontFamily={"inter"}
              textTransform={"uppercase"}
            >
              {t("jobDetails.employmentTerms", "EMPLOYMENT TERMS")}
            </Text>
            <Box
              color={"blackish"}
              fontSize={{
                base: "0.9rem",
                lg: "1rem",
              }}
              textAlign={"justify"}
              mb={5}
              ml={{ md: 3 }}
            >
              {job.terms.map((item, idx) => (
                <Text mb={2} key={idx}>
                  {item}
                </Text>
              ))}
            </Box>
            <Text
              as={"h3"}
              color={"blackish"}
              fontSize={{
                base: "1rem",
                lg: "1.2rem",
              }}
              fontWeight={600}
              mb={1}
              fontFamily={"inter"}
              textTransform={"uppercase"}
            >
              {t("jobDetails.applicationProcess", "APPLICATION PROCESS")}
            </Text>
            <Box
              color={"blackish"}
              fontSize={{
                base: "0.9rem",
                lg: "1rem",
              }}
              textAlign={"justify"}
              mb={5}
              ml={{ md: 3 }}
            >
              {job.applicationProcess ? (
                <UnorderedList>
                  {job.applicationProcess.map((item, idx) => (
                    <ListItem key={idx}>
                      <Text mb={2}>{linkifyText(item)}</Text>
                    </ListItem>
                  ))}
                </UnorderedList>
              ) : (
                <>
                  <Text
                    mb={1}
                    display={
                      job.title === "People and Culture Officer"
                        ? "none"
                        : "block"
                    }
                  >
                    {t(
                      "jobDetails.defaultApplyP1",
                      "Interested candidates should send their resume and cover letter to"
                    )}{" "}
                    <Link
                      href="mailto:jobs@intersexnigeria.org"
                      color="purple"
                      _hover={{ textDecoration: "underline" }}
                    >
                      jobs@intersexnigeria.org
                    </Link>{" "}
                    {t("jobDetails.defaultApplyP2", "using the job title")} `{job.title}`{" "}
                    {t(
                      "jobDetails.defaultApplyP3",
                      "as the subject of the email. Only selected candidates will be contacted."
                    )}
                  </Text>
                  <Text
                    mb={1}
                    display={
                      job.title === "People and Culture Officer"
                        ? "block"
                        : "none"
                    }
                  >
                    {t(
                      "jobDetails.pcoApplyP1",
                      "Interested and qualified candidates should send their CV with three (3) professional references and a cover letter to"
                    )}{" "}
                    <Link
                      href="mailto:jobs@intersexnigeria.org"
                      color="purple"
                      _hover={{ textDecoration: "underline" }}
                    >
                      jobs@intersexnigeria.org
                    </Link>{" "}
                    {t(
                      "jobDetails.pcoApplyP2",
                      "using People and Culture Officer as the subject of the email."
                    )}
                  </Text>
                </>
              )}
            </Box>
            {!job.applicationProcess && (
              <>
                <Text
                  as={"h3"}
                  color={"blackish"}
                  fontSize={{
                    base: "1rem",
                    lg: "1.2rem",
                  }}
                  fontWeight={600}
                  mb={1}
                  fontFamily={"inter"}
                  textTransform={"uppercase"}
                >
                  {t("jobDetails.closingDate", "APPLICATION CLOSING DATE")}
                </Text>
                <Box
                  color={"blackish"}
                  fontSize={{
                    base: "0.9rem",
                    lg: "1rem",
                  }}
                  textAlign={"justify"}
                  mb={5}
                  ml={{ md: 3 }}
                >
                  <Text mb={1}>
                    {job.title === "People and Culture Officer"
                      ? "1st September, 2025"
                      : t("jobDetails.whenCandidateSelected", "When the needed candidate is selected.")}
                  </Text>
                </Box>
              </>
            )}
            <Text
              as={"h3"}
              color={"blackish"}
              fontSize={{
                base: "1rem",
                lg: "1.2rem",
              }}
              fontWeight={600}
              mb={1}
              fontFamily={"inter"}
              textTransform={"uppercase"}
            >
              {t("jobDetails.note", "Note")}
            </Text>
            <Box
              color={"blackish"}
              fontSize={{
                base: "0.9rem",
                lg: "1rem",
              }}
              textAlign={"justify"}
              mb={5}
              ml={{ md: 3 }}
            >
              {job.title === "People and Culture Officer" && (
                <UnorderedList>
                  <ListItem>
                    <Text my={1}>
                      Shortlisted candidates will be required to
                      undergo a written test and physical interview
                      sessions.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text my={1}>
                      Successful candidates shall undergo background
                      checks.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text my={1}>
                      Employment offers are contingent upon a
                      satisfactory background check.
                    </Text>
                  </ListItem>
                </UnorderedList>
              )}
              <Text
                mt={
                  job.title === "People and Culture Officer" ? 5 : 1
                }
              >
                {t(
                  "jobDetails.equalOpportunity",
                  "Intersex Nigeria is an equal opportunity employer and encourages applications from qualified individuals regardless of gender, sex, sexual orientation, (dis)ability, religion, or ethnic background."
                )}
              </Text>
            </Box>
          </Flex>
        </motion.div>
      </Box>
    </>
  );
};

export default Job;
