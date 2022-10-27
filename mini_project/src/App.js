import { Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./Pages/HomePage";
import { Login } from "./Pages/Login";
import { Singup } from "./Pages/Singup";
import { User } from "./Pages/User";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<User />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
