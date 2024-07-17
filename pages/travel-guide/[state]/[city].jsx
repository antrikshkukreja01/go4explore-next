"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "../../App.css";
import Image from "next/image";
import axios from "axios";
import Slider from "react-slick";
import Link from "next/link";

const TravelGuide = ({ data }) => {
  function formatPrice(number) {
    return new Intl.NumberFormat("en-IN", {
      useGrouping: true,
    }).format(number);
  }

  if (!data) return <div>Loading...</div>;
  if (data.error) return <div>Error loading data</div>;

  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [thingsToDoExpanded, setThingsToDoExpanded] = useState(false);
  const [bestTimeToVisitExpanded, setBestTimeToVisitExpanded] = useState(false);
  const [howToReachExpanded, setHowToReachExpanded] = useState(false);

  const toggleReadMore = () => {
    setAboutExpanded(!aboutExpanded);
  };

  const toggleReadMoreThingsToDo = () => {
    setThingsToDoExpanded(!thingsToDoExpanded);
  };

  const toggleReadMoreBestTimeToVisit = () => {
    setBestTimeToVisitExpanded(!bestTimeToVisitExpanded);
  };

  const toggleReadMoreHowToReach = () => {
    setHowToReachExpanded(!howToReachExpanded);
  };

  const getWordCount = (str) => {
    return str.split(/\s+/).length;
  };

  const getFirstNWords = (str, n) => {
    return str.split(/\s+/).slice(0, n).join(" ");
  };

  const wordsToShow = 100;
  const aboutText = aboutExpanded
    ? data.data.city.about
    : `${getFirstNWords(data.data.city.about, wordsToShow)}...`;

  const thingsToDoText = thingsToDoExpanded
    ? data.data.city.things_to_do
    : `${getFirstNWords(data.data.city.things_to_do, wordsToShow)}...`;

  const bestTimeToVisitText = bestTimeToVisitExpanded
    ? data.data.city.best_time_to_visit
    : `${getFirstNWords(data.data.city.best_time_to_visit, wordsToShow)}...`;

  const howToReachText = howToReachExpanded
    ? data.data.city.how_to_reach
    : `${getFirstNWords(data.data.city.how_to_reach, wordsToShow)}...`;

  var settings = {
    dots: false,
    infinite: false,
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
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <>
      <body className="position-relative">
        <div className="position-fixed w-100 z-3">
          <NavBar />
        </div>
      </body>
      <section className="py-5">
        <div className="container mt-5 pt-5">
          <div className="row align-items-center">
            <div className="col-sm-8">
              <div key={data.data.id} className="position-relative px-3">
                <div
                  className="image-container"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    className="rounded-4"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "100%" }}
                    src={data.data.city.image}
                    alt={data.data.city.name}
                  />
                  <div
                    className="overlay rounded-4"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      pointerEvents: "none",
                    }}
                  ></div>
                </div>

                <h1 className="text-white text-center fw-semibold fs_3xl font_poppins position-absolute top-50 start-50 translate-middle">
                  {data.data.city.name}
                  <p className="pt-3 mb-0 fw-normal fs_xl">travel guide</p>
                </h1>
              </div>
            </div>
            <div className="col-sm-4 mt-4 mt-xl-0">
              <div className="border_box rounded-4 p-4 p-sm-5">
                <p className="text-center mb-0 fw-semibold fs_xl font_poppins text-black">
                  Have Doubts? Talk To Our Travel Experts!
                </p>
                <p className="mb-0 text-center fs_xsm fw-normal mt-3 font_poppins text-black">
                  Make your move, fill out your details now!
                </p>
                <div className="d-flex flex-column align-items-center gap-3 gap-sm-4 mt-4">
                  <input
                    className="w-100 input_style_2 fs_xsm bg_gray text-black fw-normal rounded-5 py-2 text-center"
                    type="text"
                    placeholder="What should we call you?"
                  />
                  <input
                    className="w-100 input_style_2 fs_xsm bg_gray text-black fw-normal rounded-5 py-2 text-center"
                    type="tel"
                    placeholder="Please, share your contact number?"
                  />
                  <input
                    className="w-100 input_style_2 fs_xsm bg_gray text-black fw-normal rounded-5 py-2 text-center"
                    type="email"
                    placeholder="Put your email here!"
                  />
                  <input
                    className="w-100 input_style_2 fs_xsm bg_gray text-black fw-normal rounded-5 py-2 text-center"
                    type="text"
                    placeholder="Write your message"
                  />
                  <a
                    className="callback_btn white_space w-100 text-center text-decoration-none fs_xsm fw-medium"
                    href="#"
                  >
                    Request Callback
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg_gray p-4 rounded-3 mt-4 mb-5">
            <h2 className="mb-0 fw-semibold fs_lg text-black font_poppins border-bottom border-2 pb-3">
              About {data.data.city.name}
            </h2>
            <p
              className="fs_xsm fw-normal text-black font_poppins mb-0 mt-4"
              dangerouslySetInnerHTML={{ __html: aboutText }}
            ></p>
            <div className="d-flex justify-content-end">
              {getWordCount(data.data.city.about) > wordsToShow && (
                <button
                  onClick={toggleReadMore}
                  className="btn btn-link text-decoration-none fw-medium fs_sm font_poppins text-black mt-3"
                >
                  {aboutExpanded ? "View Less" : "View More"}
                </button>
              )}
            </div>
          </div>
          <div className="my-4">
            <h1 className="text-black fw-medium fs_xl font_poppins">
              {data.data.city.name} Tour Packages For You
            </h1>
            <Slider className=" mt-4" {...settings}>
              {data.data.packages.map((pkg) => (
                <div className="px-3" key={pkg.id}>
                  <div className="position-relative mb-4">
                    <Link href={`/trips/${encodeURIComponent(pkg.slug)}`}>
                      <div className="image_280 rounded-4">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "280px" }}
                          src={pkg.image}
                          className=" rounded-4"
                          alt="img"
                        />
                      </div>
                      <p className="bg_yellow rounded-3 position-absolute text-black top-100 start-50 translate-middle fw-normal fs_xsm font_poppins px-2 py-1">
                        {pkg.duration}
                      </p>
                    </Link>
                  </div>
                  <div className="h_200 flex-column d-flex justify-content-between">
                    <article>
                      <Link
                        className="text-decoration-none"
                        href={`/trips/${encodeURIComponent(pkg.slug)}`}
                      >
                        <h2 className="pt-2 mb-2 text-capitalize font_poppins text-black fw-medium fs_md">
                          {pkg.name}
                        </h2>
                      </Link>
                      {pkg.discounted_price ? (
                        <div className="d-flex align-items-center gap-4">
                          <p className="mb-0 text-decoration-line-through clr_gray fs-md fw-normal">
                            ₹{formatPrice(pkg.price)}
                          </p>
                          <p className="mb-0 d-flex align-items-center text-black fs-md fw-semibold">
                            ₹{formatPrice(pkg.discounted_price)} per person
                          </p>
                        </div>
                      ) : (
                        <p className="mb-0 d-flex align-items-center text-black fs-md fw-semibold">
                          ₹{formatPrice(pkg.price)} per person
                        </p>
                      )}
                      {pkg.discount && (
                        <p className="mb-0 text-decoration-line-through clr_gray fs-md fw-normal">
                          Discount: ₹{formatPrice(pkg.discount)}
                        </p>
                      )}
                    </article>
                    <div className="d-flex flex-column flex-sm-row align-items-center flex-xl-column flex-xxl-row gap-2 mt-3">
                      <Link
                        href={`/trips/${encodeURIComponent(pkg.slug)}`}
                        className="tripDetail_btn white_space fs_xsm fw-medium text-center w-100 text-decoration-none"
                      >
                        Trip Details
                      </Link>
                      <a
                        className="white_space callback_btn fs_xsm fw-medium w-100 text-center text-decoration-none"
                        href="#"
                      >
                        Request Callback
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="p-4 rounded-3 mt-5 mb-5">
            <h1 className="text-black fw-medium fs_xl font_poppins">
              Top Things to Do in {data.data.city.name}
            </h1>
            <p
              className="fs_xsm fw-normal text-black font_poppins mb-0 mt-4"
              dangerouslySetInnerHTML={{ __html: thingsToDoText }}
            ></p>
            <div className="d-flex justify-content-end">
              {getWordCount(data.data.city.things_to_do) > wordsToShow && (
                <button
                  onClick={toggleReadMoreThingsToDo}
                  className="btn btn-link text-decoration-none fw-medium fs_sm font_poppins text-black mt-3"
                >
                  {thingsToDoExpanded ? "View Less" : "View More"}
                </button>
              )}
            </div>
          </div>
          <div className="p-4 rounded-3 mt-5 mb-5">
            <h1 className="text-black fw-medium fs_xl font_poppins">
              Best Time to Visit {data.data.city.name}
            </h1>
            <p
              className="fs_xsm fw-normal text-black font_poppins mb-0 mt-4"
              dangerouslySetInnerHTML={{ __html: bestTimeToVisitText }}
            ></p>
            <div className="d-flex justify-content-end">
              {getWordCount(data.data.city.best_time_to_visit) >
                wordsToShow && (
                <button
                  onClick={toggleReadMoreBestTimeToVisit}
                  className="btn btn-link text-decoration-none fw-medium fs_sm font_poppins text-black mt-3"
                >
                  {bestTimeToVisitExpanded ? "View Less" : "View More"}
                </button>
              )}
            </div>
          </div>
          <div className="p-4 rounded-3 mt-5 mb-5">
            <h1 className="text-black fw-medium fs_xl font_poppins">
              How to Reach {data.data.city.name}
            </h1>
            <p
              className="fs_xsm fw-normal text-black font_poppins mb-0 mt-4"
              dangerouslySetInnerHTML={{ __html: howToReachText }}
            ></p>
            <div className="d-flex justify-content-end">
              {getWordCount(data.data.city.how_to_reach) > wordsToShow && (
                <button
                  onClick={toggleReadMoreHowToReach}
                  className="btn btn-link text-decoration-none fw-medium fs_sm font_poppins text-black mt-3"
                >
                  {howToReachExpanded ? "View Less" : "View More"}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const { state, city } = context.params;

  try {
    const res = await axios.get(
      `https://go4explore-api.cyberoze.com/api/travel-guide/${state}/${city}`
    );
    const data = res.data;
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        data: { error: true },
      },
    };
  }
}
export default TravelGuide;
