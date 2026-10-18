import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { epubItems } from "./items";
import React from "react";
import Button from "../../../ui/Button";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../../routes/baseRoutes";
import { useTranslation } from "react-i18next";

const getPdfUrl = (pdf) => encodeURI(pdf.trim());

const Epubs = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Flex
      flexDir={"column"}
      fontFamily={"nunito"}
      boxShadow={"inner"}
      w={"100%"}
      pt={{ base: "60px", md: "0px" }}
      h={"100%"}
    >
      <Box
        bgImage={
          "https://res.cloudinary.com/dcjebpvia/image/upload/f_auto/v1751212081/intersex-ng-images/epub-bg.jpg"
        }
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
            {t("resources.epublications", "Epublications")}
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
        {epubItems.map((item, idx) => {
          const { image, pdf, text, title, pdf2, pdf3, pdf4, video } = item;
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
                  src={image}
                  alt={title}
                  loading="lazy"
                  height={{ sm: "300px", lg: "auto" }}
                  w={"100%"}
                  objectFit={"scale-down"}
                />
              </Box>

              <Flex
                flexDir={"column"}
                gap={"1rem"}
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
                    fontSize={{ base: "0.9rem", xl: "1rem" }}
                    textAlign={"justify"}
                  >
                    {text.split("\n").map((item, index) => (
                      <React.Fragment key={index}>
                        <Text pb={"6px"} as={"span"}>
                          {item}
                        </Text>
                        <br />
                        <br />
                      </React.Fragment>
                    ))}
                  </Text>
                </Box>

                <Flex
                  justifySelf="flex-end"
                  gap="1rem"
                  alignItems="center"
                  flexWrap="wrap"
                  h="100%"
                >
                  {/* DOWNLOAD BUTTON */}
                  <Button
                    textTransform="capitalize"
                    fontSize={{ base: "0.9rem", lg: "1.1rem" }}
                    text={
                      <>
                        <Image
                          src="/icons/download.svg"
                          alt="Download"
                        />
                        &nbsp; {t("resources.download", "Download")}
                      </>
                    }
                    maxW={{ base: "120px", md: "170px" }}
                    minW={{ base: "120px", md: "170px" }}
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = getPdfUrl(pdf); // ensure clean URL
                      link.setAttribute("download", "");
                      link.setAttribute("target", "_blank");
                      link.click();
                    }}
                  />

                  {/* READ MORE BUTTON */}
                  <Button
                    color="#64117e"
                    textTransform="capitalize"
                    bg="transparent"
                    maxW={{ base: "120px", md: "170px" }}
                    minW="120px"
                    border="1px solid #64117e"
                    hoverBg="none"
                    cursor="pointer"
                    fontSize={{ base: "0.9rem", lg: "1.1rem" }}
                    onClick={() => {
                      // Open directly to Cloudinary file in a new tab
                      window.open(getPdfUrl(pdf), "_blank");
                    }}
                    text={
                      <>
                        <Image
                          src="/icons/read.svg"
                          alt="Read more"
                        />
                        &nbsp; {t("resources.readMore", "Read more")}
                      </>
                    }
                  />

                  {/* WATCH VIDEO BUTTON */}
                  {video && (
                    <Button
                      color="#64117e"
                      textTransform="capitalize"
                      bg="transparent"
                      maxW={{ base: "150px", md: "200px" }}
                      minW="150px"
                      border="1px solid #64117e"
                      hoverBg="none"
                      cursor="pointer"
                      fontSize={{ base: "0.8rem", lg: "1rem" }}
                      onClick={() => navigate(Routes.animationVideos)}
                      text={t("resources.animationVideos", "Animation Videos")}
                    />
                  )}
                </Flex>

                <Flex flexDir={"column"} mt={"-1rem"}>
                  {pdf2 && (
                    <Flex
                      gap={{ base: "6px", xl: "2.5rem" }}
                      mt={{ base: "0.5rem", xl: "1rem" }}
                      alignItems={"center"}
                      flexWrap={"wrap"}
                      h={"100%"}
                    >
                      <a href={pdf2} download={pdf2}>
                        <Text
                          fontFamily={"inter"}
                          fontWeight={500}
                          fontSize={{ base: "14px", md: "16px" }}
                          textDecor={"underline"}
                          _hover={{ color: "purple" }}
                          textTransform={"capitalize"}
                        >
                          Download Nigerian french translation
                        </Text>
                      </a>
                      <Text
                        color={"purple"}
                        _hover={{ color: "orange" }}
                        cursor={"pointer"}
                        fontSize={{ base: "0.9rem", lg: "16px" }}
                        onClick={() => window.open(pdf2, "_blank")}
                      >
                        Read more...
                      </Text>
                    </Flex>
                  )}
                  {pdf3 && (
                    <Flex
                      gap={{ base: "6px", xl: "2.5rem" }}
                      mt={{ base: "0.5rem", xl: "1rem" }}
                      alignItems={"center"}
                      flexWrap={"wrap"}
                      h={"100%"}
                    >
                      <a href={pdf3} download={pdf3}>
                        <Text
                          fontFamily={"inter"}
                          fontWeight={500}
                          fontSize={{ base: "14px", md: "16px" }}
                          textDecor={"underline"}
                          _hover={{ color: "purple" }}
                          textTransform={"capitalize"}
                        >
                          Download Cameroon english translation
                        </Text>
                      </a>
                      <Text
                        color={"purple"}
                        _hover={{ color: "orange" }}
                        cursor={"pointer"}
                        fontSize={{ base: "0.9rem", lg: "16px" }}
                        onClick={() => window.open(pdf3, "_blank")}
                      >
                        Read more...
                      </Text>
                    </Flex>
                  )}
                  {pdf4 && (
                    <Flex
                      gap={{ base: "6px", xl: "2.5rem" }}
                      mt={{ base: "0.5rem", xl: "1rem" }}
                      alignItems={"center"}
                      flexWrap={"wrap"}
                      h={"100%"}
                    >
                      <a href={pdf4} download={pdf4}>
                        <Text
                          fontFamily={"inter"}
                          fontWeight={500}
                          fontSize={{ base: "14px", md: "16px" }}
                          textDecor={"underline"}
                          _hover={{ color: "purple" }}
                          textTransform={"capitalize"}
                        >
                          Download Cameroon french translation
                        </Text>
                      </a>
                      <Text
                        color={"purple"}
                        _hover={{ color: "orange" }}
                        cursor={"pointer"}
                        fontSize={{ base: "0.9rem", lg: "16px" }}
                        onClick={() => window.open(pdf4, "_blank")}
                      >
                        Read more...
                      </Text>
                    </Flex>
                  )}
                </Flex>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Epubs;
