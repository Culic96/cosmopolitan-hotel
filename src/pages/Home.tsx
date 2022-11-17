import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import About from "../components/About";
import SliderRight from "../components/SliderRight";
import SliderLeft from "../components/SliderLeft";
import LocalAtractions from "../components/LocalAtractions";

const Home = () => {
  return (
    <>
      <Navigation />
      <About />
      <SliderRight />
      <SliderLeft />
      <LocalAtractions />
      <Footer />
    </>
  );
};

export default Home;
