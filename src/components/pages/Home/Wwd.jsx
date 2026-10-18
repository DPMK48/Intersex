import {
  Box,
  Circle,
  Flex,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { whatWeDoItem } from "./items";
import { useTranslation } from "react-i18next";

const wwdKeys = [
  { titleKey: "whatWeDo.raiseAwareness", textKey: "whatWeDo.raiseAwarenessText" },
  { titleKey: "whatWeDo.trainingHealthcare", textKey: "whatWeDo.trainingHealthcareText" },
  { titleKey: "whatWeDo.advocacyLegal", textKey: "whatWeDo.advocacyLegalText" },
  { titleKey: "whatWeDo.psychosocialSupport", textKey: "whatWeDo.psychosocialSupportText" },
  { titleKey: "whatWeDo.medicalEthics", textKey: "whatWeDo.medicalEthicsText" },
  { titleKey: "whatWeDo.empowerment", textKey: "whatWeDo.empowermentText" },
];

const Wwd = () => {
  const { t } = useTranslation();
  return (
    <Flex
      flexDir={"column"}
      bg={"#fffbef"}
      px={{ base: "1rem", lg: "50px", xl: "100px" }}
      py={{ base: "2rem", lg: "3rem" }}
      fontFamily={"nunito"}
      pos={"relative"}
    >
      <Flex gap={"10px"} alignItems={"center"}>
        <Box w={"50px"} h={"4px"} bg={"purple"}></Box>
        <Text
          fontSize={{ base: "12px", md: "16px" }}
          fontWeight="bold"
          textTransform={"uppercase"}
        >
          {t("home.whatWeDo")}
        </Text>
      </Flex>
      <Text
        as={"h2"}
        fontWeight={700}
        color={"#1d2130"}
        // maxW={"640px"}
        w={"100%"}
        fontSize={{ base: "22px", md: "40px" }}
        pb={{ base: "1.5rem", lg: "2rem" }}
        lineHeight={"120%"}
        fontFamily={"inter"}
      >
        {t("home.whatWeDoTitle")}
      </Text>
      <Flex
        // maxW={{ xl: "1280px" }}
        flexWrap={"wrap"}
        display={{ base: "flex", md: "grid" }}
        gridTemplateColumns={{ md: "1fr 1fr", xl: "1fr 1fr 1fr" }}
        justifyContent={"center"}
        /* ml={{base:'', lg:'3rem'}} */
        rowGap={{ base: "30px", md: "24px", lg: "32px" }}
        columnGap={{ base: "30px", md: "24px", lg: "32px" }}
      >
        {whatWeDoItem.map((item, idx) => {
          const { img, icon } = item;
          const keys = wwdKeys[idx];
          const title = keys ? t(keys.titleKey) : item.title;
          const text = keys ? t(keys.textKey) : item.text;
          const borderColor = idx % 3 === 1 ? "#f5ac07" : "#64117e";
          const bg = idx % 3 === 1 ? "#F5AC0710" : "#64117E10";
          const color = idx % 3 === 1 ? "#f5ac07" : "#64117e";
          return (
            <Flex
              key={idx}
              flexDir={"column"}
              gap={"8px"}
              /* mx={"auto"} */
              maxW={{ base: "100%", md: "500px", lg: "484px" }}
              w={"100%"}
              bg={"white"}
              p={{ base: "14px", md: "32px" }}
              borderRadius={"16px"}
              borderLeft={`4px solid ${borderColor}`}
            >
              <Flex
                gap={{ base: "10px", md: "10px", xl: "10px" }}
                alignItems={"center"}
              >
                {img && (
                  <Circle
                    justifyContent={"center"}
                    alignItems={"center"}
                    w={{ base: "48px", md: "64px" }}
                    h={{ base: "48px", md: "64px" }}
                    bg={bg}
                  >
                    <Image
                      src={img}
                      alt={title}
                      w={"24px"}
                      h={"24px"}
                      loading="lazy"
                    />
                  </Circle>
                )}
                {icon && (
                  <Circle
                    justifyContent={"center"}
                    alignItems={"center"}
                    w={"64px"}
                    h={"64px"}
                    bg={bg}
                  >
                    <Icon
                      as={icon}
                      w={"20px"}
                      h={"20px"}
                      color={color}
                    />
                  </Circle>
                )}

                <Text
                  fontSize={{ base: "16px", md: "18px" }}
                  fontWeight={600}
                  fontFamily={"inter"}
                  as={"h5"}
                >
                  {title}
                </Text>
              </Flex>
              <Text
                fontSize={{ base: "14px", xl: "16px" }}
                textAlign={"justify"}
              >
                {text}
              </Text>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Wwd;
