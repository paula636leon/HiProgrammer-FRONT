import React from 'react'

const Section3 = () => {
    return (
      <article className="section3 container-fluid" id="products">
        <div className="section3__casa">
          <div className="section3__recuardoNaranja">
            <div
              id="segundo_carousel"
              className="carousel slide section3_carousel"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner section3_carousel_texto">
                <div className="carousel-item active">
                  <p className="segundo_carousel_texto1">Team</p>
                  <h3 className="segundo_carousel_titulo">Front End</h3>
                  <p className="segundo_carousel_texto2">
                    Remeras personalizadas con frameworks de programación
                    front-end.
                  </p>
                </div>
                <div className="carousel-item">
                  <p className="segundo_carousel_texto1">Team</p>
                  <h3 className="segundo_carousel_titulo">Back End</h3>
                  <p className="segundo_carousel_texto2">
                    Remeras personalizadas con frameworks de programación
                    back-end.
                  </p>
                </div>
                <div className="carousel-item">
                  <p className="segundo_carousel_texto1">Team</p>
                  <h3 className="segundo_carousel_titulo">Designer</h3>
                  <p className="segundo_carousel_texto2">
                    Remeras personalizadas únicas que combinan tu personalidad
                    con los frameworks más utilizados en la programación.
                  </p>
                </div>
              </div>
              <div className="section3_botones">
                <button
                  className="carousel-control-prev section3_botones1"
                  type="button"
                  data-bs-target="#segundo_carousel"
                  data-bs-slide="prev"
                >
                  <img src="../images/button/left.svg" alt="left.svg"></img>
                </button>
                <button
                  className="carousel-control-next section3_botones2"
                  type="button"
                  data-bs-target="#segundo_carousel"
                  data-bs-slide="next"
                >
                  <img src="../images/button/right.svg" alt="right.svg"></img>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
}

export default Section3
