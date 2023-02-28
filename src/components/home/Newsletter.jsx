import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Newsletter() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="newsletter">
            <img
              src="/images/newsletter.jpg"
              alt=""
              className="newsletter__img1"
            />
            <div className="newsletter__text-holder">
              <h2 className="newsletter__text-title">Subscribe to our</h2>
              <h3 className="newsletter__text-subtitle">Newsletter</h3>
              <p className="newsletter__text">
                To be updated with all the latest trend and product
              </p>
            </div>
            <Form className="newsletter__form">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="newsletter__email-input"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="newsletter__btn"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Newsletter;
