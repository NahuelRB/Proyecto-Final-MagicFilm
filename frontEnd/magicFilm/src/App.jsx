import { useState } from "react";
import "./assets/fonts/fonts.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderLayoutContainer from "./components/layout/header/HeaderLayoutContainer";
import FooterLayoutContainer from "./components/layout/footer/FooterLayoutContainer";
import MovieDetailContainer from "./components/pages/movieDetail/MovieDetailContainer";
import Home from "./components/pages/home/Home";
import AdminPanelContainer from "./components/pages/adminPanel/AdminPanelContainer";
import CategoriesSectionContainer from "./components/pages/categoriesSection/CategoriesSectionContainer";

function App() {

  return (
    <BrowserRouter>
      <Routes>
            
        <Route element={<HeaderLayoutContainer />}>
          <Route element={<FooterLayoutContainer />}>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<MovieDetailContainer />} />
            <Route path="/details/:id" element={<MovieDetailContainer />} />
            <Route path="/admin" element={<AdminPanelContainer/>} />
            <Route path="/details/:id" element={<MovieDetailContainer />} />
            <Route path="/category/:category_id" element={<CategoriesSectionContainer />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
