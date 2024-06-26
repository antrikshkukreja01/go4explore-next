"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/img/webp/ProductPhoto.webp";
import star_emoji from "../assets/img/png/star_emoji.png";
import downarrow from "../assets/img/webp/down_img.webp";
import Image from "next/image";

const UpcomingTrips = () => {
  const [activeMonth, setActiveMonth] = useState(null);
  const [activeTab, setActiveTab] = useState(null);
  const [showviewMore, setShowviewMore] = useState(false);

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
  const handleTabClick = (Tab) => {
    setActiveTab(Tab); // Set active month
  };

  return (
    <>
      <section id="grouptrips" className="py-5">
        <div className=" container mt-5 pt-sm-5">
          <p className="font_poppins mb-4 mb-sm-5 fs_xl fw-semibold text-capitalize text-black text-center">
            Upcoming Group Trips For You{" "}
            <Image width={30} src={star_emoji} alt="star_emoji" />
          </p>
          {/* Month Selector */}
          <div className="d-flex pb-4 align-items-center gap-2 gap-sm-4 justify-content-lg-center  overflow_scroll">
            {[
              "All Trips",
              "June 2024",
              "July 2024",
              "Aug 2024",
              "Sept 2024",
              "Oct 2024",
              "Nov 2024",
            ].map((month) => (
              <a
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
              </a>
            ))}
          </div>
          <div className="d-flex pb-3 mt-3 mt-lg-0 align-items-center gap-2 gap-sm-4 justify-content-md-center   mb-5 overflow_scroll">
            {[
              "Short Duration Trips",
              "Long Duration Trips",
              "International Packages",
              "Treks",
            ].map((Tab) => (
              <a
                className={`trip_btn rounded-3 fs_xsm fw-semibold white_space ${
                  activeTab === Tab ? "active" : ""
                }`}
                href="#"
                onClick={() => handleTabClick(Tab)}
                style={{
                  backgroundColor:
                    activeTab === Tab ? "#f4f6fc" : "transparent",
                  borderColor: activeTab === Tab ? "#2755b0" : "#000",
                  color: activeTab === Tab ? "#2755b0" : "#000",
                }}
              >
                {Tab}
              </a>
            ))}
          </div>
          <Slider {...settings}>
            <div className="d-flex flex-column px-3 px-sm-4 h_480">
              <div className=" position-relative mb-3">
                <Image
                  className="rounded-4 h_300 w-100 "
                  src={img1}
                  alt="img"
                />
                <span className=" bg_yellow rounded-3 position-absolute text-black translate-middle fw-normal fs_xsm font_poppins px-2 py-1 top-100 start-50">
                  5 Nights 6 Days
                </span>
              </div>{" "}
              <div className=" d-flex flex-column h-100 justify-content-between ">
                <h2 className="mt-3 mb-2 text-capitalize font_poppins text-black fw-medium fs_sm">
                  Thailand Retreat - Phuket, Krabi & Pattaya
                </h2>
                <article>
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
                </article>
              </div>
            </div>
            <div className="d-flex flex-column px-3 px-sm-4 h_480">
              <div className=" position-relative mb-3">
                <Image
                  className="rounded-4 h_300 w-100 "
                  src={img1}
                  alt="img"
                />
                <span className=" bg_yellow rounded-3 position-absolute text-black translate-middle fw-normal fs_xsm font_poppins px-2 py-1 top-100 start-50">
                  6 Nights 7 Days
                </span>
              </div>{" "}
              <div className=" d-flex flex-column h-100 justify-content-between ">
                <h2 className="mt-3 mb-2 text-capitalize font_poppins text-black fw-medium fs_sm">
                  Spiti Valley Full-Circuit From Shimla - Backpacking Trip
                </h2>
                <article>
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
                </article>
              </div>
            </div>
            <div className="d-flex flex-column px-3 px-sm-4 h_480">
              <div className=" position-relative mb-3">
                <Image
                  className="rounded-4 h_300 w-100 "
                  src={img1}
                  alt="img"
                />
                <span className=" bg_yellow rounded-3 position-absolute text-black translate-middle fw-normal fs_xsm font_poppins px-2 py-1 top-100 start-50">
                  5 Nights 6 Days
                </span>
              </div>{" "}
              <div className=" d-flex flex-column h-100 justify-content-between ">
                <h2 className="mt-3 mb-2 text-capitalize font_poppins text-black fw-medium fs_sm">
                  Spiti Valley Manali Edition
                </h2>
                <article>
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
                </article>
              </div>
            </div>
            <div className="d-flex flex-column px-3 px-sm-4 h_480">
              <div className=" position-relative mb-3">
                <Image
                  className="rounded-4 h_300 w-100 "
                  src={img1}
                  alt="img"
                />
                <span className=" bg_yellow rounded-3 position-absolute text-black translate-middle fw-normal fs_xsm font_poppins px-2 py-1 top-100 start-50">
                  5 Nights 6 Days
                </span>
              </div>{" "}
              <div className=" d-flex flex-column h-100 justify-content-between ">
                <h2 className="mt-3 mb-2 text-capitalize font_poppins text-black fw-medium fs_sm">
                  Kazakhstan Backpacking
                </h2>
                <article>
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
                </article>
              </div>
            </div>
          </Slider>{" "}
          <div className=" bg-light p-4 rounded-3 mt-5">
            <p className=" mb-0 fw-semibold fs_lg text-black font_poppins border-bottom border-2 pb-3 ">
              About Spiti Valley Tour Packages
            </p>
            <p className=" fs_xsm fw-normal text-black font_poppins mb-0 mt-4">
              Do you live in Delhi, Bangalore, Hyderabad, Chennai, Mumbai,
              Ahmedabad, Vadodara, Kolkata or any city in India and planning for
              an upcoming trip either in groups or solo? No worries, Go4Explore
              has a buffet of amazing travel packages for every kind of
              wanderlust soul. Go4Explore has conducted 2500+ trips over last 7
              years.
            </p>
            {!showviewMore && (
              <div className=" d-flex justify-content-end w-100">
                <button
                  className="btn btn-link text-decoration-none fw-medium fs_sm font_poppins text-black mt-3"
                  onClick={() => setShowviewMore(true)}
                >
                  View More{" "}
                  <Image
                    width={15}
                    className="  ms-1 "
                    src={downarrow}
                    alt="downarrow"
                  />
                </button>
              </div>
            )}

            {showviewMore && (
              <>
                <p className="fs_xsm fw-normal text-black font_poppins mb-0 mt-4">
                  Bordering with Tibet and home to some of the oldest Buddhist
                  monasteries in the Himalayas, Spiti is a cold desert mountain
                  valley, sparsely populated region whose beauty unveils after a
                  challenging and tricky ride through the most treacherous roads
                  of the mighty Himalayas. The term ‘Spiti’ means ‘The Middle
                  Land’ - land between the lush green valleys and the cold
                  mountain deserts of the Himalayas. Thanks to the thrilling
                  roadways, rustic landscapes and beautiful clear skies, road
                  trip to Himachal’s Spiti Valley is a once in a lifetime
                  experience. Decorated with beautiful villages
                </p>
                <div className=" d-flex justify-content-end w-100">
                  <button
                    className="btn btn-link text-decoration-none  fw-medium fs_sm font_poppins text-black mt-3"
                    onClick={() => setShowviewMore(false)}
                  >
                    View Less{" "}
                    <Image
                      width={15}
                      className=" rotate_180 ms-1 "
                      src={downarrow}
                      alt="downarrow"
                    />
                  </button>
                </div>
              </>
            )}
          </div>
          <article className=" mt-5">
            <p className=" mb-3 ms-4 ps-1 fw-medium fs_lg text-black font_poppins">
              Best of Spiti
            </p>
            <Slider {...settings}>
              <div className="d-flex flex-column px-3 px-sm-4 h_480">
                <div className=" position-relative mb-3">
                  <Image
                    className="rounded-4 h_300 w-100 "
                    src={img1}
                    alt="img"
                  />
                  <span className=" bg_yellow rounded-3 position-absolute text-black translate-middle fw-normal fs_xsm font_poppins px-2 py-1 top-100 start-50">
                    5 Nights 6 Days
                  </span>
                </div>{" "}
                <div className=" d-flex flex-column h-100 justify-content-between ">
                  <h2 className="mt-3 mb-2 text-capitalize font_poppins text-black fw-medium fs_sm">
                    Thailand Retreat - Phuket, Krabi & Pattaya
                  </h2>
                  <article>
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
                  </article>
                </div>
              </div>
              <div className="d-flex flex-column px-3 px-sm-4 h_480">
                <div className=" position-relative mb-3">
                  <Image
                    className="rounded-4 h_300 w-100 "
                    src={img1}
                    alt="img"
                  />
                  <span className=" bg_yellow rounded-3 position-absolute text-black translate-middle fw-normal fs_xsm font_poppins px-2 py-1 top-100 start-50">
                    6 Nights 7 Days
                  </span>
                </div>{" "}
                <div className=" d-flex flex-column h-100 justify-content-between ">
                  <h2 className="mt-3 mb-2 text-capitalize font_poppins text-black fw-medium fs_sm">
                    Spiti Valley Full-Circuit From Shimla - Backpacking Trip
                  </h2>
                  <article>
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
                  </article>
                </div>
              </div>
              <div className="d-flex flex-column px-3 px-sm-4 h_480">
                <div className=" position-relative mb-3">
                  <Image
                    className="rounded-4 h_300 w-100 "
                    src={img1}
                    alt="img"
                  />
                  <span className=" bg_yellow rounded-3 position-absolute text-black translate-middle fw-normal fs_xsm font_poppins px-2 py-1 top-100 start-50">
                    5 Nights 6 Days
                  </span>
                </div>{" "}
                <div className=" d-flex flex-column h-100 justify-content-between ">
                  <h2 className="mt-3 mb-2 text-capitalize font_poppins text-black fw-medium fs_sm">
                    Spiti Valley Manali Edition
                  </h2>
                  <article>
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
                  </article>
                </div>
              </div>
              <div className="d-flex flex-column px-3 px-sm-4 h_480">
                <div className=" position-relative mb-3">
                  <Image
                    className="rounded-4 h_300 w-100 "
                    src={img1}
                    alt="img"
                  />
                  <span className=" bg_yellow rounded-3 position-absolute text-black translate-middle fw-normal fs_xsm font_poppins px-2 py-1 top-100 start-50">
                    5 Nights 6 Days
                  </span>
                </div>{" "}
                <div className=" d-flex flex-column h-100 justify-content-between ">
                  <h2 className="mt-3 mb-2 text-capitalize font_poppins text-black fw-medium fs_sm">
                    Kazakhstan Backpacking
                  </h2>
                  <article>
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
                  </article>
                </div>
              </div>
            </Slider>
          </article>
          <article className=" mt-5">
            <p className=" mb-3 ms-4 ps-1 fw-medium fs_lg text-black font_poppins">
              Best of Vietnam
            </p>
            <Slider {...settings}>
              <div className="d-flex flex-column px-3 px-sm-4 h_480">
                <div className=" position-relative mb-3">
                  <Image
                    className="rounded-4 h_300 w-100 "
                    src={img1}
                    alt="img"
                  />
                  <span className=" bg_yellow rounded-3 position-absolute text-black translate-middle fw-normal fs_xsm font_poppins px-2 py-1 top-100 start-50">
                    5 Nights 6 Days
                  </span>
                </div>{" "}
                <div className=" d-flex flex-column h-100 justify-content-between ">
                  <h2 className="mt-3 mb-2 text-capitalize font_poppins text-black fw-medium fs_sm">
                    Thailand Retreat - Phuket, Krabi & Pattaya
                  </h2>
                  <article>
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
                  </article>
                </div>
              </div>
              <div className="d-flex flex-column px-3 px-sm-4 h_480">
                <div className=" position-relative mb-3">
                  <Image
                    className="rounded-4 h_300 w-100 "
                    src={img1}
                    alt="img"
                  />
                  <span className=" bg_yellow rounded-3 position-absolute text-black translate-middle fw-normal fs_xsm font_poppins px-2 py-1 top-100 start-50">
                    6 Nights 7 Days
                  </span>
                </div>{" "}
                <div className=" d-flex flex-column h-100 justify-content-between ">
                  <h2 className="mt-3 mb-2 text-capitalize font_poppins text-black fw-medium fs_sm">
                    Spiti Valley Full-Circuit From Shimla - Backpacking Trip
                  </h2>
                  <article>
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
                  </article>
                </div>
              </div>
              <div className="d-flex flex-column px-3 px-sm-4 h_480">
                <div className=" position-relative mb-3">
                  <Image
                    className="rounded-4 h_300 w-100 "
                    src={img1}
                    alt="img"
                  />
                  <span className=" bg_yellow rounded-3 position-absolute text-black translate-middle fw-normal fs_xsm font_poppins px-2 py-1 top-100 start-50">
                    5 Nights 6 Days
                  </span>
                </div>{" "}
                <div className=" d-flex flex-column h-100 justify-content-between ">
                  <h2 className="mt-3 mb-2 text-capitalize font_poppins text-black fw-medium fs_sm">
                    Spiti Valley Manali Edition
                  </h2>
                  <article>
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
                  </article>
                </div>
              </div>
              <div className="d-flex flex-column px-3 px-sm-4 h_480">
                <div className=" position-relative mb-3">
                  <Image
                    className="rounded-4 h_300 w-100 "
                    src={img1}
                    alt="img"
                  />
                  <span className=" bg_yellow rounded-3 position-absolute text-black translate-middle fw-normal fs_xsm font_poppins px-2 py-1 top-100 start-50">
                    5 Nights 6 Days
                  </span>
                </div>{" "}
                <div className=" d-flex flex-column h-100 justify-content-between ">
                  <h2 className="mt-3 mb-2 text-capitalize font_poppins text-black fw-medium fs_sm">
                    Kazakhstan Backpacking
                  </h2>
                  <article>
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
                  </article>
                </div>
              </div>
            </Slider>
          </article>
        </div>
      </section>
    </>
  );
};

export default UpcomingTrips;
