import {
  Box,
  Flex,
  Icon,
  Image,
  // keyframes,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { prioritiesItem } from "./items";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
// import React from 'react'

const priorityKeys = [
  { titleKey: "priorities.movementBuilding", textKey: "priorities.movementBuildingText" },
  { titleKey: "priorities.researchAdvocacy", textKey: "priorities.researchAdvocacyText" },
  { titleKey: "priorities.publicEngagements", textKey: "priorities.publicEngagementsText" },
  { titleKey: "priorities.capacityBuilding", textKey: "priorities.capacityBuildingText" },
  { titleKey: "priorities.srhr", textKey: "priorities.srhrText" },
];

const Priorities2 = () => {
  const { t } = useTranslation();
  // const pulseAnimation = `
  //   0% { transform: scale(1); opacity: 1; }
  //   50% { transform: scale(1.05); opacity: 0.7; }
  //   100% { transform: scale(1); opacity: 1; }
  // `;

  const [isLargerThan991] = useMediaQuery("(min-width: 992px)");

  const images = [
    "https://res.cloudinary.com/dcjebpvia/image/upload/f_auto/v1751212462/intersex-ng-images/nysc/nysc12.webp",
    "https://res.cloudinary.com/dcjebpvia/image/upload/f_auto/v1751212307/intersex-ng-images/image1.png",
    "https://res.cloudinary.com/dcjebpvia/image/upload/f_auto/v1751211791/intersex-ng-images/about1.jpg",
  ];

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Flex
      // bg={"#881e80"}
      bgGradient={"linear(to-r, #881e80, #64117E)"}
      px={{ base: "1rem", lg: "50px", xl: "100px" }}
      py={{ base: "2rem", lg: "3rem" }}
      fontFamily={"nunito"}
      flexDir={"column"}
      overflowX={"hidden"}
    >
      <Text
        as={"h2"}
        fontWeight={700}
        color={"#fff"}
        // maxW={"640px"}
        w={"100%"}
        fontSize={{ base: "22px", md: "40px" }}
        pb={{ base: "1.5rem", lg: "2rem" }}
        lineHeight={"120%"}
        fontFamily={"inter"}
      >
        {t("home.prioritiesTitle")}{" "}
      </Text>
      <Flex
        gap={"64px"}
        justifyContent={"center"}
        maxW={"1280px"}
        flexDir={{ base: "column", lg: "row" }}
        w={"100%"}
      >
        <Flex
          alignItems={"center"}
          w={{ base: "100%", lg: "50%" }}
          color={"#fff"}
          gap={{ base: "1.5rem", lg: "" }}
          flexDir={{ base: "column", lg: "row" }}
        >
          {!isLargerThan991 && (
            <Box
              // bg="white"
              // borderRadius="lg"
              // boxShadow="lg"
              overflow="hidden"
              w={{ base: "100%", lg: "50%" }}
            >
              <Slider {...settings}>
                {images.map((src, index) => (
                  <div key={index}>
                    <Image
                      src={src}
                      alt="Intersex Nigeria's priorities"
                      h={{ base: "300px", md: "500px" }}
                      w={"100%"}
                      objectFit={"cover"}
                      objectPosition={"center 40%"}
                    />
                  </div>
                ))}
              </Slider>
            </Box>
          )}

          <Flex flexDir={"column"}>
            {prioritiesItem.map((item, idx) => {
              const keys = priorityKeys[idx];
              const title = keys ? t(keys.titleKey) : item.title;
              const text = keys ? t(keys.textKey) : item.text;
              return (
                <Flex
                  key={idx}
                  gap={"12px"}
                  alignItems={"start"}
                  w={"100%"}
                  maxW={{ base: "100%", lg: "564px" }}
                >
                  <Icon as={FaStar} color={"orange"} />
                  <Flex flexDir={"column"}>
                    <Text
                      as={"h3"}
                      fontSize={"16px"}
                      fontWeight={700}
                      // lineHeight={"20px"}
                      color={"#fff"}
                      textAlign={{ base: "left", lg: "justify" }}
                      pb={"4px"}
                      fontFamily={"inter"}
                      // w={"40%"}
                    >
                      {title}
                    </Text>
                    <Text
                      fontSize={"14px"}
                      // lineHeight={"20px"}
                      textAlign={"justify"}
                      pb={"1.2rem"}
                      // w={"40%"}
                    >
                      {text}
                    </Text>
                  </Flex>
                </Flex>
              );
            })}
          </Flex>
        </Flex>

        {isLargerThan991 && (
          <Box
            // bg="white"
            borderRadius="lg"
            // boxShadow="lg"
            overflow="hidden"
            w={{ base: "100%", lg: "50%" }}
          >
            <Slider {...settings}>
              {images.map((src, index) => (
                <div key={index}>
                  <Image
                    src={src}
                    alt="Intersex Nigeria's priorities"
                    h={"550px"}
                    w={"100%"}
                    objectFit={"cover"}
                    objectPosition={"center 40%"}
                  />
                </div>
              ))}
            </Slider>
          </Box>
        )}

        {/* <Box
          pos={"relative"}
          w={{ lg: "50%", xl: "37%" }}
          h={"545px"}
          display={{ base: "none", lg: "flex" }}
          _before={{
            lg: {
              border: "3px solid orange",
              // borderBottom: "none",
              position: "absolute",
              top: "-10",
              left: { lg: "10%", xl: "20" },
              width: "100%",
              borderTopRadius: "50px",
              h: "459px",
              // bg: "orange",
              content: '""',
              zIndex: 1,
              animation: `${pulseAnimation} 2s infinite ease-in-out`,
            },
          }}
        >
          <Image
            w={"100%"}
            h={"100%"}
            pos={"relative"}
            src={"https://res.cloudinary.com/dcjebpvia/image/upload/f_auto/v1751212530/intersex-ng-images/nysc.jpg"}
            alt="Intersex Nigeria's priorities"

            borderTopRadius={"50px"}
            objectFit={"cover"}
            zIndex={2}
          />
        </Box> */}
      </Flex>
    </Flex>
  );
};

export default Priorities2;
