import { useState } from "react";

export default function Formulario ({agregar}) {
    // Hocks funciones de react
    // useState: hock que permite manejar el estado de un componente
    // devuleve array [0]: objeto, [1]: metodo para modificar
    // recibe como argumento el valor incial del objeto
    //const usuarios = useState()[0];
    //const setUsuarios = useState()[1];
    // ES6: destructuring
    const [usuarios, setUsuarios] = useState([]); // usuarios es un array
    const [importante, setImportante] = useState(false);

    const enviar = (event) => {
        event.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const nuevo = {
            nombre:nombre,
            apellido:apellido,
            importante,
        };
        agregar(nuevo);
        // ES6: operador ... spread
        setUsuarios([...usuarios, nuevo]);
        console.log(usuarios);
    };

    return (
        <form onSubmit={enviar}>
            <div className="row g-4 my-3">
                <div className="col-md-3">
                    <label className="form-label" htmlFor="nombre"></label>
                    <input className="form-control" id="nombre" type="text" placeholder="Titulo" required />
                </div>

                <div className="col-md-3">
                    <label className="form-label" htmlFor="apellido"></label>
                    <input className="form-control" id="apellido" type="text" placeholder="Descripcion" required />
                </div>

                <div className="col-md-6">
                    <div className="form-check mt-4">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="importante"
                            checked={importante}
                            onChange={(e) => setImportante(e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="importante">
                            ¡Importante!
                        </label>
                    </div>
                </div>


                
                <div className="col-md-4">
                    <button type="submit" className="btn btn-primary">Agregar</button>
                </div>
            </div>
        </form>
    );
}