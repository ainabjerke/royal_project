import { useForm } from "react-hook-form";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  REQUIRED_MINIMUM_FIRSTNAME_CHARACTERS,
  REQUIRED_MINIMUM_LASTTNAME_CHARACTERS,
  REQUIRED_MINIMUM_MESSAGE_CHARACTERS,
} from "../../constants/formVariables";
import FormValidationError from "./FormValidationError";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("Please enter your first name")
    .min(
      REQUIRED_MINIMUM_FIRSTNAME_CHARACTERS,
      `First name must be at least ${REQUIRED_MINIMUM_FIRSTNAME_CHARACTERS} characters`
    ),
  lastName: yup
    .string()
    .required("Please enter your last name")
    .min(
      REQUIRED_MINIMUM_LASTTNAME_CHARACTERS,
      `Last name must be at least ${REQUIRED_MINIMUM_LASTTNAME_CHARACTERS} characters`
    ),
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  subject: yup.string().required("Please select a subject"),
  message: yup
    .string()
    .required("Please enter your message")
    .min(
      REQUIRED_MINIMUM_MESSAGE_CHARACTERS,
      `The message must be at least ${REQUIRED_MINIMUM_MESSAGE_CHARACTERS} characters`
    ),
});

function ContactForm() {
  const [submitted, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data) {
    console.log(data);
    setSubmitting(true);
    reset();
  }

  console.log(errors);

  return (
    <Container>
      <Row>
        <Col md={6}>
          <img
            src="/images/contactForm_img.jpg"
            alt=""
            className="contactForm__img1"
          />
        </Col>
        <Col md={6}>
          {submitted && (
            <Alert variant="success">
              Your message has been succsesfully sent!
            </Alert>
          )}
          <Form onSubmit={handleSubmit(onSubmit)} className="contactForm">
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="First name"
                {...register("firstName")}
              ></Form.Control>
              <Form.Text className="contactForm__required-message">
                Must be at least {REQUIRED_MINIMUM_FIRSTNAME_CHARACTERS}{" "}
                characters
              </Form.Text>
              {errors.firstName && (
                <FormValidationError>
                  {errors.firstName.message}
                </FormValidationError>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Last name"
                {...register("lastName")}
              ></Form.Control>
              <Form.Text className="contactForm__required-message">
                Must be at least {REQUIRED_MINIMUM_LASTTNAME_CHARACTERS}{" "}
                characters
              </Form.Text>
              {errors.lastName && (
                <FormValidationError>
                  {errors.lastName.message}
                </FormValidationError>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Email"
                {...register("email")}
              ></Form.Control>
              <Form.Text className="contactForm__required-message">
                Must be a valid email
              </Form.Text>
              {errors.email && (
                <FormValidationError>
                  {errors.email.message}
                </FormValidationError>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Select defaultValue="Subject" {...register("subject")}>
                <option></option>
                <option value="order">Order</option>
                <option value="Feedback">Feedback</option>
                <option value="delivery">Delivery</option>
                <option value="refund">Refund</option>
                <option value="refund">Other</option>
              </Form.Select>
              <Form.Text className="contactForm__required-message">
                Please choose a subject
              </Form.Text>
              {errors.subject && (
                <FormValidationError>
                  {errors.subject.message}
                </FormValidationError>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={6}
                placeholder="Message"
                {...register("message")}
              ></Form.Control>
              <Form.Text className="contactForm__required-message">
                Must be at least {REQUIRED_MINIMUM_MESSAGE_CHARACTERS}{" "}
                characters
              </Form.Text>
              {errors.message && (
                <FormValidationError>
                  {errors.message.message}
                </FormValidationError>
              )}
            </Form.Group>

            <Col className="contactForm__text">
              <Button className="contactForm__btn" type="submit">
                Send Message
              </Button>
            </Col>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
