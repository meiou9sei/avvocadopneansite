import About from "./components/About";
import Cipher from "./components/Cipher";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='app'>
      <h1>Avvocadopnean Cipher</h1>
      <Cipher />
      <About />
      <Footer />
    </div>
  );
}

export default App;
