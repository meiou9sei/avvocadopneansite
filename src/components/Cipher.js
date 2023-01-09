import EngToAvv from "./EngToAvv";
import AvvToEng from "./AvvToEng";
import { useState } from "react";

export default function Cipher() {
  const [activeCipher, setActiveCipher] = useState("EngToAvv");

  const switchCipher = () => {
    activeCipher === "EngToAvv"
      ? setActiveCipher("AvvToEng")
      : setActiveCipher("EngToAvv");
  };
  return (
    <section className='cipher'>
      <div className='switch-cipher-mode'>
        <button className='switch-cipher-mode-button' onClick={switchCipher}>
          Switch cipher!
        </button>
      </div>
      <div className='cipher-wrapper'>
        {activeCipher === "EngToAvv" && <EngToAvv />}
        {activeCipher === "AvvToEng" && <AvvToEng />}
      </div>
    </section>
  );
}
