"use client";
import React from "react";
import plane_img from "../assets/img/webp/blue_plane.webp";
import bed_img from "../assets/img/webp/bed.webp";
import walking_man_img from "../assets/img/webp/walking_man.webp";
import seven_img from "../assets/img/webp/seven.webp";
import thumbup_img from "../assets/img/webp/thums_up.webp";
import mobile_img from "../assets/img/webp/mobile.webp";
import mountains_img from "../assets/img/webp/mountains.webp";
import men_searching_img from "../assets/img/webp/men_searching.webp";
import malegroup from "../assets/img/webp/malegroup.webp";
import Slider from "react-slick";
import party from "../assets/img/png/party_emoji.png";
import Image from "next/image";

const TravelWithUs = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: "20px , 40px ",
        },
      },
    ],
  };
  return (
    <>
      <section className=" py-5">
        <div className=" container">
          <h2 className=" font_poppins mb-lg-5 fs_xl text-center fw-semibold text-capitalize text-black text-sm-center">
            Why Select To Travel With Us?{" "}
            <Image width={30} className="  ms-2" src={party} alt="party" />
          </h2>
          <div className=" row justify-content-center d-none d-lg-flex">
            <div className=" pt-4 col-md-6 col-lg-4">
              <a className=" text-decoration-none" href="#">
                <div className="bg_gradient">
                  <div className="boxTravelWithUs ">
                    <span className=" d-flex align-items-center flex-column flex-sm-row gap-2 gap-sm-4">
                      <Image height={80} width={80} src={bed_img} alt="img" />
                      <p className=" fs_lg clr_blue fw-semibold font_poppins mb-0">
                        Handpicked Stays with Friendly Hosts
                      </p>
                    </span>
                    <p className=" mb-0 text-sm-center mt-2 fs_xsm clr_blue font_poppins fw-normal ">
                      All our accommodations are verified, pre-checked for
                      quality and hygiene.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className=" pt-4 col-md-6 col-lg-4">
              <a className=" text-decoration-none" href="#">
                <div className="bg_gradient">
                  <div className="boxTravelWithUs ">
                    <span className=" d-flex align-items-center flex-column flex-sm-row gap-2 gap-sm-4">
                      <Image height={80} width={80} src={plane_img} alt="img" />
                      <p className=" fs_lg clr_blue fw-semibold font_poppins mb-0">
                        2500+ Trips Hosted PAN India & Abroad
                      </p>
                    </span>
                    <p className=" mb-0 text-sm-center mt-2 fs_xsm clr_blue font_poppins fw-normal ">
                      From group trips to custom tours exploring diverse
                      landscapes, cultures & lots more.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className=" pt-4 col-md-6 col-lg-4">
              <a className=" text-decoration-none" href="#">
                <div className="bg_gradient">
                  <div className="boxTravelWithUs ">
                    <span className=" d-flex align-items-center flex-column flex-sm-row gap-2 gap-sm-4">
                      <Image
                        height={80}
                        width={80}
                        src={walking_man_img}
                        alt="img"
                      />
                      <p className=" fs_lg clr_blue fw-semibold font_poppins mb-0">
                        Solo Travel Friendly Trips for All
                      </p>
                    </span>
                    <p className=" mb-0 text-sm-center mt-2 fs_xsm clr_blue font_poppins fw-normal ">
                      We provide absolutely safe and comfortable environment for
                      solo travellers.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className=" pt-4 col-md-6 col-lg-4">
              <a className=" text-decoration-none" href="#">
                <div className="bg_gradient">
                  <div className="boxTravelWithUs ">
                    <span className=" d-flex align-items-center flex-column flex-sm-row gap-2 gap-sm-4">
                      <Image
                        height={80}
                        width={80}
                        src={mountains_img}
                        alt="img"
                      />
                      <p className=" fs_lg clr_blue fw-semibold font_poppins mb-0">
                        Trip Itineraries Curated with Love
                      </p>
                    </span>
                    <p className=" mb-0 text-sm-center mt-2 fs_xsm clr_blue font_poppins fw-normal ">
                      Trip plans handcrafted by destination experts for
                      hassle-free travel experience.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className=" pt-4 col-md-6 col-lg-4">
              <a className=" text-decoration-none" href="#">
                <div className="bg_gradient">
                  <div className="boxTravelWithUs ">
                    <span className=" d-flex align-items-center flex-column flex-sm-row gap-2 gap-sm-4">
                      <Image height={80} width={80} src={seven_img} alt="img" />
                      <p className=" fs_lg clr_blue fw-semibold font_poppins mb-0">
                        7 Years of On-Ground Experience
                      </p>
                    </span>
                    <p className=" mb-0 text-sm-center mt-2 fs_xsm clr_blue font_poppins fw-normal ">
                      Being in Tourism industry for last 7 years, we put our
                      heart in planning your trips.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className=" pt-4 col-md-6 col-lg-4">
              <a className=" text-decoration-none" href="#">
                <div className="bg_gradient">
                  <div className="boxTravelWithUs ">
                    <span className=" d-flex align-items-center flex-column flex-sm-row gap-2 gap-sm-4">
                      <Image
                        height={80}
                        width={80}
                        src={thumbup_img}
                        alt="img"
                      />
                      <p className=" fs_lg clr_blue fw-semibold font_poppins mb-0">
                        Rated 4.8 Stars on Google Reviews
                      </p>
                    </span>
                    <p className=" mb-0 text-sm-center mt-2 fs_xsm clr_blue font_poppins fw-normal ">
                      Our growth lies in the memorable travel experiences we
                      provide to our travellers.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className=" pt-4 col-md-6 col-lg-4">
              <a className=" text-decoration-none" href="#">
                <div className="bg_gradient">
                  <div className="boxTravelWithUs ">
                    <span className=" d-flex align-items-center flex-column flex-sm-row gap-2 gap-sm-4">
                      <Image
                        height={80}
                        width={80}
                        src={mobile_img}
                        alt="img"
                      />
                      <p className=" fs_lg clr_blue fw-semibold font_poppins mb-0">
                        Hassle-Free Booking Process
                      </p>
                    </span>
                    <p className=" mb-0 text-sm-center mt-2 fs_xsm clr_blue font_poppins fw-normal ">
                      Seamless booking process on all our trips with the help or
                      our travel experts.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className=" pt-4 col-md-6 col-lg-4">
              <a className=" text-decoration-none" href="#">
                <div className="bg_gradient">
                  <div className="boxTravelWithUs ">
                    <span className=" d-flex align-items-center flex-column flex-sm-row gap-2 gap-sm-4">
                      <Image
                        height={80}
                        width={80}
                        src={men_searching_img}
                        alt="img"
                      />
                      <p className=" fs_lg clr_blue fw-semibold font_poppins mb-0">
                        Filtering Like-Minded Travellers
                      </p>
                    </span>
                    <p className=" mb-0 text-sm-center mt-2 fs_xsm clr_blue font_poppins fw-normal ">
                      We make sure to bring only like-minded travellers on basis
                      of age, gender, comfort etc.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className=" pt-4 col-md-6 col-lg-4">
              <a className=" text-decoration-none" href="#">
                <div className="bg_gradient">
                  <div className="boxTravelWithUs ">
                    <span className=" d-flex align-items-center flex-column flex-sm-row gap-2 gap-sm-4">
                      <Image height={80} width={80} src={malegroup} alt="img" />
                      <p className=" fs_lg clr_blue fw-semibold font_poppins mb-0">
                        Experienced & Cool Trip Captains
                      </p>
                    </span>
                    <p className=" mb-0 text-sm-center mt-2 fs_xsm clr_blue font_poppins fw-normal ">
                      We appoint friendly trip leaders with strong leadership
                      qualities & high spirit!
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <Slider className=" d-lg-none" {...settings}>
            {" "}
            <a className=" px-3 mt-4 text-decoration-none" href="#">
              <div className="bg_gradient">
                <div className="boxTravelWithUs ">
                  <span className=" d-flex align-items-center flex-column flex-sm-row gap-2 gap-sm-4">
                    <Image height={80} width={80} src={bed_img} alt="img" />
                    <p className=" fs_lg clr_blue fw-semibold font_poppins mb-0">
                      Handpicked Stays with Friendly Hosts
                    </p>
                  </span>
                  <p className=" mb-0 text-sm-center mt-2 fs_xsm clr_blue font_poppins fw-normal ">
                    All our accommodations are verified, pre-checked for quality
                    and hygiene.
                  </p>
                </div>
              </div>
            </a>
            <a className=" px-3 mt-4 text-decoration-none" href="#">
              <div className="bg_gradient">
                <div className="boxTravelWithUs ">
                  <span className=" d-flex align-items-center flex-column flex-sm-row gap-2 gap-sm-4">
                    <Image height={80} width={80} src={plane_img} alt="img" />
                    <p className=" fs_lg clr_blue fw-semibold font_poppins mb-0">
                      2500+ Trips Hosted PAN India & Abroad
                    </p>
                  </span>
                  <p className=" mb-0 text-sm-center mt-2 fs_xsm clr_blue font_poppins fw-normal ">
                    From group trips to custom tours exploring diverse
                    landscapes, cultures & lots more.
                  </p>
                </div>
              </div>
            </a>
            <a className=" px-3 mt-4 text-decoration-none" href="#">
              <div className="bg_gradient">
                <div className="boxTravelWithUs ">
                  <span className=" d-flex align-items-center flex-column flex-sm-row gap-2 gap-sm-4">
                    <Image
                      height={80}
                      width={80}
                      src={walking_man_img}
                      alt="img"
                    />
                    <p className=" fs_lg clr_blue fw-semibold font_poppins mb-0">
                      Solo Travel Friendly Trips for All
                    </p>
                  </span>
                  <p className=" mb-0 text-sm-center mt-2 fs_xsm clr_blue font_poppins fw-normal ">
                    We provide absolutely safe and comfortable environment for
                    solo travellers.
                  </p>
                </div>
              </div>
            </a>
            <a className=" px-3 mt-4 text-decoration-none" href="#">
              <div className="bg_gradient">
                <div className="boxTravelWithUs ">
                  <span className=" d-flex align-items-center flex-column flex-sm-row gap-2 gap-sm-4">
                    <Image
                      height={80}
                      width={80}
                      src={mountains_img}
                      alt="img"
                    />
                    <p className=" fs_lg clr_blue fw-semibold font_poppins mb-0">
                      Trip Itineraries Curated with Love
                    </p>
                  </span>
                  <p className=" mb-0 text-sm-center mt-2 fs_xsm clr_blue font_poppins fw-normal ">
                    Trip plans handcrafted by destination experts for
                    hassle-free travel experience.
                  </p>
                </div>
              </div>
            </a>
            <a className=" px-3 mt-4 text-decoration-none" href="#">
              <div className="bg_gradient">
                <div className="boxTravelWithUs ">
                  <span className=" d-flex align-items-center flex-column flex-sm-row gap-2 gap-sm-4">
                    <Image height={80} width={80} src={seven_img} alt="img" />
                    <p className=" fs_lg clr_blue fw-semibold font_poppins mb-0">
                      7 Years of On-Ground Experience
                    </p>
                  </span>
                  <p className=" mb-0 text-sm-center mt-2 fs_xsm clr_blue font_poppins fw-normal ">
                    Being in Tourism industry for last 7 years, we put our heart
                    in planning your trips.
                  </p>
                </div>
              </div>
            </a>
            <a className=" px-3 mt-4 text-decoration-none" href="#">
              <div className="bg_gradient">
                <div className="boxTravelWithUs ">
                  <span className=" d-flex align-items-center flex-column flex-sm-row gap-2 gap-sm-4">
                    <Image height={80} width={80} src={thumbup_img} alt="img" />
                    <p className=" fs_lg clr_blue fw-semibold font_poppins mb-0">
                      Rated 4.8 Stars on Google Reviews
                    </p>
                  </span>
                  <p className=" mb-0 text-sm-center mt-2 fs_xsm clr_blue font_poppins fw-normal ">
                    Our growth lies in the memorable travel experiences we
                    provide to our travellers.
                  </p>
                </div>
              </div>
            </a>
            <a className=" px-3 mt-4 text-decoration-none" href="#">
              <div className="bg_gradient">
                <div className="boxTravelWithUs ">
                  <span className=" d-flex align-items-center flex-column flex-sm-row gap-2 gap-sm-4">
                    <Image height={80} width={80} src={mobile_img} alt="img" />
                    <p className=" fs_lg clr_blue fw-semibold font_poppins mb-0">
                      Hassle-Free Booking Process
                    </p>
                  </span>
                  <p className=" mb-0 text-sm-center mt-2 fs_xsm clr_blue font_poppins fw-normal ">
                    Seamless booking process on all our trips with the help or
                    our travel experts.
                  </p>
                </div>
              </div>
            </a>
            <a className=" px-3 mt-4 text-decoration-none" href="#">
              <div className="bg_gradient">
                <div className="boxTravelWithUs ">
                  <span className=" d-flex align-items-center flex-column flex-sm-row gap-2 gap-sm-4">
                    <Image
                      height={80}
                      width={80}
                      src={men_searching_img}
                      alt="img"
                    />
                    <p className=" fs_lg clr_blue fw-semibold font_poppins mb-0">
                      Filtering Like-Minded Travellers
                    </p>
                  </span>
                  <p className=" mb-0 text-sm-center mt-2 fs_xsm clr_blue font_poppins fw-normal ">
                    We make sure to bring only like-minded travellers on basis
                    of age, gender, comfort etc.
                  </p>
                </div>
              </div>
            </a>
            <a className=" px-3 mt-4 text-decoration-none" href="#">
              <div className="bg_gradient">
                <div className="boxTravelWithUs ">
                  <span className=" d-flex align-items-center flex-column flex-sm-row gap-2 gap-sm-4">
                    <Image height={80} width={80} src={malegroup} alt="img" />
                    <p className=" fs_lg clr_blue fw-semibold font_poppins mb-0">
                      Experienced & Cool Trip Captains
                    </p>
                  </span>
                  <p className=" mb-0 text-sm-center mt-2 fs_xsm clr_blue font_poppins fw-normal ">
                    We appoint friendly trip leaders with strong leadership
                    qualities & high spirit!
                  </p>
                </div>
              </div>
            </a>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default TravelWithUs;
