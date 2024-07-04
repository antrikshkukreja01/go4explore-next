import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import UpcomingTrips from "./UpcomingTrips";
import Reviews from "@/components/Reviews";
import TravelWithUs from "@/components/TravelWithUs";

const Upcoming = () => {
  return (
    <>
      {" "}
      <body className=" position-relative">
        <div className=" position-fixed w-100 z-3">
          <NavBar />
        </div>
      </body>
      <UpcomingTrips />
      <Reviews />
      <TravelWithUs />
      <Footer />
    </>
  );
};

export default Upcoming;
