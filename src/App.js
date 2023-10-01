import{
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./components/Detail";


function App() {
  return <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/home" element={<Home />} />
        </Routes>
    </Router>;
}

export default App;
