import Home from "./Home";
import Main from "./Main";
import { Routes, Route } from "react-router-dom";
import "../App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchange" element={<Main />} />
        <Route path="/upload-data" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
