import { makeStyles } from '@material-ui/core'

export default makeStyles((theme)=>({
    "@keyframes moveCar":{
        "to":{
            transform:'translateX(-100%)'
        },
        "from":{
            transform:'translateX(0)'
        }
    },
    "@keyframes appear":{
        "to":{
            opacity:1
        },
        "from":{
            opacity:0
        }
    },
    "@keyframes disappear":{
        "to":{
            opacity:0
        },
        "from":{
            opacity:1
        }
    },
    "@keyframes skewLetter":{
        "0%":{
            transform:"skew(0deg)"
        },
        "5%":{
            transform:"skew(-25deg)"
        },
        "100%":{
            transform:"skew(0deg)"
        }
    },
    "@keyframes grow":{
        "to":{
            transform:"scale(1,1)"
        },
        "from":{
            transform:"scale(0.9,0.9)"
        }
    },
    "@keyframes spin":{
        "to":{
            transform:'rotateZ(-360deg)'
        },
        "from":{
            transform:'rotateZ(0deg)'
        }
    },
    container:{
        width:'100%',
        height:'400px',
        backgroundColor:'grey',
        border:'1px solid black'
    },
    tire:{
        fill:'black',
        stroke:'none'
    },
    spokes:{
        fill:'none',
        stroke:'white',
        strokeWidth:'2px',
        transformBox:'fill-box',
        transformOrigin:'center',
    },
    spin:{
        animation:'$spin .5s linear forwards infinite'
    },
    driver:{
        fill:'black',
        stroke:'none'
    },
    window:{
        fill:'lightgrey'
    },
    frame:{
        fill:theme.palette.primary.main,
        stroke:'darkblue'
    },
    smoke:{
        fill:'white',
        stroke:'black',
        opacity:0,
        transform:'scale(0.9,0.9)',
        transformOrigin:'center',
        filter:'drop-shadow(0px 0px 3px white)'
    },
    smoking:{
        animation:'$appear .1s linear .01s forwards, $grow 2s linear forwards, $disappear 1s linear 10s forwards'
    },
    moveCar:{
        animation:'$moveCar .05s linear forwards'
    },
    letter:{
        transform:'skewX(0deg)',
        opacity:0,
        fill:theme.palette.primary.main,
        stroke:theme.palette.secondary.main
    },
    animateLetter:{
        animation:'$skewLetter 1.5s ease-in-out forwards, $appear .1s forwards'
    }
}))

