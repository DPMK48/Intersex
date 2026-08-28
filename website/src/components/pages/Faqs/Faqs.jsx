import {
  Box,
  Divider,
  Flex,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { faqItems } from "./item";
import { Routes } from "../../../routes/baseRoutes";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFaq = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };
  return (
    <Flex
      flexDir={"column"}
      pos={"relative"}
      w={"100%"}
      bg={"#fefefe"}
      // h={"75vh"}
      px={{ base: "1rem", lg: "50px", xl: "100px" }}
      py={{ base: "2rem", lg: "3rem" }}
      // gap={"100px"}
      boxShadow={"inner"}
    >
      <Box
        pt={{ base: "60px", md: "0px" }}
        fontSize={{ base: "16px", md: "18px" }}
      >
        <a
          href={Routes.intersex}
          style={{
            color: "purple",
            textDecoration: "underline",
            fontSize: "18px",
            marginBottom: "16px",
            fontFamily: "inter",
            fontWeight: 500,
          }}
        >
          Understand Intersex
        </a>
      </Box>
      <VStack mx="auto" pt={{ base: "24px", md: "0px" }} w={"100%"}>
        <VStack>
          <Text
            as={"h1"}
            color={"#000"}
            lineHeight={"120%"}
            w={{ base: "100%", xl: "100%" }}
            fontWeight={700}
            textAlign={"left"}
            fontSize={{ base: "24px", md: "48px" }}
            textTransform={"capitalize"}
            fontFamily={"inter"}
          >
            What is Intersex?
          </Text>
          <Text
            fontSize={{ base: "16px", md: "18px" }}
            color={"blackish"}
            textAlign={"left"}
            fontFamily={"nunito"}
            pt={{ base: "0.5rem", lg: "10px" }}
          >
            Find answers to some of the most common questions about
            intersex individuals, their rights, and how to support
            them. If you have more questions, feel free to reach out
            to us.
          </Text>
        </VStack>

        <Divider borderColor="gray.200" />
        <Flex
          flexDir={"column"}
          alignItems={"center"}
          w={{ base: "100%", xl: "85%" }}
          gap={{ base: "1rem", md: "2rem" }}
          mx={"auto"}
          // maxW={"1900px"}
          zIndex={4}
          // px={{ base: "12px", md: "50px", xl: "100px" }}
          pt={{ base: "1rem", md: "3rem" }}
        >
          {faqItems.map((item, idx) => {
            return (
              <Flex
                flexDir={"column"}
                key={idx}
                boxShadow={"1px 1px 10px 2px #7c7b7b2c"}
                p={"1rem"}
                borderRadius={"12px"}
                w={"100%"}
                zIndex={4}
                h={"fit-content"}
                transition={"height 1s ease-in-out"}
              >
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  // className="fade-in-top"
                >
                  <Text
                    as={"h5"}
                    color={"blackish"}
                    fontSize={{
                      base: "1rem",
                      md: "1.2rem",
                    }}
                    fontFamily={"inter"}
                    fontWeight={500}
                  >
                    {item.question}
                  </Text>
                  <Icon
                    boxSize={8}
                    cursor={"pointer"}
                    as="button"
                    onClick={() => toggleFaq(idx)}
                    className={
                      activeIndex === idx
                        ? "rotate-180-top-cw"
                        : "rotate-180-down-cw"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#000"
                    >
                      <path d="M480-371.69 267.69-584 296-612.31l184 184 184-184L692.31-584 480-371.69Z" />
                    </svg>
                  </Icon>
                </Flex>
                <Text
                  color={"blackish"}
                  fontSize={{ base: "1rem", md: "1.1rem" }}
                  borderTop={
                    activeIndex === idx && "1px solid #f5ac07"
                  }
                  pt={"1rem"}
                  mt={"1rem"}
                  display={activeIndex === idx ? "block" : "none"}
                  w={"100%"}
                  fontFamily={"inter"}
                  // className={`red-hat ${
                  //   activeIndex === idx ? "fade-in" : "fade-out"
                  // }`}
                >
                  {item.answer.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                      <br />
                    </React.Fragment>
                  ))}
                </Text>
              </Flex>
            );
          })}
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Faq;
