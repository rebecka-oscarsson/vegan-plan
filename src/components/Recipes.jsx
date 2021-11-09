import fetchData from './fetchData';
import SingleRecipe from './SingleRecipe';
import Search from './Search';
import { useState } from 'react';

const apiKey = process.env.REACT_APP_API_KEY;

const Recipes = (props) => {
  const [recipes, setRecipes] = useState([]);
  function getRecipe(id) {
    fetchData(
      'https://api.spoonacular.com/recipes/' +
        id +
        '/information?apiKey=' +
        apiKey
    ).then((data) => {
      console.log('receptet du klickade på: ', data);
    });
  }
  if (props.oneRecipe.length == 1) {
    return (
      <>
      <Search setRecipes={props.setRecipes}/>
      <SingleRecipe
        recipes={props.recipes}
        oneRecipe={props.oneRecipe}
        emptyOneRecipe={props.emptyOneRecipe}
      ></SingleRecipe>
      </>
    );
  } else {
    return (
      <>
      <Search setRecipes={props.setRecipes}/>
        {props.recipes.map((recipe) => (
          <div
            key={recipe.id}
            onClick={() => {
              props.displayOne({
                id: recipe.id,
                image: recipe.image,
                title: recipe.title,
              });
            }}
          >
            <p>{recipe.title}</p>
            <img src={recipe.image} />
          </div>
        ))}
      </>
    );
  }
};
export default Recipes;
