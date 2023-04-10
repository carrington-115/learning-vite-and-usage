import "./App.css";
import Camera from "./Component/Camera/Camera";
import BooleanComponent from "./features/boolean/BooleanComponent";
import CounterComp from "./features/counter/CounterComp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/boolean" element={<BooleanComponent />} />
          <Route path="/counter" element={<CounterComp />} />
          <Route path="/camera" element={<Camera />} />
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
