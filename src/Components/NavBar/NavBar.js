import React, { useState } from "react";

function NavBar(props) {
  const [click, setClick] = useState("");
  const showHamburger = () => {
    if (click === "") {
      setClick("is-active");
      console.log("click: ", click);
    } else {
      setClick("");
      console.log("click: ", click);
    }
  };

  return (
    <div className="container-fluid contenedor__menu">
      <header className="container-fluid header-container">
        <aside className={`nav__menuHamburger  ${click}`}>
          <button
            className="nav__menuHamburger--close"
            type="button"
            onClick={() => showHamburger()}
          >
            X
          </button>
          <ul className="nav__menuHamburgerNav">
            <li className="nav__menuHamburger--item">
              <a
                href="#home"
                className="nav-link"
                aria-current="page"
                onClick={() => showHamburger()}
              >
                Inicio
              </a>
            </li>
            <li className="nav__menuHamburger--item">
              <a
                href="#about"
                className="nav-link"
                onClick={() => showHamburger()}
              >
                Nosotros
              </a>
            </li>
            <li className="nav__menuHamburger--item">
              <a
                href="#products"
                className="nav-link"
                onClick={() => showHamburger()}
              >
                Productos
              </a>
            </li>
            <li className="nav__menuHamburger--item">
              <a
                href="#corredor"
                className="nav-link"
                onClick={() => showHamburger()}
              >
                Servicios
              </a>
            </li>
            <li className="nav__menuHamburger--item">
              <a
                href="#contact"
                className="nav-link"
                onClick={() => showHamburger()}
              >
                Contacto
              </a>
            </li>
          </ul>
        </aside>

        <nav className="navbar navbar-expand-lg navbar-light bg-transparent nav__menu">
          <div className="container top_logo">
            <img
              src="./images/top-logo.png"
              alt="Logo top Hello Programmer "
              className="d-inline-block align-text-top"
            ></img>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => showHamburger()}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse nav__menu--link"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item nav__menu--item">
                <a href="#home" className="nav-link" aria-current="page">
                  Inicio
                </a>
              </li>
              <li className="nav-item nav__menu--item">
                <a href="#about" className="nav-link">
                  Nosotros
                </a>
              </li>
              <li className="nav-item nav__menu--item">
                <a href="#products" className="nav-link">
                  Productos
                </a>
              </li>
              <li className="nav-item nav__menu--item">
                <a href="#corredor" className="nav-link">
                  Servicios
                </a>
              </li>
              <li className="nav-item nav__menu--item">
                <a href="#contact" className="nav-link">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default NavBar;
