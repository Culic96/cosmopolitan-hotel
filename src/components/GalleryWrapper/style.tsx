import styled from "styled-components";

export const GalleryWrapperDiv = styled.div({
    height: "100%",
    width: '80vw',
    display: 'grid',
    marginLeft: '10vw',
    gridTemplateRows: "auto auto",
    gridTemplateColumns: "auto auto",
    rowGap: '2rem',
    columnGap: '2rem',
    marginBottom: '2rem'
    // gap: '15rem'
})

export const ImageDisplayHolder = styled.div({
  width: '700px',
  height: '700px',
  backgroundColor: '#f3f3f3',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '12px',
},
)

export const ImageDisplay = styled.div<{props: any}>({
    width: '600px',
    height: '600px',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
},
({ props }) => ({
    ...(props && {
      backgroundImage: `url("${props}")`,
      "&:hover": {
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url("${props}")`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
    },
    }),
  })
)
