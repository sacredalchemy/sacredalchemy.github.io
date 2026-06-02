import { useState } from 'react';
import candleSpells from '../../data/candleSpells';
import BookingModal from '../../components/BookingModal/BookingModal';
import styles from './CandleSpells.module.css';

function CandleSpells() {
  const [selectedService, setSelectedService] = useState(null);
  const [showBooking, setShowBooking] = useState(false);

  const handleBooking = (spell) => {
    setSelectedService(spell);
    setShowBooking(true);
  };

  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <p className={styles.kicker}>🕯️ Sacred Rituals</p>
        <h1 className={styles.title}>Candle Magic Spells</h1>
        <p className={styles.description}>
          Harness the power of flame and intention with our curated candle spells for every need.
        </p>
      </div>

      <div className={styles.grid}>
        {candleSpells.map((spell) => (
          <article key={spell.id} className={styles.card}>
            <div className={styles.colorDot} style={{ background: spell.color }} />
            <h2 className={styles.cardTitle}>{spell.title}</h2>
            <p className={styles.cardDesc}>{spell.description}</p>
            <div className={styles.cardFooter}>
              <div className={styles.spellInfo}>
                <span className={styles.duration}>⏱️ {spell.duration}</span>
                <span className={styles.price}>Rs. {spell.price}</span>
              </div>
              <button 
                className={styles.cta}
                onClick={() => handleBooking(spell)}
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

export default CandleSpells;
