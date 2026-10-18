import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { faqItems } from "../Faqs/item";
import { Link } from "react-router-dom";
import { Routes } from "../../../routes/baseRoutes";
import Button from "../../../ui/Button";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFaq = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };
  return (
    <Flex
      flexDir={"column"}
      px={{ base: "1rem", lg: "50px", xl: "100px" }}
      py={{ base: "2rem", lg: "3rem" }}
      bg={"#fefefe"}
      fontFamily={"nunito"}
    >
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
          {t("home.faqTitle", "What is Intersex?")}
        </Text>
        <Link to={Routes.faq}>
          <Button
            text={t("common.readMore", "Read more")}
            fontSize={"16px"}
            display={{ base: "none", lg: "flex" }}
            bg={"#F2C94C"}
            px={"32px"}
            py={"16px"}
            maxW={"200px"}
            textTransform={""}
            hoverBg={"purple"}
            hoverColor={"white"}
            color={"black"}
          />
        </Link>
      </Flex>
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
        {faqItems.slice(0, 5).map((item, idx) => {
          const questionText = item.keyQuestion ? t(item.keyQuestion) : item.question;
          const answerText = item.keyAnswer ? t(item.keyAnswer) : item.answer;
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
                  fontWeight={500}
                  fontSize={{
                    base: "1rem",
                    md: "1.2rem",
                  }}
                  fontFamily={"inter"}
                >
                  {questionText}
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
                borderTop={activeIndex === idx && "1px solid #f5ac07"}
                pt={"1rem"}
                mt={"1rem"}
                display={activeIndex === idx ? "block" : "none"}
                w={"100%"}
                fontFamily={"inter"}
                // className={`red-hat ${
                //   activeIndex === idx ? "fade-in" : "fade-out"
                // }`}
              >
                {answerText.split("\n").map((line, index) => (
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
      <Box
        display={{ base: "flex", lg: "none" }}
        mt={"1rem"}
        mx={"auto"}
      >
        <Link to={Routes.faq}>
          <Button
            text={t("common.readMore", "Read more")}
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

export default Faq;
