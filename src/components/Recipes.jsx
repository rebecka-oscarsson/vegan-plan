import fetchData from "./fetchData";
const apiKey = process.env.REACT_APP_API_KEY;

const Recipes = ({ recipes }) => {
  function getRecipe(id) {
    fetchData(
      "https://api.spoonacular.com/recipes/" +
        id +
        "/information?apiKey=" +
        apiKey
    ).then((data) => {
      console.log("receptet du klickade på: ", data);
    });
  }
  return (
    <>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          onClick={() => {
            getRecipe(recipe.id);
          }}
        >
          <p>{recipe.title}</p>
          <img src={recipe.image} />
        </div>
      ))}
    </>
  );
};
export default Recipes;
