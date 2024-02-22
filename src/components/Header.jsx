import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
	return (
		<header id="header">
			<img src={logo} alt="Logo with a bag of money" />
			<h1>React Investments Calculator</h1>
		</header>
	);
}
