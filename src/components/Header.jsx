"use client";
import React from "react";
import location from "../assets/img/webp/navigation_pin.webp";
import search from "../assets/img/webp/search.webp";
import Image from "next/image";
import Slider from "react-slick";
import HeaderVideo from "../assets/HomepageVideo2.mp4";

const Header = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <section className="position-relative">
      <div className="w-100">
        <video className="Header_video" muted loop autoPlay>
          <source src={HeaderVideo} type="video/mp4" />
        </video>
        <div className="container">
          <div className="home-content">
            <h1 className="header-title overflow-hidden">
              Book to Experience
              <Slider {...settings}>
                <div className="white_space">Diverse Landscapes</div>
                <div className="white_space">Food & Culture</div>
                <div className="white_space">New Friendships</div>
              </Slider>
            </h1>
            <div className="d-flex justify-content-center w-100">
              <div className="pt-2 w_100 mt-4">
                <div className="d-flex gap-2">
                  <a
                    className="button text-decoration-none text-white fw-bold font_poppins fs_xsm"
                    href="#"
                  >
                    Trip Packages
                  </a>
                  <a
                    className="button text-decoration-none text-white fw-bold font_poppins fs_xsm"
                    href="#"
                  >
                    Travel Guides
                  </a>
                </div>
                <div className="bg-white input d-flex">
                  <Image
                    width={30}
                    height={30}
                    className="w_30"
                    src={location}
                    alt="location"
                  />
                  <input
                    type="text"
                    className="input_style"
                    required
                    list="Places"
                    placeholder="Pick Best Suitable Packages, Destinations & More For You"
                  />
                  <datalist id="Places">
                    <option value="Bali"></option>
                    <option value="Chopta"></option>
                    <option value="Jibhi"></option>
                    <option value="Spiti"></option>
                    <option value="Vietnam"></option>
                    <option value="Kazakhstan"></option>
                    <option value="Thailand"></option>
                    <option value="Kashmir"></option>
                  </datalist>
                  <Image
                    width={30}
                    height={30}
                    className="w_30"
                    src={search}
                    alt="search"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
