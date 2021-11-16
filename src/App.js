import { useEffect, useState } from 'react';
import Start from './components/Start';
import Navbar from './components/Navbar';
import Recipes from './components/Recipes';
import Footer from './components/Footer';
import Registrate from './components/Registrate';

import Login from './components/Login';

import Axios from 'axios';
import MyPages from './components/MyPages';

import AboutUs from './components/AboutUs';
import SingleRecipe from './components/SingleRecipe';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import fetchData from './components/fetchData';
import React from 'react';

//nyckeln till spoonacular
const apiKey = process.env.REACT_APP_API_KEY;

const App = () => {
  //state med hämtade recept i array
  const [recipes, setRecipes] = useState([]);
  // state som sparar recept användaren klickat på;
  const [oneRecipe, setOneRecipe] = useState("")
// 'http://localhost:3001/results'
  useEffect(() => {
    fetchData(process.env.REACT_APP_DATABASE_URL+"results") //tillfälligt för att spara på api-nyckeln
      // fetchData('https://api.spoonacular.com/recipes/complexSearch?apiKey=' + apiKey + '&diet=vegan&number=5')
      .then((data) => {
        setRecipes(data.results);
      });
  }, []);

  useEffect(() => {});
  // post request till db , sparar i mongoDB
  const onAddNewUser = (user) => {
    console.log(user);
    Axios.post('http://localhost:3002/signup', user).then((res) =>
      console.log(res.data)
    );
  };

  // Post request till db, login
  const onLogin = (user) => {
    console.log(user);
    Axios.post('http://localhost:3002/login', user).then((res) =>
      console.log(res.data)
    );
  };

  return (
    <>
      <Router>
        <Navbar />
        <div className='main'>
          <Routes>
            <Route exact path='/' element={<Start recipes={recipes} setOneRecipe = {setOneRecipe}/>} />
            <Route
              path='/recept'
              element={
                <Recipes
                oneRecipe = {oneRecipe}
                setOneRecipe = {setOneRecipe}
                recipes={recipes}
                setRecipes={setRecipes}
                />
              }
            />
            <Route path='/recept/:id' element={<SingleRecipe />} />
            <Route path='/about' element={<AboutUs />} />

            <Route path='/login' element={<Login onLogin={onLogin} />} />

            <Route path='/mina-sidor' element={<MyPages />} />

            <Route
              path='/registrate'
              element={<Registrate onAddNewUser={onAddNewUser} />}
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
