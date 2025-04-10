import profile from '../assets/1.png'
import gitHubIcon from '../assets/icons/github.png'
import linkedinIcon from '../assets/icons/linkedin.png'
import DockNavbar from '../components/navbar/DockNavbar'
import { motion } from 'framer-motion'
import "../css/home.css"
import IconoFlecha from '../components/iconoFlecha/IconoFlecha'
import CardProyectos from '../components/cardProyectos/CardProyectos'
import Skills from '../components/skills/Skills'


const Home = () => {
    return (
        <>

            <header className='container-profile'>
                <div className='container-profile-motions'>
                    <motion.div className='container-profile-image'>
                        <img src={profile} alt="foto de perfil" className='profile-image' />
                    </motion.div>

                    <motion.svg fill="transparent" viewBox="0 0 506 506">
                        <motion.circle cx="253" cy="253" r="250" stroke="#fdfdfd" strokeWidth="6"
                            strokeLinecap="round" strokeLinejoin="round" initial={{ strokeDasharray: "24 10 0 0" }}
                            animate={{ strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"], rotate: [120, 360], }}
                            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}>
                        </motion.circle>
                    </motion.svg>
                </div>

                <h2>Deibi Arias</h2>
                <h1>Full Stack Developer <br /> JavaScript</h1>
                <h4>Ingeniero en Sistemas, interés en Front-end Developer</h4>
                <section className='container-social-icons'>
                    <a href="https://github.com/dgagan2" target='blank' className="social-icon__link github">
                        <img src={gitHubIcon} alt="icono github" className='social-icon__github' />
                        <IconoFlecha />
                    </a>
                    <a href="https://www.linkedin.com/in/deibi-arias-58396a224/" target='blank' className="social-icon__link linkedin">
                        <img src={linkedinIcon} alt="icono linkedin" className='social-icon__linkedin' />
                        <IconoFlecha />
                    </a>
                </section>


            </header>

            <main className='container-main'>
                <section className="container-proyectos" id='proyectos'>
                    <h2>Proyectos</h2>
                    <section style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: "wrap" }} className='container-proyectos-items'>

                        <CardProyectos />

                    </section>
                </section>

                <Skills />
            </main>
            <DockNavbar />

        </>
    )
}

export default Home