import { Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { board, team } from "./items";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation();

  return (
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
        py={{ base: "1.5rem", lg: "24px" }}
      >
        {t(
          "team.subtitle",
          "Meet the passionate and diverse team behind Intersex Nigeria, dedicated to advocating for the rights, health, and autonomy of intersex people. Together, we are working to create meaningful change and build a more inclusive society."
        )}
      </Text>
      <Text
        as={"h3"}
        color={"#000"}
        lineHeight={"120%"}
        fontWeight={700}
        py={{ base: "30px", md: "30px" }}
        fontSize={{ base: "24px", md: "32px" }}
        fontFamily={"inter"}
        textAlign={"center"}
      >
        {t("team.boardMembers", "Board Members")}
      </Text>
      <SimpleGrid
        columns={{ base: 1, sm: 2, lg: 4 }}
        spacing={{ base: 10, sm: 5, xl: 10 }}
        w="full"
        mb={"70px"}
      >
        {board.map((item, idx) => {
          const { image, name, title, pronoun } = item;
          const slugify = (name) =>
            name
              .toLowerCase()
              .trim()
              .replace(/[^\w\s-]/g, "") // Remove special characters
              .replace(/\s+/g, "-"); // Replace spaces with dashes;

          return (
            <Flex
              flexDir={"column"}
              w={"100%"}
              _hover={{ transform: "scale(1.01)" }}
              key={idx}
              border={"1px solid #64117e30"}
              borderRadius={"2px"}
              pb={2}
              fontFamily={"nunito"}
            >
              <Image
                src={image}
                alt={name}
                w={"100%"}
                loading="lazy"
                h={{ base: "350px", md: "400px", lg: "296px" }}
                objectFit={"cover"}
                borderRadius={"2px"}
                objectPosition={"top"}
              />
              <Link to={`/meet-the-team/${slugify(name)}`} key={name}>
                <Text
                  fontSize={"18px"}
                  fontWeight={700}
                  fontFamily={"inter"}
                  mt={"1rem"}
                  mb={"0.3rem"}
                  px={"12px"}
                  _hover={{ color: "purple" }}
                >
                  {name} {pronoun}
                </Text>
              </Link>
              <Text
                fontSize={"16px"}
                fontWeight={500}
                color={"purple"}
                mb={"1rem"}
                px={"12px"}
              >
                {t(item.keyTitle || `teamMembers.${slugify(name)}.title`, title)}
              </Text>
            </Flex>
          );
        })}
      </SimpleGrid>
      <Text
        as={"h3"}
        color={"#000"}
        lineHeight={"120%"}
        fontWeight={700}
        pb={{ base: "30px", md: "30px" }}
        fontSize={{ base: "24px", md: "32px" }}
        fontFamily={"inter"}
        textAlign={"center"}
      >
        {t("team.teamMembers", "Team Members")}
      </Text>
      <SimpleGrid
        columns={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 10, sm: 5, xl: 10 }}
        w="full"
      >
        {team.map((item, idx) => {
          const { image, title, name, pronoun } = item;
          const slugify = (name) =>
            name
              .toLowerCase()
              .trim()
              .replace(/[^\w\s-]/g, "") // Remove special characters
              .replace(/\s+/g, "-"); // Replace spaces with dashes;

          return (
            <Flex
              flexDir={"column"}
              w={"100%"}
              _hover={{ transform: "scale(1.01)" }}
              key={idx}
              border={"1px solid #64117e30"}
              borderRadius={"2px"}
              pb={2}
              fontFamily={"nunito"}
            >
              <Image
                src={image}
                alt={name}
                w={"100%"}
                loading="lazy"
                h={"296px"}
                objectFit={"cover"}
                borderRadius={"2px"}
                objectPosition={"top"}
              />
              <Link to={`/meet-the-team/${slugify(name)}`} key={name}>
                <Text
                  fontSize={"18px"}
                  fontWeight={700}
                  fontFamily={"inter"}
                  mt={"1rem"}
                  mb={"0.3rem"}
                  px={"12px"}
                  _hover={{ color: "purple" }}
                >
                  {name} {pronoun}
                </Text>
              </Link>
              <Text
                fontSize={"16px"}
                fontWeight={500}
                color={"purple"}
                mb={"1rem"}
                px={"12px"}
              >
                {t(item.keyTitle || `teamMembers.${slugify(name)}.title`, title)}
              </Text>
            </Flex>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
};

export default Team;
