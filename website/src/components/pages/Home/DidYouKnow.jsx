import {
  Box,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { faq } from "./items";
import "../../../styles/did-you-know.css";
import Masonry from "react-masonry-css";
import { useState } from "react";

const DidYouKnow = () => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 2,
  };

  const [selectedImg, setSelectedImg] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      h={"max-content"}
      px={{ base: "1rem", lg: "50px", xl: "100px" }}
      pb={{ base: "2rem", lg: "3rem" }}
      bg={"#fefefe"}
      fontFamily={"nunito"}
      pt={{ base: "2rem", lg: "4rem" }}
    >
      <Text
        fontWeight={700}
        color={"#1d2130"}
        maxW={{ lg: "640px" }}
        w={"100%"}
        fontSize={{ base: "22px", md: "40px" }}
        lineHeight={"120%"}
        fontFamily={"inter"}
        as={"h2"}
        display={{ base: "block", xl: "none" }}
      >
        Frequently Asked Questions
      </Text>
      <Flex
        gap={{ base: "", xl: "3rem" }}
        flexDir={{ base: "column", lg: "row" }}
      >
        <Box
          h={"auto"}
          // bg={"#00000010"}
          px={{ base: "1rem", lg: "0.5rem", md: "1rem" }}
          w={"100%"}
        >
          <Text
            textTransform={"uppercase"}
            fontSize={{
              base: "24px",
              md: "48px",
            }}
            textAlign={"center"}
            fontWeight={800}
            color={"black"}
            fontFamily={"inter"}
            display={{ base: "none", xl: "block" }}
            as={"h5"}
            // lineHeight={"120px"}
          >
            Frequently Asked
            <br />
            <Text
              as={"span"}
              color={"purple"}
              fontSize={{ base: "24px", md: "48px", xl: "68px" }}
            >
              Questions
            </Text>
          </Text>
          <Flex
            justifyContent={"center"}
            mt={{ xl: "2rem" }}
            h={"100%"}
            alignItems={{ lg: "center", xl: "unset" }}
            display={{ base: "none", lg: "flex" }}
          >
            <Image
              h={{ lg: "200px", xl: "300px" }}
              w={"auto"}
              src={
                "https://res.cloudinary.com/dcjebpvia/image/upload/f_auto/v1751211815/intersex-ng-images/arrow.gif"
              }
              alt="arrow pointer"
            />
          </Flex>
        </Box>
        <Flex
          display={{ base: "flex", lg: "none" }}
          overflowX={"scroll"}
          className="no-scrollbar"
          gap={"1rem"}
        >
          {faq.map((img, idx) => {
            return (
              <Image
                src={img}
                alt="frequently asked questions"
                loading="lazy"
                mt={{ base: "1rem" }}
                borderRadius={"1rem"}
                border={"1px solid purple"}
                w={{ base: "80%", sm: "30%" }}
                h={"auto"}
                _hover={{ transform: " scale(1.02)" }}
                key={idx}
                cursor={"pointer"}
                onClick={() => {
                  setSelectedImg(img);
                  onOpen();
                }}
              />
            );
          })}
        </Flex>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {faq.map((img, idx) => {
            return (
              <Image
                src={img}
                onClick={() => {
                  setSelectedImg(img);
                  onOpen();
                }}
                alt="frequently asked questions"
                loading="lazy"
                borderRadius={"1rem"}
                border={"1px solid purple"}
                w={"100%"}
                mt={{ base: "1rem" }}
                _hover={{ transform: " scale(1.02)" }}
                cursor={"pointer"}
                key={idx}
              />
            );
          })}
        </Masonry>
        {selectedImg && (
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            blockScrollOnMount={true}
          >
            <ModalOverlay
              backdropFilter={"blur(2px)"}
              bg={"#00000076"}
            />
            <ModalContent
              w={{ base: "fit-content", md: "80vw" }}
              // maxH={"80vh"}
              // h={{ base: "", md: "100%" }}
              bg={"transparent"}
              // m={"auto"}
              p={0}
            >
              <ModalBody
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                maxW={{ base: "85vw", md: "unset" }}
                w={"fit-content"}
                h={"100%"}
                p={0}
              >
                <Flex w={"fit-content"} h={"100%"}>
                  <Image
                    src={selectedImg}
                    alt="faq"
                    objectFit={"contain"}
                    w={"fit-content"}
                    h={"auto"}
                  />
                </Flex>
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
        {/* </Grid> */}
      </Flex>
    </Box>
  );
};

export default DidYouKnow;
