import { formatter } from "../util/investment";

export default function Table({ result }) {
  return (
    <section id="result">
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {result.map((f) => {
            return (
              <tr>
                <td>{f.year}</td>
                <td>{formatter.format(f.interest)}</td>
                <td>{formatter.format(f.valueEndOfYear)}</td>
                <td>
                  {formatter.format(f.valueEndOfYear + f.annualInvestment)}
                </td>
                <td>
                  {formatter.format(f.valueEndOfYear + f.annualInvestment)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
