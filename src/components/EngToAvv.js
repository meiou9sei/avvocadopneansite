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
  }, [engText]);

  return (
    <div className='PlainTextInputBox'>
      <h2>Encipher English to Avvocadopnean</h2>
      <label htmlFor='EngToAvvTextArea'>Input Eng {"->"} Avv text here:</label>
      <textarea
        name='engToAvvTextArea'
        id='engToAvvTextArea'
        cols='30'
        rows='10'
        value={engText}
        onChange={(e) => setEngText(e.target.value)}
      ></textarea>
      <CipherControls clearText={setEngText} copyText={avvText} />
      <p>Avv translation:</p>
      <p>{avvText}</p>
    </div>
  );
}
