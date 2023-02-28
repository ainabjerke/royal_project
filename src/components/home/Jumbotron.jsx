import { Link } from "react-router-dom";
import LogoSvg from "../layout/LogoSvg";

function Jumbotron() {
  return (
    <div className="jumbotron">
      <div className="jumbotron__img"></div>
      <div className="jumbotron__text">
        <h2 className="jumbotron__text-title">Welcome</h2>
        <h3 className="jumbotron__text-subtitle">Latest collection</h3>
        <div className="jumbotron__logo-icon">
          <LogoSvg></LogoSvg>
        </div>
        <Link to={`detail/24`}>
          <p className="jumbotron__text-btn">Shop now</p>
        </Link>
      </div>
    </div>
  );
}

export default Jumbotron;
