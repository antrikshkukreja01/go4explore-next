"use client";
import React from "react";
import logo1 from "../assets/img/webp/DESKERLogo.webp";
import logo2 from "../assets/img/webp/logowhoopershostel.webp";
import logo3 from "../assets/img/webp/garagesocietylogo.webp";
import logo4 from "../assets/img/webp/gostopsfooterlogo.webp";
import logo5 from "../assets/img/webp/startupindialogo.webp";
import logo6 from "../assets/img/webp/nepaltourismboard.webp";
import logo7 from "../assets/img/webp/nidhiuplogo.webp";
import logo8 from "../assets/img/webp/gujarattourismlogo.webp";
import logo9 from "../assets/img/webp/India.webp";
import logo10 from "../assets/img/webp/j&ktourims.webp";
import logo11 from "../assets/img/webp/delhi_tourism.webp";
import logo12 from "../assets/img/webp/manipurtourismlogo.webp";
import logo13 from "../assets/img/webp/msme.webp";
import logo14 from "../assets/img/webp/mptourismlogo.webp";
import logo15 from "../assets/img/webp/decathlon.webp";
import logo16 from "../assets/img/webp/hostler.webp";
import thumb_up from "../assets/img/png/thumb-up.png";
import Image from "next/image";

const Collaborated = () => {
  return (
    <section className=" py-4 py-sm-5  overflow-hidden  d-flex flex-column justify-content-center ">
      <div className=" container">
        <p className="font_poppins fs_xl mb-0 fw-semibold d text-capitalize text-black text-center">
          Proudly Collaborated & Recognized{" "}
          <Image width={40} className="  mb-2" src={thumb_up} alt="thumb_up" />
        </p>
        <div className="marquee mt-4 ">
          <div className="marquee__group">
            <div className=" pointer">
              <Image width={130} src={logo1} alt="top" />
            </div>
            <div className=" pointer">
              <Image width={130} src={logo2} alt="top" />
            </div>
            <div className=" pointer">
              <Image width={130} src={logo3} alt="top" />
            </div>
            <div className=" pointer">
              <Image width={130} src={logo4} alt="top" />
            </div>
            <div className=" pointer">
              <Image width={130} src={logo5} alt="top" />
            </div>
            <div className=" pointer">
              <Image width={130} src={logo6} alt="top" />
            </div>
            <div className=" pointer">
              <Image width={130} src={logo7} alt="top" />
            </div>
            <div className=" pointer">
              <Image width={130} src={logo16} alt="top" />
            </div>
          </div>
          <div aria-hidden="true" className="marquee__group">
            <div className=" pointer">
              <Image width={130} src={logo1} alt="top" />
            </div>
            <div className=" pointer">
              <Image width={130} src={logo2} alt="top" />
            </div>
            <div className=" pointer">
              <Image width={130} src={logo3} alt="top" />
            </div>
            <div className=" pointer">
              <Image width={130} src={logo4} alt="top" />
            </div>
            <div className=" pointer">
              <Image width={130} src={logo5} alt="top" />
            </div>
            <div className=" pointer">
              <Image width={130} src={logo6} alt="top" />
            </div>
            <div className=" pointer">
              <Image width={130} src={logo7} alt="top" />
            </div>
            <div className=" pointer">
              <Image width={130} src={logo16} alt="top" />
            </div>
          </div>{" "}
        </div>
        <div className="marquee mt-4 mt-sm-5 ">
          <div className="marquee__group">
            <div className=" pointer">
              <Image width={130} src={logo8} alt="top" />
            </div>
            <div className=" pointer">
              <Image width={130} src={logo9} alt="top" />
            </div>
            <div className=" pointer">
              <Image width={130} src={logo10} alt="top" />
            </div>
            <div className=" pointer">
              <Image width={130} src={logo11} alt="top" />
            </div>
            <div className=" pointer">
              <Image width={130} src={logo12} alt="top" />
            </div>
            <div className=" pointer">
              <Image width={130} src={logo13} alt="top" />
            </div>
            <div className=" pointer">
              <Image width={130} src={logo14} alt="top" />
            </div>
            <div className=" pointer">
              <Image width={130} src={logo15} alt="top" />
            </div>
          </div>
          <div aria-hidden="true" className="marquee__group">
            <div className=" pointer">
              <Image width={130} src={logo8} alt="top" />
            </div>
            <div className=" pointer">
              <Image width={130} src={logo9} alt="top" />
            </div>
            <div className=" pointer">
              <Image width={130} src={logo10} alt="top" />
            </div>
            <div className=" pointer">
              <Image width={130} src={logo11} alt="top" />
            </div>
            <div className=" pointer">
              <Image width={130} src={logo12} alt="top" />
            </div>
            <div className=" pointer">
              <Image width={130} src={logo13} alt="top" />
            </div>
            <div className=" pointer">
              <Image width={130} src={logo14} alt="top" />
            </div>
            <div className=" pointer">
              <Image width={130} src={logo15} alt="top" />
            </div>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default Collaborated;
