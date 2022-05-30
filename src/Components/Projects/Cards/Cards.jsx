import { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

import style from './Cards.module.scss'

export default function Cards({ img, techs, classes, gitLink, liveLink, projectName }) {
    const [cardOpen, setCardOpen] = useState(false)

    const cardRef = useRef()
    const footerRef = useRef()
    const ftContainerRef = useRef()

    const toggleCard = () => {
        setCardOpen(!cardOpen)
        if (!cardOpen) {
            cardRef.current.style.filter = 'grayscale(0%)'
            footerRef.current.style.height = '20%'
            ftContainerRef.current.style.display = 'flex'
        } else {
            cardRef.current.style.filter = 'grayscale(100%)'
            footerRef.current.style.height = '0%'
            ftContainerRef.current.style.display = 'none'
        }
    }

    return (
        <div ref={cardRef} onClick={toggleCard} className={style.card}>
            <img src={img} alt='projectimg' />
            <div ref={footerRef} className={style.cardFooter}>
                <div ref={ftContainerRef} className={style.footerContainer}>
                    <span className={style.links}>
                        <a className={style.gitLink} href={gitLink}><FontAwesomeIcon icon={faGithubAlt} /></a>
                        <a className={style.liveLink} href={liveLink}><FontAwesomeIcon icon={faRocket} /></a>
                    </span>
                    <span className={style.projectName}>{projectName}</span>
                    <span className={style.techs}>
                        {techs.map((e, i) => {
                            return (
                                <FontAwesomeIcon key={`tech${i}`} className={style[classes[i]]} icon={e} />
                            )
                        })}
                    </span>
                </div>
            </div>
        </div>
    )
}