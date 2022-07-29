import React from "react";
import PrimaryBtn from "../Shared/PrimaryBtn";
import { BackgroundContent, LogoHolder, NavHolder, NavLinks, WrapperImage } from "./style";
import { FC } from "react";

const Navigation: FC = () => {
    return (
        <>
            <WrapperImage>
                <NavHolder>
                    <LogoHolder >
                        <a href='/'><img src="/images/logo.png" alt='logo'></img></a>
                    </LogoHolder>
                    <NavLinks>
                        <a href="/">Home</a>
                        <a href="/">About</a>
                        <a href='/Rooms'>Rooms</a>
                        <a href='/Dining'>Dining</a>
                        <a href='/Gallery'>Gallery</a>
                        <a href="/">Contact</a>
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