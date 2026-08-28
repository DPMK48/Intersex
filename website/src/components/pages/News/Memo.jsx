import {
  Box,
  Flex,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { memoItems } from "./items";
import Error from "../ErrorPage/Error";

const slugify = (title) =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

const renderContactItem = (value, idx) => {
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const isWebsite = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(\/.*)?$/i.test(value);

  if (isEmail) {
    return (
      <Link key={idx} href={`mailto:${value}`} color="purple" _hover={{ textDecoration: "underline" }}>
        {value}
      </Link>
    );
  }

  if (isWebsite) {
    const href = value.startsWith("http") ? value : `https://${value}`;
    return (
      <Link key={idx} href={href} isExternal color="purple" _hover={{ textDecoration: "underline" }}>
        {value}
      </Link>
    );
  }

  return <Text key={idx}>{value}</Text>;
};

const Memo = () => {
  const { title } = useParams();
  const memo = memoItems.find((item) => slugify(item.title) === title);

  if (!memo) {
    return <Error />;
  }

  return (
    <>
      <Helmet>
        <title>Memo | {memo.title}</title>
        <meta name="description" content={memo.description} />
      </Helmet>

      <Box
        w={"100%"}
        bg={"#fefefe"}
        px={{ base: "1rem", lg: "50px", xl: "100px" }}
        py={{ base: "2rem", lg: "3rem" }}
        fontFamily={"nunito"}
        boxShadow={"inner"}
      >
        <Flex flexDir={"column"} pt={{ base: "60px", md: "0px" }}>
          <Box color={"gray.600"} mb={5} fontWeight={600} fontSize={"1rem"}>
            <Link href={"/news/memo"} color={"gray.600"} _hover={{ color: "purple" }}>
              News / Memo
            </Link>
            / {memo.title}
          </Box>

          <Text
            as={"h1"}
            color={"#000"}
            lineHeight={"120%"}
            fontWeight={600}
            textAlign={{ base: "left", md: "left" }}
            fontSize={{ base: "1.2rem", md: "2rem" }}
            pb={{ base: "1rem", lg: "1.5rem" }}
            fontFamily={"inter"}
          >
            {memo.title}
          </Text>

          <Text as={"h2"} fontSize={{ base: "1rem", md: "1.2rem" }} fontWeight={600} color={"purple"} mb={4}>
            {memo.subtitle}
          </Text>

          <Text fontWeight={600} mb={1}>Issued by: {memo.issuedBy}</Text>
          <Text fontWeight={600} mb={5}>Date: {memo.date}</Text>

          {memo.intro.map((paragraph, idx) => (
            <Text key={idx} mb={4} color={"blackish"} textAlign={"justify"}>
              {paragraph}
            </Text>
          ))}

          <Text as={"h3"} fontSize={{ base: "1rem", md: "1.2rem" }} fontWeight={600} fontFamily={"inter"} mb={2}>
            The new IOC policy is harmful and discriminatory in the following ways:
          </Text>

          <UnorderedList ml={6} mb={5}>
            {memo.concerns.map((item, idx) => (
              <ListItem key={idx} mb={3}>
                <Text as={"span"} fontWeight={700}>{item.title}:</Text>{" "}
                <Text as={"span"}>{item.body}</Text>
              </ListItem>
            ))}
          </UnorderedList>

          <Text mb={5} color={"blackish"} textAlign={"justify"}>
            {memo.conclusion}
          </Text>

          <Text as={"h3"} fontSize={{ base: "1rem", md: "1.2rem" }} fontWeight={600} fontFamily={"inter"} mb={2}>
            Press Contact:
          </Text>

          <Text>{memo.pressContact.organization}</Text>
          <Text>{memo.pressContact.team}</Text>
          <Link href={`mailto:${memo.pressContact.email}`} color="purple" _hover={{ textDecoration: "underline" }} mb={4}>
            {memo.pressContact.email}
          </Link>

          {memo.footerContacts.map((item, idx) => (
            <Box key={idx}>
              {renderContactItem(item, idx)}
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default Memo;
