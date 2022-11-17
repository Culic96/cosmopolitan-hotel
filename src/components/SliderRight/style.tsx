import styled from "styled-components"

export const Divider = styled.div({
    display: 'flex',
    width: '100vw',
    height: '80vh',
    padding: '2rem 2rem'
})



export const GeneralInfo = styled.div({
    float: 'left',
    width: '50vw',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '0 2rem',
    h1: {
        textDecoration: 'underline 2px #FAC86B',
        fontSize: '2.5rem',
        letterSpacing: '6px',
        fontWeight: '400',
    },
    p: {
        lineHeight: '25px',
        fontWeight: '300'
    }
})



export const SliderHolder = styled.div({
    float: 'right',
    display: 'flex',
    height: '80vh',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})



export const Slider = styled.div(
    {
        maxWidth: '45vw',
        maxHeight: '80%',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        transition: 'all 0.2s ease',
        img: {
            width: '45vw',
            height: '350px',
            animation: 'Loading 0.2s ease',
            transition: 'all 0.2s ease',
        },
        "@keyframes Loading": {
            "0%": { opacity: 0, transform: "translateX(-100px) " },
            "100%": { opacity: 1, transform: "translateX(0px)" },
        },
    })




export const ArrowHolder = styled.div({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '50%',
    p: {
        fontSize: '1.3rem',
        fontWeight: '300',
        margin: '0 0.5rem'
    },
    span: {
        margin: "0 0.5rem"
    }
})

export const Arrow = styled.button({
    fontSize: '2rem',
    border: 'none',
    backgroundColor: 'transparent',
    color: 'grey',
    "&: hover": {
        cursor: 'pointer'
    }
})


