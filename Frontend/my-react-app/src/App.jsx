import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginRegister from "./Components/LoginRegister";
import Main from "./Components/Main"; // Ensure this exists and is exported properly

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
