import './ServicioCard.css';
import imagenServicio from '../assets/hero.png';

function ServicioCard(){
    const nombreServicio = "Desarrollo Web";
    const descripcion = "Creamos Single Page Application";
    const precio = "$ 500 USD";
    const enOferta = true;
    
    return(
        <article className='servicio-card'>
            <div className='card-imagen-contenedor'>
                <img src={imagenServicio} alt="Servicio WEB" className='card-imagen'/>
                {enOferta && <span className='card-etiqueta'>¡Oferta Especial!</span>}
            </div>
            <div>
                <h3 className='card-titulo'>{nombreServicio}</h3>
                <p className='card-descripcion'>{descripcion}</p>
                <div className='card-footer'>
                    <span className='card-precio'>{precio}</span>
                    <button className='card-boton'>Contratar</button>
                </div>
            </div>
        </article>

    );
}

export default ServicioCard;