/* eslint-disable react/prop-types */
import { Box, Flex, Heading } from "@chakra-ui/react";

export function SafeguardingSection({
  title,
  icon,
  accentColor,
  children,
}) {
  return (
    <Box as="section" mb={12}>
      <Flex
        align="center"
        gap={{ base: 2, md: 3 }}
        mb={{ base: 4, md: 6 }}
      >
        <Box color={accentColor}>{icon}</Box>
        <Heading
          as="h2"
          fontSize={{ base: "1.2rem", md: "1.8rem" }}
          fontFamily={"inter"}
          color="blackish"
        >
          {title}
        </Heading>
      </Flex>

      <Box
        bg="white"
        px={{ base: 3, md: 6 }}
        py={6}
        rounded="lg"
        shadow="sm"
        borderWidth="0.5px"
        borderColor="gray.100"
        boxShadow={"md"}
        color="#1d2130"
      >
        {children}
      </Box>
    </Box>
  );
}
