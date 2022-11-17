import styled from "styled-components";

export const RoomCategoryHolder = styled.div({
  height: "70vh",
  width: "50vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  gap: "2rem",
  p: {
    width: "40vw",
    fontWeight: "300",
    lineHeight: "20px",
  },
  h3: {
    textTransform: "uppercase",
    fontSize: "1.5rem",
    fontWeight: "400",
    letterSpacing: "8px",
  },
});

// export const RoomImg = styled.div(
//   {
//     // backgroundImage: `url("../images/slideRoomTwo.jpg")`,
//     width: "45vw",
//     height: "50vh",
//     backgroundSize: "cover",
//     backgroundPosition: "center center",
//   },
//   ({ color }) => ({
//     color: `url("${color}")`,
//   })
// );

export const HelloContainer = styled.div(
  {
    color: "red",
    fontSize: '2rem',
  },
  ({ color }) => ({
    // Conditional style
    ...(color && {
      color: color,
    }),
  })
);

export const RoomImg = styled.div({
  width: "45vw",
  height: "50vh",
  backgroundSize: "cover",
  backgroundPosition: "center center",
},
  ({ color }) => ({
    // Conditional style
    ...(color && {
      backgroundImage: `url("${color}")`,
    }),
  })
)
