import { useEffect, useState } from "react";
import React from "react";
import { Header } from "./components/Header";
import { ButtonIconNuevo } from "./components/ButtonIconNuevo";
import { Modal } from "./components/Modal";
import { ListadoGastos } from "./components/ListadoGastos";
import { Filtros } from "./components/Filtros";

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
  const [filtro, setFiltro] = useState("");
  const [gastosFiltrados, setGastosFiltrados] = useState([]);

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
  //Para filtar
  useEffect(() => {
    if (filtro) {
      const gastosFiltradosList = valueGastos.filter(
        (gasto) => gasto.categoria === filtro
      );
      setGastosFiltrados(gastosFiltradosList);
    }
  }, [filtro]);

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
        setValueGastos={setValueGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto && (
        <>
          <main>
            <Filtros filtro={filtro} setFiltro={setFiltro} />

            <ListadoGastos
              valueGastos={valueGastos}
              setGastoEditar={setGastoEditar}
              onDeleteGasto={onDeleteGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
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
