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
      {filtro ? (
        <>
          <h2>
            {gastosFiltrados.length
              ? "gastos"
              : "No hay gastos en esta categoria"}
          </h2>
          {gastosFiltrados.map((value) => (
            <Gasto
              key={value.id}
              value={value}
              setGastoEditar={setGastoEditar}
              onDeleteGasto={onDeleteGasto}
            />
          ))}
        </>
      ) : (
        <>
          {valueGastos.length ? "gastos" : "No hay gastos"}
          {valueGastos.map((value) => (
            <Gasto
              key={value.id}
              value={value}
              setGastoEditar={setGastoEditar}
              onDeleteGasto={onDeleteGasto}
            />
          ))}
        </>
      )}
    </div>
  );
};
