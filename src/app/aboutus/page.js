import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HeaderAboutUs from "@/components/HeaderAboutUs";
import AboutUsSection from "@/components/AboutSection";
import WhatWeOffer from "@/components/WhatWeOffer";
import Roadmap from "@/components/RoadMap";
import Founder from "@/components/Founder";
import Ourteam from "@/components/OurTeam";
import Reels from "@/components/Reels";
import JoinOurTeam from "@/components/JoinOurTeam";
import LifeatGo4explore from "@/components/LifeatGo4explore";

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
      <Reels />
      <JoinOurTeam />
      <LifeatGo4explore />
      <Footer />
    </>
  );
};

export default AboutUs;
