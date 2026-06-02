import { useState } from 'react';
import spiritualGuidance from '../../data/spiritualGuidance';
import oils from '../../data/oils';
import ProductCard from '../../components/ProductCard/ProductCard';
import BookingModal from '../../components/BookingModal/BookingModal';
import styles from './Products.module.css';

function Products() {
  const [selectedService, setSelectedService] = useState(null);
  const [showBooking, setShowBooking] = useState(false);
  const [activeTab, setActiveTab] = useState('services');
  const [activeCategory, setActiveCategory] = useState('all');

  const handleBooking = (service) => {
    setSelectedService(service);
    setShowBooking(true);
  };

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'guidance', label: 'Guidance' },
    { id: 'reading', label: 'Readings' },
    { id: 'call', label: 'Voice Calls' },
    { id: 'special', label: 'Special Services' },
  ];

  const filteredServices = activeCategory === 'all' 
    ? spiritualGuidance 
    : spiritualGuidance.filter(s => s.category === activeCategory);

  return (
    <section className={styles.productsPage}>
      {/* Tabs */}
      <div className={styles.tabContainer}>
        <button
          className={`${styles.tab} ${activeTab === 'services' ? styles.active : ''}`}
          onClick={() => setActiveTab('services')}
        >
          ✨ Spiritual Services
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'oils' ? styles.active : ''}`}
          onClick={() => setActiveTab('oils')}
        >
          🛢️ Ritual Oils
        </button>
      </div>

      {/* Spiritual Services Tab */}
      {activeTab === 'services' && (
        <>
          <div className={styles.headerBlock}>
            <p className={styles.kicker}>💎 Premium Services</p>
            <h1 className={styles.heading}>Spiritual Guidance & Services</h1>
            <p className={styles.description}>
              Connect with divine guidance through our curated selection of spiritual services.
              Each service is designed to bring clarity, empowerment, and transformation to your life.
            </p>
          </div>

          {/* Category Filter */}
          <div className={styles.filterContainer}>
            <div className={styles.filterButtons}>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.active : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className={styles.servicesGrid}>
            {filteredServices.map((service) => (
              <article key={service.id} className={styles.serviceCard}>
                <div className={styles.cardHeader}>
                  <h2 className={styles.cardTitle}>{service.title}</h2>
                  <span className={styles.badge}>{service.category}</span>
                </div>
                <p className={styles.cardDesc}>{service.description}</p>
                
                <div className={styles.cardMeta}>
                  <span className={styles.duration}>⏱️ {service.duration}</span>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.priceBox}>
                    <span className={styles.price}>Rs. {service.price}</span>
                  </div>
                  <button 
                    className={styles.ctaService}
                    onClick={() => handleBooking(service)}
                  >
                    Book Now
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className={styles.empty}>
              <p>No services found in this category.</p>
            </div>
          )}
        </>
      )}

      {/* Ritual Oils Tab */}
      {activeTab === 'oils' && (
        <>
          <div className={styles.headerBlock}>
            <p className={styles.kicker}>Oils & Rituals</p>
            <h1 className={styles.heading}>Explore our ritual oil collection</h1>
            <p className={styles.description}>
              Choose from seven intention-driven blends for prosperity, business growth, study focus, love, protection, and more.
            </p>
          </div>

          <div className={styles.grid}>
            {oils.map((oil) => (
              <ProductCard key={oil.id} oil={oil} />
            ))}
          </div>

          <div className={styles.noteCard}>
            <h2>How to use these oils</h2>
            <ol>
              <li>Choose the oil that matches your intention.</li>
              <li>Apply a small amount on wrists, palms, candles, or personal items.</li>
              <li>Speak your affirmation, light a candle, and focus on your goals.</li>
            </ol>
          </div>
        </>
      )}

      {/* Booking Modal */}
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

export default Products;
