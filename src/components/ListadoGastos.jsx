import React from "react";
import { Gasto } from "./Gasto";

export const ListadoGastos = ({
  valueGastos,
  setGastoEditar,
  onDeleteGasto,
  filtro,
  gastosFiltrados,
}) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{valueGastos.length ? "gastos" : "No hay gastos"}</h2>
      {filtro
        ? gastosFiltrados.map((value) => (
            <Gasto
              key={value.id}
              value={value}
              setGastoEditar={setGastoEditar}
              onDeleteGasto={onDeleteGasto}
            />
          ))
        : valueGastos.map((value) => (
            <Gasto
              key={value.id}
              value={value}
              setGastoEditar={setGastoEditar}
              onDeleteGasto={onDeleteGasto}
            />
          ))}
    </div>
  );
};
