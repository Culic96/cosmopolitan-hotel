import React from "react";
import { AboutBackground, AboutHeading, AboutText, AboutWrapper } from "./style";

const About = () => {

    return (
        <>
            <AboutHeading >
                <h1 id="About">About US</h1>
            </AboutHeading>
            <AboutWrapper>
                <AboutBackground />
                <AboutText>
                    <h1>Welcome to Grand Cosmopolitan Hotel - Dubai</h1>
                    <h3>A hotel you will remember in a city you will never forget</h3>
                    <p>Located in Al Barsha area, the centre of Dubai with various commercial and leisure hubs,
                        the hotel is easily accessible from Sheikh Zayed Road. It is just 100 meters away from Mashreq metro station and within walking distance from the Mall of Emirates. Both International Airports and Expo 2021 site are 30 minutes away. Burj Khalifa and Dubai World Trade Centre are a short 15 minutes’ drive and easily accessible by metro.
                        Jumeirah Beachfront, Burj Al Arab, Palm Jumeirah, Dubai Marina, Internet City, Media City and Jebel Ali area are just 10 to 15 minutes away.</p>
                </AboutText>
            </AboutWrapper>

        </>
    )
}

export default About;