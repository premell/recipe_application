import Home from "./pages/Home";
import CreateNewRecipe from "./pages/CreateNewRecipe";
import GenerateList from "./pages/GenerateList";
import DetailedRecipe from "./pages/DetailedRecipe";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar/Navbar";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/add_recipe">
          <CreateNewRecipe />
        </Route>
        <Route path="/generate_list">
          <GenerateList />
        </Route>
        <Route path="/recipe/:id">
          <DetailedRecipe />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
