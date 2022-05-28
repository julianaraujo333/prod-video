import "./App.css";
import logo from "./Assets/logo.png";
import Introduction from "./Components/Introduction/Introduction";
import Question from "./Components/Question/Question";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header>
          <img src={logo} alt="Prod" />
        </header>
        <div className="wrapper">
          <section className="container">
            <Routes>
              <Route path="/" element={<Introduction />} />
              <Route path="/question" element={<Question />} />
            </Routes>
          </section>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
