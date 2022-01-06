import React from 'react'

const Tire = ({className, back}) => {
 const d
 =
 back 
 ?
    `
        M 238.00,29.31
            C 240.22,29.17 241.72,28.94 244.00,29.31
                269.35,30.86 267.08,69.72 241.00,67.90
                220.24,66.46 215.14,36.36 238.00,29.31 Z
            M -287.00,-58.00
    `
 :
`
M 55.00,29.31
           C 57.22,29.17 58.72,28.94 61.00,29.31
             86.35,30.86 84.08,69.72 58.00,67.90
             37.24,66.46 32.14,36.36 55.00,29.31 Z
`

  return (
    <path id={`${back ? 'back' : 'front'}-tire`}
        className={className}
        d={d} />

  )
}

export default Tire