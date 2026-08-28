import {
  Box,
  Flex,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaChevronRight, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { memoItems } from "./items";

const slugify = (title) =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

const Memos = () => {
  return (
    <Flex
      flexDir={"column"}
      pos={"relative"}
      w={"100%"}
      bg={"#fefefe"}
      px={{ base: "1rem", lg: "50px", xl: "100px" }}
      py={{ base: "2rem", lg: "3rem" }}
      fontFamily={"nunito"}
      boxShadow={"inner"}
    >
      <VStack align={"stretch"} pt={{ base: "60px", md: "0px" }} spacing={4}>
        <Text
          as={"h1"}
          color={"#000"}
          lineHeight={"120%"}
          fontWeight={700}
          textAlign={"left"}
          fontSize={{ base: "24px", md: "48px" }}
          pb={{ base: "0.75rem", lg: "1rem" }}
          fontFamily={"inter"}
        >
          Memo
        </Text>

        <Text fontSize={{ base: "14px", sm: "16px", md: "18px" }} color={"blackish"}>
          Official statements and memoranda from Intersex Nigeria.
        </Text>

        <SimpleGrid columns={memoItems.length > 0 ? { base: 1, md: 2 } : 1} spacing={6} w="full" mt={2}>
          {memoItems.map((memo, idx) => (
            <Box key={idx} p={5} border="1px solid" borderColor="gray.200" borderRadius="md">
              <VStack align="start" spacing={3}>
                <Link to={`/news/memo/${slugify(memo.title)}`}>
                  <Text
                    as={"h3"}
                    fontSize={{ base: "1.2rem", md: "1.1rem" }}
                    fontWeight={600}
                    fontFamily={"inter"}
                    color={"black"}
                    _hover={{ color: "purple" }}
                  >
                    {memo.title}
                  </Text>
                </Link>

                <Text fontSize={{ base: "14px", md: "16px" }} color={"blackish"}>
                  {memo.description}
                </Text>

                <HStack spacing={4} color={"purple"}>
                  <HStack>
                    <Icon as={FaClock} />
                    <Text fontSize={{ base: "14px", md: "16px" }}>{memo.date}</Text>
                  </HStack>
                </HStack>

                <Link to={`/news/memo/${slugify(memo.title)}`}>
                  <Flex
                    fontSize={"14px"}
                    color={"purple"}
                    cursor={"pointer"}
                    gap={"8px"}
                    w={"fit-content"}
                    alignItems={"center"}
                  >
                    <Text fontWeight={600}>Read memo</Text>
                    <Icon as={FaChevronRight} />
                  </Flex>
                </Link>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Flex>
  );
};

export default Memos;
