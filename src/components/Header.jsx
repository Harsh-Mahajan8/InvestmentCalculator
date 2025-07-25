import img from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <div id="header">
      <img src={img} alt="investment-logo" />
      <h1>React Investment Calculator</h1>
    </div>
  );
}
