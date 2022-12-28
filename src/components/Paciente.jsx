import React from "react";

const Paciente = ({ paciente, setPaciente, eliminaHistoria }) => {
  const { id, mascota, name, email, alta, sintomas } = paciente;
  const handleEliminar = () => {
    const result = confirm("¿Desea eliminar la historia?")
    if (result) {
      eliminaHistoria(id)
      setPaciente({})
    }
  }
  return (
    <div className="mx-5 bg-white shadow-md rounded-lg py-10 px-5 mb-5">
      <p className="font-bold uppercase p-2">
        Mascota:{" "}
        <span className="font-normal normal-case">{mascota}</span>
      </p>

      <p className="font-bold uppercase p-2">
        Acompañante:{" "}
        <span className="font-normal normal-case">{name}</span>
      </p>

      <p className="font-bold uppercase p-2">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold uppercase p-2">
        Fecha: <span className="font-normal normal-case">{alta}</span>
      </p>

      <p className="font-bold uppercase p-2">
        Síntomas:{" "}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-blue-600 rounded-md text-white hover:bg-blue-800 transition-colors"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 rounded-md text-white hover:bg-red-800 transition-colors"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
