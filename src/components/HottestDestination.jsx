"use client";
import Destination1 from "../assets/img/webp/Card1.webp";
import Destination2 from "../assets/img/webp/Card2.webp";
import Destination3 from "../assets/img/webp/Card3.webp";
import Destination4 from "../assets/img/webp/Card4.webp";
import Destination5 from "../assets/img/webp/Card5.webp";
import Destination6 from "../assets/img/webp/Card6.webp";
import Destination7 from "../assets/img/webp/Card7.webp";
import Destination8 from "../assets/img/webp/Card8.webp";
import fire from "../assets/img/png/fires_emoji.png";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const HottestDestination = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="py-4 py-sm-5">
        <div className=" container">
          <h2 className=" font_poppins fs_xl fw-semibold text-capitalize text-black text-center">
            Hottest Destination Across Globe{" "}
            <Image width={40} height={50} src={fire} alt="fire" />
          </h2>
          <div className=" row mt-5 justify-content-center d-none d-sm-flex ">
            <div className="p-4 col-6 col-md-4 col-lg-3">
              <div className="bg_gradient">
                <Image
                  width={200}
                  height={370}
                  className=" w-100 rounded-4 tranform"
                  src={Destination1}
                  alt="destination"
                />
              </div>
            </div>
            <div className="p-4 col-6 col-md-4 col-lg-3">
              <div className="bg_gradient">
                <Image
                  width={200}
                  height={370}
                  className=" w-100 rounded-4 tranform "
                  src={Destination2}
                  alt="destination"
                />
              </div>
            </div>
            <div className="p-4 col-6 col-md-4 col-lg-3">
              <div className="bg_gradient">
                <Image
                  width={200}
                  height={370}
                  className=" w-100 rounded-4 tranform "
                  src={Destination3}
                  alt="destination"
                />
              </div>
            </div>
            <div className="p-4 col-6 col-md-4 col-lg-3">
              <div className="bg_gradient">
                <Image
                  width={200}
                  height={370}
                  className=" w-100 rounded-4 tranform "
                  src={Destination4}
                  alt="destination"
                />
              </div>
            </div>
            <div className="p-4 col-6 col-md-4 col-lg-3">
              <div className="bg_gradient">
                <Image
                  width={200}
                  height={370}
                  className=" w-100 rounded-4 tranform "
                  src={Destination5}
                  alt="destination"
                />
              </div>
            </div>
            <div className="p-4 col-6 col-md-4 col-lg-3">
              <div className="bg_gradient">
                <Image
                  width={200}
                  height={370}
                  className=" w-100 rounded-4 tranform "
                  src={Destination6}
                  alt="destination"
                />
              </div>
            </div>
            <div className="p-4 col-6 col-md-4 col-lg-3">
              <div className="bg_gradient">
                <Image
                  width={200}
                  height={370}
                  className=" w-100 rounded-4 tranform "
                  src={Destination7}
                  alt="destination"
                />
              </div>
            </div>
            <div className="p-4 col-6 col-md-4 col-lg-3">
              <div className="bg_gradient">
                <Image
                  width={200}
                  height={370}
                  className=" w-100 rounded-4 tranform "
                  src={Destination8}
                  alt="destination"
                />
              </div>
            </div>
          </div>
          <Slider className=" d-sm-none " {...settings}>
            <div className=" p-4">
              <div className="bg_gradient  ps-2">
                <Image
                  className=" w-100 rounded-4 tranform"
                  src={Destination1}
                  width={200}
                  height={300}
                  alt="destination"
                />
              </div>
            </div>
            <div className=" p-4">
              <div className="bg_gradient  ps-2">
                <Image
                  className=" w-100 rounded-4 tranform"
                  src={Destination2}
                  width={200}
                  height={300}
                  alt="destination"
                />
              </div>
            </div>
            <div className=" p-4">
              <div className="bg_gradient  ps-2">
                <Image
                  className=" w-100 rounded-4 tranform"
                  src={Destination3}
                  width={200}
                  height={300}
                  alt="destination"
                />
              </div>
            </div>
            <div className=" p-4">
              <div className="bg_gradient  ps-2">
                <Image
                  className=" w-100 rounded-4 tranform"
                  src={Destination4}
                  width={200}
                  height={300}
                  alt="destination"
                />
              </div>
            </div>
            <div className=" p-4">
              <div className="bg_gradient  ps-2">
                <Image
                  className=" w-100 rounded-4 tranform"
                  src={Destination5}
                  width={200}
                  height={300}
                  alt="destination"
                />
              </div>
            </div>
            <div className=" p-4">
              <div className="bg_gradient  ps-2">
                <Image
                  className=" w-100 rounded-4 tranform"
                  src={Destination6}
                  width={200}
                  height={300}
                  alt="destination"
                />
              </div>
            </div>
            <div className=" p-4">
              <div className="bg_gradient  ps-2">
                <Image
                  className=" w-100 rounded-4 tranform"
                  src={Destination7}
                  width={200}
                  height={300}
                  alt="destination"
                />
              </div>
            </div>
            <div className=" p-4">
              <div className="bg_gradient  ps-2">
                <Image
                  className=" w-100 rounded-4 tranform"
                  src={Destination8}
                  width={200}
                  height={300}
                  alt="destination"
                />
              </div>
            </div>

            {/* Add more destination images as needed */}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default HottestDestination;
