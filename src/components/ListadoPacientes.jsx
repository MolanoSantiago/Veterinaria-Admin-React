import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminaHistoria}) => {

  return (
    <div className="md:w-1/2 lg:w-1/2 md:h-screen overflow-y-scroll scrollbar-hide">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-bold text-3xl text-center">
            Historico Pacientes
          </h2>
          <p className="text-lg mt-3 mb-3 text-center">
            Lista Historico de
            <span className="text-blue-600 font-bold"> Pacientes</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminaHistoria={eliminaHistoria}/>
          ))}
        </>
      ) : (
        <>
          <h2 className="font-bold text-3xl text-center">
            Historico Pacientes
          </h2>
          <p className="text-lg mt-3 mb-3 text-center">
            No hay registros de
            <span className="text-blue-600 font-bold"> Pacientes</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
