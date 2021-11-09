import fetchData from './fetchData';
import { useEffect, useState } from 'react';
const apiKey = process.env.REACT_APP_API_KEY;

const SingleRecipe = (props) => {
  console.log(props)
  const [instructions, setInstructions] = useState();
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {

    fetchData(
      'https://api.spoonacular.com/recipes/' +
      props.oneRecipe[0].id +
        '/information?apiKey=' +
        apiKey
    ).then((data) => {
      console.log("SingleRecipe har fetchat detta: ", data)
      if(data.instructions)
      {setInstructions(data.instructions)}
      else
      {setInstructions(data.summary)}
      setIngredients(data.extendedIngredients)
    });

  }, []);

  return (
    <>
      <h2>{props.oneRecipe[0].title}</h2>
      <p>
        <a
          href='#'
          onClick={() => {
            props.emptyOneRecipe();
          }}
        >
          back to all recipes
        </a>
      </p>
      <img src={props.oneRecipe[0].image} />
      <h3>instructions</h3>
      <div dangerouslySetInnerHTML={{__html: instructions}}></div>
      <h3>ingredients</h3>
      <ul>
      {ingredients.map((ingredient) => (
          <li>
            {ingredient.originalString}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SingleRecipe;
