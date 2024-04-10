import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/homepage";
import Authentication from "./components/Authentication";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Authentication/>} path="/"></Route>
        <Route element={<Homepage />} path="/homepage"></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
