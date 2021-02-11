import React from "react";
import Main from "../components/Main/Main";
import SecondScreen from "../components/SecondScreen/SecondScreen";
import Productlist from "../components/ProductList/Productlist";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Main />
      <SecondScreen />
      <Productlist />
      <Footer />
    </>
  );
};

export default HomePage;
