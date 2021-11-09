import SingleRecipe from './SingleRecipe';
import Search from './Search';
import { useState } from 'react';

const Recipes = (props) => {
  const [recipes, setRecipes] = useState([]);

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
