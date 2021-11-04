import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { Switch } from "react-router";

import Start from "./components/Start";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Recipes from "./components/Recipes";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import Search from "./components/Search";

const App = () => {
  const fetchData = async () => {
    const response = await fetch("http://localhost:3001/recipes");
    const data = await response.json();
    console.log("myData", data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <div className="pages">
            <Route exact path="/" component={Start} />
            <Route path="/about" component={AboutUs} />
            <Route path="/recipes" component={Recipes} />
          </div>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;

// <Start />
// <Search />
// <Filter />
// <Recipes />
// <Footer />
