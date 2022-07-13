import React, { useState } from "react";
import cerrarmodal from "../img/cerrar.svg";
import { Mensaje } from "./Mensaje";

export const Modal = ({ setModal, animarModal, setAnimarModal }) => {
  const [mensajeErrorForm, setMensajeErrorForm] = useState("");
  const [ValueFormModal, setValueFormModal] = useState({
    nombre: "",
    cantidad: "",
    categoria: "",
  });

  const handleInputChange = ({ target }) => {
    const { value, name } = target;
    setValueFormModal({
      ...ValueFormModal,
      [name]: value,
    });
  };

  const handleSubmitFormModal = (e) => {
    e.preventDefault();
    console.log("Enviando informacion...", ValueFormModal);
    if (
      [
        ValueFormModal.nombre,
        ValueFormModal.cantidad,
        ValueFormModal.categoria,
      ].includes("")
    ) {
      setMensajeErrorForm("Todos los campos son requeridos");
      return;
    }
    setValueFormModal({
      nombre: "",
      cantidad: "",
      categoria: "",
    });
  };

  const ocultarModal = () => {
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={cerrarmodal} alt="Cerra modal" onClick={ocultarModal} />
      </div>
      <form
        onSubmit={handleSubmitFormModal}
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
      >
        <legend>Nuevo Gasto</legend>
        {mensajeErrorForm && <Mensaje tipo="error">{mensajeErrorForm}</Mensaje>}
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            name="nombre"
            value={ValueFormModal.nombre}
            onChange={handleInputChange}
            id="nombre"
            type="text"
            placeholder="Añade el nombre del Gasto"
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            name="cantidad"
            value={ValueFormModal.cantidad}
            onChange={handleInputChange}
            id="cantidad"
            type="text"
            placeholder="Añade la cantidad del gasto: ej. 300"
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Cantidad</label>
          <select
            id="categoria"
            name="categoria"
            onChange={handleInputChange}
            value={ValueFormModal.categoria}
          >
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
        <input type="submit" value="Añadir Gastos" />
      </form>
    </div>
  );
};
