import { formatter } from "../util/investment.js";

export default function Table({ data, initialInvestment }) {
  return (
    <table id="result">
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
        {data.map((f) => {
          return (
            <tr>
              <td>{f.year}</td>
              <td>{formatter.format(f.annualInvestment)}</td>
              <td>{formatter.format(f.valueEndOfYear)}</td>
              <td>{formatter.format(f.interest)}</td>
              <td>{formatter.format(initialInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
