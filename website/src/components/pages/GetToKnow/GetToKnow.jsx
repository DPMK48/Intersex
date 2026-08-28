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
    if (!formData.legalName.trim()) e.legalName = "Name is required";
    if (!formData.preferredName.trim()) e.preferredName = "Preferred name is required";
    if (!formData.dob) e.dob = "Date of birth is required";
    if (!formData.phone.trim()) e.phone = "Phone number is required";
    if (!formData.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Enter a valid email";
    if (!formData.stateOfOrigin) e.stateOfOrigin = "State of origin is required";
    if (!formData.currentLocation.trim()) e.currentLocation = "Current location is required";
    if (!formData.gender.trim()) e.gender = "Gender is required";
    if (!formData.sexualOrientation.trim()) e.sexualOrientation = "Sexual orientation is required";
    if (!formData.pronouns.trim()) e.pronouns = "Pronouns are required";
    if (!formData.howHeard) e.howHeard = "Please select an option";
    if (formData.howHeard === "Others" && !formData.howHeardOther.trim()) e.howHeardOther = "Please specify";
    if (!formData.selfIdentify) e.selfIdentify = "Please select an option";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep3 = () => {
    const e = {};
    if (!formData.variationDescription.trim()) e.variationDescription = "This field is required";
    if (!formData.livedExperience.trim()) e.livedExperience = "This field is required";
    if (!formData.challenges.trim()) e.challenges = "This field is required";
    if (!formData.whyConnect.trim()) e.whyConnect = "This field is required";
    if (!formData.supportAreas.trim()) e.supportAreas = "This field is required";
    if (!formData.anythingElse.trim()) e.anythingElse = "This field is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep4 = () => {
    const e = {};
    if (!formData.previousEngagement.trim()) e.previousEngagement = "This field is required";
    if (!formData.consentReachOut) e.consentReachOut = "Please select an option";
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

      const response = await fetch(
        "https://intersex-ng-server.onrender.com/api/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: {
              subject: "GET TO KNOW - New Submission",
              from: {
                name: "Intersex Nigeria Safeguarding",
                email: "communications@intersexnigeria.org",
              },
              to: [
                {
                  email: "info@intersexnigeria.org",
                  name: "Intersex Nigeria Safeguarding",
                },
              ],
              text: emailBody,
              template: {
                id: "153159",
                variables: {
                  name: formData.legalName,
                  number: formData.phone,
                  email: formData.email,
                  subject: "GET TO KNOW - New Submission",
                  message: emailBody,
                  current_year: currentYear,
                },
              },
            },
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to submit");

      setSubmitted(true);
      scrollTop();
    } catch (error) {
      console.error(error);
      toast({
        description: "Failed to submit form. Please try again.",
        status: "error",
        duration: 5000,
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
  const renderStepper = () => (
    <div className="gtk-stepper">
      {STEP_LABELS.map((label, idx) => {
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
            {idx < STEP_LABELS.length - 1 && (
              <div className={`gtk-step-line ${isCompleted ? "completed" : ""}`} />
            )}
          </div>
        );
      })}
    </div>
  );

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

  const renderRadio = (field, options) => (
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
          {opt}
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
        Welcome
      </div>

      <div className="gtk-section-divider" />

      <p className="gtk-welcome-text">
        Thank you for taking this step to connect with us. We understand it may have taken courage to reach out. This is a <strong>safe and affirming space</strong>. We honour your trust and are here to support you — whatever stage of your journey you are at.
      </p>

      <p className="gtk-welcome-text">
        To maintain the integrity and safety of all, the GET TO KNOW documents helps us protect our community members and also ensure a safe and secure space for you and helps us map out exactly what kind of support (medical, legal, emotional, or emergency) you need right now.
      </p>

      <div className="gtk-notice-box purple">
        The information shared and data collected is <strong>confidential</strong> and protected under Intersex Nigeria's safeguarding and data policies.
      </div>

      {/* Consent */}
      <div className="gtk-consent-section">
        <div className="gtk-consent-title">
          Data Protection Consent <span className="required-badge">Required</span>
        </div>
        <p className="gtk-consent-text">
          "I understand that the information provided here will be stored securely and used solely for the purpose of community building in Intersex Nigeria."
        </p>

        <div className="gtk-radio-group">
          <label className={`gtk-radio-label ${consentGiven === true ? "selected" : ""}`}>
            <input
              type="radio"
              name="consent"
              checked={consentGiven === true}
              onChange={() => setConsentGiven(true)}
            />
            Yes, I consent.
          </label>
          <label className={`gtk-radio-label ${consentGiven === false ? "selected" : ""}`}>
            <input
              type="radio"
              name="consent"
              checked={consentGiven === false}
              onChange={() => setConsentGiven(false)}
            />
            No, I do not consent.
          </label>
        </div>
      </div>

      <div className="gtk-notice-box">
        We advise that in filling out the form you use your <strong>own language, terminology, voice, and writing</strong>, and reduce the use of AI.
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
          Continue →
        </button>
      </div>
    </div>
  );

  // ─── DENIED PAGE ───
  const renderDenied = () => (
    <div className="gtk-card" key="denied">
      <div className="gtk-denied">
        <div className="gtk-denied-icon">⚠️</div>
        <h2 className="gtk-denied-title">Consent Required</h2>
        <p className="gtk-denied-text">
          We respect your decision. Unfortunately, we are unable to proceed without your consent to our data protection policy. This is to ensure the safety and security of all community members.
        </p>
        <p className="gtk-denied-text">
          If you change your mind, you are welcome to return at any time. We are always here for you.
        </p>
        <button
          className="gtk-btn gtk-btn-secondary"
          onClick={() => {
            setConsentGiven(null);
            setStep(1);
          }}
        >
          ← Go Back
        </button>
      </div>
    </div>
  );

  // ─── PAGE 2: Personal Information ───
  const renderPage2 = () => (
    <div className="gtk-card" key="page2">
      <div className="gtk-card-title">
        <span className="gtk-card-title-icon"><FiUser /></span>
        Personal Information
      </div>
      <p className="gtk-card-description">
        About you — please provide your safe contact details.
      </p>

      <div className="gtk-section-divider" />

      {renderField("Name (as appeared in your documents)", "legalName", "text", "Enter your legal name")}
      {renderField("Preferred Name", "preferredName", "text", "What would you like to be called?")}

      <div className="gtk-two-col">
        <div className="gtk-field-group">
          <label className="gtk-field-label">
            Date of Birth <span className="gtk-required">*</span>
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
          <label className="gtk-field-label">Age</label>
          <input
            className="gtk-input"
            type="text"
            value={getAge()}
            readOnly
            placeholder="Auto-calculated"
            style={{ background: "#f5f0f8", cursor: "default" }}
          />
        </div>
      </div>

      {renderField("Phone Number (WhatsApp preferred)", "phone", "tel", "Enter your phone number")}
      {renderField("Email Address", "email", "email", "Enter your email address")}

      <div className="gtk-field-group">
        <label className="gtk-field-label">
          State of Origin <span className="gtk-required">*</span>
        </label>
        <select
          className={`gtk-select ${errors.stateOfOrigin ? "error" : ""}`}
          value={formData.stateOfOrigin}
          onChange={(e) => updateField("stateOfOrigin", e.target.value)}
          id="gtk-stateOfOrigin"
        >
          <option value="">Select your state</option>
          {NIGERIAN_STATES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.stateOfOrigin && <div className="gtk-error-msg">⚠ {errors.stateOfOrigin}</div>}
      </div>

      {renderField("Location (where you are presently residing)", "currentLocation", "text", "City, State")}
      {renderField("Gender", "gender", "text", "Enter your gender")}
      {renderField("Sexual Orientation", "sexualOrientation", "text", "Enter your sexual orientation")}
      {renderField("Pronouns", "pronouns", "text", "e.g. he/him, she/her, they/them")}

      <div className="gtk-section-divider" />

      {/* How did you hear */}
      <div className="gtk-field-group">
        <label className="gtk-field-label">
          How did you first come across the term "intersex" or "variations in sex characteristics" in relation to yourself? <span className="gtk-required">*</span>
        </label>
        {renderRadio("howHeard", [
          "From a medical professional",
          "From family/parents",
          "Online or through media/Social media",
          "Intersex Nigeria/another advocacy group/organization",
          "Others",
        ])}
        {formData.howHeard === "Others" && (
          <div className="gtk-other-input">
            <input
              className={`gtk-input ${errors.howHeardOther ? "error" : ""}`}
              type="text"
              placeholder="Please specify..."
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
          Do you openly self-identify as having an intersex variation? <span className="gtk-required">*</span>
        </label>
        {renderRadio("selfIdentify", [
          "Yes",
          "I am currently questioning or exploring this",
          "No",
        ])}
      </div>

      {formData.selfIdentify === "No" && (
        <div className="gtk-notice-box">
          Since you selected "No", you will be directed to the final page of the form.
        </div>
      )}

      <div className="gtk-buttons">
        <button className="gtk-btn gtk-btn-secondary" onClick={goBack}>
          ← Back
        </button>
        <button className="gtk-btn gtk-btn-primary" onClick={goNext}>
          Continue →
        </button>
      </div>
    </div>
  );

  // ─── PAGE 3: Physical Indicators / Story ───
  const renderPage3 = () => (
    <div className="gtk-card" key="page3">
      <div className="gtk-card-title">
        <span className="gtk-card-title-icon"><FiFileText /></span>
        Physical Indicators
      </div>
      <p className="gtk-card-description">
        Your medical and physical history — share in your own words.
      </p>

      <div className="gtk-section-divider" />

      {/* File Upload */}
      <div className="gtk-field-group">
        <label className="gtk-field-label">
          Attach a document or file (optional)
        </label>
        <div
          className="gtk-file-upload"
          onClick={() => fileRef.current?.click()}
        >
          <div className="gtk-file-upload-icon"><FiUploadCloud /></div>
          <p className="gtk-file-upload-text">
            <strong>Click to upload</strong> or drag and drop
          </p>
          <p className="gtk-file-upload-text" style={{ fontSize: "0.8rem", marginTop: "0.25rem" }}>
            PDF, DOC, JPG, PNG (max 10MB)
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
        "How do you prefer to describe your variation and at what age did you get to know?",
        "variationDescription",
        "Use the terminology and knowledge you are most comfortable with..."
      )}

      {renderTextarea(
        "In your own words, could you briefly describe your lived experience as an intersex person growing up?",
        "livedExperience",
        "Share your experience..."
      )}

      {renderTextarea(
        "Many intersex individuals face unique challenges navigating life in Nigeria. Have you experienced any of these challenges?",
        "challenges",
        "Describe any challenges you have faced..."
      )}

      {renderTextarea(
        "Can you briefly share what specific challenges or what drew you to connect with Intersex Nigeria?",
        "whyConnect",
        "This helps us understand your intentions and how best to assist you..."
      )}

      {renderTextarea(
        "How or what areas of support do you think Intersex Nigeria can support you in relation to your challenges?",
        "supportAreas",
        "Medical, legal, emotional, emergency, or other areas..."
      )}

      {renderTextarea(
        "Is there anything you would like us to know or add before we reach out?",
        "anythingElse",
        "Any additional information..."
      )}

      <div className="gtk-buttons">
        <button className="gtk-btn gtk-btn-secondary" onClick={goBack}>
          ← Back
        </button>
        <button className="gtk-btn gtk-btn-primary" onClick={goNext}>
          Continue →
        </button>
      </div>
    </div>
  );

  // ─── PAGE 4: Final ───
  const renderPage4 = () => (
    <div className="gtk-card" key="page4">
      <div className="gtk-card-title">
        <span className="gtk-card-title-icon"><FiHeart /></span>
        Final Questions
      </div>
      <p className="gtk-card-description">
        Just a couple more questions before we finish.
      </p>

      <div className="gtk-section-divider" />

      {renderTextarea(
        "Have you previously engaged with any other intersex support networks, or is this your first time reaching out to an Intersex Organization?",
        "previousEngagement",
        "This helps us verify your background..."
      )}

      <div className="gtk-field-group">
        <label className="gtk-field-label">
          Do you consent to us reaching out after filling out this form? <span className="gtk-required">*</span>
        </label>
        {renderRadio("consentReachOut", ["Yes", "No"])}
      </div>

      <div className="gtk-buttons">
        <button className="gtk-btn gtk-btn-secondary" onClick={goBack}>
          ← Back
        </button>
        <button
          className="gtk-btn gtk-btn-submit"
          onClick={handleSubmit}
          disabled={submitting}
        >
          {submitting ? <Spinner size="sm" color="purple" /> : "Submit"}
        </button>
      </div>
    </div>
  );

  // ─── THANK YOU ───
  const renderThankYou = () => (
    <div className="gtk-card" key="thankyou">
      <div className="gtk-thankyou">
        <div className="gtk-thankyou-icon">
          <FiCheckCircle color="#fff" size={40} />
        </div>
        <h2 className="gtk-thankyou-title">Thank You!</h2>
        <p className="gtk-thankyou-text">
          Thank you for reaching out to Intersex Nigeria and taking this brave step. We have received your submission and will be in touch soon.
        </p>
        <p className="gtk-thankyou-text" style={{ marginTop: "1rem", fontWeight: 600 }}>
          You are not alone. We are here for you. 💛💜
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
            INTERSEX GET TO KNOW Questions
          </h1>
          <p className="gtk-hero-subtitle">
            Intersex Nigeria Getting To Know Questions For Intersex Persons
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
