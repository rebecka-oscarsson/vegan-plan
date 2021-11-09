const SingleRecipe = (props) => {
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
    </>
  );
};

export default SingleRecipe;
