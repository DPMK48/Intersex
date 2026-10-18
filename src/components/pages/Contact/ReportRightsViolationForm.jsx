/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Box,
  Collapse,
  Flex,
  Heading,
  Text,
  Input,
  Textarea,
  Radio,
  RadioGroup,
  Stack,
  FormControl,
  Icon,
  Spinner,
  Select,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { FaWpforms, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Button from "../../../ui/Button";
import {
  generateStyledEmailHtml,
  encodeBase64Html,
} from "../../../utils/emailTemplate";
import { useTranslation } from "react-i18next";

const VIOLATION_OPTIONS = [
  "Non-consensual medical surgery (Intersex Genital Mutilation) IGM",
  "Forced hormone treatment without informed consent",
  "Denial of medical diagnosis or records to the person",
  "Discrimination in healthcare settings",
  "Stigma & Discrimination in spaces.",
  "Employment discrimination based on intersex status",
  "Discrimination in education settings",
  "Physical violence or abuse",
  "Sexual violence or abuse",
  "Forced or coerced gender assignment",
  "Family or domestic violence related to intersex status",
  "Denial of identity documents or legal recognition",
  "Social exclusion or ostracism from a community or religious group",
  "Online harassment or doxing",
  "Psychological abuse or coercion",
  "Institutional neglect or failure of duty of care",
  "Invasion of Privacy",
  "Conversation of Practice (Therapy)",
  "Unlawful Arrest or Blackmail",
  "Outing",
  "Other — describe below",
];

const initialFormData = {
  email: "",
  phone: "",
  fullName: "",
  preferredName: "",
  pronoun: "",
  age: "",
  genderIdentity: "",
  sexualOrientation: "",
  location: "",
  violationType: "",
  violationTypeOther: "",
  submittingForSelf: "",
  relationship: "",
  incidentType: "",
  incidentLocation: "",
  narrative: "",
  supportNeeded: "",
  wantContact: "",
};

function FormSection({ title, children, required }) {
  return (
    <Box
      bg="white"
      px={{ base: 4, md: 6 }}
      py={{ base: 4, md: 6 }}
      rounded="lg"
      shadow="sm"
      borderWidth="1px"
      borderColor="gray.100"
      boxShadow="md"
    >
      {title && (
        <Text
          fontWeight={600}
          fontSize={{ base: "15px", md: "1rem" }}
          color="#1d2130"
          mb={4}
        >
          {title}
          {required && (
            <Text as="span" color="red.500" ml={1}>
              *
            </Text>
          )}
        </Text>
      )}
      {children}
    </Box>
  );
}

export default function ReportRightsViolationForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState(initialFormData);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });
  const toast = useToast();

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleRadio = (field) => (value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isValid =
    formData.violationType !== "" &&
    formData.submittingForSelf !== "" &&
    (formData.submittingForSelf === "Yes" || formData.relationship.trim() !== "") &&
    formData.narrative.trim() !== "" &&
    formData.supportNeeded.trim() !== "" &&
    formData.wantContact !== "";

  const buildEmailBody = () => {
    const lines = [];
    lines.push(`*** HUMAN RIGHTS VIOLATION REPORT ***`);
    lines.push(`Email Address: ${formData.email || "Not provided"}`);
    lines.push(`Phone Number: ${formData.phone || "Not provided"}`);
    lines.push(`First and last Name: ${formData.fullName || "Not provided"}`);
    lines.push(`Preferred Name: ${formData.preferredName || "Not provided"}`);
    lines.push(`Pronoun: ${formData.pronoun || "Not provided"}`);
    lines.push(`Age: ${formData.age || "Not provided"}`);
    lines.push(`Gender Identity: ${formData.genderIdentity || "Not provided"}`);
    lines.push(`Sexual Orientation: ${formData.sexualOrientation || "Not provided"}`);
    lines.push(`Location: ${formData.location || "Not provided"}`);
    
    const violationDisplay =
      formData.violationType === "Other — describe below"
        ? `Other: ${formData.violationTypeOther || "Other"}`
        : formData.violationType;
    lines.push(`Type of Violation: ${violationDisplay}`);
    
    lines.push(`Are you submitting for yourself?: ${formData.submittingForSelf}`);
    if (formData.submittingForSelf === "No") {
      lines.push(`Relationship to the person: ${formData.relationship}`);
    }
    
    lines.push(`Type of Incident: ${formData.incidentType || "Not provided"}`);
    lines.push(`Location of incident: ${formData.incidentLocation || "Not provided"}`);
    lines.push(`Detailed Summary/Narrative account: ${formData.narrative}`);
    lines.push(`Summary of Support Needed: ${formData.supportNeeded}`);
    lines.push(`Do you want the safeguarding team to contact you?: ${formData.wantContact}`);
    
    return lines.join("\n");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValid) {
      toast({
        description: "Please fill in all required fields.",
        status: "warning",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    try {
      setSending(true);
      const emailBody = buildEmailBody();

      // Check if email is provided
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const reporterEmail = formData.email?.trim();
      const hasValidUserEmail = reporterEmail && emailRegex.test(reporterEmail);

      const violationDisplay =
        formData.violationType === "Other — describe below"
          ? `Other: ${formData.violationTypeOther || "Other"}`
          : formData.violationType;

      const reportFields = [
        { label: "Full Name", value: formData.fullName || "Not provided" },
        { label: "Preferred Name", value: formData.preferredName || "Not provided" },
        { label: "Email Address", value: formData.email || "Not provided" },
        { label: "Phone Number", value: formData.phone || "Not provided" },
        { label: "Pronoun", value: formData.pronoun || "Not provided" },
        { label: "Age", value: formData.age || "Not provided" },
        { label: "Gender Identity", value: formData.genderIdentity || "Not provided" },
        { label: "Sexual Orientation", value: formData.sexualOrientation || "Not provided" },
        { label: "Location", value: formData.location || "Not provided" },
        { label: "Type of Violation", value: violationDisplay },
        { label: "Submitting For Self?", value: formData.submittingForSelf },
        ...(formData.submittingForSelf === "No"
          ? [{ label: "Relationship to Person", value: formData.relationship }]
          : []),
        { label: "Type of Incident", value: formData.incidentType || "Not provided" },
        { label: "Incident Location", value: formData.incidentLocation || "Not provided" },
        { label: "Detailed Summary / Narrative Account", value: formData.narrative, isBlock: true },
        { label: "Summary of Support Needed", value: formData.supportNeeded, isBlock: true },
        { label: "Safeguarding Team May Contact", value: formData.wantContact },
      ];

      const adminHtml = generateStyledEmailHtml({
        title: "🚨 New Human Rights Violation Report",
        badge: "ACTION REQUIRED",
        recipientGreeting: "Safeguarding & Human Rights Team,",
        introText: "A new human rights violation report has been submitted through the Intersex Nigeria website. The submission details are provided below:",
        fields: reportFields,
        isConfidential: true,
      });

      const requests = [
        // 1. Send report to Safeguarding & Human Rights team
        fetch(
          "https://intersex-ng-server-jich.onrender.com/api/send-email",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: {
                subject: "🚨 New Human Rights Violation Report Submitted",
                from: {
                  name: "Intersex Nigeria Human Rights Report",
                  email: "reports@intersexnigeria.org",
                },
                to: [
                  {
                    email: "reports@intersexnigeria.org",
                    name: "Intersex Nigeria Safeguarding",
                  },
                ],
                text: emailBody,
                html: encodeBase64Html(adminHtml),
              },
            }),
          }
        ),
      ];

      // 2. If the reporter provided an email, send them a confirmation copy with submission details
      if (hasValidUserEmail) {
        const userHtml = generateStyledEmailHtml({
          title: "Human Rights Violation Report",
          badge: "CONFIRMATION & SUBMISSION COPY",
          recipientGreeting: `Hello ${formData.fullName || formData.preferredName || "Friend"},`,
          introText: "Thank you for reaching out to Intersex Nigeria. We have safely received your report. Below is a complete copy of the details you submitted for your records:",
          fields: reportFields,
          isConfidential: true,
        });

        requests.push(
          fetch(
            "https://intersex-ng-server-jich.onrender.com/api/send-email",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: {
                  subject: "Confirmation & Copy of Your Human Rights Violation Report - Intersex Nigeria",
                  from: {
                    name: "Intersex Nigeria Human Rights Report",
                    email: "reports@intersexnigeria.org",
                  },
                  to: [
                    {
                      email: reporterEmail,
                      name: formData.fullName || formData.preferredName || "Reporter",
                    },
                  ],
                  text: `Dear ${formData.fullName || formData.preferredName || "Reporter"},\n\nThank you for reaching out to Intersex Nigeria. We have received your human rights violation report.\n\nBelow is a copy of the details you submitted:\n\n${emailBody}\n\nOur team will review this information. Your confidentiality and safety are strictly maintained.\n\nWarm regards,\nIntersex Nigeria Team`,
                  html: encodeBase64Html(userHtml),
                },
              }),
            }
          )
        );
      }

      const responses = await Promise.all(requests);
      const failedRes = responses.find((res) => !res.ok);

      if (failedRes) {
        let serverErrorMsg = "";
        try {
          const errData = await failedRes.json();
          serverErrorMsg = errData.error || errData.message || errData.details || "";
        } catch {
          // ignore parsing error
        }
        throw new Error(serverErrorMsg || "Failed to send report");
      }

      setFormData(initialFormData);
      setSubmitted(true);
      toast({
        description: "Your report has been submitted successfully.",
        status: "success",
        duration: 6000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        description:
          error.message && error.message !== "Failed to send report"
            ? `Submission failed: ${error.message}. Please try again or email reports@intersexnigeria.org directly.`
            : "Failed to submit report. Please try again or email reports@intersexnigeria.org directly.",
        status: "error",
        duration: 6000,
        isClosable: true,
        position: "top",
      });
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <Box
        bg="white"
        px={{ base: 6, md: 10 }}
        py={{ base: 10, md: 14 }}
        rounded="lg"
        borderWidth="2px"
        borderColor="#64117e"
        textAlign="center"
        boxShadow="lg"
      >
        <Icon
          as={FaWpforms}
          fontSize={48}
          color="#64117e"
          mb={4}
        />
        <Heading
          as="h3"
          fontSize={{ base: "1.3rem", md: "1.6rem" }}
          fontFamily="inter"
          color="#1d2130"
          mb={4}
        >
          {t("reportForms.reportSubmitted", "Report Submitted Successfully")}
        </Heading>
        <Text color="#1d2130" mb={6} fontSize={{ base: "15px", md: "1rem" }}>
          {t(
            "reportForms.violationSuccessText",
            "Thank you for trusting us and sharing your story. Your report has been securely submitted and will be reviewed confidentially by the safeguarding team."
          )}
        </Text>
        <Box
          as="button"
          onClick={() => setSubmitted(false)}
          px={6}
          py={3}
          bg="#64117e"
          color="white"
          rounded="md"
          fontWeight={600}
          _hover={{ bg: "#7b1fa2" }}
          transition="all 0.2s"
        >
          {t("reportForms.submitAnother", "Submit Another Report")}
        </Box>
      </Box>
    );
  }

  return (
    <Box
      bg="white"
      rounded="lg"
      borderWidth="2px"
      borderColor="#64117e"
      boxShadow="md"
    >
      {/* Collapsible Header */}
      <Flex
        align="center"
        justify="space-between"
        px={{ base: 4, md: 6 }}
        py={{ base: 4, md: 6 }}
        cursor="pointer"
        onClick={onToggle}
        role="button"
        aria-expanded={isOpen}
        aria-label="Toggle violation report form"
        _hover={{ bg: "gray.50" }}
        transition="background 0.2s"
        userSelect="none"
      >
        <Flex align="center" gap={3}>
          <Icon as={FaWpforms} fontSize={{ base: 20, md: 24 }} color="#64117e" />
          <Box>
            <Heading
              as="h3"
              fontSize={{ base: "1.1rem", md: "1.3rem" }}
              fontFamily="inter"
              color="#1d2130"
            >
              {t("reportForms.rightsViolationFormTitle", "Violation and Cases Report Form")}
            </Heading>
            <Text
              fontSize={{ base: "12px", md: "0.85rem" }}
              color="gray.500"
              mt={1}
            >
              {isOpen
                ? t("reportForms.clickToCollapse", "Click to collapse")
                : t("reportForms.clickToExpand", "Click to expand and fill out the form")}
            </Text>
          </Box>
        </Flex>
        <Icon
          as={isOpen ? FaChevronUp : FaChevronDown}
          fontSize={{ base: 14, md: 16 }}
          color="#64117e"
          transition="transform 0.2s"
        />
      </Flex>

      {/* Collapsible Body */}
      <Collapse in={isOpen}>
        <Box
          px={{ base: 4, md: 6 }}
          pb={{ base: 6, md: 8 }}
          borderTop="1px solid"
          borderColor="gray.100"
        >
          <Text fontSize="sm" color="red.500" my={6}>
            {t("reportForms.indicatesRequired", "* Indicates required question")}
          </Text>

          <form onSubmit={handleSubmit}>
            <Stack spacing={6}>
              {/* Email Address */}
              <FormSection title={t("reportViolationForm.email", "Email Address")}>
                <Input
                  type="email"
                  placeholder={t("reportViolationForm.emailPlaceholder", "Your email address")}
                  value={formData.email}
                  onChange={handleChange("email")}
                  variant="flushed"
                  borderColor="gray.300"
                  focusBorderColor="#64117e"
                  _placeholder={{ color: "gray.400" }}
                  id="violation-email"
                />
              </FormSection>

              {/* Phone Number */}
              <FormSection title={t("reportViolationForm.phone", "Phone Number")}>
                <Input
                  type="tel"
                  placeholder={t("reportViolationForm.phonePlaceholder", "Your phone number")}
                  value={formData.phone}
                  onChange={handleChange("phone")}
                  variant="flushed"
                  borderColor="gray.300"
                  focusBorderColor="#64117e"
                  _placeholder={{ color: "gray.400" }}
                  id="violation-phone"
                />
              </FormSection>

              {/* First and Last Name */}
              <FormSection title={t("reportViolationForm.fullName", "First and Last Name")}>
                <Input
                  placeholder={t("reportViolationForm.fullNamePlaceholder", "Your name")}
                  value={formData.fullName}
                  onChange={handleChange("fullName")}
                  variant="flushed"
                  borderColor="gray.300"
                  focusBorderColor="#64117e"
                  _placeholder={{ color: "gray.400" }}
                  id="violation-fullname"
                />
              </FormSection>

              {/* Preferred Name */}
              <FormSection title={t("reportViolationForm.preferredName", "Preferred Name")}>
                <Input
                  placeholder={t("reportViolationForm.preferredNamePlaceholder", "Your preferred name")}
                  value={formData.preferredName}
                  onChange={handleChange("preferredName")}
                  variant="flushed"
                  borderColor="gray.300"
                  focusBorderColor="#64117e"
                  _placeholder={{ color: "gray.400" }}
                  id="violation-preferred-name"
                />
              </FormSection>

              {/* Pronoun */}
              <FormSection title={t("reportViolationForm.pronoun", "Pronoun")}>
                <Input
                  placeholder={t("reportViolationForm.pronounPlaceholder", "e.g. they/them, she/her, he/him")}
                  value={formData.pronoun}
                  onChange={handleChange("pronoun")}
                  variant="flushed"
                  borderColor="gray.300"
                  focusBorderColor="#64117e"
                  _placeholder={{ color: "gray.400" }}
                  id="violation-pronoun"
                />
              </FormSection>

              {/* Age */}
              <FormSection title={t("reportViolationForm.age", "Age")}>
                <Input
                  placeholder={t("reportViolationForm.agePlaceholder", "Your age")}
                  value={formData.age}
                  onChange={handleChange("age")}
                  variant="flushed"
                  borderColor="gray.300"
                  focusBorderColor="#64117e"
                  _placeholder={{ color: "gray.400" }}
                  id="violation-age"
                />
              </FormSection>

              {/* Gender Identity */}
              <FormSection title={t("reportViolationForm.genderIdentity", "Gender Identity")}>
                <Input
                  placeholder={t("reportViolationForm.genderIdentityPlaceholder", "Your gender identity")}
                  value={formData.genderIdentity}
                  onChange={handleChange("genderIdentity")}
                  variant="flushed"
                  borderColor="gray.300"
                  focusBorderColor="#64117e"
                  _placeholder={{ color: "gray.400" }}
                  id="violation-gender"
                />
              </FormSection>

              {/* Sexual Orientation */}
              <FormSection title={t("reportViolationForm.sexualOrientation", "Sexual Orientation")}>
                <Input
                  placeholder={t("reportViolationForm.sexualOrientationPlaceholder", "Your sexual orientation")}
                  value={formData.sexualOrientation}
                  onChange={handleChange("sexualOrientation")}
                  variant="flushed"
                  borderColor="gray.300"
                  focusBorderColor="#64117e"
                  _placeholder={{ color: "gray.400" }}
                  id="violation-orientation"
                />
              </FormSection>

              {/* Location */}
              <FormSection title={t("reportViolationForm.location", "Location")}>
                <Input
                  placeholder={t("reportViolationForm.locationPlaceholder", "City, State or Region")}
                  value={formData.location}
                  onChange={handleChange("location")}
                  variant="flushed"
                  borderColor="gray.300"
                  focusBorderColor="#64117e"
                  _placeholder={{ color: "gray.400" }}
                  id="violation-location"
                />
              </FormSection>

              {/* Type of Violation */}
              <FormSection title={t("reportViolationForm.typeOfViolation", "Type of violation")} required>
                <Select
                  placeholder={t("reportViolationForm.selectViolationPlaceholder", "Select type of violation")}
                  value={formData.violationType}
                  onChange={handleChange("violationType")}
                  variant="flushed"
                  borderColor="gray.300"
                  focusBorderColor="#64117e"
                  id="violation-type-select"
                >
                  {VIOLATION_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {t(`reportViolationForm.options.${option}`, option)}
                    </option>
                  ))}
                </Select>
                {formData.violationType === "Other — describe below" && (
                  <Input
                    mt={4}
                    placeholder={t("reportViolationForm.describeOtherPlaceholder", "Describe other violation type here")}
                    value={formData.violationTypeOther}
                    onChange={handleChange("violationTypeOther")}
                    variant="flushed"
                    borderColor="gray.300"
                    focusBorderColor="#64117e"
                    id="violation-type-other-input"
                  />
                )}
              </FormSection>

              {/* Submitting for self? */}
              <FormSection title={t("reportViolationForm.submittingForSelf", "Are you submitting for yourself?")} required>
                <RadioGroup
                  value={formData.submittingForSelf}
                  onChange={handleRadio("submittingForSelf")}
                >
                  <Stack spacing={3}>
                    <Radio value="Yes" colorScheme="purple" id="violation-for-self-yes">
                      {t("reportAbuseForm.yes", "Yes")}
                    </Radio>
                    <Radio value="No" colorScheme="purple" id="violation-for-self-no">
                      {t("reportAbuseForm.no", "No")}
                    </Radio>
                  </Stack>
                </RadioGroup>
              </FormSection>

              {/* Relationship (Conditional) */}
              {formData.submittingForSelf === "No" && (
                <FormSection title={t("reportViolationForm.relationship", "Relationship to the person")} required>
                  <Input
                    placeholder={t("reportViolationForm.relationshipPlaceholder", "e.g. Friend, Parent, Colleague")}
                    value={formData.relationship}
                    onChange={handleChange("relationship")}
                    variant="flushed"
                    borderColor="gray.300"
                    focusBorderColor="#64117e"
                    _placeholder={{ color: "gray.400" }}
                    id="violation-relationship"
                  />
                </FormSection>
              )}

              {/* Type of Incident */}
              <FormSection title={t("reportViolationForm.incidentType", "Type of Incident")}>
                <Input
                  placeholder={t("reportViolationForm.incidentTypePlaceholder", "e.g. Forced medical intervention, verbal harassment, physical assault")}
                  value={formData.incidentType}
                  onChange={handleChange("incidentType")}
                  variant="flushed"
                  borderColor="gray.300"
                  focusBorderColor="#64117e"
                  _placeholder={{ color: "gray.400" }}
                  id="violation-incident-type"
                />
              </FormSection>

              {/* Location of Incident */}
              <FormSection title={t("reportViolationForm.incidentLocation", "Location of incident")}>
                <Input
                  placeholder={t("reportViolationForm.incidentLocationPlaceholder", "Specific facility, neighborhood, or setting")}
                  value={formData.incidentLocation}
                  onChange={handleChange("incidentLocation")}
                  variant="flushed"
                  borderColor="gray.300"
                  focusBorderColor="#64117e"
                  _placeholder={{ color: "gray.400" }}
                  id="violation-incident-location"
                />
              </FormSection>

              {/* Narrative account */}
              <FormSection
                title={t("reportViolationForm.narrative", "Detailed Summary/Narrative account of the Incident (in the person's words where possible)")}
                required
              >
                <Text
                  fontSize="xs"
                  color="gray.500"
                  mb={2}
                  lineHeight="short"
                >
                  {t("reportViolationForm.narrativeHint", "Include: what happened, when, where, who was present, and what was said or done. Note if this is a direct account or third-party account.")}
                </Text>
                <Textarea
                  placeholder={t("reportViolationForm.narrativePlaceholder", "Your detailed account")}
                  value={formData.narrative}
                  onChange={handleChange("narrative")}
                  variant="flushed"
                  borderColor="gray.300"
                  focusBorderColor="#64117e"
                  _placeholder={{ color: "gray.400" }}
                  rows={5}
                  resize="vertical"
                  id="violation-narrative"
                />
              </FormSection>

              {/* Summary of Support Needed */}
              <FormSection
                title={t("reportViolationForm.supportNeeded", "Summary of Support Needed from Intersex Nigeria")}
                required
              >
                <Textarea
                  placeholder={t("reportViolationForm.supportNeededPlaceholder", "e.g. Legal assistance, healthcare navigation, counseling, temporary shelter, safety planning")}
                  value={formData.supportNeeded}
                  onChange={handleChange("supportNeeded")}
                  variant="flushed"
                  borderColor="gray.300"
                  focusBorderColor="#64117e"
                  _placeholder={{ color: "gray.400" }}
                  rows={3}
                  resize="vertical"
                  id="violation-support-needed"
                />
              </FormSection>

              {/* Do you want safeguarding team to contact? */}
              <FormSection
                title={t("reportViolationForm.wantContact", "Do you want the safeguarding team to contact you?")}
                required
              >
                <RadioGroup
                  value={formData.wantContact}
                  onChange={handleRadio("wantContact")}
                >
                  <Stack spacing={3}>
                    <Radio value="Yes" colorScheme="purple" id="violation-contact-yes">
                      {t("reportAbuseForm.yes", "Yes")}
                    </Radio>
                    <Radio value="No" colorScheme="purple" id="violation-contact-no">
                      {t("reportAbuseForm.no", "No")}
                    </Radio>
                  </Stack>
                </RadioGroup>
              </FormSection>

              {/* Privacy Footer */}
              <Box
                bg="rgba(100, 17, 126, 0.06)"
                borderLeft="4px solid #64117e"
                borderRadius="md"
                px={{ base: 4, md: 6 }}
                py={4}
              >
                <Text fontSize={{ base: "14px", md: "15px" }} color="#1d2130">
                  {t(
                    "reportViolationForm.privacyFooter",
                    "The information shared may be used for legal advocacy, policy work, or reporting to human rights bodies, but they are done Anonymously and both places and Name."
                  )}
                </Text>
              </Box>

              {/* Submit Button */}
              <Flex justify="space-between" align="center" pt={2}>
                <FormControl w="auto">
                  <Button
                    text={
                      sending ? <Spinner color="white" size="sm" /> : t("reportForms.submitReport", "Submit Report")
                    }
                    disabled={sending || !isValid}
                    color="white"
                    bg="#64117e"
                    fontSize="16px"
                    px="40px"
                    py="14px"
                    textTransform=""
                    type="submit"
                    _hover={{ bg: "#7b1fa2" }}
                  />
                </FormControl>
                
                <Text
                  as="button"
                  type="button"
                  color="#64117e"
                  fontWeight={600}
                  fontSize="sm"
                  onClick={() => setFormData(initialFormData)}
                  _hover={{ textDecoration: "underline" }}
                  cursor="pointer"
                >
                  {t("reportAbuseForm.clearForm", "Clear form")}
                </Text>
              </Flex>
            </Stack>
          </form>
        </Box>
      </Collapse>
    </Box>
  );
}
