import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HeaderAboutUs from "./HeaderAboutUs";
import AboutUsSection from "./AboutSection";
import WhatWeOffer from "./WhatWeOffer";
import Roadmap from "./RoadMap";
import Founder from "./Founder";
import Ourteam from "./OurTeam";
import Reels from "./Reels";
import JoinOurTeam from "./JoinOurTeam";

const AboutUs = () => {
  return (
    <>
      {" "}
      <body className=" position-relative">
        <div className=" position-fixed w-100 z-3">
          <NavBar />
        </div>
      </body>
      <HeaderAboutUs />
      <AboutUsSection />
      <WhatWeOffer />
      <Roadmap />
      <Founder />
      <Ourteam />
      {/* <Reels /> */}
      {/* <JoinOurTeam /> */}
      <Footer />
    </>
  );
};

export default AboutUs;
