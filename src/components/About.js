import TableAvvocEncipher from "./tables/TableAvvocEncipher";

export default function About() {
  return (
    // prettier-ignore
    <section className='about'>

      <div id="aboutAvv">
        <h2>ABOUT AVVOCADOPNEAN</h2>
        <p>Avvocadopnean is a simple cipher I created while in highschool. It coincidentally resembles the <a href="https://en.wikipedia.org/wiki/Tap_code" target="_blank">Tap Code</a> cipher. Avvocadopnean uses the symbols found on the bottom row of the iOS keyboard's special characters keyboard, and thus can be rapidly typed on an iPhone with practice.</p>
        <p>Over time, cursive, caligraphy, morse, and spoken forms of Avvocadopnean were developed. It is a very niche cipher used by approximately 1 people(/person).</p>
      </div>
      <div id="usingAvv">
        <h2>USING AVVOCADOPNEAN</h2>
        <p>To use standard script Avvocadopnean, lay out the symbols</p>
        <p>. , ? ! '</p>
        <p>to a 5x5 grid as so:</p>        
        <TableAvvocEncipher />
        <p>To encipher a letter, first use the horizontal row then the vertical column.</p>
        <p>Words are separated by a -</p>
        <p>For example:</p>
        <code><pre>
            ,? .' ?, ?, ?' - '? ?' !? ?, .!<br></br>
            h  e  l  l  o    w  o  r  l  d
        </pre></code>
      </div>
    </section>
  );
}
