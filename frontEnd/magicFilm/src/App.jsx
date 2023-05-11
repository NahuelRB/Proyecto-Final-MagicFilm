import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import MovieDetailContainer from "./components/pages/movieDetail/movieDetailContainer";
import HeaderLayoutContainer from "./components/layout/header/HeaderLayoutContainer";
import FooterLayoutContainer from "./components/layout/footer/FooterLayoutContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HeaderLayoutContainer />}>
          <Route element={<FooterLayoutContainer />}>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<MovieDetailContainer />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
