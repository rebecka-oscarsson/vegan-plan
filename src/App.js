import { useEffect, useState } from 'react';
import Start from './components/Start';
import Navbar from './components/Navbar';
import Recipes from './components/Recipes';
import Filter from './components/Filter';
import Footer from './components/Footer';
import Search from './components/Search';
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
      <Navbar />
      <Start />
      <Search />
      <Filter />
      <Recipes
        recipes={recipes}
        displayOne={displayOneRecipe}
        oneRecipe={oneRecipe}
        emptyOneRecipe={emptyOneRecipe}
      />
      <Footer />
    </>
  );
};

export default App;
