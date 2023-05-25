import { useState } from "react";
import "./assets/fonts/fonts.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import HeaderLayoutContainer from "./components/layout/header/HeaderLayoutContainer";
// import FooterLayoutContainer from "./components/layout/footer/FooterLayoutContainer";
// import AdministrativePanelContainer from "./components/pages/administrativePanel/administrativePanelContainer";
// import MovieDetailContainer from "./components/pages/movieDetail/MovieDetailContainer";
import Home from "./pages/Home";
import MovieDetail from "./pages/movieDetail";
import AdminPanel from "./pages/adminPanel";
import AddUserContainer from "./components/common/addUser/AddUserContainer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<MovieDetail />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/register" element={<AddUserContainer />} />
        {/* <Route element={<HeaderLayoutContainer />}>
          <Route element={<FooterLayoutContainer />}>
            <Route path="/details" element={<MovieDetailContainer />} />
            
            <Route path="/details/:filmid" element={<MovieDetailContainer />} />
          </Route>
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
