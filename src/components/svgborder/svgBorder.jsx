import React from 'react'
import styles from './svgBorder.module.css'

const SvgBorder = ({flipX, flipY, color, shadow}) => {
    const classesMap = {
      shadow:(
        shadow
        &&
        `${styles[`shadow${shadow}`]}`
      ),
      flip:(
        flipX || flipY
        ?
        `${styles[`flip${flipX ? `x` : ``}${flipY ? `y` : ``}`]}`
        :
        null
      ),
      classes:styles.svgImage
    }
    const classes = Object.keys(classesMap)
    .map((key) => (classesMap[key]))
    .filter((className) => className)
    .toString()
    .replaceAll(",", " ")
    return (
        <div className={styles.container}>
          <svg
            xmlns="http://www.w3.org/1999/xhtml"
            className={classes}
            style={{fill:color}}
            viewBox="0 0 500 50"
          >
            <path
              stroke="black"
              strokeWidth="0"
              d="M 500.00,0.00
              C 500.00,0.00 500.00,50.00 500.00,50.00
                500.00,50.00 0.00,50.00 0.00,50.00
                0.18,18.00 501.16,48.58 500.00,0.00 Z"
            />
          </svg>
        </div>
    )
}

export default SvgBorder
