import { useState, useEffect, useRef } from 'react'

import style from './Header.module.scss'

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false)

    const headerRef = useRef()
    const optionsContainer = useRef()
    const firstLine = useRef()
    const secondLine = useRef()
    const thirdLine = useRef()

    useEffect(() => {
        headerRef.current.style.opacity = 1
        headerRef.current.style.transform = 'translateY(0%)'
    }, [])

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
        if(!menuOpen) {
            firstLine.current.style.transform = 'translateY(0%) rotateZ(215deg)'
            thirdLine.current.style.transform = 'translateY(0%) rotateZ(135deg)'
            secondLine.current.style.opacity = '0'
            optionsContainer.current.style.transform = 'translateX(0%)'
        } else {
            firstLine.current.style.transform = 'translateY(-200%)'
            thirdLine.current.style.transform = 'translateY(200%)'
            secondLine.current.style.opacity = '1'
            optionsContainer.current.style.transform = 'translateX(200%)'
        }
    }

    return (
        <header ref={headerRef} className={style.header}>
            <h2><a href='#homeContainer'>{'<ARH />'}</a></h2>
            <button onClick={toggleMenu} className={style.openButton}>
                <div ref={firstLine} className={style.firstLine}></div>
                <div ref={secondLine} className={style.secondLine}></div>
                <div ref={thirdLine} className={style.thirdLine}></div>
            </button>
            <span ref={optionsContainer} className={style.optionsContainer}>
                <span>
                    <a href='#homeContainer'>Início</a>
                </span>
                <span>
                    <a href='#projectsContainer'>Projetos</a>
                </span>
                <span>
                    <a href='/#about'>Sobre</a>
                </span>
            </span>
        </header>
    )
}