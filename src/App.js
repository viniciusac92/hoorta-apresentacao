import Logo from "./components/atoms/Logo";
import Input from "./components/atoms/Input";
import Button from "./components/atoms/Button";
import TextHead from "./components/atoms/TextHeader";
const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<Logo />
				<TextHead styled={"black"} size={"small"} fontWeight={"bold"}>
					Login
				</TextHead>
				<Input size={"small"}></Input>
				<Button styled={"primary"} size={"small"}>
					Entrar
				</Button>
			</header>
		</div>
	);
};

export default App;
