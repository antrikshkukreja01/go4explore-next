"use client";
import React, { useState, useEffect } from "react";
import { fetchReviewsData } from "./Api";
import Slider from "react-slick";
import image1 from "../assets/img/webp/ProductPhoto.webp";
import smiling from "../assets/img/png/happy_face.png";
import star from "../assets/img/png/star.png";
import reviewImg1 from "../assets/img/webp/PrernaLohmore.webp";
import reviewImg2 from "../assets/img/webp/ShashankDalvi.webp";
import reviewImg3 from "../assets/img/webp/SmrutiSanjivBorkar.webp";
import reviewImg4 from "../assets/img/webp/kavishgoyal.webp";
import reviewImg5 from "../assets/img/webp/MayurPatel.webp";
import reviewImg6 from "../assets/img/webp/AkhilVerma.webp";
import Image from "next/image";

const Reviews = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReviewsData()
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          vertical: false,
          verticalSwiping: false,
        },
      },
    ],
  };

  return (
    <section className="py-5 bg_gray overflow-hidden">
      <div className="container">
        <h2 className="font_poppins mb-0 mb-sm-5 fs_xl fw-semibold text-capitalize text-black text-center">
          See What Travellers Are Saying{" "}
          <Image width={30} className="mb-1 ms-2" src={smiling} alt="smiling" />
        </h2>
        <div className="align-items-center row">
          <div className=" mt-4 col-xl-6">
            <Slider
              dots={false}
              infinite
              arrows={false}
              autoplay
              autoplaySpeed={3000}
              slidesToShow={1}
              slidesToScroll={1}
            >
              <Image className=" rounded-4 h-300 px-1" src={image1} alt="img" />

              <Image className=" rounded-4 h-300 px-1" src={image1} alt="img" />
              <Image className=" rounded-4 h-300 px-1" src={image1} alt="img" />
              <Image className=" rounded-4 h-300 px-1" src={image1} alt="img" />
            </Slider>
          </div>
          <div className="ps-xl-5 col-xl-6   mt-4 mt-xl-0">
            <div className="justify-content-center">
              <Slider {...sliderSettings}>
                <div className="mt-4 col-md-6 col-xl-12">
                  <div className="bg_gradient h-100">
                    <div className="box_review_small  w-100">
                      <div className="d-flex justify-content-between align-items-center gap-2 gap-sm-0">
                        {" "}
                        <Image
                          width={50}
                          className=" d-sm-none"
                          src={reviewImg1}
                          alt="ReviewImg"
                        />
                        <div className=" d-flex flex-column flex-sm-row justify-content-between w-100 ">
                          <p className="mb-0 clr_blue fs_sm fw-semibold font_poppins mt-sm-2 white_space">
                            Prerna Lohmore
                          </p>
                          <span className="d-flex align-items-center gap-sm-2 gap-md-0 gap-lg-2 fs_sm">
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 d-flex align-items-center flex-column flex-sm-row flex-md-column flex-lg-row gap-5">
                        <Image
                          width={70}
                          className=" d-none d-sm-inline"
                          src={reviewImg1}
                          alt="ReviewImg"
                        />
                        <p className="fs-13 fw-normal clr_blue font_poppins mb-0 ">
                          So I had my first group trip with go4explore community
                          to Jibhi & Tirthan and it was awesome. Had a great
                          experience and would love to go for more trips with
                          them...
                          <a
                            target="_blank"
                            className=" mb-3 me-3  fw-bold fs_xsm clr_blue position-absolute bottom-0 end-0"
                            href="https://maps.app.goo.gl/wvRsADsVnuQaqR7q7"
                          >
                            Read More
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4  col-md-6 col-xl-12">
                  <div className="bg_gradient h-100">
                    <div className="box_review_small  w-100">
                      <div className="d-flex justify-content-between align-items-center gap-2 gap-sm-0">
                        {" "}
                        <Image
                          width={50}
                          className=" d-sm-none "
                          src={reviewImg4}
                          alt="ReviewImg"
                        />
                        <div className=" d-flex flex-column flex-sm-row justify-content-between w-100  ">
                          <p className="mb-0 clr_blue fs_sm fw-semibold font_poppins mt-sm-2 white_space">
                            Kavish Goyal
                          </p>
                          <span className="d-flex align-items-center gap-sm-2 gap-md-0 gap-lg-2 fs_sm">
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 d-flex align-items-center flex-column flex-sm-row flex-md-column flex-lg-row gap-5">
                        <Image
                          width={70}
                          className=" d-none d-sm-inline"
                          src={reviewImg4}
                          alt="ReviewImg"
                        />
                        <p className="fs-13 fw-normal clr_blue font_poppins mb-0 ">
                          It was my first trip with a travel community and I
                          found Go4Explore through Instagram recommendations. I
                          went to Tirthan Valley & Jibhi with Go4Explore...
                          <a
                            target="_blank"
                            className=" mb-3 me-3  fw-bold fs_xsm clr_blue position-absolute bottom-0 end-0"
                            href="https://maps.app.goo.gl/4ffHVFBtvPF4ETbH8"
                          >
                            Read More
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4  col-md-6 col-xl-12">
                  <div className="bg_gradient h-100">
                    <div className="box_review_small  w-100">
                      <div className="d-flex justify-content-between align-items-center gap-2 gap-sm-0">
                        {" "}
                        <Image
                          width={50}
                          className=" d-sm-none "
                          src={reviewImg6}
                          alt="ReviewImg"
                        />
                        <div className=" d-flex flex-column flex-sm-row justify-content-between w-100  ">
                          <p className="mb-0 clr_blue fs_sm fw-semibold font_poppins mt-sm-2 white_space">
                            Akhil Verma
                          </p>
                          <span className="d-flex align-items-center gap-sm-2 gap-md-0 gap-lg-2 fs_sm">
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 d-flex align-items-center flex-column flex-sm-row flex-md-column flex-lg-row gap-5">
                        <Image
                          width={70}
                          className=" d-none d-sm-inline"
                          src={reviewImg6}
                          alt="ReviewImg"
                        />
                        <p className="fs-13 fw-normal clr_blue font_poppins mb-0 ">
                          I loved my Manali travel experience to with
                          Go4Explore. They took care of everything right from
                          the beginning to the end of the trip and every single
                          thing went quite smooth...
                          <a
                            target="_blank"
                            className=" mb-3 me-3  fw-bold fs_xsm clr_blue position-absolute bottom-0 end-0"
                            href="https://maps.app.goo.gl/5t6wMFsC9ZEig9829"
                          >
                            Read More
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4  col-md-6 col-xl-12">
                  <div className="bg_gradient h-100">
                    <div className="box_review_small  w-100">
                      <div className="d-flex justify-content-between align-items-center gap-2 gap-sm-0">
                        <Image
                          width={50}
                          className=" d-sm-none "
                          src={reviewImg5}
                          alt="ReviewImg"
                        />
                        <div className=" d-flex flex-column flex-sm-row justify-content-between w-100 ">
                          <p className="mb-0 clr_blue fs_sm fw-semibold font_poppins mt-sm-2 white_space">
                            Mayur Patel
                          </p>
                          <span className="d-flex align-items-center gap-sm-2 gap-md-0 gap-lg-2 fs_sm">
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 d-flex align-items-center flex-column flex-sm-row flex-md-column flex-lg-row gap-5">
                        <Image
                          width={70}
                          className=" d-none d-sm-inline"
                          src={reviewImg5}
                          alt="ReviewImg"
                        />
                        <p className="fs-13 fw-normal clr_blue font_poppins mb-0 ">
                          Julley Spiti, Recently I have visited Spiti Valley
                          with my wife. I was not that confident to do this trip
                          because of weather conditions But Go4Explore...
                          <a
                            target="_blank"
                            className=" mb-3 me-3  fw-bold fs_xsm clr_blue position-absolute bottom-0 end-0"
                            href="https://maps.app.goo.gl/Ff3W2w9AoaRoqzYo8"
                          >
                            Read More
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4  col-md-6 col-xl-12">
                  <div className="bg_gradient h-100">
                    <div className="box_review_small  w-100">
                      <div className="d-flex justify-content-between align-items-center gap-2 gap-sm-0">
                        <Image
                          width={50}
                          className=" d-sm-none"
                          src={reviewImg3}
                          alt="ReviewImg"
                        />
                        <div className=" d-flex flex-column flex-sm-row justify-content-between w-100  ">
                          <p className="mb-0 clr_blue fs_sm fw-semibold font_poppins mt-sm-2 white_space">
                            Smruti Sanjiv Borkar
                          </p>
                          <span className="d-flex align-items-center gap-sm-2 gap-md-0 gap-lg-2 fs_sm">
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 d-flex align-items-center flex-column flex-sm-row flex-md-column flex-lg-row gap-5">
                        <Image
                          width={70}
                          className=" d-none d-sm-inline"
                          src={reviewImg3}
                          alt="ReviewImg"
                        />
                        <p className="fs-13 fw-normal clr_blue font_poppins mb-0 ">
                          Memorable trip to Vietnam Everything was done with
                          perfection- right from visa process, selection of
                          hotels, local recommendations, and the hassle free...
                          <a
                            target="_blank"
                            className=" mb-3 me-3  fw-bold fs_xsm clr_blue position-absolute bottom-0 end-0"
                            href="https://maps.app.goo.gl/FiQVtCwQ5fhmxeXu7"
                          >
                            Read More
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4  col-md-6 col-xl-12">
                  <div className="bg_gradient h-100">
                    <div className="box_review_small  w-100">
                      <div className="d-flex justify-content-between align-items-center gap-2 gap-sm-0">
                        <Image
                          width={50}
                          className=" d-sm-none "
                          src={reviewImg2}
                          alt="ReviewImg"
                        />
                        <div className=" d-flex flex-column flex-sm-row justify-content-between w-100  ">
                          <p className="mb-0 clr_blue fs_sm fw-semibold font_poppins mt-sm-2 white_space">
                            Shashank Dalvi
                          </p>
                          <span className="d-flex align-items-center gap-sm-2 gap-md-0 gap-lg-2 fs_sm">
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 d-flex align-items-center flex-column flex-sm-row flex-md-column flex-lg-row gap-5">
                        <Image
                          width={70}
                          className=" d-none d-sm-inline"
                          src={reviewImg2}
                          alt="ReviewImg"
                        />
                        <p className="fs-13 fw-normal clr_blue font_poppins mb-0 ">
                          This Vietnam's adventure was a sensory delight. From
                          bustling Hanoi streets, Ho Chi Minh City to serene
                          Halong Bay, each moment unveiled the country's rich
                          tapestry...
                          <a
                            target="_blank"
                            className=" mb-3 me-3  fw-bold fs_xsm clr_blue position-absolute bottom-0 end-0"
                            href="https://maps.app.goo.gl/6Ww92KkMz5c8vEzh8"
                          >
                            Read More
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
