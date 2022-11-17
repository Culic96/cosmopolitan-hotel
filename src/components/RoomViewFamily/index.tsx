import { PrimaryBtn } from "../Shared/PrimaryBtn/style";
import { RoomCategoryHolder, RoomImg } from "../Shared/RoomsView/style";

const RoomViewFamily = () => {
  return (
    <>
      <RoomCategoryHolder>
        <RoomImg color={"../images/slideRoomTwo.jpg"} />
        <h3>Family Room</h3>
        <p>
          We want your visit to be as comfortable and affordable as it is fun.
          These unique 63 to 70 sqm rooms are designed for a family of 4 or 5
        </p>
        <PrimaryBtn>Book now</PrimaryBtn>
      </RoomCategoryHolder>
    </>
  );
};

export default RoomViewFamily;
