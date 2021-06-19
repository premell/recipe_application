import Home from "./pages/Home"
import AddRecipe from "./pages/AddRecipe"
import GenerateList from "./pages/GenerateList"
import ErrorPage from "./pages/ErrorPage"
import Navbar from "./components/Navbar"

import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


function App() {
  return (

    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/add_recipe">
          <AddRecipe/>
        </Route>
        <Route path="/generate_list">
          <GenerateList/>
        </Route>
        <Route path="*">
          <ErrorPage/>
        </Route>
      </Switch>


    </Router>
  );
}

export default App;
