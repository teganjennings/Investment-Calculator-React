import { useState } from "react";

export default function UserInput() {
	cont[(UserInput, setUserInput)] = useState({
		initialInvestment: 10000,
		annualInvestment: 120000,
		expectedReturn: 6,
		duration: 10,
	});

	function handleChange(inputIdentifier, newValue) {
		setUserInput((prevUserInput) => {
			return {
				...prevUserInput,
				[inputIdentifier]: newValue,
			};
		});
	}

	return (
		<section id="user-input">
			<div className="input-group">
				<p>
					<label>Initial Investment</label>
					<input
						type="number"
						required
						value={UserInput.initialInvestment}
						onChange={(event) =>
							handleChange("initialInvestment", event.target.value)
						}
					/>
				</p>
				<p>
					<label>Annual Investment</label>
					<input
						type="number"
						required
						value={UserInput.annualInvestment}
						onChange={(event) =>
							handleChange("annualInvestment", event.target.value)
						}
					/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label>Expected Return</label>
					<input
						type="number"
						required
						value={UserInput.expectedReturn}
						onChange={(event) =>
							handleChange("expectedReturn", event.target.value)
						}
					/>
				</p>
				<p>
					<label>Duration</label>
					<input
						type="number"
						required
						value={UserInput.duration}
						onChange={(event) => handleChange("duration", event.target.value)}
					/>
				</p>
			</div>
		</section>
	);
}
