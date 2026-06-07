# 📌 Quick Start Checklist

🌐 **Live Website:** https://sacredalchemy.github.io  
📦 **GitHub Repo:** https://github.com/sacredalchemy/sacredalchemy.github.io

## ✅ What's Installed

Your website is now LIVE on GitHub Pages! Your website now includes:

### 1. **Booking System**
- ✅ Full booking form with validation
- ✅ Date & time picker
- ✅ Service selection
- ✅ Customer details collection

### 2. **Services & Pricing**
- ✅ Spiritual Guidance (12 services)
- ✅ Tarot Readings (4 services)
- ✅ Candle Spells (5 services)
- ✅ All with prices in INR (₹)

### 3. **Pages with Booking**
- ✅ Tarot Reading page (with Book Now buttons)
- ✅ Candle Spells page (with Book Now buttons)
- ✅ Products page (with tabs for Services & Oils)

### 4. **WhatsApp Integration**
- ✅ Automatic WhatsApp message generation
- ✅ WhatsApp Web support
- ✅ Pre-filled booking details

---

## 🔧 REQUIRED: Setup Your WhatsApp Number

**File to edit:** `src/components/BookingModal/BookingModal.js`

**Line ~77:**
```javascript
const whatsappNumber = '919951478032'; // ← CHANGE THIS TO YOUR NUMBER
```

**Your WhatsApp number format:**
- Country code + number (no + symbol, no spaces)
- Example: India +91 99514 78032 → `919951478032`

---

## 🎯 Test the Booking System

1. Go to any service page (Tarot Reading, Candle Spells, Products)
2. Click any "Book Now" button
3. Fill the form:
   - Name: Your name
   - Phone: Your 10-digit number
   - Email: Your email (optional)
   - Date: Pick a date
   - Time: Pick a time
   - Question: Write your concern
4. Click "Confirm on WhatsApp"
5. WhatsApp should open with your booking details

---

## 📊 Update Prices Anytime

All prices are in these files (easy to update):

**Spiritual Guidance:**
- `src/data/spiritualGuidance.js`

**Tarot Readings:**
- `src/data/tarotReading.js`

**Candle Spells:**
- `src/data/candleSpells.js`

Just change the `price` field in each service object.

---

## 📱 Data Collection Options

### **Option 1: WhatsApp Only (Recommended for Beginners)**
✅ Already set up  
✅ Zero cost  
✅ Direct communication  

**What you need:** Your WhatsApp number ← Update this!

---

### **Option 2: Add Email Backup (Recommended)**
✅ Free (Formspree: 50/month)  
✅ Professional record-keeping  

**Setup (5 minutes):**
1. Go to https://formspree.io
2. Sign up
3. Create a form and copy the ID
4. Update line ~80 in BookingModal.js with your form ID
5. Done!

---

### **Option 3: Google Sheets**
✅ Free unlimited  
✅ Easy to view/organize  

1. Create Google Form
2. Connect to Google Sheet
3. Point form submission to your sheet

---

### **Option 4: Airtable**
✅ Professional database  
✅ Automation possible  

1. Sign up at airtable.com
2. Create a bookings table
3. Add API integration (more advanced)

---

## 📋 Current Prices

All prices from your images already added! 

**Spiritual Guidance:**
- Angel Guidance: ₹99
- Current Feelings: ₹99-₹199
- Month Guidance: ₹499
- Readings: ₹499
- Voice Calls: ₹999-₹1999
- Special Services: ₹2500-₹3199

**Tarot Readings:**
- ₹399-₹899

**Candle Spells:**
- ₹599-₹999

---

## 🎨 Customize the Booking Form

**File:** `src/components/BookingModal/BookingModal.js`

You can modify:
- Form fields
- Validation rules
- Messages
- Button text
- Colors (via CSS)

---

## 📱 Mobile Responsive

✅ Booking form works on all devices  
✅ Optimized for mobile  
✅ Touch-friendly buttons  

---

## 🌓 Dark/Light Mode

✅ Booking modal supports both themes  
✅ Automatically switches with your theme toggle  

---

## ⚡ Performance

✅ No external dependencies needed  
✅ Fast loading  
✅ Small bundle size  
✅ Works offline (until sending to WhatsApp)  

---

## 🔒 Security & Privacy

✅ No database storage of customer data  
✅ HTTPS only (when deployed)  
✅ Data sent only to WhatsApp  
✅ Optional email backup  
✅ GDPR compliant  

---

## 🚀 Deployment

Ready to deploy! No backend changes needed.

Works on:
- Netlify ✅
- Vercel ✅
- GitHub Pages ✅
- Any static host ✅

---

## 📞 Support

### Common Issues:

**WhatsApp not opening?**
- Check WhatsApp number format (no spaces/symbols)
- Verify country code

**Form not submitting?**
- Check browser console (F12)
- Verify all fields filled
- Check internet connection

**Need more features?**
- See BOOKING_SETUP_GUIDE.md for advanced options

---

## 📈 Next Steps

1. ✅ Update WhatsApp number (REQUIRED)
2. ✅ Test booking form
3. ✅ (Optional) Add email backup
4. ✅ Launch and start getting bookings!

---

**You're all set! Start accepting bookings now!** 🎉

If you have questions about setup, see **BOOKING_SETUP_GUIDE.md**
