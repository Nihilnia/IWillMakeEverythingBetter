import { calculateInvestmentResults } from "../util/investment";

export default function Results({ res }) {
  const resultsData = calculateInvestmentResults(res);
  console.log("resultsData");
  console.log(resultsData);

  return <p>askjdhkajsd</p>;
}
