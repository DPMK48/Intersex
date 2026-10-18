# Implementation Instructions: Add French Language Support to Intersex Nigeria Website

## Project Objective

Implement complete English and French language support across the existing Intersex Nigeria website. English should remain the default language, and visitors should be able to switch to French using a language selector.

Use Google Cloud Translation API to translate the existing website content into French once. Store the translations in the project so visitors do not need to call the translation API when browsing or switching languages.

**Important:** Work with the existing project structure and preserve the website's current design, functionality, routes, and features. Do not rebuild the website or make unrelated changes.

## Step 1: Inspect the Existing Project

Before making changes:

1. Inspect the project's folder structure, `package.json`, React entry point, routing configuration, shared components, and styling system.
2. Identify every page and component containing user-visible text.
3. Locate the navigation bar, footer, forms, validation messages, confirmation messages, error messages, buttons, page headings, reports, and the "Get to Know Questions for Intersex Persons" page.
4. Identify dynamically generated content, document titles, metadata, and any backend-generated messages or email templates.
5. Determine whether the project uses Vite, Create React App, Next.js, or another setup. Follow the existing architecture.

Do not start replacing text until you understand how the current application works.

## Step 2: Install and Configure Internationalization

Install `i18next` and `react-i18next` using the package manager already used by the project.

Create translation files with a structure similar to:

- `src/locales/en/translation.json`
- `src/locales/fr/translation.json`

Adjust the paths to match the existing project structure.

Configure i18next with:

- English (`en`) as the default and fallback language.
- French (`fr`) as the additional language.
- English and French translation resources loaded locally.
- A persistent language preference using local storage, if appropriate for the current application.
- A safe fallback when the saved language is missing or invalid.

Initialize i18next once at the application entry point. Do not initialize it separately inside individual components.

## Step 3: Extract All Existing English Text

Move user-facing English text into translation JSON files using clear, consistent keys.

For example, English:

{
  "navigation": {
    "home": "Home",
    "about": "About Us",
    "reports": "Reports",
    "contact": "Contact"
  },
  "common": {
    "submit": "Submit",
    "cancel": "Cancel",
    "loading": "Loading..."
  }
}

Use the same keys in the French file:

{
  "navigation": {
    "home": "Accueil",
    "about": "À propos de nous",
    "reports": "Rapports",
    "contact": "Contact"
  },
  "common": {
    "submit": "Envoyer",
    "cancel": "Annuler",
    "loading": "Chargement..."
  }
}

These are examples only. Extract the actual content from the repository rather than replacing it with sample content.

Keep long articles, educational content, reports, and question-and-answer content organized under appropriate page-specific keys.

Do not translate internal code identifiers, API field names, database columns, route paths, or other technical values that must remain unchanged.

## Step 4: Translate the Existing Content Using Google Cloud Translation API

Use Google Cloud Translation API to generate the initial French translations.

Implementation requirements:

1. Use a secure local script or another server-side environment to call the API.
2. Store the Google Cloud credentials in environment variables or a local environment file that is excluded from version control.
3. Never place API keys, service account credentials, or other secrets in React frontend code.
4. Never commit credentials to GitHub.
5. Translate the extracted English strings into French while preserving JSON keys and the structure of the translation files.
6. Preserve placeholders, interpolation variables, URLs, HTML elements, Markdown formatting, and other required tokens.
7. Handle API errors, rate limits, and large translation batches appropriately.
8. Write the resulting translations into the French JSON file.

If the translation script is retained in the repository, document how to configure credentials and run it. Exclude local credentials from Git.

**Important:** Translate all actual website content, not just navigation labels. Review translations for accuracy, clarity, respectful language, and appropriate terminology relating to intersex people and human rights. Do not alter the meaning of existing educational or sensitive content.

## Step 5: Replace Hardcoded User-Facing Text

Update React components to use the `useTranslation` hook.

Example:

import { useTranslation } from "react-i18next";

function ExampleComponent() {
  const { t } = useTranslation();

  return (
    <button>{t("common.submit")}</button>
  );
}

Apply this approach throughout the website.

Requirements:

- Replace hardcoded user-facing strings with translation keys.
- Translate form labels, placeholders, validation messages, success messages, error messages, loading states, buttons, dialogs, and empty states.
- Ensure dynamically rendered content also uses translation keys where appropriate.
- Preserve existing event handlers, form submission logic, API integrations, and component behavior.
- Ensure untranslated text does not remain scattered across pages, except for proper names, technical identifiers, or content intentionally excluded from translation.

Do not change unrelated logic simply to introduce translations.

## Step 6: Add the Language Selector

Add an accessible language selector to the existing navigation bar or another suitable shared location.

It should offer:

- English
- Français

Use the existing design system and responsive layout.

Requirements:

1. Selecting a language updates the entire interface immediately without requiring a full page reload.
2. The selected language is visibly indicated.
3. The language preference persists across page navigation and subsequent visits.
4. The selector works on desktop and mobile.
5. It supports keyboard navigation and screen readers.
6. Use appropriate language names and, where suitable, update the document's `lang` attribute to `en` or `fr`.

Do not add a separate language selector to every page unless the current design requires it.

## Step 7: Translate Page Titles and Metadata

Make sure language switching also updates relevant page metadata, including:

- Document title.
- Meta description.
- Relevant Open Graph text.
- Other user-facing metadata already present in the project.

Use the appropriate French values when French is selected and restore the English values when English is selected.

Keep canonical URLs, route paths, and technical metadata correct.

## Step 8: Check Forms, Backend Messages, and Emails

Inspect all forms, including contact and report submission forms.

Ensure that:

- Form labels, hints, placeholders, and validation errors are translated.
- Success and failure messages are translated.
- Existing form submissions continue working.
- Existing email confirmation behavior remains intact.
- Emails intended for submitters use the appropriate language when feasible.

If backend responses, server-rendered messages, or email templates are generated outside the React frontend, inspect those files too. Do not assume frontend translation automatically translates backend content or emails.

Preserve existing API contracts and data formats. If backend changes are required, implement them compatibly and document any necessary deployment or environment configuration.

## Step 9: Test the Entire Website

Run the project's existing linting, type checking, tests, and production build commands where available.

Manually test every page in both languages.

Verify that:

- English remains the default for new visitors.
- French displays correctly throughout the website.
- Switching languages updates the current page without reloading.
- The selected language persists after refreshing and navigating.
- No translation keys appear visibly in the interface.
- No content is missing or accidentally truncated.
- Forms, reports, buttons, navigation, and confirmation messages still work.
- Mobile and desktop layouts remain usable.
- Accented French characters display correctly.
- Browser console errors and build errors are resolved.

Search the source code for remaining hardcoded user-facing strings and review any that were not converted.

Do not claim complete translation coverage unless all relevant pages and components have been checked.

## Step 10: Document the Implementation

Provide a concise implementation report covering:

1. Files created and modified.
2. Dependencies installed.
3. How i18next is configured.
4. How Google Cloud credentials are configured securely.
5. How the initial translation script is run, if one was created.
6. How to add or modify translations when future content is introduced.
7. Tests and production build results.
8. Any content that remains untranslated or needs human review.
9. Any required backend changes or deployment steps.

## Acceptance Criteria

The implementation is complete when:

- The entire existing website supports English and French.
- English remains the default language.
- Visitors can switch languages through one shared selector.
- Language selection persists across visits.
- Initial French translations are stored locally rather than generated on every visit.
- Google Cloud credentials are not exposed in frontend code or committed to the repository.
- Existing features, forms, routes, styling, and backend integrations remain functional.
- The project builds successfully and both languages have been tested.

**Final instruction:** Inspect first, implement incrementally, and test after each major stage. Preserve all existing functionality. If a requirement cannot be completed because information or access is missing, explain the limitation instead of silently skipping it.