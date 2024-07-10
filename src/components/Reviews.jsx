"use client";
import React, { useState, useEffect } from "react";
import { fetchReviewsData } from "./Api";
import Slider from "react-slick";
import image1 from "../assets/img/webp/ProductPhoto.webp";
import smiling from "../assets/img/png/happy_face.png";
import star from "../assets/img/png/star.png";
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
      <div className="container">
        <h2 className="font_poppins mb-0 mb-sm-5 fs_xl fw-semibold text-capitalize text-black text-center">
          See What Travellers Are Saying{" "}
          <Image width={30} className="mb-1 ms-2" src={smiling} alt="smiling" />
        </h2>
        <div className="row align-items-center">
          <div className="col-xl-6 mt-4">
            <Slider {...sliderSettings}>
              <a className="w-100">
                <Image
                  className="h-300 rounded-4 w-100"
                  src={image1}
                  alt="img"
                />
              </a>
              <a className="w-100">
                <Image
                  className="h-300 rounded-4 w-100"
                  src={image1}
                  alt="img"
                />
              </a>
              <a className="w-100">
                <Image
                  className="h-300 rounded-4 w-100"
                  src={image1}
                  alt="img"
                />
              </a>
            </Slider>
          </div>
          <div className="ps-xl-5 col-xl-6 mt-5 mt-xl-0">
            <div className="row justify-content-center">
              <Slider className="d-xl-none" {...sliderSettings}>
                {data.data.map((reviews) => (
                  <li className="p-3" key={reviews.id}>
                    <div className="bg_gradient h-100">
                      <div className="box_review_small w-100">
                        <div className="d-flex justify-content-center align-items-center gap-2 gap-sm-0">
                          <div className=" d-flex align-items-center gap-2">
                            {" "}
                            <img
                              className="d-sm-none"
                              src={reviews.user.image}
                              height={50}
                              width={50}
                              alt="img"
                            />
                            <div className="d-flex flex-column flex-sm-row justify-content-between w-100">
                              <p className="mb-0 text-capitalize clr_blue fs_sm fw-semibold font_poppins  white_space">
                                {reviews.user.name}
                              </p>
                              <span className="d-flex align-items-center gap-sm-2 gap-md-0 gap-lg-2 fs_sm">
                                {Array(5)
                                  .fill()
                                  .map((_, i) => (
                                    <Image
                                      key={i}
                                      width={20}
                                      src={star}
                                      alt="star"
                                    />
                                  ))}
                              </span>
                            </div>{" "}
                          </div>
                        </div>
                        <div className="mt-3 d-flex align-items-center flex-column flex-sm-row flex-md-column flex-lg-row gap-5">
                          <p className="fs-13 fw-normal clr_blue font_poppins mb-0">
                            {reviews.comment.length > 100
                              ? `${reviews.comment.substring(0, 97)}...`
                              : reviews.comment}
                            <a
                              target="_blank"
                              className="mb-3 me-3 fw-bold fs_xsm clr_blue position-absolute bottom-0 end-0"
                            >
                              Read More
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </Slider>
              <Slider className="d-none d-xl-flex mt-4" {...sliderSettings2}>
                {data.data.map((reviews) => (
                  <li className="p-3 " key={reviews.id}>
                    <div className="bg_gradient h-100">
                      <div className="box_review_small w-100">
                        <div className="d-flex justify-content-center align-items-center gap-2 gap-sm-0">
                          <div className="d-flex flex-column flex-sm-row justify-content-between w-100">
                            <p className="mb-0 text-capitalize clr_blue fs_sm fw-semibold font_poppins mt-2 white_space">
                              {reviews.user.name}
                            </p>
                            <span className="d-flex align-items-center gap-sm-2 gap-md-0 gap-lg-2 fs_sm">
                              {Array(5)
                                .fill()
                                .map((_, i) => (
                                  <Image
                                    key={i}
                                    width={20}
                                    src={star}
                                    alt="star"
                                  />
                                ))}
                            </span>
                          </div>
                        </div>
                        <div className="mt-3 d-flex align-items-center flex-column flex-sm-row flex-md-column flex-lg-row gap-5">
                          <img
                            className="d-none d-sm-inline"
                            src={reviews.user.image}
                            height={80}
                            width={80}
                            alt="img"
                          />
                          <p className="fs-13 fw-normal clr_blue font_poppins mb-0">
                            {reviews.comment.length > 200
                              ? `${reviews.comment.substring(0, 197)}...`
                              : reviews.comment}
                            <a
                              target="_blank"
                              className="mb-3 me-3 fw-bold fs_xsm clr_blue position-absolute bottom-0 end-0"
                            >
                              Read More
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
