/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { FaScaleBalanced, FaUserGroup } from "react-icons/fa6";
import { IoMdMegaphone } from "react-icons/io";
import { SiTarget } from "react-icons/si";

const reasons = [
  {
    icon: FaUserGroup,
    title: "Recognizing Diverse Experiences",
    description:
      "Intersectionality allows us to understand that individuals are shaped by multiple, overlapping social identities, such as gender, ethnicity, tribe, sexual orientation, class, and disability. For intersex and persons with diverse identities, these identities often intersect in ways that compound their experiences of discrimination and marginalization. By adopting an intersectional approach, we can better recognize and address the unique challenges faced by each individual within the intersex community.",
  },
  {
    icon: FaScaleBalanced,
    title: "Addressing Systemic Inequality",
    description:
      "Many systems of oppression—such as sexism, tribalism, homophobia, transphobia, and ableism—are interconnected and cannot be fully understood or dismantled in isolation. Intersectionality helps us to see how these systems operate together to create complex layers of disadvantage. This awareness empowers us to tackle the root causes of inequality more effectively, ensuring that no one is left behind in our advocacy efforts.",
  },
  {
    icon: FaHeart,
    title: "Building Inclusive Communities",
    description:
      "Intersectionality fosters inclusivity by valuing and respecting the full spectrum of human diversity. It encourages us to create spaces where all voices are heard, all experiences are validated, and all individuals are supported in their journey toward self-empowerment. This approach aligns with our commitment to building a supportive and united community for intersex persons with diverse identities and multiple experiences in Nigeria.",
  },
  {
    icon: IoMdMegaphone,
    title: "Empowering Marginalized Voices",
    description:
      "By embracing intersectionality, we amplify the voices of those who are often the most marginalized. This includes individuals who might experience multiple forms of discrimination due to their intersecting identities. Our work aims to elevate these voices, ensuring that they are not only heard but also actively involved in shaping the solutions to the issues that impact their lives.",
  },
  {
    icon: SiTarget,
    title: "Promoting Holistic Advocacy",
    description:
      "By embracing intersectionality, we amplify the voices of those who are often the most marginalized. This includes individuals who might experience what we know as double or triple jeopardy, which broadens our perspective, allowing us to see the full picture of an individual's lived experiences. This holistic understanding enables us to develop more effective advocacy strategies that address the interconnected issues affecting our community. It ensures that our efforts are not only about advancing rights but also about promoting overall wellbeing and social justice for all persons with intersecting identities and experiences.",
  },
];

export function WhySection() {
  return (
    <Box
      as="section"
      py={{ base: 16, sm: 20 }}
      bg="white"
      px={{ base: "1rem", lg: "50px", xl: "100px" }}
    >
      <Box mx="auto">
        {/* Header */}
        <Box  mb={16}>
          <Text
            fontWeight={700}
            color={"#1d2130"}
            w={"100%"}
            fontSize={{ base: "22px", md: "40px" }}
            pb={{ base: "1.5rem", lg: "2rem" }}
            lineHeight={"120%"}
            maxW={{ lg: "790px" }}
            fontFamily={"inter"}
            as={"h2"}
          >
            Why Intersectionality!
          </Text>

          <Text
            // maxW="3xl"
            // mx="auto"
            color="blackish"
          >
            Intersectionality is essential because it acknowledges and
            addresses the complex and interconnected nature of social
            identities and the various forms of discrimination or
            privilege that come with them.
          </Text>

          <Text
            color="blackish"
            mt={2}
          >
            "At The Intersection - An Intersex Nigeria
            Intersectionality Hub," intersectionality is at the core
            of our mission and vision for several key reasons:
          </Text>
        </Box>

        {/* Reasons List */}
        <Box display="grid" gap={{ base: 8, sm: 10 }}>
          {reasons.map((reason, index) => {
            const isEven = index % 2 === 0;

            return (
              <Flex
                key={index}
                direction={{
                  base: "column",
                  sm: isEven ? "row" : "row-reverse",
                }}
                gap={{ base: 6, sm: 8 }}
                align="flex-start"
              >
                {/* Icon Box */}
                {/* <Box flexShrink={0}>
                  <Flex
                    w="16"
                    h="16"
                    rounded="2xl"
                    align="center"
                    justify="center"
                    // bgGradient="linear(to-br, #64117e, #8a1da3)"
                    bgGradient="linear(to-br, #f5ac07, #d67a2a)"
                    shadow="lg"
                  >
                    <Icon
                      as={reason.icon}
                      boxSize={8}
                      color="white"
                    />
                  </Flex>
                </Box> */}

                {/* Text Card */}
                <Box flex="1">
                  <Box
                    p={{ base: 6, sm: 8 }}
                    rounded="2xl"
                    shadow="sm"
                    transition="all 0.3s"
                    borderWidth="1px"
                    bgGradient={
                      isEven
                        ? "linear(to-br, #65117e19, white)"
                        : "linear(to-br, #f5ae0710, white)"
                    }
                    borderColor={isEven ? "purple.100" : "orange.100"}
                    _hover={{ shadow: "md" }}
                  >
                    <Heading fontSize="xl" color="#64117e" mb={3}>
                      {reason.title}
                    </Heading>
                    <Text color="gray.700" lineHeight="tall">
                      {reason.description}
                    </Text>
                  </Box>
                </Box>
              </Flex>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
