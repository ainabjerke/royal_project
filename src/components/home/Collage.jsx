import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Collage() {
  return (
    <Container>
      <Row>
        <Col sm={6}>
          <div className="collage-l">
            <img
              src="/images/collage_men_watch.jpg"
              alt=""
              className="collage-l__img1"
            />
            <div className="collage-l__text-holder">
              <h2 className="collage-l__title">Mens's</h2>
              <h3 className="collage-l__subtitle">Watches</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="88"
                height="1"
                viewBox="0 0 88 1"
              >
                <line
                  id="Line_4"
                  data-name="Line 4"
                  x2="88"
                  transform="translate(0 0.5)"
                  fill="none"
                  stroke="#e0dab8"
                  strokeWidth="1"
                />
              </svg>
              <p className="collage-l__text">
                Our men’s watch collection of
                <span> timepieces from top watch brands</span>
              </p>
              <Link to={`detail/11`}>
                <p className="collage-l__text-btn">Shop</p>
              </Link>
            </div>
          </div>
        </Col>
        <Col sm={6}>
          <div className="collage-r">
            <img
              src="/images/collage_women_watch.jpg"
              alt=""
              className="collage-r__img2"
            />
            <div className="collage-r__text-holder">
              <h2 className="collage-r__title">Women's</h2>
              <h3 className="collage-r__subtitle">Watches</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="88"
                height="1"
                viewBox="0 0 88 1"
              >
                <line
                  id="Line_4"
                  data-name="Line 4"
                  x2="88"
                  transform="translate(0 0.5)"
                  fill="none"
                  stroke="#e0dab8"
                  strokeWidth="1"
                />
              </svg>
              <p className="collage-r__text">
                Our men’s watch collection of timepieces from top watch brands
              </p>
            </div>
            <Link to={`detail/22`}>
              <p className="collage-r__text-btn">Shop</p>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Collage;
