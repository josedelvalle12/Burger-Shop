import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer.js';
import AnimatedRoutes from './components/AnimatedRoutes.js';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
        <AnimatedRoutes></AnimatedRoutes>
      <Footer></Footer>
    </Router>
    </div> 
  );
}

export default App;
