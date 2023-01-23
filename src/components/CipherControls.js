import CopyToClipboard from "react-copy-to-clipboard";

export default function CipherControls({ clearText, copyText }) {
  return (
    <div className='cipher-controls'>
      <button onClick={() => clearText("")}>Clear entry</button>
      <CopyToClipboard text={copyText}>
        <button>Copy result</button>
      </CopyToClipboard>
    </div>
  );
}
