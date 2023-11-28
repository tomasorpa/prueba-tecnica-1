import React from "react";
import "./inicio.css";
export const Inicio = () => {
  return (
    <section className="main__container">
      <form className="container__form">
        <h2>Entra a Banqui</h2>
        <div className="info">
          <label>
            <input
              className="info__require"
              type="text"
              name="name"
              placeholder="Account"
              required
            />
          </label>
          <label>
            <input
              className="info__require"
              type="text"
              name="name"
              placeholder="Password"
              required
            />

            <a href="">
              <h6>Forgot Your password?</h6>
            </a>
          </label>
        </div>
        <input type="submit" value="Log in" />
        <h6>
          Don`t you have an account?<a href=""> Sign up</a>
        </h6>
      </form>
    </section>
  );
};

export default Inicio;
