import React from "react";
import { Gasto } from "./Gasto";

export const ListadoGastos = ({ valueGastos, setGastoEditar }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{valueGastos.length ? "gastos" : "No hay gastos"}</h2>
      {valueGastos.map((value) => (
        <Gasto value={value} key={value.id} setGastoEditar={setGastoEditar} />
      ))}
    </div>
  );
};
