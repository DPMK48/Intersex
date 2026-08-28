/* eslint-disable react/prop-types */
import {
  Box,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import ReportRightsViolationForm from "./ReportRightsViolationForm";

const ReportRightsViolation = () => {
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
        bgImage={"/images/abuse-bg.jpg"}
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
          backdropFilter={"blur(3px)"}
        >
          <Text
            fontWeight={700}
            color={"#fff"}
            fontSize={{ base: "30px", lg: "48px" }}
            py={{ base: "1.5rem", lg: "2rem" }}
            lineHeight={"120%"}
            fontFamily={"inter"}
            textAlign={"center"}
            as={"h1"}
          >
            Intersex Violations and Cases
          </Text>
        </Flex>
      </Box>
      <Box
        maxW="1560px"
        mx="auto"
        px={{ base: "1rem", lg: "50px", xl: "100px" }}
        py={{ base: "2rem", lg: "3rem" }}
        w="100%"
      >
        <Heading
          as="h2"
          size="lg"
          fontFamily={"inter"}
          mb={4}
          mt={2}
          color="#1d2130"
        >
          Thank you for taking this step to share your story with us.
        </Heading>
        
        <Text mb={4} fontSize={{ base: "15px", md: "1rem" }} color="gray.700">
          We know that taking the step to share takes a lot of courage.
        </Text>

        <Text mb={8} fontSize={{ base: "15px", md: "1rem" }} color="gray.700" fontWeight={600}>
          Know that whatever you share with us is safe and secure, and the information shared
          and data collected is confidential and protected under Intersex Nigeria's safeguarding
          and data policies.
        </Text>

        {/* Inline Report Rights Violation Form */}
        <Box mt={6}>
          <ReportRightsViolationForm />
        </Box>
      </Box>
    </Flex>
  );
};

export default ReportRightsViolation;
