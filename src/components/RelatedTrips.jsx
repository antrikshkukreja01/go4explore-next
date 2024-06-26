"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img_himachal from "../assets/img/webp/Himachal.webp";
import img_kashmir from "../assets/img/webp/Kashmir.webp";
import img_kerala from "../assets/img/webp/Kerala.webp";
import img_uttarakhand from "../assets/img/webp/Uttarakhand.webp";
import img_bhutan from "../assets/img/webp/Bhutan.webp";
import Image from "next/image";

const RelatedTrips = () => {
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
      <section id="relatedtrips" className="py-4 py-sm-5">
        <div className=" container">
          <Slider {...settings}>
            <div className=" d-flex flex-column px-2  align-items-center mx-auto">
              <Image
                className=" rounded-4  h_300 w-100 "
                src={img_himachal}
                alt="img_location"
              />
              <p className=" mb-0 fw-medium fs_md text-black font_poppins text-center mt-3">
                Spiti Valley - <br />
                Winter Edition
              </p>
              <p className=" mb-0 fw-medium fs_xsm clr_gray font_poppins text-center ">
                Starting Price ₹18,000
              </p>
            </div>
            <div className=" d-flex flex-column px-2  align-items-center mx-auto">
              <Image
                className=" rounded-4  h_300 w-100 "
                src={img_uttarakhand}
                alt="img_location"
              />
              <p className=" mb-0 fw-medium fs_md text-black font_poppins text-center mt-3">
                Spiti Valley - <br />
                Manali Edition
              </p>
              <p className=" mb-0 fw-medium fs_xsm clr_gray font_poppins text-center ">
                Starting Price ₹29000
              </p>
            </div>
            <div className=" d-flex flex-column px-2  align-items-center mx-auto">
              <Image
                className=" rounded-4  h_300 w-100 "
                src={img_kashmir}
                alt="img_location"
              />
              <p className=" mb-0 fw-medium fs_md text-black font_poppins text-center mt-3">
                Spiti Valley Circuit <br /> Trip with Manali
              </p>
              <p className=" mb-0 fw-medium fs_xsm clr_gray font_poppins text-center ">
                Starting Price ₹15000
              </p>
            </div>
            <div className=" d-flex flex-column px-2  align-items-center mx-auto">
              <Image
                className=" rounded-4  h_300 w-100 "
                src={img_bhutan}
                alt="img_location"
              />
              <p className=" mb-0 fw-medium fs_md text-black font_poppins text-center mt-3">
                Spiti Valley - <br />
                Bike Edition
              </p>
              <p className=" mb-0 fw-medium fs_xsm clr_gray font_poppins text-center ">
                Starting Price ₹18000
              </p>
            </div>
            <div className=" d-flex flex-column px-2  align-items-center mx-auto">
              <Image
                className=" rounded-4  h_300 w-100 "
                src={img_kerala}
                alt="img_location"
              />
              <p className=" mb-0 fw-medium fs_md text-black font_poppins text-center mt-3">
                Spiti Valley - <br />
                All Girls Trip
              </p>
              <p className=" mb-0 fw-medium fs_xsm clr_gray font_poppins text-center ">
                Starting Price ₹15000
              </p>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default RelatedTrips;
