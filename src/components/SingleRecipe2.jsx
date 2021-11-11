import fetchData from './fetchData';
import { useEffect, useState } from 'react';
const apiKey = process.env.REACT_APP_API_KEY;

const SingleRecipe2 = ( {clickedRecipe, setClickedRecipe} ) => {

  const [recipeData, setRecipeData] = useState({})

  useEffect(() => {
    fetchData(
      'https://api.spoonacular.com/recipes/' +
      clickedRecipe +
        '/information?apiKey=' +
        apiKey
    ).then((data) => {
      console.log("SingleRecipe har fetchat detta: ", data)
      let instructions ="";
      //if-sats pga instructions saknades för vissa recept i api:et
      if(data.instructions)
      {instructions = data.instructions}
      else
      {instructions = data.summary}
      {setRecipeData({instructions: instructions, ingredients: data.extendedIngredients, title: data.title, image: data.image})}
    });
  }, []);

  return (
    <>
      <h2>{recipeData.title}</h2>
      <p>
        <a
          href='#'
          onClick={() => {
            setClickedRecipe(null);
          }}
        >
          back to all recipes
        </a>
      </p>
      <img src={recipeData.image} />
      <h3>instructions</h3>
      <div dangerouslySetInnerHTML={{__html: recipeData.instructions}}></div>
      <h3>ingredients</h3>
      <ul>
      {recipeData.ingredients.map((ingredient) => (
          <li>
            {ingredient.originalString}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SingleRecipe2;
