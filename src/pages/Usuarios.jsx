import { Link } from "react-router-dom";

export default function Usuarios(){
    return(
        <div>
            <h1></h1>
            <ul>
                <li><Link to= "/usuarios/101">Ver perfil de Juan Perez</Link></li>
                <li><Link to= "/usuarios/101">Ver perfil de Ana Gomez</Link></li>
            </ul>
        </div>
    );
};