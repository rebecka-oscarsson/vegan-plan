import { useEffect } from 'react';

const App = () => {
  const fetchData = async () => {
    const response = await fetch('http://localhost:5000/recipes');
    const data = await response.json();
    console.log('myData', data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>hello</div>;
};

export default App;
