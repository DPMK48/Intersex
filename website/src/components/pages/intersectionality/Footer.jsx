import {
  Box,
  Stack,
  HStack,
  VStack,
  Text,
  Image,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg="linear-gradient(180deg, #0b163a 0%, #060d25 100%)"
      color="white"
      pt={16}
      m={"auto"}
    >
      {/* Logo */}
      <VStack spacing={6}>
        <Image
          src="/images/intersection-logo.png"
          alt="Logo"
          h="60px"
        />

        {/* Nav Links */}
        <HStack spacing={6} flexWrap="wrap" justify="center">
          {[
            { label: "Home", href: "#top" },
            { label: "About Us", href: "#about" },
            { label: "Resources", href: "#resources" },
            {
              label: "Intersex NG",
              href: "/",
            },
          ].map((item) => (
            <Text
              as={"a"}
              key={item.href}
              href={item.href}
              fontSize="16px"
              fontWeight="medium"
              color={"#f36f63"}
              fontFamily={"inter"}
              _hover={{ textDecoration: "none", color: "white" }}
            >
              {item.label}
            </Text>
          ))}
        </HStack>

        {/* Social Icons */}
        {/* <HStack spacing={4}>
          {[
            { icon: FaFacebookF },
            { icon: FaTwitter },
            { icon: FaInstagram },
          ].map((social, idx) => (
            <Flex
              key={idx}
              w="36px"
              h="36px"
              bg="red.400"
              align="center"
              justify="center"
              borderRadius="md"
              cursor="pointer"
              _hover={{ bg: "red.500" }}
            >
              <Icon as={social.icon} />
            </Flex>
          ))}
        </HStack> */}

        {/* Contact Info */}
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={6}
          pt={2}
          fontSize="sm"
          opacity={0.9}
          fontFamily={"nunito"}
        >
          <Text>+234 912 905 7794</Text>
          <Text>info@intersexnigeria.org</Text>
          <Text>Lagos and Abuja</Text>
        </Stack>
      </VStack>

      {/* Divider */}
      <Box
        mt={12}
        borderTop="1px solid"
        borderColor="whiteAlpha.200"
      />

      {/* Copyright */}
      <Text
        textAlign="center"
        fontFamily={"inter"}
        fontSize="xs"
        py={6}
        opacity={0.6}
      >
        Copyright © 2025 Intersectional Knowledge. All rights
        reserved.
      </Text>
    </Box>
  );
}
