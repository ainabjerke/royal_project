import React from "react";
import LaunchAllProducts from "../products/LaunchAllProducts";
import Heading from "../layout/Heading";
import Jumbotron from "./Jumbotron";
import Collage from "./Collage";
import Newsletter from "./Newsletter";
import { ProductProvider } from "../products/ProductContext";

function Home() {
  return (
    <>
      <Jumbotron />
      <Collage />
      <Heading className="product__heading">New arrivals</Heading>
      <div className="product__container">
        <ProductProvider>
          <LaunchAllProducts />
        </ProductProvider>
      </div>
      <Newsletter />
    </>
  );
}

export default Home;
