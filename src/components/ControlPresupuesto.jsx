import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const ControlPresupuesto = ({
  presupuesto,
  setPresupuesto,
  valueGastos,
  setValueGastos,
  setIsValidPresupuesto,
}) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);
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

    const porcentajeGrafica = (
      ((presupuesto - totalRestante) / presupuesto) *
      100
    ).toFixed(2);

    setTimeout(() => {
      setPorcentaje(porcentajeGrafica);
    }, 1500);
  }, [valueGastos]);

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const handleResetApp = () => {
    const resultado = confirm("¿Desear reiniciar presupuesto y gastos?");
    if (resultado) {
      setValueGastos([]);
      setPresupuesto(0);
      setIsValidPresupuesto(false);
    }
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            patchColor: porcentaje > 100 ? "#dc2626" : "#3B82F6",
            trailColor: "#F5F5F5",
            textColor: porcentaje > 100 ? "#dc2626" : "#3B82F6",
          })}
          value={porcentaje}
          text={`${porcentaje}% Gastado`}
        />
      </div>

      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Resetar App
        </button>

        <p>
          <span>Presupuesto:</span>
          {formatearCantidad(presupuesto)}
        </p>
        <p className={`${disponible < 0 ? "negativo" : ""}`}>
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
