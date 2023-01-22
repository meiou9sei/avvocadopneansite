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

  const [savedAvvText, setSavedAvvText] = useState(
    localStorage.getItem("avvoc.savedAvvText") || ""
  );
  const [savedEngText, setSavedEngText] = useState(
    localStorage.getItem("avvoc.savedEngText") || ""
  );

  return (
    <section className='cipher'>
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
      <button className='switch-cipher-mode' onClick={switchCipher}>
        Switch cipher mode!
      </button>
    </section>
  );
}
