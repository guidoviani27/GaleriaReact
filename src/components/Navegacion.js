import React from 'react'
import {Link} from "react-router-dom";
import Paraiso3 from '../images/Paraiso.jpg'
import Isla3 from '../images/Isla.jpg'
import Cielo3 from '../images/Cielo.jpg'
import Selva3 from '../images/Selva.jpg'
import Rocas3 from '../images/Rocas.jpg'




const Navegacion = () => {
    return (
        <div className="container mt-3 padre">
            <Link to="/Paraiso"  className="links">
                <figure>
                    <img src={Paraiso3} alt="" className="tamaño-immg"/>
                    <figcaption>Paraiso</figcaption>
                </figure>
            </Link>
            <Link to="/Isla" className="links">
                <figure>
                    <img src={Isla3} alt="" className="tamaño-immg"/>
                    <figcaption>Isla</figcaption>
                </figure>
            </Link>
            <Link to="/Cielo"  className="links">
                <figure>
                    <img src={Cielo3} alt="" className="tamaño-immg" />
                    <figcaption>Cielo</figcaption>
                </figure>
            </Link>

            <Link to="/Selva"  className="links">
                <figure>
                    <img src={Selva3} alt="" className="tamaño-immg" />
                    <figcaption>Selva</figcaption>
                </figure>
            </Link>
            <Link to="/Rocas" className="links">
                <figure>
                    <img src={Rocas3} alt=""  className="tamaño-immg"/>
                    <figcaption>Rocas</figcaption>
                </figure>
            </Link>
          

        </div>
    )
}

export default Navegacion
