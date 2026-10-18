import {
  Avatar,
  Box,
  Flex,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import TextTruncate from "react-text-truncate";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { articles } from "./items";
import { articlesFr } from "./itemsFr";
import { useTranslation } from "react-i18next";

const Articles = () => {
  const { t, i18n } = useTranslation();
  const isFr = i18n.language === "fr";
  const list = isFr && articlesFr ? articlesFr : articles;

  return (
    <Flex
      flexDir={"column"}
      fontFamily={"nunito"}
      boxShadow={"inner"}
      bg={"#fefefe"}
      pt={{ base: "60px", md: "0px" }}
      w={"100%"}
    >
      <Box
        bgImage={"https://res.cloudinary.com/dcjebpvia/image/upload/f_auto/v1751211852/intersex-ng-images/articles-bg.webp"}
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
            {t("resources.articles", "Articles")}
          </Text>
        </Flex>
      </Box>
      <Flex
        py={"3rem"}
        px={{ base: "1rem", lg: "50px", xl: "100px" }}
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
        bg={"#fefefe"}
        justifyContent={"center"}
      >
        {list.map((item, idx) => {
          const {
            text,
            title,
            mainImg,
            link,
            author,
            authorImg,
            date,
          } = item;
          const canonicalTitle = articles[idx]?.title || title;
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
              border={"1px solid #65117e51"}
              minW={{ base: "220px", md: "345px" }}
              maxW={"384px"}
              flexWrap={"wrap"}
              justifyContent={"space-between"}
              w={{ base: "100%", lg: "100%" }}
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
                objectPosition={"center"}
                borderBottom={"1px solid #65117e51"}
              />
              <Flex
                gap={"12px"}
                py={"12px"}
                px={"12px"}
                justifyContent={"space-between"}
              >
                <Text
                  fontSize={"15px"}
                  fontWeight={700}
                  color={"black"}
                  textTransform={"capitalize"}
                  as={"h5"}
                >
                  {title}
                </Text>

                <Link
                  to={link ? link : `/articles/${slugify(canonicalTitle)}`}
                  target={link && "_blank"}
                  rel="noreferrer"
                >
                  <Icon
                    fontSize={"20px"}
                    as={MdArrowOutward}
                    color={"purple"}
                  />
                </Link>
              </Flex>

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
                  text={text}
                />
              </Text>
              {author && (
                <Flex
                  pb={"12px"}
                  px={"12px"}
                  gap={"12px"}
                  alignItems={"center"}
                >
                  <Avatar size={"md"} name={author} src={authorImg} />
                  <Flex flexDir={"column"}>
                    <Text
                      fontWeight={500}
                      fontFamily={"inter"}
                      fontSize={"14px"}
                    >
                      {author}
                    </Text>
                    <Text
                      fontFamily={"inter"}
                      fontSize={"12px"}
                      color={"gray"}
                    >
                      {date}
                    </Text>
                  </Flex>
                </Flex>
              )}
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Articles;
