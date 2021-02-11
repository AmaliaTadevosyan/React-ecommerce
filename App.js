import React from "react";

import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import Basket from "./Pages/Basket";
import Checkout from "./Pages/Checkout";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route path='/' component={HomePage} exact />
      <Route path='/productpage' component={ProductPage} />
      <Route path='/basket' component={Basket} />
      <Route path='/checkout' component={Checkout} />
    </Switch>
  );
}

export default App;
