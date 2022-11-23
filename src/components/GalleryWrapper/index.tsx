import { GalleryWrapperDiv, ImageDisplay, ImageDisplayHolder } from "./style";
import { useState, useEffect } from "react";
const GalleryWrapper = () => {
    const [images, setImages]: any = useState([]);

    const fetchImages = async () => {
        const response = await fetch("https://api.unsplash.com/photos?client_id=QWAuHh5giJkImFGYnM9Akm9DPEnDSXPBd1hPyMgsEYs");
        const data = await response.json();
        setImages(data);
        // console.log("this is data", data);
    }

    useEffect(() => {
        fetchImages();
    },[])

    return (
        <>
        <GalleryWrapperDiv>
            {images.map((image: any, idx: number) => {
                console.log(image)
                return (
                  <ImageDisplayHolder ><ImageDisplay key={idx} props={image.urls.full}></ImageDisplay></ImageDisplayHolder>
                )
            })}
        </GalleryWrapperDiv>
        </>
    )
}

export default GalleryWrapper;