import {
  Box,
  Text,
  Heading,
  Image,
  Flex,
  Stack,
  Avatar,
  Tag,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { articles } from "./items";
import { articlesFr } from "./itemsFr";
import Error from "../ErrorPage/Error";
import { Helmet } from "react-helmet-async";
import { MdContentCopy, MdOutlineShare } from "react-icons/md";
import { useEffect, useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";
import { useTranslation } from "react-i18next";

const Article = () => {
  const { t, i18n } = useTranslation();
  const isFr = i18n.language === "fr";
  const [openShareModal, setOpenShareModal] = useState(false);

  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const toast = useToast();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    toast({
      description: t("common.linkCopied", "Link copied to clipboard"),
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };

  const slugify = (title) =>
    title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "") // Remove special characters
      .replace(/\s+/g, "-"); // Replace spaces with dashes
  let { title } = useParams();

  let articleIndex = articles.findIndex((post) => slugify(post.title) === title);
  if (articleIndex === -1 && articlesFr) {
    articleIndex = articlesFr.findIndex((post) => slugify(post.title) === title);
  }

  const project =
    articleIndex !== -1
      ? (isFr && articlesFr ? articlesFr[articleIndex] : articles[articleIndex])
      : null;

  if (!project) {
    console.error("Article not found:", title);
    return <Error />;
  }

  const parseContent = (text, link1, link2, link3) => {
    const boldItalicRegex = /\*\*\*(.+?)\*\*\*/g; // ***bold and italic***
    const boldRegex = /\*\*(.+?)\*\*/g; // **bold**
    const italicRegex = /\*(.+?)\*/g; // *italic*
    const linkRegex1 = /\](.+?)\]/g;
    const linkRegex2 = /\[(.+?)\[/g;
    const linkRegex3 = /\}(.+?)\}/g;

    // Replace markers with HTML tags
    let parsedText = text;
    parsedText = parsedText.replace(
      boldItalicRegex,
      "<strong><em>$1</em></strong>"
    ); // Bold + Italic
    parsedText = parsedText.replace(boldRegex, "<strong>$1</strong>"); // Bold
    parsedText = parsedText.replace(italicRegex, "<em>$1</em>"); // Italic
    parsedText = parsedText.replace(
      linkRegex1,
      `<a href=${link1} target="_blank" class='article-link' >$1</a>`
    );
    parsedText = parsedText.replace(
      linkRegex2,
      `<a href=${link2} target="_blank" class='article-link' >$1</a>`
    );
    parsedText = parsedText.replace(
      linkRegex3,
      `<a href=${link3} target="_blank" class='article-link' >$1</a>`
    );

    parsedText = parsedText.replace(/\n/g, "<br /> <br />");

    return parsedText;
  };

  return (
    <>
      <Helmet>
        <title>{project.title}</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={project.title} />
        <meta
          property="og:description"
          content={project.description}
        />
        <meta
          property="og:url"
          content={`https://intersexnigeria.org/articles/${slugify(
            project.title
          )}`}
        />
        <meta name="twitter:title" content={project.title} />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content={project.description}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${project.title}`,
            author: {
              "@type": "Person",
              name: `${project.author}`,
            },
            datePublished: `${project.date}`,
            url: `https://intersexnigeria.org/articles/${slugify(
              project.title
            )}`,
            description: `${project.description}`,
          })}
        </script>
      </Helmet>
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
          px={{ base: "12px", sm: "2rem", md: "5rem" }}
          // zIndex={10}
          backdropFilter={"blur(3px)"}
          flexDir={"column"}
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
          <Flex
            color={"gray.300"}
            gap={"6px"}
            fontSize={{ base: "14px", md: "16px" }}
            fontFamily={"inter"}
          >
            <Box _hover={{ color: "white" }}>
              <Link to="/resources/articles">{t("resources.articles", "Articles")}</Link>
            </Box>
            <Text noOfLines={1}>/ {project.title}</Text>
          </Flex>
        </Flex>
      </Box>
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
        {/* Header Section */}
        <Stack spacing={6} textAlign="center">
          <Heading
            fontSize={{ base: "20px", sm: "22px", md: "35px" }}
            fontFamily={"inter"}
            mx={"auto"}
            w={{ md: "70%" }}
          >
            {project.title}
          </Heading>
          <Flex
            justifyContent={"center"}
            gap={"6px"}
            flexWrap={"wrap"}
          >
            {project.hashtag1 && (
              <Tag
                size={{ base: "sm", md: "md" }}
                background={"#e9d5ff"}
                color={"blackish"}
              >
                {project.hashtag1}
              </Tag>
            )}
            {project.hashtag2 && (
              <Tag
                size={{ base: "sm", md: "md" }}
                background={"#fbcfe8"}
                color={"blackish"}
              >
                {project.hashtag2}
              </Tag>
            )}
            {project.hashtag3 && (
              <Tag
                size={{ base: "sm", md: "md" }}
                background={"#fed7aa"}
                color={"blackish"}
              >
                {project.hashtag3}
              </Tag>
            )}
            {project.hashtag4 && (
              <Tag
                size={{ base: "sm", md: "md" }}
                background={"#fef08a"}
                color={"blackish"}
              >
                {project.hashtag4}
              </Tag>
            )}
            <Menu>
              <MenuButton isActive={openShareModal}>
                <Flex
                  alignItems={"center"}
                  gap={2}
                  ml={3}
                  cursor={"pointer"}
                  onClick={() => setOpenShareModal(true)}
                >
                  <Icon as={MdOutlineShare} color={"blackish"} />
                  <Text
                    fontSize={{ base: "14px", sm: "16px" }}
                    color={"blackish"}
                  >
                    {t("common.share", "Share")}
                  </Text>
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={copyToClipboard}
                  _hover={{ bg: "#f9f4f9" }}
                >
                  <Flex
                    alignItems={"center"}
                    gap={3}
                    w={"100%"}
                    cursor={"pointer"}
                    _hover={{ bg: "#f9f4f9" }}
                    justifyContent={"space-between"}
                  >
                    <Text
                      fontSize={{ base: "14px", sm: "16px" }}
                      color={"blackish"}
                    >
                      {t("common.copyLink", "Copy link")}
                    </Text>
                    <Icon as={MdContentCopy} color={"blackish"} />
                  </Flex>
                </MenuItem>
                <MenuItem _hover={{ bg: "#f9f4f9" }}>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                      "Check out this article: " + url
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ width: "100%" }}
                  >
                    <Flex
                      alignItems={"center"}
                      gap={3}
                      w={"100%"}
                      cursor={"pointer"}
                      _hover={{ bg: "#f9f4f9" }}
                      justifyContent={"space-between"}
                    >
                      <Text
                        fontSize={{ base: "14px", sm: "16px" }}
                        color={"blackish"}
                      >
                        Whatsapp
                      </Text>
                      <Icon as={SiWhatsapp} color={"blackish"} />
                    </Flex>
                  </a>
                </MenuItem>
                <MenuItem _hover={{ bg: "#f9f4f9" }}>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      url
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ width: "100%" }}
                  >
                    <Flex
                      alignItems={"center"}
                      gap={3}
                      w={"100%"}
                      cursor={"pointer"}
                      _hover={{ bg: "#f9f4f9" }}
                      justifyContent={"space-between"}
                    >
                      <Text
                        fontSize={{ base: "14px", sm: "16px" }}
                        color={"blackish"}
                      >
                        Facebook
                      </Text>
                      <Icon
                        as={SlSocialFacebook}
                        color={"blackish"}
                      />
                    </Flex>
                  </a>
                </MenuItem>
                <MenuItem _hover={{ bg: "#f9f4f9" }}>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      url
                    )}&text=${project.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ width: "100%" }}
                  >
                    <Flex
                      alignItems={"center"}
                      gap={3}
                      w={"100%"}
                      cursor={"pointer"}
                      _hover={{ bg: "#f9f4f9" }}
                      justifyContent={"space-between"}
                    >
                      <Text
                        fontSize={{ base: "14px", sm: "16px" }}
                        color={"blackish"}
                      >
                        X
                      </Text>
                      <Icon as={BsTwitterX} color={"blackish"} />
                    </Flex>
                  </a>
                </MenuItem>
                <MenuItem _hover={{ bg: "#f9f4f9" }}>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                      url
                    )}&title=${project.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ width: "100%" }}
                  >
                    <Flex
                      alignItems={"center"}
                      gap={3}
                      w={"100%"}
                      cursor={"pointer"}
                      _hover={{ bg: "#f9f4f9" }}
                      justifyContent={"space-between"}
                    >
                      <Text
                        fontSize={{ base: "14px", sm: "16px" }}
                        color={"blackish"}
                      >
                        LinkedIn
                      </Text>
                      <Icon as={RiLinkedinFill} color={"blackish"} />
                    </Flex>
                  </a>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>

          <Flex align="center" justify="center" gap={2}>
            <Avatar
              size={"md"}
              src={project.authorImg}
              alt={project.author}
            />
            <Text
              fontWeight="bold"
              fontSize={{ base: "14px", sm: "16px" }}
            >
              {project.author}
            </Text>
            <Text
              color="gray.600"
              fontSize={{ base: "14px", sm: "16px" }}
            >
              | {project.date}
            </Text>
          </Flex>
        </Stack>
        {/* Image Section */}
        <Flex justify="center" py={6}>
          <Image
            borderRadius="md"
            src={project.mainImg}
            width={"100%"}
            alt={project.title}
            h={{ base: "350px", md: "500px" }}
            objectPosition={"top"}
            objectFit={"cover"}
          />
        </Flex>
        {/* Content Section */}

        <Box mt={{ base: 4, md: 6 }} px={{ lg: "50px", xl: "100px" }}>
          <Text
            mb={4}
            fontSize={{ base: "14px", md: "16px" }}
            color="blackish"
            textAlign={"justify"}
            dangerouslySetInnerHTML={{
              __html: parseContent(
                project.post || project.text,
                project.inlineLink1,
                project.inlineLink2,
                project.inlineLink3
              ),
            }}
          />
        </Box>
      </Flex>
    </>
  );
};

export default Article;
