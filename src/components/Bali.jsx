"use client";
import React from "react";
import Slider from "react-slick";
import bali from "../assets/img/webp/BaliSlider.webp";
import img_himachal from "../assets/img/webp/Himachal.webp";
import img_kashmir from "../assets/img/webp/Kashmir.webp";
import img_kerala from "../assets/img/webp/Kerala.webp";
import img_uttarakhand from "../assets/img/webp/Uttarakhand.webp";
import img_bhutan from "../assets/img/webp/Bhutan.webp";
import heart from "../assets/img/png/love_emoji.png";
import Image from "next/image";

const Bali = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  var settings2 = {
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
      <section id="BaliSlider" className=" py-4 py-sm-5">
        <div className="container">
          <Slider {...settings}>
            <Image className=" rounded-4   h_baliimg" src={bali} alt="bali" />
            <Image className=" rounded-4  h_baliimg" src={bali} alt="bali" />
            <Image className=" rounded-4  h_baliimg" src={bali} alt="bali" />
          </Slider>
          <h2 className=" font_poppins my-4 my-sm-5 fs_xl  fw-semibold text-capitalize text-black text-center">
            Find Your Perfect Escape
            <Image width={30} className="  ms-2" src={heart} alt="heart" />
          </h2>
          <Slider {...settings2}>
            <div className=" d-flex flex-column px-2  align-items-center mx-auto">
              <Image
                className=" rounded-4  h_300 w-100 "
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
                className=" rounded-4  h_300 w-100 "
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
                className=" rounded-4  h_300 w-100 "
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
                className=" rounded-4  h_300 w-100 "
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
                className=" rounded-4  h_300 w-100 "
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
    </>
  );
};

export default Bali;
