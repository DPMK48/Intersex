import {
  Box,
  Flex,
  Input,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
// import { useSendPulseToken } from "../../../utils/useSendPulseToken";
import { useState } from "react";
import Button from "../../../ui/Button";
import { useTranslation } from "react-i18next";

const NewsletterSignup = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://intersex-ng-server-jich.onrender.com/api/subscribe",
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
          description: t("footer.subSuccess", "Thank you for subscribing!"),
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      } else {
        toast({
          description: t(
            "footer.subError",
            "Failed to subscribe, please try again later"
          ),
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
    <Flex
      flexDir={"column"}
      bg={"#f9f4f9"}
      px={{ base: "1rem", lg: "50px", xl: "100px" }}
      py={{ base: "2rem", lg: "3rem" }}
      fontFamily={"nunito"}
      pos={"relative"}
      w={"100%"}
    >
      <Text
        fontWeight={700}
        color={"#1d2130"}
        // maxW={"640px"}
        // w={"100%"}
        fontSize={{ base: "22px", md: "40px" }}
        pb={{ base: "1.5rem", lg: "2rem" }}
        lineHeight={"120%"}
        fontFamily={"inter"}
        as={"h5"}
      >
        {t("home.mailingListTitle", "Join our mailing list")}
      </Text>
      <Flex
        alignItems="center"
        gap={{ base: "", md: "2rem" }}
        justifyContent={{ base: "space-between", md: "" }}
        direction={{ base: "column", lg: "row" }}
        w={"100%"}
      >
        <Box mb={{ base: 5, md: 0 }} w={{ base: "100%", lg: "50%" }}>
          <Text
            fontSize={{ base: "16px", md: "18px", lg: "18px" }}
            lineHeight={"30px"}
            color={"#1d2130"}
            textAlign={"justify"}
            pb={"1rem"}
            // m={'auto'}
            w={{ base: "100%", md: "80%", lg: "100%" }}
            pl={{ lg: "4rem" }}
            pr={{ lg: "2rem" }}
          >
            {t(
              "home.mailingListText",
              "Be a voice for change. Sign up to receive the latest news, programme alerts, and stories from our advocacy efforts."
            )}
          </Text>
        </Box>
        <Flex
          w={{ base: "80%", md: "50%" }}
          gap={{ base: "1rem", lg: 0 }}
          as={"form"}
          onSubmit={handleSubmit}
          align="center"
          flexDir={{ base: "column", lg: "row" }}
        >
          <Input
            type="email"
            placeholder={t("home.emailPlaceholder", "Enter your email address")}
            size="md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            borderColor="gray.300"
            borderRadius="md"
            mr={3}
            _placeholder={{ color: "gray.700" }}
            _focus={{
              borderColor: "purple.500",
              boxShadow: "0 0 0 1px #9F7AEA",
            }}
          />
          <Button
            text={
              isSubmitting ? <Spinner color="white" /> : t("common.subscribe", "Subscribe")
            }
            disabled={email === "" || isSubmitting}
            type={"submit"}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NewsletterSignup;
