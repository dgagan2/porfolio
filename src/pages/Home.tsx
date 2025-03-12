import profile from '../assets/1.png'
import gitHubIcon from '../assets/icons/github.png'
import linkedinIcon from '../assets/icons/linkedin.png'
import imageHover from "../assets/icons/clic.png"

import "../css/home.css"
import { motion } from 'framer-motion'
import DockNavbar from '../components/navbar/DockNavbar'

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

                <section className='container-social-icons'>
                    <a href="https://github.com/dgagan2" target='blank' className="social-icon__link github">
                        <img src={gitHubIcon} alt="icono github" className='social-icon__github' />
                        <img src={imageHover} alt="icono de flecha" className='social-icon__github-hover' />
                    </a>
                    <a href="https://www.linkedin.com/in/deibi-arias-58396a224/" target='blank' className="social-icon__link linkedin">
                        <img src={linkedinIcon} alt="icono linkedin" className='social-icon__linkedin' />
                        <img src={imageHover} alt="icono de flecha" className='social-icon__linkedin-hover' />
                    </a>
                </section>


            </header>

            <DockNavbar />
        </>
    )
}

export default Home