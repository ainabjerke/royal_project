import React from "react";
import Heading from "../layout/Heading";
import LaunchFavProducts from "../products/LaunchFavProducts";
import { ProductProvider } from "../products/ProductContext";

function Favorites() {
  return (
    <>
      <ProductProvider>
        <Heading className="product__heading">Your favorite products:</Heading>
        <div className="product__container">
          <LaunchFavProducts />
        </div>
      </ProductProvider>
    </>
  );
}

export default Favorites;
