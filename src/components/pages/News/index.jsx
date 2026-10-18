import {
  Box,
  Flex,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { newsItem } from "./items";
import TextTruncate from "react-text-truncate";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NewsArticles = () => {
  const { t } = useTranslation();

  return (
    <Flex
      flexDir={"column"}
      fontFamily={"nunito"}
      boxShadow={"inner"}
      pt={{ base: "60px", md: "0px" }}
      bg={"#fefefe"}
      w={"100%"}
    >
      <Box
        bgImage={"https://res.cloudinary.com/dcjebpvia/image/upload/f_auto/v1751212368/intersex-ng-images/news-bg.webp"}
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
            as={'h1'}
          >
            {t("newsPage.title", "Intersex in the News")}
          </Text>
        </Flex>
      </Box>
      <VStack
        py={"3rem"}
        px={{ base: "1rem", lg: "50px", xl: "100px" }}
        gap={8}
        w={"100%"}
        align={"stretch"}
      >
        <Box>
          <Text
            as={"h2"}
            fontWeight={700}
            fontSize={{ base: "1.5rem", lg: "2rem" }}
            fontFamily={"inter"}
            mb={4}
            color={"purple"}
          >
            {t("newsPage.heading", "News")}
          </Text>
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
            bg={"#fefefe"}
            justifyContent={"center"}
          >
            {newsItem.map((item, idx) => {
              const { text, title, mainImg, link } = item;

              return (
                <Flex
                  key={idx}
                  flexDir={"column"}
                  borderTopRadius={"22px"}
                  border={"1px solid #65117e51"}
                  minW={{ base: "220px", md: "384px" }}
                  maxW={"384px"}
                  flexWrap={"wrap"}
                  justifyContent={"space-between"}
                  w={{ base: "100%", lg: "25%" }}
                  _hover={{ transform: " scale(1.02)" }}
                >
                  <Image
                    src={mainImg}
                    alt={title}
                    loading="lazy"
                    h={"245px"}
                    w={"100%"}
                    objectFit={"cover"}
                    borderTopRadius={"22px"}
                    objectPosition={"top"}
                    borderBottom={"1px solid #65117e51"}
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
                    {t(item.keyTitle || `newsData.${idx}.title`, title)}
                  </Text>
                  <Text
                    fontSize={"13px"}
                    fontWeight={400}
                    pb={"12px"}
                    px={"12px"}
                    color={"black"}
                  >
                    <TextTruncate
                      line={3}
                      element="span"
                      truncateText="…"
                      text={t(item.keyText || `newsData.${idx}.text`, text)}
                    />
                  </Text>
                  <Link to={link} target="_blank" rel="noreferrer">
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
                      <Text fontWeight={600}>{t("newsPage.readMore", "Read more")}</Text>
                      <Icon as={FaChevronRight} />
                    </Flex>
                  </Link>
                </Flex>
              );
            })}
          </Flex>
        </Box>
      </VStack>
    </Flex>
  );
};

export default NewsArticles;
