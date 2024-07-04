import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackToTop from "../../components/BackToTop";
import NavBar from "@/components/NavBar";

import Footer from "@/components/Footer";
import ProductPageHeader from "@/components/ProductPageHeader";
import StartingPrice from "@/components/StartingPrice";
import RelatedTrips from "@/components/RelatedTrips";

const ProductPage = () => {
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

export default ProductPage;
