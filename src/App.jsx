import { useEffect, useState } from "react";
import React from "react";
import { Header } from "./components/Header";
import { ButtonIconNuevo } from "./components/ButtonIconNuevo";
import { Modal } from "./components/Modal";
import { ListadoGastos } from "./components/ListadoGastos";
import { useForm } from "./hooks/useForm";

export const App = () => {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [valueGastos, setValueGastos] = useState([]);
  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      console.log("Si hay algo mi compa");
      setModal(true);
      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
  }, [gastoEditar]);

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
        />
      )}
    </div>
  );
};
