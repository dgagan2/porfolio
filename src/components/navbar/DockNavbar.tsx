import "./navbar.css";
import iconPrueba from "../../assets/icons/smile.png";
import projectIcon from "../../assets/icons/proyectos.png";
const DockNavbar = () => {
    return (
        <nav className="menu">
            <ul className="menu__container">
                <li className="menu-item">
                    <a href="#">
                        <span>
                            menu1
                        </span>
                        <img src={iconPrueba} alt="" />
                    </a>
                </li>
                <li className="menu-item">
                    <a href="">
                        <span>
                            Proyectos
                        </span>
                        <img src={projectIcon} alt="" />
                    </a>
                </li>
                <li className="menu-item">
                    <a href="">
                        <span>
                            Sobre Mi
                        </span>
                        <img src={iconPrueba} alt="" />
                    </a>
                </li>
                <li className="menu-item">
                    <a href="">
                        <span>
                            Skills
                        </span>
                        <img src={iconPrueba} alt="" />
                    </a>
                </li>
            </ul>
        </nav>
    )
};

export default DockNavbar;