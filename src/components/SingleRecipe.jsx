import fetchData from './fetchData';
import { useEffect, useState } from 'react';
const apiKey = process.env.REACT_APP_API_KEY;

const SingleRecipe = (props) => {
  const [instructions, setInstructions] = useState();
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetchData(
      'https://api.spoonacular.com/recipes/' +
        props.oneRecipe[0].id +
        '/information?apiKey=' +
        apiKey
    ).then((data) => {
      console.log('SingleRecipe har fetchat detta: ', data);
      if (data.instructions) {
        setInstructions(data.instructions);
      } else {
        setInstructions(data.summary);
      }
      setIngredients(data.extendedIngredients);
    });
  }, []);

  return (
    <>
      <section className='hero-image'>
        <img src={props.oneRecipe[0].image} />
      </section>

      <div className='single-recipe-title'>
        <h1 className='single-recipe-heading'>{props.oneRecipe[0].title}</h1>

        <div className='single-recipe-btn'>
          <button
            onClick={() => {
              props.emptyOneRecipe();
            }}
          >
            X
          </button>
        </div>
      </div>

      <div className='single-recipe-container'>
        <div className='ingredients'>
          <h3>ingredients</h3>
          <ul className='ingredient-list'>
            {ingredients.map((ingredient) => (
              <li>{ingredient.originalString}</li>
            ))}
          </ul>
        </div>
        <div className='instructions'>
          <h3>instructions</h3>
          <div dangerouslySetInnerHTML={{ __html: instructions }}></div>
        </div>
      </div>
    </>
  );
};

export default SingleRecipe;
