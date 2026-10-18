import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";
import { advocacyProjects } from "../Home/items";
import { advocacyProjectsFr } from "../Home/itemsFr";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AdvocacyProjects = () => {
  const { t, i18n } = useTranslation();
  const isFr = i18n.language === "fr";
  const list = isFr && advocacyProjectsFr ? advocacyProjectsFr : advocacyProjects;

  return (
    <Flex
      flexDir={"column"}
      fontFamily={"nunito"}
      boxShadow={"inner"}
      w={"100%"}
      bg={"#fefefe"}
      pt={{ base: "60px", md: "0px" }}
    >
      <Box
        bgImage={"https://res.cloudinary.com/dcjebpvia/image/upload/f_auto/v1751212431/intersex-ng-images/news4.jpg"}
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
            {t("resources.ourPrograms", "Our Programs")}
          </Text>
        </Flex>
      </Box>
      <Flex
        gap={{ base: "20px", xl: "30px" }}
        display={"grid"}
        gridTemplateColumns={{
          base: "1fr",
          sm: "1fr 1fr",
          xl: "1fr 1fr 1fr",
        }}
        flex={1}
        mx={"auto"}
        flexWrap={{ base: "wrap", xl: "nowrap" }}
        py={"3rem"}
        px={{ base: "1rem", lg: "50px", xl: "100px" }}
        bg={"#fefefe"}
        justifyContent={"center"}
      >
        {list.map((item, idx) => {
          const { text, title, mainImg, description } = item;
          const canonicalTitle = advocacyProjects[idx]?.title || title;
          const slugify = (str) =>
            str
              .toLowerCase()
              .trim()
              .replace(/[^\w\s-]/g, "") // Remove special characters
              .replace(/\s+/g, "-"); // Replace spaces with dashes
          return (
            <Flex
              key={idx}
              flexDir={"column"}
              borderTopRadius={"22px"}
              // border={"1px solid #65117e51"}
              minW={{ base: "220px", md: "345px" }}
              maxW={"384px"}
              flexWrap={"wrap"}
              justifyContent={"space-between"}
              w={{ base: "100%", lg: "100%" }}
              _hover={{ transform: " scale(1.02)" }}
            >
              <Image
                src={mainImg}
                loading="lazy"
                alt={title}
                h={"245px"}
                objectFit={"cover"}
                borderTopRadius={"22px"}
                borderBottom={"2px solid purple"}
              />
              <Text
                fontSize={"15px"}
                fontWeight={700}
                py={"12px"}
                color={"black"}
                // px={"12px"}
                textTransform={"capitalize"}
                as={"h5"}
              >
                {title}
              </Text>
              <Text
                fontSize={"13px"}
                fontWeight={400}
                pb={"12px"}
                // px={"12px"}
                color={"black"}
                h={"60px"}
                noOfLines={3}
              >
                {description || text}
              </Text>
              <Link to={`/resources/programs/${slugify(canonicalTitle)}`}>
                <Flex
                  fontSize={"14px"}
                  color={"purple"}
                  pb={"12px"}
                  // px={"12px"}
                  cursor={"pointer"}
                  gap={"8px"}
                  w={"fit-content"}
                  alignItems={"center"}
                >
                  <Text fontWeight={600}>{t("resources.readMore", "Read more")}</Text>
                  <Icon as={FaChevronRight} />
                </Flex>
              </Link>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default AdvocacyProjects;
