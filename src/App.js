import Logo from "./components/atoms/Logo";
import Input from "./components/atoms/Input";
import Button from "./components/atoms/Button";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Input size={"small"}></Input>
        <Button styled={"primary"} size={"small"}>
          Entrar
        </Button>
      </header>
    </div>
  );
};

export default App;
