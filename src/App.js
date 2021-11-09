import { useEffect, useState } from 'react';
import Start from './components/Start';
import Navbar from './components/Navbar';
import Recipes from './components/Recipes';
import Filter from './components/Filter';
import Footer from './components/Footer';
import Search from './components/Search';

import AboutUs from './components/AboutUs';
import SingleRecipe from './components/SingleRecipe';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import fetchData from './components/fetchData';
import React from 'react';

//nyckeln till spoonacular
const apiKey = process.env.REACT_APP_API_KEY;


const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [oneRecipe, setOneRecipe] = useState([]);

  useEffect(() => {
    fetchData(
      'https://api.spoonacular.com/recipes/complexSearch?apiKey=' +
        apiKey +
        '&diet=vegan&number=5'
    ).then((data) => {
      setRecipes(data.results);
    });
  }, []);

  // handler fired when one recipe clicked
  const displayOneRecipe = (obj) => {
    setOneRecipe([obj]);
  };

  // handler fired when 'back to all recipes link' clicked
  const emptyOneRecipe = () => {
    setOneRecipe([]);
  };

  return (
    <>

      <Router>
        <nav>
        <Link to="/"><img src={'./vegan-plan-logo.png'} width={130} alt='Vegan Plan logo'/></Link>
          <ul>
            <li><Link to="/recept">Recept</Link></li>
            <li><Link to="/vegansk-mat">Vegansk mat</Link></li>
            <li><button className="btn-myPage"><Link to="/mina-sidor">Mina sidor</Link></button></li>
          </ul>
        </nav>
        <div className="main">
          <Routes>
          <Route exact path="/" element={<Start />} />
          <Route path="/recept" element={<Recipes
        recipes={recipes}
        displayOne={displayOneRecipe}
        oneRecipe={oneRecipe}
        emptyOneRecipe={emptyOneRecipe}
      />} />
          <Route path="/recept/:id" element={<SingleRecipe />} />
          <Route path="/vegansk-mat" element={<AboutUs />} />
          </Routes>
        </div>
        <Search />
        <Footer />
      </Router>

    </>
  );
};

export default App;
