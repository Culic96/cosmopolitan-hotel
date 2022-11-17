import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import { SliderDataTwo } from "../../sliderData/sliderDataTwo";
import { PrimaryBtn } from "../Shared/PrimaryBtn/style";
import { Arrow, ArrowHolder, Divider, GeneralInfo, Slider, SliderHolder } from "./style";

const SliderLeft: FC = (slides: any) => {
    const SliderData = SliderDataTwo.length;
    const [current, setCurrent] = useState(0);
    const length = SliderData;

    const nextSlide = () => {
        setCurrent((current + 1) % length);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }
    return (
        <>
            <Divider>
                <SliderHolder>
                    {SliderDataTwo.map((slide, idx) => {
                        console.log("This is index", idx);
                        const id = slide.id;
                        return (
                            <Slider>
                                {id === current &&
                                    <img alt="haha" src={slide.Image} />
                                }
                            </Slider>
                        )
                    }
                    )}
                    <ArrowHolder>
                        <Arrow onClick={prevSlide}><FontAwesomeIcon icon={faArrowLeft} /></Arrow>
                        <p>{current + 1}</p><span>/</span><p>{length}</p>
                        <Arrow onClick={nextSlide}><FontAwesomeIcon icon={faArrowRight} /></Arrow>
                    </ArrowHolder>
                </SliderHolder>
                <GeneralInfo>
                    <h1>Dining</h1>
                    <p>Our venues variety ensures that guests can spend a relaxing time whilst browsing the web, finalizing a business deal with partners or enjoying family time. From Starbucks (TM) favourite products at Americano Cafe & Lounge, a rich buffet at Gardenia Brasserie or shisha at Pacifico Terrace to having a romantic dinner in the comfort of your room, you will find your favourite place to enjoy our Chefs specialities.</p>
                    <a href="/dining"><PrimaryBtn>Explore Dining</PrimaryBtn></a>
                </GeneralInfo>
            </Divider>
        </>
    )
}


export default SliderLeft;