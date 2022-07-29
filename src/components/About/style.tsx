import styled from "styled-components"

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

