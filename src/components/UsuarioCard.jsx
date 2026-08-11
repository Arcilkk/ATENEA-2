import './UsuarioCard.css';
import { useState } from 'react';

function UsuarioCard({ nombre, imagen, rol, estado }){
    
    const [siguiendo, setSiguiendo] = useState(false);
    
    const claseEstado = estado === "Activo" ? "badge-activo" : "badge-inactivo";
    
    const alternaSeguimiento = () => {
        setSiguiendo(!siguiendo);
    }
    
    return(
        <div>
            <img src={imagen} alt={`Foto de ${nombre}`} className='usuario-img' />

            <div className='usuario-info'>
                <h3>{nombre}</h3>
                <p className='usuario-rol'>{rol}</p>
                <span className={`usuario-badge ${claseEstado}`}></span>
            </div>

            <div className='usuario-acciones'>
                <button onClick={alternaSeguimiento}
                    style={{ background: siguiendo ? "#e1e8f0" : "#028dffee", color: siguiendo ? "#030303" : "white" }}
                >
                    {siguiendo ? "Siguiendo" : "Seguir"}
                </button>
            </div>
        </div>
    );
};

export default UsuarioCard;