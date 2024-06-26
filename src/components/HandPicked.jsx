"use client";
import React from "react";
import img1 from "../assets/img/webp/ProductPhoto.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import star from "../assets/img/png/stars.png";
import Image from "next/image";

const HandPicked = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: "20px , 40px ",
        },
      },
    ],
  };
  return (
    <>
      <section className=" py-4 py-sm-5">
        <div className=" container">
          <div className=" d-flex align-items-center justify-content-center w-100">
            <h2 className=" font_poppins text-black fw-bold fs_xl mb-0 ">
              <span className=" clr_blue">Handpicked</span> By Our Experts
              <Image width={30} className=" ms-2 mb-1 " src={star} alt="star" />
            </h2>
          </div>
          <Slider className="mt-5" {...settings}>
            <div className="d-flex flex-column px-3 px-sm-4">
              <div className=" position-relative mb-3">
                <Image
                  className="rounded-4 h_300 w-100 "
                  src={img1}
                  alt="img"
                />
                <span className=" bg_yellow rounded-3 position-absolute text-black translate-middle fw-normal fs_xsm font_poppins px-2 py-1 top-100 start-50">
                  5 Nights 6 Days
                </span>
              </div>
              <h2 className="mt-3 mb-2 text-capitalize font_poppins text-black fw-medium fs_md">
                Spiti Valley Full-Circuit with Manali stay - Backpacking Trip
              </h2>
              <div className="d-flex align-items-xl-center  justify-content-between justify-content-sm-start  gap-1 gap-sm-3">
                <p className="mb-0 text-decoration-line-through clr_gray fs-md fw-normal">
                  ₹ 25,000
                </p>
                <p className="mb-0 text-black fs-md fw-semibold">
                  ₹ 20,000 per person
                </p>
              </div>
              <div className="d-flex flex-column flex-sm-row align-items-center flex-xl-column flex-xxl-row gap-2 mt-3">
                <a
                  className="tripDetail_btn white_space fs_xsm fw-medium text-center w-100 text-decoration-none"
                  href="#"
                >
                  Trip Details
                </a>
                <a
                  className="white_space callback_btn fs_xsm fw-medium w-100 text-center text-decoration-none"
                  href="#"
                >
                  Request Callback
                </a>
              </div>
            </div>
            <div className="d-flex flex-column px-3 px-sm-4">
              <div className=" position-relative mb-3">
                <Image
                  className="rounded-4 h_300 w-100 "
                  src={img1}
                  alt="img"
                />
                <span className=" bg_yellow rounded-3 position-absolute text-black translate-middle fw-normal fs_xsm font_poppins px-2 py-1 top-100 start-50">
                  5 Nights 6 Days
                </span>
              </div>
              <h2 className="mt-3 mb-2 text-capitalize font_poppins text-black fw-medium fs_md">
                Spiti Valley Full-Circuit with Manali stay - Backpacking Trip
              </h2>
              <div className="d-flex align-items-xl-center  justify-content-between justify-content-sm-start  gap-1 gap-sm-3">
                <p className="mb-0 text-decoration-line-through clr_gray fs-md fw-normal">
                  ₹ 25,000
                </p>
                <p className="mb-0 text-black fs-md fw-semibold">
                  ₹ 20,000 per person
                </p>
              </div>
              <div className="d-flex flex-column flex-sm-row align-items-center flex-xl-column flex-xxl-row gap-2 mt-3">
                <a
                  className="tripDetail_btn white_space fs_xsm fw-medium text-center w-100 text-decoration-none"
                  href="#"
                >
                  Trip Details
                </a>
                <a
                  className="white_space callback_btn fs_xsm fw-medium w-100 text-center text-decoration-none"
                  href="#"
                >
                  Request Callback
                </a>
              </div>
            </div>
            <div className="d-flex flex-column px-3 px-sm-4">
              <div className=" position-relative mb-3">
                <Image
                  className="rounded-4 h_300 w-100 "
                  src={img1}
                  alt="img"
                />
                <span className=" bg_yellow rounded-3 position-absolute text-black translate-middle fw-normal fs_xsm font_poppins px-2 py-1 top-100 start-50">
                  5 Nights 6 Days
                </span>
              </div>
              <h2 className="mt-3 mb-2 text-capitalize font_poppins text-black fw-medium fs_md">
                Spiti Valley Full-Circuit with Manali stay - Backpacking Trip
              </h2>
              <div className="d-flex align-items-xl-center  justify-content-between justify-content-sm-start  gap-1 gap-sm-3">
                <p className="mb-0 text-decoration-line-through clr_gray fs-md fw-normal">
                  ₹ 25,000
                </p>
                <p className="mb-0 text-black fs-md fw-semibold">
                  ₹ 20,000 per person
                </p>
              </div>
              <div className="d-flex flex-column flex-sm-row align-items-center flex-xl-column flex-xxl-row gap-2 mt-3">
                <a
                  className="tripDetail_btn white_space fs_xsm fw-medium text-center w-100 text-decoration-none"
                  href="#"
                >
                  Trip Details
                </a>
                <a
                  className="white_space callback_btn fs_xsm fw-medium w-100 text-center text-decoration-none"
                  href="#"
                >
                  Request Callback
                </a>
              </div>
            </div>
            <div className="d-flex flex-column px-3 px-sm-4">
              <div className=" position-relative mb-3">
                <Image
                  className="rounded-4 h_300 w-100 "
                  src={img1}
                  alt="img"
                />
                <span className=" bg_yellow rounded-3 position-absolute text-black translate-middle fw-normal fs_xsm font_poppins px-2 py-1 top-100 start-50">
                  5 Nights 6 Days
                </span>
              </div>
              <h2 className="mt-3 mb-2 text-capitalize font_poppins text-black fw-medium fs_md">
                Spiti Valley Full-Circuit with Manali stay - Backpacking Trip
              </h2>
              <div className="d-flex align-items-xl-center  justify-content-between justify-content-sm-start  gap-1 gap-sm-3">
                <p className="mb-0 text-decoration-line-through clr_gray fs-md fw-normal">
                  ₹ 25,000
                </p>
                <p className="mb-0 text-black fs-md fw-semibold">
                  ₹ 20,000 per person
                </p>
              </div>
              <div className="d-flex flex-column flex-sm-row align-items-center flex-xl-column flex-xxl-row gap-2 mt-3">
                <a
                  className="tripDetail_btn white_space fs_xsm fw-medium text-center w-100 text-decoration-none"
                  href="#"
                >
                  Trip Details
                </a>
                <a
                  className="white_space callback_btn fs_xsm fw-medium w-100 text-center text-decoration-none"
                  href="#"
                >
                  Request Callback
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default HandPicked;
