import { Circle, Flex, Icon, Text } from "@chakra-ui/react";
import { why } from "./item";
import { SiTarget } from "react-icons/si";
import { useTranslation } from "react-i18next";

const WhyIntersectionality = () => {
  const { t } = useTranslation();

  return (
    <Flex
      flexDir={"column"}
      px={{ base: "1rem", lg: "50px", xl: "100px" }}
      py={{ base: "2rem", lg: "3rem" }}
      fontFamily={"nunito"}
      pos={"relative"}
      maxW={""}
    >
      <Text
        as={"h2"}
        fontWeight={700}
        color={"#1d2130"}
        w={"100%"}
        fontSize={{ base: "20px", md: "40px" }}
        pb={{ base: "1.5rem", lg: "2rem" }}
        lineHeight={"120%"}
        fontFamily={"inter"}
        maxW={"1560px"}
        mx={"auto"}
      >
        {t("intersectionality.whyTitle", "Why Intersectionality")}
      </Text>
      <Flex
        flexWrap={"wrap"}
        display={{ base: "flex", md: "grid" }}
        gridTemplateColumns={{ md: "1fr 1fr", xl: "1fr  1fr" }}
        justifyContent={"center"}
        rowGap={{ base: "24px", lg: "32px" }}
        columnGap={{ base: "24px", lg: "32px" }}
        maxW={"1560px"}
        mx={"auto"}
      >
        {why.map((item, idx) => {
          const { text, title, icon } = item;
          const translatedTitle = t(`intersectionality.why${idx + 1}Title`, title);
          const translatedText = t(`intersectionality.why${idx + 1}Text`, text);

          return (
            <Flex
              key={idx}
              flexDir={"column"}
              gap={"8px"}
              w={"100%"}
              bg={"white"}
              cursor={"pointer"}
              p={{ base: "14px", md: "24px" }}
              borderRadius={"16px"}
              border={`1px solid #64117e`}
              _hover={{ transform: "scale(1.02)" }}
              transition="transform 0.2s ease-in-out"
            >
              <Flex
                gap={{ base: "10px", md: "10px", xl: "10px" }}
                alignItems={"center"}
              >
                {icon && (
                  <Circle
                    justifyContent={"center"}
                    alignItems={"center"}
                    w={{ base: "40px", md: "64px" }}
                    h={{ base: "40px", md: "64px" }}
                    bg={"#64117E10"}
                  >
                    <Icon
                      as={icon}
                      w={"20px"}
                      h={"20px"}
                      color={"#64117e"}
                    />
                  </Circle>
                )}

                <Text
                  fontSize={{ base: "16px", md: "18px" }}
                  fontWeight={600}
                  fontFamily={"inter"}
                  as={"h5"}
                >
                  {translatedTitle}
                </Text>
              </Flex>
              <Text
                fontSize={{ base: "14px", xl: "16px" }}
                textAlign={"justify"}
              >
                {translatedText}
              </Text>
            </Flex>
          );
        })}
      </Flex>
      <Flex
        flexDir={"column"}
        gap={"8px"}
        maxW={"1560px"}
        mx={"auto"}
        w={"100%"}
        bg={"white"}
        p={{ base: "14px", md: "24px" }}
        borderRadius={"16px"}
        borderLeft={`4px solid `}
        border={`1px solid #64117e `}
        cursor={"pointer"}
        _hover={{ transform: "scale(1.02)" }}
        transition="transform 0.2s ease-in-out"
        mt={{ base: "24px", lg: "32px" }}
      >
        <Flex
          gap={{ base: "10px", md: "10px", xl: "10px" }}
          alignItems={"center"}
        >
          <Circle
            justifyContent={"center"}
            alignItems={"center"}
            w={{ base: "40px", md: "64px" }}
            h={{ base: "40px", md: "64px" }}
            bg={"#64117E10"}
          >
            <Icon
              as={SiTarget}
              w={"20px"}
              h={"20px"}
              color={"#64117e"}
            />
          </Circle>

          <Text
            fontSize={{ base: "16px", md: "18px" }}
            fontWeight={600}
            fontFamily={"inter"}
            as={"h5"}
          >
            {t("intersectionality.why5Title", "Promoting Holistic Advocacy")}
          </Text>
        </Flex>

        <Text
          fontSize={{ base: "14px", xl: "16px" }}
          textAlign={"justify"}
        >
          {t(
            "intersectionality.why5Text",
            "By embracing intersectionality, we amplify the voices of those who are often the most marginalized. This includes individuals who might experience what we know as double or triple jeopardy , which broadens our perspective, allowing us to see the full picture of individual's lived experiences. This holistic understanding enables us to develop more effective advocacy strategies that address the interconnected issues affecting our community. It ensures that our efforts are not only about advancing rights but also about promoting overall wellbeing and social-justice for all persons with intersecting identities and experiences. These individuals experience multiple forms of discrimination due to their intersecting identities. Our work aims to elevate these voices, ensuring that they are not only heard but also actively involved in shaping the solutions that impact their lives."
          )}
        </Text>
      </Flex>
    </Flex>
  );
};

export default WhyIntersectionality;
