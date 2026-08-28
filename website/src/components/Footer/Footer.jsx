/* eslint-disable react/prop-types */
import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image,
  Divider,
  Icon,
  Flex,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { BiMailSend } from "react-icons/bi";
import { footerItems, socials } from "./footerItems";
import { topNavItems } from "../Nav/items";
import { useState } from "react";
import { Link } from "react-router-dom";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={"orange"}
      color={"#fefefe"}
      rounded={"full"}
      w={10}
      fontSize={"1.5rem"}
      h={10}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target="blank"
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text
      fontWeight={"500"}
      fontFamily={"nunito"}
      fontSize={"lg"}
      mb={2}
    >
      {children}
    </Text>
  );
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://intersex-ng-server.onrender.com/api/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const result = await response.json();

      if (response.ok && result.result) {
        setEmail("");
        toast({
          description: "Thank you for subscribing!",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      } else {
        toast({
          description: "Failed to subscribe, please try again later",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box bg={"#000000d4"} w={'100%'} color={"white"} fontFamily={"nunito"}>
      <Container as={Stack} maxW={"7xl"} py={10}>
        <SimpleGrid
          templateColumns={{
            sm: "1fr 1fr",
            lg: "2fr 1fr 1fr 1fr 2fr",
          }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Image
                src="https://res.cloudinary.com/dcjebpvia/image/upload/f_auto/v1751212316/intersex-ng-images/logo.webp"
                alt="Intersex Nigeria logo"
                w={{ base: "100px", md: "150px" }}
                h={"auto"}
              />
            </Box>
            <Stack
              direction={"row"}
              spacing={{ base: 3, md: 6 }}
              pt={"1rem"}
            >
              {socials.map((item, idx) => {
                const { icon, link } = item;
                return (
                  <SocialButton
                    label={"Twitter"}
                    href={link}
                    key={idx}
                  >
                    <Icon as={icon} />
                  </SocialButton>
                );
              })}
            </Stack>
          </Stack>
          {footerItems.map((item, idx) => {
            const { label, subLabels } = item;
            return (
              <Stack align={"flex-start"} key={idx}>
                <Text
                  as={"h5"}
                  fontWeight={"600"}
                  fontSize={"1.3rem"}
                  textTransform={"uppercase"}
                  fontFamily={"inter"}

                  // color={"#fff"}
                >
                  {label}
                </Text>
                {subLabels.map((item, idx) => {
                  const { name, url } = item;
                  return (
                    <Link
                      to={url}
                      key={idx}
                      target={
                        name === "volunteer with us" ? "_blank" : ""
                      }
                      rel="noreferrer"
                    >
                      <Box
                        color={"#fefefed0"}
                        key={idx}
                        textTransform={"capitalize"}
                        _hover={{ color: "orange" }}
                      >
                        {name}
                      </Box>
                    </Link>
                  );
                })}
              </Stack>
            );
          })}
          <Stack align={"flex-start"}>
            <ListHeader fontFamily={"inter"}>
              Join our mailing list
            </ListHeader>
            <Text color={"#fefefed0"}>
              Be a voice for change. Sign up to receive the latest
              news, programme alerts, and stories from our advocacy
              efforts.{" "}
            </Text>
            <Stack
              direction={"row"}
              w={"100%"}
              as={"form"}
              onSubmit={handleSubmit}
            >
              <Input
                placeholder={"Your email address"}
                bg={"#fefefe"}
                color={"black"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                border={0}
                _focus={{
                  bg: "#fefefe",
                }}
              />
              <IconButton
                bg={"orange"}
                color={"white"}
                _hover={{
                  bg: "orange",
                }}
                type="submit"
                isDisabled={isSubmitting || email === ""}
                aria-label="Subscribe"
                icon={
                  isSubmitting ? (
                    <Spinner color="white" />
                  ) : (
                    <BiMailSend />
                  )
                }
              />
            </Stack>
            <Stack direction={"column"} spacing={6} pt={"1rem"}>
              {topNavItems.map((item, idx) => {
                const { icon, text } = item;
                return (
                  <Flex key={idx} alignItems={"center"} gap={"10px"}>
                    <Icon
                      as={icon}
                      bg={"orange"}
                      fontSize={"30px"}
                      color={"#fefefe"}
                      p={"8px"}
                      borderRadius={"1px"}
                    />
                    <Text color={"#fefefed0"} fontSize={"14px"}>
                      {text}
                    </Text>
                  </Flex>
                );
              })}
            </Stack>
          </Stack>
        </SimpleGrid>
        <Divider orientation="horizontal" w={"100%"} h={"3rem"} />
        <Text fontSize={"sm"} pt={"1rem"} textAlign={"center"}>
          Copyright © {currentYear} Intersex NG. All rights reserved
        </Text>
      </Container>
    </Box>
  );
}
