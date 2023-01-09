import useEngToAvv from "../logic/useEngToAvv";

export default function EngToAvv() {
  const { avvText2, setAvvText2, engText2, setEngText2 } = useEngToAvv();

  return (
    <div className='PlainTextInputBox'>
      <label htmlFor='EngToAvvTextArea'>Input Eng {"->"} Avv text here:</label>
      <textarea
        name='engToAvvTextArea'
        id='engToAvvTextArea'
        cols='30'
        rows='10'
        value={engText2}
        onChange={(e) => setEngText2(e.target.value)}
      ></textarea>
      <p>test Avv translation:</p>
      <p>{avvText2}</p>
    </div>
  );
}
