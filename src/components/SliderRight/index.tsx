import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import PrimaryBtn from "../Shared/PrimaryBtn";
import { Arrow, ArrowHolder, Divider, GeneralInfo, Slider, SliderHolder } from "./style";

const SliderRight: FC = (children: any) => {
    return (
        <>
            <Divider>
                <GeneralInfo>
                    <h1>Rooms & Suites</h1>
                    <p>Grand Cosmopolitan Hotel is home to 235 luxurious rooms including 45 suites, ranging from 40 to 140 sqm. Relax on plush Cosmo beds topped with luxury linens, or get creative with our generous workspaces. Enjoy a soothing bath or get energized in the walk-in shower to start your day. Design of the rooms, furniture and floor-to-ceiling windows provide the perfect mix of comfort and relaxation.</p>
                    <PrimaryBtn>View Rooms</PrimaryBtn>
                </GeneralInfo>
                <SliderHolder>
                    <Slider>
                    </Slider>
                    <ArrowHolder>
                        <Arrow><FontAwesomeIcon icon={faArrowLeft} /></Arrow>
                        <p>1</p><span>/</span><p>4</p>
                        <Arrow><FontAwesomeIcon icon={faArrowRight} /></Arrow>
                    </ArrowHolder>
                </SliderHolder>
            </Divider>

        </>
    )
}

export default SliderRight;