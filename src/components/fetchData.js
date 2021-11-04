const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log('myData', data);
  return data;
};

export default fetchData