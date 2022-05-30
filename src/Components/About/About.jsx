import {useEffect, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import style from './About.module.scss'
import avatar from '../../assets/imgs/avatar.webp'
import resume from '../../assets/docs/resume.pdf'

export default function About() {

    const aboutRef = useRef()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY >= aboutRef.current.offsetTop * .6) {
                aboutRef.current.style.opacity = 1
                aboutRef.current.style.transform = 'translateY(0)'
            } else {
                aboutRef.current.style.opacity = 0
                aboutRef.current.style.transform = 'translateY(100%)'
            }
        })
    }, [])

    return (
        <section id="about" ref={aboutRef} className={style.aboutContainer}>
            <div className={style.imageContainer}>
                <img src={avatar} alt="" />
            </div>
            <div className={style.infoContainer}>
                <p>Me chamo André, formado em 2020 pela Faculdade de Tecnologia de São José do Rio Preto em Informática para Negócios, tenho interesse em ingressar na carreira de desenvolvimento web, sempre com vontade de aprender mais!</p>
                <span className={style.links}>
                    <a href="github.com/andrerrh"><FontAwesomeIcon icon={faGithub} /> Github</a>
                    <a href="https://www.linkedin.com/in/andré-rodrigues-hernandes-26b197234"><FontAwesomeIcon icon={faLinkedinIn} /> Linkedin</a>
                    <a href={resume}><FontAwesomeIcon icon={faFile} /> Currículo</a>
                </span>
            </div>
        </section>
    )
}