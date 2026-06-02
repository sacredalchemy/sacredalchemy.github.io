import styles from './ProductCard.module.css';

function ProductCard({ oil }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{oil.title}</h3>
      <p className={styles.subtitle}>{oil.subtitle}</p>
      <ul className={styles.features}>
        {oil.highlights.slice(0, 4).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className={styles.more}>Explore the ritual ways to use this oil on the Oils page.</p>
    </article>
  );
}

export default ProductCard;
