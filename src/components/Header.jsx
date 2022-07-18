import React from "react";
import { ControlPresupuesto } from "./ControlPresupuesto";
import { NuevoPresupuesto } from "./NuevoPresupuesto";

export const Header = ({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
  valueGastos,
  setValueGastos,
}) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>
      {isValidPresupuesto ? (
        <ControlPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          valueGastos={valueGastos}
          setValueGastos={setValueGastos}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}
    </header>
  );
};
