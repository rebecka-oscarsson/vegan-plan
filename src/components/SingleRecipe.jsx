import fetchData from './fetchData';
import { useEffect, useState } from 'react';
const apiKey = process.env.REACT_APP_API_KEY;

const SingleRecipe = ({oneRecipe, setOneRecipe}) => {
  const [instructions, setInstructions] = useState();
  const [ingredients, setIngredients] = useState([]);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    fetchData(
      'https://api.spoonacular.com/recipes/' +
        oneRecipe +
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
      setIngredients(data.extendedIngredients);
      setTitle(data.title);
      setImage(data.image);
    });
  }, []);

  return (
    <>
      <section className='hero-image'>
        <img src={image} />
      </section>

      <div className='single-recipe-title'>
        <h1 className='single-recipe-heading'>{title}</h1>

        <div className='single-recipe-btn'>
          <button
            onClick={() => {
              setOneRecipe();
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
              <li key={ingredient.id}>{ingredient.originalString}</li>
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
