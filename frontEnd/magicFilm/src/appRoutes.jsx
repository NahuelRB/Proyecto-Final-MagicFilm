import { Routes, Route, Navigate } from "react-router-dom";
import HeaderLayoutContainer from "./components/layout/header/HeaderLayoutContainer";
import FooterLayoutContainer from "./components/layout/footer/FooterLayoutContainer";
import MovieDetailContainer from "./components/pages/movieDetail/MovieDetailContainer";
import Home from "./components/pages/home/Home";
import useAuth from "./context/SessionContext";
import LoginContainer from "./components/pages/login/LoginContainer";

import AdminPanelContainer from "./components/pages/adminPanel/AdminPanelContainer";

import RequireAuth from "./privateRoute";
const AppRoutes = () => {
  const { isAuthenticated } = useAuth();
  <Routes>
    <Route element={<HeaderLayoutContainer />}>
      <Route element={<FooterLayoutContainer />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/details" element={<MovieDetailContainer />} />
        <Route path="/details/:id" element={<MovieDetailContainer />} />
        <Route
          path="/admin"
          element={
            // <RequireAuth redirectTo={"/"} isAdmin={true}>
            <AdminPanelContainer />
            // </RequireAuth>
          }
        />
      </Route>
    </Route>
  </Routes>;
};

export default AppRoutes;
