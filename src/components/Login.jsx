import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import React, { useState } from "react";
import loginIng from "../assets/LOG.jpg";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // Nuevo estado para manejar el mensaje de respuesta

  const Enviar = async (e) => {
    e.preventDefault();

    try {
      // Realizamos la petición POST para validar el login
      const response = await axios.post(
        "https://api.sheetbest.com/sheets/d304a662-9b32-4197-85b4-ebaaab89ecd3",
        {
          Email: email,
          Password: password,
        }
      );

      // Comprobamos si la respuesta del servidor indica un login exitoso
      if (response.data.success) { // Asumimos que el API devuelve un campo 'success'
        setMessage("Bienvenido"); // Si el usuario es válido, mostramos el mensaje de bienvenida
      } else {
        setMessage("Usuario incorrecto"); // Si no es válido, mostramos un mensaje de error
      }

      // Limpiamos los campos
      setEmail("");
      setPassword("");
    } catch (error) {
      // Si hay un error en la petición o en la validación, mostramos un mensaje de error
      setMessage("Hubo un problema al validar el usuario");
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      {/* Contenedor de la imagen con gradiente azul */}
      <div className="relative hidden sm:block">
        {/* Imagen de fondo con brillo */}
        <img
          className="w-full h-full object-cover object-center filter brightness-500" // Aumenta el brillo
          src={loginIng}
          alt=" "
        />
        {/* Gradiente azul suave para la transición */}
        <div className="absolute inset-0 bg-gradient-to-r bg-[#9E07E6] via-transparent to-white-900"></div>
      </div>

      {/* Contenedor del formulario con un fondo más oscuro */}
      <div className="bg-gray-200 flex items-center justify-center sm:bg-blue-500">
        <form onSubmit={Enviar} className="max-w-[400px] w-full mx-auto bg-white p-4">
          <h2 className="text-4xl font-bold text-center py-6">Log in.</h2>
          <div className="flex flex-col py-2">
            <label>Email</label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2"
              type="text"
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2"
              type="password"
            />
          </div>
          <button
            type="submit"
            className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white"
          >
            Sign In
          </button>
          <div className="flex justify-between">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" /> Remember Me
            </p>
            <p>Create an Account</p>
          </div>
        </form>
      </div>

      {/* Mensaje de respuesta */}
      {message && (
        <div className="absolute bottom-10 left-0 right-0 text-center text-white font-bold">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}
