import { useState } from "react";
import React from "react";
import { Header } from "./components/Header";
import { ButtonIconNuevo } from "./components/ButtonIconNuevo";
import { Modal } from "./components/Modal";

export const App = () => {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  return (
    <>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto && (
        <ButtonIconNuevo
          modal={modal}
          setModal={setModal}
          setAnimarModal={setAnimarModal}
        />
      )}
      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
        />
      )}
    </>
  );
};
