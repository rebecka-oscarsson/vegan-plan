import React from 'react';
import beetrootsoup  from '../img/beetrootsoup.jpg'
import ricepaperroll  from '../img/ricepaperroll.jpg'
import ricepudding  from '../img/ricepudding.jpg'
import toast  from '../img/toast.jpg'
import veggieburger  from '../img/veggieburger.jpg'
import veggiepizza  from '../img/veggiepizza.jpg'
import tempehskewers  from '../img/tempehskewers.jpg'

const FavoriteRecipes = () => {
  return (
    <>
    <div className="Favorite-Recipes-Grid">
        <div className="Favorite-Recipes-Card">
            <p>MÅNDAG</p>
            <figure className="Recipes">
            <img src={beetrootsoup}/>
            <figcaption>Beetroot Soup with Sour Cream Swirl and Wholegrain Bread</figcaption>
            </figure>
        </div>
        <div className="Favorite-Recipes-Card">
            <p>TISDAG</p>
            <figure className="Recipes">
            <img src={toast}/>
            <figcaption>Toasted Sourdough Bread with Toppings</figcaption>
            </figure>
        </div>
        <div className="Favorite-Recipes-Card"> 
            <p>ONSDAG</p>
            <figure className="Recipes">
            <img src={veggieburger}/>
            <figcaption>The Ultimate Veggie Burger</figcaption>
            </figure>
        </div>
        <div className="Favorite-Recipes-Card">
            <p>TORSDAG</p>
            <figure className="Recipes">
            <img src={veggiepizza}/>
            <figcaption>Veggie Pizza</figcaption>
            </figure>
        </div>
        <div className="Favorite-Recipes-Card">
            <p>FREDAG</p>
            <figure className="Recipes">
            <img src={ricepaperroll}/>
            <figcaption>Rainbow Rice Paper Rolls with Peanut Sauce</figcaption>
            </figure>
        </div>
        <div className="Favorite-Recipes-Card">
            <p>LÖRDAG</p>
            <figure className="Recipes">
            <img src={tempehskewers}/>
            <figcaption>Spicy Tempeh Skewers with Peanut Sauce</figcaption>
            </figure>
        </div>
        <div className="Favorite-Recipes-Card">
            <p>SÖNDAG</p>
            <figure className="Recipes">
            <img src={ricepudding}/>
            <figcaption>Ricepudding with Fruits and Berries Topping</figcaption>
            </figure>
        </div>
    </div>
    </>
  )
}

export default FavoriteRecipes;