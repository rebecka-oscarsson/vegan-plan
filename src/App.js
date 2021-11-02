import { useEffect } from 'react';
import Start from './components/Start';
import Navbar from './components/Navbar';
import Recipes from './components/Recipes';
import Filter from './components/Filter';
import Footer from './components/Footer';
import Search from './components/Search';

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
      <Navbar />
      <Start />
      <Search />
      <Filter />
      <Recipes />
      <Footer />
    </>
  );
};

export default App;
