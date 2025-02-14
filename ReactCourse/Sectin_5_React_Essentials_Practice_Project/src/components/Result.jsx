export default function Result({ daResult }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Invenstment Value</td>
          <td>Interest (year)</td>
          <td>Total Interest</td>
        </tr>
      </thead>
      <tbody>
        {daResult.map((f) => {
          return (
            <tr key={f.year}>
              <td>{f.year}</td>
              <td>{f.valueEndOfYear}</td>
              <td>{f.interest}</td>
              <td>{f.annualInvestment}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
