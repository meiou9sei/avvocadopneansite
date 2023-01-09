import { useEffect } from "react";

import useEngToAvv from "../logic/useEngToAvv";

export default function EngToAvv({ savedEngText, setSavedEngText }) {
  const { avvText2, setAvvText2, engText2, setEngText2 } = useEngToAvv();

  useEffect(() => {
    setEngText2(savedEngText);
  }, []);

  useEffect(() => {
    setSavedEngText(engText2);
  }, [engText2]);

  const clearText = () => {
    setEngText2("");
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
        value={engText2}
        onChange={(e) => setEngText2(e.target.value)}
      ></textarea>
      <button onClick={clearText}>Clear entry</button>
      <p>test Avv translation:</p>
      <p>{avvText2}</p>
    </div>
  );
}
