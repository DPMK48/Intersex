import {
  Box,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Divider,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { positions } from "./item";
import { positionsFr } from "./itemFr";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CareersPage = () => {
  const { t, i18n } = useTranslation();
  const isFr = i18n.language === "fr";
  const list = isFr && positionsFr ? positionsFr : positions;

  return (
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
      <VStack mx="auto" pt={{ base: "60px", md: "0px" }}>
        <VStack spacing={3}>
          <Text
            as={"h1"}
            color={"#000"}
            lineHeight={"120%"}
            w={{ base: "100%", xl: "100%" }}
            fontWeight={700}
            textAlign={"left"}
            fontSize={{ base: "24px", md: "48px" }}
            pb={{ base: "1.5rem", lg: "24px" }}
            textTransform={"capitalize"}
            fontFamily={"inter"}
          >
            {t("careers.joinOurTeam", "Join Our Team")}
          </Text>
          <Text
            fontSize={{ base: "14px", sm: "16px", md: "18px" }}
            color={"blackish"}
            textAlign={"left"}
          >
            {t(
              "careers.intro",
              "We're looking for passionate individuals committed to creating a more inclusive society for Intersex People in Nigeria. Join our dedicated and diverse team at Intersex Nigeria!"
            )}
          </Text>
        </VStack>

        <Divider borderColor="gray.200" />

        <SimpleGrid
          columns={list.length > 0 ? { base: 1, md: 2 } : 1}
          spacing={10}
          w="full"
          mt={"1.5rem"}
        >
          {list.length > 0 ? (
            list.map((position, index) => {
              const slugify = (title) =>
                title
                  .toLowerCase()
                  .trim()
                  .replace(/[^\w\s-]/g, "") // Remove special characters
                  .replace(/\s+/g, "-"); // Replace spaces with dashes;
              const canonicalSlug = slugify(positions[index]?.title || position.title);
              return (
                <Box
                  key={index}
                  p={5}
                  border="1px solid"
                  borderColor="gray.200"
                  borderRadius="md"
                >
                  <VStack align="start" spacing={2}>
                    <HStack>
                      <Link
                        to={`/career/${canonicalSlug}`}
                        key={canonicalSlug}
                      >
                        <Text
                          as={"h3"}
                          fontSize={{ base: "1.5rem", md: "1.3rem" }}
                          fontWeight={600}
                          fontFamily={"inter"}
                        >
                          {position.title}
                        </Text>
                      </Link>
                    </HStack>
                    <Text
                      fontSize={{
                        base: "14px",
                        sm: "16px",
                        md: "18px",
                      }}
                    >
                      {position.description}
                    </Text>
                    <HStack spacing={4}>
                      <HStack color={"purple"}>
                        <Icon as={FaMapMarkerAlt} />
                        <Text
                          fontSize={{
                            base: "14px",
                            sm: "16px",
                            md: "16px",
                          }}
                        >
                          {position.location}
                        </Text>
                      </HStack>
                      <HStack color={"purple"}>
                        <Icon as={FaClock} />
                        <Text
                          fontSize={{
                            base: "14px",
                            sm: "16px",
                            md: "16px",
                          }}
                        >
                          {position.type}
                        </Text>
                      </HStack>
                    </HStack>
                  </VStack>
                </Box>
              );
            })
          ) : (
            <Text
              fontSize={{ base: "16px", sm: "18px", md: "20px" }}
              color={"blackish"}
              textAlign={"left"}
              mt={"2rem"}
            >
              {t(
                "careers.noOpeningsP1",
                "Thank you for your interest in working with us. Unfortunately, we currently do not have any openings in our organization. If you want to contribute to the work we're doing, you can"
              )}{" "}
              <Link
                to={
                  "https://docs.google.com/forms/d/e/1FAIpQLScYttqFyJ8FYvoO8aw27Y_9It35Td3IuXoqxv9lfdWTFSi7Fg/viewform"
                }
              >
                <Text
                  display={"inline-block"}
                  color="purple"
                  fontWeight={500}
                >
                  {t("careers.volunteerLink", "volunteer with us")}
                </Text>
              </Link>
              .{" "}
              {t(
                "careers.noOpeningsP2",
                "Do be on the lookout, as any job openings will be posted here."
              )}
            </Text>
          )}
        </SimpleGrid>
      </VStack>
    </Flex>
  );
};

export default CareersPage;
