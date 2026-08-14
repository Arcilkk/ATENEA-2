import BuscadorEnVivo from './BuscadorEnVivo';
import'./TopNav.css';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function TopNav(){
    const { usuario } = useContext(AuthContext);
    
    return(
        <header className='topnav'>
            <div className='buscador'>
                <BuscadorEnVivo/>
            </div>
            <div className='perfil-usuario'>
                <span className='notificaciones'>🔔</span>
            {usuario.conectado ? (
                <>
                    <div className='avatar'>JP</div>
                    <span className='nombre-usuario'>Hola, {usuario.nombre  }</span>
                    <span className='rol-badge' style={{fontSize: '10px', background: '#e2e8f0', padding: '2px 6px', borderRadius: '4px', marginLeft: '5px'}}>{usuario.rol}
                        {usuario.rol}
                    </span>
                </>
                ) : (
                    <span className='nombre-usuario' style={{color: 'red'}}>Desconectado</span>
                )
                
            }             
            </div>
        </header>
    )
}

export default TopNav;