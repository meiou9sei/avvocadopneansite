import EngToAvv from "./components/EngToAvv";
import AvvToEng from "./components/AvvToEng";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='app'>
      <EngToAvv />
      <div style={{ backgroundColor: "red", width: "100%", height: "16px" }} />
      <AvvToEng />
      <About />
      <Footer />
    </div>
  );
}

export default App;
