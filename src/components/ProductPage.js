import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackToTop from "./BackToTop";
import NavBar from "@/components/NavBar";

import Footer from "@/components/Footer";
import ProductPageHeader from "./ProductPageHeader";
import StartingPrice from "./StartingPrice";
import RelatedTrips from "./RelatedTrips";

const page = () => {
  return (
    <>
      {" "}
      <BackToTop />
      <NavBar />
      <ProductPageHeader />
      <StartingPrice />
      <RelatedTrips />
      <Footer />
    </>
  );
};

export default page;
