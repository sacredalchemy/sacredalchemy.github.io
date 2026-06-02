import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Header.module.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <>
      <header className={styles.header}>
        <Logo />
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/tarot-reading" className={({ isActive }) => (isActive ? styles.active : '')} onClick={closeMenu}>
            Tarot
          </NavLink>
          <NavLink to="/candle-spells" className={({ isActive }) => (isActive ? styles.active : '')} onClick={closeMenu}>
            Spells
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => (isActive ? styles.active : '')} onClick={closeMenu}>
            Oils
          </NavLink>
          <NavLink to="/tarot-teachings" className={({ isActive }) => (isActive ? styles.active : '')} onClick={closeMenu}>
            Teachings
          </NavLink>
        </nav>
        <div className={styles.actions}>
          <ThemeToggle />
          <button
            type="button"
            className={`${styles.menuToggle} ${menuOpen ? styles.menuOpen : ''}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
          >
            <span className={styles.menuIcon} />
            <span className={styles.menuIcon} />
            <span className={styles.menuIcon} />
          </button>
        </div>
      </header>
      {menuOpen && (
        <div className={styles.backdrop} onClick={closeMenu} aria-hidden="true" />
      )}
    </>
  );
}

export default Header;
