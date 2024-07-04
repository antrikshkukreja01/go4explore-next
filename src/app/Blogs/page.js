import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BlogsSection from "@/components/BlogsSection";
import RelatedPackages from "./RelatedPackages";
import RelatedBlogs from "./RelatedBlogs";

const Bloges = () => {
  return (
    <>
      {" "}
      <body className=" position-relative">
        <div className=" position-fixed w-100 z-3">
          <NavBar />
        </div>
      </body>
      <BlogsSection />
      <RelatedPackages />
      <RelatedBlogs />
      <Footer />
    </>
  );
};

export default Bloges;
