/* eslint-disable react/prop-types */
import {
  Box,
  Flex,
  Icon,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Button from "../../../ui/Button";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { advocacyProjects } from "./items";
import { useTranslation } from "react-i18next";

const NewsItem = ({ item, idx }) => {
  const { t } = useTranslation();
  const { text, title, mainImg } = item;
  const slugify = (title) =>
    title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "") // Remove special characters
      .replace(/\s+/g, "-"); // Replace spaces with dashes
  return (
    <Flex
      key={idx}
      flexDir={"column"}
      borderTopRadius={"22px"}
      border={"1px solid #65117e51"}
      minW={"220px"}
      maxW={{ base: "375px", lg: "100%" }}
      justifyContent={"space-between"}
      w={{ base: "100%", lg: "100%" }}
      _hover={{ transform: "scale(1.02)" }}
      transition="transform 0.2s ease-in-out"
    >
      <Image
        src={mainImg}
        loading="lazy"
        h={"245px"}
        alt={title}
        objectFit={"cover"}
        // objectPosition={"top"}
        borderTopRadius={"22px"}
        borderBottom={"2px solid purple"}
      />
      <Text
        fontSize={"15px"}
        fontWeight={700}
        py={"12px"}
        color={"black"}
        px={"12px"}
        textTransform={"capitalize"}
        as={"h5"}
      >
        {title}
      </Text>
      <Text
        fontSize={"13px"}
        fontWeight={400}
        pb={"12px"}
        px={"12px"}
        color={"black"}
        w={"100%"}
        h={"60px"}
        noOfLines={3}
      >
        {text}
      </Text>
      <Link to={`/resources/programs/${slugify(title)}`}>
        <Flex
          fontSize={"14px"}
          color={"purple"}
          pb={"12px"}
          px={"12px"}
          cursor={"pointer"}
          gap={"8px"}
          w={"fit-content"}
          alignItems={"center"}
        >
          <Text fontWeight={600}>{t("common.readMore", "Read more")}</Text>
          <Icon as={FaChevronRight} />
        </Flex>
      </Link>
    </Flex>
  );
};

const News = () => {
  const { t } = useTranslation();
  // Dynamically choose how many items to show based on screen size
  const itemsToShow = useBreakpointValue({
    base: 2, // small screens
    md: 3, // medium screens
    xl: 4, // large and above
  });

  return (
    <Flex
      flexDir={"column"}
      px={{ base: "1rem", lg: "50px", xl: "100px" }}
      py={{ base: "2rem", lg: "3rem" }}
      bg={"#fffbef"}
      fontFamily={"nunito"}
    >
      {/* Header */}
      <Flex
        justifyContent={"space-between"}
        alignItems={"baseline"}
        w={"100%"}
        gap={"30px"}
        pb={{ base: "1.5rem", lg: "2rem" }}
      >
        <Text
          fontWeight={700}
          color={"#1d2130"}
          maxW={{ lg: "640px" }}
          w={"100%"}
          fontSize={{ base: "22px", md: "40px" }}
          lineHeight={"120%"}
          fontFamily={"inter"}
          as={"h2"}
        >
          {t("home.programsTitle", "Our Programs")}
        </Text>
        <Link to={"/resources/programs"}>
          <Button
            text={t("common.discoverMore", "Discover more")}
            fontSize={"16px"}
            display={{ base: "none", lg: "flex" }}
            bg={"#F2C94C"}
            px={"32px"}
            py={"16px"}
            maxW={"200px"}
            hoverBg={"purple"}
            hoverColor={"white"}
            color={"black"}
          />
        </Link>
      </Flex>

      {/* Epub Items Grid */}
      <Flex
        gap={{ base: "20px", xl: "30px" }}
        display={{ base: "flex", md: "grid", xl: "flex" }}
        gridTemplateColumns={"repeat(3, 1fr)"}
        flexWrap={{ base: "wrap", xl: "nowrap" }}
        justifyContent={"center"}
      >
        {advocacyProjects.slice(0, itemsToShow).map((item, idx) => (
          <NewsItem key={idx} item={item} idx={idx} />
        ))}
      </Flex>

      {/* Mobile Discover More Button */}
      <Box
        display={{ base: "flex", lg: "none" }}
        mt={"1rem"}
        mx={"auto"}
      >
        <Link to={"/resources/programs"}>
          <Button
            text={t("common.discoverMore", "Discover more")}
            fontSize={"14px"}
            display={{ base: "flex", lg: "none" }}
            bg={"#F2C94C"}
            px={"28px"}
            py={"16px"}
            maxW={"200px"}
            hoverBg={"purple"}
            hoverColor={"white"}
            color={"black"}
          />
        </Link>
      </Box>
    </Flex>
  );
};

export default News;
