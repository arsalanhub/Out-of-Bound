import React from "react";

export default function Navbar() {
  return (
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div style={{margin: "0"}} className="container">
          <a className="navbar-brand" href="index.html">
            Out of <span>Bound</span>
          </a>
          <form action="#" className="searchform order-sm-start order-lg-last">
            <div className="form-group d-flex">
              <input
                type="text"
                className="form-control pl-3"
                placeholder="Search"
              />
              <button type="submit" placeholder="" className="form-control search">
                <span className="fa fa-search"></span>
              </button>
            </div>
          </form>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa fa-bars"></span> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item active">
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Catalog
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}
