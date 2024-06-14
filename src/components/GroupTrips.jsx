"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import img1 from "../assets/img/webp/ProductPhoto.webp";
import star_emoji from "../assets/img/png/star_emoji.png";
import Image from "next/image";

const GroupTrips = () => {
  const [activeMonth, setActiveMonth] = useState(null);

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

  const handleMonthClick = (month) => {
    setActiveMonth(month); // Set active month
  };

  return (
    <>
      <section id="grouptrips" className="py-5">
        <div className="container">
          <p className="font_poppins mb-4 mb-sm-5 fs_xl fw-semibold text-capitalize text-black text-center">
            Upcoming Group Trips For You{" "}
            <Image
              width={30}
              className=" w_30"
              src={star_emoji}
              alt="star_emoji"
            />
          </p>

          {/* Month Selector */}
          <div className="d-flex pb-3 align-items-center gap-2 gap-sm-4 justify-content-lg-center  mb-5 overflow_scroll">
            {[
              "June 2024",
              "July 2024",
              "Aug 2024",
              "Sept 2024",
              "Oct 2024",
              "Nov 2024",
            ].map((month) => (
              <button
                className={`trip_btn fs_xsm fw-semibold white_space ${
                  activeMonth === month ? "active" : ""
                }`}
                href="#"
                onClick={() => handleMonthClick(month)}
                style={{
                  backgroundColor:
                    activeMonth === month ? "#f4f6fc" : "transparent",
                  borderColor: activeMonth === month ? "#2755b0" : "#000",
                  color: activeMonth === month ? "#2755b0" : "#000",
                }}
              >
                {month}
              </button>
            ))}
          </div>

          <Slider {...settings}>
            <div className="d-flex flex-column px-3 px-sm-4">
              <div className=" position-relative mb-3">
                <Image
                  className="rounded-4  w-100 "
                  src={img1}
                  height={300}
                  alt="img"
                />
                <span className=" bg_yellow rounded-3 position-absolute text-black translate-middle fw-normal fs_xsm font_poppins px-2 py-1 top-100 start-50">
                  5 Nights 6 Days
                </span>
              </div>
              <h2 className="mt-3 mb-2 text-capitalize font_poppins text-black fw-medium fs_md">
                Leh Ladakh with Turtuk - Backpacking & Bike Trip
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
                  className="rounded-4  w-100 "
                  src={img1}
                  height={300}
                  alt="img"
                />
                <span className=" bg_yellow rounded-3 position-absolute text-black translate-middle fw-normal fs_xsm font_poppins px-2 py-1 top-100 start-50">
                  5 Nights 6 Days
                </span>
              </div>
              <h2 className="mt-3 mb-2 text-capitalize font_poppins text-black fw-medium fs_md">
                Leh Ladakh with Turtuk - Backpacking & Bike Trip
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
                  eImage
                  className="rounded-4  w-100 "
                  src={img1}
                  height={300}
                  alt="img"
                />
                <span className=" bg_yellow rounded-3 position-absolute text-black translate-middle fw-normal fs_xsm font_poppins px-2 py-1 top-100 start-50">
                  5 Nights 6 Days
                </span>
              </div>
              <h2 className="mt-3 mb-2 text-capitalize font_poppins text-black fw-medium fs_md">
                Leh Ladakh with Turtuk - Backpacking & Bike Trip
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
                  eImage
                  className="rounded-4  w-100 "
                  src={img1}
                  height={300}
                  alt="img"
                />
                <span className=" bg_yellow rounded-3 position-absolute text-black translate-middle fw-normal fs_xsm font_poppins px-2 py-1 top-100 start-50">
                  5 Nights 6 Days
                </span>
              </div>
              <h2 className="mt-3 mb-2 text-capitalize font_poppins text-black fw-medium fs_md">
                Leh Ladakh with Turtuk - Backpacking & Bike Trip
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

export default GroupTrips;
