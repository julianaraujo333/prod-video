import "./App.css";
import logo from "./Assets/logo.png";
import Introduction from "./Components/Introduction/Introduction";
import Option from "./Components/Option/Option";
import Question from "./Components/Question/Question";

function App() {
  return (
    <div className="app">
      <header>
        <img src={logo} alt="Prod" />
      </header>
      <div className="wrapper">
        <section className="container">
          <Question />
        </section>
      </div>
    </div>
  );
}

export default App;
