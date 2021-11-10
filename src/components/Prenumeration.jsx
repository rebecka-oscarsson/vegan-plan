import React from "react";

const Prenumeration = () => {
  return (
    <>
      <div className="prenumeration">
        <img
          className="icon-prenumeration"
          src={"./icon-fork.png"}
          width={140}
          alt="icon fork and knife"
        />
        <h2>
          Ett nytt recept om dagen
          <br /> – enklare än så här blir det inte
        </h2>
        <p className="text-fat">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h3>Kostnad</h3>
        <h4>Färdig veckomeny + inköpslista</h4>
        <h3>99 kr/mån</h3>
        <button className="btn-primary">
          {" "}
          <a href="/registrate"> Skapa konto</a>
        </button>
        <p className="text-small">
          Redan registrerad? <a href="/login"> Logga in </a>
        </p>
      </div>
    </>
  );
};

export default Prenumeration;
