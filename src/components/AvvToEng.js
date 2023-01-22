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
    <div className='cipher-input-box'>
      <h2>Decipher Avvocadopnean to English</h2>
      <div className='cipher-io'>
        <div className='cipher-input'>
          <h3>
            <label htmlFor='AvvToEngTextArea'>Input Avvocadopnean text:</label>
          </h3>
          <textarea
            name='AvvToEngTextArea'
            id='AvvToEngTextArea'
            className='cipher-textarea'
            value={avvText}
            onChange={(e) => setAvvText(e.target.value)}
          ></textarea>
        </div>
        <div className='cipher-output'>
          <h3>English result:</h3>
          <textarea className='cipher-resultarea' value={engText}></textarea>
        </div>
      </div>
      <CipherControls clearText={setAvvText} copyText={engText} />
    </div>
  );
};

export default AvvToEng;
