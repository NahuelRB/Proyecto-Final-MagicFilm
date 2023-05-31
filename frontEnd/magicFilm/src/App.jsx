import "./assets/fonts/fonts.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./appRoutes.jsx";
import AuthContextProvider from "./context/AuthContext.jsx";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <AppRoutes />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
