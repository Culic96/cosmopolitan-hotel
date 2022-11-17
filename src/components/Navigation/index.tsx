import { BackgroundContent, LogoHolder, NavHolder, NavLinks, WrapperImage } from "./style";
import { FC } from "react";
import { PrimaryBtn } from "../Shared/PrimaryBtn/style";
import ScrollTo from "react-scroll-into-view"
const Navigation: FC = () => {
    return (
        <>
            <WrapperImage>
                <NavHolder>
                    <LogoHolder >
                        <a href='/'><img src="/images/logo.png" alt='logo' /></a>
                    </LogoHolder>
                    <NavLinks>
                        <a href="/">Home</a>
                        <ScrollTo selector="#About"><a >About</a></ScrollTo>
                        <a href='/Rooms'>Rooms</a>
                        <a href='/Dining'>Dining</a>
                        <a href='/Gallery'>Gallery</a>
                        <ScrollTo selector="#Footer"><a>Contact</a></ScrollTo>
                    </NavLinks>
                </NavHolder>
                <BackgroundContent>
                    <h1>Cosmopolitan Hotel Dubai</h1>
                    <h3>An masterpiece in the hearth of Dubai</h3>
                    <PrimaryBtn>Book Now</PrimaryBtn>
                </BackgroundContent>
            </WrapperImage>
        </>
    )
}

export default Navigation;