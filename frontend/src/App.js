import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Shop from "./pages/Shop"
import {theme} from "./theme"

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/shop/:id" element={<Register />} />
            </Routes>
        </Router>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
