import SubHeading from "../components/SubHeading";
import SliderBig from "../components/SliderBig";
import Footer from "../components/Footer";
import RoomViewSuperior from "../components/RoomViewSuperior";
import RoomsViewPremium from "../components/RoomViewPremium";
import { Divider } from "../components/SliderRight/style";
import RoomViewFamily from "../components/RoomViewFamily";
import RoomViewExecutive from "../components/RoomViewExecutive";

const Rooms = () => (
    <>
        <SliderBig />
        <SubHeading />
        <Divider>
            <RoomViewSuperior />
            <RoomsViewPremium />
        </Divider>
        <Divider>
            <RoomViewFamily />
            <RoomViewExecutive />
        </Divider>
        <Footer />
    </>
)

export default Rooms;