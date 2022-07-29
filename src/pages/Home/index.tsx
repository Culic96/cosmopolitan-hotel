import { AboutWrapper, AboutBackground, AboutText, AboutHeading, Divider, Slider, GeneralInfo, ArrowHolder, SliderHolder, Arrow, LocalAtractions, LocalInfo } from './style';
import "./style.tsx";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Navigation from '../../components/Navigation';
import PrimaryBtn from '../../components/Shared/PrimaryBtn';
import { FC } from "react";
const Home: FC = () => {

    return (
        <>
            <Navigation />
            <AboutHeading>
                <h1>About US</h1>
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
            <Divider>
                <SliderHolder>
                    <Slider>
                    </Slider>
                    <ArrowHolder>
                        <Arrow><FontAwesomeIcon icon={faArrowLeft} /></Arrow>
                        <p>1</p><span>/</span><p>4</p>
                        <Arrow><FontAwesomeIcon icon={faArrowRight} /></Arrow>
                    </ArrowHolder>
                </SliderHolder>
                <GeneralInfo>
                    <h1>Dining</h1>
                    <p>Our venues variety ensures that guests can spend a relaxing time whilst browsing the web, finalizing a business deal with partners or enjoying family time. From Starbucks (TM) favourite products at Americano Cafe & Lounge, a rich buffet at Gardenia Brasserie or shisha at Pacifico Terrace to having a romantic dinner in the comfort of your room, you will find your favourite place to enjoy our Chefs specialities.</p>
                    <PrimaryBtn>Explore Dining</PrimaryBtn>
                </GeneralInfo>
            </Divider>
            <LocalAtractions>
                <LocalInfo>
                    <h3>Local attractions</h3>
                    <p >We are just 100 meters away from Mashreq metro station and within walking distance from the Mall of Emirates.</p>
                </LocalInfo>
            </LocalAtractions>
            <Footer />
        </>
    )
}

export default Home;

