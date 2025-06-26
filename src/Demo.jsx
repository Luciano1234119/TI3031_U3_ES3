import { useState, useEffect } from "react";
import Ficha from "./Ficha";
import Formulario from "./Formulario";

export default function Demo()
{
    const usuariosIniciales = [
    { nombre: "Armando", apellido: "Pleito", importante: false },
    { nombre: "Juan", apellido: "Perez", importante: false },
    { nombre: "Ana", apellido: "Rojas", importante: false }
    ];


    const [arrUsuarios, setArrUsuarios] = useState(() => {
        const guardados = localStorage.getItem("usuarios");
        return guardados ? JSON.parse(guardados) : usuariosIniciales;
    });

    useEffect(() => {
        localStorage.setItem("usuarios", JSON.stringify(arrUsuarios));
    }, [arrUsuarios]);

    const eliminarUsuario = (index) => {
        const nuevosUsuarios = arrUsuarios.filter((_, i) => i !== index);
        setArrUsuarios(nuevosUsuarios);
    };


    const agregarUsuario = (nuevo) => {
        setArrUsuarios([...arrUsuarios, nuevo]);
    };

    return (
        <div className="container my-5">
            <h2>Post It Simulator!</h2>
            <Formulario agregar={agregarUsuario} />
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    arrUsuarios.map((usuario, index) => (
                        <div className="col" key={index}>
                            <Ficha
                                nombre={usuario.nombre}
                                apellido={usuario.apellido}
                                importante={usuario.importante}
                                onEliminar={() => eliminarUsuario(index)}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}