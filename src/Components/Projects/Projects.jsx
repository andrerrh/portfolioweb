import {useRef, useEffect} from 'react'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faReact, faSass, faJs, faCss3 } from '@fortawesome/free-brands-svg-icons'

import style from './Projects.module.scss'
import Card from './Cards/Cards'
import ecomImg from '../../assets/imgs/ecommerce.webp'
import canvasImg from '../../assets/imgs/canvas.webp'
import snakeImg from '../../assets/imgs/snake.webp'
import crudImg from '../../assets/imgs/crud.webp'

export default function Projects() {

    const projectsRef = useRef()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY >= projectsRef.current.scrollHeight * 0.4) {
                projectsRef.current.style.opacity = 1
                projectsRef.current.style.transform = 'translateX(0)'
            } else {
                projectsRef.current.style.opacity = 0
                projectsRef.current.style.transform = 'translateX(-100%)'
            }
        })
    }, [])

    return (
        <section ref={projectsRef} className={style.projectsContainer} id='projectsContainer'>
            <h2 className={style.projectsText}>Projects</h2>
            <div className={style.cardContainer}>
                <Card
                    img={ecomImg}
                    techs={[faReact, faSass, faDatabase]}
                    classes={['faReact', 'faSass', 'faDatabase']}
                    gitLink={'https://github.com/andrerrh/ecommerce-frontend'}
                    liveLink={'https://dev.d22h4gsi7qcb2m.amplifyapp.com'}
                    projectName={'e-Commerce Website'}
                />
                <Card
                    img={canvasImg}
                    techs={[faReact, faJs, faSass]}
                    classes={['faReact','faJs', 'faSass']}
                    gitLink={'https://github.com/andrerrh/canvasProjectsWebsite'}
                    liveLink={'https://canvas-projects.herokuapp.com'}
                    projectName={'Canvas Projects'}
                />
                <Card
                    img={snakeImg}
                    techs={[faJs, faSass]}
                    classes={['faJs', 'faSass']}
                    gitLink={'https://github.com/andrerrh/snake-game'}
                    liveLink={'https://dev.d22h4gsi7qcb2m.amplifyapp.com'}
                    projectName={'Snake Game'}
                />
                <Card
                    img={crudImg}
                    techs={[faReact, faCss3, faDatabase]}
                    classes={['faReact', 'faCss', 'faDatabase']}
                    gitLink={'https://github.com/andrerrh/ecommerce-frontend'}
                    liveLink={'https://dev.d22h4gsi7qcb2m.amplifyapp.com'}
                    projectName={'CRUD Project'}
                />
            </div>
        </section>
    )
}