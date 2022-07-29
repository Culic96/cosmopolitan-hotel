import styled from "styled-components"

export const LocalAtraction = styled.div({
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