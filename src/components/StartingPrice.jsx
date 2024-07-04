"use client";
import React, { useState } from "react";
import $ from "jquery";
import bag from "../assets/img/png/bag_2.png";
import jacket from "../assets/img/png/jacket.png";
import cream from "../assets/img/png/cream.png";
import medi from "../assets/img/png/medi.png";
import breakfast from "../assets/img/webp/breakfast.webp";
import lunch from "../assets/img/webp/lunch.webp";
import dinner from "../assets/img/webp/dinner.webp";
// import Accordion from "react-bootstrap/Accordion";
import clock from "../assets/img/webp/clock.webp";
import location from "../assets/img/webp/location_pin_product.webp";
import backpacking from "../assets/img/webp/black_bag.webp";
import bed from "../assets/img/webp/black_bed.webp";
import local from "../assets/img/webp/local.webp";
import van from "../assets/img/webp//black_van.webp";
import meals from "../assets/img/webp/meals.webp";
import downarrow from "../assets/img/webp/down_img.webp";
import Image from "next/image";

const StartingPrice = () => {
  const [showOverviewMore, setShowOverviewMore] = useState(false);
  const [showThingsToPackMore, setShowThingsToPackMore] = useState(false);
  const [showKnowBeforeMore, setShowKnowBeforeMore] = useState(false);
  const [showFaqMore, setShowFaqMore] = useState(false);

  $("a.link").click(function () {
    $("a.link").css("color", "black");
    $(this).css("color", "red");
  });
  return (
    <>
      <section className=" py-4">
        <div className=" container">
          <div className=" row position-relative  ">
            <div className=" position-relative col-xl-8">
              <div className=" border_box py-3 px-3 px-sm-4 mt-sm-4  ">
                <p className=" mb-0 fs_lg fw-semibold font_poppins text-black">
                  Spiti Valley Full-Circuit From Shimla - Backpacking Trip
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
                          6N/7D
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
                          Delhi to Delhi
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
                          Backpacking
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
                          6N/7D
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
                          Delhi to Delhi
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
                          Backpacking
                        </p>
                      </article>
                    </div>
                  </div>
                </div>
                <div className=" mt-3 row  justify-content-evenly align-items-center">
                  <div className=" d-flex align-items-center justify-content-center col-6 col-lg-3 mt-2 ">
                    <Image width={30} className=" me-1" src={bed} alt="bed" />
                    <p className=" fw-medium fs_xsm mb-0 text-black font_poppins">
                      Accommodations
                    </p>
                  </div>
                  <div className=" d-flex align-items-center justify-content-center col-6 col-lg-3 mt-2 ">
                    <Image width={30} className=" me-1" src={van} alt="bed" />
                    <p className=" fw-medium fs_xsm mb-0  text-black font_poppins">
                      Transfers
                    </p>
                  </div>
                  <div className=" d-flex align-items-center justify-content-center col-3 col-sm-4 col-lg-3 mt-2 ">
                    <Image
                      width={30}
                      className=" me-1 mb-2"
                      src={meals}
                      alt="bed"
                    />
                    <p className=" fw-medium fs_xsm mb-0  text-black font_poppins">
                      Meals
                    </p>
                  </div>
                  <div className=" d-flex align-items-center justify-content-center col-7 col-sm-6 col-lg-3 mt-2 ">
                    <Image width={30} className=" me-1" src={local} alt="bed" />
                    <p className=" fw-medium fs_xsm mb-0  text-black font_poppins">
                      Local Sightseeing
                    </p>
                  </div>
                </div>
              </div>
              <div className=" position-sticky top-0 mt-4 d-flex align-items-center justify-content-between z-3   bg-light  p-3 ">
                <a
                  className=" link text-decoration-none d-none d-sm-inline fw-medium fs_sm font_poppins text-black nav_hover position-relative"
                  href="#Overview"
                >
                  Overview
                </a>
                <a
                  className=" text-decoration-none fw-medium fs_sm font_poppins text-black nav_hover position-relative"
                  href="#Itinerary"
                >
                  Itinerary
                </a>
                <a
                  className=" text-decoration-none fw-medium fs_sm font_poppins text-black nav_hover position-relative"
                  href="#Inclusions"
                >
                  Inclusions
                </a>
                <a
                  className=" text-decoration-none fw-medium fs_sm font_poppins text-black nav_hover position-relative"
                  href="#Exclusions"
                >
                  Exclusions
                </a>
                <a
                  className=" text-decoration-none d-none d-md-inline fw-medium fs_sm font_poppins text-black nav_hover position-relative"
                  href="#ThingsToPack"
                >
                  Things To Pack
                </a>
                <a
                  className=" text-decoration-none d-none d-md-inline fw-medium fs_sm font_poppins text-black nav_hover position-relative"
                  href="#FAQs"
                >
                  FAQs
                </a>
              </div>
              <div id="Overview" className=" border_box p-4  mt-4">
                <p className=" mb-0 fw-semibold fs_lg text-black font_poppins border-bottom border-2 pb-3 ">
                  Overview
                </p>
                <p className=" fs_xsm fw-normal text-black font_poppins mb-0 mt-4">
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
                {!showOverviewMore && (
                  <div className=" d-flex justify-content-center w-100">
                    <button
                      className="btn btn-link text-decoration-none fw-medium fs_sm font_poppins text-black mt-3"
                      onClick={() => setShowOverviewMore(true)}
                    >
                      View More{" "}
                      <Image
                        className="  ms-1"
                        src={downarrow}
                        width={15}
                        alt="downarrow"
                      />
                    </button>
                  </div>
                )}

                {showOverviewMore && (
                  <>
                    <p className="fs_xsm fw-normal text-black font_poppins mb-0 mt-4">
                      Bordering with Tibet and home to some of the oldest
                      Buddhist monasteries in the Himalayas, Spiti is a cold
                      desert mountain valley, sparsely populated region whose
                      beauty unveils after a challenging and tricky ride through
                      the most treacherous roads of the mighty Himalayas. The
                      term ‘Spiti’ means ‘The Middle Land’ - land between the
                      lush green valleys and the cold mountain deserts of the
                      Himalayas. Thanks to the thrilling roadways, rustic
                      landscapes and beautiful clear skies, road trip to
                      Himachal’s Spiti Valley is a once in a lifetime
                      experience. Decorated with beautiful villages
                    </p>
                    <div className=" d-flex justify-content-center w-100">
                      <button
                        className="btn btn-link text-decoration-none  fw-medium fs_sm font_poppins text-black mt-3"
                        onClick={() => setShowOverviewMore(false)}
                      >
                        View Less{" "}
                        <Image
                          className=" rotate_180 ms-1 "
                          src={downarrow}
                          width={15}
                          alt="downarrow"
                        />
                      </button>
                    </div>
                  </>
                )}
              </div>
              <div id="Itinerary" className="border_box p-4  mt-4">
                <p className=" mb-0 fw-semibold fs_lg text-black font_poppins border-bottom border-2 pb-3 ">
                  Itinerary
                </p>{" "}
              </div>
              <div id="Inclusions" className=" border_box p-4  mt-4">
                <p className=" mb-0 fw-semibold fs_lg text-black font_poppins border-bottom border-2 pb-3 ">
                  Inclusions
                </p>

                <article className=" d-flex mt-4  gap-3">
                  <span className=" text-success fs-4">&#10003;</span>
                  <p className=" fs_xsm fw-normal text-black font_poppins mb-0 ">
                    Transportation: AC Semi-Sleeper Volvo/Bharatbenz (Delhi to
                    Manali/Shimla & back) and Force Traveler/Cab at all other
                    times or the entire journey by Force Traveler/Cab from
                    Delhi.
                  </p>
                </article>
                <article className=" d-flex mt-3   gap-3">
                  <span className=" text-success fs-4">&#10003;</span>
                  <p className=" fs_xsm fw-normal text-black font_poppins mb-0 ">
                    Accommodation on Sharing Basis: Hotel/Homestays (Chitkul,
                    Kalpa, Nako/Tabo & Kaza), Swiss Tents (Chitkul &
                    Chandratal).
                  </p>
                </article>
                <article className=" d-flex mt-3   gap-3">
                  <span className=" text-success fs-4">&#10003;</span>
                  <p className=" fs_xsm fw-normal text-black font_poppins mb-0 ">
                    Any entry fees, extra expenses for optional activities or
                    tickets, unless quoted in Inclusions.
                  </p>
                </article>
                <article className=" d-flex mt-3   gap-3">
                  <span className=" text-success fs-4">&#10003;</span>
                  <p className=" fs_xsm fw-normal text-black font_poppins mb-0 ">
                    Meals: 6 Breakfast & 6 Dinner (starting from Dinner on Day 2
                    to Breakfast on Day 8).
                  </p>
                </article>
                <article className=" d-flex mt-3 align-items-center    gap-3">
                  <span className=" text-success fs-4">&#10003;</span>
                  <p className=" fs_xsm fw-normal text-black font_poppins mb-0 ">
                    Experienced and cool trip leader.
                  </p>
                </article>
                <article className=" d-flex mt-3 align-items-center  gap-3">
                  <span className=" text-success fs-4">&#10003;</span>
                  <p className=" fs_xsm fw-normal text-black font_poppins mb-0 ">
                    Driver allowances, toll taxes, parking, state taxes, and
                    inner line permits.
                  </p>
                </article>
              </div>
              <div id="Exclusions" className=" border_box p-4  mt-4">
                <p className=" mb-0 fw-semibold fs_lg text-black font_poppins border-bottom border-2 pb-3 ">
                  Exclusions
                </p>

                <article className=" d-flex mt-4  gap-3">
                  <span className="  text-danger fs-4">&#10008;</span>
                  <p className=" fs_xsm fw-normal text-black font_poppins mb-0 ">
                    Any extra meals and stay arrangements apart from the ones
                    mentioned under inclusions as per the itinerary.
                  </p>
                </article>
                <article className=" d-flex mt-3 align-items-center   gap-3">
                  <span className="  text-danger fs-4">&#10008;</span>
                  <p className=" fs_xsm fw-normal text-black font_poppins mb-0 ">
                    Travel Insurance, items of a personal nature like porterage,
                    tips, laundry etc.
                  </p>
                </article>
                <article className=" d-flex mt-3   gap-3">
                  <span className="  text-danger fs-4">&#10008;</span>
                  <p className=" fs_xsm fw-normal text-black font_poppins mb-0 ">
                    Any entry fees, extra expenses for optional activities or
                    tickets, unless quoted in Inclusions.
                  </p>
                </article>
                <article className=" d-flex mt-3   gap-3">
                  <span className="  text-danger fs-4">&#10008;</span>
                  <p className=" fs_xsm fw-normal text-black font_poppins mb-0 ">
                    Any other costing involved due to circumstances like natural
                    calamity, weather conditions, riots, roadblocks, landslides
                    or any other forced circumstances which are out of our
                    control
                  </p>
                </article>
                <article className=" d-flex mt-3 align-items-center   gap-3">
                  <span className="  text-danger fs-4">&#10008;</span>
                  <p className=" fs_xsm fw-normal text-black font_poppins mb-0 ">
                    Anything which is not mentioned in the above inclusions.
                  </p>
                </article>
                <article className=" d-flex mt-3 align-items-center  gap-3">
                  <span className="  text-danger fs-4">&#10008;</span>
                  <p className=" fs_xsm fw-normal text-black font_poppins mb-0 ">
                    GST (5%) is applicable extra.
                  </p>
                </article>
              </div>
              <div id="ThingsToPack" className=" border_box p-4  mt-4">
                <p className=" mb-0 fw-semibold fs_lg text-black font_poppins border-bottom border-2 pb-3 ">
                  Things To Pack
                </p>

                <article className=" d-flex mt-4 align-items-center  gap-3">
                  <Image className=" w_60 h-100" src={bag} alt="bag" />
                  <p className=" fs_xsm fw-normal text-black font_poppins mb-0 ">
                    Waterproof and good quality backpack or rucksack is
                    recommended since you’ll be changing multiple accommodations
                    during the entire trip.
                  </p>
                </article>
                <article className=" d-flex mt-3 align-items-center   gap-3">
                  <Image className=" w_60 h-100" src={jacket} alt="jacket" />
                  <p className=" fs_xsm fw-normal text-black font_poppins mb-0 ">
                    Warm woolen jackets/sweaters, air/water resistant jackets,
                    body thermal wears, gloves, caps and extra pairs of socks to
                    protect yourself from wind chill and low temperatures.
                  </p>
                </article>
                <article className=" d-flex mt-3 align-items-center   gap-3">
                  <Image className=" w_60 h-100" src={cream} alt="cream" />
                  <p className=" fs_xsm fw-normal text-black font_poppins mb-0 ">
                    Personal care items, sunscreen lotion (prefer SPF30 or
                    higher), lip balm, toiletries, wet wipes and hand sanitizer.
                  </p>
                </article>
                <article className=" d-flex mt-3 align-items-center   gap-3">
                  <Image className=" w_60 h-100" src={medi} alt="medi" />
                  <p className=" fs_xsm fw-normal text-black font_poppins mb-0 ">
                    Diamox (altitude sickness drug), camphor tablets, medicines
                    for motion sickness, fever, stomach ache, headache, cold,
                    body pain and any other personal medicines.
                  </p>
                </article>
                {!showThingsToPackMore && (
                  <div className=" d-flex justify-content-center w-100">
                    <button
                      className="btn btn-link text-decoration-none fw-medium fs_sm font_poppins text-black mt-3"
                      onClick={() => setShowThingsToPackMore(true)}
                    >
                      View More{" "}
                      <Image
                        className=" ms-1 "
                        src={downarrow}
                        width={15}
                        alt="downarrow"
                      />
                    </button>
                  </div>
                )}

                {showThingsToPackMore && (
                  <>
                    <p className="fs_xsm fw-normal text-black font_poppins mb-0 mt-4">
                      <article className=" d-flex mt-4 align-items-center  gap-3">
                        <Image className=" w_60 h-100" src={bag} alt="bag" />
                        <p className=" fs_xsm fw-normal text-black font_poppins mb-0 ">
                          Waterproof and good quality backpack or rucksack is
                          recommended since you’ll be changing multiple
                          accommodations during the entire trip.
                        </p>
                      </article>
                      <article className=" d-flex mt-3 align-items-center   gap-3">
                        <Image
                          className=" w_60 h-100"
                          src={jacket}
                          alt="jacket"
                        />
                        <p className=" fs_xsm fw-normal text-black font_poppins mb-0 ">
                          Warm woolen jackets/sweaters, air/water resistant
                          jackets, body thermal wears, gloves, caps and extra
                          pairs of socks to protect yourself from wind chill and
                          low temperatures.
                        </p>
                      </article>
                      <article className=" d-flex mt-3 align-items-center   gap-3">
                        <Image
                          className=" w_60 h-100"
                          src={cream}
                          alt="cream"
                        />
                        <p className=" fs_xsm fw-normal text-black font_poppins mb-0 ">
                          Personal care items, sunscreen lotion (prefer SPF30 or
                          higher), lip balm, toiletries, wet wipes and hand
                          sanitizer.
                        </p>
                      </article>
                      <article className=" d-flex mt-3 align-items-center   gap-3">
                        <Image className=" w_60 h-100" src={medi} alt="medi" />
                        <p className=" fs_xsm fw-normal text-black font_poppins mb-0 ">
                          Diamox (altitude sickness drug), camphor tablets,
                          medicines for motion sickness, fever, stomach ache,
                          headache, cold, body pain and any other personal
                          medicines.
                        </p>
                      </article>
                    </p>
                    <div className=" d-flex justify-content-center w-100">
                      <button
                        className="btn btn-link text-decoration-none  fw-medium fs_sm font_poppins text-black mt-3"
                        onClick={() => setShowThingsToPackMore(false)}
                      >
                        View Less{" "}
                        <Image
                          className=" rotate_180 ms-1 "
                          src={downarrow}
                          width={15}
                          alt="downarrow"
                        />
                      </button>
                    </div>
                  </>
                )}
              </div>
              <div id="KnowBeforeYouGo" className=" border_box p-4  mt-4">
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
                    mindset accordingly and don’t expect luxurious amenities and
                    at times, even basic...
                  </p>
                </article>
                {!showKnowBeforeMore && (
                  <div className=" d-flex justify-content-center w-100">
                    <button
                      className="btn btn-link text-decoration-none fw-medium fs_sm font_poppins text-black mt-3"
                      onClick={() => setShowKnowBeforeMore(true)}
                    >
                      View More{" "}
                      <Image
                        className="  ms-1 "
                        src={downarrow}
                        width={15}
                        alt="downarrow"
                      />
                    </button>
                  </div>
                )}

                {showKnowBeforeMore && (
                  <>
                    <article className=" d-flex mt-4 align-items-baseline  gap-3">
                      <span className=" fs-4">&#x2022;</span>
                      <p className=" fs_xsm fw-normal text-black font_poppins mb-0 ">
                        Any extra meals and stay arrangements apart from the
                        ones The major locations you’ll be visiting in your trip
                        mainly lie in trans-Himalayan region and higher
                        Himalayas. Due to offbeat locations, some regions do not
                        have star category accommodations. Therefore we expect
                        you to prepare your mindset accordingly and don’t expect
                        luxurious amenities and at times, even basic...
                      </p>
                    </article>
                    <article className=" d-flex mt-4 align-items-baseline  gap-3">
                      <span className=" fs-4">&#x2022;</span>
                      <p className=" fs_xsm fw-normal text-black font_poppins mb-0 ">
                        Any extra meals and stay arrangements apart from the
                        ones The major locations you’ll be visiting in your trip
                        mainly lie in trans-Himalayan region and higher
                        Himalayas. Due to offbeat locations, some regions do not
                        have star category accommodations. Therefore we expect
                        you to prepare your mindset accordingly and don’t expect
                        luxurious amenities and at times, even basic...
                      </p>
                    </article>
                    <div className=" d-flex justify-content-center w-100">
                      <button
                        className="btn btn-link text-decoration-none  fw-medium fs_sm font_poppins text-black mt-3"
                        onClick={() => setShowKnowBeforeMore(false)}
                      >
                        View Less{" "}
                        <Image
                          className=" rotate_180 ms-1 "
                          src={downarrow}
                          width={15}
                          alt="downarrow"
                        />
                      </button>
                    </div>
                  </>
                )}
              </div>
              <div id="FAQs" className=" border_box p-4  mt-4">
                <p className=" mb-0 fw-semibold fs_lg text-black font_poppins border-bottom border-2 pb-3 ">
                  FAQs
                </p>

                {/* <Accordion className=" mt-4" defaultActiveKey={["0"]}>
                  <Accordion.Item eventKey="0" className=" mb-4 ">
                    <Accordion.Header>
                      <p className=" mb-0 fw-medium fs_sm font_poppins fs_12 text-black">
                        Do we need any permits to visit Spiti Valley?
                      </p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className=" mb-0 fw-medium fs_xsm text-black font_poppins">
                        The nearest airport to reach Spiti is Bhuntar airport
                        which is located in Manali and Shaheed Bhagat Singh
                        International airport which is located in Shimla.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className=" mb-4 ">
                    <Accordion.Header>
                      <p className=" mb-0 fw-medium fs_sm font_poppins fs_12 text-black">
                        Which is the nearest airport to reach Spiti Valley?
                      </p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className=" mb-0 fw-medium fs_xsm text-black font_poppins">
                        The nearest airport to reach Spiti is Bhuntar airport
                        which is located in Manali and Shaheed Bhagat Singh
                        International airport which is located in Shimla.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion> */}
                {!showFaqMore && (
                  <div className=" d-flex justify-content-center w-100">
                    <button
                      className="btn btn-link text-decoration-none fw-medium fs_sm font_poppins text-black mt-3"
                      onClick={() => setShowFaqMore(true)}
                    >
                      View More{" "}
                      <Image
                        className="  ms-1 "
                        src={downarrow}
                        width={15}
                        alt="downarrow"
                      />
                    </button>
                  </div>
                )}

                {showFaqMore && (
                  <>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Sapiente, quasi, cupiditate, obcaecati consectetur quod
                      sed voluptatum quis repudiandae debitis nisi quos ea
                      itaque illum voluptatibus earum cum ut. Blanditiis atque
                      maxime dolorem vero incidunt vel ut placeat tempore
                      voluptatum reprehenderit fugit nemo alias libero velit
                      earum dolor distinctio numquam, nam facilis harum itaque
                      excepturi corrupti quae omnis! Natus quaerat et dolore
                      commodi necessitatibus ratione voluptas rerum! Harum ipsam
                      odit velit veritatis ab rerum quae dolores deleniti sit
                      sapiente, nemo earum sunt suscipit, eligendi ullam quia!
                      Laudantium atque laboriosam, soluta impedit ratione vitae.
                      Repellat autem ipsam aut obcaecati recusandae minima quia
                      eum minus veritatis atque suscipit accusantium
                      reprehenderit, consequatur reiciendis magnam cupiditate
                      cumque voluptates neque alias! Magnam, quaerat eum. Nam
                      rem ducimus dolorem harum, aliquid repellat, tempora
                      officia labore eius doloremque recusandae modi libero.
                      Eveniet, exercitationem odit, sed eligendi laboriosam
                      excepturi aperiam, amet laudantium at magni fugit ut
                      aspernatur! Quo, qui soluta! Officia quod nihil architecto
                      deleniti quidem quia eveniet nesciunt error, id cum
                      debitis saepe, assumenda labore sequi placeat doloremque
                      corrupti, eaque eligendi aliquam alias. Facere, illo
                      nesciunt earum amet fugit eaque. Minima officiis saepe
                      nobis, quia sit, deserunt corrupti nulla voluptatum
                      reiciendis ea labore ratione. Quaerat esse praesentium
                      doloribus.
                    </p>
                    <div className=" d-flex justify-content-center w-100">
                      <button
                        className="btn btn-link text-decoration-none  fw-medium fs_sm font_poppins text-black mt-3"
                        onClick={() => setShowFaqMore(false)}
                      >
                        View Less{" "}
                        <Image
                          className=" rotate_180 ms-1 "
                          src={downarrow}
                          width={15}
                          alt="downarrow"
                        />
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className=" col-xl-4">
              <div className=" position-sticky top-0 pt-4   ">
                <div className=" border_box py-3 px-4 ">
                  <article className=" d-flex align-items-center justify-content-between">
                    <p className=" mb-0 fs_lg fw-bold font_poppins text-black">
                      Starting Price
                    </p>
                    <p className=" mb-0 fw-medium fs_md text-black font_poppins bg_yellow  p-1">
                      &#x20b9;5000 OFF
                    </p>
                  </article>
                  <article className=" d-flex align-items-center gap-4">
                    <p className=" mb-0 fw-semibold fs_xxl font_poppins text-black">
                      &#x20b9; 23,000
                    </p>
                    <p className=" mb-0 fw-medium fs_md font_poppins clr_gray text-decoration-line-through">
                      &#x20b9; 28,000
                    </p>
                  </article>
                  <p className=" mb-4 text-black fw-medium fs_sm font_poppins">
                    Per Person on Triple Sharing Occupancy
                  </p>
                  <a
                    className="white_space callback_btn mb-2 fs_xsm fw-medium w-100 d-inline-block text-center text-decoration-none"
                    href="#"
                  >
                    Send Query Here
                  </a>
                </div>
                <div className=" border_box py-3 px-4 mt-3">
                  <p className=" fw-semibold fs_lg font_poppins text-black border-bottom border-2 pb-3 mb-3">
                    Price Summery
                  </p>
                  <div className=" d-flex align-items-center justify-content-between gap-5">
                    <p className=" mb-0 fs_sm fw-normal text-black font_poppins">
                      Occupancy
                    </p>
                    <span className=" d-flex gap-4 align-items-center">
                      <a
                        className=" text-decoration-none text-black position-relative nav_hover fs_xsm font_poppins fw-normal"
                        href="#"
                      >
                        Triple
                      </a>
                      <a
                        className=" text-decoration-none text-black position-relative nav_hover fs_xsm font_poppins fw-normal"
                        href="#"
                      >
                        Double
                      </a>
                    </span>
                  </div>
                  <div className=" border_box d-flex align-items-center mt-2 justify-content-between p-3">
                    <p className=" fw-normal font_poppins mb-0 fs_xsm text-black">
                      Tempo Traveller <br /> - Triple Occupancy
                    </p>
                    <p className=" mb-0 fw-medium fs_md font_poppins text-black">
                      &#x20b9; 23,000
                    </p>
                  </div>

                  <a className="white_space callback_btn mb-2 mt-3 fs_xsm fw-medium w-100 d-inline-block text-center text-decoration-none">
                    Book Now
                  </a>

                  <div className=" d-flex align-items-center flex-column flex-sm-row gap-3">
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
      </section>
    </>
  );
};

export default StartingPrice;
