/* eslint-disable react/prop-types */
import {
  Flex,
  Icon,
  Image,
  Text,
  // useBreakpointValue,
} from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { resources } from "./item";

const ResourcesItem = ({ item, idx }) => {
  const { text, title, image } = item;
  const slugify = (title) =>
    title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "") // Remove special characters
      .replace(/\s+/g, "-"); // Replace spaces with dashes

  const parseContent = (text, link1) => {
    const boldItalicRegex = /\*\*\*(.+?)\*\*\*/g; // ***bold and italic***
    const boldRegex = /\*\*(.+?)\*\*/g; // **bold**
    const italicRegex = /\*(.+?)\*/g; // *italic*
    const linkRegex1 = /\](.+?)\]/g;
    let parsedText = text;
    parsedText = parsedText.replace(
      boldItalicRegex,
      "<strong><em>$1</em></strong>"
    ); // Bold + Italic
    parsedText = parsedText.replace(/\n/g, "<br />");
    parsedText = parsedText.replace(boldRegex, "<strong>$1</strong>"); // Bold
    parsedText = parsedText.replace(italicRegex, "<em>$1</em>"); // Italic
    parsedText = parsedText.replace(
      /\[img:\s*(.*?)\]/g,
      '<img src="$1" style="max-width:100%; margin: 26px 0;" />'
    );
    parsedText = parsedText.replace(
      linkRegex1,
      `<a href=${link1} target="_blank" class='article-link' >$1</a>`
    );

    return parsedText;
  };
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
        dangerouslySetInnerHTML={{
          __html: parseContent(text),
        }}
      />
      <Link to={`/intersectional-knowledge/${slugify(title)}`}>
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
          <Text fontWeight={600}>Read more</Text>
          <Icon as={FaChevronRight} />
        </Flex>
      </Link>
    </Flex>
  );
};

const ResourceSidebar = ({ currentArticle }) => {
  // Dynamically choose how many items to show based on screen size
  // const itemsToShow = useBreakpointValue({
  //   base: 2, // small screens
  //   md: 3, // medium screens
  // });

  return (
    <Flex
      flexDir={"column"}
      px={{ base: "1rem", lg: "50px" }}
      py={{ base: "2rem", lg: "3rem" }}
      // bg={"#fffbef"}
      fontFamily={"nunito"}
    >
      <Flex
        gap={{ base: "20px", xl: "30px" }}
        display={{ base: "grid", md: "grid", xl: "grid" }}
        gridTemplateColumns={{
          base: "1fr",
          sm: "1fr 1fr",
          md: "1fr",
        }}
        flexWrap={{ base: "wrap", xl: "nowrap" }}
        justifyContent={"center"}
        mx={'auto'}
      >
        {resources
          .filter((item) => item.title !== currentArticle)
          .map((item, idx) => (
            <ResourcesItem key={idx} item={item} idx={idx} />
          ))}
      </Flex>
    </Flex>
  );
};

export default ResourceSidebar;
