import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import React, { useState } from "react";

function FavoriteProductItem({ toggleProduct, id, image_url, name, price }) {
  //Using useToggle Hook
  const useToggle = (initialState) => {
    const [toggleValue, setToggleValue] = useState(initialState);

    const toggler = () => {
      setToggleValue(!toggleValue);
    };
    return [toggleValue, toggler];
  };
  const [toggle] = useToggle();

  return (
    <div className="cards">
      <Card style={{ width: "14rem" }} className="cards__container">
        <div>
          <FontAwesomeIcon
            icon={faHeart}
            className="product-detail__icon"
            onClick={toggleProduct}
          />
        </div>
        {toggle && (
          <Link to={`favorites/${id}`} key={id} className="cards__link">
            <Card.Img variant="top" src={image_url} className="cards__img" />
            <Card.Body>
              <Card.Title className="cards__title">{name}</Card.Title>
              <Card.Text className="cards__price">${price}</Card.Text>
              <Button className="cards__btn">View this model</Button>
            </Card.Body>
          </Link>
        )}
      </Card>
    </div>
  );
}

FavoriteProductItem.propTypes = {
  id: PropTypes.number,
  image_url: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};

export default FavoriteProductItem;
