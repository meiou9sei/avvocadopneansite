import "./tableStyling.css";

export default function TableAvvocNumbers() {
  return (
    // prettier-ignore
    <table className='table-avvoc-number'>
      <caption>Avvocadopnean Standard Script Numbers in Base 10</caption>
      <tbody>
        <tr>
            <th scope='row'>* represents the smaller numbers</th>
            <td>*.<br/>1</td>
            <td>*,<br/>2</td>
            <td>*?<br/>3</td>
            <td>*!<br/>4</td>
            <td>*'<br/>5</td>
        </tr>
        <tr>
            <th scope='row'>^ represents the bigger numbers and 0</th>
            <td>^.<br/>6</td>
            <td>^,<br/>7</td>
            <td>^?<br/>8</td>
            <td>^!<br/>9</td>
            <td>^'<br/>0</td>
        </tr>
      </tbody>
    </table>
  );
}
