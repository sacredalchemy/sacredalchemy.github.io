import { useState } from 'react';
import styles from './BookingModal.module.css';

function BookingModal({ service, isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    problem: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      alert('Please enter your full name');
      return false;
    }
    if (!formData.phone.trim()) {
      alert('Please enter your phone number');
      return false;
    }
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      alert('Please enter a valid 10-digit phone number');
      return false;
    }
    if (!formData.date) {
      alert('Please select a date');
      return false;
    }
    if (!formData.time) {
      alert('Please select a time');
      return false;
    }
    if (!formData.problem.trim()) {
      alert('Please describe your question or concern');
      return false;
    }
    return true;
  };

  const sendToWhatsApp = async () => {
    if (!validateForm()) return;

    setLoading(true);

    try {
      const message = `📌 *New Booking Request*\n\n` +
        `*Service:* ${service.title}\n` +
        `*Price:* Rs. ${service.price}\n` +
        `*Name:* ${formData.fullName}\n` +
        `*Phone:* ${formData.phone}\n` +
        `*Email:* ${formData.email || 'Not provided'}\n` +
        `*Date:* ${formData.date}\n` +
        `*Time:* ${formData.time}\n` +
        `*Question/Concern:* ${formData.problem}\n\n` +
        `_Booking made via website_`;

      // WhatsApp API URL - Replace with your WhatsApp number
      const whatsappNumber = '919951478032'; // Change to your WhatsApp number
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Also try to send via Formspree (email backup)
      await fetch('https://formspree.io/f/xyzqwerty', {
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
      }).catch(() => {}); // Silent fail if Formspree not configured

      // Open WhatsApp
      window.open(whatsappURL, '_blank');

      setSubmitted(true);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        problem: '',
      });

      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('Error submitting booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        {submitted ? (
          <div className={styles.successMessage}>
            <div className={styles.successIcon}>✓</div>
            <h2>Booking Submitted!</h2>
            <p>Redirecting to WhatsApp to confirm your appointment...</p>
          </div>
        ) : (
          <>
            <div className={styles.header}>
              <h2>Book Your {service.title}</h2>
              <p className={styles.priceTag}>Rs. {service.price}</p>
            </div>

            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="fullName">Full Name *</label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number *</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="+91 Your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email (Optional)</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="date">Preferred Date *</label>
                  <input
                    id="date"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="time">Preferred Time *</label>
                  <input
                    id="time"
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="problem">
                  Your Question/Concern *
                </label>
                <textarea
                  id="problem"
                  name="problem"
                  placeholder="Describe what you need guidance on..."
                  rows="4"
                  value={formData.problem}
                  onChange={handleInputChange}
                />
              </div>

              <button
                type="button"
                className={styles.submitBtn}
                onClick={sendToWhatsApp}
                disabled={loading}
              >
                {loading ? 'Processing...' : '📱 Confirm on WhatsApp'}
              </button>

              <p className={styles.disclaimer}>
                By booking, you agree to receive updates via WhatsApp. We keep your data secure.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default BookingModal;
