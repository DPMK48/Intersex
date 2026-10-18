/**
 * Google Cloud Translation Script for Intersex Nigeria
 * 
 * This script uses Google Cloud Translation API to translate
 * the English locale file (en.json) into French (fr.json).
 * 
 * SETUP:
 * 1. Create a Google Cloud project and enable the Translation API
 * 2. Create a service account and download the JSON key file
 * 3. Set the environment variable GOOGLE_APPLICATION_CREDENTIALS 
 *    to the path of your service account key file:
 *    
 *    Windows (PowerShell):
 *      $env:GOOGLE_APPLICATION_CREDENTIALS = "C:\path\to\your\service-account-key.json"
 *    
 *    Or create a .env file in the website/ directory with:
 *      GOOGLE_APPLICATION_CREDENTIALS=C:\path\to\your\service-account-key.json
 * 
 * 4. Install dependencies:
 *    npm install @google-cloud/translate dotenv
 * 
 * 5. Run the script:
 *    node scripts/translate.mjs
 * 
 * The script will:
 * - Read src/locales/en.json
 * - Translate all string values to French using Google Cloud Translation API
 * - Preserve JSON structure, keys, interpolation variables (e.g. {{year}})
 * - Write the translated content to src/locales/fr.json
 * - Handle rate limits and batch translations efficiently
 * 
 * IMPORTANT: Never commit your service account key file to version control.
 */

import { Translate } from '@google-cloud/translate/build/src/v2/index.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from the website/ directory
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

const translateOptions = {};
if (process.env.GOOGLE_TRANSLATE_API_KEY) {
  translateOptions.key = process.env.GOOGLE_TRANSLATE_API_KEY;
}
if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
  translateOptions.keyFilename = process.env.GOOGLE_APPLICATION_CREDENTIALS;
}

const translate = new Translate(translateOptions);
const TARGET_LANGUAGE = 'fr';

// Placeholder patterns to preserve during translation
const PLACEHOLDER_REGEX = /(\{\{[^}]+\}\})/g;

/**
 * Flatten a nested object into dot-notation keys
 */
function flattenObject(obj, prefix = '') {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      Object.assign(result, flattenObject(value, fullKey));
    } else if (typeof value === 'string') {
      result[fullKey] = value;
    }
  }
  return result;
}

/**
 * Unflatten dot-notation keys back into a nested object
 */
function unflattenObject(obj) {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    const parts = key.split('.');
    let current = result;
    for (let i = 0; i < parts.length - 1; i++) {
      if (!current[parts[i]]) {
        current[parts[i]] = {};
      }
      current = current[parts[i]];
    }
    current[parts[parts.length - 1]] = value;
  }
  return result;
}

/**
 * Replace placeholders with numbered tokens before translation,
 * and restore them after.
 */
function protectPlaceholders(text) {
  const placeholders = [];
  let index = 0;
  const protected_ = text.replace(PLACEHOLDER_REGEX, (match) => {
    placeholders.push(match);
    return `__PLACEHOLDER_${index++}__`;
  });
  return { protected: protected_, placeholders };
}

function restorePlaceholders(text, placeholders) {
  let restored = text;
  for (let i = 0; i < placeholders.length; i++) {
    // Handle potential spacing issues from translation
    const regex = new RegExp(`__PLACEHOLDER_${i}__`, 'g');
    restored = restored.replace(regex, placeholders[i]);
  }
  return restored;
}

/**
 * Translate an array of strings in batches to respect API limits
 */
async function translateBatch(texts, batchSize = 50) {
  const results = [];
  
  for (let i = 0; i < texts.length; i += batchSize) {
    const batch = texts.slice(i, i + batchSize);
    
    // Protect placeholders
    const protectedBatch = batch.map(t => protectPlaceholders(t));
    const textsToTranslate = protectedBatch.map(p => p.protected);
    
    try {
      console.log(`Translating batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(texts.length / batchSize)} (${textsToTranslate.length} strings)...`);
      
      const [translations] = await translate.translate(textsToTranslate, TARGET_LANGUAGE);
      
      const translatedArray = Array.isArray(translations) ? translations : [translations];
      
      for (let j = 0; j < translatedArray.length; j++) {
        const restored = restorePlaceholders(translatedArray[j], protectedBatch[j].placeholders);
        results.push(restored);
      }
      
      // Small delay between batches to avoid rate limits
      if (i + batchSize < texts.length) {
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    } catch (error) {
      if (error.code === 429 || error.message?.includes('RATE_LIMIT')) {
        console.warn('Rate limit hit, waiting 5 seconds...');
        await new Promise(resolve => setTimeout(resolve, 5000));
        i -= batchSize; // Retry this batch
      } else {
        console.error(`Error translating batch: ${error.message}`);
        // Fill with original text on error
        for (const text of batch) {
          results.push(text);
        }
      }
    }
  }
  
  return results;
}

async function main() {
  console.log('=== Intersex Nigeria Translation Script ===\n');
  
  // Check credentials
  if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    console.error('ERROR: GOOGLE_APPLICATION_CREDENTIALS environment variable is not set.');
    console.error('Please set it to the path of your Google Cloud service account key file.');
    console.error('\nWindows (PowerShell):');
    console.error('  $env:GOOGLE_APPLICATION_CREDENTIALS = "C:\\path\\to\\service-account-key.json"');
    process.exit(1);
  }
  
  // Read English translations
  const enPath = path.resolve(__dirname, '..', 'src', 'locales', 'en.json');
  const frPath = path.resolve(__dirname, '..', 'src', 'locales', 'fr.json');
  
  console.log(`Reading: ${enPath}`);
  const enContent = JSON.parse(fs.readFileSync(enPath, 'utf8'));
  
  // Flatten the object
  const flatEn = flattenObject(enContent);
  const keys = Object.keys(flatEn);
  const values = Object.values(flatEn);
  
  console.log(`Found ${keys.length} strings to translate\n`);
  
  // Translate all values
  const translatedValues = await translateBatch(values);
  
  // Build the translated flat object
  const flatFr = {};
  for (let i = 0; i < keys.length; i++) {
    flatFr[keys[i]] = translatedValues[i];
  }
  
  // Unflatten back to nested structure
  const frContent = unflattenObject(flatFr);
  
  // Write French translations
  fs.writeFileSync(frPath, JSON.stringify(frContent, null, 2) + '\n', 'utf8');
  
  console.log(`\nDone! French translations written to: ${frPath}`);
  console.log(`Total strings translated: ${keys.length}`);
  console.log('\n⚠️  IMPORTANT: Please review the translations for accuracy,');
  console.log('   especially content related to intersex rights and human rights terminology.');
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
