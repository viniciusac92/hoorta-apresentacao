import "./App.css";
import Button from "./components/atoms/Button";
import Input from "./components/atoms/Input";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Input size={"small"}></Input>
        <Button styled={"primary"} size={"small"}>
          Entrar
        </Button>
      </header>
    </div>
  );
};

export default App;
