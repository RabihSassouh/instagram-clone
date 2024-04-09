import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Homepage from "./components/homepage";
import Signup from "./components/signup";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/"></Route>
        <Route element={<Signup />} path="/signup"></Route>
        <Route element={<Homepage />} path="/homepage"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
