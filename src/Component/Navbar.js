import React from "react";
import { Link } from "react-router-dom";
import '../CSS/Navbar.css'
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py3 shadow-sm"> 
      {/* bg-body-tertiary */}
        <div className="container"> 
          <a className="navbar-brand fw-bold fs-4" href="#">
            LA COLLECTION
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  {/* Home   */}
                  <Link to="/" id="home">Home</Link>
                </a>
              </li>
              <li className="nav-item">
                <Link to="/Product" id="product">Product</Link>

                {/* <a className="nav-link" href="#">
                  Product 
                </a> */}  

              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {/* About */}
                  <Link to="/About" id="About">About</Link>
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
               
                  <Link to="/Contact" id="Contact">Contact</Link>
                </a>
              </li>
               */}
                 {/* Contact */}

            </ul>

            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <div className="buttons">
              <a href="" className="btn btn-outline-dark"> 
                {" "}
                {/* <i className="fa fa-sign-in me-1"></i> Login */}

                <Link to="/Login" id="Login"> <i className="fa fa-sign-in me-1"></i>  Login </Link>

                </a>
              <a href="" className="btn btn-outline-dark ms-2">
                {" "}
                {/*  <i className="fa fa-user-plus me-1"></i> Register */}
                <Link to="/Register" id="Register"> <i className="fa fa-user-plus me-1"></i> Register </Link>


              </a>
              <a href="" className="btn btn-outline-dark ms-2">
                {" "}
                {/* <i className="fa fa-shopping-cart me-1"></i> cart (0) */}
                <Link to="/cart" id="cart"> <i className="fa fa-shopping-cart me-1"></i>     cart   </Link>
              </a>


            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
