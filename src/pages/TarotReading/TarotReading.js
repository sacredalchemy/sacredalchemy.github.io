import { useState } from 'react';
import tarotReading from '../../data/tarotReading';
import BookingModal from '../../components/BookingModal/BookingModal';
import styles from './TarotReading.module.css';

function TarotReading() {
  const [selectedService, setSelectedService] = useState(null);
  const [showBooking, setShowBooking] = useState(false);

  const handleBooking = (reading) => {
    setSelectedService(reading);
    setShowBooking(true);
  };

  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <p className={styles.kicker}>✨ Mystical Guidance</p>
        <h1 className={styles.title}>Tarot Reading & Guidance</h1>
        <p className={styles.description}>
          Receive messages from the cards and discover guidance for your life's journey.
        </p>
      </div>

      <div className={styles.grid}>
        {tarotReading.map((reading) => (
          <article key={reading.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>{reading.title}</h2>
              <span className={styles.cardBadge}>{reading.cards} Cards</span>
            </div>
            <p className={styles.cardDesc}>{reading.description}</p>
            <div className={styles.cardFooter}>
              <span className={styles.price}>Rs. {reading.price}</span>
              <button 
                className={styles.cta}
                onClick={() => handleBooking(reading)}
              >
                Book Now
              </button>
            </div>
          </article>
        ))}
      </div>

      {selectedService && (
        <BookingModal 
          service={selectedService}
          isOpen={showBooking}
          onClose={() => setShowBooking(false)}
        />
      )}
    </section>
  );
}

export default TarotReading;
