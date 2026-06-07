import { useState } from 'react';
import candleSpells from '../../data/candleSpells';
import BookingModal from '../../components/BookingModal/BookingModal';
import styles from './CandleSpells.module.css';

function CandleSpells() {
  const [selectedService, setSelectedService] = useState(null);
  const [showBooking, setShowBooking] = useState(false);

  const handleBooking = (spell) => {
    if (!spell.comingSoon) {
      setSelectedService(spell);
      setShowBooking(true);
    }
  };

  const renderCategory = (categoryKey) => {
    const categoryData = candleSpells[categoryKey];
    
    return (
      <div key={categoryKey} className={styles.categorySection}>
        <div className={styles.categoryHeader}>
          <h2 className={styles.categoryTitle}>
            <span className={styles.categoryEmoji}>{categoryData.emoji}</span>
            {categoryData.category}
          </h2>
          <p className={styles.categoryDescription}>
            {categoryData.description}
          </p>
        </div>
        
        <div className={styles.grid}>
          {categoryData.spells.map((spell) => (
            <article 
              key={spell.id} 
              className={`${styles.card} ${spell.comingSoon ? styles.comingSoon : ''}`}
            >
              {spell.comingSoon && (
                <div className={styles.comingSoonBadge}>Coming Soon</div>
              )}
              
              <div className={styles.colorDot} style={{ background: spell.color }} />
              
              <h3 className={styles.cardTitle}>{spell.title}</h3>
              <p className={styles.cardDesc}>{spell.description}</p>
              
              {!spell.comingSoon && spell.benefits && (
                <ul className={styles.benefitsList}>
                  {spell.benefits.slice(0, 3).map((benefit, idx) => (
                    <li key={idx}>✨ {benefit}</li>
                  ))}
                </ul>
              )}
              
              <div className={styles.cardFooter}>
                <div className={styles.spellInfo}>
                  <span className={styles.duration}>⏱️ {spell.durationDays} days</span>
                  <div className={styles.priceInfo}>
                    <span className={styles.price}>Rs. {spell.price}</span>
                    <span className={styles.priceNote}>{spell.priceNote}</span>
                  </div>
                </div>
                
                <button 
                  className={`${styles.cta} ${spell.comingSoon ? styles.disabled : ''}`}
                  onClick={() => handleBooking(spell)}
                  disabled={spell.comingSoon}
                >
                  {spell.comingSoon ? 'Coming Soon' : 'Book Now'}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <p className={styles.kicker}>🕯️ Sacred Rituals</p>
        <h1 className={styles.title}>Candle Magic Spells</h1>
        <p className={styles.description}>
          Harness the power of flame and intention with our curated candle spells for every need.
        </p>
        <div className={styles.pricingNote}>
          <strong>💫 All spells: ₹888 per day</strong> - Fee charged on daily basis for your selected duration
        </div>
      </div>

      <div className={styles.categoriesContainer}>
        {/* Health Spells */}
        {renderCategory('healthSpells')}
        
        {/* Marriage & Relationship Spells */}
        {renderCategory('relationshipSpells')}
        
        {/* Prosperity & Success Spells */}
        {renderCategory('prosperity')}
        
        {/* Clarity & Focus Spells */}
        {renderCategory('clarity')}
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
