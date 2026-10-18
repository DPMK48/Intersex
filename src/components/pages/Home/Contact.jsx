import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import Button from "../../../ui/Button";
import { topNavItems } from "../../Nav/items";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Flex
      // flexDir={"column"}
      px={{ base: "1rem", lg: "50px", xl: "100px" }}
      py={{ base: "2rem", lg: "3rem" }}
      bg={"#fefefe"}
      fontFamily={"nunito"}
      w={"100%"}
    >
      <Flex w={"100%"}>
        <div className="contact-container">
          <div className="contact-text">
            <Flex gap={"10px"} alignItems={"center"}>
              <Box w={"50px"} h={"4px"} bg={"purple"}></Box>
              <Text
                fontSize={{ base: "12px", md: "16px" }}
                fontWeight="bold"
                textTransform={"uppercase"}
              >
                {t("home.getInTouch", "get in touch")}
              </Text>
            </Flex>
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              w={"100%"}
            >
              <Text
                color={"#1d2130"}
                fontSize={{ base: "22px", md: "40px" }}
                pb={{ base: "", lg: "2rem" }}
                lineHeight={{ md: "120%" }}
                fontWeight={700}
                fontFamily={"inter"}
                as={"h2"}
              >
                {t("home.sendUsMessage", "Send us a message")}
              </Text>
              <Link to={"/contact"}>
                <Button
                  text={t("common.contactUs", "Contact us")}
                  fontSize={"16px"}
                  bg={"#F2C94C"}
                  px={"32px"}
                  py={"16px"}
                  maxW={"200px"}
                  display={{ base: "none", lg: "flex" }}
                  textTransform={""}
                  hoverBg={"purple"}
                  hoverColor={"white"}
                  color={"black"}
                />
              </Link>
            </Flex>
          </div>
          <Text
            fontSize={{ base: "16px", md: "18px", lg: "21px" }}
            lineHeight={"30px"}
            color={"#1d2130"}
            textAlign={"justify"}
            pb={"1rem"}
            w={{ base: "100%", lg: "60%" }}
            px={{ lg: "4rem" }}
          >
            {t(
              "home.contactText",
              "Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details."
            )}
          </Text>
          <Stack
            direction={"column"}
            spacing={6}
            pt={"1rem"}
            px={{ base: "", lg: "4rem" }}
          >
            {topNavItems.map((item, idx) => {
              const { icon, text, key } = item;
              return (
                <Flex key={idx} alignItems={"center"} gap={"10px"}>
                  <Icon
                    as={icon}
                    bg={"orange"}
                    fontSize={"30px"}
                    color={"#1d2130"}
                    p={"8px"}
                    borderRadius={"1px"}
                  />
                  <Text
                    color={"#1d2130"}
                    fontSize={{ base: "14px", md: "18px" }}
                  >
                    {key ? t(key) : text}
                  </Text>
                </Flex>
              );
            })}
          </Stack>
          <Flex justifyContent={"center"}>
            <Link to={"/contact"}>
              <Button
                text={t("common.contactUs", "Contact us")}
                fontSize={"16px"}
                mt={"1rem"}
                bg={"#F2C94C"}
                px={"32px"}
                py={"16px"}
                maxW={"200px"}
                display={{ base: "flex", lg: "none" }}
                textTransform={""}
                hoverBg={"purple"}
                hoverColor={"white"}
                color={"black"}
              />
            </Link>
          </Flex>
        </div>
      </Flex>
    </Flex>
  );
};

export default Contact;
