import React, { useEffect, useState } from "react";

export const ControlPresupuesto = ({ presupuesto, valueGastos }) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  useEffect(() => {
    const totalGastado = valueGastos.reduce(
      (totalAcomulado, valueGasto) =>
        Number(valueGasto.cantidad) + Number(totalAcomulado),
      0
    );
    setGastado(totalGastado);

    const totalRestante = presupuesto - totalGastado;
    setDisponible(totalRestante);

    if (totalGastado > totalRestante) {
      console.log("Te gastaste todo el presupuesto");
    }
  }, [valueGastos]);

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica aqui</p>
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto:</span>
          {formatearCantidad(presupuesto)}
        </p>
        <p>
          <span>Disponible:</span>
          {formatearCantidad(disponible)}
        </p>
        <p>
          <span>Gastado:</span>
          {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  );
};
