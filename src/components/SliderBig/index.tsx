import { useEffect, useState } from "react";
import { SliderDataOne } from "../../sliderData/sliderDataOne";
import { LogoHolder, NavHolder, NavLinks } from "../Navigation/style";
import { SliderHead, SliderWrapper } from "./style";
import ScrollTo from "react-scroll-into-view"



const SliderBig = (children: any) => {
    const length = SliderDataOne.length;
    const [current, setCurrent] = useState(0);
    const nextSlide = () => {
        setCurrent((current + 1) % length);
    }

    setTimeout(() => {
        nextSlide();
    }, 6000)

    useEffect(() => {

        console.log("re-rendered!")
    }, [])
    return (
        <>
            <SliderWrapper>
                <NavHolder>
                    <LogoHolder >
                        <a href='/'><img src="/images/logo.png" alt='logo' /></a>
                    </LogoHolder>
                    <NavLinks>
                        <a href="/">Home</a>
                        <a href='/Rooms'>Rooms</a>
                        <a href='/Dining'>Dining</a>
                        <a href='/Gallery'>Gallery</a>
                        <ScrollTo selector="#Footer"><a>Contact</a></ScrollTo>
                    </NavLinks>
                </NavHolder>
                {SliderDataOne.map((slide, idx) => {
                    const id = idx;
                    return (
                        <SliderHead key={idx}>
                            {id === current &&
                                <img key={id} alt="haha" src={slide.Image} />

                            }
                        </SliderHead>
                    )
                })}

            </SliderWrapper>
        </>
    )

}


export default SliderBig;