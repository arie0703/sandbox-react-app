import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

import { Cookie } from "./pages/Cookie";
import "./App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cookie" element={<Cookie />} />
      </Routes>
    </Router>
  );
}

export default App;
