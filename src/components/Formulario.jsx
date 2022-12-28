import { useEffect, useState } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const generarId = () => {
    const date = Date.now().toString(18);
    const math = Math.random().toString(18).substring(2);

    return date + math;
  };

  const [mascota, setMascota] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setMascota(paciente.mascota);
      setName(paciente.name);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const Paciente = {
      mascota,
      name,
      email,
      alta,
      sintomas,
    };

    if (paciente.id) {
      // Valida el formulario
      if ([mascota, name, email, alta, sintomas].includes("")) {
        console.log("Hay al menos un campo vacío");
        setError("Todos los campos son requeridos");
      } else {
        // Edita
        Paciente.id = paciente.id;

        const pacientesActualizados = pacientes.map((pacienteState) =>
          pacienteState.id === paciente.id ? Paciente : pacienteState
        );
        setPacientes(pacientesActualizados);
        setPaciente({});
        setError("");
        setMascota("");
        setName("");
        setEmail("");
        setAlta("");
        setSintomas("");
      }
    } else {
      // Valida el formulario
      if ([mascota, name, email, alta, sintomas].includes("")) {
        console.log("Hay al menos un campo vacío");
        setError("Todos los campos son requeridos");
      } else {
        // Registra
        Paciente.id = generarId();
        setPacientes([...pacientes, Paciente]);
        setError("");
        setMascota("");
        setName("");
        setEmail("");
        setAlta("");
        setSintomas("");
      }
    }
  };

  return (
    <div className="md:w-1/2 lg:w-1/2 mx-5 scrollbar-hide">
      <h2 className="font-bold text-3xl text-center">Formulario</h2>
      <p className="text-lg mt-3 mb-3 text-center">
        Añade Pacientes y
        <span className="text-blue-600 font-bold"> Administralos</span>
      </p>
      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-5"
        onSubmit={(e) => handleSubmit(e)}
      >
        <Error message={error} className="mt-2" />
        <div className="mb-2">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota:
          </label>
          <input
            value={mascota}
            onChange={(e) => setMascota(e.target.value)}
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="mascota"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="name"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Acompañante:
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Nombre del acompañante"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="name"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email Acompañante:
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email del acompañante"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="email"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha Alta:
          </label>
          <input
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="alta"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas:
          </label>
          <textarea
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los síntomas del paciente"
          />
        </div>

        <input
          type="submit"
          className="bg-blue-600 font-bold hover:bg-blue-800 cursor-pointer transition-colors w-full p-3 text-white rounded-md "
          value={paciente.id ? "Editar historia" : "Agregar historia"}
        />
      </form>
    </div>
  );
};

export default Formulario;
