import { useState } from "react";
import "./assets/fonts/fonts.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderLayoutContainer from "./components/layout/header/HeaderLayoutContainer";
import FooterLayoutContainer from "./components/layout/footer/FooterLayoutContainer";
import MovieDetailContainer from "./components/pages/movieDetail/MovieDetailContainer";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/LoginContainer";

import AdminPanelContainer from "./components/pages/adminPanel/AdminPanelContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HeaderLayoutContainer />}>
          <Route element={<FooterLayoutContainer />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/details" element={<MovieDetailContainer />} />
            <Route path="/details/:id" element={<MovieDetailContainer />} />
            <Route path="/admin" element={<AdminPanelContainer />} />
            <Route path="/details/:id" element={<MovieDetailContainer />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
