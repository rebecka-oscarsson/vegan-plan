import SingleRecipe from './SingleRecipe';

const Recipes = (props) => {
  
  if (props.oneRecipe.length == 1) {
    return (
      <SingleRecipe
        recipes={props.recipes}
        oneRecipe={props.oneRecipe}
        emptyOneRecipe={props.emptyOneRecipe}
      ></SingleRecipe>
    );
  } else {
    return (
      <>
      <div className="Recipe-Grid">
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
