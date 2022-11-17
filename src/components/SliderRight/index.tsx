import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { PrimaryBtn } from "../Shared/PrimaryBtn/style";
import { Arrow, ArrowHolder, Divider, GeneralInfo, Slider, SliderHolder } from "./style";
import { SliderDataOne } from "../../sliderData/sliderDataOne";
const SliderRight = (slides: any) => {
    const SliderData = SliderDataOne.length;
    const [current, setCurrent] = useState(0);
    const length = SliderData;
    console.log("Lenght", length);

    const nextSlide = () => {
        setCurrent((current + 1) % length);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    console.log("Current", current);


    return (
        <>
            <Divider>
                <GeneralInfo>
                    <h1>Rooms & Suites</h1>
                    <p>Grand Cosmopolitan Hotel is home to 235 luxurious rooms including 45 suites, ranging from 40 to 140 sqm. Relax on plush Cosmo beds topped with luxury linens, or get creative with our generous workspaces. Enjoy a soothing bath or get energized in the walk-in shower to start your day. Design of the rooms, furniture and floor-to-ceiling windows provide the perfect mix of comfort and relaxation.</p>
                    <a href="/rooms"><PrimaryBtn>View Rooms</PrimaryBtn></a>
                </GeneralInfo>
                <SliderHolder>
                    {SliderDataOne.map((slide, idx) => {
                        console.log("This is index", idx);
                        const id = idx;
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
            </Divider>

        </>
    )
}

export default SliderRight;