import fs from 'fs';
import path from 'path';

const localesDir = path.resolve('src/locales');
const enPath = path.join(localesDir, 'en.json');
const frPath = path.join(localesDir, 'fr.json');

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const fr = JSON.parse(fs.readFileSync(frPath, 'utf8'));

en.reportForms = {
  anonymousReportTitle: "Submit an Anonymous Report",
  rightsViolationFormTitle: "Report a Rights Violation Form",
  clickToCollapse: "Click to collapse",
  clickToExpand: "Click to expand and fill out the form",
  reportSubmitted: "Report Submitted",
  abuseSuccessText: "Thank you for filling this form. Your report will be reviewed by the safeguarding team. If you shared contact details, you will hear from us soon. Your safety is our priority.",
  violationSuccessText: "Thank you for sharing your report. Our human rights and advocacy team will review the submitted details with strict confidentiality. If you provided contact details, we will reach out safely and securely.",
  submitAnother: "Submit Another Report",
  submitReport: "Submit Report",
  submitting: "Submitting...",
  indicatesRequired: "* Indicates required question",
  submissionSuccess: "Your report has been submitted successfully.",
  submissionFailed: "Failed to submit report. Please try again or email reports@intersexnigeria.org directly."
};

fr.reportForms = {
  anonymousReportTitle: "Soumettre un signalement anonyme",
  rightsViolationFormTitle: "Formulaire de signalement de violation des droits",
  clickToCollapse: "Cliquer pour réduire",
  clickToExpand: "Cliquer pour développer et remplir le formulaire",
  reportSubmitted: "Signalement transmis",
  abuseSuccessText: "Merci d'avoir rempli ce formulaire. Votre signalement sera examiné par l'équipe de protection. Si vous avez communiqué vos coordonnées, nous vous contacterons prochainement. Votre sécurité est notre priorité.",
  violationSuccessText: "Merci de nous avoir partagé votre signalement. Notre équipe de défense des droits humains examinera les détails transmis en toute confidentialité. Si vous avez laissé vos coordonnées, nous vous contacterons en toute sécurité.",
  submitAnother: "Soumettre un autre signalement",
  submitReport: "Soumettre le signalement",
  submitting: "Envoi en cours...",
  indicatesRequired: "* Indique une question obligatoire",
  submissionSuccess: "Votre signalement a été soumis avec succès.",
  submissionFailed: "Échec de l'envoi du signalement. Veuillez réessayer ou écrire directement à reports@intersexnigeria.org."
};

fs.writeFileSync(enPath, JSON.stringify(en, null, 2), 'utf8');
fs.writeFileSync(frPath, JSON.stringify(fr, null, 2), 'utf8');
console.log('reportForms appended successfully!');
