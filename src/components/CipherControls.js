export default function CipherControls({ clearText }) {
  return (
    <div>
      <button onClick={() => clearText("")}>Clear entry</button>
    </div>
  );
}
