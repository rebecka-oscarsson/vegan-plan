import { useState, useEffect } from "react";

const FavoriteRecipes = () => {
    const [menuData, setMenuData] = useState([]);

    const fetchMenuData= async ()=>{
        const res = await fetch('http://localhost:3001/weeklyMenu');
        const data = await res.json();
        console.log("Weekly Menu:", data);
        return data;
    }
    useEffect(() => {
        const getMenuData = async () => {
            const menu = await fetchMenuData();
            setMenuData(menu);
          };
          getMenuData();
      }, []);

  return (
    <>
    <h2>Veckans recept</h2>
    <div className="Favorite-Recipes-Grid">
            {menuData.map((weeklyMenu)=> {
                return <div className="Favorite-Recipes-Card" key={weeklyMenu.id}>
                    <p>{weeklyMenu.day}</p>
                    <figure className="Recipes">
                    <img src={weeklyMenu.image}/>
                    <figcaption>{weeklyMenu.title}</figcaption>
                </figure>
                </div>
            })}
    </div>
    </>
  )
}

export default FavoriteRecipes;