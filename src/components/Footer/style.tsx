import styled from "styled-components";

export const FooterBody = styled.div({
    height: '70vh',
    width: '100vw',
    backgroundColor: '#C18566'
})

export const Underline = styled.div({
    height: '10%',
    borderBottom: '1px solid #fff',
})

export const Social = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem',
    color: "#fff",
    gap: '2rem',
    padding: '1.5rem 0'
})

export const FooterInfo = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    color: "#fff",
    gap: '1rem',
    p: {
        fontSize: '1.1rem',
        lineHeight: '30px',
    }
})




export const FooterLogo = styled.div({
    width: "176px",
    height: "90px",
    color: '#fff',
    backgroundImage: `url("../images/footerLogo.png")`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
})