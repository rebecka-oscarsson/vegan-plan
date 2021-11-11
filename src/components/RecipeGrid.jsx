import { useState } from 'react';
import SingleRecipe2 from './SingleRecipe2';

const RecipeGrid = ({recipes, limitRecipes}) => {
const [clickedRecipe, setClickedRecipe] = useState();
    
if (limitRecipes) {recipes = recipes.slice(0, 4)};
    
    if (!clickedRecipe)
    {return (<div className="Recipe-Grid">
        {recipes.map((recipe) => (
            <figure className="Recipe-Card"
              key={recipe.id}
              onClick={() => {
                setClickedRecipe(recipe.id)
              }}
              >
              <img src={recipe.image} />
              <figcaption>{recipe.title}</figcaption>
            </figure>
          ))}
      </div>)}
      else
      {return <SingleRecipe2
      clickedRecipe = {clickedRecipe} setClickedRecipe = {setClickedRecipe}
      />} 
    }

    export default RecipeGrid