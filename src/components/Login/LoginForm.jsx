import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BASE_URL, TOKEN_PATH } from "../../constants/Api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import axios from "axios";
import AuthContext from "../../context/AuthContext";

//Login to adminpage:
//username: admin
//password: Pass1234

const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
  username: yup.string().required("Please insert a valid username"),
  password: yup.string().required("Please insert a valid password"),
});

function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [, setAuth] = useContext(AuthContext);
  let navigate = useNavigate();

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);
    console.log(data);
    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);
      setAuth(response.data);
      //redirect to admin page if login is a success:
      navigate("/admin");
      reset();
    } catch (error) {
      console.log(error.response);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      {loginError && <Alert variant="danger">Login failed</Alert>}
      {(errors.userName || errors.password) && (
        <Alert variant="danger">Wrong username or password entered</Alert>
      )}

      <Form onSubmit={handleSubmit(onSubmit)} className="loginForm">
        <fieldset disabled={submitting}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <InputGroup>
              <Form.Control
                placeholder="Enter username"
                {...register("username")}
                className="loginForm__input"
              ></Form.Control>
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <Form.Control
                type="password"
                placeholder="Enter password"
                className="loginForm__input"
                {...register("password")}
              ></Form.Control>
            </InputGroup>
          </Form.Group>

          <Col className="text-center">
            <Button variant="dark" type="submit" className="loginForm__btn">
              {submitting ? "Loggin in..." : "Login"}
            </Button>
          </Col>
        </fieldset>
      </Form>
    </div>
  );
}

export default LoginForm;
