import { useState } from "react";
import fetchData from "./fetchData";
const apiKey = process.env.REACT_APP_API_KEY;

const Search = ({ setRecipes }) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    setInputs((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=" +
        apiKey +
        "&diet=vegan&number=1&query=" +
        inputs.search
    ).then((data) => {
      setRecipes(data.results);
      console.log("inputfält: ", inputs, "sökresultat: ", data.results);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="filter">
      <label htmlFor="search">Sök recept</label>
      <input
        type="text"
        name="search"
        value={inputs.search || ""}
        onChange={handleChange}
      />
      {/* <label htmlFor="lname">Last name:</label>
      <input
        type="text"
        id="lname"
        name="lname"
        value={inputs.lname || ""}
        onChange={handleChange}
      /> */}
      <input type="submit" value="sök" />
    </form>
  );
};

export default Search;
