export default function TableAvvocDecipher() {
  return (
    // prettier-ignore
    <table className='table-avvoc-decipher'>
      <caption>Avvocadopnean Standard Script</caption>
      <tbody>
        <tr>
          <td>&nbsp;</td>
          <th scope='col'>.</th>
          <th scope='col'>,</th>
          <th scope='col'>?</th>
          <th scope='col'>!</th>
          <th scope='col'>'</th>
        </tr>
        <tr>
          <th scope='row'>.</th>
          <td>..<br/>A</td>
          <td>.,<br/>B</td>
          <td>.?<br/>C</td>
          <td>.!<br/>D</td>
          <td>.'<br/>E</td>
        </tr>
        <tr>
          <th scope='row'>,</th>
          <td>,.<br/>F</td>
          <td>,,<br/>G</td>
          <td>,?<br/>H</td>
          <td>,!<br/>I</td>
          <td>,'<br/>J</td>
        </tr>
        <tr>
          <th scope='row'>?</th>
          <td>?.<br/>K</td>
          <td>?,<br/>L</td>
          <td>??<br/>M</td>
          <td>?!<br/>N</td>
          <td>?'<br/>O</td>
        </tr>
        <tr>
          <th scope='row'>!</th>
          <td>!.<br/>P</td>
          <td>!,<br/>Q</td>
          <td>!?<br/>R</td>
          <td>!!<br/>S</td>
          <td>!'<br/>T</td>
        </tr>
        <tr>
          <th scope='row'>'</th>
          <td>'.<br/>U</td>
          <td>',<br/>V</td>
          <td>'?<br/>W</td>
          <td>'!<br/>X</td>
          <td>''<br/>Y</td>
        </tr>
        <tr>
          <td colSpan={6}>...<br/>Z</td>
        </tr>
      </tbody>
    </table>
  );
}
