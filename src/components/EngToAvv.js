import { useEffect } from "react";

import useEngToAvv from "../logic/useEngToAvv";
import CipherControls from "./CipherControls";

export default function EngToAvv({ savedEngText, setSavedEngText }) {
  const { avvText, setAvvText, engText, setEngText } = useEngToAvv();

  useEffect(() => {
    setEngText(savedEngText);
  }, []);

  useEffect(() => {
    setSavedEngText(engText);
    localStorage.setItem("avvoc.savedEngText", engText);
  }, [engText]);

  return (
    <div className='cipher-input-box'>
      <h2>Encipher English to Avvocadopnean</h2>
      <div className='cipher-io'>
        <div className='cipher-input'>
          <h3>
            <label htmlFor='EngToAvvTextArea'>Input English text:</label>
          </h3>
          <textarea
            name='engToAvvTextArea'
            id='engToAvvTextArea'
            className='cipher-textarea'
            value={engText}
            onChange={(e) => setEngText(e.target.value)}
          ></textarea>
        </div>
        <div className='cipher-output'>
          <h3>Avvocadopnean result:</h3>
          <textarea className='cipher-resultarea' value={avvText}></textarea>
        </div>
      </div>
      <CipherControls clearText={setEngText} copyText={avvText} />
    </div>
  );
}
