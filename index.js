import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import ShopStoreService from "./services/index";
import { ShopServiceProvider } from "./service-context";
import { BrowserRouter as Router } from "react-router-dom";

const AppWrapper = () => {
  const shopStoreService = new ShopStoreService();

  return (
    <Provider store={store}>
      <Router>
        <ShopServiceProvider value={shopStoreService}>
          <App />
        </ShopServiceProvider>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<AppWrapper />, document.getElementById("root"));
