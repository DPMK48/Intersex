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
import { epubItems } from "../Resources/items";
import { useTranslation } from "react-i18next";

const getPdfUrl = (pdf) => encodeURI(pdf.trim());

const Epub = ({ item, idx }) => {
  const { t } = useTranslation();
  const { text, title, image, pdf } = item;
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
        src={image}
        loading="lazy"
        h={"245px"}
        alt={title}
        objectFit={"cover"}
        objectPosition={"top"}
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
      <Flex
        fontSize={"14px"}
        color={"purple"}
        pb={"12px"}
        px={"12px"}
        cursor={"pointer"}
        gap={"8px"}
        w={"fit-content"}
        alignItems={"center"}
        onClick={() => window.open(getPdfUrl(pdf), "_blank")}
      >
        <Text fontWeight={600}>{t("common.readMore", "Read more")}</Text>
        <Icon as={FaChevronRight} />
      </Flex>
    </Flex>
  );
};

const Epublications = () => {
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
      bg={"#f9f4f9"}
      fontFamily={"nunito"}
    >
      {/* Header */}
      <Flex
        justifyContent={"space-between"}
        alignItems={"baseline"}
        w={"100%"}
        gap={"30px"}
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
          {t("home.epubTitle", "Epublications")}
        </Text>
        <Link to={"/resources/epublications"}>
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

      {/* Subtitle */}
      <Text
        fontSize={{ base: "16px", md: "18px" }}
        lineHeight={"30px"}
        color={"#1d2130"}
        pb={{ base: "1.5rem", lg: "2rem" }}
      >
        {t(
          "home.epubSubtitle",
          "Epublications about intersex matters available in French and English languages."
        )}
      </Text>

      {/* Epub Items Grid */}
      <Flex
        gap={{ base: "20px", xl: "30px" }}
        display={{ base: "flex", md: "grid", xl: "flex" }}
        gridTemplateColumns={"repeat(3, 1fr)"}
        flexWrap={{ base: "wrap", xl: "nowrap" }}
        justifyContent={"center"}
      >
        {epubItems.slice(0, itemsToShow).map((item, idx) => (
          <Epub key={idx} item={item} idx={idx} />
        ))}
      </Flex>

      {/* Mobile Discover More Button */}
      <Box
        display={{ base: "flex", lg: "none" }}
        mt={"1rem"}
        mx={"auto"}
      >
        <Link to={"/resources/epublications"}>
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

export default Epublications;
