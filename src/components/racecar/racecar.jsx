import React from 'react'
import Frame from './frame'
import Window from './window'
import Driver from './driver'
import Tire from './tire'
import Spokes from './spokes'
import Smoke from './smoke'
import Zoom from './zoom'
import styles from './racecar.module.css'

const Racecar = ({rumbleFrame, animate, width, className}) => { 
    const RacecarSvg = () => (
        <svg 
            xmlns="http://www.w3.org/2000/svg"
            className={className || ``}
            width={width || '350px'}
            viewBox="0 0 272 72">
            <g className={animate ? styles.moveCar : null}>
            <Frame className={styles.frame} rumble={rumbleFrame}/>
            <Window className={styles.window}/>
            <Driver className={styles.driver}/>
            <Tire className={styles.tire}/>
            <Tire className={styles.tire} back/>
            <Spokes className={styles.spokes}/>
            <Spokes className={rumbleFrame ? `${styles.spokes} ${styles.spin}` : styles.spokes} back/>
            </g>
            <Smoke className={`${styles.smoke} ${animate ? styles.smoking : null}`} appear={animate}/>
            <Zoom letterClassName={`${styles.letter} ${animate ? styles.animateLetter : null}`} {...animate}/>
        </svg>
    )
    return (
        <RacecarSvg/>
    )
}

export default Racecar
