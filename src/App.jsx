import { useState } from "react";
import Header from "./components/Header";
import InputGroup from "./components/InputGroup";
import Result from "./components/Result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 12000,
    annualInvestment: 3000,
    expectedReturn: 5.5,
    duration: 3,
  });
  const validInput = userInput.duration >= 1;

  let handleChange = (inputIdentifier, newValue) => {
    setUserInput((preInput) => {
      return { ...preInput, [inputIdentifier]: +newValue };
    });
  };

  return (
    <>
      <Header />
      <InputGroup onChange={handleChange} userInput={userInput} />
      {!validInput && <p className="center">Duration must be greater than or equal to 1</p>}
      {validInput && <Result input={userInput} />}
    </>
  );
}

export default App;
