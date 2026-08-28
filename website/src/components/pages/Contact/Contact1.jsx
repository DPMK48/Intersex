import { useRef, useState } from "react";

// import sendpulse from "sendpulse-api";
// import { motion } from "framer-motion";
import { Box, Flex, Spinner, Text, useToast } from "@chakra-ui/react";
import Button from "../../../ui/Button";
// import { useSendPulseToken } from "../../../utils/useSendPulseToken";

const Contact1 = () => {
  const [sending, setSending] = useState(false);
  const form = useRef();
  const toast = useToast();

  const currentYear = new Date().getFullYear();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
    subject: "",
  });

  const handleNameChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleNumberChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleEmailChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubjectChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleMessageChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSending(true);

      // Send email to admin and confirmation email to user
      const [adminResponse, userResponse] = await Promise.all([
        fetch(
          "https://intersex-ng-server.onrender.com/api/send-email",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: {
                subject: "New Message from website",
                from: {
                  name: "Intersex Nigeria",
                  email: "communications@intersexnigeria.org",
                  // ehikioya@intersexnigeria.org
                },
                to: [
                  {
                    email: "communications@intersexnigeria.org",
                    name: "Intersex Nigeria",
                  },
                ],
                template: {
                  id: "153159",
                  variables: {
                    name: formData.name,
                    number: formData.number,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    current_year: currentYear,
                  },
                },
              },
            }),
          }
        ),
        fetch(
          "https://intersex-ng-server.onrender.com/api/send-email",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: {
                subject: "Thank you for contacting us!",
                from: {
                  name: "Intersex Nigeria",
                  email: "communications@intersexnigeria.org",
                },
                to: [{ email: formData.email }], // Send to the user's email
                template: {
                  id: "151511",
                  variables: {
                    name: formData.name,
                    current_year: currentYear,
                  },
                },
              },
            }),
          }
        ),
      ]);

      if (!adminResponse.ok || !userResponse.ok) {
        throw new Error("Failed to send one or both emails");
      }

      setFormData({
        name: "",
        email: "",
        message: "",
        number: "",
        subject: "",
      });
      toast({
        description: "Message sent successfully!",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      console.error(error);
      toast({
        description: "Failed to send message",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact">
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05, duration: 1, ease: "easeInOut" }}
      > */}
      <Flex pt={{ base: "60px", md: "0px" }}>
        <div className="contact-container">
          <div className="contact-text">
            <Flex gap={"10px"} alignItems={"center"}>
              {" "}
              <Box w={"50px"} h={"4px"} bg={"purple"}></Box>
              <Text
                fontSize={{ base: "12px", md: "16px" }}
                fontWeight="bold"
                textTransform={"uppercase"}
              >
                get in touch{" "}
              </Text>
            </Flex>
            <Text
              color={"#1d2130"}
              fontSize={{ base: "24px", md: "48px" }}
              fontWeight={700}
              fontFamily={"inter"}
              as={"h1"}
            >
              Send us a message{" "}
            </Text>
          </div>
          <Flex
            gap={"74px"}
            justifyContent={"space-between"}
            w={"100%"}
          >
            <form className="form" ref={form} onSubmit={handleSubmit}>
              <div className="form-container">
                <div className="form-row">
                  {/* <label htmlFor="name">name</label> */}
                  <input
                    type="text"
                    className="form-input"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleNameChange}
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="form-row">
                  {/* <label htmlFor="phone number">phone number</label> */}
                  <input
                    type="text"
                    className="form-input"
                    name="number"
                    id="phone number"
                    value={formData.number}
                    onChange={handleNumberChange}
                    placeholder="Phone number"
                    required
                  />
                </div>
                <div className="form-row">
                  {/* <label htmlFor="email">email</label> */}
                  <input
                    type="text"
                    className="form-input"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleEmailChange}
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-row">
                  {/* <label htmlFor="subject">subject</label> */}
                  <input
                    type="text"
                    className="form-input"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleSubjectChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row ">
                {/* <label htmlFor="message">message</label> */}
                <textarea
                  className="form-input message"
                  name="message"
                  id="message"
                  cols={50}
                  rows={6}
                  value={formData.message}
                  onChange={handleMessageChange}
                  placeholder="Message"
                  required
                />
              </div>
              <div className="submit-btn">
                <Box mx={{ base: "auto", lg: "unset" }}>
                  <Button
                    text={
                      sending ? (
                        <Spinner color="purple" />
                      ) : (
                        "Send now"
                      )
                    }
                    disabled={
                      sending ||
                      formData.email === "" ||
                      formData.message === "" ||
                      formData.subject === ""
                    }
                    color={"black"}
                    bg={"#F2C94C"}
                    fontSize={"16px"}
                    px={"32px"}
                    py={"16px"}
                    maxW={"115px"}
                    textTransform={""}
                    type={"submit"}
                  />
                </Box>
              </div>
            </form>
          </Flex>
        </div>
      </Flex>

      {/* </motion.div> */}
    </section>
  );
};
export default Contact1;
