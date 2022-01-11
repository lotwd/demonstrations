import React, { useState } from 'react'
import { Grid, SvgBorder, RaceCar, ScrollContainer } from '../../components'
import styles from './demoPage.module.css'

const DemoPage = () => {
    const [ animateCar, setAnimateCar ] = useState(false)
    return (
        <>
        <ScrollContainer>
        <Grid className={styles.gridContainer} container justify="center" align="center">
            <Grid className={styles.padSides} item xs={12}>
                <h2>The ScrollContainer component creates a controlled scrolling experience.</h2>
            </Grid>
            <Grid className={styles.padSides} item xs={12}>
                <h3>A swipe will move the contents either the full height of the display, or to the start or end of child components.</h3>
            </Grid>
            <Grid item xs={12}>
                <h3>Usage:</h3>
            </Grid>
            <Grid className={`${styles.padSides} ${styles.marginBottom}`} item xs={12}>
                <code>{
                    `<ScrollContainer>{children}</ScrollContainer>`
                }</code>
            </Grid>
            <Grid className={styles.padSides} item xs={12}>
                <p>To see a demo of this component, simply continue to use this page.  The content on this page is encapsulated in a ScrollContainer element.</p>
            </Grid>
            <Grid className={styles.padSides} item xs={12}>
                <h3>To see the code that makes this component work, please visit</h3>
                <a href="https://github.com/lotwd/demonstrations/tree/master/src/components/svgborder">Github</a>
            </Grid>
            </Grid>
        <Grid className={styles.gridContainer} container justify="center" align="center">
            <Grid className={styles.padSides} item xs={12}>
                <h2>The Racecar component creates an animated race car.</h2>
            </Grid>
            <Grid item xs={12}>
                <h3>Usage:</h3>
            </Grid>
            <Grid className={`${styles.padSides} ${styles.marginBottom}`} item xs={12}>
                <code>{
                    `<RaceCar rumbleFrame animate={${animateCar ? `true` : `false`}}/>`
                }</code>
            </Grid>
            <Grid item xs={12}>
                <RaceCar rumbleFrame animate={animateCar} width="350px" className={styles.marginBottom}/>
            </Grid>
            <Grid item xs={8} md={3} lg={2} xl={1} component = {
            <button className={`${styles.button} ${styles.marginBottom}`} onClick={()=>setAnimateCar(!animateCar)}>{ animateCar ? `RESET` : `ANIMATE` }</button>
            }/>
            <Grid className={styles.padSides} item xs={12}>
                <h3>{
                        `Use the ${animateCar ? `Reset` : `Animate`} button above to ${animateCar ? `reset` : `test`} the animation`
                    }
                </h3>
            </Grid>
            <Grid className={styles.padSides} item xs={12}>
                <h3>To see the code that makes this component work, please visit</h3>
                <a href="https://github.com/lotwd/demonstrations/tree/master/src/components/racecar">Github</a>
            </Grid>   
        </Grid>
        <Grid className={styles.gridContainer} container justify="center" align="center" rowGap={1}>
            <Grid className={styles.padSides} item xs={12}>
                <h2>The Grid component creates an easy to use responsive grid and is modelled after Material-UIs Grid component.</h2>
            </Grid>
            <Grid className={styles.padSides} item xs={12}>
                <h3>To use this component we start with a Grid component with the container prop active</h3>
            </Grid>
            <Grid className={styles.padSides} item xs={12}>
                <code>{
                    `<Grid container justify="center" align="center" rowGap={1}>`
                }</code>
            </Grid>
            <Grid className={styles.padSides} item xs={12}>
                <h3>Then we add child Grid components with the item prop active, and provide integers representing sizes for various device</h3>
            </Grid>
            <Grid className={`${styles.padSides} ${styles.marginBottom}`} item xs={12}>
                <code>{
                     `<Grid item xs={12} md={6} lg={4} xl={3}>`
                }</code>
            </Grid>
            <Grid className={`${styles.item} ${styles.color1}`} item xs={12} md={6} lg={3} xl={2}>
            {
                `<Grid item xs={12} md={6} lg={4} xl={3}>`
            }
            </Grid>
            <Grid className={`${styles.item} ${styles.color2}`} item xs={12} md={6} lg={3} xl={2}>
            {
                `<Grid item xs={12} md={6} lg={4} xl={3}>`
            }
            </Grid>
            <Grid className={`${styles.item} ${styles.color3}`} item xs={12} md={6} lg={3} xl={2}>
            {
                `<Grid item xs={12} md={6} lg={4} xl={3}>`
            }
            </Grid>
            <Grid className={`${styles.item} ${styles.color4}`} item xs={12} md={6} lg={3} xl={2}>
            {
                `<Grid item xs={12} md={6} lg={4} xl={3}>`
            }
            </Grid>
            <Grid className={`${styles.item} ${styles.color5}`} item xs={12} md={6} lg={3} xl={2}>
            {
                `<Grid item xs={12} md={6} lg={4} xl={3}>`
            }
            </Grid>
            <Grid className={`${styles.item} ${styles.color6}`} item xs={12} md={6} lg={3} xl={2}>
            {
                `<Grid item xs={12} md={6} lg={4} xl={3}>`
            }
            </Grid>
            <Grid className={`${styles.item} ${styles.color7}`} item xs={12} md={6} lg={3} xl={2}>
            {
                `<Grid item xs={12} md={6} lg={4} xl={3}>`
            }
            </Grid>
            <Grid className={`${styles.item} ${styles.color1}`} item xs={12} md={6} lg={3} xl={2}>
            {
                `<Grid item xs={12} md={6} lg={4} xl={3}>`
            }
            </Grid>
            <Grid className={styles.padSides} item xs={12}>
                <h3>To test the functionality of this component, please use the device toolbar in the Chrome Dev Tools</h3>
                <h3>To see the code that makes this component work, please visit</h3>
                <a href="https://github.com/lotwd/demonstrations/tree/master/src/components/grid">Github</a>
            </Grid>
       </Grid>
       <Grid className={styles.gridContainer} container justify="center" align="center">
            <Grid className={styles.padSides} item xs={12}>
                <h2>The SVG Border component creates an svg image that can be flipped horizontally or vertically and can to used to frame content</h2>
            </Grid>
            <Grid item xs={12}>
                <h3>Usage:</h3>
            </Grid>
            <Grid className={`${styles.padSides} ${styles.marginBottom}`} item xs={12}>
                <code>{
                    `<SvgBorder flipY flipY color="#f94144" shadow={2}/>`
                }</code>
            </Grid>
            <Grid className={`${styles.svgItem} ${styles.color4}`} item xs={7}>
                <SvgBorder flipY color="#f94144" shadow={1}/>
                <code>
                {
                    `TOP: <SvgBorder flipY color="#f94144" shadow={1}/>`
                }
                <br/>
                {
                    `BOTTOM: <SvgBorder flipX color="#577590" shadow={1}/>`
                }
                </code>
                <SvgBorder flipX color="#577590" shadow={1}/>
            </Grid>
            <Grid className={`${styles.svgItem} ${styles.color1}`} item xs={12} lg={6}>
                <SvgBorder flipY/>
                <code>
                {
                    `TOP: <SvgBorder flipY/>`
                }
                <br/>
                {
                    `BOTTOM: <SvgBorder/> `
                }
                </code>
                <SvgBorder/>
            </Grid>
            <Grid className={`${styles.svgItem} ${styles.color5}`} item xs={12} lg={6}>
                <SvgBorder flipY flipX/>
                <code>
                {
                    `TOP: <SvgBorder flipY flipX/>`
                }
                <br/>
                {
                    `BOTTOM: <SvgBorder flipX/> `
                }
                </code>
                <SvgBorder flipX/>
            </Grid>
            <Grid className={`${styles.padSides} ${styles.marginBottom}`} item xs={12}>
                <h3>To see the code that makes this component work, please visit</h3>
                <a href="https://github.com/lotwd/demonstrations/tree/master/src/components/scrollContainer">Github</a>
            </Grid>
            
       </Grid>
       </ScrollContainer>
       </>
    )
}

export default DemoPage
