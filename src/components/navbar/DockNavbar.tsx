import projectIcon from "../../assets/icons/proyectos.png";
import aboutMeIcon from "../../assets/icons/aboutMe.png";
import skillsIcon from "../../assets/icons/skills.png";
import homeIcon from "../../assets/icons/home.png";
import "./navbar.css";

const DockNavbar = () => {
    return (
        <nav className="dock__navbar">
            <ul className="dock__navbar__menu">
                <li className="dock__navbar__menu__item">
                    <a href="/">
                        <span>
                            Home
                        </span>
                        <img src={homeIcon} alt="Icono pagina principal" />
                    </a>
                </li>
                <li className="dock__navbar__menu__item">
                    <a href="#proyectos">
                        <span>
                            Proyectos
                        </span>
                        <img src={projectIcon} alt="Icono de proyectos" />
                    </a>
                </li>
                <li className="dock__navbar__menu__item">
                    <a href="#aboutMe">
                        <span>
                            Sobre Mi
                        </span>
                        <img src={aboutMeIcon} alt="Icono información acerca de mi" />
                    </a>
                </li>
                <li className="dock__navbar__menu__item">
                    <a href="#skills">
                        <span>
                            Habilidades
                        </span>
                        <img src={skillsIcon} alt="Icono de habilidades" />
                    </a>
                </li>
            </ul>
        </nav>
    )
};

export default DockNavbar;