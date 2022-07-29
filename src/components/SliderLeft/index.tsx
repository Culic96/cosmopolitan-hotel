import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import PrimaryBtn from "../Shared/PrimaryBtn";
import { Arrow, ArrowHolder, Divider, GeneralInfo, Slider, SliderHolder } from "./style";

const SliderLeft: FC = (children: any) => {
    return (
        <>
            <Divider>
                <SliderHolder>
                    <Slider>
                    </Slider>
                    <ArrowHolder>
                        <Arrow><FontAwesomeIcon icon={faArrowLeft} /></Arrow>
                        <p>1</p><span>/</span><p>4</p>
                        <Arrow><FontAwesomeIcon icon={faArrowRight} /></Arrow>
                    </ArrowHolder>
                </SliderHolder>
                <GeneralInfo>
                    <h1>Dining</h1>
                    <p>Our venues variety ensures that guests can spend a relaxing time whilst browsing the web, finalizing a business deal with partners or enjoying family time. From Starbucks (TM) favourite products at Americano Cafe & Lounge, a rich buffet at Gardenia Brasserie or shisha at Pacifico Terrace to having a romantic dinner in the comfort of your room, you will find your favourite place to enjoy our Chefs specialities.</p>
                    <PrimaryBtn>Explore Dining</PrimaryBtn>
                </GeneralInfo>
            </Divider>
        </>
    )
}


export default SliderLeft;