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
  Checkbox,
  CheckboxGroup,
  Stack,
  FormControl,
  Icon,
  Spinner,
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

const INCIDENT_OPTIONS = [
  "Harassment",
  "Discrimination",
  "Bullying",
  "Physical abuse",
  "Sexual abuse",
  "Emotional abuse",
  "Boundary violation",
  "Misconduct during an Intersex Nigeria activity",
  "Online misconduct",
  "Concerns about a staff member or volunteer",
  "Safety risk",
];

const SUPPORT_OPTIONS = [
  "Confidential conversation",
  "Safety planning",
  "Referral to a support service",
  "Follow up with the person affected",
  "Not sure yet",
];

const AGE_OPTIONS = ["Under 18", "18-24", "25-34", "Prefer not to say"];

const initialFormData = {
  fullName: "",
  contactMethod: "",
  reportingFor: "",
  safeTime: "",
  ageRange: "",
  ageRangeOther: "",
  incidentNature: [],
  incidentNatureOther: "",
  description: "",
  personSafe: "",
  needsSupport: "",
  supportType: [],
  supportTypeOther: "",
  wantContact: "",
  permissionToReach: "",
  permissionToReachOther: "",
  additionalInfo: "",
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

export default function ReportAbuseForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState(initialFormData);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: false });
  const toast = useToast();

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleRadio = (field) => (value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckbox = (field) => (values) => {
    setFormData((prev) => ({ ...prev, [field]: values }));
  };

  const isValid =
    formData.reportingFor !== "" &&
    formData.safeTime.trim() !== "" &&
    formData.incidentNature.length > 0 &&
    formData.description.trim() !== "" &&
    formData.needsSupport !== "" &&
    formData.supportType.length > 0;

  const buildEmailBody = () => {
    const lines = [];
    lines.push(`Full Name: ${formData.fullName || "Anonymous"}`);
    lines.push(
      `Preferred Contact Method: ${formData.contactMethod || "Not provided"}`
    );
    lines.push(`Reporting For: ${formData.reportingFor}`);
    lines.push(`Safe Time to Contact: ${formData.safeTime}`);

    const ageDisplay =
      formData.ageRange === "Other"
        ? formData.ageRangeOther || "Other"
        : formData.ageRange || "Not provided";
    lines.push(`Age Range: ${ageDisplay}`);

    const incidents = [...formData.incidentNature];
    if (incidents.includes("Other") && formData.incidentNatureOther) {
      incidents[incidents.indexOf("Other")] =
        `Other: ${formData.incidentNatureOther}`;
    }
    lines.push(`Nature of Incident: ${incidents.join(", ")}`);

    lines.push(`Description: ${formData.description}`);
    lines.push(
      `Is Person Affected Currently Safe: ${formData.personSafe || "Not answered"}`
    );
    lines.push(
      `Needs Immediate Medical/Emotional Support: ${formData.needsSupport}`
    );

    const support = [...formData.supportType];
    if (support.includes("Other") && formData.supportTypeOther) {
      support[support.indexOf("Other")] =
        `Other: ${formData.supportTypeOther}`;
    }
    lines.push(`Type of Support Needed: ${support.join(", ")}`);

    lines.push(
      `Wants Safeguarding Team Contact: ${formData.wantContact || "Not answered"}`
    );

    const permDisplay =
      formData.permissionToReach === "Other"
        ? formData.permissionToReachOther || "Other"
        : formData.permissionToReach || "Not answered";
    lines.push(`Permission to Reach Out to Affected Person: ${permDisplay}`);

    lines.push(
      `Additional Information: ${formData.additionalInfo || "None"}`
    );

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

      // Check if contact method is an email address
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const reporterEmail = formData.contactMethod?.trim();
      const hasValidUserEmail = reporterEmail && emailRegex.test(reporterEmail);

      const incidentDisplay = [...formData.incidentNature];
      if (incidentDisplay.includes("Other") && formData.incidentNatureOther) {
        incidentDisplay[incidentDisplay.indexOf("Other")] = `Other: ${formData.incidentNatureOther}`;
      }

      const supportDisplay = [...formData.supportType];
      if (supportDisplay.includes("Other") && formData.supportTypeOther) {
        supportDisplay[supportDisplay.indexOf("Other")] = `Other: ${formData.supportTypeOther}`;
      }

      const abuseFields = [
        { label: "Full Name", value: formData.fullName || "Anonymous" },
        { label: "Preferred Contact Method", value: formData.contactMethod || "Not provided" },
        { label: "Who are you reporting for?", value: formData.reportingFor },
        { label: "Safe Time to Contact", value: formData.safeTime },
        {
          label: "Age Range",
          value:
            formData.ageRange === "Other"
              ? formData.ageRangeOther || "Other"
              : formData.ageRange || "Not provided",
        },
        { label: "Nature of Incident", value: incidentDisplay.join(", ") },
        { label: "Description of Incident", value: formData.description, isBlock: true },
        { label: "Is Person Affected Currently Safe?", value: formData.personSafe || "Not answered" },
        { label: "Needs Immediate Medical / Emotional Support?", value: formData.needsSupport },
        { label: "Type of Support Needed", value: supportDisplay.join(", ") },
        { label: "Safeguarding Team May Contact?", value: formData.wantContact || "Not answered" },
        {
          label: "Permission to Reach Out to Affected Person",
          value:
            formData.permissionToReach === "Other"
              ? formData.permissionToReachOther || "Other"
              : formData.permissionToReach || "Not answered",
        },
        { label: "Additional Information", value: formData.additionalInfo || "None", isBlock: true },
      ];

      const adminHtml = generateStyledEmailHtml({
        title: "🚨 New Safeguarding Report Submitted",
        badge: "ACTION REQUIRED",
        recipientGreeting: "Safeguarding Team,",
        introText: "A new safeguarding concern has been reported via the Intersex Nigeria website. The submitted details are outlined below:",
        fields: abuseFields,
        isConfidential: true,
      });

      const requests = [
        // 1. Send report to Safeguarding team
        fetch(
          "https://intersex-ng-server-jich.onrender.com/api/send-email",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: {
                subject: "🚨 New Safeguarding Report Submitted",
                from: {
                  name: "Intersex Nigeria Safeguarding",
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

      // 2. If the user provided a valid email, send them a confirmation copy
      if (hasValidUserEmail) {
        const userHtml = generateStyledEmailHtml({
          title: "Safeguarding Report Confirmation",
          badge: "CONFIRMATION & SUBMISSION COPY",
          recipientGreeting: `Hello ${formData.fullName || "Reporter"},`,
          introText: "Thank you for reaching out to Intersex Nigeria. We have received your safeguarding report. Below is a complete copy of the details you submitted for your records:",
          fields: abuseFields,
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
                  subject: "Confirmation & Copy of Your Safeguarding Report - Intersex Nigeria",
                  from: {
                    name: "Intersex Nigeria Safeguarding",
                    email: "reports@intersexnigeria.org",
                  },
                  to: [
                    {
                      email: reporterEmail,
                      name: formData.fullName || "Reporter",
                    },
                  ],
                  text: `Dear ${formData.fullName || "Reporter"},\n\nThank you for reaching out to Intersex Nigeria. We have received your safeguarding report.\n\nBelow is a copy of the details you submitted:\n\n${emailBody}\n\nOur safeguarding team will review this information. Your safety and confidentiality are our highest priority.\n\nWarm regards,\nIntersex Nigeria Safeguarding Team`,
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
        description: t("reportForms.submissionSuccess", "Your report has been submitted successfully."),
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
            : t("reportForms.submissionFailed", "Failed to submit report. Please try again or email reports@intersexnigeria.org directly."),
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
          {t("reportForms.reportSubmitted", "Report Submitted")}
        </Heading>
        <Text color="#1d2130" mb={6} fontSize={{ base: "15px", md: "1rem" }}>
          {t(
            "reportForms.abuseSuccessText",
            "Thank you for filling this form. Your report will be reviewed by the safeguarding team. If you shared contact details, you will hear from us soon. Your safety is our priority."
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
        aria-label="Toggle report abuse form"
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
              {t("reportForms.anonymousReportTitle", "Submit an Anonymous Report")}
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
          <Text
            color="gray.600"
            my={6}
            fontSize={{ base: "13px", md: "0.9rem" }}
            lineHeight="1.6"
          >
            {t(
              "reportAbuseForm.intro",
              "Intersex Nigeria is committed to creating a safe community. This form allows you to report any concern about safety or conduct. You may report for yourself or for someone else. You may stay anonymous. Your information will be kept confidential and only used to protect the people involved. Thank you for speaking up."
            )}
          </Text>

          <Text fontSize="sm" color="red.500" mb={6}>
            {t("reportForms.indicatesRequired", "* Indicates required question")}
          </Text>

          <form onSubmit={handleSubmit}>
        <Stack spacing={6}>
          {/* 1. Full name */}
          <FormSection title={t("reportAbuseForm.fullName", "Full name (optional)")}>
            <Input
              placeholder={t("reportAbuseForm.yourAnswer", "Your answer")}
              value={formData.fullName}
              onChange={handleChange("fullName")}
              variant="flushed"
              borderColor="gray.300"
              focusBorderColor="#64117e"
              _placeholder={{ color: "gray.400" }}
              id="report-full-name"
            />
          </FormSection>

          {/* 2. Contact method */}
          <FormSection title={t("reportAbuseForm.contactMethod", "Preferred method of contact (optional: email or phone)")}>
            <Input
              placeholder={t("reportAbuseForm.yourAnswer", "Your answer")}
              value={formData.contactMethod}
              onChange={handleChange("contactMethod")}
              variant="flushed"
              borderColor="gray.300"
              focusBorderColor="#64117e"
              _placeholder={{ color: "gray.400" }}
              id="report-contact-method"
            />
          </FormSection>

          {/* 3. Who are you reporting for? */}
          <FormSection title={t("reportAbuseForm.reportingFor", "Who are you reporting for?")} required>
            <RadioGroup
              value={formData.reportingFor}
              onChange={handleRadio("reportingFor")}
            >
              <Stack spacing={3}>
                <Radio value="Myself" colorScheme="purple" id="report-for-myself">
                  {t("reportAbuseForm.myself", "Myself")}
                </Radio>
                <Radio value="Someone else" colorScheme="purple" id="report-for-other">
                  {t("reportAbuseForm.someoneElse", "Someone else")}
                </Radio>
              </Stack>
            </RadioGroup>
          </FormSection>

          {/* 4. Safe time to contact */}
          <FormSection title={t("reportAbuseForm.safeTime", "What is a safe time to contact you")} required>
            <Input
              placeholder={t("reportAbuseForm.yourAnswer", "Your answer")}
              value={formData.safeTime}
              onChange={handleChange("safeTime")}
              variant="flushed"
              borderColor="gray.300"
              focusBorderColor="#64117e"
              _placeholder={{ color: "gray.400" }}
              id="report-safe-time"
            />
          </FormSection>

          {/* 5. Age range */}
          <FormSection title={t("reportAbuseForm.ageRange", "What is your age range?")}>
            <RadioGroup
              value={formData.ageRange}
              onChange={handleRadio("ageRange")}
            >
              <Stack spacing={3}>
                {AGE_OPTIONS.map((opt) => (
                  <Radio key={opt} value={opt} colorScheme="purple">
                    {t(`reportAbuseForm.ageOptions.${opt}`, opt)}
                  </Radio>
                ))}
                <Flex align="center" gap={3}>
                  <Radio value="Other" colorScheme="purple" id="report-age-other">
                    {t("reportAbuseForm.otherColon", "Other:")}
                  </Radio>
                  {formData.ageRange === "Other" && (
                    <Input
                      placeholder=""
                      value={formData.ageRangeOther}
                      onChange={handleChange("ageRangeOther")}
                      variant="flushed"
                      borderColor="gray.300"
                      focusBorderColor="#64117e"
                      size="sm"
                      maxW="200px"
                      id="report-age-other-input"
                    />
                  )}
                </Flex>
              </Stack>
            </RadioGroup>
          </FormSection>

          {/* 6. Nature of incident */}
          <FormSection title={t("reportAbuseForm.natureOfIncident", "Nature of the incident")} required>
            <CheckboxGroup
              value={formData.incidentNature}
              onChange={handleCheckbox("incidentNature")}
            >
              <Stack spacing={3}>
                {INCIDENT_OPTIONS.map((opt) => (
                  <Checkbox key={opt} value={opt} colorScheme="purple">
                    {t(`reportAbuseForm.incidentOptions.${opt}`, opt)}
                  </Checkbox>
                ))}
                <Flex align="center" gap={3}>
                  <Checkbox value="Other" colorScheme="purple" id="report-incident-other">
                    {t("reportAbuseForm.otherColon", "Other:")}
                  </Checkbox>
                  {formData.incidentNature.includes("Other") && (
                    <Input
                      placeholder=""
                      value={formData.incidentNatureOther}
                      onChange={handleChange("incidentNatureOther")}
                      variant="flushed"
                      borderColor="gray.300"
                      focusBorderColor="#64117e"
                      size="sm"
                      maxW="300px"
                      id="report-incident-other-input"
                    />
                  )}
                </Flex>
              </Stack>
            </CheckboxGroup>
          </FormSection>

          {/* 7. Description */}
          <FormSection
            title={t("reportAbuseForm.describeIncident", "Please describe what happened in your own words.")}
            required
          >
            <Textarea
              placeholder={t("reportAbuseForm.yourAnswer", "Your answer")}
              value={formData.description}
              onChange={handleChange("description")}
              variant="flushed"
              borderColor="gray.300"
              focusBorderColor="#64117e"
              _placeholder={{ color: "gray.400" }}
              rows={5}
              resize="vertical"
              id="report-description"
            />
          </FormSection>

          {/* 8. Is person safe? */}
          <FormSection title={t("reportAbuseForm.personSafe", "Is the person affected currently safe?")}>
            <RadioGroup
              value={formData.personSafe}
              onChange={handleRadio("personSafe")}
            >
              <Stack spacing={3}>
                <Radio value="Yes" colorScheme="purple">
                  {t("reportAbuseForm.yes", "Yes")}
                </Radio>
                <Radio value="No" colorScheme="purple">
                  {t("reportAbuseForm.no", "No")}
                </Radio>
                <Radio value="Maybe" colorScheme="purple">
                  {t("reportAbuseForm.maybe", "Maybe")}
                </Radio>
              </Stack>
            </RadioGroup>
          </FormSection>

          {/* 9. Needs immediate support? */}
          <FormSection
            title={t("reportAbuseForm.needsImmediateSupport", "Does anyone need immediate medical or emotional support?")}
            required
          >
            <RadioGroup
              value={formData.needsSupport}
              onChange={handleRadio("needsSupport")}
            >
              <Stack spacing={3}>
                <Radio value="Yes" colorScheme="purple">
                  {t("reportAbuseForm.yes", "Yes")}
                </Radio>
                <Radio value="No" colorScheme="purple">
                  {t("reportAbuseForm.no", "No")}
                </Radio>
                <Radio value="Maybe" colorScheme="purple">
                  {t("reportAbuseForm.maybe", "Maybe")}
                </Radio>
              </Stack>
            </RadioGroup>
          </FormSection>

          {/* 10. Type of support needed */}
          <FormSection title={t("reportAbuseForm.supportType", "What type of support is needed?")} required>
            <CheckboxGroup
              value={formData.supportType}
              onChange={handleCheckbox("supportType")}
            >
              <Stack spacing={3}>
                {SUPPORT_OPTIONS.map((opt) => (
                  <Checkbox key={opt} value={opt} colorScheme="purple">
                    {t(`reportAbuseForm.supportOptions.${opt}`, opt)}
                  </Checkbox>
                ))}
                <Flex align="center" gap={3}>
                  <Checkbox value="Other" colorScheme="purple" id="report-support-other">
                    {t("reportAbuseForm.otherColon", "Other:")}
                  </Checkbox>
                  {formData.supportType.includes("Other") && (
                    <Input
                      placeholder=""
                      value={formData.supportTypeOther}
                      onChange={handleChange("supportTypeOther")}
                      variant="flushed"
                      borderColor="gray.300"
                      focusBorderColor="#64117e"
                      size="sm"
                      maxW="300px"
                      id="report-support-other-input"
                    />
                  )}
                </Flex>
              </Stack>
            </CheckboxGroup>
          </FormSection>

          {/* 11. Want contact? */}
          <FormSection title={t("reportAbuseForm.wantContact", "Do you want the safeguarding team to contact you?")}>
            <RadioGroup
              value={formData.wantContact}
              onChange={handleRadio("wantContact")}
            >
              <Stack spacing={3}>
                <Radio value="Yes" colorScheme="purple">
                  {t("reportAbuseForm.yes", "Yes")}
                </Radio>
                <Radio value="No" colorScheme="purple">
                  {t("reportAbuseForm.no", "No")}
                </Radio>
              </Stack>
            </RadioGroup>
          </FormSection>

          {/* 12. Permission to reach out */}
          <FormSection title={t("reportAbuseForm.permissionToReach", "If you are reporting on behalf of someone else, do you give permission for the safeguarding team to reach out to them if safe?")}>
            <RadioGroup
              value={formData.permissionToReach}
              onChange={handleRadio("permissionToReach")}
            >
              <Stack spacing={3}>
                <Radio value="Yes" colorScheme="purple">
                  {t("reportAbuseForm.yes", "Yes")}
                </Radio>
                <Radio value="No" colorScheme="purple">
                  {t("reportAbuseForm.no", "No")}
                </Radio>
                <Radio value="Not yet" colorScheme="purple">
                  {t("reportAbuseForm.notYet", "Not yet")}
                </Radio>
                <Flex align="center" gap={3}>
                  <Radio value="Other" colorScheme="purple" id="report-permission-other">
                    {t("reportAbuseForm.otherColon", "Other:")}
                  </Radio>
                  {formData.permissionToReach === "Other" && (
                    <Input
                      placeholder=""
                      value={formData.permissionToReachOther}
                      onChange={handleChange("permissionToReachOther")}
                      variant="flushed"
                      borderColor="gray.300"
                      focusBorderColor="#64117e"
                      size="sm"
                      maxW="200px"
                      id="report-permission-other-input"
                    />
                  )}
                </Flex>
              </Stack>
            </RadioGroup>
          </FormSection>

          {/* 13. Additional info */}
          <FormSection title={t("reportAbuseForm.additionalInfo", "Would you like to add something else?")}>
            <Input
              placeholder={t("reportAbuseForm.yourAnswer", "Your answer")}
              value={formData.additionalInfo}
              onChange={handleChange("additionalInfo")}
              variant="flushed"
              borderColor="gray.300"
              focusBorderColor="#64117e"
              _placeholder={{ color: "gray.400" }}
              id="report-additional-info"
            />
          </FormSection>

          {/* Closing message */}
          <Box
            bg="rgba(100, 17, 126, 0.06)"
            borderLeft="4px solid #64117e"
            borderRadius="md"
            px={{ base: 4, md: 6 }}
            py={4}
          >
            <Text fontSize={{ base: "14px", md: "15px" }} color="#1d2130">
              {t(
                "reportAbuseForm.closingNote",
                "Thank you for filling this form. Your report will be reviewed by the safeguarding team. If you shared contact details, you will hear from us soon. Your safety is our priority."
              )}
            </Text>
          </Box>

          {/* Submit + Clear */}
          <Flex
            justify="space-between"
            align="center"
            pt={2}
            flexDir={{ base: "column", sm: "row" }}
            gap={4}
          >
            <FormControl w="auto">
              <Button
                text={
                  sending ? <Spinner color="white" size="sm" /> : t("reportForms.submitReport", "Submit")
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
