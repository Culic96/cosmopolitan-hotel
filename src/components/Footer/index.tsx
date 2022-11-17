import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { faTwitter, faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FooterBody, FooterInfo, FooterLogo, Social, Underline } from "./style";
const Footer: FC = (children: any) => {
    return (
        <>
            <FooterBody>
                <Underline />
                <Social>
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faLinkedin} />
                </Social>
                <FooterInfo>
                    <FooterLogo />
                    <p id="Footer">Grand Cosmopolitan Hotel,<br></br>
                        P.O. Box 38250, Al Barsha 1,<br></br>
                        Dubai, UAE.<br></br>

                        Tel : +971 4 512 2222<br></br>
                        Fax : +971 4 512 2223<br></br>
                        Email: enquiries@dubaicosmopolitan.com</p>
                    <p>© 2021 Grand Cosmopolitan Hotel - Dubai</p>
                </FooterInfo>
            </FooterBody>
        </>
    )
}

export default Footer;