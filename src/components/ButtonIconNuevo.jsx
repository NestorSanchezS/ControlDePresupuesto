import React, { useState } from "react";
import IconoNuevoGasto from "../img/nuevo-gasto.svg";

export const ButtonIconNuevo = ({ setModal, setAnimarModal }) => {
  const handleNuevoGasto = () => {
    setModal(true);
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };
  return (
    <div className="nuevo-gasto">
      <img
        src={IconoNuevoGasto}
        alt="Icono nuevo gasto"
        onClick={handleNuevoGasto}
      />
    </div>
  );
};
