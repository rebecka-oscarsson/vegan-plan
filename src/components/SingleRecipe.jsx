import fetchData from './fetchData';
import { useEffect, useState } from 'react';
const apiKey = process.env.REACT_APP_API_KEY;

const SingleRecipe = (props) => {
  console.log(props)
  const [instructions, setInstructions] = useState();

  useEffect(() => {

    fetchData(
      'https://api.spoonacular.com/recipes/' +
      props.oneRecipe[0].id +
        '/information?apiKey=' +
        apiKey
    ).then((data) => {
      setInstructions(data.instructions)
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
      {instructions}
    </>
  );
};

export default SingleRecipe;
