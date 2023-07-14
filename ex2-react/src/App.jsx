import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Character from "./components/Character";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/char/:charname" element={<Character />} />
    </Routes>
  );
}

export default App;
