import { useEffect } from 'react';
import Start from './components/Start';

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
      <Start />
    </>
  );
};

export default App;
