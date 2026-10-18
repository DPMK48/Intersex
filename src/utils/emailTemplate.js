/**
 * Safely encodes a UTF-8 string to base64 for SendPulse SMTP API.
 */
export function encodeBase64Html(htmlString) {
  try {
    return btoa(unescape(encodeURIComponent(htmlString)));
  } catch (e) {
    console.error("Failed to base64 encode HTML", e);
    return "";
  }
}

function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Generates an email HTML string formatted with Intersex Nigeria brand colors and styling.
 *
 * @param {Object} options
 * @param {string} options.title - The title shown in the header banner
 * @param {string} [options.badge] - Optional badge tag (e.g. "CONFIDENTIAL" or "SUBMISSION COPY")
 * @param {string} [options.recipientGreeting] - Optional greeting (e.g. "Hello Dorathy Paul,")
 * @param {string} [options.introText] - Optional introductory paragraph
 * @param {Array<{label: string, value: any, isBlock?: boolean}>} options.fields - List of fields to display
 * @param {boolean} [options.isConfidential] - Whether to show the safeguarding confidentiality badge
 * @returns {string} Fully styled HTML string
 */
export function generateStyledEmailHtml({
  title,
  badge = "",
  recipientGreeting = "",
  introText = "",
  fields = [],
  isConfidential = false,
}) {
  const currentYear = new Date().getFullYear();

  const fieldRows = fields
    .filter(
      (f) =>
        f &&
        f.value !== undefined &&
        f.value !== null &&
        String(f.value).trim() !== ""
    )
    .map((f) => {
      const safeLabel = escapeHtml(f.label);
      const safeValue = escapeHtml(String(f.value));

      if (f.isBlock) {
        return `
          <tr>
            <td colspan="2" style="padding: 14px 18px; background-color: #faf7fc; border-top: 1px solid #ede4f2; border-bottom: 1px solid #ede4f2;">
              <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #64117e; margin-bottom: 8px;">
                ${safeLabel}
              </div>
              <div style="font-size: 14px; color: #2d3748; line-height: 1.6; white-space: pre-wrap; background-color: #ffffff; padding: 14px 16px; border-radius: 6px; border: 1px solid #e9d8fd; border-left: 4px solid #64117e;">
                ${safeValue}
              </div>
            </td>
          </tr>
        `;
      }

      return `
        <tr>
          <td style="padding: 11px 18px; font-size: 13px; font-weight: 600; color: #4a5568; width: 36%; vertical-align: top; border-bottom: 1px solid #edf2f7; background-color: #fdfbfe;">
            ${safeLabel}
          </td>
          <td style="padding: 11px 18px; font-size: 14px; color: #1a202c; vertical-align: top; border-bottom: 1px solid #edf2f7; background-color: #ffffff;">
            ${safeValue}
          </td>
        </tr>
      `;
    })
    .join("");

  const confidentialityBanner = isConfidential
    ? `
      <div style="margin: 24px 0 8px; padding: 14px 18px; background-color: #fffaf0; border-left: 4px solid #dd6b20; border-radius: 4px; font-size: 12px; color: #7b341e; line-height: 1.55;">
        <strong style="color: #9c4221;">🔒 Confidentiality Notice:</strong> This submission contains sensitive information and is strictly protected under Intersex Nigeria Safeguarding and Privacy policies.
      </div>
    `
    : "";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f0edf2; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #2d3748; -webkit-font-smoothing: antialiased;">
  <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #f0edf2; padding: 28px 12px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(100, 17, 126, 0.08); border: 1px solid #e2d9e8;">
          
          <!-- Brand Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #64117e 0%, #430c54 100%); padding: 32px 24px; text-align: center;">
              <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #fbd38d; margin-bottom: 8px;">
                Intersex Nigeria
              </div>
              <h1 style="margin: 0; font-size: 21px; font-weight: 700; color: #ffffff; line-height: 1.35;">
                ${escapeHtml(title)}
              </h1>
              ${
                badge
                  ? `<div style="display: inline-block; margin-top: 10px; background: rgba(255, 255, 255, 0.2); color: #ffffff; font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 20px;">${escapeHtml(
                      badge
                    )}</div>`
                  : ""
              }
            </td>
          </tr>

          <!-- Content Section -->
          <tr>
            <td style="padding: 26px 24px 20px; background-color: #ffffff;">
              ${
                recipientGreeting
                  ? `<div style="font-size: 15px; font-weight: 600; color: #1a202c; margin-bottom: 8px;">${escapeHtml(
                      recipientGreeting
                    )}</div>`
                  : ""
              }
              ${
                introText
                  ? `<div style="font-size: 14px; color: #4a5568; line-height: 1.6; margin-bottom: 20px;">${escapeHtml(
                      introText
                    )}</div>`
                  : ""
              }

              <!-- Details Table -->
              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-radius: 8px; overflow: hidden; border: 1px solid #e9d8fd; width: 100%;">
                ${fieldRows}
              </table>

              ${confidentialityBanner}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #faf7fc; padding: 22px 24px; text-align: center; border-top: 1px solid #ede4f2; font-size: 12px; color: #718096; line-height: 1.6;">
              <div style="font-weight: 700; color: #64117e; margin-bottom: 4px;">Intersex Nigeria</div>
              <div>Need assistance or have concerns? Contact us directly at <a href="mailto:info@intersexnigeria.org" style="color: #64117e; text-decoration: none; font-weight: 600;">info@intersexnigeria.org</a></div>
              <div style="margin-top: 12px; font-size: 11px; color: #a0aec0;">&copy; ${currentYear} Intersex Nigeria. All rights reserved.</div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
