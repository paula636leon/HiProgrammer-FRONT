import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";

const Formulario = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const [error, setError] = useState(null);

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          message: "",
        }}
        validate={(valores) => {
          let errores = {};
          if (!valores.name) {
            errores.name = "Ingresa tu nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
            errores.name = "Sólo puede contener letras y espacios";
          }
          if (!valores.email) {
            errores.email = "Ingresa tu correo";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email =
              "Sólo puede contener letras, números, guiones, puntos y espacios";
          }
          if (!valores.phone) {
            errores.phone = "Ingresa tu # de teléfono";
          }
          if (!valores.message) {
            errores.message = "Ingresa tu mensaje";
          }
          return errores;
        }}
        onSubmit={async (valores, { resetForm }) => {
          resetForm();
          cambiarFormularioEnviado(false);
          setError(null);

          try {
            await axios.post(
              "https://hiprogrammer-api.up.railway.app/api/addCustomer",
              valores
            );
            cambiarFormularioEnviado(true);
          } catch (error) {
            console.log(error.message);
            setError("Problemas con la información enviada, contáctese con soporte técnico");
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <form
            onSubmit={handleSubmit}
            id="formulario"
            className="formulario_globo__content__form"
          >
            <div className="formulario_globo__content__form__name">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                name="name"
                id="name"
                className="formulario_globo__content__input"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.name && errors.name && (
                <div className="error">{errors.name}</div>
              )}
            </div>
            <div className="formulario_globo__content__form__email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="formulario_globo__content__input"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.email && errors.email && (
                <div className="error">{errors.email}</div>
              )}
            </div>
            <div className="formulario_globo__content__form__phone">
              <label htmlFor="phone">Teléfono</label>
              <input
                type="number"
                name="phone"
                id="phone"
                className="formulario_globo__content__input"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.phone && errors.phone && (
                <div className="error">{errors.phone}</div>
              )}
            </div>
            <div className="formulario_globo__content__form__message">
              <label htmlFor="message">Mensaje</label>
              <textarea
                className="formulario_globo__content__textarea"
                name="message"
                id="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              ></textarea>
              {touched.message && errors.message && (
                <div className="error">{errors.message}</div>
              )}
            </div>
            <div className="formulario_globo__content__boton">
              <button type="submit" className="button_send">
                {" "}
                Enviar{" "}
              </button>

              {formularioEnviado && !error && (
                <div className="exito_div">
                  <p className="exito">Información enviada exitosamente</p>
                </div>
              )}

              {error && (
                <div className="error_div">
                  <p className="exito">{error}</p>
                </div>
              )}
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
