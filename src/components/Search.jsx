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
    console.log("inputfält: ", inputs)
    let url =
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=" +
      apiKey +
      "&diet=vegan" 
      if (inputs.search) {
        url += "&query="+ inputs.search;
      }
    if (inputs.sugarfree) {
      url += "&excludeIngredients=sugar";
    }
    if (inputs.oilfree) {
      url += "&excludeIngredients=oil";
    }
    if (inputs.meal === "lunch" || inputs.meal === "middag") {
      url += "&type=main_course";
    }
    if (inputs.meal === "frukost") {
      url += "&type=breakfast";
    }
    console.log("adress", url)
    
    fetchData(url).then((data) => {
    // testhämtning
    // "https://api.spoonacular.com/recipes/complexSearch?apiKey=" +
    //   apiKey +
    //   "&diet=vegan&number=1&query=" +
    //   inputs.search&type=beverage"
      let recipes = data.results;
      //cheap finns ej som sökparameter
      //det finns som en key men först på andra hämtningen så nedanstående fungerade ej
      // if (inputs.cheap) {
      //   recipes = recipes.filter((recipe) => recipe.cheap === true);
      // }
      setRecipes(recipes);
      console.log("sökresultat: ", recipes);
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
      <select value={inputs.meal} onChange={handleChange} name="meal">
        <option value="frukost">frukost</option>
        <option value="lunch">lunch</option>
        <option value="middag">middag</option>
      </select>

      

      <label htmlFor="sugarfree">Sockerfritt</label>
      <input
        type="checkbox"
        id="sugarfree"
        name="sugarfree"
        checked={inputs.sugarfree || false}
        onChange={() => {
          setInputs((inputs) => ({
            ...inputs,
            sugarfree: !inputs.sugarfree,
          }));}}
      />
      <label htmlFor="oilfree">Fritt från olja</label>
      <input
        type="checkbox"
        id="oilfree"
        name="oilfree"
        checked={inputs.oilfree || false}
        onChange={() => {
          setInputs((inputs) => ({
            ...inputs,
            oilfree: !inputs.oilfree,
          }));}}
      />
      <input type="submit" value="sök" />
    </form>
  );
};

export default Search;
