import EngToAvv from "./EngToAvv";
import AvvToEng from "./AvvToEng";

export default function Cipher() {
  return (
    <div className='cipher-wrapper'>
      <EngToAvv />
      <AvvToEng />
    </div>
  );
}
