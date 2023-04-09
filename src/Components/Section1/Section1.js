import React from "react";
import NavBar from "../NavBar/NavBar";
import Button from "../Elements/Button";

function Section1(props) {
  return (
    <div className="principal container-fluid">
      <NavBar />
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active texto1">
            <img
              src="./images/bicicleta.png"
              className="d-none d-md-block w-100"
              alt="Casilla rodante con Bicicleta y montañas"
            />
            <img
              src="./images/bicicleta-mobile.png"
              className="d-block w-100 d-md-none"
              alt="Casilla rodante con Bicicleta y montañas"
            />

            <div className="carousel-caption">
              <h5 className="titulo_carousel">
                Remeras personalizadas para developers
              </h5>
              <p className="texto_carousel d-none d-md-block">
                Crea un estilo único con nuestras remeras personalizadas para
                developers. Elige tu diseño favorito.
              </p>
              <div className="carousel__button">
                <Button symbol={"Leer Mas"} />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./images/bicicleta.png"
              className="d-none d-md-block w-100"
              alt="Casilla rodante con Bicicleta y montañas"
            />
            <img
              src="./images/bicicleta-mobile.png"
              className="d-block w-100 d-md-none"
              alt="Casilla rodante con Bicicleta y montañas"
            />

            <div className="carousel-caption">
              <h5 className="titulo_carousel">Cotiza tu diseño</h5>
              <p className="texto_carousel d-none d-md-block">
                Obtén una cotización para tu diseño personalizado. Envíanos tu
                idea y te ayudaremos a hacerla realidad.
              </p>
              <div className="carousel__button">
                <Button symbol={"Leer Mas"} />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./images/bicicleta.png"
              className="d-none d-md-block w-100"
              alt="Casilla rodante con Bicicleta y montañas"
            />
            <img
              src="./images/bicicleta-mobile.png"
              className="d-block w-100 d-md-none"
              alt="Casilla rodante con Bicicleta y montañas"
            />

            <div className="carousel-caption">
              <h5 className="titulo_carousel">Obtén tu remera personalizada</h5>
              <p className="texto_carousel d-none d-md-block">
                Después de aprobar tu diseño, nuestro equipo creará tu remera
                personalizada. ¡Muestra tu estilo con nuestras remeras para
                developers!
              </p>
              <div className="carousel__button">
                <Button symbol={"Leer Mas"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
