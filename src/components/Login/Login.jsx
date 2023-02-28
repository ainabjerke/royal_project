import Heading from "../layout/Heading";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <div className="login__container">
      <Heading>Admin login</Heading>
      <LoginForm />
    </div>
  );
}

export default Login;
