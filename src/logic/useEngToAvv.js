import { useEffect, useState } from "react";

import { AVVSYMBOLS, CLONESYMBOLS } from "../library/avvocConstants";

const useEngToAvv = () => {
  const [avvText, setAvvText] = useState("");
  const [engText, setEngText] = useState("");

  useEffect(() => {
    /**
     * ENG->AVV EXPLAINED (uppercase example)
     * user types HELLO
     * int values 72 69 76 76 79
     * replaces those values with -64. / and % resulting int
     * ex: 72 - 64 = 8. then divide 8 / 5 = 1, or 1st row (,), then 8 % 5 = 3, or 3rd column (?).
     * takes these from AVVSYMBOLS[]
     * ingenious i know hehe >:)
     *
     * ASCII Codes for A~Z. for a~z just use 97-122
     *     .   ,   ?   !   '
     *   +-------------------+
     * . |65 |66 |67 |68 |69 |
     *   +-------------------+
     * , |70 |71 |72 |73 |74 |
     *   +-------------------+
     * ? |75 |76 |77 |78 |79 |
     *   +-------------------+
     * ! |80 |81 |82 |83 |84 |
     *   +-------------------+
     * ' |85 |86 |87 |88 |89 |
     *   +-------------------+
     * ... is 90
     */

    // sTE = stringToEncipher
    const sTE = engText;
    const avvString = [];

    // cI = charIndex. tracks which index of String on
    let cI = 0;
    let symbolRow = null;
    let symbolColumn = null;

    function pushOntoAvvString(charToPush, numIncrementCharIndex = 1) {
      avvString.push(charToPush);
      avvString.push(" ");
      cI += numIncrementCharIndex;
    }

    //prettier-ignore
    while (cI < sTE.length) {
      // deals w/ clone symbols
      if (CLONESYMBOLS.includes(sTE[cI])) {
        switch (sTE[cI]) {
          case ":":
            pushOntoAvvString(".");
            break;
          case ";":
            pushOntoAvvString(",");
            break;
          case '"':
            pushOntoAvvString("'");
            break;
        }
      }

      // deals w/ space character
      else if (sTE[cI] === " ") {
        // exclude "'"
        if (sTE[cI] !== "'" || sTE[cI - 1] !== "'") {
          if (
            !AVVSYMBOLS.includes(sTE[cI]) ||
            !AVVSYMBOLS.includes(sTE[cI - 1])
          ) {
            pushOntoAvvString("-");
          }
        }
      }

      // deals w/ punctuation markers which end sentence
      else if (sTE[cI] !== "'" && AVVSYMBOLS.includes(sTE[cI]))
        pushOntoAvvString(sTE[cI], 2);

      // - in english is -- in avvocadopnean
      else if (sTE[cI] === "-") pushOntoAvvString("--");

      // deals w/ zs
      else if (sTE[cI] === "z" || sTE[cI] === "Z") pushOntoAvvString("...");

      // deals w/ lowercase letters
      else if (/[a-z]/.test(sTE[cI])) {
        symbolRow = Math.floor((sTE[cI].charCodeAt(0) - 97) / 5);
        symbolColumn = (sTE[cI].charCodeAt(0) - 97) % 5;
        let temp = [];
        temp.push(AVVSYMBOLS[symbolRow]);
        temp.push(AVVSYMBOLS[symbolColumn]);
        pushOntoAvvString(temp);
      }

      // deals w/ uppercase letters - for now, does same thing, but later will add option to ^ these
      else if (/[A-Z]/.test(sTE[cI])) {
        symbolRow = Math.floor((sTE[cI].charCodeAt(0) - 65) / 5);
        symbolColumn = (sTE[cI].charCodeAt(0) - 65) % 5;
        let temp = [];
        temp.push(AVVSYMBOLS[symbolRow]);
        temp.push(AVVSYMBOLS[symbolColumn]);
        pushOntoAvvString(temp);
      }

      // deal w/ numbers
      // TODO: code for numbers here

      // deals w/ any other character not included in Avvocadopnean
      else {
        pushOntoAvvString(sTE[cI]);
        console.log("entered");
      }
    }
    setAvvText(avvString);
  }, [engText]);

  return { avvText, setAvvText, engText, setEngText };
};

export default useEngToAvv;
