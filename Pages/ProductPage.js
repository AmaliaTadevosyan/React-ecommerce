import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Menu from "../components/Menu/Menu";
import Productlist from "../components/ProductList/Productlist";

const ProductPage = () => {
  return (
    <section>
      <Navigation />
      <Menu />
      <Productlist />
    </section>
  );
};

export default ProductPage;
