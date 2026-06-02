// 📋 BOOKING SYSTEM CONFIGURATION HELPER
// This file demonstrates how to configure different data collection methods

// ============================================
// 1. WHATSAPP CONFIGURATION (Already Active)
// ============================================

// File: src/components/BookingModal/BookingModal.js
// Line: ~77

const WHATSAPP_CONFIG = {
  // REQUIRED: Your WhatsApp business number (country code + number, no symbols)
  // Example for India: +91 95158 97027 becomes 919515897027
  phoneNumber: '919515897027', // ← CHANGE THIS TO YOUR NUMBER
  
  // Message template (auto-generated, do not modify)
  messageTemplate: (service, formData) => {
    return `📌 *New Booking Request*\n\n` +
      `*Service:* ${service.title}\n` +
      `*Price:* Rs. ${service.price}\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Date:* ${formData.date}\n` +
      `*Time:* ${formData.time}\n` +
      `*Question/Concern:* ${formData.problem}\n\n` +
      `_Booking made via website_`;
  }
};

// ============================================
// 2. EMAIL BACKUP: FORMSPREE (FREE)
// ============================================

const FORMSPREE_CONFIG = {
  enabled: false, // Set to true to enable
  
  // Get your form ID from https://formspree.io
  // Sign up → Create form → Copy the ID (looks like: f/xyzqwerty)
  formId: 'f/xyzqwerty', // ← UPDATE THIS
  
  endpoint: 'https://formspree.io/f/YOUR_FORM_ID',
  
  // Setup Instructions:
  // 1. Go to https://formspree.io
  // 2. Sign up with your email
  // 3. Create a new form
  // 4. Copy the endpoint URL
  // 5. Extract the ID part (xyzqwerty from f/xyzqwerty)
  // 6. Update formId above
  
  // Implementation in BookingModal.js:
  submitEmail: async (formData, service) => {
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_CONFIG.formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service: service.title,
          price: service.price,
          name: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          date: formData.date,
          time: formData.time,
          problem: formData.problem,
        }),
      });
      console.log('Email submitted:', response.status);
    } catch (error) {
      console.error('Email submission failed:', error);
    }
  }
};

// ============================================
// 3. GOOGLE SHEETS (FREE UNLIMITED)
// ============================================

const GOOGLE_SHEETS_CONFIG = {
  enabled: false, // Set to true to enable
  
  // Get from Google Form submission URL
  formAction: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse',
  
  // Map form fields to Google Form entry IDs
  fieldMap: {
    service: 'entry.XXXXXXXXX',
    price: 'entry.XXXXXXXXX',
    fullName: 'entry.XXXXXXXXX',
    phone: 'entry.XXXXXXXXX',
    email: 'entry.XXXXXXXXX',
    date: 'entry.XXXXXXXXX',
    time: 'entry.XXXXXXXXX',
    problem: 'entry.XXXXXXXXX',
  },
  
  // Setup Instructions:
  // 1. Create Google Form with fields for each service detail
  // 2. Right-click form → inspect → look for entry IDs
  // 3. Update fieldMap with correct entry IDs
  // 4. Enable this config
  
  submitToSheet: async (formData, service) => {
    const formUrl = GOOGLE_SHEETS_CONFIG.formAction;
    const params = new URLSearchParams();
    
    params.append(GOOGLE_SHEETS_CONFIG.fieldMap.service, service.title);
    params.append(GOOGLE_SHEETS_CONFIG.fieldMap.price, service.price);
    params.append(GOOGLE_SHEETS_CONFIG.fieldMap.fullName, formData.fullName);
    params.append(GOOGLE_SHEETS_CONFIG.fieldMap.phone, formData.phone);
    params.append(GOOGLE_SHEETS_CONFIG.fieldMap.email, formData.email);
    params.append(GOOGLE_SHEETS_CONFIG.fieldMap.date, formData.date);
    params.append(GOOGLE_SHEETS_CONFIG.fieldMap.time, formData.time);
    params.append(GOOGLE_SHEETS_CONFIG.fieldMap.problem, formData.problem);
    
    try {
      await fetch(formUrl, {
        method: 'POST',
        body: params,
        mode: 'no-cors'
      });
      console.log('Data submitted to Google Sheets');
    } catch (error) {
      console.error('Google Sheets submission failed:', error);
    }
  }
};

// ============================================
// 4. AIRTABLE (PROFESSIONAL DATABASE)
// ============================================

const AIRTABLE_CONFIG = {
  enabled: false, // Set to true to enable
  
  // Get from https://airtable.com account settings
  apiKey: 'YOUR_AIRTABLE_API_KEY',
  baseId: 'YOUR_BASE_ID',
  tableName: 'Bookings',
  
  // Setup Instructions:
  // 1. Create account at https://airtable.com
  // 2. Create new base
  // 3. Create table: "Bookings"
  // 4. Add fields: service, price, name, phone, email, date, time, problem
  // 5. Get API key from account settings
  // 6. Get base ID from URL (first part)
  
  submitToAirtable: async (formData, service) => {
    const url = `https://api.airtable.com/v0/${AIRTABLE_CONFIG.baseId}/${AIRTABLE_CONFIG.tableName}`;
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_CONFIG.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [{
            fields: {
              'Service': service.title,
              'Price': service.price,
              'Name': formData.fullName,
              'Phone': formData.phone,
              'Email': formData.email,
              'Date': formData.date,
              'Time': formData.time,
              'Problem': formData.problem,
            }
          }]
        })
      });
      console.log('Data submitted to Airtable:', response.status);
    } catch (error) {
      console.error('Airtable submission failed:', error);
    }
  }
};

// ============================================
// 5. SUPABASE (REAL-TIME DATABASE)
// ============================================

const SUPABASE_CONFIG = {
  enabled: false, // Set to true to enable
  
  // Get from https://supabase.com project settings
  projectUrl: 'https://YOUR_PROJECT.supabase.co',
  anonKey: 'YOUR_ANON_KEY',
  tableName: 'bookings',
  
  // Setup Instructions:
  // 1. Create account at https://supabase.com
  // 2. Create new project
  // 3. Create table: "bookings"
  // 4. Add columns: service_id, service_name, price, name, phone, email, date, time, problem
  // 5. Get project URL and anon key from settings
  
  submitToSupabase: async (formData, service) => {
    const url = `${SUPABASE_CONFIG.projectUrl}/rest/v1/${SUPABASE_CONFIG.tableName}`;
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_CONFIG.anonKey,
          'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          service_name: service.title,
          price: service.price,
          name: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          date: formData.date,
          time: formData.time,
          problem: formData.problem,
        })
      });
      console.log('Data submitted to Supabase:', response.status);
    } catch (error) {
      console.error('Supabase submission failed:', error);
    }
  }
};

// ============================================
// COMPARISON TABLE
// ============================================

const INTEGRATION_COMPARISON = {
  whatsapp: {
    name: 'WhatsApp',
    cost: 'Free',
    setup_time: '2 minutes',
    limitations: 'Manual management',
    best_for: 'Direct communication',
  },
  formspree: {
    name: 'Formspree (Email)',
    cost: 'Free (50/month)',
    setup_time: '5 minutes',
    limitations: 'Limited submissions',
    best_for: 'Email backup',
  },
  google_sheets: {
    name: 'Google Sheets',
    cost: 'Free',
    setup_time: '15 minutes',
    limitations: 'Requires ID mapping',
    best_for: 'Easy spreadsheet access',
  },
  airtable: {
    name: 'Airtable',
    cost: 'Free tier available',
    setup_time: '10 minutes',
    limitations: 'API calls counted',
    best_for: 'Professional database',
  },
  supabase: {
    name: 'Supabase',
    cost: 'Free tier',
    setup_time: '10 minutes',
    limitations: 'Requires backend knowledge',
    best_for: 'Real-time sync & scalability',
  },
};

// ============================================
// RECOMMENDED COMBINATIONS
// ============================================

const RECOMMENDED_SETUPS = {
  // For small startups (FREE)
  starter: {
    primary: 'WhatsApp',
    backup: 'Google Sheets',
    cost: 'Free',
    complexity: 'Low',
    description: 'Perfect for getting started',
  },
  
  // For growing businesses (FREE)
  professional: {
    primary: 'WhatsApp',
    backup: 'Formspree (Email)',
    database: 'Google Sheets',
    cost: 'Free',
    complexity: 'Medium',
    description: 'Best balance of features & simplicity',
  },
  
  // For enterprises (FREE/PAID)
  enterprise: {
    primary: 'WhatsApp',
    backup: 'Email + SMS',
    database: 'Supabase',
    automation: 'Zapier',
    cost: 'Free-$15/month',
    complexity: 'High',
    description: 'Fully automated professional system',
  },
};

// ============================================
// IMPLEMENTATION EXAMPLE
// ============================================

/* 
To implement any of these configs in BookingModal.js:

1. Import this file:
   import CONFIG from './config.js';

2. In handleSubmit function, add:
   
   if (FORMSPREE_CONFIG.enabled) {
     await FORMSPREE_CONFIG.submitEmail(formData, service);
   }
   
   if (AIRTABLE_CONFIG.enabled) {
     await AIRTABLE_CONFIG.submitToAirtable(formData, service);
   }
   
   // etc...

3. Test thoroughly before deploying!
*/

export {
  WHATSAPP_CONFIG,
  FORMSPREE_CONFIG,
  GOOGLE_SHEETS_CONFIG,
  AIRTABLE_CONFIG,
  SUPABASE_CONFIG,
  INTEGRATION_COMPARISON,
  RECOMMENDED_SETUPS,
};
