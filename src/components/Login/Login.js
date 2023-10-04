import React from "react";

export const Login = () => {
  return (
    <section className="grid grid-cols-2 gap-4 h-screen border">
      <div className="flex items-center justify-center">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="w-full"
          alt="Sample image"
        />
      </div>
      <div className="flex items-center justify-center ">
        <div className="border-2 border-black rounded-md p-4 w-full mx-10">
          <h1 className="flex justify-center text-2xl font-bold mb-4 ">
            INICIAR SESIÓN
          </h1>
          <form>
            <div className="mb-4">
              <label
                for="username"
                className="block text-gray-700 font-semibold"
              >
                Nombre de usuario
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="border border-gray-400 p-2 rounded w-full"
                placeholder="Ingrese su nombre de usuario"
              />
            </div>
            <div className="mb-4">
              <label
                for="password"
                className="block text-gray-700 font-semibold"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border border-gray-400 p-2 rounded w-full"
                placeholder="Ingrese su contraseña"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
              >
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
