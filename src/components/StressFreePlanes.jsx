"use client";

import React from "react";
import corner_img from "../assets/img/webp/boxcornerimg.webp";
import location_pin from "../assets/img/webp/location_pin.webp";
import mobile from "../assets/img/webp/anouncement.webp";
import travling_van from "../assets/img/webp/travling_van.webp";
import msg_query from "../assets/img/webp/msg_query.webp";
import line from "../assets/img/webp/line.webp";
import whatsapp from "../assets/img/webp/whatsapp.webp";
import Slider from "react-slick";
import cool from "../assets/img/png/cool_emoji.png";
import Image from "next/image";
import bg from "../assets/img/webp/yellow-paper-bg.webp";

const StressFreePlanes = () => {
  var settings = {
    dots: true,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <section id="stressfreetrip" className="py-4 py-sm-5">
        <div className="container">
          <h2 className=" font_poppins mb-3 fs_xl fw-semibold text-capitalize text-black text-center">
            How To Plan Your Stress Free Trip{" "}
            <Image width={30} className=" w_30" src={cool} alt="cool" />
          </h2>
          <Slider className=" d-lg-none" {...settings}>
            <div className=" mt-4 w_95 mx-auto  d-flex d-sm-inline-block   ">
              <div
                style={{
                  backgroundImage: `url(${bg.src})`,
                  width: "100%",
                  height: "100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="box tranform_2 h-300 flex-column d-flex justify-content-between position-relative overflow-hidden ">
                  <Image
                    className=" position-absolute end-0 bottom-0"
                    src={corner_img}
                    alt="corner_img"
                  />
                  <article>
                    <p className=" mb-2 fs_lg clr_blue fw-semibold font_poppins">
                      Choose Your Travel Destination
                    </p>
                    <p className=" mb-0 fs-13 fw-medium font_poppins clr_blue ">
                      From a buffet of trip itineraries handcrafted by our
                      travel experts.
                    </p>
                  </article>
                  <Image
                    width={120}
                    height={200}
                    className=" width_100"
                    src={location_pin}
                    alt="location_pin"
                  />
                </div>
              </div>
            </div>
            <div className=" mt-4 w_95 mx-auto  d-flex d-sm-inline-block   ">
              <div className=" bg_gradient h-100">
                <div className="box d-flex flex-column justify-content-between tranform_2 h-300 position-relative overflow-hidden ">
                  <Image
                    className=" position-absolute end-0 bottom-0"
                    src={corner_img}
                    alt="corner_img"
                  />
                  <article>
                    <p className=" mb-2 fs_lg clr_blue fw-semibold font_poppins">
                      Ask Queries & Book Your Trip!
                    </p>
                    <p className=" mb-0 fs-13 fw-medium font_poppins clr_blue ">
                      Connect with us over a call, solve your queries and book
                      your trip.
                    </p>
                  </article>
                  <Image
                    width={120}
                    height={200}
                    className=" w_120 "
                    src={msg_query}
                    alt="location_pin"
                  />
                </div>
              </div>
            </div>
            <div className=" mt-4 w_95 mx-auto d-flex d-sm-inline-block   ">
              <div
                style={{
                  backgroundImage: `url(${bg.src})`,
                  width: "100%",
                  height: "100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="box d-flex justify-content-between flex-column tranform_2 h-300 position-relative overflow-hidden ">
                  <Image
                    className=" position-absolute end-0 bottom-0"
                    src={corner_img}
                    alt="corner_img"
                  />
                  <article>
                    <p className=" mb-2 fs_lg clr_blue fw-semibold font_poppins">
                      Ohai, Your Trip Day Has Arrived
                    </p>
                    <p className=" mb-0 fs-13 fw-medium font_poppins clr_blue ">
                      Keep your adventure spirit high and pack your bags for a
                      lifetime experience.
                    </p>
                  </article>
                  <Image
                    width={120}
                    height={200}
                    className=" w_120"
                    src={travling_van}
                    alt="location_pin"
                  />
                </div>
              </div>
            </div>
            <div className=" mt-4 w_95 mx-auto d-flex d-sm-inline-block   ">
              <div
                style={{
                  backgroundImage: `url(${bg.src})`,
                  width: "100%",
                  height: "100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="box d-flex flex-column justify-content-between tranform_2 h-300 position-relative overflow-hidden ">
                  <Image
                    className=" position-absolute end-0 bottom-0"
                    src={corner_img}
                    alt="corner_img"
                  />
                  <article>
                    <p className=" mb-2 fs_lg clr_blue fw-semibold font_poppins">
                      Share #InstaPerfect Memories...
                    </p>
                    <p className=" mb-0 fs-13 fw-medium font_poppins clr_blue ">
                      Flaunt your memorable travel memories over social media
                      with your dear ones.
                    </p>
                  </article>
                  <Image
                    className=" width_100 "
                    src={mobile}
                    alt="location_pin"
                  />
                </div>
              </div>
            </div>
          </Slider>{" "}
          <div className=" row mt-md-5 pb-5 d-none d-lg-flex position-relative">
            <Image
              className=" position-absolute w-25 left_8 d-none d-lg-flex "
              src={line}
              alt="line"
            />
            <Image
              className=" position-absolute w-25 left_36 d-none d-lg-flex "
              src={line}
              alt="line"
            />
            <Image
              className=" position-absolute w-25 left_64 d-none d-lg-flex "
              src={line}
              alt="line"
            />
            <div className=" col-12 col-sm-6 col-lg-3 mt-5 w_95 mx-auto   ">
              <div
                style={{
                  backgroundImage: `url(${bg.src})`,
                  width: "100%",
                  height: "100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="box d-flex justify-content-between flex-column tranform position-relative overflow-hidden h-100">
                  <Image
                    className=" position-absolute end-0 bottom-0"
                    src={corner_img}
                    alt="corner_img"
                  />
                  <article>
                    <p className=" mb-2 fs_lg clr_blue fw-semibold font_poppins">
                      Choose Your Travel Destination
                    </p>
                    <p className=" mb-0 fs-13 fw-medium font_poppins clr_blue ">
                      From a buffet of trip itineraries handcrafted by our
                      travel experts.
                    </p>
                  </article>
                  <Image
                    className=" width_100 "
                    src={location_pin}
                    alt="location_pin"
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mt-5 w_95 mx-auto   ">
              <div
                style={{
                  backgroundImage: `url(${bg.src})`,
                  width: "100%",
                  height: "100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="box tranform d-flex flex-column justify-content-between position-relative overflow-hidden h-100">
                  <Image
                    className=" position-absolute end-0 bottom-0"
                    src={corner_img}
                    alt="corner_img"
                  />
                  <article>
                    <p className=" mb-2 fs_lg clr_blue fw-semibold font_poppins">
                      Ask Queries & Book Your Trip!
                    </p>
                    <p className=" mb-0 fs-13 fw-medium font_poppins clr_blue ">
                      Connect with us over a call, solve your queries and book
                      your trip.
                    </p>
                  </article>
                  <Image
                    width={120}
                    height={200}
                    className=" w_120 "
                    src={msg_query}
                    alt="msg_query"
                  />
                </div>
              </div>
            </div>
            <div className=" col-12 col-sm-6 col-lg-3 mt-5 w_95 mx-auto   ">
              <div
                style={{
                  backgroundImage: `url(${bg.src})`,
                  width: "100%",
                  height: "100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="box tranform position-relative d-flex flex-column justify-content-between overflow-hidden h-100">
                  <Image
                    className=" position-absolute end-0 bottom-0"
                    src={corner_img}
                    alt="corner_img"
                  />
                  <article>
                    <p className=" mb-2 fs_lg clr_blue fw-semibold font_poppins">
                      Ohai, Your Trip Day Has Arrived
                    </p>
                    <p className=" mb-0 fs-13 fw-medium font_poppins clr_blue ">
                      Keep your adventure spirit high and pack your bags for a
                      lifetime experience.
                    </p>
                  </article>
                  <Image
                    width={120}
                    height={200}
                    className=" w_120 "
                    src={travling_van}
                    alt="travling_van"
                  />
                </div>
              </div>
            </div>
            <div className=" col-12 col-sm-6 col-lg-3 mt-5 w_95 mx-auto   ">
              <div className=" bg_gradient h-100">
                <div className="box d-flex justify-content-between flex-column tranform position-relative overflow-hidden h-100">
                  <Image
                    className=" position-absolute end-0 bottom-0"
                    src={corner_img}
                    alt="corner_img"
                  />{" "}
                  <article>
                    <p className=" mb-2 fs_lg clr_blue fw-semibold font_poppins">
                      Share #InstaPerfect Memories...
                    </p>
                    <p className=" mb-0 fs-13 fw-medium font_poppins clr_blue ">
                      Flaunt your memorable travel memories over social media
                      with your dear ones.
                    </p>
                  </article>
                  <Image
                    width={120}
                    height={200}
                    className=" width_100 "
                    src={mobile}
                    alt="mobile"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-5 mt-lg-3   gap-3 d-flex justify-content-center flex-column flex-md-row align-items-center">
            <p className=" mb-0 mt-5 mt-lg-0  d-inline-block font_poppins text-center fs_md text-black fw-normal ">
              Call us or drop Hi on Whatsapp at
            </p>
            <a
              href="https://web.whatsapp.com/"
              target="_blank"
              className=" text-decoration-none text-black fw-bold font_poppins fs_md"
            >
              <Image
                width={50}
                className=" w_18"
                src={whatsapp}
                alt="whatsapp"
              />{" "}
              +91 8700923377
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default StressFreePlanes;
