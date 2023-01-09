import useAvvToEng from "../logic/useAvvToEng";

const AvvToEng = () => {
  const { avvText, setAvvText, engText, setEngText } = useAvvToEng();
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
      <p>test Eng translation:</p>
      <p>{engText}</p>
    </div>
  );
};

export default AvvToEng;
