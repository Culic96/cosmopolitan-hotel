import { PrimaryBtn } from "../Shared/PrimaryBtn/style";
import { RoomImg, RoomCategoryHolder } from "../Shared/RoomsView/style";

const RoomViewExecutive = () => {
    return (
        <>
            <RoomCategoryHolder>
                <RoomImg color={"../images/slideRoomThree.jpg"} />

                <h3>Executive Room</h3>
                <p>
                    Stay in ultimate luxury in our 60 to 80 sqm suite with spectacular spacious layout offering additional comfort and privacy
                </p>
                <PrimaryBtn>Book now</PrimaryBtn>

            </RoomCategoryHolder>
        </>
    );
};

export default RoomViewExecutive;