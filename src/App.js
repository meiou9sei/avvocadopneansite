import EngToAvv from "./components/EngToAvv";
import AvvToEng from "./components/AvvToEng";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='app'>
      <h1>Avvocadopnean Cipher</h1>
      <EngToAvv />
      <AvvToEng />
      <About />
      <Footer />
    </div>
  );
}

export default App;
