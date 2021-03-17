import { Link } from "react-router-dom";
import "./styles.css";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <div className="navbar-container">
      <Link to="/" className="navbar-link" style={{ textDecoration: "none" }}>
        <div className="navbar-title">
          <img className="navbar-logo" src={logo} alt="logo" />
          <h3 className="navbar-text">Weather-NOW</h3>
        </div>
      </Link>
    </div>
  );
}
export default Navbar;
