import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import TarotReading from './pages/TarotReading/TarotReading';
import CandleSpells from './pages/CandleSpells/CandleSpells';
import TarotTeachings from './pages/TarotTeachings/TarotTeachings';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appShell}>
      <Header />
      <main className={styles.mainContent}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/tarot-reading" element={<TarotReading />} />
          <Route path="/candle-spells" element={<CandleSpells />} />
          <Route path="/tarot-teachings" element={<TarotTeachings />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
