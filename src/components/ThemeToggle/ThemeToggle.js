import { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.css';

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('bs-theme') || 'dark';
    } catch (e) {
      return 'dark';
    }
  });

  useEffect(() => {
    const isLight = theme === 'light';
    document.documentElement.classList.toggle('light-theme', isLight);
    try {
      localStorage.setItem('bs-theme', theme);
    } catch (e) {}
  }, [theme]);

  return (
    <button
      aria-label="Toggle theme"
      className={styles.toggle}
      onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
    >
      {theme === 'light' ? '☀️' : '🌙'}
    </button>
  );
}

export default ThemeToggle;
