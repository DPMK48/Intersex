import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { reports } from "./items";
import Button from "../../../ui/Button";

const AnnualReports = () => {
  return (
    <Flex
      flexDir={"column"}
      fontFamily={"nunito"}
      boxShadow={"inner"}
      w={"100%"}
      pt={{ base: "60px", md: "0px" }}
    >
      <Box
        bgImage={
          "https://res.cloudinary.com/dcjebpvia/image/upload/f_auto/v1751211802/intersex-ng-images/ar-bg.jpg"
        }
        bgAttachment={"fixed"}
        h={{ base: "280px", lg: "380px" }}
        w={"100%"}
        bgSize={"cover"}
        bgPos={"center"}
        pos={"relative"}
      >
        <Flex
          pos={"absolute"}
          h={{ base: "280px", lg: "380px" }}
          w={"100%"}
          bg={"#000000c5"}
          flexDir={"column"}
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
            py={{ base: "1rem", lg: "2rem" }}
            lineHeight={"120%"}
            fontFamily={"inter"}
            textAlign={"center"}
            as={"h1"}
          >
            Annual Reports
          </Text>
          <Text
            color={"white"}
            maxW={"1024px"}
            textAlign={"center"}
            px={"10px"}
            fontSize={{ base: "14px", md: "16px" }}
          >
            Intersex Nigeria remains dedicated to sharing in-depth and
            transparent updates on our activities and achievements
            each year. Our annual reports offer a comprehensive look
            into our advocacy work, detailing the progress we&apos;ve
            made in advancing the rights and visibility of intersex
            persons in Nigeria.
          </Text>
        </Flex>
      </Box>
      <Flex
        px={{ base: "1rem", lg: "50px", xl: "100px" }}
        py={{ base: "2rem", lg: "3rem" }}
        bg={"#fefefe"}
        flexDir={"column"}
        alignItems={{ lg: "center" }}
        gap={{ base: "2rem", md: "2rem" }}
        h={"100%"}
      >
        {reports.map((item, idx) => {
          const { title, text, pdf, images } = item;
          return (
            <Flex
              gap={{ base: "2rem", lg: "3rem" }}
              flexDir={{ base: "column", md: "row" }}
              justifyContent={{ lg: "center" }}
              alignItems={{ base: "flex-start", lg: "" }}
              w={{ base: "100%", lg: "100%" }}
              key={idx}
              h={"100%"}
              py={"16px"}
              px={{ base: "12px", md: "24px", lg: "42px" }}
              border={"1px solid #E5E7EB"}
              borderRadius={"16px"}
              boxShadow={"lg"}
            >
              <Box
                // maxW={{ base: "100%", lg: "100%", xl: "50%" }}
                w={{ base: "", md: "30%", xl: "25%" }}
              >
                <Image
                  src={images}
                  alt={text}
                  loading="lazy"
                  height={{ sm: "300px", lg: "auto" }}
                  w={"100%"}
                  objectFit={"scale-down"}
                />
              </Box>

              <Flex
                flexDir={"column"}
                // gap={"1rem"}
                w={{ base: "100%", md: "70%", lg: "75%" }}
                h={"100%"}
                justifyContent={"space-between"}
              >
                <Box>
                  <Text
                    as={"h2"}
                    fontSize={{
                      base: "1.3rem",
                      lg: "1.5rem",
                      xl: "24px",
                    }}
                    fontWeight={"600"}
                    fontFamily={"inter"}
                  >
                    {title}
                  </Text>
                  <Text
                    fontSize={{ base: "14px", xl: "1rem" }}
                    textAlign={"justify"}
                  >
                    {text.split("\n").map((item, index) => (
                      <React.Fragment key={index}>
                        <Text as={"span"}>
                          {item}
                        </Text>
                        <br />
                        <br />
                      </React.Fragment>
                    ))}
                  </Text>
                </Box>

                <Flex
                  justifySelf={"flex-end"}
                  gap={"1rem"}
                  alignItems={"center"}
                  flexWrap={"wrap"}
                  h={"100%"}
                >
                  <a href={pdf} download={pdf}>
                    <Button
                      textTransform={"capitalize"}
                      fontSize={{ base: "0.9rem", lg: "1.1rem" }}
                      text={
                        <>
                          <Image src="/icons/download.svg" />
                          &nbsp; Download
                        </>
                      }
                      maxW={{ base: "120px", md: "170px" }}
                      minW={{base:"120px", md:'170px'}}
                    />
                  </a>
                  <Button
                    color={"#64117e"}
                    textTransform={"capitalize"}
                    bg={"transparent"}
                    maxW={{ base: "120px", md: "170px" }}
                    minW={"120px"}
                    border={"1px solid #64117e"}
                    hoverBg={"none"}
                    cursor={"pointer"}
                    fontSize={{ base: "0.9rem", lg: "1.1rem" }}
                    onClick={() => window.open(pdf, "_blank")}
                    text={
                      <>
                        <Image src="/icons/read.svg" />
                        &nbsp; Read more
                      </>
                    }
                  />
                </Flex>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default AnnualReports;
