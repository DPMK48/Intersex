import { useRef, useState } from "react";
import { Box, Flex, Spinner, Text, useToast } from "@chakra-ui/react";
import Button from "../../../ui/Button";
import {
  generateStyledEmailHtml,
  encodeBase64Html,
} from "../../../utils/emailTemplate";
import { useTranslation } from "react-i18next";

const Contact1 = () => {
  const { t } = useTranslation();
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

      // Send email to admin and confirmation email to user with submission details
      const contactSummary = `Thank you for contacting Intersex Nigeria. We have received your message and will get back to you as soon as possible.\n\nHere is a copy of your submission details:\n- Name: ${formData.name}\n- Email: ${formData.email}\n- Phone: ${formData.number || "Not provided"}\n- Subject: ${formData.subject}\n- Message:\n${formData.message}\n\nWarm regards,\nIntersex Nigeria Team`;

      const contactFields = [
        { label: "Full Name", value: formData.name },
        { label: "Email Address", value: formData.email },
        { label: "Phone Number", value: formData.number || "Not provided" },
        { label: "Subject", value: formData.subject },
        { label: "Message", value: formData.message, isBlock: true },
      ];

      const adminHtml = generateStyledEmailHtml({
        title: "New Contact Message",
        badge: "WEBSITE INQUIRY",
        recipientGreeting: "Communications Team,",
        introText: "A new message has been received from the website contact form. Details are outlined below:",
        fields: contactFields,
        isConfidential: false,
      });

      const userHtml = generateStyledEmailHtml({
        title: "We Received Your Message",
        badge: "SUBMISSION CONFIRMATION",
        recipientGreeting: `Hello ${formData.name},`,
        introText: "Thank you for reaching out to Intersex Nigeria. We have received your message and will get back to you as soon as possible. Below is a copy of the information you submitted for your records:",
        fields: contactFields,
        isConfidential: false,
      });

      const [adminResponse, userResponse] = await Promise.all([
        fetch(
          "https://intersex-ng-server-jich.onrender.com/api/send-email",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: {
                subject: `New Message from website: ${formData.subject || "General Inquiry"}`,
                from: {
                  name: "Intersex Nigeria",
                  email: "reports@intersexnigeria.org",
                },
                to: [
                  {
                    email: "reports@intersexnigeria.org",
                    name: "Intersex Nigeria",
                  },
                ],
                text: contactSummary,
                html: encodeBase64Html(adminHtml),
              },
            }),
          }
        ),
        fetch(
          "https://intersex-ng-server-jich.onrender.com/api/send-email",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: {
                subject: "Thank you for contacting us - Copy of your message",
                from: {
                  name: "Intersex Nigeria",
                  email: "reports@intersexnigeria.org",
                },
                to: [{ email: formData.email, name: formData.name }],
                text: contactSummary,
                html: encodeBase64Html(userHtml),
              },
            }),
          }
        ),
      ]);

      if (!adminResponse.ok || !userResponse.ok) {
        const failedRes = !adminResponse.ok ? adminResponse : userResponse;
        let serverErrorMsg = "";
        try {
          const errData = await failedRes.json();
          serverErrorMsg = errData.error || errData.message || errData.details || "";
        } catch {}
        throw new Error(serverErrorMsg || "Failed to send one or both emails");
      }

      setFormData({
        name: "",
        email: "",
        message: "",
        number: "",
        subject: "",
      });
      toast({
        description: t("contact.sendSuccess", "Message sent successfully!"),
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      console.error(error);
      toast({
        description: t("contact.sendError", "Failed to send message"),
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
                {t("contact.getInTouch", "get in touch")}
              </Text>
            </Flex>
            <Text
              color={"#1d2130"}
              fontSize={{ base: "24px", md: "48px" }}
              fontWeight={700}
              fontFamily={"inter"}
              as={"h1"}
            >
              {t("contact.sendUsMessage", "Send us a message")}
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
                  <input
                    type="text"
                    className="form-input"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleNameChange}
                    placeholder={t("contact.namePlaceholder", "Name")}
                    required
                  />
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    className="form-input"
                    name="number"
                    id="phone number"
                    value={formData.number}
                    onChange={handleNumberChange}
                    placeholder={t(
                      "contact.phonePlaceholder",
                      "Phone number"
                    )}
                    required
                  />
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    className="form-input"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleEmailChange}
                    placeholder={t("contact.emailPlaceholder", "Email")}
                    required
                  />
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    className="form-input"
                    name="subject"
                    id="subject"
                    placeholder={t(
                      "contact.subjectPlaceholder",
                      "Subject"
                    )}
                    value={formData.subject}
                    onChange={handleSubjectChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row ">
                <textarea
                  className="form-input message"
                  name="message"
                  id="message"
                  cols={50}
                  rows={6}
                  value={formData.message}
                  onChange={handleMessageChange}
                  placeholder={t(
                    "contact.messagePlaceholder",
                    "Message"
                  )}
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
                        t("common.sendNow", "Send now")
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
    </section>
  );
};
export default Contact1;
