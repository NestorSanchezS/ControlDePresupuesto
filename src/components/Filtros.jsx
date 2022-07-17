import React from "react";

export const Filtros = ({ filtro, setFiltro }) => {
  return (
    <div className="filtros sombras contenedor">
      <div className="campo">
        <label>FIltrar Gastos</label>
        <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
          <option value="">-- Selecciones --</option>
          <option value="ahorro">Ahorro</option>
          <option value="comida">Comida</option>
          <option value="casa">Casa</option>
          <option value="gastos">Gastos Varios</option>
          <option value="ocio">Ocio</option>
          <option value="salud">Salud</option>
          <option value="suscripciones">Suscripciones</option>
        </select>
      </div>
    </div>
  );
};
