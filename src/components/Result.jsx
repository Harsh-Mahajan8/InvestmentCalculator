import {calculateInvestmentResults, formatter} from "../util/investment";

export default function Result({input}){
    const resultData = calculateInvestmentResults(input);
    const initialInvestment = resultData[0].valueEndOfYear - resultData[0].annualInvestment;

    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment value</th>
                    <th>Interst(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultData.map((data) => {
                    let totalInterst = data.valueEndOfYear - data.annualInvestment*data.year - initialInvestment;

                    let totalInvestment = data.valueEndOfYear -totalInterst;

                    return <tr key={data.year}>
                        <td>{data.year}</td>
                        <td>{formatter.format(data.valueEndOfYear)}</td>
                        <td>{formatter.format(data.interest)}</td>
                        <td>{formatter.format(initialInvestment)}</td>
                        <td>{formatter.format(totalInvestment)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}