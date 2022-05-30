import { useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import style from './Home.module.scss'

export default function Home() {
    
    const homeRef = useRef()

    useEffect(() => {
        homeRef.current.style.opacity = 1
        homeRef.current.style.transform = 'translateY(0%)'
    }, [])

    return (
        <section id="homeContainer"ref={homeRef} className={style.homeContainer}>
            <div className={style.initialTextContainer}>
                <p className={style.welcome}>Seja bem-vindo!</p>
                <h2 className={style.introduction}>Sou <p>André Rodrigues Hernandes</p></h2>
                <h3 className={style.role}>Web Developer</h3>
                <span className={style.buttonContainer}>
                    <a href="#projectsContainer"><FontAwesomeIcon icon={faAngleDown} /></a>
                </span>
            </div>
            <div className={style.animationContainer}>
                <h4 className={style.logoBrackets}>
                    <p>{'<'}</p>
                    <p>{'>'}</p>
                </h4>
                <h4 className={style.logoText}>{'ARH'}</h4>
            </div>
        </section>
    )
}