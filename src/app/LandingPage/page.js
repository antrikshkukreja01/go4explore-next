import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import LandingPageHeader from "./LandingPageHeader";
import HandPicked from "./HandPicked";
import BestDeals from "./BestDeals";
import SpitiTripPackages from "./SpitiTripPackages";
import FaqSpiti from "./FaqSpiti";
import Reviews from "./Reviews";
import TravelWithUs from "./TravelWithUs";

const LandingPage = () => {
  return (
    <>
      {" "}
      <body className=" position-relative">
        <div className=" position-fixed w-100 z-3">
          <NavBar />
        </div>
      </body>
      <LandingPageHeader />
      <HandPicked />
      <BestDeals />
      <SpitiTripPackages />
      <FaqSpiti />
      <Reviews />
      <SpitiTripPackages />
      <TravelWithUs />
      <Footer />
    </>
  );
};

export default LandingPage;
