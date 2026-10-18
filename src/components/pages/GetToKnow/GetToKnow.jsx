/* eslint-disable react/no-unescaped-entities */
import { useState, useCallback, useRef } from "react";
import { Box, Spinner, useToast } from "@chakra-ui/react";
import {
  FiUser,
  FiFileText,
  FiHeart,
  FiCheckCircle,
  FiUploadCloud,
  FiShield,
  FiX,
} from "react-icons/fi";
import {
  generateStyledEmailHtml,
  encodeBase64Html,
} from "../../../utils/emailTemplate";
import { useTranslation } from "react-i18next";

const NIGERIAN_STATES = [
  "Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno",
  "Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","FCT (Abuja)","Gombe",
  "Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos",
  "Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto",
  "Taraba","Yobe","Zamfara",
];

const STEP_LABELS = ["Welcome", "About You", "Your Story", "Final"];

const initialFormState = {
  // Page 2 – Personal info
  legalName: "",
  preferredName: "",
  dob: "",
  age: "",
  phone: "",
  email: "",
  stateOfOrigin: "",
  currentLocation: "",
  gender: "",
  sexualOrientation: "",
  pronouns: "",
  howHeard: "",
  howHeardOther: "",
  selfIdentify: "",

  // Page 3 – Physical / lived experience
  uploadedFile: null,
  variationDescription: "",
  livedExperience: "",
  challenges: "",
  whyConnect: "",
  supportAreas: "",
  anythingElse: "",

  // Page 4 – Final
  previousEngagement: "",
  consentReachOut: "",
};

export default function GetToKnow() {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [consentGiven, setConsentGiven] = useState(null);
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef(null);
  const toast = useToast();

  // ───── helpers ─────
  const updateField = useCallback((field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }, []);

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  // ───── validation per step ─────
  const validateStep2 = () => {
    const e = {};
    if (!formData.legalName.trim()) e.legalName = t("getToKnow.nameRequired", "Name is required");
    if (!formData.preferredName.trim()) e.preferredName = t("getToKnow.prefNameRequired", "Preferred name is required");
    if (!formData.dob) e.dob = t("getToKnow.dobRequired", "Date of birth is required");
    if (!formData.phone.trim()) e.phone = t("getToKnow.phoneRequired", "Phone number is required");
    if (!formData.email.trim()) e.email = t("getToKnow.emailRequired", "Email is required");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = t("getToKnow.emailInvalid", "Enter a valid email");
    if (!formData.stateOfOrigin) e.stateOfOrigin = t("getToKnow.stateRequired", "State of origin is required");
    if (!formData.currentLocation.trim()) e.currentLocation = t("getToKnow.locationRequired", "Current location is required");
    if (!formData.gender.trim()) e.gender = t("getToKnow.genderRequired", "Gender is required");
    if (!formData.sexualOrientation.trim()) e.sexualOrientation = t("getToKnow.sexOrientationRequired", "Sexual orientation is required");
    if (!formData.pronouns.trim()) e.pronouns = t("getToKnow.pronounsRequired", "Pronouns are required");
    if (!formData.howHeard) e.howHeard = t("getToKnow.selectOption", "Please select an option");
    if (formData.howHeard === "Others" && !formData.howHeardOther.trim()) e.howHeardOther = t("getToKnow.specifyRequired", "Please specify");
    if (!formData.selfIdentify) e.selfIdentify = t("getToKnow.selectOption", "Please select an option");
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep3 = () => {
    const e = {};
    if (!formData.variationDescription.trim()) e.variationDescription = t("getToKnow.fieldRequired", "This field is required");
    if (!formData.livedExperience.trim()) e.livedExperience = t("getToKnow.fieldRequired", "This field is required");
    if (!formData.challenges.trim()) e.challenges = t("getToKnow.fieldRequired", "This field is required");
    if (!formData.whyConnect.trim()) e.whyConnect = t("getToKnow.fieldRequired", "This field is required");
    if (!formData.supportAreas.trim()) e.supportAreas = t("getToKnow.fieldRequired", "This field is required");
    if (!formData.anythingElse.trim()) e.anythingElse = t("getToKnow.fieldRequired", "This field is required");
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep4 = () => {
    const e = {};
    if (!formData.previousEngagement.trim()) e.previousEngagement = t("getToKnow.fieldRequired", "This field is required");
    if (!formData.consentReachOut) e.consentReachOut = t("getToKnow.selectOption", "Please select an option");
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // ───── navigation ─────
  const goNext = () => {
    if (step === 2 && !validateStep2()) return;
    if (step === 3 && !validateStep3()) return;
    // If selfIdentify is 'No', skip to page 4 directly
    if (step === 2 && formData.selfIdentify === "No") {
      setStep(4);
      scrollTop();
      return;
    }
    setStep((s) => s + 1);
    scrollTop();
  };

  const goBack = () => {
    // If coming back to step 2 from step 4 and selfIdentify was 'No', skip step 3
    if (step === 4 && formData.selfIdentify === "No") {
      setStep(2);
      scrollTop();
      return;
    }
    setStep((s) => s - 1);
    scrollTop();
  };

  // ───── submit ─────
  const handleSubmit = async () => {
    if (!validateStep4()) return;
    setSubmitting(true);

    try {
      const currentYear = new Date().getFullYear();

      // Calculate age from DOB
      const dobDate = new Date(formData.dob);
      const today = new Date();
      let calculatedAge = today.getFullYear() - dobDate.getFullYear();
      const m = today.getMonth() - dobDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) calculatedAge--;

      // Build email body as message content
      const lines = [];
      lines.push("═══ PERSONAL INFORMATION ═══");
      lines.push(`Legal Name: ${formData.legalName}`);
      lines.push(`Preferred Name: ${formData.preferredName}`);
      lines.push(`Date of Birth: ${formData.dob}`);
      lines.push(`Age: ${calculatedAge}`);
      lines.push(`Phone: ${formData.phone}`);
      lines.push(`Email: ${formData.email}`);
      lines.push(`State of Origin: ${formData.stateOfOrigin}`);
      lines.push(`Current Location: ${formData.currentLocation}`);
      lines.push(`Gender: ${formData.gender}`);
      lines.push(`Sexual Orientation: ${formData.sexualOrientation}`);
      lines.push(`Pronouns: ${formData.pronouns}`);
      lines.push("");
      lines.push(`How they heard about "intersex": ${formData.howHeard}${formData.howHeard === "Others" ? ` — ${formData.howHeardOther}` : ""}`);
      lines.push(`Self-identifies as intersex: ${formData.selfIdentify}`);

      if (formData.selfIdentify !== "No") {
        lines.push("");
        lines.push("═══ PHYSICAL INDICATORS / LIVED EXPERIENCE ═══");
        lines.push(`Variation Description & Age of Discovery: ${formData.variationDescription}`);
        lines.push(`Lived Experience: ${formData.livedExperience}`);
        lines.push(`Challenges Faced: ${formData.challenges}`);
        lines.push(`Why They Connected With Intersex Nigeria: ${formData.whyConnect}`);
        lines.push(`Areas of Support Needed: ${formData.supportAreas}`);
        lines.push(`Anything Else: ${formData.anythingElse}`);
      }

      lines.push("");
      lines.push("═══ FINAL ═══");
      lines.push(`Previous Engagement with Intersex Organisations: ${formData.previousEngagement}`);
      lines.push(`Consent to Reach Out: ${formData.consentReachOut}`);

      const emailBody = lines.join("\n");

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const userEmail = formData.email?.trim();
      const hasValidUserEmail = userEmail && emailRegex.test(userEmail);

      const getToKnowFields = [
        { label: "Legal Name", value: formData.legalName },
        { label: "Preferred Name", value: formData.preferredName || "Not provided" },
        { label: "Pronouns", value: formData.pronouns || "Not provided" },
        { label: "Date of Birth", value: formData.dob || "Not provided" },
        { label: "Email Address", value: formData.email || "Not provided" },
        { label: "Phone Number", value: formData.phone || "Not provided" },
        { label: "State / City of Residence", value: formData.stateResidence || "Not provided" },
        { label: "Country of Residence", value: formData.countryResidence || "Not provided" },
        { label: "Are You Intersex?", value: formData.isIntersex || "Not answered" },
        { label: "Intersex Variation Known", value: formData.variationKnown || "Not answered" },
        { label: "Variation Description", value: formData.variationDesc, isBlock: true },
        { label: "Areas of Support Needed", value: formData.supportAreas, isBlock: true },
        { label: "Anything Else", value: formData.anythingElse, isBlock: true },
        { label: "Previous Engagement with Intersex Orgs", value: formData.previousEngagement },
        { label: "Consent to Reach Out", value: formData.consentReachOut },
      ];

      const adminHtml = generateStyledEmailHtml({
        title: "GET TO KNOW - New Submission",
        badge: "COMMUNITY INTAKE",
        recipientGreeting: "Safeguarding Team,",
        introText: "A new community member has completed the 'Get To Know' intake form. Details are outlined below:",
        fields: getToKnowFields,
        isConfidential: true,
      });

      const requests = [
        // 1. Send submission to Safeguarding team
        fetch(
          "https://intersex-ng-server-jich.onrender.com/api/send-email",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: {
                subject: "GET TO KNOW - New Submission",
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

      // 2. If user email is valid, send them a confirmation copy
      if (hasValidUserEmail) {
        const userHtml = generateStyledEmailHtml({
          title: "Get To Know - Submission Confirmation",
          badge: "CONFIRMATION & COPY",
          recipientGreeting: `Hello ${formData.preferredName || formData.legalName || "Friend"},`,
          introText: "Thank you for sharing your story and connecting with Intersex Nigeria. We have received your submission. Below is a copy of the information you provided for your records:",
          fields: getToKnowFields,
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
                  subject: "Confirmation & Copy of Your Submission - Intersex Nigeria",
                  from: {
                    name: "Intersex Nigeria",
                    email: "reports@intersexnigeria.org",
                  },
                  to: [
                    {
                      email: userEmail,
                      name: formData.preferredName || formData.legalName || "Member",
                    },
                  ],
                  text: `Dear ${formData.preferredName || formData.legalName || "Friend"},\n\nThank you for sharing your information with Intersex Nigeria. We have received your submission.\n\nBelow is a copy of the details you submitted:\n\n${emailBody}\n\nWarm regards,\nIntersex Nigeria Team`,
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
        throw new Error(serverErrorMsg || "Failed to submit form");
      }

      setSubmitted(true);
      scrollTop();
    } catch (error) {
      console.error("GetToKnow submission error:", error);
      toast({
        description:
          error.message && error.message !== "Failed to submit form"
            ? `Submission failed: ${error.message}. Please try again.`
            : "Failed to submit form. Please try again.",
        status: "error",
        duration: 6000,
        isClosable: true,
        position: "top",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // ───── compute calculated age for display ─────
  const getAge = () => {
    if (!formData.dob) return "";
    const dob = new Date(formData.dob);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
    return age >= 0 ? age : "";
  };

  // ═══════════════════ RENDER ═══════════════════

  // ─── Progress Stepper ───
  const renderStepper = () => {
    const stepLabels = [
      t("getToKnow.stepperWelcome", "Welcome"),
      t("getToKnow.stepperAbout", "About You"),
      t("getToKnow.stepperStory", "Your Story"),
      t("getToKnow.stepperFinal", "Final"),
    ];

    return (
      <div className="gtk-stepper">
        {stepLabels.map((label, idx) => {
          const stepNum = idx + 1;
          const isActive = stepNum === step;
          const isCompleted = stepNum < step;
          return (
            <div className="gtk-step" key={label}>
              <div
                className={`gtk-step-circle ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""}`}
              >
                {isCompleted ? "✓" : stepNum}
                <span className="gtk-step-label">{label}</span>
              </div>
              {idx < stepLabels.length - 1 && (
                <div className={`gtk-step-line ${isCompleted ? "completed" : ""}`} />
              )}
            </div>
          );
        })}
      </div>
    );
  };

  // ─── Field helper ───
  const renderField = (label, field, type = "text", placeholder = "") => (
    <div className="gtk-field-group">
      <label className="gtk-field-label">
        {label} <span className="gtk-required">*</span>
      </label>
      <input
        className={`gtk-input ${errors[field] ? "error" : ""}`}
        type={type}
        placeholder={placeholder}
        value={formData[field]}
        onChange={(e) => updateField(field, e.target.value)}
        id={`gtk-${field}`}
      />
      {errors[field] && <div className="gtk-error-msg">⚠ {errors[field]}</div>}
    </div>
  );

  const renderTextarea = (label, field, placeholder = "") => (
    <div className="gtk-field-group">
      <label className="gtk-field-label">
        {label} <span className="gtk-required">*</span>
      </label>
      <textarea
        className={`gtk-textarea ${errors[field] ? "error" : ""}`}
        placeholder={placeholder}
        value={formData[field]}
        onChange={(e) => updateField(field, e.target.value)}
        id={`gtk-${field}`}
      />
      {errors[field] && <div className="gtk-error-msg">⚠ {errors[field]}</div>}
    </div>
  );

  const renderRadio = (field, options, labelsMap = {}) => (
    <div className="gtk-radio-group">
      {options.map((opt) => (
        <label
          key={opt}
          className={`gtk-radio-label ${formData[field] === opt ? "selected" : ""}`}
        >
          <input
            type="radio"
            name={field}
            value={opt}
            checked={formData[field] === opt}
            onChange={() => updateField(field, opt)}
          />
          {labelsMap[opt] || opt}
        </label>
      ))}
      {errors[field] && <div className="gtk-error-msg">⚠ {errors[field]}</div>}
    </div>
  );

  // ═══════════════════ PAGES ═══════════════════

  // ─── PAGE 1: Welcome & Consent ───
  const renderPage1 = () => (
    <div className="gtk-card" key="page1">
      <div className="gtk-card-title">
        <span className="gtk-card-title-icon"><FiShield /></span>
        {t("getToKnow.welcomeTitle", "Welcome")}
      </div>

      <div className="gtk-section-divider" />

      <p className="gtk-welcome-text">
        {t(
          "getToKnow.welcomeP1",
          "Thank you for taking this step to connect with us. We understand it may have taken courage to reach out. This is a safe and affirming space. We honour your trust and are here to support you — whatever stage of your journey you are at."
        )}
      </p>

      <p className="gtk-welcome-text">
        {t(
          "getToKnow.welcomeP2",
          "To maintain the integrity and safety of all, the GET TO KNOW documents helps us protect our community members and also ensure a safe and secure space for you and helps us map out exactly what kind of support (medical, legal, emotional, or emergency) you need right now."
        )}
      </p>

      <div className="gtk-notice-box purple">
        {t(
          "getToKnow.confidentialNotice",
          "The information shared and data collected is confidential and protected under Intersex Nigeria's safeguarding and data policies."
        )}
      </div>

      {/* Consent */}
      <div className="gtk-consent-section">
        <div className="gtk-consent-title">
          {t("getToKnow.consentTitle", "Data Protection Consent")} <span className="required-badge">{t("getToKnow.required", "Required")}</span>
        </div>
        <p className="gtk-consent-text">
          {t(
            "getToKnow.consentText",
            "\"I understand that the information provided here will be stored securely and used solely for the purpose of community building in Intersex Nigeria.\""
          )}
        </p>

        <div className="gtk-radio-group">
          <label className={`gtk-radio-label ${consentGiven === true ? "selected" : ""}`}>
            <input
              type="radio"
              name="consent"
              checked={consentGiven === true}
              onChange={() => setConsentGiven(true)}
            />
            {t("getToKnow.consentYes", "Yes, I consent.")}
          </label>
          <label className={`gtk-radio-label ${consentGiven === false ? "selected" : ""}`}>
            <input
              type="radio"
              name="consent"
              checked={consentGiven === false}
              onChange={() => setConsentGiven(false)}
            />
            {t("getToKnow.consentNo", "No, I do not consent.")}
          </label>
        </div>
      </div>

      <div className="gtk-notice-box">
        {t(
          "getToKnow.ownLanguageNotice",
          "We advise that in filling out the form you use your own language, terminology, voice, and writing, and reduce the use of AI."
        )}
      </div>

      <div className="gtk-buttons" style={{ justifyContent: "flex-end" }}>
        <button
          className="gtk-btn gtk-btn-primary"
          disabled={consentGiven === null}
          onClick={() => {
            if (consentGiven === false) {
              setStep("denied");
            } else {
              goNext();
            }
          }}
        >
          {t("getToKnow.continueBtn", "Continue")} →
        </button>
      </div>
    </div>
  );

  // ─── DENIED PAGE ───
  const renderDenied = () => (
    <div className="gtk-card" key="denied">
      <div className="gtk-denied">
        <div className="gtk-denied-icon">⚠️</div>
        <h2 className="gtk-denied-title">{t("getToKnow.deniedTitle", "Consent Required")}</h2>
        <p className="gtk-denied-text">
          {t(
            "getToKnow.deniedP1",
            "We respect your decision. Unfortunately, we are unable to proceed without your consent to our data protection policy. This is to ensure the safety and security of all community members."
          )}
        </p>
        <p className="gtk-denied-text">
          {t(
            "getToKnow.deniedP2",
            "If you change your mind, you are welcome to return at any time. We are always here for you."
          )}
        </p>
        <button
          className="gtk-btn gtk-btn-secondary"
          onClick={() => {
            setConsentGiven(null);
            setStep(1);
          }}
        >
          ← {t("getToKnow.backBtn", "Back")}
        </button>
      </div>
    </div>
  );

  // ─── PAGE 2: Personal Information ───
  const renderPage2 = () => {
    const howHeardLabels = {
      "From a medical professional": t("getToKnow.howHeardMed", "From a medical professional"),
      "From family/parents": t("getToKnow.howHeardFamily", "From family/parents"),
      "Online or through media/Social media": t("getToKnow.howHeardMedia", "Online or through media/Social media"),
      "Intersex Nigeria/another advocacy group/organization": t("getToKnow.howHeardOrg", "Intersex Nigeria/another advocacy group/organization"),
      "Others": t("getToKnow.howHeardOthers", "Others"),
    };

    const selfIdentifyLabels = {
      "Yes": t("common.yes", "Yes"),
      "I am currently questioning or exploring this": t("getToKnow.selfIdentifyExploring", "I am currently questioning or exploring this"),
      "No": t("common.no", "No"),
    };

    return (
      <div className="gtk-card" key="page2">
        <div className="gtk-card-title">
          <span className="gtk-card-title-icon"><FiUser /></span>
          {t("getToKnow.personalInfoTitle", "Personal Information")}
        </div>
        <p className="gtk-card-description">
          {t("getToKnow.personalInfoDesc", "About you — please provide your safe contact details.")}
        </p>

        <div className="gtk-section-divider" />

        {renderField(
          t("getToKnow.legalNameLabel", "Name (as appeared in your documents)"),
          "legalName",
          "text",
          t("getToKnow.legalNamePlaceholder", "Enter your legal name")
        )}
        {renderField(
          t("getToKnow.preferredNameLabel", "Preferred Name"),
          "preferredName",
          "text",
          t("getToKnow.preferredNamePlaceholder", "What would you like to be called?")
        )}

        <div className="gtk-two-col">
          <div className="gtk-field-group">
            <label className="gtk-field-label">
              {t("getToKnow.dobLabel", "Date of Birth")} <span className="gtk-required">*</span>
            </label>
            <input
              className={`gtk-input ${errors.dob ? "error" : ""}`}
              type="date"
              value={formData.dob}
              onChange={(e) => updateField("dob", e.target.value)}
              id="gtk-dob"
            />
            {errors.dob && <div className="gtk-error-msg">⚠ {errors.dob}</div>}
          </div>
          <div className="gtk-field-group">
            <label className="gtk-field-label">{t("getToKnow.ageLabel", "Age")}</label>
            <input
              className="gtk-input"
              type="text"
              value={getAge()}
              readOnly
              placeholder={t("getToKnow.agePlaceholder", "Auto-calculated")}
              style={{ background: "#f5f0f8", cursor: "default" }}
            />
          </div>
        </div>

        {renderField(
          t("getToKnow.phoneLabel", "Phone Number (WhatsApp preferred)"),
          "phone",
          "tel",
          t("getToKnow.phonePlaceholder", "Enter your phone number")
        )}
        {renderField(
          t("getToKnow.emailLabel", "Email Address"),
          "email",
          "email",
          t("getToKnow.emailPlaceholder", "Enter your email address")
        )}

        <div className="gtk-field-group">
          <label className="gtk-field-label">
            {t("getToKnow.stateOfOriginLabel", "State of Origin")} <span className="gtk-required">*</span>
          </label>
          <select
            className={`gtk-select ${errors.stateOfOrigin ? "error" : ""}`}
            value={formData.stateOfOrigin}
            onChange={(e) => updateField("stateOfOrigin", e.target.value)}
            id="gtk-stateOfOrigin"
          >
            <option value="">{t("getToKnow.selectState", "Select your state")}</option>
            {NIGERIAN_STATES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.stateOfOrigin && <div className="gtk-error-msg">⚠ {errors.stateOfOrigin}</div>}
        </div>

        {renderField(
          t("getToKnow.locationLabel", "Location (where you are presently residing)"),
          "currentLocation",
          "text",
          t("getToKnow.locationPlaceholder", "City, State")
        )}
        {renderField(
          t("getToKnow.genderLabel", "Gender"),
          "gender",
          "text",
          t("getToKnow.genderPlaceholder", "Enter your gender")
        )}
        {renderField(
          t("getToKnow.sexualOrientationLabel", "Sexual Orientation"),
          "sexualOrientation",
          "text",
          t("getToKnow.sexualOrientationPlaceholder", "Enter your sexual orientation")
        )}
        {renderField(
          t("getToKnow.pronounsLabel", "Pronouns"),
          "pronouns",
          "text",
          t("getToKnow.pronounsPlaceholder", "e.g. he/him, she/her, they/them")
        )}

        <div className="gtk-section-divider" />

        {/* How did you hear */}
        <div className="gtk-field-group">
          <label className="gtk-field-label">
            {t(
              "getToKnow.howHeardLabel",
              "How did you first come across the term \"intersex\" or \"variations in sex characteristics\" in relation to yourself?"
            )} <span className="gtk-required">*</span>
          </label>
          {renderRadio(
            "howHeard",
            [
              "From a medical professional",
              "From family/parents",
              "Online or through media/Social media",
              "Intersex Nigeria/another advocacy group/organization",
              "Others",
            ],
            howHeardLabels
          )}
          {formData.howHeard === "Others" && (
            <div className="gtk-other-input">
              <input
                className={`gtk-input ${errors.howHeardOther ? "error" : ""}`}
                type="text"
                placeholder={t("getToKnow.specifyPlaceholder", "Please specify...")}
                value={formData.howHeardOther}
                onChange={(e) => updateField("howHeardOther", e.target.value)}
              />
              {errors.howHeardOther && <div className="gtk-error-msg">⚠ {errors.howHeardOther}</div>}
            </div>
          )}
        </div>

        <div className="gtk-section-divider" />

        {/* Self Identify */}
        <div className="gtk-field-group">
          <label className="gtk-field-label">
            {t("getToKnow.selfIdentifyLabel", "Do you openly self-identify as having an intersex variation?")} <span className="gtk-required">*</span>
          </label>
          {renderRadio(
            "selfIdentify",
            [
              "Yes",
              "I am currently questioning or exploring this",
              "No",
            ],
            selfIdentifyLabels
          )}
        </div>

        {formData.selfIdentify === "No" && (
          <div className="gtk-notice-box">
            {t("getToKnow.selfIdentifyNoNotice", "Since you selected \"No\", you will be directed to the final page of the form.")}
          </div>
        )}

        <div className="gtk-buttons">
          <button className="gtk-btn gtk-btn-secondary" onClick={goBack}>
            ← {t("getToKnow.backBtn", "Back")}
          </button>
          <button className="gtk-btn gtk-btn-primary" onClick={goNext}>
            {t("getToKnow.continueBtn", "Continue")} →
          </button>
        </div>
      </div>
    );
  };

  // ─── PAGE 3: Physical Indicators / Story ───
  const renderPage3 = () => (
    <div className="gtk-card" key="page3">
      <div className="gtk-card-title">
        <span className="gtk-card-title-icon"><FiFileText /></span>
        {t("getToKnow.physicalIndicatorsTitle", "Physical Indicators")}
      </div>
      <p className="gtk-card-description">
        {t("getToKnow.physicalIndicatorsDesc", "Your medical and physical history — share in your own words.")}
      </p>

      <div className="gtk-section-divider" />

      {/* File Upload */}
      <div className="gtk-field-group">
        <label className="gtk-field-label">
          {t("getToKnow.attachDocLabel", "Attach a document or file (optional)")}
        </label>
        <div
          className="gtk-file-upload"
          onClick={() => fileRef.current?.click()}
        >
          <div className="gtk-file-upload-icon"><FiUploadCloud /></div>
          <p className="gtk-file-upload-text">
            <strong>{t("getToKnow.clickToUpload", "Click to upload")}</strong> {t("getToKnow.orDragDrop", "or drag and drop")}
          </p>
          <p className="gtk-file-upload-text" style={{ fontSize: "0.8rem", marginTop: "0.25rem" }}>
            {t("getToKnow.fileFormats", "PDF, DOC, JPG, PNG (max 10MB)")}
          </p>
          {formData.uploadedFile && (
            <div className="gtk-file-name">
              📎 {formData.uploadedFile.name}
              <span
                style={{ cursor: "pointer", marginLeft: "0.5rem" }}
                onClick={(e) => {
                  e.stopPropagation();
                  updateField("uploadedFile", null);
                }}
              >
                <FiX />
              </span>
            </div>
          )}
        </div>
        <input
          ref={fileRef}
          type="file"
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          style={{ display: "none" }}
          onChange={(e) => {
            if (e.target.files?.[0]) updateField("uploadedFile", e.target.files[0]);
          }}
        />
      </div>

      {renderTextarea(
        t("getToKnow.qVariation", "How do you prefer to describe your variation and at what age did you get to know?"),
        "variationDescription",
        t("getToKnow.qVariationPlaceholder", "Use the terminology and knowledge you are most comfortable with...")
      )}

      {renderTextarea(
        t("getToKnow.qLivedExp", "In your own words, could you briefly describe your lived experience as an intersex person growing up?"),
        "livedExperience",
        t("getToKnow.qLivedExpPlaceholder", "Share your experience...")
      )}

      {renderTextarea(
        t("getToKnow.qChallenges", "Many intersex individuals face unique challenges navigating life in Nigeria. Have you experienced any of these challenges?"),
        "challenges",
        t("getToKnow.qChallengesPlaceholder", "Describe any challenges you have faced...")
      )}

      {renderTextarea(
        t("getToKnow.qWhyConnect", "Can you briefly share what specific challenges or what drew you to connect with Intersex Nigeria?"),
        "whyConnect",
        t("getToKnow.qWhyConnectPlaceholder", "This helps us understand your intentions and how best to assist you...")
      )}

      {renderTextarea(
        t("getToKnow.qSupportAreas", "How or what areas of support do you think Intersex Nigeria can support you in relation to your challenges?"),
        "supportAreas",
        t("getToKnow.qSupportAreasPlaceholder", "Medical, legal, emotional, emergency, or other areas...")
      )}

      {renderTextarea(
        t("getToKnow.qAnythingElse", "Is there anything you would like us to know or add before we reach out?"),
        "anythingElse",
        t("getToKnow.qAnythingElsePlaceholder", "Any additional information...")
      )}

      <div className="gtk-buttons">
        <button className="gtk-btn gtk-btn-secondary" onClick={goBack}>
          ← {t("getToKnow.backBtn", "Back")}
        </button>
        <button className="gtk-btn gtk-btn-primary" onClick={goNext}>
          {t("getToKnow.continueBtn", "Continue")} →
        </button>
      </div>
    </div>
  );

  // ─── PAGE 4: Final ───
  const renderPage4 = () => {
    const consentLabels = {
      "Yes": t("common.yes", "Yes"),
      "No": t("common.no", "No"),
    };

    return (
      <div className="gtk-card" key="page4">
        <div className="gtk-card-title">
          <span className="gtk-card-title-icon"><FiHeart /></span>
          {t("getToKnow.finalQuestionsTitle", "Final Questions")}
        </div>
        <p className="gtk-card-description">
          {t("getToKnow.finalQuestionsDesc", "Just a couple more questions before we finish.")}
        </p>

        <div className="gtk-section-divider" />

        {renderTextarea(
          t(
            "getToKnow.qPreviousEngagement",
            "Have you previously engaged with any other intersex support networks, or is this your first time reaching out to an Intersex Organization?"
          ),
          "previousEngagement",
          t("getToKnow.qPreviousEngagementPlaceholder", "This helps us verify your background...")
        )}

        <div className="gtk-field-group">
          <label className="gtk-field-label">
            {t("getToKnow.consentReachOutLabel", "Do you consent to us reaching out after filling out this form?")} <span className="gtk-required">*</span>
          </label>
          {renderRadio("consentReachOut", ["Yes", "No"], consentLabels)}
        </div>

        <div className="gtk-buttons">
          <button className="gtk-btn gtk-btn-secondary" onClick={goBack}>
            ← {t("getToKnow.backBtn", "Back")}
          </button>
          <button
            className="gtk-btn gtk-btn-submit"
            onClick={handleSubmit}
            disabled={submitting}
          >
            {submitting ? (
              <Spinner size="sm" color="purple" />
            ) : (
              t("getToKnow.submitBtn", "Submit")
            )}
          </button>
        </div>
      </div>
    );
  };

  // ─── THANK YOU ───
  const renderThankYou = () => (
    <div className="gtk-card" key="thankyou">
      <div className="gtk-thankyou">
        <div className="gtk-thankyou-icon">
          <FiCheckCircle color="#fff" size={40} />
        </div>
        <h2 className="gtk-thankyou-title">{t("getToKnow.thankYouTitle", "Thank You!")}</h2>
        <p className="gtk-thankyou-text">
          {t(
            "getToKnow.thankYouP1",
            "Thank you for reaching out to Intersex Nigeria and taking this brave step. We have received your submission and will be in touch soon."
          )}
        </p>
        <p className="gtk-thankyou-text" style={{ marginTop: "1rem", fontWeight: 600 }}>
          {t("getToKnow.thankYouP2", "You are not alone. We are here for you. 💛💜")}
        </p>
      </div>
    </div>
  );

  // ─── which page to show ───
  const renderCurrentPage = () => {
    if (submitted) return renderThankYou();
    if (step === "denied") return renderDenied();
    switch (step) {
      case 1: return renderPage1();
      case 2: return renderPage2();
      case 3: return renderPage3();
      case 4: return renderPage4();
      default: return renderPage1();
    }
  };

  return (
    <Box className="gtk-page-bg" pt={{ base: "60px", md: "0px" }}>
      {/* Hero Banner */}
      <div className="gtk-hero">
        <div className="gtk-hero-content">
          <h1 className="gtk-hero-title">
            {t("getToKnow.bannerTitle", "INTERSEX GET TO KNOW Questions")}
          </h1>
          <p className="gtk-hero-subtitle">
            {t(
              "meta.getToKnowDesc",
              "Intersex Nigeria Getting To Know Questions For Intersex Persons"
            )}
          </p>
        </div>
      </div>

      {/* Stepper */}
      {step !== "denied" && !submitted && renderStepper()}

      {/* Form Content */}
      <div className="gtk-form-wrapper">
        {renderCurrentPage()}
      </div>
    </Box>
  );
}
