import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <Container className="footer">
      <Row>
        <Col lg={4}>
          <div className="footer-l">
            <img
              src="/images/footer-l__img.jpg"
              alt=""
              className="footer-l__img1"
            />
          </div>
        </Col>
        <Col lg={8}>
          <div className="footer-r">
            <div className="footer-r">
              <img
                src="/images/footer-r_img.jpg"
                alt=""
                className="footer-r__img"
              />
            </div>
            <div className="footer-r__text-content">
              <h2 className="footer-r__nav-title">Information</h2>
              <Nav>
                <NavLink to="/" className="footer-r__links">
                  Home
                </NavLink>

                <NavLink to="/favorites" className="footer-r__links">
                  Favorites
                </NavLink>

                <NavLink to="/contact" className="footer-r__links">
                  Contact
                </NavLink>

                <NavLink to="/login" className="footer-r__links">
                  Login
                </NavLink>
              </Nav>
              <h2 className="footer-r__icon-title">Connect with us</h2>
              <FontAwesomeIcon icon={faFacebookF} className="footer-r__icon" />
              <FontAwesomeIcon icon={faTwitter} className="footer-r__icon" />
              <FontAwesomeIcon icon={faInstagram} className="footer-r__icon" />
              <FontAwesomeIcon icon={faYoutube} className="footer-r__icon" />
            </div>
            <div className="footer-r__logo-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // width="262.394"
                // height="145.723"
                viewBox="0 0 262.394 145.723"
              >
                <defs>
                  <clipPath id="clipPath">
                    <rect
                      id="Rectangle_11"
                      data-name="Rectangle 11"
                      width="81.989"
                      height="46.819"
                      fill="#e0dab8"
                    />
                  </clipPath>
                  <clipPath id="clipPath-2">
                    <rect
                      id="Rectangle_14"
                      data-name="Rectangle 14"
                      width="262.394"
                      height="138.447"
                      transform="translate(0 0)"
                      fill="none"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Group_197"
                  data-name="Group 197"
                  transform="translate(-1710 -1142.5)"
                >
                  <g
                    id="Group_134"
                    data-name="Group 134"
                    transform="translate(1800.203 1142.5)"
                  >
                    <g
                      id="Group_133"
                      data-name="Group 133"
                      clipPath="url(#clipPath)"
                    >
                      <path
                        id="Path_627"
                        data-name="Path 627"
                        d="M42.52,8.743V45.794L40.994,46.82l-1.526-1.026V8.746L31.183,23.1H27.66L40.994,0l13.35,23.1H50.818Zm15.427,26.68-12.375,8.32V40.066l10.842-7.289-3.831-6.628h3.526l8.2,14.19L72.858,25.4l-9.839,6.615-1.53-2.648,20.5-13.782L64.317,46.469q-3.189-5.526-6.371-11.047m-21.53,8.32V40.066L25.59,32.786l3.832-6.637H25.9L17.692,40.362,9.131,25.4l9.853,6.625,1.529-2.649L0,15.581l17.68,30.9,6.38-11.051,12.357,8.308"
                        transform="translate(0 -0.001)"
                        fill="#e0dab8"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                  <g
                    id="Group_142"
                    data-name="Group 142"
                    transform="translate(1710 1130.057)"
                  >
                    <g
                      id="Group_141"
                      data-name="Group 141"
                      transform="translate(0 19.719)"
                    >
                      <g
                        id="Group_140"
                        data-name="Group 140"
                        transform="translate(0 0)"
                        clipPath="url(#clipPath-2)"
                      >
                        <path
                          id="Path_629"
                          data-name="Path 629"
                          d="M3158.608,1272.61,3153,1285.231a4.706,4.706,0,0,0-.528,1.77,1.028,1.028,0,0,0,.453.839,3.822,3.822,0,0,0,1.982.438v.565h-6.664v-.566a3.532,3.532,0,0,0,1.718-.584,9.469,9.469,0,0,0,1.774-2.938l7.438-16.848h.547l7.362,17.03a8.243,8.243,0,0,0,1.623,2.665,3.46,3.46,0,0,0,2.02.675v.566h-8.343v-.565a4.7,4.7,0,0,0,1.038-.128,2.209,2.209,0,0,0,.661-.274.985.985,0,0,0,.349-.374,1.033,1.033,0,0,0,.1-.465,6.027,6.027,0,0,0-.623-2.1Z"
                          transform="translate(-2998.004 -1209.398)"
                          fill="#e0dab8"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_630"
                          data-name="Path 630"
                          d="M3909.092,1288.357h-18.237v-.566h.792a2.181,2.181,0,0,0,1.926-.839,4.76,4.76,0,0,0,.321-2.226v-13.208a4.079,4.079,0,0,0-.434-2.39,2.274,2.274,0,0,0-1.812-.675h-.792v-.547h6.055v16.808a5.229,5.229,0,0,0,.161,1.531,1.026,1.026,0,0,0,.65.656,11.186,11.186,0,0,0,2.455.146h8.917Z"
                          transform="translate(-3705.176 -1209.397)"
                          fill="#e0dab8"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_631"
                          data-name="Path 631"
                          d="M1883.33,1267.907a10.907,10.907,0,0,1,7.943,3.269,10.747,10.747,0,0,1,2.227,3.388,10.164,10.164,0,0,1,.793,3.936,10.385,10.385,0,0,1-.885,4.283,10.725,10.725,0,0,1-2.41,3.433,11.282,11.282,0,0,1-3.57,2.283,11.474,11.474,0,0,1-4.363.831,11.83,11.83,0,0,1-4.363-.795,10.638,10.638,0,0,1-3.519-2.228,10.481,10.481,0,0,1-2.359-3.415,10.776,10.776,0,0,1-.865-4.356,10.264,10.264,0,0,1,3.234-7.533,11.34,11.34,0,0,1,3.61-2.265,12.114,12.114,0,0,1,4.526-.831m-.373,1.084a8.134,8.134,0,0,0-3.38.667,6.846,6.846,0,0,0-2.5,1.9,8.434,8.434,0,0,0-1.545,2.987,13.649,13.649,0,0,0-.526,3.927,14.317,14.317,0,0,0,.515,3.964,9.05,9.05,0,0,0,1.522,3.087,6.873,6.873,0,0,0,2.5,2.01,7.872,7.872,0,0,0,3.436.712,9.2,9.2,0,0,0,3.223-.548,6.809,6.809,0,0,0,2.574-1.69,7.863,7.863,0,0,0,1.712-2.9,12.818,12.818,0,0,0,.615-4.211,15.554,15.554,0,0,0-.515-4.192,8.51,8.51,0,0,0-1.544-3.105,6.7,6.7,0,0,0-2.552-1.937,8.745,8.745,0,0,0-3.536-.667"
                          transform="translate(-1782.626 -1209.398)"
                          fill="#e0dab8"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_632"
                          data-name="Path 632"
                          d="M1234.149,1277.667c.227-.046,2.227-.1,2.434-.163a5.759,5.759,0,0,0,1.91-.95,3.85,3.85,0,0,0,1.144-1.425,4.19,4.19,0,0,0,.378-1.772,4.493,4.493,0,0,0-.331-1.744,4.05,4.05,0,0,0-.927-1.37,4.186,4.186,0,0,0-1.428-.9,4.888,4.888,0,0,0-1.4-.3q-.223-.016-.456-.017t-.483.017l-7.992-.591v-.547h7.707q1.72,0,2.92.1a10.72,10.72,0,0,1,2.079.356,5.331,5.331,0,0,1,1.512.684,6.142,6.142,0,0,1,1.2,1.086,4.5,4.5,0,0,1,1.115,3.03,4.691,4.691,0,0,1-1.276,3.285,7.251,7.251,0,0,1-3.94,1.953l4.805,6.3a17.089,17.089,0,0,0,1.369,1.687,6.35,6.35,0,0,0,1.208,1.021,4.467,4.467,0,0,0,1.265.547,10.6,10.6,0,0,0,1.557.264v.565h-5.663l-6.927-9.058Z"
                          transform="translate(-1168.446 -1209.398)"
                          fill="#e0dab8"
                          fillRule="evenodd"
                        />
                        <path
                          id="Path_633"
                          data-name="Path 633"
                          d="M2534.155,1278.281l.731-1.112Zm6.694-10.375h3.592v.547h-.4a3.243,3.243,0,0,0-1.887.785,11.152,11.152,0,0,0-2.3,2.681l-5.1,7.754v5.145a3.986,3.986,0,0,0,.434,2.353,2.468,2.468,0,0,0,1.869.62h.7v.566h-9v-.566h.755a2.192,2.192,0,0,0,1.906-.785,4.344,4.344,0,0,0,.34-2.189v-4.853l-5.814-8.574q-.528-.766-.887-1.241a6.093,6.093,0,0,0-.67-.766,2.908,2.908,0,0,0-.623-.456,7.414,7.414,0,0,0-.727-.328,2.628,2.628,0,0,0-.378-.1,2.7,2.7,0,0,0-.529-.046v-.547h4.961l2.542,3.731.067.1,4.418,6.6.04-.06.731-1.112,3.382-5.14a9.2,9.2,0,0,0,.63-1.093Z"
                          transform="translate(-2401.767 -1209.397)"
                          fill="#e0dab8"
                          fillRule="evenodd"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
