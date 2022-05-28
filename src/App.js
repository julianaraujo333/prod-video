import "./App.css";
import logo from "./Assets/logo.png";
import Introduction from "./Components/Introduction/Introduction";
function App() {
  return (
    <div className="app">
      <header>
        <img src={logo} alt="Prod" />
      </header>
      <div className="wrapper">
        <section className="container">
          <Introduction />
        </section>
      </div>
    </div>
  );
}

export default App;
