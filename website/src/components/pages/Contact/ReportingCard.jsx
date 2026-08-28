/* eslint-disable react/prop-types */

import { Box, Flex, Heading, Text, Link } from "@chakra-ui/react";

export function ReportingCard({
  icon,
  title,
  description,
  email,
  subtitle,
  color,
  form,
}) {
  return (
    <Box
      bg="white"
      px={{ base: 4, md: 6 }}
      py={6}
      rounded="lg"
      shadow="md"
      borderWidth="2px"
      w={"100%"}
      transition="all 0.2s"
      _hover={{ shadow: "lg" }}
      borderColor={color}
    >
      <Flex align="center" gap={3} mb={4} color={color}>
        {icon}
        <Heading
          as="h3"
          fontSize={{ base: "1.1rem", md: "1.3rem" }}
          fontFamily={"inter"}
          fontWeight={600}
          color="blackish"
        >
          {title}
        </Heading>
      </Flex>

      <Text color="#1d2130" mb={2}>
        {description}
      </Text>

      {form && (
        <Link
          href={form}
          display="inline-block"
          target="blank"
          px={4}
          py={2}
          rounded="md"
          color="white"
          bg={"purple"}
          _hover={{
            bg: "orange",
            textDecoration: "none",
          }}
          mt={2}
        >
          Submit report
        </Link>
      )}
      {email && (
        <Link
          href={`mailto:${email}`}
          display="inline-block"
          px={4}
          py={2}
          rounded="md"
          color="white"
          bg={color}
          mt={2}
          _hover={{ opacity: 0.9, textDecoration: "none" }}
        >
          {email}
        </Link>
      )}

      {subtitle && (
        <Text
          fontSize="sm"
          color="gray.600"
          mt={3}
          fontStyle="italic"
        >
          {subtitle}
        </Text>
      )}
    </Box>
  );
}
