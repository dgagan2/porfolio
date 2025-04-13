import "./skills.css"

import JSIcon from "../../assets/icons/javascript.svg"
import Bootstrap from "../../assets/icons/bootstrap.svg"
import CSSIcon from "../../assets/icons/css.png"
import HTMLIcon from "../../assets/icons/html.png"
import NodeIcon from "../../assets/icons/node.svg"
import ReactIcon from "../../assets/icons/icono react.png"
import ReduxIcon from "../../assets/icons/redux.svg"
import GitIcon from "../../assets/icons/github.png"
import ResponsiveDesign from "../../assets/icons/responsive.png"
import JWTIcon from "../../assets/icons/jsonwebtokens.svg"
import MongoDBIcon from "../../assets/icons/mongodb.png"
import PostgresqlIcon from "../../assets/icons/postgresql.svg"
import FirebaseIcon from "../../assets/icons/firebase.svg"

const skillsData = [
    { name: "Bootstrap", icon: Bootstrap },
    { name: "CSS", icon: CSSIcon },
    { name: "Firebase", icon: FirebaseIcon },
    { name: "Git", icon: GitIcon },
    { name: "HTML5", icon: HTMLIcon },
    { name: "JavaScript", icon: JSIcon },
    { name: "JWT", icon: JWTIcon },
    { name: "MongoDB", icon: MongoDBIcon },
    { name: "NodeJS", icon: NodeIcon },
    { name: "PostgreSQL", icon: PostgresqlIcon },
    { name: "ReactJS", icon: ReactIcon },
    { name: "Redux", icon: ReduxIcon },
    { name: "RWD", icon: ResponsiveDesign },
]

const Skills = () => {
    return (
        <section className='container-habilidades' id='skills'>
            <h2>Habilidades</h2>
            <div className='container-habilidades-items'>
                <div className='container-habilidades-items-list'>
                    <ul className="list-skills">
                        {skillsData.map(({ name, icon }) => (
                            <li key={name} className="rainbow-border">
                                <span>
                                    <img src={icon} alt={`Logo de ${name}`} />
                                    <p className="skill-description">{name}</p>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Skills
