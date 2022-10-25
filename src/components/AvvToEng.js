import { useEffect, useState } from "react";

const AVVSYMBOLS = [".", ",", "?", "!", "'"];

const AvvToEng = () => {
  const [avvText, setAvvText] = useState("");
  const [engText, setEngText] = useState("hi");

  useEffect(() => {
    //AVV->ENG EXPLAINED (uppercase example)
    //user types ,? .' ?, ?, ?' (HELLO)
    //take ,?
    //1) confirms is 2 letters (followed by space) and not a number (would start with ^ or *) nor hyphen (--)
    //2) index of , in AVVSYMBOLS[] is 1, ? is 2.
    //       multiply first by 5, then add second, then add ASCII 65 for A
    //       (1 * 5) + 2 + 65 = 72, or ASCII value for H
    //3) any groupings of 1 characters are left alone
    //       any groupings of 3 characters are deemed uppercase/lowercase (starts with ^ or *) or z (...)

    const sTD = avvText; // sTD = stringToDecipher
    const engString = [];

    let cI = 0; // cI = charIndex. tracks which index of String on
    // go through all of string

    function pushOntoEngString(charToPush, numIncrementCharIndex = 1) {
      if (charToPush !== "") engString.push(charToPush);
      cI += numIncrementCharIndex;
    }

    // prettier-ignore
    while (cI < sTD.length) {
      // first checks for z (...), uppercase z (^...), space (-), between letters ( ),
      if (sTD[cI] === '-') pushOntoEngString(' '); // space
      else if (sTD[cI] === ' ') pushOntoEngString(''); // between letters
      else if ((sTD[cI] === '.') && (sTD[cI+1] === '.') && (sTD[cI+2] === '.')) pushOntoEngString('z', 3); // z
      else if ((sTD[cI] === '*') && (sTD[cI+1] === '.') && (sTD[cI+2] === '.') && (sTD[cI+3] === '.')) pushOntoEngString('z', 4); // lowercase z
      else if ((sTD[cI] === '^') && (sTD[cI+1] === '.') && (sTD[cI+2] === '.') && (sTD[cI+3] === '.')) pushOntoEngString('Z', 4); // uppercase z

      // then moves onto rest of characters
      // if ^ or *: 2 chars is a number, 3 is a upper/lowercase specified letter 
      // else is a-y
      else if ( ((sTD[cI+1] !== ' ') && ( (sTD[cI+2] === ' ') || (cI+2 >= sTD.length) ) ) || ((sTD[cI+1] !== ' ') && (sTD[cI+2] !== ' ') && ( (sTD[cI+3] === ' ') || (cI+3 >= sTD.length) ) ) ) {
        ///////////////////
        ///////////////////
        ///////////////////
        /* LEFT OFF HERE */
        ///////////////////
        ///////////////////
        ///////////////////
        // IT WILL CRASH IF YOU DO ANYTHING BUT COPY PASTE A ... (or ' ', '', '*...', '^...')
        //code logic for this, and left-alone text. see if it works (useEffect) in displaying the avv->eng text simultaneously as user types 
        //other note: keep it a single page app, don't need routers I think. Just have it so user can type in either box (have them side by side) and it translates to other. 
        //have a "copy text" button to pasteboard
        //maybe another branch, write up history/how it works for avvocadopnean
        //this was an exercise in useState, useEffect, and maybe custom hook later so this component is gigantic
      }

      // any other text is punctuation (left alone) or non-interpretable text (not proper avvocadopnean)
      else pushOntoEngString(sTD[cI]);
    }

    setEngText(engString);
  }, [avvText]);

  return (
    <div className='CipherInputBox'>
      <label htmlFor='AvvToEngTextArea'>Input Avv {"->"} Eng text here:</label>
      <textarea
        name='AvvToEngTextArea'
        id='AvvToEngTextArea'
        cols='30'
        rows='10'
        value={avvText}
        onChange={(e) => setAvvText(e.target.value)}
      ></textarea>
      <p>test translation:</p>
      <p>{engText}</p>
    </div>
  );
};

export default AvvToEng;
