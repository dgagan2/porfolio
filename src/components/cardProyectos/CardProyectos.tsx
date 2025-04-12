import "./cardProyectos.css"

import IconoFlecha from "../iconoFlecha/IconoFlecha"

import reactIcon from "../../assets/icons/icono react.png"
import reduxIcon from "../../assets/icons/redux.svg"
import cssIcon from "../../assets/icons/css.png"
import expressIcon from "../../assets/icons/express.svg"
import jwtIcon from "../../assets/icons/jwt.svg"
import nodeIcon from "../../assets/icons/node.svg"
import boostrapIcon from "../../assets/icons/bootstrap.svg"
import MongoDBIcon from "../../assets/icons/mongodb.png"
import NodeJsIcon from "../../assets/icons/node.svg"
import FirebaseIcon from "../../assets/icons/firebase.svg"

import ouraMovie from "../../assets/projects/oura_movie.png"
import electroDiesel from "../../assets/projects/Captura de pantalla 2025-03-15 180523.png"
import ecommerce from "../../assets/projects/ecommerce.png"

const proyectos = [
    {
        titulo: "Oura Movie",
        imagen: ouraMovie,
        enlace: "https://moviesproject23.netlify.app/",
        descripcion: `Aplicación de películas utilizando React, Redux Toolkit y Vite. 
        Implementé navegación con React Router, consumo de API con Axios.
        Backend: API REST con Node.js, Express y MongoDB, autenticación con JWT y Passport, manejo de imágenes con Multer y Sharp.`,
        tecnologias: [reactIcon, reduxIcon, cssIcon, expressIcon, jwtIcon, nodeIcon],
    },
    {
        titulo: "ElectroDiesel",
        imagen: electroDiesel,
        enlace: "https://electrodieselcolombia.netlify.app/",
        descripcion: "Landing page para empresa de servicios mecánicos. Responsive con React, Bootstrap y CSS.",
        tecnologias: [reactIcon, boostrapIcon, cssIcon],
    },
    {
        titulo: "E-commerce",
        imagen: ecommerce,
        enlace: "https://fak-ecommerce.netlify.app/",
        descripcion: "Tienda falsa de e-commerce usando React, Bootstrap y JWT.",
        tecnologias: [reactIcon, boostrapIcon, cssIcon, jwtIcon],
    },
    {
        titulo: "API E-commerce",
        imagen: null,
        enlace: "https://github.com/dgagan2/proyecto_backend_NoSQL.git",
        descripcion: `API RESTful con Node.js, Express y MongoDB, autenticación con JWT y Passport,
        manejo de imágenes con Multer y Sharp, integración con Firebase.`,
        tecnologias: [
            jwtIcon,
            "https://www.passportjs.org/images/logo.svg",
            expressIcon,
            MongoDBIcon,
            NodeJsIcon,
            FirebaseIcon,
        ],
    },
]

const CardProyectos = () => {
    return (
        <>
            {proyectos.map(({ titulo, imagen, enlace, descripcion, tecnologias }, index) => (
                <a
                    key={index}
                    href={enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proyectos"
                    aria-label={`Proyecto-${titulo}`}
                >
                    <div className="container-icons">
                        {tecnologias.map((icono, i) => (
                            <img key={i} src={icono} alt={`Tecnología usada: ${titulo}`} />
                        ))}
                    </div>

                    <div className="texto-proyecto">
                        <h4>{titulo}</h4>
                        <p>{descripcion}</p>
                    </div>

                    <IconoFlecha />

                    {imagen && <img src={imagen} alt={`Vista previa de ${titulo}`} className="image-project" />}
                </a>
            ))}
        </>
    )
}

export default CardProyectos
