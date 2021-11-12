import { useState } from "react";
import fetchData from "./fetchData";
const apiKey = process.env.REACT_APP_API_KEY;

const Search = ({ setRecipes, setOneRecipe }) => {
  const [inputs, setInputs] = useState({});
 
  const handleChange = (event) => {
    setInputs((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOneRecipe("");
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
      let recipes = data.results;
      setRecipes(recipes);
    });
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="filter" align="center">
        <label htmlFor="search"><h2>Sök recept</h2></label>
        <input
          type="text"
          name="search"
          value={inputs.search || ""}
          onChange={handleChange}
        />
        <input type="submit" value="sök" className="btn-search" /><br />
        <p>FILTRERA</p>
        <select value={inputs.meal} onChange={handleChange} name="meal">
          <option value="">måltid</option>
          <option value="frukost">frukost</option>
          <option value="lunch">lunch</option>
          <option value="middag">middag</option>
        </select>

        <input
          type="checkbox"
          id="sugarfree"
          name="sugarfree"
          className="btn-filter"
          checked={inputs.sugarfree || false}
          onChange={() => {
            setInputs((inputs) => ({
              ...inputs,
              sugarfree: !inputs.sugarfree,
            }));}}
        />
        <label htmlFor="sugarfree">Sockerfritt</label>
        
        <input
          type="checkbox"
          id="oilfree"
          name="oilfree"
          className="btn-filter"
          checked={inputs.oilfree || false}
          onChange={() => {
            setInputs((inputs) => ({
              ...inputs,
              oilfree: !inputs.oilfree,
            }));}}
        />
        <label htmlFor="oilfree">Fritt från olja</label>
        
      </form>
    </div>
  );
};

export default Search;
