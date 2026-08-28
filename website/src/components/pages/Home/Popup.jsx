import { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Flex,
  Text,
  Stack,
  Input,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import Button from "../../../ui/Button";

const Popup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    // Check if the user has already seen the popup in this session
    const visited = localStorage.getItem("hasUserVisited");

    if (!visited) {
      // Show the popup after 1 minute (60000 milliseconds)
      const timer = setTimeout(() => {
        onOpen();
        localStorage.setItem("hasUserVisited", "true"); // Mark that the user has seen the popup
      }, 5000);

      // Cleanup the timer if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [onOpen]);

    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState();
    const toast = useToast();

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
        const response = await fetch(
          "https://intersex-ng-server.onrender.com/api/subscribe",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          }
        );

        const result = await response.json();

        if (response.ok && result.result) {
          setEmail("");
          toast({
            description: "Thank you for subscribing!",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
          onClose()
        } else {
          toast({
            description: "Failed to subscribe, please try again later",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsSubmitting(false);
      }
    };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        blockScrollOnMount={true}
        closeOnOverlayClick={false}
      >
        <ModalOverlay backdropFilter={"blur(5px)"} bg={"#000000d0"} />
        <ModalContent
          w={"100%"}
          bg={"white"}
          m={"auto"}
          className="no-scrollbar"
          maxW={{ base: "95vw", md: "500px" }}
          h={{ base: "fit-content", md: "300px" }}
          overflowY={"scroll"}
          py={{base:'24px', md: 0}}
          zIndex={1000000}
        >
          <ModalCloseButton
            fontSize={{ base: "14px", md: "16px" }}
            mt={"1rem"}
          />
          <ModalHeader mt={"1rem"}>
            <Flex flexDir={"column"} gap={"1rem"}>
              <Text
                fontWeight={700}
                fontFamily={"inter"}
                fontSize={{ base: "16px", md: "32px" }}
                w={"100%"}
                textAlign={"justify"}
              >
                Join our mailing list
              </Text>
            </Flex>
          </ModalHeader>
          <ModalBody w={"100%"} bg={"white"} mx={"auto"}>
            <Stack align={"flex-start"} gap={'16px'}>

              <Text color={"blackish"} fontFamily={'nunito'}>
                Be a voice for change. Sign up to receive the latest
                news, programme alerts, and stories from our advocacy
                efforts.{" "}
              </Text>
              <Stack
                // direction={"row"}
                w={"100%"}
                gap={'16px'}
                as={"form"}
                onSubmit={handleSubmit}
              >
                <Input
                  placeholder={"Your email address"}
                  bg={"#fefefe"}
                  color={"black"}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  _focus={{
                    bg: "#fefefe",
                  }}
                />
                <Button
                  text={
                    isSubmitting ? (
                      <Spinner color="white" />
                    ) : (
                      "Subscribe"
                    )
                  }
                  disabled={email === "" || isSubmitting}
                  type={"submit"}
                />
              </Stack>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Popup;
