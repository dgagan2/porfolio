import reactIcon from "../../assets/icons/icono react.png"
import reduxIcon from "../../assets/icons/redux.svg"
import cssIcon from "../../assets/icons/css.png"
import expressIcon from "../../assets/icons/express.svg"
import jwtIcon from "../../assets/icons/jwt.svg"
import nodeIcon from "../../assets/icons/node.svg"
import ouraMovie from "../../assets/projects/oura_movie.png"
import electroDiesel from "../../assets/projects/Captura de pantalla 2025-03-15 180523.png"
import IconoFlecha from "../iconoFlecha/IconoFlecha"
import boostrapIcon from "../../assets/icons/bootstrap.svg"
import "./cardProyectos.css"

const CardProyectos = () => {
    return (
        <>
            <a target='blank' href='https://moviesproject23.netlify.app/' className="proyectos" aria-label='Proyecto-ouraMovie'>
                <div className='container-icons'>
                    <img src={reactIcon} alt="" />
                    <img src={reduxIcon} alt="" />
                    <img src={cssIcon} alt="" />
                    <img src={expressIcon} alt="" />
                    <img src={jwtIcon} alt="" />
                    <img src={nodeIcon} alt="" />
                </div>
                <div className='texto-proyecto'>
                    <h4>Oura Movie</h4>

                    <p>
                        Aplicación de películas utilizando React, Redux Toolkit y Vite.
                        Implementé navegación con React Router, consumo de API con Axios. <br />
                        Backend:
                        API REST con Node.js, Express y MongoDB, autenticación con JWT y Passport, manejo de imágenes con Multer y Sharp.
                    </p>
                </div>

                <IconoFlecha />
                <img src={ouraMovie} className='image-project'></img>

            </a>
            <a target='blank' href='https://electrodieselcolombia.netlify.app/' className="proyectos" aria-label='Proyecto-electroDiesel'>
                <div className='container-icons'>
                    <img src={reactIcon} alt="" />
                    <img src={boostrapIcon} alt="" />
                    <img src={cssIcon} alt="" />
                </div>
                <div className='texto-proyecto'>
                    <h4>ElectroDiesel</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laborum eligendi, corporis sint officiis deleniti laudantium rem temporibus facere mollitia quibusdam nihil enim veritatis magnam explicabo maxime officia fugit expedita.</p>
                </div>
                <IconoFlecha />

                <img src={electroDiesel} className='image-project'></img>

            </a>

        </>
    )
}

export default CardProyectos