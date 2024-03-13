// App.jsx
//import  { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { AuthContext } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./components/Account";
import ProtectedRoute from "./ProtectedRoute"; // Import the ProtectedRoute component
import "./style.scss";

function App() {
  {/* const { currentUser } = useContext(AuthContext); */}

  return (
    <BrowserRouter>
      <Routes>
        <ProtectedRoute path="/home">
          <Home />
        </ProtectedRoute>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
