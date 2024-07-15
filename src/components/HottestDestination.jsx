"use client";
import spitiVally from "../assets/img/webp/spitiVallyCard.jpg";
import thailand from "../assets/img/webp/thailandCard.jpg";
import kazakhstan from "../assets/img/webp/kazakhstanCard.jpg";
import bali from "../assets/img/webp/baliCard.jpg";
import singapore from "../assets/img/webp/SingaporeCard.jpg";
import himachalPradesh from "../assets/img/webp/HimachalPradeshCard.jpg";
import vietnam from "../assets/img/webp/vietnamCard.jpg";
import dubai from "../assets/img/webp/dubaiCard.jpg";
import fire from "../assets/img/png/fires_emoji.png";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import Link from "next/link";

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
            <Image className=" h-auto" width={30} src={fire} alt="fire" />
          </h2>
          <div className=" row mt-5 justify-content-center d-none d-sm-flex ">
            <div className="p-4 col-6 col-md-4 col-lg-3">
              <Link
                className="text-decoration-none"
                href="/trip/spiti-valley-tour-packages"
              >
                <div className="bg_gradient">
                  <Image
                    width={200}
                    height={370}
                    className=" w-100 rounded-4 tranform"
                    src={spitiVally}
                    alt="destination"
                    unoptimized
                  />
                </div>
              </Link>
            </div>
            <div className="p-4 col-6 col-md-4 col-lg-3">
              <Link className="text-decoration-none" href="/trip/thailand">
                <div className="bg_gradient">
                  <Image
                    width={200}
                    height={370}
                    className=" w-100 rounded-4 tranform "
                    src={thailand}
                    alt="destination"
                    unoptimized
                  />
                </div>{" "}
              </Link>
            </div>
            <div className="p-4 col-6 col-md-4 col-lg-3">
              <Link className="text-decoration-none" href="/trip/vietnam">
                <div className="bg_gradient">
                  <Image
                    width={200}
                    height={370}
                    className=" w-100 rounded-4 tranform "
                    src={vietnam}
                    alt="destination"
                    unoptimized
                  />
                </div>
              </Link>
            </div>
            <div className="p-4 col-6 col-md-4 col-lg-3">
              <Link className="text-decoration-none" href="/trip/dubai">
                <div className="bg_gradient">
                  <Image
                    width={200}
                    height={370}
                    className=" w-100 rounded-4 tranform "
                    src={dubai}
                    alt="destination"
                    unoptimized
                  />
                </div>{" "}
              </Link>
            </div>
            <div className="p-4 col-6 col-md-4 col-lg-3">
              <Link className="text-decoration-none" href="/trip/bali">
                <div className="bg_gradient">
                  <Image
                    width={200}
                    height={370}
                    className=" w-100 rounded-4 tranform "
                    src={bali}
                    alt="destination"
                    unoptimized
                  />
                </div>{" "}
              </Link>
            </div>
            <div className="p-4 col-6 col-md-4 col-lg-3">
              <Link className="text-decoration-none" href="/trip/singapore">
                <div className="bg_gradient">
                  <Image
                    width={200}
                    height={370}
                    className=" w-100 rounded-4 tranform "
                    src={singapore}
                    alt="destination"
                    unoptimized
                  />
                </div>{" "}
              </Link>
            </div>
            <div className="p-4 col-6 col-md-4 col-lg-3">
              <Link
                className="text-decoration-none"
                href="/trip/himachal-pradesh-tour-packages"
              >
                <div className="bg_gradient">
                  <Image
                    width={200}
                    height={370}
                    className=" w-100 rounded-4 tranform "
                    src={himachalPradesh}
                    alt="destination"
                    unoptimized
                  />
                </div>{" "}
              </Link>
            </div>
            <div className="p-4 col-6 col-md-4 col-lg-3">
              <Link
                className="text-decoration-none"
                href="/trip/kazakhstan-tour-packages"
              >
                <div className="bg_gradient">
                  <Image
                    width={200}
                    height={370}
                    className=" w-100 rounded-4 tranform "
                    src={kazakhstan}
                    alt="destination"
                    unoptimized
                  />
                </div>{" "}
              </Link>
            </div>
          </div>
          <Slider className=" d-sm-none " {...settings}>
            <div className=" p-4">
              <div className="bg_gradient  ps-2">
                <Image
                  className=" w-100 rounded-4 tranform"
                  src={spitiVally}
                  width={200}
                  height={300}
                  alt="destination"
                  unoptimized
                />
              </div>
            </div>
            <div className=" p-4">
              <div className="bg_gradient  ps-2">
                <Image
                  className=" w-100 rounded-4 tranform"
                  src={thailand}
                  width={200}
                  height={300}
                  alt="destination"
                  unoptimized
                />
              </div>
            </div>
            <div className=" p-4">
              <div className="bg_gradient  ps-2">
                <Image
                  className=" w-100 rounded-4 tranform"
                  src={vietnam}
                  width={200}
                  height={300}
                  alt="destination"
                  unoptimized
                />
              </div>
            </div>
            <div className=" p-4">
              <div className="bg_gradient  ps-2">
                <Image
                  className=" w-100 rounded-4 tranform"
                  src={dubai}
                  width={200}
                  height={300}
                  alt="destination"
                  unoptimized
                />
              </div>
            </div>
            <div className=" p-4">
              <div className="bg_gradient  ps-2">
                <Image
                  className=" w-100 rounded-4 tranform"
                  src={bali}
                  width={200}
                  height={300}
                  alt="destination"
                  unoptimized
                />
              </div>
            </div>
            <div className=" p-4">
              <div className="bg_gradient  ps-2">
                <Image
                  className=" w-100 rounded-4 tranform"
                  src={singapore}
                  width={200}
                  height={300}
                  alt="destination"
                  unoptimized
                />
              </div>
            </div>
            <div className=" p-4">
              <div className="bg_gradient  ps-2">
                <Image
                  className=" w-100 rounded-4 tranform"
                  src={himachalPradesh}
                  width={200}
                  height={300}
                  alt="destination"
                  unoptimized
                />
              </div>
            </div>
            <div className=" p-4">
              <div className="bg_gradient  ps-2">
                <Image
                  className=" w-100 rounded-4 tranform"
                  src={kazakhstan}
                  width={200}
                  height={300}
                  alt="destination"
                  unoptimized
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
