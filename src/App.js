import { useEffect, useState } from 'react';
import Start from './components/Start';
import Navbar from './components/Navbar';
import Recipes from './components/Recipes';
import Filter from './components/Filter';
import Footer from './components/Footer';
import Search from './components/Search';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchData = async () => {
    const response = await fetch('http://localhost:3001/recipes');

    const data = await response.json();
    console.log('myData', data);
    return data;
  };

  useEffect(() => {
    fetchData().then(data=>{setRecipes(data)})
  }, []);

  return (
    <>
      <Navbar />
      <Start />
      <Search />
      <Filter />
      <Recipes recipes={recipes} />
      <Footer />
    </>
  );
};

export default App;
