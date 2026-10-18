import React from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Error from "../ErrorPage/Error";
import { team, board } from "./items";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const slugify = (name) => name.toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-"); // Replace spaces with dashes
const TeamMembers = () => {
  const { t } = useTranslation();
  let { name } = useParams();

  const person =
    team.find((post) => slugify(post.name) === name) ||
    board.find((post) => slugify(post.name) === name);

  if (!person) {
    return <Error />;
  }
  return (
    <>
      <Helmet>
        <title>Meet the Team | {person.name}</title>
        <meta name="description" content={person.description} />
        <meta
          property="og:title"
          content={`Meet the Team | ${person.name}`}
        />
        <meta
          property="og:description"
          content={person.description}
        />
        <meta
          property="og:url"
          content={`https://intersexnigeria.org/meet-the-team/${slugify(
            person.name
          )}`}
        />
        <meta
          name="twitter:title"
          content={`Meet the Team | ${person.name}`}
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content={person.description}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: `${person.name}`,
            jobTitle: `${person.title}`,
            url: `https://intersexnigeria.org/meet-the-team/${slugify(
              person.name
            )}`,
            image: `https://intersexnigeria.org/${person.image}}`,
            affiliation: {
              "@type": "Organization",
              name: "Intersex Nigeria",
            },
          })}
        </script>
      </Helmet>
      <Flex
        flexDir={"column"}
        pos={"relative"}
        w={"100%"}
        bg={"#fefefe"}
        // h={"75vh"}
        px={{ base: "1rem", lg: "50px", xl: "100px" }}
        py={{ base: "2rem", lg: "3rem" }}
        // gap={"100px"}
        fontFamily={"nunito"}
        boxShadow={"inner"}
      >
        <Text
          as={"h1"}
          color={"#000"}
          lineHeight={"120%"}
          w={{ base: "100%", xl: "85%" }}
          fontWeight={700}
          textAlign={"left"}
          pt={{ base: "60px", md: "0px" }}
          fontSize={{ base: "24px", md: "48px" }}
          textTransform={"capitalize"}
          fontFamily={"inter"}
        >
          {t("team.title", "Meet the team behind Intersex Nigeria")}
        </Text>
        <Text
          fontSize={{ base: "14px", sm: "16px", md: "18px" }}
          color={"blackish"}
          textAlign={"left"}
          pb={{ base: "1.5rem", lg: "24px" }}
        >
          {t(
            "team.philosophy",
            "Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work."
          )}
        </Text>
        <Box>
          <Text
            fontFamily={"inter"}
            fontSize={{ base: "16px", sm: "18px" }}
            color={"gray.600"}
            fontWeight={500}
          >
            <Link to={"/about-us/meet-the-team"}>
              <Text as={"span"} _hover={{ color: "purple" }}>
                {t("team.breadcrumb", "Meet-the-team")}
              </Text>
            </Link>{" "}
            / {person.name}
          </Text>
        </Box>
        <motion.div
          initial={{ opacity: 0, visibility: "hidden" }}
          animate={{ opacity: 1, visibility: "visible" }}
          exit={{ opacity: 0, visibility: "hidden" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ display: person ? "block" : "none" }}
        >
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            w={"100%"}
            spacing={8}
            mt={"2rem"}
          >
            <Image
              src={person.image}
              w={"100%"}
              h={{ base: "350px", sm: "400px", md:'700px', lg: "650px" }}
              alt={person.name}
              loading="lazy"
              objectFit={"cover"}
              objectPosition={"top"}
            />
            <Flex flexDir={"column"}>
              <Text
                as={"h2"}
                fontSize={{ base: "18px", md: "22px" }}
                fontWeight={600}
                mt={{ md: "1rem" }}
                mb={"0.3rem"}
                fontFamily={"inter"}
              >
                {person.name} {person.pronoun}
              </Text>
              {person.title && (
                <Text
                  fontSize={{ base: "18px", md: "20px" }}
                  color={"purple"}
                  fontWeight={500}
                  mb={"1rem"}
                >
                  {t(person.keyTitle || `teamMembers.${slugify(person.name)}.title`, person.title)}
                </Text>
              )}

              <Text
                fontSize={{ base: "16px", md: "18px" }}
                textAlign={"justify"}
                // noOfLines={3}
                color={"blackish"}
              >
                {(t(person.keyText || `teamMembers.${slugify(person.name)}.text`, person.text))
                  .split("\n")
                  .map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                      <br />
                    </React.Fragment>
                  ))}
              </Text>
            </Flex>
          </SimpleGrid>
        </motion.div>
        <Flex
          mt={{ base: "2rem", lg: "3rem" }}
          gap={{ base: "1rem", md: "2rem" }}
          flexWrap={"wrap"}
          justifyContent={"center"}
          mx={{ lg: "100px" }}
        >
          {board.map((item, idx) => {
            return (
              <Link
                to={`/meet-the-team/${slugify(item.name)}`}
                key={idx}
              >
                <Text
                  key={idx}
                  fontSize={{ base: "16px", md: "18px" }}
                  color={{ base: "purple", md: "gray.600" }}
                  fontWeight={600}
                  borderBottom={"3px solid"}
                  borderBottomColor={"transparent"}
                  _hover={{ borderBottom: "3px solid purple" }}
                  cursor={"pointer"}
                  transition={"border-bottom-color 1s ease-in-out"}
                >
                  {item.name}
                </Text>
              </Link>
            );
          })}
          {team.map((item, idx) => {
            return (
              <Link
                to={`/meet-the-team/${slugify(item.name)}`}
                key={idx}
              >
                <Text
                  key={idx}
                  fontSize={{ base: "16px", md: "18px" }}
                  color={{ base: "purple", md: "gray.600" }}
                  fontWeight={600}
                  borderBottom={"3px solid"}
                  borderBottomColor={"transparent"}
                  _hover={{ borderBottom: "3px solid purple" }}
                  cursor={"pointer"}
                  transition={"border-bottom-color 1s ease-in-out"}
                >
                  {item.name}
                </Text>
              </Link>
            );
          })}
        </Flex>
      </Flex>
    </>
  );
};

export default TeamMembers;
