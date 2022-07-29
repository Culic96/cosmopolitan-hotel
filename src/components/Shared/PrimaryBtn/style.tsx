import styled from "styled-components";

export const PrimaryBtn = styled.button({
    fontFamily: 'inherit',
    height: '60px',
    width: '250px',
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
})
