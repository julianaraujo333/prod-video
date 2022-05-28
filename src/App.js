import "./App.css";
import logo from "./Assets/logo.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduction from "./Components/Introduction/Introduction";
import Question from "./Components/Question/Question";
import Answer from "./Components/Answer/Answer";
import Video from "./Components/Video/Video";
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
              <Route path="/video" element={<Video />} />
              <Route path="/question" element={<Question />} />
              <Route path="/answer" element={<Answer />} />
            </Routes>
          </section>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
