import styled from "styled-components";



export const AboutWrapper = styled.div({
    position: 'relative',
    width: '100vw',
    height: '80vh',
    display: 'flex',
    padding: '2rem 0'
})

export const AboutHeading = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    h1: {
        fontSize: '3rem',
        letterSpacing: '15px',
        fontWeight: '500',
        textTransform: 'uppercase',
        textDecoration: 'underline 2px #FAC86B',
    }
})

export const AboutBackground = styled.div({
    float: 'left',
    width: '45vw',
    marginLeft: '3rem',
    backgroundImage: `url("../images/about.jpg")`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
})

export const AboutText = styled.div({
    float: 'right',
    width: '50vw',
    textAlign: 'center',
    color: '#000',
    textTransform: 'uppercase',
    padding: '1rem 2rem',
    h1: {
        fontSize: '1.5rem',
        letterSpacing: '10px',
        fontWeight: '400',
        paddingBottom: '2rem',
    },
    h3: {
        fontSize: '1.2rem',
        letterSpacing: '6px',
        fontWeight: '400',
        paddingBottom: '2rem',
    },
    p: {
        fontSize: '0.8rem',
        fontWeight: '400',
        lineHeight: '25px'
    }
})

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
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})



export const Slider = styled.div({
    float: 'right',
    width: '45vw',
    height: '80%',
    backgroundImage: `url("../images/background.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
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
})

export const LocalAtractions = styled.div({
    height: '60vh',
    width: '100vw',
    position: 'relative',
    backgroundImage: `url("../images/dubaiLandscape.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',

})

export const LocalInfo = styled.div({
    height: '150px',
    width: '400px',
    position: 'absolute',
    top: '30%',
    left: '20%',
    transform: 'translate(-50%)',
    backgroundColor: '#f2f2f2',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    padding: '1rem 1rem',
    flexDirection: 'column',
    h3: {
        fontSize: '1.6rem',
        fontWeight: '400'
    },
    p: {
        fontWeight: '300'
    }
})