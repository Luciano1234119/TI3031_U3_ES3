import fondoNormal from './assets/orange.avif';
import fondoImportante from './assets/red.avif';


export default function Ficha({ nombre, apellido, importante, onEliminar }) {
    return (
        <div
            className="card position-relative p-3 text-white"
            style={{
                backgroundImage: `url(${importante ? fondoImportante : fondoNormal})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                minHeight: "200px",
                border: "3px solid #ddd",
                borderRadius: "5px",
                boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)"
            }}
        >
            <button
                onClick={onEliminar}
                className="btn-close position-absolute top-0 end-0 m-2"
                aria-label="Cerrar"
                style={{ scale: "1.2" }}
            ></button>

            <div className="card-body p-0">
                <div style={{ whiteSpace: "pre-wrap" }}>
                    <div style={{ fontFamily: "Comic Sans MS, cursive", fontWeight: "bold", fontSize: "1.4rem", marginBottom: "10px" }}>
                        {nombre}
                    </div>
                    <div style={{ fontFamily: "Verdana, sans-serif", fontSize: "1rem", color: "" }}>
                        {apellido}
                    </div>
                </div>
            </div>

        </div>
    );
}