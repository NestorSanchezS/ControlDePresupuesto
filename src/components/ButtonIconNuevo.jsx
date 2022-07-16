import React, { useState } from "react";
import IconoNuevoGasto from "../img/nuevo-gasto.svg";

export const ButtonIconNuevo = ({
  setModal,
  setAnimarModal,
  setGastoEditar,
}) => {
  const handleNuevoGasto = () => {
    setModal(true);
    setGastoEditar({});
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
