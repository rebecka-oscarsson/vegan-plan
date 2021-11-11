import React from 'react';
import ShoppingList from './ShoppingList';
import Saved from './Saved';
import FavoriteRecipes from './FavoriteRecipes';

const MyPages = () => {
  return (
    <>
  <div className="prenumeration">
  <p className="text-fat">MINA SIDOR</p>
  <h2>Välkommen Janne!</h2>
  <p className="text-fat-big">Stort grattis till dig att du väljer att göra en insats för både din hälsa och klimatet.<br />
Här kommer veckans recept. God spis! 
   </p>
   <div className="choose">
     <p className="text-fat">VÄLJ ANTAL PERSONER</p>
     <select name="count-persons">
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="8">8</option>
        </select>
   </div>
   <p className="text-right">Avbryt prenumerationen</p>
  </div>
  <FavoriteRecipes/>
  <ShoppingList />
  <Saved />
    </>
      );
};

export default MyPages;
