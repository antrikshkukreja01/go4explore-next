import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import "../App.css";
import Slider from "react-slick";
import clock from "@/assets/img/webp/clock.webp";
import location from "@/assets/img/webp/location_pin_product.webp";
import backpacking from "@/assets/img/webp/black_bag.webp";
import bed from "@/assets/img/webp/black_bed.webp";
import van from "@/assets/img/webp/black_van.webp";
import meals from "@/assets/img/webp/meals.webp";
import local from "@/assets/img/webp/local.webp";
import Footer from "@/components/Footer";
import Nav from "@/components/NavBar";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import Image from "next/image";
import img_himachal from "@/assets/img/webp/Himachal.webp";
import img_kashmir from "@/assets/img/webp/Kashmir.webp";
import img_kerala from "@/assets/img/webp/Kerala.webp";
import img_uttarakhand from "@/assets/img/webp/Uttarakhand.webp";
import img_bhutan from "@/assets/img/webp/Bhutan.webp";

const Test = ({ data }) => {
  const [occupancy, setOccupancy] = useState("Double");
  const [discountedPrice, setDiscountedPrice] = useState(7499);
  const [originalPrice, setOriginalPrice] = useState(8499);
  const [activeButton, setActiveButton] = useState("Triple");

  const handleOccupancyChange = (newOccupancy) => {
    setOccupancy(newOccupancy);
    setActiveButton(newOccupancy);
    if (newOccupancy === "Triple") {
      setDiscountedPrice(7499);
      setOriginalPrice(8499);
    } else {
      setDiscountedPrice(8499);
      setOriginalPrice(9499);
    }
  };

  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  if (data.error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
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
      {
        breakpoint: 563,
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
      <Nav />

      <section className=" py-5">
        <div className=" container">
          <header key={data.data.id} className=" position-relative  px-3  ">
            <Image
              className="  rounded-4"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "500px" }} // optional
              src={data.data.image}
              alt={data.data.name}
            />
            <h1 className=" text-white fw-bold fs_xxl font_poppins position-absolute top-50 start-50 translate-middle">
              {data.data.name}
            </h1>
          </header>

          <div className="px-sm-3" key={data.data.id}>
            <div className=" border_box py-3 px-3 px-sm-4 mt-sm-4 d-xl-none  ">
              <p className=" mb-0 fs_lg fw-semibold font_poppins text-black">
                {data.data.name}
              </p>
              <div className=" row align-items-center  justify-content-evenly  mt-3 border-bottom border-3 pb-4 d-none d-sm-flex">
                <div className=" col-4 col-sm-6 col-lg-3 col-xl-4">
                  {" "}
                  <div className="mt-3 flex-column flex-md-row justify-content-center  p-2 bg-light d-flex gap-2 rounded-3 align-items-center">
                    <Image width={30} src={clock} alt="clock" />
                    <article>
                      <p className=" font_poppins text-black fw-medium fs_7 text-center fs_xsm mb-0">
                        Trip Duration
                      </p>
                      <p className=" font_poppins text-black fs_7 text-center fw_700 fw-semibold fs_sm mb-0">
                        {data.data.duration}
                      </p>
                    </article>
                  </div>
                </div>
                <div className=" col-4 col-sm-6 col-lg-3 col-xl-4">
                  {" "}
                  <div className="mt-3 flex-column flex-md-row justify-content-center  p-2 bg-light d-flex gap-2 rounded-3 align-items-center">
                    <Image width={30} src={location} alt="location" />
                    <article>
                      <p className=" font_poppins text-black fw-medium fs_7 text-center fs_xsm mb-0">
                        Pickup & Drop
                      </p>
                      <p className=" font_poppins text-black fs_7 text-center fw_700 fw-semibold fs_sm mb-0">
                        {data.data.departure}
                      </p>
                    </article>
                  </div>
                </div>
                <div className=" col-4 col-sm-6 col-lg-3 col-xl-4">
                  {" "}
                  <div className="mt-3 flex-column flex-md-row justify-content-center  p-2 bg-light d-flex gap-2 rounded-3 align-items-center">
                    <Image width={30} src={backpacking} alt="backpacking" />
                    <article>
                      <p className=" font_poppins text-black fw-medium fs_7 text-center fs_xsm mb-0">
                        Trip Category
                      </p>
                      <p className=" font_poppins text-black fs_7 text-center fw_700 fw-semibold fs_xsm mb-0">
                        {data.data.name}
                      </p>
                    </article>
                  </div>
                </div>
              </div>

              <div className=" mt-3 row  justify-content-evenly align-items-center">
                <div className=" d-flex align-items-center justify-content-center col-6 col-lg-3 mt-2 ">
                  <Image width={30} className=" me-2" src={bed} alt="bed" />
                  <p className=" fw-medium fs_xsm mb-0 text-black font_poppins">
                    Accommodations
                  </p>
                </div>
                <div className=" d-flex align-items-center justify-content-center col-6 col-lg-3 mt-2 ">
                  <Image width={30} className=" me-2" src={van} alt="bed" />
                  <p className=" fw-medium fs_xsm mb-0  text-black font_poppins">
                    Transfers
                  </p>
                </div>
                <div className=" d-flex align-items-center justify-content-center col-3 col-sm-4 col-lg-3 mt-2 ">
                  <Image
                    width={30}
                    className=" me-2 mb-2"
                    src={meals}
                    alt="bed"
                  />
                  <p className=" fw-medium fs_xsm mb-0  text-black font_poppins">
                    Meals
                  </p>
                </div>
                <div className=" d-flex align-items-center justify-content-center col-7 col-sm-6 col-lg-3 mt-2 ">
                  <Image width={30} className=" me-2" src={local} alt="bed" />
                  <p className=" fw-medium fs_xsm mb-0  text-black font_poppins">
                    Local Sightseeing
                  </p>
                </div>
              </div>
            </div>
            <div className=" row position-relative flex-column-reverse flex-xl-row  ">
              <div className=" position-relative col-xl-8 ">
                <div className=" border_box py-3 px-3 px-sm-4 mt-sm-4 d-none d-xl-block  ">
                  <p className=" mb-0 fs_lg fw-semibold font_poppins text-black">
                    {data.data.name}
                  </p>
                  <div className=" row align-items-center  justify-content-evenly  mt-3 border-bottom border-3 pb-4 d-none d-sm-flex">
                    <div className=" col-4 col-sm-6 col-lg-3 col-xl-4">
                      {" "}
                      <div className="mt-3 flex-column flex-md-row justify-content-center  p-2 bg-light d-flex gap-2 rounded-3 align-items-center">
                        <Image width={30} src={clock} alt="clock" />
                        <article>
                          <p className=" font_poppins text-black fw-medium fs_7 text-center fs_xsm mb-0">
                            Trip Duration
                          </p>
                          <p className=" font_poppins text-black fs_7 text-center fw_700 fw-semibold fs_sm mb-0">
                            {data.data.duration}
                          </p>
                        </article>
                      </div>
                    </div>
                    <div className=" col-4 col-sm-6 col-lg-3 col-xl-4">
                      {" "}
                      <div className="mt-3 flex-column flex-md-row justify-content-center  p-2 bg-light d-flex gap-2 rounded-3 align-items-center">
                        <Image width={30} src={location} alt="location" />
                        <article>
                          <p className=" font_poppins text-black fw-medium fs_7 text-center fs_xsm mb-0">
                            Pickup & Drop
                          </p>
                          <p className=" font_poppins text-black fs_7 text-center fw_700 fw-semibold fs_sm mb-0">
                            {data.data.departure}
                          </p>
                        </article>
                      </div>
                    </div>
                    <div className=" col-4 col-sm-6 col-lg-3 col-xl-4">
                      {" "}
                      <div className="mt-3 flex-column flex-md-row justify-content-center  p-2 bg-light d-flex gap-2 rounded-3 align-items-center">
                        <Image width={30} src={backpacking} alt="backpacking" />
                        <article>
                          <p className=" font_poppins text-black fw-medium fs_7 text-center fs_xsm mb-0">
                            Trip Category
                          </p>
                          <p className=" font_poppins text-black fs_7 text-center fw_700 fw-semibold fs_sm mb-0">
                            {data.data.name}
                          </p>
                        </article>
                      </div>
                    </div>
                  </div>
                  <div className=" row align-items-center  justify-content-evenly  mt-3 border-bottom border-3 pb-4 d-sm-none">
                    <div className=" col-4 col-sm-6 col-lg-3 col-xl-4">
                      {" "}
                      <div className="mt-3 flex-column flex-md-row justify-content-center  p-2 bg-light d-flex gap-2 rounded-3 align-items-center">
                        <Image width={20} src={clock} alt="clock" />
                        <article>
                          <p className=" font_poppins text-black fw-medium fs_7 text-center fs_xsm mb-0">
                            Trip Duration
                          </p>
                          <p className=" font_poppins text-black fs_7 text-center fw_700 fw-semibold fs_sm mb-0">
                            {data.data.duration}
                          </p>
                        </article>
                      </div>
                    </div>
                    <div className=" col-4 col-sm-6 col-lg-3 col-xl-4">
                      {" "}
                      <div className="mt-3 flex-column flex-md-row justify-content-center  p-2 bg-light d-flex gap-2 rounded-3 align-items-center">
                        <Image width={20} src={location} alt="location" />
                        <article>
                          <p className=" font_poppins text-black fw-medium fs_7 text-center fs_xsm mb-0">
                            Pickup & Drop
                          </p>
                          <p className=" font_poppins text-black fs_7 text-center fw_700 fw-semibold fs_sm mb-0">
                            {data.data.departure}
                          </p>
                        </article>
                      </div>
                    </div>
                    <div className=" col-4 col-sm-6 col-lg-3 col-xl-4">
                      {" "}
                      <div className="mt-3 flex-column flex-md-row justify-content-center  p-2 bg-light d-flex gap-2 rounded-3 align-items-center">
                        <Image width={20} src={backpacking} alt="backpacking" />
                        <article>
                          <p className=" font_poppins text-black fw-medium fs_7 text-center fs_xsm mb-0">
                            Trip Category
                          </p>
                          <p className=" font_poppins text-black fs_7 text-center fw_700 fw-semibold fs_sm mb-0">
                            {data.data.name}
                          </p>
                        </article>
                      </div>
                    </div>
                  </div>
                  <div className=" mt-3 row  justify-content-evenly align-items-center">
                    <div className=" d-flex align-items-center justify-content-center col-6 col-lg-3 mt-2 ">
                      <Image width={30} className=" me-2" src={bed} alt="bed" />
                      <p className=" fw-medium fs_xsm mb-0 text-black font_poppins">
                        Accommodations
                      </p>
                    </div>
                    <div className=" d-flex align-items-center justify-content-center col-6 col-lg-3 mt-2 ">
                      <Image width={30} className=" me-2" src={van} alt="van" />
                      <p className=" fw-medium fs_xsm mb-0  text-black font_poppins">
                        Transfers
                      </p>
                    </div>
                    <div className=" d-flex align-items-center justify-content-center col-3 col-sm-4 col-lg-3 mt-2 ">
                      <Image
                        width={30}
                        className=" me-2 mb-2"
                        src={meals}
                        alt="meals"
                      />
                      <p className=" fw-medium fs_xsm mb-0  text-black font_poppins">
                        Meals
                      </p>
                    </div>
                    <div className=" d-flex align-items-center justify-content-center col-7 col-sm-6 col-lg-3 mt-2 ">
                      <Image
                        width={30}
                        className=" me-2"
                        src={local}
                        alt="local"
                      />
                      <p className=" fw-medium fs_xsm mb-0  text-black font_poppins">
                        Local Sightseeing
                      </p>
                    </div>
                  </div>
                </div>
                <div className="position-sticky top-0 mt-4 d-flex align-items-center justify-content-between z-3 bg-light p-3">
                  <a
                    className={`link text-decoration-none d-none d-sm-inline fw-medium fs_sm font_poppins text-black  ${
                      activeLink === "Overview" ? "active" : ""
                    }`}
                    href="#Overview"
                    onClick={() => handleLinkClick("Overview")}
                  >
                    Overview
                  </a>
                  <a
                    className={`text-decoration-none fw-medium fs_sm font_poppins text-black  ${
                      activeLink === "Itinerary" ? "active" : ""
                    }`}
                    href="#Itinerary"
                    onClick={() => handleLinkClick("Itinerary")}
                  >
                    Itinerary
                  </a>
                  <a
                    className={`text-decoration-none fw-medium fs_sm font_poppins text-black  ${
                      activeLink === "Inclusions" ? "active" : ""
                    }`}
                    href="#Inclusions"
                    onClick={() => handleLinkClick("Inclusions")}
                  >
                    Inclusions
                  </a>
                  <a
                    className={`text-decoration-none fw-medium fs_sm font_poppins text-black  ${
                      activeLink === "Exclusions" ? "active" : ""
                    }`}
                    href="#Exclusions"
                    onClick={() => handleLinkClick("Exclusions")}
                  >
                    Exclusions
                  </a>
                  <a
                    className={`text-decoration-none d-none d-md-inline fw-medium fs_sm font_poppins text-black  ${
                      activeLink === "ThingsToPack" ? "active" : ""
                    }`}
                    href="#ThingsToPack"
                    onClick={() => handleLinkClick("ThingsToPack")}
                  >
                    Things To Pack
                  </a>
                  <a
                    className={`text-decoration-none d-none d-md-inline fw-medium fs_sm font_poppins text-black  ${
                      activeLink === "FAQs" ? "active" : ""
                    }`}
                    href="#FAQs"
                    onClick={() => handleLinkClick("FAQs")}
                  >
                    FAQs
                  </a>
                </div>
                <div id="Overview" className="  p-4  mt-4">
                  <p className=" mb-0 fw-semibold fs_lg text-black font_poppins border-bottom border-2 pb-3 ">
                    Overview
                  </p>
                  <p
                    className=" fs_xsm fw-normal text-black font_poppins mb-0 mt-4"
                    dangerouslySetInnerHTML={{ __html: data.data.description }}
                  ></p>
                </div>
                <div id="Itinerary" className=" p-4  mt-4">
                  <p className=" mb-0 fw-semibold fs_lg text-black font_poppins border-bottom border-2 pb-3 ">
                    Itinerary
                  </p>{" "}
                  <Accordion defaultExpandedKeys={[]}>
                    {data.data.i_data.map((i_data) => (
                      <AccordionItem
                        id="accordian"
                        className=" w-100 d-flex flex-column "
                        title={
                          <span className="  bg_blue  rounded-5 py-2 px-3 me-2 me-sm-3  d-inline-block font_poppins fw-medium fs_xsm fs_7 text-center text-white">
                            {i_data.day}
                          </span>
                        }
                        subtitle={
                          <p className="mb-0 fw-medium fs_xsm font_poppins fs_12 text-black">
                            {i_data.headings}
                          </p>
                        }
                      >
                        <p
                          dangerouslySetInnerHTML={{ __html: i_data.data }}
                        ></p>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
                <div id="Inclusions" className="  p-4  mt-4">
                  <p className=" mb-0 fw-semibold fs_lg text-black font_poppins border-bottom border-2 pb-3 ">
                    Inclusions
                  </p>

                  <article className=" d-flex mt-4  gap-3">
                    <span className=" text-success fs-4">&#10003;</span>
                    <p
                      className=" fs_xsm fw-normal text-black font_poppins mb-0 "
                      dangerouslySetInnerHTML={{ __html: data.data.inclusions }}
                    ></p>
                  </article>
                </div>
                <div id="Exclusions" className="  p-4  mt-4">
                  <p className=" mb-0 fw-semibold fs_lg text-black font_poppins border-bottom border-2 pb-3 ">
                    Exclusions
                  </p>

                  <article className=" d-flex mt-4  gap-3">
                    <span className="  text-danger fs-4">&#10008;</span>
                    <p
                      className=" fs_xsm fw-normal text-black font_poppins mb-0 "
                      dangerouslySetInnerHTML={{ __html: data.data.exclusions }}
                    ></p>
                  </article>
                </div>
                <div id="ThingsToPack" className="  p-4  mt-4">
                  <p className=" mb-0 fw-semibold fs_lg text-black font_poppins border-bottom border-2 pb-3 ">
                    Things To Pack
                  </p>

                  <article className=" d-flex mt-4 align-items-center  gap-3">
                    {/* <Image className=" w_60 h-100" src={bag} alt="bag" /> */}
                    <p
                      className=" fs_xsm fw-normal text-black font_poppins mb-0 "
                      dangerouslySetInnerHTML={{
                        __html: data.data.things_to_pack,
                      }}
                    ></p>
                  </article>
                </div>
                <div id="KnowBeforeYouGo" className="  p-4  mt-4">
                  <p className=" mb-0 fw-semibold fs_lg text-black font_poppins border-bottom border-2 pb-3 ">
                    Know Before You Go
                  </p>

                  <article className=" d-flex mt-4 align-items-baseline  gap-3">
                    <span className=" fs-4">&#x2022;</span>
                    <p className=" fs_xsm fw-normal text-black font_poppins mb-0 ">
                      Any extra meals and stay arrangements apart from the ones
                      The major locations you’ll be visiting in your trip mainly
                      lie in trans-Himalayan region and higher Himalayas. Due to
                      offbeat locations, some regions do not have star category
                      accommodations. Therefore we expect you to prepare your
                      mindset accordingly and don’t expect luxurious amenities
                      and at times, even basic...
                    </p>
                  </article>
                </div>
                <div id="FAQs" className="  p-4  mt-4">
                  <p className=" mb-0 fw-semibold fs_lg text-black font_poppins border-bottom border-2 pb-3 ">
                    FAQs
                  </p>

                  <Accordion defaultExpandedKeys={[]}>
                    {data.data.i_data.map((i_data) => (
                      <AccordionItem
                        id="accordian"
                        className=" w-100 d-flex flex-column "
                        title={
                          <span className="  bg_blue  rounded-5 py-2 px-3 me-2 me-sm-3  d-inline-block font_poppins fw-medium fs_xsm fs_7 text-center text-white">
                            {i_data.day}
                          </span>
                        }
                        subtitle={
                          <p className="mb-0 fw-medium fs_xsm font_poppins fs_12 text-black">
                            {i_data.headings}
                          </p>
                        }
                      >
                        <p
                          dangerouslySetInnerHTML={{ __html: i_data.data }}
                        ></p>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
              <div className=" col-xl-4">
                <div className="position-sticky top-10 pt-4">
                  <div className="border_box py-3 px-4">
                    <article className="d-flex align-items-center justify-content-between">
                      <p className="mb-0 fs_lg fw-bold font_poppins text-black">
                        Starting Price
                      </p>
                      <p className="mb-0 fw-medium fs_md text-black font_poppins bg_yellow p-1">
                        &#x20b9;1000 OFF
                      </p>
                    </article>
                    <article className="d-flex align-items-center gap-4">
                      {data.data.discounted_price ? (
                        <div className="d-flex align-items-center gap-4">
                          <p className="mb-0 fw-semibold fs_xxl font_poppins text-black">
                            ₹{data.data.discounted_price}
                          </p>
                          <p className="mb-0 fw-medium fs_md font_poppins clr_gray text-decoration-line-through">
                            ₹{data.data.price}
                          </p>
                        </div>
                      ) : (
                        <p className="mb-0 fw-semibold fs_xxl font_poppins text-black">
                          ₹{data.data.price}
                        </p>
                      )}
                      {data.data.discount && (
                        <p className="mb-0 fw-medium fs_md font_poppins clr_gray text-decoration-line-through">
                          ₹{data.data.discount}
                        </p>
                      )}
                    </article>
                    <p className="mb-4 text-black fw-medium fs_sm font_poppins">
                      Per Person on {occupancy} Sharing Occupancy
                    </p>
                    <a
                      className="white_space callback_btn mb-2 fs_xsm fw-medium w-100 d-inline-block text-center text-decoration-none"
                      href="#"
                    >
                      Send Query Here
                    </a>
                  </div>
                  <div className="border_box py-3 px-3 px-sm-4 mt-3">
                    <p className="fw-semibold fs_lg font_poppins text-black border-bottom border-2 pb-3 mb-3">
                      Price Summary
                    </p>
                    <div className="d-flex align-items-center justify-content-between gap-sm-5">
                      <p className="mb-0 fs_sm fw-normal text-black font_poppins">
                        Occupancy
                      </p>
                      <span className="d-flex gap-2  gap-sm-4 align-items-center">
                        <button
                          className={`text-decoration-none text-black border-0 bg-transparent position-relative ns fw-normal ${
                            activeButton === "Triple" ? "active" : ""
                          }`}
                          onClick={() => handleOccupancyChange("Triple")}
                        >
                          Triple
                        </button>
                        <button
                          className={`text-decoration-none text-black border-0 bg-transparent position-relative ns fw-normal ${
                            activeButton === "Double" ? "active" : ""
                          }`}
                          onClick={() => handleOccupancyChange("Double")}
                        >
                          Double
                        </button>
                      </span>
                    </div>
                    <div className="border_box d-flex align-items-center mt-2 justify-content-between p-3">
                      <p className="fw-normal font_poppins mb-0 fs_xsm text-black">
                        Tempo Traveller <br /> - {occupancy} Occupancy
                      </p>
                      <p className="mb-0 fw-medium fs_md font_poppins text-black">
                        &#x20b9; {data.data.double_price}
                      </p>
                    </div>
                    <a className="white_space callback_btn mb-2 mt-3 fs_xsm fw-medium w-100 d-inline-block text-center text-decoration-none">
                      Book Now
                    </a>
                    <div className="d-flex align-items-center flex-column flex-sm-row gap-3">
                      <a
                        id="whatsapp"
                        className="white_space tripDetail_btn mb-sm-2 mt-3 d-flex gap-2 justify-content-center align-items-center fs_xsm fw-medium w-100 d-inline-block text-center text-decoration-none"
                        href="#"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-whatsapp"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                        </svg>
                        Whatsapp
                      </a>
                      <a
                        className="white_space tripDetail_btn mb-2 mt-sm-3 fs_xsm fw-medium w-100 d-inline-block text-center text-decoration-none"
                        href="#"
                      >
                        Get PDF Itinerary
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-5">
        <div className="container">
          <h2 className=" mb-4 fw-semibold fs_xl font_poppins text-black text-center">
            Related Trips For You
          </h2>
          <Slider {...settings}>
            <div className=" d-flex flex-column px-2  align-items-center mx-auto">
              <Image
                height={300}
                className=" rounded-4  w-100 "
                src={img_himachal}
                alt="img_location"
              />
              <p className=" mb-0 fw-medium fs_md text-black font_poppins text-center mt-3">
                Himachal Pradesh
              </p>
              <p className=" mb-0 fw-medium fs_xsm clr_gray font_poppins text-center ">
                Starting Price ₹5000
              </p>
            </div>
            <div className=" d-flex flex-column px-2  align-items-center mx-auto">
              <Image
                height={300}
                className=" rounded-4  w-100 "
                src={img_uttarakhand}
                alt="img_location"
              />
              <p className=" mb-0 fw-medium fs_md text-black font_poppins text-center mt-3">
                Uttarakhand
              </p>
              <p className=" mb-0 fw-medium fs_xsm clr_gray font_poppins text-center ">
                Starting Price ₹5000
              </p>
            </div>
            <div className=" d-flex flex-column px-2  align-items-center mx-auto">
              <Image
                height={300}
                className=" rounded-4  w-100 "
                src={img_kashmir}
                alt="img_location"
              />
              <p className=" mb-0 fw-medium fs_md text-black font_poppins text-center mt-3">
                Kashmir
              </p>
              <p className=" mb-0 fw-medium fs_xsm clr_gray font_poppins text-center ">
                Starting Price ₹5000
              </p>
            </div>
            <div className=" d-flex flex-column px-2  align-items-center mx-auto">
              <Image
                height={300}
                className=" rounded-4  w-100 "
                src={img_bhutan}
                alt="img_location"
              />
              <p className=" mb-0 fw-medium fs_md text-black font_poppins text-center mt-3">
                Bhutan
              </p>
              <p className=" mb-0 fw-medium fs_xsm clr_gray font_poppins text-center ">
                Starting Price ₹5000
              </p>
            </div>
            <div className=" d-flex flex-column px-2  align-items-center mx-auto">
              <Image
                height={300}
                className=" rounded-4  w-100 "
                src={img_kerala}
                alt="img_location"
              />
              <p className=" mb-0 fw-medium fs_md text-black font_poppins text-center mt-3">
                Kerala
              </p>
              <p className=" mb-0 fw-medium fs_xsm clr_gray font_poppins text-center ">
                Starting Price ₹5000
              </p>
            </div>
          </Slider>
        </div>
      </section>
      <Footer />
    </>
  );
};

// Assuming you're using Next.js and want to fetch the slug server-side
export async function getServerSideProps(context) {
  const { slug } = context.params;

  try {
    const res = await axios.get(
      `https://go4explore-api.cyberoze.com/api/trips/${slug}`
    );
    const data = res.data;
    console.log(data);
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

export default Test;
