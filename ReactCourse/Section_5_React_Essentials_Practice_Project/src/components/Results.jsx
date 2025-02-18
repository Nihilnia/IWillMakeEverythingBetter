import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ res }) {
  const resultsData = calculateInvestmentResults(res);

  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  let render = null;

  if (
    res.initialInvestment <= 0 ||
    res.annualInvestment <= 0 ||
    res.expectedReturn <= 0 ||
    res.duration <= 0
  ) {
    render = (
      <tr>
        <td colSpan={4}>Given values must be greater than zero.</td>
      </tr>
    );
  } else {
    render = resultsData.map((f) => {
      const totalInterest =
        f.valueEndOfYear - f.annualInvestment * f.year - initialInvestment;

      const totalAmountInvested = f.valueEndOfYear - totalInterest;

      return (
        <tr key={f.year}>
          <td>{f.year}</td>
          <td>{formatter.format(f.valueEndOfYear)}</td>
          <td>{formatter.format(f.interest)}</td>
          <td>{formatter.format(totalInterest)}</td>
          <td>{formatter.format(totalAmountInvested)}</td>
        </tr>
      );
    });
  }

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
      <tbody>{render}</tbody>
    </table>
  );
}
