import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import ProductItem from "./ProductItem";
import { useProducts } from "./ProductContext";

function LaunchAllProducts() {
  const { isLoading, error, products } = useProducts();
  if (isLoading) {
    return (
      <Spinner animation="border" role="status" className="spinner">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (error) {
    return <Alert variant="danger">An error occured: {error}</Alert>;
  }

  return (
    <>
      {products.map(function (product) {
        const { id, name, prices, favorite } = product;
        const image_url = product.images[0].thumbnail;
        return (
          <ProductItem
            favorite={favorite}
            key={id}
            id={id}
            name={name}
            image_url={image_url}
            price={Number(prices.price)}
          />
        );
      })}
    </>
  );
}

export default LaunchAllProducts;
