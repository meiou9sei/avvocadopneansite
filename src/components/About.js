export default function About() {
  return (
    // prettier-ignore
    <div className='about'>
      <h1>Avvocadopnean</h1>
      <div id="introToAbout">
        <p>hi welcome thanks for checking it out. This page is pretty obviously</p>
        <img src='images/pikachuconstruction.gif' alt="pikachu drilling under a 'under construction' sign gif" />
        <p>but I'll be working on it in the coming days/weeks.</p>
      </div>
      <div className="howToUseSite">
        <h2>HOW TO USE THIS SITE</h2>
        <p>currently Avvocadopnean -&gt; English is only functional.</p>
        <p>I'll code English -&gt; Avvocadopnean (probably what you're more interested in) soon</p>
        <p>anyways, check out <a href="#usingAvv">USING AVVOCADOPNEAN</a> on how to type stuff</p>
      </div>

      <div id="aboutAvv">
        <h2>ABOUT AVVOCADOPNEAN</h2>
        <p>Avvocadopnean is a simple cipher I created while in highschool. It coincidentally resembles the Tap Code cipher, and honestly that's probably a better developed cipher than what I came up with. Avvocadopnean uses the symbols found on the bottom row of the iOS keyboard's special characters keyboard, and thus can be rapidly typed on an iPhone with practice.</p>
        <p>Over time, cursive, caligraphy, morse, and spoken forms of Avvocadopnean were developed. There is very little use for this cipher as basically only I speak it lmao</p>
      </div>
      <div id="usingAvv">
        <h2>USING AVVOCADOPNEAN</h2>
        <p>To use standard script Avvocadopnean, lay out the symbols</p>
        <h2>. , ? ! '</h2>
        <p>to a 5x5 grid like so:</p>
        <code><pre>
    .          .   ,   ?   !   '  <br></br>
    .        +-------------------+<br></br>
    .      . | A | B | C | D | E |<br></br>
    .        +-------------------+<br></br>
    .      , | F | G | H | I | J |<br></br>
    .        +-------------------+<br></br>
    .      ? | K | L | M | N | O |<br></br>
    .        +-------------------+<br></br>
    .      ! | P | Q | R | S | T |<br></br>
    .        +-------------------+<br></br>
    .      ' | U | V | W | X | Y |<br></br>
    .        +-------------------+<br></br>
    .       Z is represented as ...
        </pre></code>
        <p>To encipher a letter, first use the horizontal row then the vertical column.</p>
        <p>Words are separated by a -</p>
        <p>For example:</p>
        <code><pre>
    .       ,? .' ?, ?, ?' - '? ?' !? ?, .!<br></br>
    .       h  e  l  l  o    w  o  r  l  d
        </pre></code>
      </div>

    </div>
  );
}
