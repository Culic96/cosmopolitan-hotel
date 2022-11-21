import { LogoHolder, NavHolder, NavLinks } from "../Navigation/style";
import { GalleryHeader } from "./style";
import ScrollTo from "react-scroll-into-view"


const GalleryBody = () => {
    return <>
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
        <GalleryHeader>
            <h1>Wellcome to our gallery</h1>
        </GalleryHeader>
    </>
}


export default GalleryBody;