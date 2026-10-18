import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useParams, Link } from "react-router-dom";
import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Error from "../ErrorPage/Error";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { advocacyProjects } from "../Home/items";
import { advocacyProjectsFr } from "../Home/itemsFr";
import { useTranslation } from "react-i18next";

const slugify = (title) =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-"); // Replace spaces with dashes

const AdvocacyProject = () => {
  const { t, i18n } = useTranslation();
  let { projectId } = useParams();
  const isFr = i18n.language === "fr";

  // Match by English or French slug
  let projectIndex = advocacyProjects.findIndex(
    (post) => slugify(post.title) === projectId
  );
  if (projectIndex === -1 && advocacyProjectsFr) {
    projectIndex = advocacyProjectsFr.findIndex(
      (post) => slugify(post.title) === projectId
    );
  }

  const project =
    projectIndex !== -1
      ? (isFr && advocacyProjectsFr ? advocacyProjectsFr[projectIndex] : advocacyProjects[projectIndex])
      : null;

  if (!project) {
    return <Error />;
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>{project.title}</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={project.title} />
        <meta
          property="og:description"
          content={project.description}
        />
        <meta
          property="og:url"
          content={`https://intersexnigeria.org/programs/${slugify(
            project.title
          )}`}
        />
        <meta name="twitter:title" content={project.title} />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content={project.description}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: `${project.title}`,
            url: `https://intersexnigeria.org/programs/${slugify(
              project.title
            )}`,
            description: `${project.description}`,
          })}
        </script>
      </Helmet>
      <Flex
        flexDir={"column"}
        pos={"relative"}
        w={"100%"}
        bg={"#fefefe"}
        // h={"75vh"}
        px={{ base: "1rem", lg: "50px", xl: "100px" }}
        py={{ base: "2rem", lg: "3rem" }}
        // gap={"100px"}
        fontFamily={"nunito"}
        boxShadow={"inner"}
      >
        <Box color={"gray.600"} mb={2} fontWeight={600} fontSize={"1rem"} pt={{ base: "60px", md: "0px" }}>
          <Link to="/resources/programs" style={{ color: "#718096" }}>
            {t("resources.ourPrograms", "Our Programs")}
          </Link>{" "}
          / {project.title}
        </Box>
        <Text
          as={"h1"}
          color={"#000"}
          lineHeight={"120%"}
          w={{ base: "100%", xl: "85%" }}
          fontWeight={700}
          textAlign={"left"}
          fontSize={{ base: "24px", md: "48px" }}
          pb={{ base: "1.5rem", lg: "24px" }}
          textTransform={"capitalize"}
          fontFamily={"inter"}
        >
          {project.title}
        </Text>
        <Box pt={{ lg: "2rem" }} pb={"2rem"}>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              duration: 3000,
            }}
            coverflowEffect={{
              rotate: 40,
              stretch: 0,
              depth: 100,
              modifier: 5,
              slideShadows: true,
              duration: 3000,
            }}
            pagination={false}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper"
            breakpoints={{
              // Define breakpoints for responsive behavior
              550: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
          >
            {project.images.map((i, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <Image
                    src={i}
                    alt={`${project.title} slide ${idx + 1} `}
                    maxW={"500px"}
                    borderRadius={"12px"}
                    w={"100%"}
                    h={{ base: "350px", md: "350px" }}
                    objectFit={"cover"}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>

        <Flex
          flexDir={"column"}
          // maxW={"720px"}
          alignSelf={"center"}
          w={"100%"}
        >
          <Text fontSize={{ base: "0.9rem", xl: "1rem" }}>
            {project.text
              .split("\n")
              .map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
          </Text>
        </Flex>
      </Flex>
    </HelmetProvider>
  );
};

export default AdvocacyProject;
