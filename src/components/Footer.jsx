"use client";
import React from "react";
import logo from "../assets/img/webp/logoblack.webp";
import payment from "../assets/img/webp/paymentmode.webp";
import instagarm from "../assets/img/webp/instagarm.webp";
import Youtube from "../assets/img/webp/youtube.webp";
import Linkdin from "../assets/img/webp/linkdin.webp";
import Whatsapp from "../assets/img/webp/whatsappicon.webp";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className=" py-4 py-sm-5  bg_gray">
        <div className=" container">
          <div className=" row pt-md-5">
            <div className="  col-6 col-md-3">
              <p className=" mb-2 mb-md-3 fw-semibold fs_md clr_blue font_poppins">
                Company
              </p>
              <article>
                <a
                  className=" fw-normal fs_xsm text-black font_poppins text-decoration-none"
                  href="#"
                >
                  About Us
                </a>
              </article>

              <article>
                {" "}
                <a
                  className=" fw-normal fs_xsm text-black font_poppins text-decoration-none"
                  href="#"
                >
                  Contact Us{" "}
                </a>
              </article>

              <article>
                <a
                  className=" fw-normal fs_xsm text-black font_poppins text-decoration-none"
                  href="#"
                >
                  Career With Us
                </a>
              </article>
              <article>
                <a
                  className=" fw-normal fs_xsm text-black font_poppins text-decoration-none"
                  href="#"
                >
                  Our Blogs
                </a>
              </article>
              <article>
                <Link
                  className=" fw-normal fs_xsm text-black font_poppins text-decoration-none"
                  href="/TravelFourm"
                >
                  Forums
                </Link>
              </article>
            </div>
            <div className="  col-6 col-md-3">
              <p className=" mb-2 mb-md-3 fw-semibold fs_md clr_blue font_poppins">
                Weekend Trips
              </p>
              <article>
                <a
                  className=" fw-normal fs_xsm text-black font_poppins text-decoration-none"
                  href="#"
                >
                  Chopta Tungnath
                </a>
              </article>
              <article>
                {" "}
                <a
                  className=" fw-normal fs_xsm text-black font_poppins text-decoration-none"
                  href="#"
                >
                  Manali Sissu
                </a>
              </article>
              <article>
                <a
                  className=" fw-normal fs_xsm text-black font_poppins text-decoration-none"
                  href="#"
                >
                  Manali Kasol
                </a>
              </article>
              <article>
                <a
                  className=" fw-normal fs_xsm text-black font_poppins text-decoration-none"
                  href="#"
                >
                  Jibhi & Tirthan Valley
                </a>
              </article>
              <article>
                <a
                  className=" fw-normal fs_xsm text-black font_poppins text-decoration-none"
                  href="#"
                >
                  Kasol Kheerganga
                </a>
              </article>
              <article>
                <a
                  className=" fw-normal fs_xsm text-black font_poppins text-decoration-none"
                  href="#"
                >
                  Mcleodganj Triund
                </a>
              </article>
            </div>
            <div className=" mt-4 mt-md-0 col-6 col-md-3">
              <p className=" mb-2 mb-md-3 fw-semibold fs_md clr_blue font_poppins">
                International
              </p>
              <article>
                <a
                  className=" fw-normal fs_xsm text-black font_poppins text-decoration-none"
                  href="#"
                >
                  Vietnam
                </a>
              </article>
              <article>
                {" "}
                <a
                  className=" fw-normal fs_xsm text-black font_poppins text-decoration-none"
                  href="#"
                >
                  Thailand
                </a>
              </article>
              <article>
                <a
                  className=" fw-normal fs_xsm text-black font_poppins text-decoration-none"
                  href="#"
                >
                  Kazakhstan
                </a>
              </article>
              <article>
                <a
                  className=" fw-normal fs_xsm text-black font_poppins text-decoration-none"
                  href="#"
                >
                  Bali
                </a>
              </article>
              <article>
                <a
                  className=" fw-normal fs_xsm text-black font_poppins text-decoration-none"
                  href="#"
                >
                  Dubai
                </a>
              </article>
              <article>
                <a
                  className=" fw-normal fs_xsm text-black font_poppins text-decoration-none"
                  href="#"
                >
                  Bhutan
                </a>
              </article>
            </div>
            <div className=" mt-4 mt-md-0 col-6 col-md-3">
              <p className=" mb-2 mb-md-3 fw-semibold fs_md clr_blue font_poppins">
                Quick Links
              </p>

              <article>
                <a
                  className=" fw-normal fs_xsm text-black font_poppins text-decoration-none"
                  href="#"
                >
                  Privacy Policy
                </a>
              </article>

              <article>
                <a
                  className=" fw-normal fs_xsm text-black font_poppins text-decoration-none"
                  href="#"
                >
                  Terms & Conditions
                </a>
              </article>

              <article>
                <a
                  className=" fw-normal fs_xsm text-black font_poppins text-decoration-none"
                  href="#"
                >
                  Cancellation & Refund Policy
                </a>
              </article>
            </div>
          </div>
          <div className=" row justify-content-md-end pt-md-5">
            <div className=" mt-4 mt-md-0 col-6 col-md-3">
              <p className=" mb-2 mb-md-3 fw-semibold fs_md clr_blue font_poppins">
                Backpacking Trips
              </p>
              <article>
                <a
                  className=" fw-normal fs_xsm text-black font_poppins text-decoration-none"
                  href="#"
                >
                  Spiti Valley
                </a>
              </article>
              <article>
                {" "}
                <a
                  className=" fw-normal fs_xsm text-black font_poppins text-decoration-none"
                  href="#"
                >
                  Leh & Ladakh
                </a>
              </article>
              <article>
                <a
                  className=" fw-normal fs_xsm text-black font_poppins text-decoration-none"
                  href="#"
                >
                  Himachal Backpacking
                </a>
              </article>
              <article>
                <a
                  className=" fw-normal fs_xsm text-black font_poppins text-decoration-none"
                  href="#"
                >
                  Meghalaya
                </a>
              </article>
            </div>
            <div className=" mt-4 mt-md-0 col-6 col-md-3">
              <p className=" mb-2 mb-md-3 fw-semibold fs_md clr_blue font_poppins">
                Domestic
              </p>
              <article>
                <a
                  className=" fw-normal fs_xsm text-black font_poppins text-decoration-none"
                  href="#"
                >
                  Himachal
                </a>
              </article>
              <article>
                {" "}
                <a
                  className=" fw-normal fs_xsm text-black font_poppins text-decoration-none"
                  href="#"
                >
                  Kashmir
                </a>
              </article>
              <article>
                <a
                  className=" fw-normal fs_xsm text-black font_poppins text-decoration-none"
                  href="#"
                >
                  Kerala
                </a>
              </article>
              <article>
                <a
                  className=" fw-normal fs_xsm text-black font_poppins text-decoration-none"
                  href="#"
                >
                  Rajasthan
                </a>
              </article>
              <article>
                <a
                  className=" fw-normal fs_xsm text-black font_poppins text-decoration-none"
                  href="#"
                >
                  Uttarakhand
                </a>
              </article>
            </div>
            <div className=" mt-4 mt-md-0 col-6 col-md-3">
              <p className=" mb-2 mb-md-3 fw-semibold fs_md clr_blue font_poppins">
                Contact Us
              </p>

              <article>
                <p className=" mb-2 fw-normal fs_xsm text-black font_poppins text-decoration-none">
                  401-402, Fourth-Floor, C-23, Block C, Sector 63, Noida, Uttar
                  Pradesh - 201301
                </p>
              </article>
              <article>
                {" "}
                <a
                  className=" mb-2 d-inline-block fw-normal fs_xsm text-black font_poppins text-decoration-none"
                  href="#"
                >
                  +91-8700923377
                </a>
              </article>
              <article>
                <a
                  className=" fw-normal fs_xsm text-black font_poppins text-decoration-none"
                  href="#"
                >
                  contact@go4explore.com
                </a>
              </article>
            </div>
          </div>
          <div className="bg-white w-100 row mx-auto d-flex mt-5 justify-content-center justify-content-lg-between align-items-center rounded-3 py-4 px-1 px-sm-5">
            <div
              className=" justify-content-center d-flex mb-4 col-12 col-sm-6 col-lg-2"
              sm={6}
              lg={2}
            >
              {" "}
              <Image width={120} src={logo} alt="logo" />
            </div>
            <div className=" col-12 col-sm-6 col-lg-5">
              <article className=" d-flex align-items-center flex-column">
                <span className=" border-2 border-bottom">
                  <Image className=" w-100 mb-2" src={payment} alt="payment" />
                </span>
                <p className=" mb-0 fw-normal text-center mt-2 fs_xsm text-black font_poppins">
                  2017-2024 Wander N Explore Pvt. Ltd. All Rights Reserved.
                </p>
              </article>
            </div>
            <div className=" col-12 col-sm-6 col-lg-2">
              <div className=" d-flex align-items-center justify-content-center mt-4 mt-lg-5 gap-2">
                <a
                  target="_blank"
                  href="https://www.instagram.com/go4explore.community/"
                >
                  <Image width={40} src={instagarm} alt="instagarm" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/go4explore/"
                >
                  <Image width={40} src={Linkdin} alt="Linkdin" />
                </a>
                <a target="_blank" href="https://www.youtube.com/go4explore">
                  <Image width={40} src={Youtube} alt="Youtube" />
                </a>
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=917015750288"
                >
                  <Image width={40} src={Whatsapp} alt="Whatsapp" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
