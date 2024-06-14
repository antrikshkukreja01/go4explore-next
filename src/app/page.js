import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Packages from "@/components/Packages";
import HottestDestination from "@/components/HottestDestination";
import GroupTrips from "@/components/GroupTrips";
import Bali from "@/components/Bali";
import HaveDoubt from "@/components/HaveDoubt";
import Collaborated from "@/components/Collabrated";
import StressFreePlanes from "@/components/StressFreePlanes";
import Reviews from "@/components/Reviews";
import Blogs from "@/components/Blogs";
import TravelWithUs from "@/components/TravelWithUs";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      {" "}
      <body className=" position-relative">
        <div className=" position-fixed w-100 z-3">
          <NavBar />
        </div>
      </body>
      <Header />
      <Packages />
      <HottestDestination />
      <GroupTrips />
      <Bali />
      <HaveDoubt />
      <Collaborated />
      <StressFreePlanes />
      <Reviews />
      <Blogs />
      <TravelWithUs />
      <Footer />
    </>
  );
};

export default page;
