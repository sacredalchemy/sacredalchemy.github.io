import styles from './Logo.module.css';

function Logo() {
  return (
    <div className={styles.logo}>
      <img
        src="/bslogo.png"
        alt="BS logo"
        className={styles.img}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = '/logo.svg';
        }}
      />
      <div className={styles.labelWrap}>
        <span className={styles.label}>Sacred Alchemy</span>
        <span className={styles.subLabel}>BS Rituals</span>
      </div>
    </div>
  );
}

export default Logo;
