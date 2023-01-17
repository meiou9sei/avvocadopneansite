import { useState } from "react";

import About from "./components/About";
import Cipher from "./components/Cipher";
import Footer from "./components/Footer";

import "./styles/styles.scss";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className={`app ${theme}`}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Switch theme
      </button>
      <h1>Avvocadopnean Cipher</h1>
      <Cipher />
      <About />
      <Footer />
    </div>
  );
}

export default App;
