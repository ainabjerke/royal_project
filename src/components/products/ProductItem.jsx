import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useProducts } from "./ProductContext";

function ProductItem({ id, image_url, name, price, favorite }) {
  //Using useToggle Hook
  const { toggleFavorite } = useProducts();

  const useToggle = (initialState) => {
    const [toggleValue, setToggleValue] = useState(initialState);

    const toggler = () => {
      setToggleValue(!toggleValue);
    };
    return [toggleValue, toggler];
  };
  const [toggle] = useToggle();
  console.log(favorite);
  return (
    <div className="cards">
      <Card style={{ width: "14rem" }} className="cards__container">
        <div>
          <FontAwesomeIcon
            icon={favorite ? faHeartSolid : faHeart}
            className="product-detail__icon"
            onClick={() => toggleFavorite(id)}
          />
        </div>

        {toggle && (
          <>
            <Card.Img variant="top" src={image_url} className="cards__img" />
            <Card.Body>
              <Card.Title className="cards__title">{name}</Card.Title>
              <Card.Text className="cards__price">${price}</Card.Text>
              <Button className="cards__btn">View this model</Button>
            </Card.Body>
          </>
        )}

        <Link to={`detail/${id}`} key={id} className="cards__link">
          <Card.Img variant="top" src={image_url} className="cards__img" />
          <Card.Body>
            <Card.Title className="cards__title">{name}</Card.Title>
            <Card.Text className="cards__price">${price}</Card.Text>
            <Button className="cards__btn">View this model</Button>
          </Card.Body>
        </Link>
      </Card>
    </div>
  );
}

ProductItem.propTypes = {
  id: PropTypes.number,
  image_url: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};

export default ProductItem;
