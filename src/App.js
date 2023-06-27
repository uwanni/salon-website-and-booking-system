import './App.css';
import Navbar from "./Components/Navbar"
import Carousel from "./Components/Carousel"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';   


function App() {
  return (
    <div className="App">
       <Router>
        <Navbar>
          <Routes>
{/*             <Route path="/" exact element={<Home />} />
            <Route path="/" exact element={<About />} /> 
 */}          </Routes>
        </Navbar>
      </Router>
    </div>
  );
}

export default App;
