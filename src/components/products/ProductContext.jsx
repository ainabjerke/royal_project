import React, { useContext, useState, useEffect } from "react";
import { API } from "../../constants/Api";
import axios from "axios";

const ProductContext = React.createContext();

export function useProducts() {
  return useContext(ProductContext);
}

//creating function for context provider to share context of products between components
export function ProductProvider({ children }) {
  //create the state for products
  const [products, setProducts] = useState(() => []);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await axios.get(API);
        console.log(response);
        //stores the api data
        var aProducts = response.data;
        //get product from storage
        var aFavorites = getPersistedFavorites();
        //maps through the api data in aProduct
        //map() creates a new array from calling a function for every array element.
        //map() calls a function once for each element in an array.
        //map() does not execute the function for empty elements.
        //map() does not change the original array.
        //The find() method returns the value of the first element that passes a test.
        //The find() method executes a function for each array element.
        //The find() method returns undefined if no elements are found.
        //The find() method does not execute the function for empty elements.
        //The find() method does not change the original array
        var aEnhancedProducts = aProducts.map((product) => {
          return {
            ...product,
            favorite: !!aFavorites.find((fav) => fav === product.id),
          };
        });
        setProducts(aEnhancedProducts);
      } catch (error) {
        setError(error.toString());
      } finally {
        setIsLoading(false);
        console.log(setIsLoading);
      }
    }
    fetchData();
  }, []);

  //function that toggles products in and out of favorites array
  function toggleFavorite(sProductId) {
    togglePersistedFavorite(sProductId);
    const aFavorites = getPersistedFavorites();
    let aProducts = products.map((product) => {
      return {
        ...product,
        //check if favorite is found and convert it to boolean
        favorite: !!aFavorites.find((fav) => fav === product.id),
      };
    });
    setProducts(aProducts);
  }

  return (
    <ProductContext.Provider
      value={{ products, toggleFavorite, isLoading, error }}
    >
      {children}
    </ProductContext.Provider>
  );
}

//*** *** ***  GET PRODUCT FROM STORAGE *** *** ***//
function getPersistedFavorites() {
  //Retrive a favorite-product key and return a string JSON string value from local storage
  let sLocalStorageJson = window.localStorage.getItem("favorite-products");
  //parse the stored json string in sLocalStorageJson to an object and save it to oLocalStorage
  //JSON.parse() method converts a JSON string into a JavaScript object.
  //let result = condition ? value1 : value2;
  //the condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.
  let oLocalStorage = sLocalStorageJson
    ? //value1
      JSON.parse(sLocalStorageJson)
    : //value2
      { favoriteProducts: [] };
  //return object of favoriteProducts in oLocalStorage
  return oLocalStorage.favoriteProducts;
}

//*** *** *** store values in the localStorage object *** *** ***//
//It takes two parameters: a key and a value
//setItem(): Add key and value to localStorage
//key: "favorite-products", value: favoriteProducts: aFavorites
//To store arrays or objects convert them to strings.
//To do this, we use the JSON.stringify() method before passing to setItem().
function setPersistedFavorites(aFavorites) {
  window.localStorage.setItem(
    "favorite-products",
    JSON.stringify({ favoriteProducts: aFavorites })
  );
}

//*** *** ***  Toggle function *** *** ***//
function togglePersistedFavorite(pProductId) {
  //aFavorites stores an product array with id's from getPersistedFavorites();
  var aFavorites = getPersistedFavorites();
  console.log("aFavorite", aFavorites);
  //storeFoundIndex stores the specific product id with an index
  var sFoundIndex = aFavorites.findIndex(
    (productId) => productId === pProductId
  );
  //now toggle it
  //method returns -1 if no match is found.
  //check if found in favorites
  if (sFoundIndex > -1) {
    //The splice() method adds and/or removes array elements.
    //The splice() method overwrites the original array.
    //found so remove
    aFavorites.splice(sFoundIndex, 1);
  } else {
    //not in favorites yet so add
    aFavorites.push(pProductId);
  }
  ////SAVES THE PRODUCT/ITEM THAT HAS NOT THE SAME ID IN afavorites
  setPersistedFavorites(aFavorites);
}
