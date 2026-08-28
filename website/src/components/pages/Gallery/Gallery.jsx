import {
  Flex,
  // Image,
  Text,
  useBreakpointValue,
  // useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button as ChakraButton,
  Box,
  Icon,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { galleryItems } from "./item";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import * as LazyLoadComponent from "react-lazy-load-image-component";
import Button from "../../../ui/Button";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const { LazyLoadImage } = LazyLoadComponent;

const getHeadingsAndEvents = (items) => {
  const headingsMap = {};
  for (const item of items) {
    if (item.heading && Array.isArray(item.items)) {
      headingsMap[item.heading] = item.items;
    } else if (item.event && item.Title) {
      if (!headingsMap["Other Events"])
        headingsMap["Other Events"] = [];
      headingsMap["Other Events"].push(item);
    }
  }
  return headingsMap;
};

const headingsMap = getHeadingsAndEvents(galleryItems);
const allHeadings = Object.keys(headingsMap);

// eslint-disable-next-line react/prop-types
const Gallery = ({ scrollPosition }) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    425: 1,
  };
  const imagesPerPage = useBreakpointValue({ base: 6, sm: 12 });

  // Flatten all events for lookup by Title
  const allEvents = allHeadings.flatMap(
    (heading) => headingsMap[heading]
  );
  // Default to the first event
  const [selectedTitle, setSelectedTitle] = useState(
    allEvents[0].Title
  );
  const [visibleImages, setVisibleImages] = useState(imagesPerPage);
  const [expandedHeading, setExpandedHeading] = useState(
    allHeadings[0]
  );

  useEffect(() => {
    setVisibleImages(imagesPerPage);
  }, [imagesPerPage, selectedTitle]);

  const handleTitleSelect = (title) => {
    setSelectedTitle(title);
    setVisibleImages(imagesPerPage);
  };

  const handleHeadingClick = (heading) => {
    setExpandedHeading((prev) => (prev === heading ? null : heading));
  };

  const handleLoadMore = () => {
    setVisibleImages((prev) => prev + imagesPerPage);
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  // Find the selected event object
  const selectedGallery = allEvents.find(
    (item) => item.Title === selectedTitle
  );
  const imagesToShow =
    selectedGallery?.images?.slice(0, visibleImages) || [];

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
      <Text
        as={"h1"}
        color={"#000"}
        pt={{ base: "60px", md: "0px" }}
        lineHeight={"120%"}
        w={{ base: "100%", xl: "90%" }}
        fontWeight={700}
        textAlign={"left"}
        fontSize={{ base: "24px", md: "48px" }}
        pb={{ base: "1.5rem", lg: "24px" }}
        textTransform={"capitalize"}
        fontFamily={"inter"}
      >
        A Photo Gallery of Intersex Nigeria’s thematic area
      </Text>

      <Flex
        flexDir={"column"}
        pb={{ base: "1.5rem", lg: "24px" }}
        color={"#1d2130"}
      >
        <Flex
          justifyContent={"space-between"}
          alignItems={{ md: "center" }}
          pt={"2rem"}
          gap={"1rem"}
          flexDir={{ base: "column", md: "row" }}
        >
          <Text
            fontSize={{ base: "20px", md: "28px" }}
            textTransform={"capitalize"}
            fontWeight={600}
            fontFamily={"inter"}
            as={"h5"}
          >
            {selectedTitle}
          </Text>

          <Menu isLazy>
            {() => (
              <Box w={{ base: "100%", md: "400px" }}>
                <MenuButton
                  as={ChakraButton}
                  rightIcon={
                    <BiChevronDown style={{ marginLeft: "6px" }} />
                  }
                  w="100%"
                  textAlign="left"
                  fontWeight={500}
                  fontSize={"lg"}
                  bg={"white"}
                  _hover={{ bg: "white" }}
                  border={"1px solid #CACACA"}
                >
                  <Box
                    isTruncated
                    maxW={{ base: "90vw", md: "350px" }}
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                  >
                    {selectedTitle || "Our strategic priorities"}
                  </Box>
                </MenuButton>
                <MenuList
                  maxH="350px"
                  overflowY="auto"
                  w={{ base: "100%", md: "400px" }}
                  minW="100%"
                  p={0}
                >
                  {allHeadings.map((heading) => (
                    <Box key={heading}>
                      <MenuItem
                        onClick={() => handleHeadingClick(heading)}
                        closeOnSelect={false}
                        fontWeight={700}
                        fontSize="16px"
                        bg={"white"}
                        _hover={{ bg: "gray.200" }}
                      >
                        <Flex
                          align="center"
                          justify="space-between"
                          w="100%"
                        >
                          <span>{heading}</span>
                          <Icon
                            as={
                              expandedHeading === heading
                                ? BiChevronUp
                                : BiChevronDown
                            }
                          />
                        </Flex>
                      </MenuItem>
                      {expandedHeading === heading && (
                        <Box>
                          {headingsMap[heading].map((item) => (
                            <MenuItem
                              key={item.Title}
                              onClick={() =>
                                handleTitleSelect(item.Title)
                              }
                              bg={
                                selectedTitle === item.Title
                                  ? "gray.100"
                                  : "white"
                              }
                              fontFamily={"inter"}
                              fontSize={"14px"}
                            >
                              {item.Title}
                            </MenuItem>
                          ))}
                        </Box>
                      )}
                    </Box>
                  ))}
                </MenuList>
              </Box>
            )}
          </Menu>
        </Flex>

        {/* <Box
          mt={4}
          display="grid"
          gridTemplateColumns="repeat(3, 1fr)"
          gap={4}
        >
          {imagesToShow.map((src, index) => (
            <Image key={index} src={src} alt={`Image ${index + 1}`} />
          ))}
        </Box> */}
        {/* <Flex
          display={{ base: "flex", lg: "none" }}
          // overflowX={"scroll"}
          // flexDir={"column"}
          className="no-scrollbar"
          flexWrap={'wrap'}
          gap={"1rem"}
        >
          {imagesToShow.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              mt={{ base: "1rem" }}
              _hover={{ transform: " scale(1.02)" }}
              cursor={"pointer"}
            />
          ))}
        </Flex> */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid-two"
          columnClassName="my-masonry-grid_column-two"
        >
          {imagesToShow.map((src, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <LazyLoadImage
                src={src}
                alt={`${selectedTitle} ${index + 1}`}
                effect="blur"
                scrollPosition={scrollPosition}
              />
              {/* <Image
                src={src}
                alt={`${selectedTitle} ${index + 1}`}
                mt={{ base: "1rem" }}
                _hover={{ transform: " scale(1.02)" }}
                cursor={"pointer"}
              /> */}
            </motion.div>
          ))}
        </Masonry>

        {visibleImages < (selectedGallery?.images?.length || 0) && (
          <Flex justifyContent={"center"} w={"100%"} pt={"2rem"}>
            <Button onClick={handleLoadMore} text={"Load more"} />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default Gallery;
