import '../App/App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from '../../modules/Home/Home';
import Update from '../../modules/Content/components/Update';
import Create from '../../modules/Content/components/Create';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:item" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
