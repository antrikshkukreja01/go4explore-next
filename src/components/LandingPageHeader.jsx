"use client";
import React, { useState } from "react";
import downarrow from "../assets/img/webp/down_img.webp";
import Image from "next/image";
import bg from "../assets/img/png/header_landing.png";

const LandingPageHeader = () => {
  const [showOverviewMore, setShowOverviewMore] = useState(false);

  return (
    <>
      <section className=" pt-5">
        <div className=" container mt-5 pt-5">
          <div className=" row">
            <div className=" col-sm-8">
              {" "}
              <div
                style={{
                  backgroundImage: `url(${bg.src})`,
                  width: "100%",
                  height: "100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="   rounded-4 d-flex align-items-center flex-column justify-content-center"
              >
                <p className=" fw-bold fs_xxl font_poppins text-center text-white mb-0">
                  Spiti Valley Tour Packages
                </p>
                <p className=" fw-semibold fs_md font_poppins text-white mb-0">
                  Starting at ₹ 20,000
                </p>
              </div>
            </div>
            <div className=" col-sm-4 mt-4 mt-xl-0">
              <div className=" border_box rounded-4 p-4 p-sm-5">
                <p className=" text-center mb-0 fw-semibold fs_xl font_poppins text-black">
                  Have Doubts? Talk To Our Travel Experts!
                </p>
                <p className=" mb-0 text-center fs_xsm fw-normal mt-3 font_poppins text-black ">
                  Make your move, fill out your details now!
                </p>
                <div className=" d-flex flex-column align-items-center gap-3 gap-sm-4 mt-4">
                  <input
                    className=" w-100 input_style_2 bg-light fs_xsm text-black fw-normal  rounded-5 py-2 text-center"
                    type="search"
                    placeholder="What should we call you?"
                  />
                  <input
                    className=" w-100 input_style_2 fs_xsm bg-light text-black fw-normal  rounded-5 py-2 text-center"
                    type="search"
                    placeholder="Please, share your contact number?"
                  />
                  <input
                    className=" w-100 input_style_2 fs_xsm text-black bg-light fw-normal  rounded-5 py-2 text-center"
                    type="search"
                    placeholder="Put your email here!"
                  />
                  <input
                    className=" w-100 input_style_2 fs_xsm text-black bg-light fw-normal  rounded-5 py-2 text-center"
                    type="text"
                    placeholder="Write your message"
                  />
                  <a
                    className=" callback_btn fs_sm fw-medium mt-sm-3 w-100 text-center text-decoration-none"
                    href="#"
                  >
                    Request Callback
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-light p-4 rounded-2 mt-4">
            <p className=" mb-0 fw-semibold fs_lg text-black font_poppins border-bottom border-2 pb-3 ">
              About Spiti Valley Tour Packages
            </p>
            <p className=" fs_xsm fw-normal text-black font_poppins mb-0 mt-4">
              Have you been planning to escape the urban madness and soak in the
              charm of the Himalayas? Then this is for you, as Go4Explore offers
              best suited Spiti Valley Tour Packages to explore one of the most
              stunning regions nestled in the mighty Himalayas.
            </p>
            {!showOverviewMore && (
              <div className=" d-flex justify-content-end w-100">
                <button
                  className="btn btn-link text-decoration-none fw-medium fs_sm font_poppins text-black mt-3"
                  onClick={() => setShowOverviewMore(true)}
                >
                  View More{" "}
                  <Image
                    width={15}
                    className="  ms-1"
                    src={downarrow}
                    alt="downarrow"
                  />
                </button>
              </div>
            )}

            {showOverviewMore && (
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
                    onClick={() => setShowOverviewMore(false)}
                  >
                    View Less{" "}
                    <Image
                      width={15}
                      className=" rotate_180 ms-1"
                      src={downarrow}
                      alt="downarrow"
                    />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPageHeader;
