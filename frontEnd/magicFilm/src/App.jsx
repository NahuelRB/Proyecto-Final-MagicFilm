import "./assets/fonts/fonts.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./appRoutes.jsx";
import { SessionProvider } from "./context/SessionContext.jsx";

function App() {
  return (
    <BrowserRouter>
      <SessionProvider>
        <AppRoutes />
      </SessionProvider>
    </BrowserRouter>
  );
}

export default App;
