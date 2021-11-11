import React from 'react';
import RecipeGrid from './RecipeGrid';

const Start = ({recipes, setOneRecipe}) => {
  return (
    <>
      <div className="header-start">
        <img className="start-circle" src={'./start-circle.png'} width={150} alt='circel'/>
        <div className="start-box">
          <span className="text-over">Veckans matsedel</span>
          <h2 className="start-h2">Klimatsmart &amp;<br /> hälsosam veckomeny</h2>
          <span className="text-under"><p>Testa gratis!</p></span>
        </div>
      </div>
      <div className="our-vision">
      <img className="start-planet" src={'./planet.png'} width={180} alt='planet'/>
        <h1>Mat som gör skillnad<br />– för din hälsa &amp; klimatet</h1>
        <div className="text-container">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <span className="text-under"><p>Läs mer</p></span>
        </div>
      </div>
      <div className="recipes-carousel">
        <h4 className="h4-start">Näringsrika och enkla middagsrecept</h4>
        <RecipeGrid recipes={recipes} setOneRecipe = {setOneRecipe} limitRecipes={true}/>
      </div>
      <div className="banner">
      </div>
    </>
  )
}

export default Start;