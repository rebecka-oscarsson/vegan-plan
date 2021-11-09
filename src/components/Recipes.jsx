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
      <div className="Recipe-Grid">
      <Search setRecipes={props.setRecipes}/>
        {props.recipes.map((recipe) => (
            <figure className="Recipe-Card"
              key={recipe.id}
              onClick={() => {
                props.displayOne({
                  id: recipe.id,
                  image: recipe.image,
                  title: recipe.title,
                });
              }}
              >
              <img src={recipe.image} />
              <figcaption>{recipe.title}</figcaption>
            </figure>
          ))}
      </div>
      </>
    );
  }
};
export default Recipes;
