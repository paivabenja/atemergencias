import React from "react";

export default () => {
  return (
    <div className="App">
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
            <a className="navbar-brand" href="#">
              (logo a tiempo) AT emergencias
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Aportes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
