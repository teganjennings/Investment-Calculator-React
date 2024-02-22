import { useState } from "react";

import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 120000,
		expectedReturn: 6,
		duration: 10,
	});

	const inputIsValid = userInput.duration >= 1;

	function handleChange(inputIdentifier, newValue) {
		setUserInput((prevUserInput) => {
			return {
				...prevUserInput,
				[inputIdentifier]: +newValue,
			};
		});
	}

	return (
		<>
			<Header />
			<UserInput userInput={userInput} onChange={handleChange} />
			{!inputIsValid && (
				<p className="center">Please enter a duration greater than 0</p>
			)}
			{inputIsValid && <Results input={userInput} />}
		</>
	);
}

export default App;
