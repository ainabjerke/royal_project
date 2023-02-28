import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPhone,
  faUserAlt,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function Navigation() {
  const [auth, setAuth] = useContext(AuthContext);

  const navigate = useNavigate();

  function logout() {
    setAuth(null);
    navigate("/");
  }
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      className="justify-content-center navbar"
    >
      <Container>
        <NavLink to="/" exact="true">
          <Navbar.Brand>
            <div className="navbar__logo">
              <img src="/images/royal_logo.jpg" alt="my alt text" />
            </div>
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="navbar__links-styling"
        >
          <Nav className="m-auto navbar__links">
            <NavLink to="/" className="nav-link">
              <FontAwesomeIcon icon={faHome} className="navbar__icons" />
              Home
            </NavLink>

            <NavLink to="/favorites" className="nav-link">
              <FontAwesomeIcon icon={faHeart} className="navbar__icons" />
              Favorites
            </NavLink>

            <NavLink to="/contact" className="nav-link">
              <FontAwesomeIcon icon={faPhone} className="navbar__icons" />
              Contact
            </NavLink>

            {auth ? (
              <>
                <NavLink to="/" className="nav-link" onClick={logout}>
                  <FontAwesomeIcon
                    icon={faArrowAltCircleRight}
                    className="navbar__icons"
                  />
                  Log out
                </NavLink>
              </>
            ) : (
              <NavLink to="/login" className="nav-link">
                <FontAwesomeIcon icon={faUserAlt} className="navbar__icons" />
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
