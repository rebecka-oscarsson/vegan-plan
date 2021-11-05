import { useEffect } from 'react';
import Start from './components/Start';
import Navbar from './components/Navbar';
import Recipes from './components/Recipes';
import Filter from './components/Filter';
import Footer from './components/Footer';
import Search from './components/Search';
import AboutUs from './components/AboutUs';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  const fetchData = async () => {
    const response = await fetch('http://localhost:3001/recipes');
    const data = await response.json();
    console.log('myData', data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Router>
        <nav>
        <Link to="/"><img src={'./vegan-plan-logo.png'} width={130} alt='Vegan Plan logo'/></Link>
          <ul>
            <li><Link to="/recept">Recept</Link></li>
            <li><Link to="/vegansk-mat">Vegansk mat</Link></li>
            <li><button><Link to="/mina-sidor">Mina sidor</Link></button></li>
          </ul>
        </nav>
        <div className="main">
          <Routes>
          <Route exact path="/" element={<Start />} />
          <Route path="/recept" element={<Recipes />} />
          <Route path="/vegansk-mat" element={<AboutUs />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
