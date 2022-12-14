import { useEffect, useState } from "react";

import { AVVSYMBOLS } from "../library/avvocConstants";

const defaultCase = 97;

const useAvvToEng = () => {
  const [avvText, setAvvText] = useState("");
  const [engText, setEngText] = useState("");

  useEffect(() => {
    /**
     * AVV->ENG EXPLAINED (uppercase example)
     * user types ,? .' ?, ?, ?' (HELLO)
     * take ,?
     * 1) confirms is 2 letters (followed by space) and not a number (would start with ^ or *) nor hyphen (--)
     * 2) index of , in AVVSYMBOLS[] is 1, ? is 2.
     *      multiply first by 5, then add second, then add ASCII 65 for A
     *      (1 * 5) + 2 + 65 = 72, or ASCII value for H
     * 3) any groupings of 1 characters are left alone
     *      any groupings of 3 characters are deemed uppercase/lowercase (starts with ^ or *) or z (...)
     */

    // sTD = stringToDecipher
    const sTD = avvText;
    const engString = [];

    // cI = charIndex. tracks which index of String on
    let cI = 0;

    // go through all of string
    function pushOntoEngString(charToPush, numIncrementCharIndex = 1) {
      if (charToPush !== "") engString.push(charToPush); // if value passed is null, just increments cI w/o pushing anything to engString
      cI += numIncrementCharIndex;
    }

    // prettier-ignore
    while (cI < sTD.length) {
      // letterCase is 65 for uppercase, 97 for lowercase (ASCII)
      let letterCase = defaultCase;
      let symbolRow = null;
      let symbolColumn = null;

      // first checks for z (...), uppercase z (^...), space (-)
      if (sTD[cI] === '-') pushOntoEngString(' '); // space
      if ((sTD[cI] === '.') && (sTD[cI+1] === '.') && (sTD[cI+2] === '.')) pushOntoEngString('z', 3); // z
      if ((sTD[cI] === '*') && (sTD[cI+1] === '.') && (sTD[cI+2] === '.') && (sTD[cI+3] === '.')) pushOntoEngString('z', 4); // lowercase z
      if ((sTD[cI] === '^') && (sTD[cI+1] === '.') && (sTD[cI+2] === '.') && (sTD[cI+3] === '.')) pushOntoEngString('Z', 4); // uppercase z

      /**
       *  then detects for numbers
       * ?_ denotes binary
       * !_ denotes base10
       */ 

      // detects if valid case specifier exists
      if (
        (sTD[cI] === '^' || sTD[cI] === '*') &&
        AVVSYMBOLS.includes(sTD[cI+1]) &&
        AVVSYMBOLS.includes(sTD[cI+2])
      ) {
          if (sTD[cI] === '^') letterCase = 65; // uppercase
          else if (sTD[cI] === '*') letterCase = 97; // lowercase
          cI++;
      }
      
      // else is a-y
      if ( 
        AVVSYMBOLS.includes(sTD[cI]) &&
        AVVSYMBOLS.includes(sTD[cI+1])
      ) {
        // 2 character decipher

        // finds row
        for (let i = 0; i < 5; i++) {
          if (sTD[cI] === AVVSYMBOLS[i]) symbolRow = i;
        }
        cI++;
        
        // finds column
        for (let i = 0; i < 5; i++) {
          if (sTD[cI] === AVVSYMBOLS[i]) symbolColumn = i;
        }

        let resultingCharacter = String.fromCharCode( ((symbolRow * 5) + symbolColumn + letterCase) ); // does formula, converts number to ASCII char
        pushOntoEngString(resultingCharacter);
      }

      // clean up for spaces ( )
      
      // between letters
      if (sTD[cI] === ' ') pushOntoEngString('');

      // any other text is punctuation (left alone) or non-interpretable text (not proper avvocadopnean)
      else pushOntoEngString(sTD[cI]);
    }

    // concatenate array of arrays to just a string
    let newString = "";
    for (let i = 0; i < engString.length; i++) {
      if (engString.length > 1) {
        newString = engString.join("");
      }
    }

    setEngText(newString);
  }, [avvText]);

  return { avvText, setAvvText, engText, setEngText };
};

export default useAvvToEng;
