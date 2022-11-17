import { PrimaryBtn } from "../Shared/PrimaryBtn/style";
import { RoomImg, RoomCategoryHolder } from "../Shared/RoomsView/style";

const RoomViewPremium = () => {
  return (
    <>
      <RoomCategoryHolder>
        <RoomImg color={"../images/slideRoomFour.jpg"} />
        <h3>Premium Room</h3>
        <p>
          Stretch out in our 45 to 50 sqm huge rooms where the indulgence of
          extra living space creates an airy and relaxing ambience
        </p>
        <PrimaryBtn>Book now</PrimaryBtn>
      </RoomCategoryHolder>
    </>
  );
};

export default RoomViewPremium;
