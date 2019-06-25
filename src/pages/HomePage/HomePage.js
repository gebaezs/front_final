import React from 'react';
import './HomePage.css';
import ImagenGaleria from '../../images/camara.png';
import ImagenRuta from '../../images/rutas.png';
import ImagenActividad from '../../images/actividad.png';

function HomePage() {
    return (
        <div className="HomePage">

            <div className="BotonesLoginRegistro">
                <a className="IniciarSesionMainPage" href="/login">Iniciar sesion</a>
                <a className="CrearCuentaMainPage" href="/register">Crear cuenta</a>
            </div>

            <div>
                <h1 className="TituloMainPage">SENDEROS  UN</h1>
            </div>

            <div className="BodyMainPage">
                <div className="ContenedorVistas">
                    <h2>Galeria</h2>
                    <a className="VerGaleria" href="/galeria">
                        <img src={ImagenGaleria} width="250" height="250" alt="imagen_galeria" />
                    </a>
                </div>

                <div className="ContenedorVistas">
                    <h2>Rutas</h2>
                    <a className="VerRutas" href="/rutas">
                        <img src={ImagenRuta} width="250" height="250" alt="imagen_rutas" />
                    </a>
                </div>

                <div className="ContenedorVistas">
                    <h2>Actividades</h2>
                    <a className="VerActividades" href="/actividades">
                        <img src={ImagenActividad} width="250" height="250" alt="imagen_actividades" />
                    </a>
                </div>
            </div>

            <div className="FooterMainPage">
                <h4 className="FooterH4">UNIVERSIDAD NACIONAL DE COLOMBIA</h4>
                <h6 className="FooterH6">Arquitectura De Software</h6>
            </div>
        </div>
    );
}

export default HomePage;