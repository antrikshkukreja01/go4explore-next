"use client";

import React, { useState, useEffect } from "react";
// import { Modal, Button } from "react-bootstrap";
import Slider from "react-slick";
import reviewImg1 from "../assets/img/webp/PrernaLohmore.webp";
import reviewImg2 from "../assets/img/webp/ShashankDalvi.webp";
import reviewImg3 from "../assets/img/webp/SmrutiSanjivBorkar.webp";
import reviewImg4 from "../assets/img/webp/kavishgoyal.webp";
import reviewImg5 from "../assets/img/webp/MayurPatel.webp";
import reviewImg6 from "../assets/img/webp/AkhilVerma.webp";
import YouTube_icon from "../assets/img/webp/youtube_logo.webp";
import image1 from "../assets/img/webp/ProductPhoto.webp";
import smiling from "../assets/img/png/happy_face.png";
import star from "../assets/img/png/star.png";
import Image from "next/image";

const Reviews = () => {
  //   const [showModal, setShowModal] = useState(false);
  //   const [selectedVideoUrl, setSelectedVideoUrl] = useState("");

  //   const testimonials = [
  //     {
  //       videoUrl: "https://www.youtube.com/embed/oYRoeD47aEI",
  //       thumbnailUrl: image1,
  //     },
  //     {
  //       videoUrl: "https://www.youtube.com/embed/xyz123",
  //       thumbnailUrl: image1,
  //     },
  //     {
  //       videoUrl: "https://www.youtube.com/embed/abc456",
  //       thumbnailUrl: image1,
  //     },
  //   ];

  //   const openModal = (videoUrl) => {
  //     setSelectedVideoUrl(videoUrl);
  //     setShowModal(true);
  //   };

  //   const closeModal = () => {
  //     setSelectedVideoUrl("");
  //     setShowModal(false);
  //   };

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const sliderSettings2 = {
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
  };

  return (
    <section className="py-5 bg_gray overflow-hidden">
      <div className=" container">
        <h2 className="font_poppins mb-0 mb-sm-5 fs_xl fw-semibold text-capitalize text-black text-center">
          See What Travellers Are Saying{" "}
          <Image
            width={30}
            className=" mb-1 ms-2"
            src={smiling}
            alt="smiling"
          />
        </h2>
        <div className=" row align-items-center">
          <div className=" col-xl-6 mt-4">
            <Slider
              dots={true}
              infinite
              arrows={false}
              autoplay
              autoplaySpeed={3000}
              slidesToShow={1}
              slidesToScroll={1}
            >
              {/* {testimonials.map((testimonial, index) => (
                // <div
                //   key={index}
                //   className="h_580 position-relative pointer"
                //   onClick={() => openModal(testimonial.videoUrl)}
                // >
                //   <Image
                //     className="w-100 h-100 rounded-4"
                //     src={testimonial.thumbnailUrl}
                //     alt={`testimonial-${index}`}
                //   />
                //   <span className="position-absolute top-50 start-50 translate-middle ">
                //     <Image
                //       className="w-100"
                //       src={YouTube_icon}
                //       alt="YouTube_icon"
                //     />
                //   </span>
                // </div>
              ))} */}
              <a className=" w-100" href="#">
                <Image
                  className=" h-300 rounded-4 w-100"
                  src={image1}
                  alt="img"
                />
              </a>
              <a className=" w-100" href="#">
                <Image
                  className=" h-300 rounded-4 w-100"
                  src={image1}
                  alt="img"
                />
              </a>
              <a className=" w-100" href="#">
                <Image
                  className=" h-300 rounded-4 w-100"
                  src={image1}
                  alt="img"
                />
              </a>
            </Slider>
          </div>
          <div className="ps-xl-5 col-xl-6   mt-5 mt-xl-0">
            <div className=" row justify-content-center">
              <Slider className=" d-xl-none" {...sliderSettings}>
                <div className="mt-4 col-md-6 col-xl-12">
                  <div className="bg_gradient h_200">
                    <div className="box_review_small  w-100">
                      <div className="d-flex justify-content-center align-items-center gap-2 gap-sm-0">
                        <Image
                          width={100}
                          height={100}
                          className=" w_50px d-sm-none "
                          src={reviewImg1}
                          alt="man"
                        />
                        <div className=" d-flex flex-column flex-sm-row justify-content-between w100 ">
                          <p className="mb-0 clr_blue fs_sm fw-semibold font_poppins mt-2 white_space">
                            Prerna Lohmore
                          </p>
                          <span className="d-flex align-items-center gap-1 gap-sm-2  fs_sm">
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 d-flex align-items-center flex-column flex-sm-row flex-md-column flex-lg-row gap-5">
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
                <div className="mt-4 col-md-6 col-xl-12">
                  <div className="bg_gradient h_200">
                    <div className="box_review_small  w-100">
                      <div className="d-flex justify-content-center align-items-center gap-2 gap-sm-0">
                        <Image
                          width={100}
                          height={100}
                          className=" w_50px d-sm-none "
                          src={reviewImg4}
                          alt="man"
                        />
                        <div className=" d-flex flex-column flex-sm-row justify-content-between w100 ">
                          <p className="mb-0 clr_blue fs_sm fw-semibold font_poppins mt-2 white_space">
                            Kavish Goyal
                          </p>
                          <span className="d-flex align-items-center gap-1 gap-sm-2  fs_sm">
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 d-flex align-items-center flex-column flex-sm-row flex-md-column flex-lg-row gap-5">
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
                <div className="mt-4 col-md-6 col-xl-12">
                  <div className="bg_gradient h_200">
                    <div className="box_review_small  w-100">
                      <div className="d-flex justify-content-center align-items-center gap-2 gap-sm-0">
                        <Image
                          width={100}
                          height={100}
                          className=" w_50px d-sm-none "
                          src={reviewImg6}
                          alt="man"
                        />
                        <div className=" d-flex flex-column flex-sm-row justify-content-between w100 ">
                          <p className="mb-0 clr_blue fs_sm fw-semibold font_poppins mt-2 white_space">
                            Akhil Verma
                          </p>
                          <span className="d-flex align-items-center gap-1 gap-sm-2  fs_sm">
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 d-flex align-items-center flex-column flex-sm-row flex-md-column flex-lg-row gap-5">
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
                <div className="mt-4 col-md-6 col-xl-12">
                  <div className="bg_gradient h_200">
                    <div className="box_review_small  w-100">
                      <div className="d-flex justify-content-center align-items-center gap-2 gap-sm-0">
                        <Image
                          width={100}
                          height={100}
                          className=" w_50px d-sm-none "
                          src={reviewImg5}
                          alt="man"
                        />
                        <div className=" d-flex flex-column flex-sm-row justify-content-between w100 ">
                          <p className="mb-0 clr_blue fs_sm fw-semibold font_poppins mt-2 white_space">
                            Mayur Patel
                          </p>
                          <span className="d-flex align-items-center gap-1 gap-sm-2  fs_sm">
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 d-flex align-items-center flex-column flex-sm-row flex-md-column flex-lg-row gap-5">
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
                <div className="mt-4 col-md-6 col-xl-12">
                  <div className="bg_gradient h_200">
                    <div className="box_review_small  w-100">
                      <div className="d-flex justify-content-center align-items-center gap-2 gap-sm-0">
                        <Image
                          width={100}
                          height={100}
                          className=" w_50px d-sm-none "
                          src={reviewImg2}
                          alt="man"
                        />
                        <div className=" d-flex flex-column flex-sm-row justify-content-between w100 ">
                          <p className="mb-0 clr_blue fs_sm fw-semibold font_poppins mt-2 white_space">
                            Shashank Dalvi
                          </p>
                          <span className="d-flex align-items-center gap-1 gap-sm-2  fs_sm">
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 d-flex align-items-center flex-column flex-sm-row flex-md-column flex-lg-row gap-5">
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
                <div className="mt-4 col-md-6 col-xl-12">
                  <div className="bg_gradient h_200">
                    <div className="box_review_small  w-100">
                      <div className="d-flex justify-content-center align-items-center gap-2 gap-sm-0">
                        <Image
                          width={100}
                          height={100}
                          className=" w_50px d-sm-none "
                          src={reviewImg3}
                          alt="man"
                        />
                        <div className=" d-flex flex-column flex-sm-row justify-content-between w100 ">
                          <p className="mb-0 clr_blue fs_sm fw-semibold font_poppins mt-2 white_space">
                            Smruti Sanjiv Borkar
                          </p>
                          <span className="d-flex align-items-center gap-1 gap-sm-2  fs_sm">
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                            <Image width={20} src={star} alt="star" />
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 d-flex align-items-center flex-column flex-sm-row flex-md-column flex-lg-row gap-5">
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
              </Slider>
              <Slider className=" d-none d-xl-flex" {...sliderSettings2}>
                <div className="mt-4 col-md-6 col-xl-12">
                  <div className="bg_gradient h-100">
                    <div className="box_review_small  w-100">
                      <div className="d-flex justify-content-center align-items-center gap-2 gap-sm-0">
                        <div className=" d-flex flex-column flex-sm-row justify-content-between w100 ">
                          <p className="mb-0 clr_blue fs_sm fw-semibold font_poppins mt-2 white_space">
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
                          width={100}
                          height={100}
                          className=" d-none d-sm-inline"
                          src={reviewImg1}
                          alt="man"
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
                <div className="mt-4 col-md-6 col-xl-12">
                  <div className="bg_gradient h-100">
                    <div className="box_review_small  w-100">
                      <div className="d-flex justify-content-center align-items-center gap-2 gap-sm-0">
                        <div className=" d-flex flex-column flex-sm-row justify-content-between w100 ">
                          <p className="mb-0 clr_blue fs_sm fw-semibold font_poppins mt-2 white_space">
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
                          width={100}
                          height={100}
                          className=" d-none d-sm-inline"
                          src={reviewImg4}
                          alt="man"
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
                <div className="mt-4 col-md-6 col-xl-12">
                  <div className="bg_gradient h-100">
                    <div className="box_review_small  w-100">
                      <div className="d-flex justify-content-center align-items-center gap-2 gap-sm-0">
                        <div className=" d-flex flex-column flex-sm-row justify-content-between w100 ">
                          <p className="mb-0 clr_blue fs_sm fw-semibold font_poppins mt-2 white_space">
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
                          width={100}
                          height={100}
                          className=" d-none d-sm-inline"
                          src={reviewImg6}
                          alt="man"
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
                <div className="mt-4 col-md-6 col-xl-12">
                  <div className="bg_gradient h-100">
                    <div className="box_review_small  w-100">
                      <div className="d-flex justify-content-center align-items-center gap-2 gap-sm-0">
                        <div className=" d-flex flex-column flex-sm-row justify-content-between w100 ">
                          <p className="mb-0 clr_blue fs_sm fw-semibold font_poppins mt-2 white_space">
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
                          width={100}
                          height={100}
                          className=" d-none d-sm-inline"
                          src={reviewImg5}
                          alt="man"
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
                <div className="mt-4 col-md-6 col-xl-12">
                  <div className="bg_gradient h-100">
                    <div className="box_review_small  w-100">
                      <div className="d-flex justify-content-center align-items-center gap-2 gap-sm-0">
                        <div className=" d-flex flex-column flex-sm-row justify-content-between w100 ">
                          <p className="mb-0 clr_blue fs_sm fw-semibold font_poppins mt-2 white_space">
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
                          width={100}
                          height={100}
                          className=" d-none d-sm-inline"
                          src={reviewImg3}
                          alt="man"
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
                <div className="mt-4 col-md-6 col-xl-12">
                  <div className="bg_gradient h-100">
                    <div className="box_review_small  w-100">
                      <div className="d-flex justify-content-center align-items-center gap-2 gap-sm-0">
                        <div className=" d-flex flex-column flex-sm-row justify-content-between w100 ">
                          <p className="mb-0 clr_blue fs_sm fw-semibold font_poppins mt-2 white_space">
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
                          width={100}
                          height={100}
                          className=" d-none d-sm-inline"
                          src={reviewImg2}
                          alt="man"
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

      {/* Modal for Video Popup */}
      {/* <Modal show={showModal} onHide={closeModal} size="lg" centered>
        <Modal.Body className="text-center">
          <Button variant="danger" className="close-btn" onClick={closeModal}>
            &times;
          </Button>
          {selectedVideoUrl && (
            <iframe
              title="testimonial-video"
              width="100%"
              height="500"
              src={selectedVideoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </Modal.Body>
      </Modal> */}
    </section>
  );
};

export default Reviews;
