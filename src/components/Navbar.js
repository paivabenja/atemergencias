import React from "react";
const icon = require("../img/a-tiempo-logo-chico.png");

export default () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active " href="/">
                Aportes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="icon">
        <img src={icon} height="40" className="icon" alt="" />
      </div>
    </nav>
  );
};
