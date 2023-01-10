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

  const [savedAvvText, setSavedAvvText] = useState("");
  const [savedEngText, setSavedEngText] = useState("");

  return (
    <section className='cipher'>
      <div className='switch-cipher-mode'>
        <button className='switch-cipher-mode-button' onClick={switchCipher}>
          Switch cipher mode!
        </button>
      </div>
      <div className='cipher-wrapper'>
        {activeCipher === "EngToAvv" && (
          <EngToAvv
            savedEngText={savedEngText}
            setSavedEngText={setSavedEngText}
          />
        )}
        {activeCipher === "AvvToEng" && (
          <AvvToEng
            savedAvvText={savedAvvText}
            setSavedAvvText={setSavedAvvText}
          />
        )}
      </div>
    </section>
  );
}
