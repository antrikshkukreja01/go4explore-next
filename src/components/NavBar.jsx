"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../assets/img/webp/logo.webp";
import customerservice from "../assets/img/webp/customer-service.webp";
import Link from "next/link";

const Nav = () => {
  const [navShow, setNavShow] = useState(false);
  const [isLgScreen, setIsLgScreen] = useState(false);
  const [isXlScreen, setIsXlScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 1200);
      setIsXlScreen(window.innerWidth >= 1200);
      if (window.innerWidth >= 1200) {
        setNavShow(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (navShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [navShow]);

  return (
    <nav className="py-3 shadow">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center w-100">
          <Link href="/">
            <Image
              width={200}
              className="logo_width h_auto "
              src={logo}
              alt="logo"
            />
          </Link>
          <div className="d-none d-xl-flex align-items-center gap-3">
            <Link
              href="/upcoming-trips
              "
              className="text-decoration-none text-black font_poppins fs_xsm
              fw-medium nav_hover position-relative bg-tranparent"
            >
              Upcoming Group Trips
            </Link>
            <Link
              href="/trips-category/international-trips"
              className="text-decoration-none text-black font_poppins fs_xsm
              fw-medium nav_hover position-relative bg-tranparent"
            >
              International Trips
            </Link>

            <a
              className="text-decoration-none text-black font_poppins fs_xsm fw-medium nav_hover position-relative"
              href="#"
            >
              Domestic Trips
            </a>
            <Link
              href="/aboutus"
              className="text-decoration-none text-black font_poppins fs_xsm
              fw-medium nav_hover position-relative bg-tranparent"
            >
              About Us
            </Link>
          </div>
          <div className="d-none d-xl-flex">
            <div className="border-right text-decoration-none pe-4 d-flex align-items-center position-relative">
              <Image
                width={35}
                className="w_30 me-2 Image_ani"
                src={customerservice}
                alt="customerservice"
              />
              <a
                href="#"
                className="text-black text-decoration-none mb-0 font_poppins fs_xsm fw-medium"
              >
                +91 8700923377
              </a>
            </div>

            <a
              className="login_btn color-1 ms-4 btn-hover d-flex align-items-center justify-content-center text-decoration-none"
              href="#"
            >
              Login
            </a>
          </div>
          {!isLgScreen && (
            <label
              className="menu_formatting d-flex justify-content-end d-xl-none"
              htmlFor="check"
            >
              <input
                onClick={() => setNavShow(!navShow)}
                className="menu bg-black"
                type="checkbox"
                id="check"
                checked={navShow}
              />
              <span className="span_nav1"></span>
              <span className="span_nav2"></span>
              <span className="span_nav3"></span>
            </label>
          )}
        </div>

        {navShow && (
          <div className="d-flex">
            <div className="nav-fix">
              <div className="d-flex flex-column">
                <div className="d-xl-none d-flex flex-column align-items-center gap-3">
                  <Link
                    href="/upcoming-trips
              "
                    className="text-decoration-none text-black font_poppins fs_xsm
              fw-medium nav_hover position-relative bg-tranparent"
                  >
                    Upcoming Group Trips
                  </Link>
                  <Link
                    href="/trips-category/international-trips"
                    className="text-decoration-none text-black font_poppins fs_xsm
              fw-medium nav_hover position-relative bg-tranparent"
                  >
                    International Trips
                  </Link>
                  <a
                    className="text-decoration-none text-black font_poppins fs_xsm fw-medium nav_hover position-relative"
                    href="#"
                  >
                    Domestic Trips
                  </a>
                  <Link
                    href="/aboutus"
                    className="text-decoration-none text-black font_poppins fs_xsm
              fw-medium nav_hover position-relative bg-tranparent"
                  >
                    About Us
                  </Link>
                </div>
                <div className="d-xl-none d-flex flex-column justify-content-center align-items-center mt-3">
                  <a
                    className="text-decoration-none pe-0 d-flex align-items-center"
                    href="#"
                  />
                  <p className="text-black mb-0 font_poppins fs_xsm fw-medium">
                    +91 8700923377
                  </p>

                  <a
                    className="mt-3 ms-0 btn-hover d-flex align-items-center justify-content-center text-decoration-none"
                    href="#"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
