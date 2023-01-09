import { useEffect } from "react";

import useEngToAvv from "../logic/useEngToAvv";

export default function EngToAvv({ savedEngText, setSavedEngText }) {
  const { avvText, setAvvText, engText, setEngText } = useEngToAvv();

  useEffect(() => {
    setEngText(savedEngText);
  }, []);

  useEffect(() => {
    setSavedEngText(engText);
  }, [engText]);

  const clearText = () => {
    setEngText("");
  };

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
      <button onClick={clearText}>Clear entry</button>
      <p>test Avv translation:</p>
      <p>{avvText}</p>
    </div>
  );
}
