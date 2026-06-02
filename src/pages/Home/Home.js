import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import styles from './Home.module.css';

function Home() {
  const widgets = [
    {
      id: 'tarot-reading',
      title: 'Tarot Reading & Guidance',
      emoji: '🎴',
      color: 'tarot',
      description: 'Receive mystical messages and divine guidance.',
      link: '/tarot-reading',
    },
    {
      id: 'candle-spells',
      title: 'Candle Magic Spells',
      emoji: '🕯️',
      color: 'candles',
      description: 'Harness the power of flame and intention.',
      link: '/candle-spells',
    },
    {
      id: 'oils',
      title: 'Ritual Oils',
      emoji: '🫧',
      color: 'oils',
      description: 'Infuse your rituals with powerful essences.',
      link: '/products',
    },
    {
      id: 'tarot-teachings',
      title: 'Tarot Card Teachings',
      emoji: '📖',
      color: 'teachings',
      description: 'Master the wisdom of the sacred cards.',
      link: '/tarot-teachings',
    },
  ];

  return (
    <div className={styles.heroSection}>
      <div className={styles.glitterBg} />
      
      <div className={styles.heroIntro}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
        <h1 className={styles.heading}>Sacred Alchemy Rituals</h1>
        <p className={styles.description}>
          Explore tarot wisdom, candle magic, ritual oils, and spiritual teachings to elevate your practice.
        </p>
      </div>

      <div className={styles.widgetGrid}>
        {widgets.map((widget) => (
          <Link key={widget.id} to={widget.link} className={`${styles.widget} ${styles[widget.color]}`}>
            <div className={styles.widgetIcon}>{widget.emoji}</div>
            <h3 className={styles.widgetTitle}>{widget.title}</h3>
            <p className={styles.widgetDesc}>{widget.description}</p>
            <div className={styles.widgetArrow}>→</div>
          </Link>
        ))}
      </div>

      <div className={styles.featuresBlock}>
        <div className={styles.featureItem}>
          <span className={styles.featureIcon}>✨</span>
          <h4>Handcrafted Rituals</h4>
          <p>Curated practices designed to manifest your intentions.</p>
        </div>
        <div className={styles.featureItem}>
          <span className={styles.featureIcon}>🌙</span>
          <h4>Divine Guidance</h4>
          <p>Connect with the wisdom of the universe.</p>
        </div>
        <div className={styles.featureItem}>
          <span className={styles.featureIcon}>💫</span>
          <h4>Spiritual Growth</h4>
          <p>Transform through knowledge and sacred practice.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
