import { useEffect, useState } from "react";

/* NOTE: */
/* FOR NOW - SEPARATING AVV->ENG AND ENG->AVV. WILL MERGE THEM IN NEXT BRANCH */

export default function EngToAvv() {
  const [avvText2, setAvvText2] = useState("");
  const [engText2, setEngText2] = useState("");

  useEffect(() => {
    //ENG->AVV EXPLAINED (uppercase example)
    //user types HELLO
    //int values 72 69 76 76 79
    //replaces those values with -64. / and % resulting int
    //ex: 72 - 64 = 8. then divide 8 / 5 = 1, or 1st row (,), then 8 % 5 = 3, or 3rd column (?).
    //takes these from AVVSYMBOLS[]
    //ingenious i know hehe >:)
    /*
    ASCII Codes for A~Z. for a~z just use 97-122
        .   ,   ?   !   '  
      +-------------------+
    . |65 |66 |67 |68 |69 |
      +-------------------+
    , |70 |71 |72 |73 |74 |
      +-------------------+
    ? |75 |76 |77 |78 |79 |
      +-------------------+
    ! |80 |81 |82 |83 |84 |
      +-------------------+
    ' |85 |86 |87 |88 |89 |
      +-------------------+
    ... is 90
    */
  });
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
