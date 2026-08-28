import { Box, Text, Flex, Grid, Link } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import { Helmet } from "react-helmet-async";

const AnimationVideos = () => {
  return (
    <>
      <Helmet>
        <title>Animation Videos - Intersex Nigeria</title>
        <meta
          name="description"
          content="Medical practices and experiences surrounding intersex births in Nigerian hospitals, Animation videos."
        />
      </Helmet>
      <Flex
        flexDir={"column"}
        fontFamily={"nunito"}
        boxShadow={"inner"}
        w={"100%"}
        pt={{ base: "60px", md: "0px" }}
        h={"100%"}
        px={{ base: "1rem", lg: "50px", xl: "100px" }}
        py={{ base: "2rem", lg: "3rem" }}
        bg={"#fefefe"}
        alignItems={"flex-start"}
      >
        <Text
          fontWeight={600}
          fontSize={{
            base: "1.3rem",
            lg: "1.5rem",
            xl: "24px",
          }}
          pt={{ base: "1rem" }}
          py={{ base: "1.5rem", lg: "2rem" }}
          lineHeight={"120%"}
          fontFamily={"inter"}
          textAlign={"left"}
          mb={"2rem"}
          mt={"2rem"}
        >
          Medical practices and experiences surrounding intersex births in Nigerian hospitals, Animation videos.
        </Text>

        <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={6} w="100%" mb={"2rem"}>
          <Box>
            <Box
              aspectRatio={16 / 9}
              w="100%"
              allowFullScreen
            >
              <ReactPlayer
                url="https://youtu.be/7EV-2A6vPTM"
                controls
                width="100%"
                height="100%"
                config={{
                  youtube: {
                    playerVars: {
                      fs: 1,
                      modestbranding: 0,
                      rel: 0,
                      origin: window.location.origin,
                    },
                  },
                }}
              />
            </Box>
            <Text
              fontSize={{ base: "14px", lg: "16px" }}
              fontWeight={600}
              textAlign={"center"}
              mt={"0.5rem"}
            >
              Animation video - Pidgin English
            </Text>
          </Box>
          <Box>
            <Box
              aspectRatio={16 / 9}
              w="100%"
              allowFullScreen
            >
              <ReactPlayer
                url="https://youtu.be/ILHQfD3T8GI"
                controls
                width="100%"
                height="100%"
                config={{
                  youtube: {
                    playerVars: {
                      fs: 1,
                      modestbranding: 0,
                      rel: 0,
                      origin: window.location.origin,
                    },
                  },
                }}
              />
            </Box>
            <Text
              fontSize={{ base: "14px", lg: "16px" }}
              fontWeight={600}
              textAlign={"center"}
              mt={"0.5rem"}
            >
              Animation video - Igbo Language
            </Text>
          </Box>
          <Box>
            <Box
              aspectRatio={16 / 9}
              w="100%"
              allowFullScreen
            >
              <ReactPlayer
                url="https://youtu.be/W8qyQMkGVGU"
                controls
                width="100%"
                height="100%"
                config={{
                  youtube: {
                    playerVars: {
                      fs: 1,
                      modestbranding: 0,
                      rel: 0,
                      origin: window.location.origin,
                    },
                  },
                }}
              />
            </Box>
            <Text
              fontSize={{ base: "14px", lg: "16px" }}
              fontWeight={600}
              textAlign={"center"}
              mt={"0.5rem"}
            >
              Animation video - Hausa Language
            </Text>
          </Box>
          <Box>
            <Box
              aspectRatio={16 / 9}
              w="100%"
              allowFullScreen
            >
              <ReactPlayer
                url="https://youtu.be/R2zP51qPA00"
                controls
                width="100%"
                height="100%"
                config={{
                  youtube: {
                    playerVars: {
                      fs: 1,
                      modestbranding: 0,
                      rel: 0,
                      origin: window.location.origin,
                    },
                  },
                }}
              />
            </Box>
            <Text
              fontSize={{ base: "14px", lg: "16px" }}
              fontWeight={600}
              textAlign={"center"}
              mt={"0.5rem"}
            >
              Animation video - Yoruba Language
            </Text>
          </Box>
          <Box>
            <Box
              aspectRatio={16 / 9}
              w="100%"
              allowFullScreen
            >
              <ReactPlayer
                url="https://youtu.be/xG473UpdVGU"
                controls
                width="100%"
                height="100%"
                config={{
                  youtube: {
                    playerVars: {
                      fs: 1,
                      modestbranding: 0,
                      rel: 0,
                      origin: window.location.origin,
                    },
                  },
                }}
              />
            </Box>
            <Text
              fontSize={{ base: "14px", lg: "16px" }}
              fontWeight={600}
              textAlign={"center"}
              mt={"0.5rem"}
            >
              Animation video - English Language
            </Text>
          </Box>
          <Box>
            <Box
              aspectRatio={16 / 9}
              w="100%"
              allowFullScreen
            >
              <ReactPlayer
                url="https://youtu.be/AxK_AVBTCF4"
                controls
                width="100%"
                height="100%"
                config={{
                  youtube: {
                    playerVars: {
                      fs: 1,
                      modestbranding: 0,
                      rel: 0,
                      origin: window.location.origin,
                    },
                  },
                }}
              />
            </Box>
            <Text
              fontSize={{ base: "14px", lg: "16px" }}
              fontWeight={600}
              textAlign={"center"}
              mt={"0.5rem"}
            >
              Animation video - French Language
            </Text>
          </Box>
        </Grid>
      </Flex>
    </>
  );
};

export default AnimationVideos;