import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import MapView from "./pages/MapView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mapview/:mapid" element={<MapView />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
