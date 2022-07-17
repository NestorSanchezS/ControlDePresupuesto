import { useEffect, useState } from "react";
import React from "react";
import { Header } from "./components/Header";
import { ButtonIconNuevo } from "./components/ButtonIconNuevo";
import { Modal } from "./components/Modal";
import { ListadoGastos } from "./components/ListadoGastos";

export const App = () => {
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem("presupuesto")) ?? 0
  );
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [valueGastos, setValueGastos] = useState(
    localStorage.getItem("valueGastos")
      ? JSON.parse(localStorage.getItem("valueGastos"))
      : []
  );
  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);
      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
  }, [gastoEditar]);

  const onDeleteGasto = (id) => {
    console.log("eliminando", id);
    const valueGastosActulizados = valueGastos.filter(
      (valueGasto) => valueGasto.id !== id
    );
    setValueGastos(valueGastosActulizados);
  };

  useEffect(() => {
    localStorage.setItem("presupuesto", presupuesto ?? 0);
  }, [presupuesto]);

  useEffect(() => {
    localStorage.setItem("valueGastos", JSON.stringify(valueGastos) ?? []);
  }, [valueGastos]);

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem("presupuesto")) ?? 0;
    if (presupuestoLS > 0) {
      setIsValidPresupuesto(true);
    }
  }, []);

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        valueGastos={valueGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos
              valueGastos={valueGastos}
              setGastoEditar={setGastoEditar}
              onDeleteGasto={onDeleteGasto}
            />
          </main>
          <ButtonIconNuevo
            modal={modal}
            setModal={setModal}
            setAnimarModal={setAnimarModal}
            setGastoEditar={setGastoEditar}
          />
        </>
      )}
      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          valueGastos={valueGastos}
          setValueGastos={setValueGastos}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      )}
    </div>
  );
};
