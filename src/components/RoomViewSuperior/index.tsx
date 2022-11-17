import { PrimaryBtn } from "../Shared/PrimaryBtn/style";
import { RoomImg, RoomCategoryHolder } from "../Shared/RoomsView/style";

const RoomViewSuperior = () => {
  return (
    <>
      <RoomCategoryHolder>
        <RoomImg color={"../images/slideRoomOne.jpg"} />

        <h3>Superior room</h3>
        <p>
          Among the largest in the city, our modern and trendy 40 sqm rooms
          offer everything you need for a relaxing stay
        </p>
        <PrimaryBtn>Book now</PrimaryBtn>
      </RoomCategoryHolder>
    </>
  );
};

export default RoomViewSuperior;
