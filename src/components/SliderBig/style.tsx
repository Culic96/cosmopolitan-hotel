import styled from "styled-components";

export const SliderWrapper = styled.div({
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
})

export const SliderHead = styled.div({
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    transition: 'all 0.2s linear',
    display: 'inline-block',
    img: {
        width: '100vw',
        height: '90vh',
        animation: 'Loading 0.2s linear',
        transition: 'all 0.2s linear',
    },
    "@keyframes Loading": {
        "0%": { transform: "translateX(-100%) " },
        "100%": { transform: "translateX(0px)" },
    },
})