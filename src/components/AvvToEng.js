import { useEffect } from "react";

import useAvvToEng from "../logic/useAvvToEng";
import CipherControls from "./CipherControls";

const AvvToEng = ({ savedAvvText, setSavedAvvText }) => {
  const { avvText, setAvvText, engText, setEngText } = useAvvToEng();

  useEffect(() => {
    setAvvText(savedAvvText);
  }, []);

  useEffect(() => {
    setSavedAvvText(avvText);
    localStorage.setItem("avvoc.savedAvvText", avvText);
  }, [avvText]);

  return (
    <div className='CipherInputBox'>
      <h2>Decipher Avvocadopnean to English</h2>
      <label htmlFor='AvvToEngTextArea'>Input Avv {"->"} Eng text here:</label>
      <textarea
        name='AvvToEngTextArea'
        id='AvvToEngTextArea'
        cols='30'
        rows='10'
        value={avvText}
        onChange={(e) => setAvvText(e.target.value)}
      ></textarea>
      <CipherControls clearText={setAvvText} copyText={engText} />

      <p>English result:</p>
      <p>{engText}</p>
    </div>
  );
};

export default AvvToEng;
