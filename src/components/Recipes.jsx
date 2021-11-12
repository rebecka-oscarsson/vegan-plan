import SingleRecipe from './SingleRecipe';
import Search from './Search';
import RecipesHeader from './RecipesHeader';
import RecipeGrid from './RecipeGrid';

const Recipes = (props) => {
  console.log(props)
  if (props.oneRecipe) {
    return (
      <>
      <RecipesHeader />
      <Search setRecipes={props.setRecipes} setOneRecipe={props.setOneRecipe}/>
      <SingleRecipe
        oneRecipe={props.oneRecipe}
        setOneRecipe={props.setOneRecipe}
        recipes={props.recipes}
      ></SingleRecipe>
      </>
    );
  } else {
    return (
      <>
      <RecipesHeader />
      <Search setRecipes={props.setRecipes} setOneRecipe={props.setOneRecipe}/>
      <RecipeGrid recipes={props.recipes} setOneRecipe ={props.setOneRecipe} limitRecipes={false}/>
      </>
    );
  }
};
export default Recipes;
