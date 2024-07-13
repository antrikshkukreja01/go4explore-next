"use client";
import React from "react";
import bike from "../assets/img/webp/bike.webp";
import plane from "../assets/img/webp/plane.webp";
import van from "../assets/img/webp/tripvan.webp";
import resttable from "../assets/img/webp/resttable.webp";
import handshake from "../assets/img/webp/handshake.webp";
import trekking from "../assets/img/webp/travleing.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const WhatWeOffer = () => {
  var settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          arrows: false,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          arrows: false,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <>
      <section className=" py-4 py-sm-5">
        <div className=" container w-75">
          <div className=" d-flex align-items-center justify-content-center mb-5 w-100">
            <h2 className=" font_poppins text-black fw-bold fs_xl mb-0 ">
              Here Is What We Offer
            </h2>
          </div>
          <div className=" row d-none d-lg-flex">
            <div className="mt-4 mt-lg-0 col-6 col-sm-3 col-lg-2  ">
              <a
                className=" text-decoration-none d-flex align-items-center justify-content-center flex-column"
                href="#"
              >
                <div className="packages_circle d-flex align-items-center justify-content-center">
                  <Image width={90} src={van} alt="van" />
                </div>
                <p className="mb-0 font_poppins fs_sm fw-semibold mt-3 text-black text-center">
                  Fixed-
                  <br /> Departures
                </p>
              </a>
            </div>
            <div className="mt-4 mt-lg-0 col-6 col-sm-3 col-lg-2  ">
              <a
                className=" text-decoration-none d-flex align-items-center justify-content-center flex-column"
                href="#"
              >
                <div className="packages_circle d-flex align-items-center justify-content-center">
                  <Image width={90} src={resttable} alt="resttable" />
                </div>
                <p className="mb-0 font_poppins fs_sm fw-semibold mt-3 text-black text-center">
                  Customized
                  <br /> Packages
                </p>
              </a>
            </div>
            <div className="mt-4 mt-lg-0 col-6 col-sm-3 col-lg-2  ">
              <a
                className=" text-decoration-none d-flex align-items-center justify-content-center flex-column"
                href="#"
              >
                <div className="packages_circle d-flex align-items-center justify-content-center">
                  <Image width={90} src={plane} alt="plane" />
                </div>
                <p className="mb-0 font_poppins fs_sm fw-semibold mt-3 text-black text-center">
                  International
                  <br /> Trips
                </p>
              </a>
            </div>
            <div className="mt-4 mt-lg-0 col-6 col-sm-3 col-lg-2  ">
              <a
                className=" text-decoration-none d-flex align-items-center justify-content-center flex-column"
                href="#"
              >
                <div className="packages_circle d-flex align-items-center justify-content-center">
                  <Image width={90} src={trekking} alt="trekking" />
                </div>
                <p className="mb-0 font_poppins fs_sm fw-semibold mt-3 text-black text-center">
                  Trekking
                </p>
              </a>
            </div>
            <div className="mt-4 mt-lg-0 col-6 col-sm-3 col-lg-2  ">
              <a
                className=" text-decoration-none d-flex align-items-center justify-content-center flex-column"
                href="#"
              >
                <div className="packages_circle d-flex align-items-center justify-content-center">
                  <Image width={90} src={bike} alt="bike" />
                </div>
                <p className="mb-0 font_poppins fs_sm fw-semibold mt-3 text-black text-center">
                  Bike Trips
                </p>
              </a>
            </div>
            <div className="mt-4 mt-lg-0 col-6 col-sm-3 col-lg-2  ">
              <a
                className=" text-decoration-none d-flex align-items-center justify-content-center flex-column"
                href="#"
              >
                <div className="packages_circle d-flex align-items-center justify-content-center">
                  <Image width={90} src={handshake} alt="handshake" />
                </div>
                <p className="mb-0 font_poppins fs_sm fw-semibold mt-3 text-black text-center">
                  Corporate
                  <br /> Trips
                </p>
              </a>
            </div>
          </div>
          <Slider className=" d-lg-none" {...settings}>
            <a
              className=" text-decoration-none d-flex align-items-center justify-content-center flex-column"
              href="#"
            >
              <div className="packages_circle d-flex align-items-center justify-content-center">
                <Image width={50} src={van} alt="van" />
              </div>
              <p className="mb-0 font_poppins fs_sm fw-semibold mt-3 text-black text-center">
                Fixed-
                <br /> Departures
              </p>
            </a>
            <a
              className=" text-decoration-none d-flex align-items-center justify-content-center flex-column"
              href="#"
            >
              <div className="packages_circle d-flex align-items-center justify-content-center">
                <Image width={50} src={resttable} alt="resttable" />
              </div>
              <p className="mb-0 font_poppins fs_sm fw-semibold mt-3 text-black text-center">
                Customized
                <br /> Packages
              </p>
            </a>{" "}
            <a
              className=" text-decoration-none d-flex align-items-center justify-content-center flex-column"
              href="#"
            >
              <div className="packages_circle d-flex align-items-center justify-content-center">
                <Image width={50} src={plane} alt="plane" />
              </div>
              <p className="mb-0 font_poppins fs_sm fw-semibold mt-3 text-black text-center">
                International
                <br /> Trips
              </p>
            </a>{" "}
            <a
              className=" text-decoration-none d-flex align-items-center justify-content-center flex-column"
              href="#"
            >
              <div className="packages_circle d-flex align-items-center justify-content-center">
                <Image width={50} src={trekking} alt="trekking" />
              </div>
              <p className="mb-0 font_poppins fs_sm fw-semibold mt-3 text-black text-center">
                Trekking
              </p>
            </a>
            <a
              className=" text-decoration-none d-flex align-items-center justify-content-center flex-column"
              href="#"
            >
              <div className="packages_circle d-flex align-items-center justify-content-center">
                <Image width={50} src={bike} alt="bike" />
              </div>
              <p className="mb-0 font_poppins fs_sm fw-semibold mt-3 text-black text-center">
                Bike Trips
              </p>
            </a>{" "}
            <a
              className=" text-decoration-none d-flex align-items-center justify-content-center flex-column"
              href="#"
            >
              <div className="packages_circle d-flex align-items-center justify-content-center">
                <Image width={50} src={handshake} alt="handshake" />
              </div>
              <p className="mb-0 font_poppins fs_sm fw-semibold mt-3 text-black text-center">
                Corporate
                <br /> Trips
              </p>
            </a>
          </Slider>{" "}
        </div>{" "}
      </section>
    </>
  );
};

export default WhatWeOffer;
