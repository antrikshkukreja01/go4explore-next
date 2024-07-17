import React from "react";
import LifeatGo4explore from "@/components/LifeatGo4explore";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Reels from "@/components/Reels";
import Jobs from "@/components/Jobs";

const page = () => {
  return (
    <>
      <body className=" position-relative">
        <div className=" position-fixed w-100 z-3">
          <NavBar />
        </div>
      </body>{" "}
      <LifeatGo4explore />
      <Reels />
      <Jobs />
      <Footer />
    </>
  );
};

export default page;
