import styled from "styled-components";

export const WrapperImage = styled.div({
    height: '100vh',
    width: '100vw',
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url("../images/background.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',

})

export const NavHolder = styled.div({
    height: '12vh',
    width: '100vw',
    display: 'flex',
    backgroundColor: '#fafafa',
})

export const LogoHolder = styled.div({
    float: 'left',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '15vw',
    img: {
        width: '100%',
        height: '100%',
        "&:hover": {
            cursor: 'pointer'
        }
    }
})

export const NavLinks = styled.div({
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '85vw',
    marginRight: '20vw',
    a: {
        color: '#000',
        textDecoration: 'none',
        fontSize: '1.3rem',
        fontWeight: '500',
        letterSpacing: '3px',
        border: '2px solid transparent',
        transition: 'all 0.5s ease'
    },
    "a:hover": {
        cursor: 'pointer',
        color: '#a1a1a1',
        borderBottom: '2px solid #FAC86B',
        transition: 'all 0.5s ease'
    }
})


export const BackgroundContent = styled.div({
    height: '88vh',
    position: 'relative',
    width: '100vw',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    textTransform: 'uppercase',
    color: '#fff',
    h1: {
        fontSize: '3rem',
        fontWeight: '400',
        letterSpacing: '12px'
    },
    h3: {
        fontSize: '1.5rem',
        fontWeight: '100',
        letterSpacing: '15px'
    },
    button: {
        fontFamily: 'inherit',
        padding: '1rem 3rem',
        fontSize: '1.3rem',
        fontWeight: '500',
        color: '#fff',
        backgroundColor: '#C18566',
        border: 'none',
        letterSpacing: '3px',
        textTransform: 'uppercase',
        transition: 'all 0.5s ease',
        "&:hover": {
            cursor: 'pointer',
            backgroundColor: "#C18333",
            transition: 'all 0.5s ease'
        }
    }
})
