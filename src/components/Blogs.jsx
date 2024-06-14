"use client";
import React from "react";
import blog_img from "../assets/img/webp/ProductPhoto.webp";
import Slider from "react-slick";
import heart_eye from "../assets/img/png/love_emoji.png";
import bg from "../assets/img/webp/ProductPhoto.webp";
import Image from "next/image";

const Blogs = () => {
  var settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <section className=" py-4 py-sm-5">
        <div className=" container">
          <h2 className=" font_poppins mb-4 mb-sm-5 fs_xl fw-semibold text-capitalize text-black text-center">
            Blogs To Fuel Your Wanderlust{" "}
            <Image
              width={30}
              className="  mb-1 ms-2"
              src={heart_eye}
              alt="heart_eye"
            />
          </h2>
          <div className=" row align-items-center">
            <div className=" col-xl-7">
              <div className="bg_gradient">
                <div className="box_blog ">
                  <Image
                    className=" w-100 img_size "
                    src={blog_img}
                    alt="blog_img"
                  />
                  <p className=" fs_xsm text-black mt-3 fw-medium font_poppins mb-0">
                    Published on 20 Feb, 2024
                  </p>
                  <p className=" mb-0   mt-2 fs_xl clr_blue font_poppins fw-semibold ">
                    What makes Udaipur the most Instagramable city of Rajasthan
                  </p>
                </div>
              </div>
            </div>

            <div className=" ps-xl-5 mt-3 mt-md-4 mt-lg-5 mt-xl-0 col-xl-5">
              <Slider className=" d-md-none" {...settings}>
                <div className="bg_gradient">
                  <div className="box_blog_small row mx-0 mt-2  align-items-center w-100">
                    <div className=" ps-0 col-xl-7">
                      <Image
                        className=" rounded-4 w-100 "
                        height={130}
                        src={blog_img}
                        alt="blog_img"
                      />
                    </div>
                    <div className="col-xl-7">
                      <article className=" mt-4 mt-xl-0">
                        <p className=" mb-2 fs_sm clr_blue font_poppins fw-semibold ">
                          Top Haunted Places in Himachal Pradesh You must visit
                          once in...
                        </p>
                        <p className=" fs_xsm text-black mt-1  fw-medium font_poppins mb-0">
                          Published on 25 Feb, 2024
                        </p>
                      </article>
                    </div>
                  </div>
                </div>
                <div className="bg_gradient">
                  <div className="box_blog_small row mx-0 mt-2  align-items-center w-100">
                    <div className=" ps-0 col-xl-7">
                      <Image
                        className=" rounded-4 w-100 "
                        height={130}
                        src={blog_img}
                        alt="blog_img"
                      />
                    </div>
                    <div className="col-xl-7">
                      <article className=" mt-4 mt-xl-0">
                        <p className=" mb-2 fs_sm clr_blue font_poppins fw-semibold ">
                          Experience the beauty of Andamans: top beaches and
                          things to do
                        </p>
                        <p className=" fs_xsm text-black mt-1  fw-medium font_poppins mb-0">
                          Published on 03 Mar, 2024
                        </p>
                      </article>
                    </div>
                  </div>
                </div>
                <div className="bg_gradient">
                  <div className="box_blog_small row mx-0 mt-2 align-items-center w-100">
                    <div className=" col-xl-5 ps-0">
                      <Image
                        className=" rounded-4 w-100 "
                        height={130}
                        src={blog_img}
                        alt="blog_img"
                      />
                    </div>
                    <div className=" col-xl-7">
                      <article className=" mt-4 mt-xl-0">
                        <p className=" mb-2 fs_sm clr_blue font_poppins fw-semibold ">
                          A day in Kaza: best spots for cafe hopping in Spiti
                          Valley trip
                        </p>
                        <p className=" fs_xsm text-black mt-1  fw-medium font_poppins mb-0">
                          Published on 20 Mar, 2024
                        </p>
                      </article>
                    </div>
                  </div>
                </div>
              </Slider>{" "}
              <div className=" row  justify-content-center d-none d-md-flex">
                <div className=" mt-4 col-md-6 col-xl-12 ">
                  <div className="bg_gradient">
                    <div className=" row box_blog_small align-items-center w-100">
                      <div className=" col-xl-5 ps-0">
                        <Image
                          className=" rounded-4 w-100 "
                          height={130}
                          src={blog_img}
                          alt="blog_img"
                        />
                      </div>
                      <div className=" col-xl-7">
                        <article className=" mt-4 mt-xl-0">
                          <p className=" mb-2 fs_sm clr_blue font_poppins fw-semibold ">
                            Top Haunted Places in Himachal Pradesh You must
                            visit once in...
                          </p>
                          <p className=" fs_xsm text-black mt-1  fw-medium font_poppins mb-0">
                            Published on 25 Feb, 2024
                          </p>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" mt-4 col-md-6 col-xl-12 ">
                  <div className="bg_gradient">
                    <div className=" row box_blog_small align-items-center w-100">
                      <div className=" col-xl-5 ps-0">
                        <Image
                          className=" rounded-4 w-100 "
                          height={130}
                          src={blog_img}
                          alt="blog_img"
                        />
                      </div>
                      <div className=" col-xl-7">
                        <article className=" mt-4 mt-xl-0">
                          <p className=" mb-2 fs_sm clr_blue font_poppins fw-semibold ">
                            Experience the beauty of Andamans: top beaches and
                            things to do
                          </p>
                          <p className=" fs_xsm text-black mt-1  fw-medium font_poppins mb-0">
                            Published on 03 Mar, 2024
                          </p>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" mt-4 col-md-6 col-xl-12 ">
                  <div className="bg_gradient">
                    <div className=" row box_blog_small align-items-center w-100">
                      <div className=" ps-0 col-xl-5">
                        <Image
                          className=" rounded-4 w-100 "
                          height={130}
                          src={blog_img}
                          alt="blog_img"
                        />
                      </div>
                      <div className=" col-xl-7 ">
                        <article className=" mt-4 mt-xl-0">
                          <p className=" mb-2 fs_sm clr_blue font_poppins fw-semibold ">
                            A day in Kaza: best spots for cafe hopping in Spiti
                            Valley trip
                          </p>
                          <p className=" fs_xsm text-black mt-1  fw-medium font_poppins mb-0">
                            Published on 20 Mar, 2024
                          </p>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-100 d-flex justify-content-center">
            <a
              className="btn-hover mt-5 text-decoration-none font_poppins fw-semibold fs_sm d-inline-block "
              href="#"
            >
              View More Blogs
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
