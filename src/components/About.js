import TableAvvocDecipher from "./tables/TableAvvocDecipher";
import TableAvvocNumbers from "./tables/TableAvvocNumbers";

export default function About() {
  return (
    // prettier-ignore
    <section className='about'>

      <section className="aboutAvv">
        <h2>ABOUT AVVOCADOPNEAN</h2>
        <p>Avvocadopnean is a simple cipher I created while in highschool. It coincidentally resembles the <a href="https://en.wikipedia.org/wiki/Tap_code" target="_blank">Tap Code</a> cipher. Avvocadopnean uses the symbols found on the bottom row of the iOS keyboard's special characters keyboard, and thus can be rapidly typed on an iPhone with practice.</p>
        <p>Over time, cursive, caligraphy, morse, and spoken forms of Avvocadopnean were developed. It is a very niche cipher used by approximately 1 people(/person).</p>
      </section>
      <section className="usingAvv">
        <h2>USING AVVOCADOPNEAN</h2>
        <h3>Standard Rules:</h3>
        <p>To use standard script Avvocadopnean, lay out the symbols</p>
        <pre>. , ? ! '</pre>
        <p>to a 5x5 grid as shown. To encipher a letter, first use the horizontal row then the vertical column.</p>        
        <div className="table-wrapper">
          <TableAvvocDecipher />
        </div>
        <p className="rule">Letters are separated by a single space</p>
        <pre>
          Pluto<br/><br/>
          !. ?, '. !' ?'<br/>
          p  l  u  t  o
        </pre>
        <p className="rule">Words are separated by a -</p>
        <pre>
          Hello World<br/><br/>
          ,? .' ?, ?, ?' - '? ?' !? ?, .!<br/>
          h  e  l  l  o    w  o  r  l  d
        </pre>
        <p className="rule">Punctuation retains it's meaning if alone</p>
        <pre>
          Woh, is that Bo's cat?<br/><br/>
          '? ?' ,? , ,! !! - !' ,? .. !' - .! ?' ' !! - .? .. !' ! ?<br/>
          w  o  h  , i  s    t  h  a  t    b  o  ' s    c  a  t  ! ?
        </pre>
        <p className="rule">Non-standard letters are written as they are</p>
        <pre>
          She spent $200 on Genshin🚩🚩🚩（笑）<br/><br/>
          !! ,? .' - !! !. .' ?! !' - $ 2 0 0 - ?' ?! - ,, .' ?! !! ,? ,! ?!🚩🚩🚩 （笑）<br/>
          s  h  e    s  p  e  n  t    $ 2 0 0   o  n    g  e  n  s  h  i  n 🚩🚩🚩 （笑）
        </pre>
        <h3>Rules of Avvocadopnean not (yet) supported on this site:</h3>
        <p className="rule">Letter case can be specified with ^ and * for upper and lower respectively</p>
        <pre>
          I play LoL<br/><br/>
          ,! - !. ?, .. '' - ^?, *?' ^?,<br/>
          i    p  l  a  y    L   o   L   
        </pre>
        <p>Numbers have 2 systems.</p>
        <p className="rule">?_ denotes a binary number.<br/>. is 0, ! is 1</p>
        <pre>
          I am 22 year's old<br/><br/>
          ,! - .. ?? - ?_!.!!. - '' .' .. !? !! - ?' ?, .! <br/>
          i    a  m    0b10110   y  e  a  r  s    o  l  d      
        </pre>
        <p className="rule">!_ denotes a base 10 number<br/>These are the numbers in Base 10:</p>
        <div className="table-wrapper">
          <TableAvvocNumbers />
        </div>
        <pre>
          I was born in 2000.<br/><br/>
          ,! - '? .. !! - ., ?' !? ?! - ,! ?! - !_*,^'^'^' .<br/>
          i    w  a  s    b  o  r  n    i  n      2 0 0 0  .   
        </pre>
        <h3>Bugs:</h3>
        <p>I am aware that there are bugs with this app, and will be fixing them in the future. However, the cipher should work in most cases.</p>
      </section>
      <section className="usingAvv">
        <h2>OTHER FORMS OF AVVOCADOPNEAN</h2>
        <p>Avvocadopnean can also be written in cursive and calligraphy, and has morse code-style and spoken variants. Explanations of these variants will be added in the future.</p>
      </section>
      
    </section>
  );
}
