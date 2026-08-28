import {
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Resources", href: "#resources" },
];

// eslint-disable-next-line react/prop-types
export default function Navbar({ color }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Box
      px={{ base: "1rem", lg: "50px", xl: "100px" }}
      py={4}
      fontFamily={"inter"}
      position="fixed"
      top="0"
      w="100%"
      left={0}
      right={0}
      zIndex="1000"
      transition="all 0.1s ease-in-out"
      bg={scrolled ? "#f9f4f9" : "transparent"}
      boxShadow={scrolled ? "md" : "none"}
    >
      <Flex
        align="center"
        justify="space-between"
        maxW={"1560px"}
        mx={"auto"}
      >
        {/* Logo */}
        <a href="/intersectional-knowledge">
          <Image
            src="/images/intersection-logo.png"
            alt="Logo"
            h={{ base: "40px", md: "60px" }}
          />
        </a>

        {/* Desktop Nav */}
        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              fontSize="16px"
              color={color ?? scrolled ? "purple" : "white"}
              fontWeight={600}
              _hover={{ textDecoration: "none", color: "red.500" }}
            >
              {link.label}
            </Link>
          ))}
        </HStack>

        {/* Mobile Menu Button */}
        <Icon
          as="button"
          bg={"transparent"}
          color={color ?? scrolled ? "purple" : "white"}
          fontSize="1.5rem"
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        >
          {isOpen ? <FaTimes /> : <GiHamburgerMenu />}
        </Icon>
      </Flex>

      {/* Mobile Menu */}
      {isOpen && (
        <Box
          mt={4}
          pb={4}
          display={"flex"}
          bg={"#f9f4f9"}
          p={4}
          borderRadius="8px"
          boxShadow="md"
          justifyContent={"center"}
        >
          <Stack spacing={4}>
            s
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                fontSize="16px"
                color="purple"
                fontWeight={600}
                onClick={onClose}
                textAlign={"center"}
              >
                {link.label}
              </Link>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}
