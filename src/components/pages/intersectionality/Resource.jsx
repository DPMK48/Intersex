import {
  Box,
  Text,
  Heading,
  Image,
  Flex,
  Stack,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
  GridItem,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import Error from "../ErrorPage/Error";
import { Helmet } from "react-helmet-async";
import { MdContentCopy, MdOutlineShare } from "react-icons/md";
import { useEffect, useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";
import { Routes } from "../../../routes/baseRoutes";
import { resources } from "./item";
import ResourceSidebar from "./ResourceSidebar";
import ScrollToTop from "../../../ui/ScrollToTop";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";

const Resource = () => {
  const { t } = useTranslation();
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
  const resource = resources.find(
    (post) => slugify(post.title) === title
  );

  if (!resource) {
    console.error("Article not found:", title);
    return <Error />;
  }

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
    <>
      <Helmet>
        <title>{resource.title}</title>
        {/* <meta name="description" content={resource.description} /> */}
        <meta property="og:title" content={resource.title} />
        {/* <meta
          property="og:description"
          content={resource.description}
        /> */}
        <meta
          property="og:url"
          content={`https://intersexnigeria.org/articles/${slugify(
            resource.title
          )}`}
        />
        <meta name="twitter:title" content={resource.title} />
        <meta name="twitter:card" content="summary" />
        {/* <meta
          name="twitter:description"
          content={resource.description}
        /> */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${resource.title}`,
            url: `https://intersexnigeria.org/articles/${slugify(
              resource.title
            )}`,
            // description: `${resource.description}`,
          })}
        </script>
      </Helmet>
      <Navbar color={"purple"} />
      <ScrollToTop />
      <Flex
        justify="center"
        px={{ base: "1rem", lg: "50px", xl: "100px" }}
        pb={{ base: "2rem", lg: "3rem" }}
        pt={{ base: "5rem", md: "105px" }}
        flexDir={"column"}
      >
        <Stack textAlign="center">
          <Heading
            fontSize={{ base: "20px", sm: "22px", md: "35px" }}
            fontFamily={"inter"}
            mb={"1rem"}
            mx={"auto"}
            w={{ md: "70%" }}
          >
            {resource.title}
          </Heading>
          <Flex
            justifyContent={"center"}
            pb={"1rem"}
            alignItems={"center"}
            fontWeight={500}
          >
            <Link to={Routes.intersectionality}>
              <Text
                _hover={{ textDecoration: "underline" }}
                color={"blackish"}
                gap={"6px"}
                fontSize={{ base: "14px", md: "16px" }}
                fontFamily={"inter"}
              >
                {t("intersectionality.resourceHub", "Resource Hub")} |
              </Text>
            </Link>

            <Flex
              justifyContent={"center"}
              gap={"6px"}
              flexWrap={"wrap"}
              alignItems={"center"}
              zIndex={200}
            >
              <Menu>
                <MenuButton isActive={openShareModal}>
                  <Flex
                    alignItems={"center"}
                    gap={2}
                    ml={"6px"}
                    cursor={"pointer"}
                    onClick={() => setOpenShareModal(true)}
                  >
                    <Icon as={MdOutlineShare} color={"blackish"} />
                    <Text
                      color={"blackish"}
                      gap={"6px"}
                      fontSize={{ base: "14px", md: "16px" }}
                      fontFamily={"inter"}
                      fontWeight={500}
                    >
                      {t("common.share", "Share")}
                    </Text>
                  </Flex>
                </MenuButton>
                <MenuList zIndex={200}>
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
                      )}&text=${resource.title}`}
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
                      )}&title=${resource.title}`}
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
                        <Icon
                          as={RiLinkedinFill}
                          color={"blackish"}
                        />
                      </Flex>
                    </a>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
        </Stack>
        <Image
          borderRadius="md"
          src={resource.image}
          width={"100%"}
          alt={resource.title}
          h={{ base: "350px", md: "500px" }}
          objectPosition={"top"}
          objectFit={"cover"}
        />
      </Flex>
      <Flex
        display={"grid"}
        gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
      >
        <GridItem
          flexDir={"column"}
          colSpan={2}
          pos={"relative"}
          w={"100%"}
          bg={"#fefefe"}
          // h={"75vh"}
          px={{ base: "1rem", md: 0 }}
          py={{ base: 0, lg: "3rem" }}
          // gap={"100px"}
          fontFamily={"nunito"}
          boxShadow={"inner"}
        >
          {/* Header Section */}

          {/* Image Section */}

          {/* Content Section */}

          <Box
            mt={{ base: 4, md: 6 }}
            mb={4}
            px={{ md: "1rem", lg: "50px", xl: "100px" }}
            borderBottom={"1px solid #00000027"}
          >
            <Text
              mb={8}
              fontSize={{ base: "14px", md: "16px" }}
              color="blackish"
              textAlign={"justify"}
              dangerouslySetInnerHTML={{
                __html: parseContent(
                  resource.text,
                  resource.inlineLink1
                  // resource.inlineLink2,
                  // resource.inlineLink3
                ),
              }}
            />
          </Box>
        </GridItem>

        <ResourceSidebar currentArticle={resource.title} />
      </Flex>
      <Footer />
    </>
  );
};

export default Resource;
