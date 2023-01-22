import { useState, useEffect } from "react";

import About from "./components/About";
import Cipher from "./components/Cipher";
import Footer from "./components/Footer";

import "./styles/styles.scss";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("avvoc.theme") || "light"
  );
  useEffect(() => {
    localStorage.setItem("avvoc.theme", theme);
  }, [theme]);

  return (
    <div className={`app ${theme}`}>
      <header>
        <h1>Avvocadopnean Cipher</h1>
        <button
          className='switch-theme'
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          Switch theme
        </button>
      </header>
      <main>
        <Cipher />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
