import React, { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import cerrarmodal from "../img/cerrar.svg";
import { Mensaje } from "./Mensaje";
import { generarId } from "../helpers";

const initialForm = {
  nombre: "",
  cantidad: "",
  categoria: "",
};

const validateForm = (valueFormModal) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

  if (!valueFormModal.nombre.trim()) {
    errors.nombre = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(valueFormModal.nombre.trim())) {
    errors.nombre = "El campo 'Nombre' solo acepta letras y espacios en blanco";
  }

  if (!valueFormModal.cantidad.trim()) {
    errors.cantidad = "El campo 'Cantidad' es requerido";
  } else if (!Number(valueFormModal.cantidad)) {
    errors.cantidad = "El campo 'Cantidad' tiene que ser un numero";
  }

  if (!valueFormModal.categoria.trim()) {
    errors.categoria = "El campo 'Categoria' es requerido";
  }

  return errors;
};

export const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  valueGastos,
  setValueGastos,
  gastoEditar,
}) => {
  const {
    valueFormModal,
    error,
    handleInputChange,
    handleSubmitFormModal,
    handleInputBlur,
    setValueFormModal,
  } = useForm(initialForm, validateForm);

  //Para que aparezca la info a gastar en el formulario
  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setValueFormModal(gastoEditar);
    }
  }, []);

  const ocultarModal = () => {
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const guardarGastos = (gasto) => {
    gasto.id = generarId();
    gasto.fecha = Date.now();
    setValueGastos([...valueGastos, gasto]);
  };

  const hanldeSubmitFormModalAndCloseModal = (e) => {
    handleSubmitFormModal(e);
    guardarGastos(valueFormModal);
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
        onSubmit={hanldeSubmitFormModalAndCloseModal}
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
      >
        <legend>{gastoEditar.id ? "Actulizar Gasto" : "Nuevo Gasto"}</legend>

        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            name="nombre"
            value={valueFormModal.nombre}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            id="nombre"
            type="text"
            placeholder="Añade el nombre del Gasto"
          />
          {error.nombre && <Mensaje tipo="error">{error.nombre}</Mensaje>}
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            name="cantidad"
            value={valueFormModal.cantidad}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            id="cantidad"
            type="text"
            placeholder="Añade la cantidad del gasto: ej. 300"
          />
          {error.cantidad && <Mensaje tipo="error">{error.cantidad}</Mensaje>}
        </div>
        <div className="campo">
          <label htmlFor="categoria">Cantidad</label>
          <select
            id="categoria"
            name="categoria"
            onChange={handleInputChange}
            value={valueFormModal.categoria}
            onBlur={handleInputBlur}
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
          {error.categoria && <Mensaje tipo="error">{error.categoria}</Mensaje>}
        </div>
        <input
          type="submit"
          value={gastoEditar.id ? "Editar Gasto" : "Añadir Gasto"}
        />
      </form>
    </div>
  );
};
