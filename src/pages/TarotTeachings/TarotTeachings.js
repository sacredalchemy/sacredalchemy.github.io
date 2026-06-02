import tarotTeachings from '../../data/tarotTeachings';
import styles from './TarotTeachings.module.css';

function TarotTeachings() {
  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <p className={styles.kicker}>📖 Sacred Knowledge</p>
        <h1 className={styles.title}>Tarot Card Teachings</h1>
        <p className={styles.description}>
          Master the art and wisdom of tarot through guided lessons and intuitive practices.
        </p>
      </div>

      <div className={styles.grid}>
        {tarotTeachings.map((teaching) => (
          <article key={teaching.id} className={styles.card}>
            <h2 className={styles.cardTitle}>{teaching.title}</h2>
            <p className={styles.cardDesc}>{teaching.description}</p>
            <div className={styles.footer}>
              <span className={styles.lessons}>📚 {teaching.lessons} Lessons</span>
              <button className={styles.cta}>Start Learning</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TarotTeachings;
