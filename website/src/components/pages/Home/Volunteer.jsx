// import React from 'react'

import { Box, Flex, Text } from "@chakra-ui/react";
import Button from "../../../ui/Button";
// import { Link } from "react-router-dom";

const Volunteer = () => {
  return (
    <Flex
      flexDir={"column"}
      px={{ base: "1rem", lg: "50px", xl: "100px" }}
      py={{ base: "2rem", lg: "3rem" }}
      bg={"#fefefe"}
    >
      <Flex gap={"10px"} alignItems={"center"} fontFamily={"nunito"}>
        {" "}
        <Box w={"50px"} h={"4px"} bg={"purple"}></Box>
        <Text
          fontSize={{ base: "12px", md: "16px" }}
          fontWeight="bold"
          textTransform={"uppercase"}
        >
          get involved
        </Text>
      </Flex>
      <Text
        fontSize={{ base: "22px", md: "40px" }}
        fontWeight={700}
        color={"#1d2130"}
        maxW={"710px"}
        w={"100%"}
        fontFamily={"inter"}
        lineHeight={"120%"}
        as={"h1"}
      >
        We are creating a society where intersex people can thrive
      </Text>
      <Box
        maxW={"1280px"}
        w={"100%"}
        h={"384px"}
        mt={"2rem"}
        bgImage={
          "https://res.cloudinary.com/dcjebpvia/image/upload/f_auto/v1751211855/intersex-ng-images/banner.jpg"
        }
        bgSize="cover"
        bgPos="center"
        pos={"relative"}
        borderRadius={"20px"}
      >
        <Box
          bg={"#000000a9"}
          // bg={"#1d2130c5"}
          backdropFilter={"blur(2px)"}
          w={"100%"}
          h={"100%"}
          borderRadius={"20px"}
        >
          <Text
            fontSize={{ base: "20px", md: "38px" }}
            pt={"5rem"}
            pb={"2rem"}
            px={{ base: "0.8rem", md: "" }}
            fontWeight={600}
            textAlign={"center"}
            color={"#fff"}
            maxW={"805px"}
            w={"100%"}
            lineHeight={"120%"}
            m={"auto"}
            fontFamily={"nunito"}
            as={"h5"}
          >
            Share your time and resources with us.
            <br /> Join our work to support intersex people!
          </Text>
          <Flex
            justifyContent={"center"}
            gap={{ base: "15px", lg: "32px" }}
            flexWrap={{ base: "wrap", md: "nowrap" }}
          >
            {/* <Link
              to={
                "https://docs.google.com/forms/d/e/1FAIpQLScYttqFyJ8FYvoO8aw27Y_9It35Td3IuXoqxv9lfdWTFSi7Fg/viewform"
              }
            >
              <Button
                text={"Join as a volunteer"}
                fontSize={"16px"}
                bg={"#F2C94C"}
                px={"32px"}
                py={"16px"}
                maxW={"115px"}
                textTransform={""}
                hoverBg={"purple"}
                hoverColor={"white"}
                color={"black"}
              />
            </Link> */}

            <Button
              text={"Donate"}
              // bg={"#fff"}
              bg={"#F2C94C"}
              fontSize={"16px"}
              px={"32px"}
              py={"16px"}
              maxW={"115px"}
              hoverBg={"purple"}
              hoverColor={"white"}
              textTransform={""}
              color={"black"}
            />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default Volunteer;
