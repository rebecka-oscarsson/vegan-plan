import SingleRecipe from './SingleRecipe';
import Search from './Search';
import { useState } from 'react';
import RecipesHeader from './RecipesHeader';

const Recipes = (props) => {
  const [recipes, setRecipes] = useState([]);

  if (props.oneRecipe.length == 1) {
    return (
      <>
      <RecipesHeader />
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
      <RecipesHeader />
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
