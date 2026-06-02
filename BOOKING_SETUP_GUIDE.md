# 🚀 Booking System Setup Guide

## Overview
Your website now has a complete booking system integrated with WhatsApp. Users can book appointments, and their details are automatically sent to your WhatsApp.

---

## 🔧 Configuration Steps

### Step 1: Update Your WhatsApp Number

In the BookingModal component, replace the placeholder WhatsApp number with yours:

**File:** `src/components/BookingModal/BookingModal.js` (Line ~77)

```javascript
// CHANGE THIS:
const whatsappNumber = '919515897027'; // Change to your WhatsApp number

// TO THIS (your WhatsApp number with country code, no spaces or symbols):
const whatsappNumber = '91XXXXXXXXXX'; // Your number here
```

**Example:** If your number is +91 95158 97027, use: `919515897027`

---

## 📱 How the System Works

### 1. **User Booking Flow**
- User selects a service and clicks "Book Now"
- Modal opens with booking form
- User enters: Name, Phone, Email, Date, Time, Question/Problem
- User clicks "Confirm on WhatsApp"
- WhatsApp Web opens with pre-filled message
- User sends the message to confirm booking

### 2. **Data Capture Methods** (Choose 1 or combine)

#### **Option A: WhatsApp Only (FREE, Recommended)**
✅ **Pros:**
- Zero cost
- Direct communication with customer
- Works on WhatsApp Web/Mobile
- Automatic message history

❌ **Cons:**
- Manual message management
- Need to organize messages manually

**Setup:** Already configured! Just update your WhatsApp number.

---

#### **Option B: Email Backup (FREE)**

Add your email to Formspree (free tier: 50 submissions/month):

1. Go to https://formspree.io
2. Sign up with your email
3. Copy your form endpoint (looks like: `f/xyzqwerty`)
4. Update in BookingModal.js (Line ~80):

```javascript
await fetch('https://formspree.io/f/YOUR_FORM_ID', {
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
}).catch(() => {});
```

---

#### **Option C: Google Sheets (FREE, Recommended for Data)**

Use Google Forms connected to Sheets:

1. Create a Google Form with fields matching the booking form
2. Get the form submission URL
3. Modify the BookingModal to submit to Google Forms (more complex setup)

---

#### **Option D: Airtable (FREE Tier Available)**

**Best for:** Professional data management & automation

1. Sign up at https://airtable.com (free tier)
2. Create a base with these fields:
   - Service
   - Price
   - Name
   - Phone
   - Email
   - Date
   - Time
   - Problem

3. Get your API key from settings
4. Use Airtable API to submit bookings

---

#### **Option E: Supabase (FREE Tier)**

**Best for:** Real-time database & advanced features

1. Sign up at https://supabase.com
2. Create a new project
3. Create a table: `bookings` with columns:
   - id (auto)
   - service_id
   - service_name
   - price
   - customer_name
   - customer_phone
   - customer_email
   - preferred_date
   - preferred_time
   - question
   - created_at (timestamp)

4. Get anon key from project settings
5. Update BookingModal to use Supabase client

---

## 📊 Recommended Setup (Best Practice)

**Combination approach (FREE):**

1. **Primary:** WhatsApp (direct communication)
2. **Backup:** Formspree or Google Sheets (data logging)

This gives you:
- ✅ Real-time communication
- ✅ Automatic data archiving
- ✅ Professional record-keeping
- ✅ Zero cost

---

## 🎯 Pricing Information

All prices are stored in the data files:

- `src/data/spiritualGuidance.js` - Spiritual guidance services
- `src/data/tarotReading.js` - Tarot readings
- `src/data/candleSpells.js` - Candle spell services

Update prices anytime by editing these files.

---

## 📋 Current Services Available

### Spiritual Guidance (12 services)
- Rs. 99 - Rs. 3,199

### Tarot Reading (4 services)
- Rs. 399 - Rs. 899

### Candle Spells (5 services)
- Rs. 599 - Rs. 999

---

## ✨ Features Included

✅ Full booking system with form validation  
✅ Date & time picker  
✅ WhatsApp integration  
✅ Service categorization  
✅ Price display  
✅ Mobile responsive design  
✅ Light/Dark mode support  
✅ Animated modals & transitions  
✅ Professional UI/UX  

---

## 🔒 Data Security

- No backend database stores user data
- Data only sent to WhatsApp & optionally to email
- Uses HTTPS connections
- No third-party tracking

---

## 📞 Troubleshooting

### WhatsApp Link Not Opening
- Check WhatsApp number format (no spaces/symbols)
- Ensure country code is included
- Try on WhatsApp Web first

### Form Not Submitting
- Check browser console for errors
- Verify all required fields are filled
- Check internet connection

### Email Not Receiving (Formspree)
- Verify form ID is correct
- Check spam folder
- Formspree free tier might have delays

---

## 🚀 Next Steps

1. Update your WhatsApp number in BookingModal.js
2. Test the booking system
3. Choose a data capture method (optional)
4. Share the booking link with customers
5. Monitor WhatsApp for bookings

---

## 📞 Support

For issues or questions:
- Check browser console (F12) for errors
- Verify all configuration steps
- Test booking form thoroughly before launch

---

**Last Updated:** June 2, 2026
**Version:** 1.0
