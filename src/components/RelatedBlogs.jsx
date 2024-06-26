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
import heart from "../assets/img/png/love_emoji.png";
import Image from "next/image";

const RelatedBlogs = () => {
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
      <section className="py-5">
        <div className=" container">
          <h2 className=" font_poppins mb-4 mb-sm-5 fs_xl  fw-semibold text-capitalize text-black text-center">
            Related Blog Reads For You
            <Image width={30} className="  ms-2" src={heart} alt="heart" />
          </h2>
          <Slider {...settings}>
            <div className=" d-flex flex-column px-4  align-items-center mx-auto">
              <Image
                className=" rounded-4  h_300 w-100 "
                src={img_himachal}
                alt="img_location"
              />
              <p className=" mb-0 fw-medium fs_xsm text-black font_poppins mt-3">
                A day in Kaza: best spots for cafe hopping in Spiti Valley trip
              </p>
            </div>
            <div className=" d-flex flex-column px-4  align-items-center mx-auto">
              <Image
                className=" rounded-4  h_300 w-100 "
                src={img_uttarakhand}
                alt="img_location"
              />
              <p className=" mb-0 fw-medium fs_xsm text-black font_poppins mt-3">
                A day in Kaza: best spots for cafe hopping in Spiti Valley trip
              </p>
            </div>
            <div className=" d-flex flex-column px-4  align-items-center mx-auto">
              <Image
                className=" rounded-4  h_300 w-100 "
                src={img_kashmir}
                alt="img_location"
              />
              <p className=" mb-0 fw-medium fs_xsm text-black font_poppins mt-3">
                A day in Kaza: best spots for cafe hopping in Spiti Valley trip
              </p>
            </div>
            <div className=" d-flex flex-column px-4  align-items-center mx-auto">
              <Image
                className=" rounded-4  h_300 w-100 "
                src={img_bhutan}
                alt="img_location"
              />
              <p className=" mb-0 fw-medium fs_xsm text-black font_poppins mt-3">
                A day in Kaza: best spots for cafe hopping in Spiti Valley trip
              </p>
            </div>
            <div className=" d-flex flex-column px-4  align-items-center mx-auto">
              <Image
                className=" rounded-4  h_300 w-100 "
                src={img_kerala}
                alt="img_location"
              />
              <p className=" mb-0 fw-medium fs_xsm text-black font_poppins mt-3">
                A day in Kaza: best spots for cafe hopping in Spiti Valley trip
              </p>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default RelatedBlogs;
