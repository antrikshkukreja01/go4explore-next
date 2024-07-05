import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Slider from "react-slick";
import "../App.css";
import Footer from "@/components/Footer";
import Nav from "@/components/NavBar";
import Link from "next/link";
import Reviews from "@/components/Reviews";
import TravelWithUs from "@/components/TravelWithUs";
import Image from "next/image";
import image1 from "@/assets/img/webp/Himachal.webp";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

const Test = ({ data }) => {
  if (!data) return <div>Loading...</div>;
  if (data.error) return <div>Error loading data</div>;
  const [expandedOffer, setExpandedOffer] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedOffer(expandedOffer === index ? null : index);
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
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
          centerMode: true,
          centerPadding: "20px , 40px ",
        },
      },
    ],
  };
  var settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
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
          centerMode: true,
          centerPadding: "20px , 40px ",
        },
      },
    ],
  };
  return (
    <>
      <Nav />

      <section className=" py-5">
        <div className=" container">
          {data.data.offer.map((offer) => (
            <header key={offer.id} className=" position-relative   ">
              <img
                className=" w-100 rounded-4"
                src={offer.uri}
                height={500}
                alt={offer.title}
              />
              <h1 className=" text-white w-100 text-center fw-bold fs_xxl font_poppins position-absolute top-50 start-50 translate-middle">
                {offer.title}
              </h1>
            </header>
          ))}
          {data.data.offer.map((offer, index) => {
            const isExpanded = expandedOffer === index;
            const text = isExpanded
              ? offer.description
              : `${offer.description.substring(0, 509)}...`;

            return (
              <div key={index} className="bg_gray p-4 rounded-3 mt-4 mb-5">
                <h2 className="mb-0 fw-semibold fs_lg text-black font_poppins border-bottom border-2 pb-3">
                  About {offer.title}
                </h2>
                <p
                  className="fs_xsm fw-normal text-black font_poppins mb-0 mt-4"
                  dangerouslySetInnerHTML={{ __html: text }}
                ></p>
                <div className=" d-flex justify-content-end">
                  {offer.description.length > 509 && (
                    <button
                      onClick={() => toggleReadMore(index)}
                      className="btn btn-link text-decoration-none fw-medium fs_sm font_poppins text-black mt-3"
                    >
                      {isExpanded ? "View Less" : "View More"}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
          {data.data.offer.map((offer) => (
            <div className=" mb-3" key={offer.id}>
              <h2 className=" font_poppins text-black fw-bold fs_xl mb-0 ms-3">
                {offer.category1}
                {/* <img width={30} className=" ms-2 mb-1 " src={star} alt="star" /> */}
              </h2>
            </div>
          ))}
          <div className=" row">
            <div className=" col-8   ">
              <Slider {...settings}>
                {data.data.trip.code1.map((pkg) => (
                  <li className="px-3" key={pkg.id}>
                    <div className="position-relative mb-4">
                      <img
                        className="rounded-4 w-100"
                        src={pkg.image}
                        height={370}
                        alt="img"
                      />
                      <p className="bg_yellow rounded-3 position-absolute text-black top-100 start-50 translate-middle fw-normal fs_xsm font_poppins px-2 py-1">
                        {pkg.duration}
                      </p>
                    </div>
                    <div className="h_160 flex-column d-flex justify-content-between">
                      <article>
                        <h2 className="pt-2 mb-2 text-capitalize font_poppins text-black fw-medium fs_md">
                          {pkg.name}
                        </h2>
                        {pkg.discounted_price ? (
                          <div className="d-flex align-items-center gap-4">
                            <p className="mb-0 text-decoration-line-through clr_gray fs-md fw-normal">
                              ₹{pkg.price}
                            </p>
                            <p className="mb-0 d-flex align-items-center text-black fs-md fw-semibold">
                              ₹{pkg.discounted_price} per person
                            </p>
                          </div>
                        ) : (
                          <p className="mb-0 d-flex align-items-center text-black fs-md fw-semibold">
                            ₹{pkg.price} per person
                          </p>
                        )}
                        {pkg.discount && (
                          <p className="mb-0 text-decoration-line-through clr_gray fs-md fw-normal">
                            Discount: ₹{pkg.discount}
                          </p>
                        )}
                      </article>
                      <div className="d-flex flex-column flex-sm-row align-items-center flex-xl-column flex-xxl-row gap-2 mt-3">
                        <Link
                          href={`/trips/${encodeURIComponent(pkg.slug)}`}
                          className="tripDetail_btn white_space fs_xsm fw-medium text-center w-100 text-decoration-none"
                        >
                          Trip Details
                        </Link>
                        <a
                          className="white_space callback_btn fs_xsm fw-medium w-100 text-center text-decoration-none"
                          href="#"
                        >
                          Request Callback
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </Slider>
            </div>
            <div className=" col-4 mt-4 mt-xl-0">
              <div className=" border_box rounded-4 p-4 p-sm-5">
                <p className=" text-center mb-0 fw-semibold fs_xl font_poppins text-black">
                  Have Doubts? Talk To Our Travel Experts!
                </p>
                <p className=" mb-0 text-center fs_xsm fw-normal mt-3 font_poppins text-black ">
                  Make your move, fill out your details now!
                </p>
                <div className=" d-flex flex-column align-items-center gap-3 gap-sm-4 mt-4">
                  <input
                    className=" w-100 input_style_2 bg_gray fs_xsm text-black fw-normal  rounded-5 py-2 text-center"
                    type="search"
                    placeholder="What should we call you?"
                  />
                  <input
                    className=" w-100 input_style_2 fs_xsm bg_gray text-black fw-normal  rounded-5 py-2 text-center"
                    type="search"
                    placeholder="Please, share your contact number?"
                  />
                  <input
                    className=" w-100 input_style_2 fs_xsm text-black bg_gray fw-normal  rounded-5 py-2 text-center"
                    type="search"
                    placeholder="Put your email here!"
                  />
                  <input
                    className=" w-100 input_style_2 fs_xsm text-black bg_gray fw-normal  rounded-5 py-2 text-center"
                    type="text"
                    placeholder="Write your message"
                  />
                  <a
                    className=" callback_btn fs_sm fw-medium mt-sm-3 w-100 text-center text-decoration-none"
                    href="#"
                  >
                    Request Callback
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className=" py-5 mt-5">
            {data.data.offer.map((offer) => (
              <div className=" mb-3" key={offer.id}>
                <h2 className=" font_poppins text-black fw-bold fs_xl mb-0 ms-3 ">
                  {offer.category2}
                  {/* <img width={30} className=" ms-2 mb-1 " src={star} alt="star" /> */}
                </h2>
              </div>
            ))}
            <Slider {...settings}>
              {data.data.trip.code2.map((pkg) => (
                <li className="px-3" key={pkg.id}>
                  <div className="position-relative mb-4">
                    <img
                      className="rounded-4 w-100"
                      src={pkg.image}
                      height={280}
                      alt="img"
                    />
                    <p className="bg_yellow rounded-3 position-absolute text-black top-100 start-50 translate-middle fw-normal fs_xsm font_poppins px-2 py-1">
                      {pkg.duration}
                    </p>
                  </div>
                  <div className="h_160 flex-column d-flex justify-content-between">
                    <article>
                      <h2 className="pt-2 mb-2 text-capitalize font_poppins text-black fw-medium fs_md">
                        {pkg.name}
                      </h2>
                      {pkg.discounted_price ? (
                        <div className="d-flex align-items-center gap-4">
                          <p className="mb-0 text-decoration-line-through clr_gray fs-md fw-normal">
                            ₹{pkg.price}
                          </p>
                          <p className="mb-0 d-flex align-items-center text-black fs-md fw-semibold">
                            ₹{pkg.discounted_price} per person
                          </p>
                        </div>
                      ) : (
                        <p className="mb-0 d-flex align-items-center text-black fs-md fw-semibold">
                          ₹{pkg.price} per person
                        </p>
                      )}
                      {pkg.discount && (
                        <p className="mb-0 text-decoration-line-through clr_gray fs-md fw-normal">
                          Discount: ₹{pkg.discount}
                        </p>
                      )}
                    </article>
                    <div className="d-flex flex-column flex-sm-row align-items-center flex-xl-column flex-xxl-row gap-2 mt-3">
                      <Link
                        href={`/trips/${encodeURIComponent(pkg.slug)}`}
                        className="tripDetail_btn white_space fs_xsm fw-medium text-center w-100 text-decoration-none"
                      >
                        Trip Details
                      </Link>
                      <a
                        className="white_space callback_btn fs_xsm fw-medium w-100 text-center text-decoration-none"
                        href="#"
                      >
                        Request Callback
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </Slider>
          </div>
          <div className=" py-5 ">
            {data.data.offer.map((offer) => (
              <div className=" mb-3" key={offer.id}>
                <h2 className=" font_poppins text-black fw-bold fs_xl mb-0 ms-3 ">
                  {offer.category3}
                  {/* <img width={30} className=" ms-2 mb-1 " src={star} alt="star" /> */}
                </h2>
              </div>
            ))}
            <Slider {...settings2}>
              {data.data.trip.code3.map((pkg) => (
                <li className="px-3" key={pkg.id}>
                  <div className="position-relative mb-4">
                    <img
                      className="rounded-4 w-100"
                      src={pkg.image}
                      height={280}
                      alt="img"
                    />
                    <p className="bg_yellow rounded-3 position-absolute text-black top-100 start-50 translate-middle fw-normal fs_xsm font_poppins px-2 py-1">
                      {pkg.duration}
                    </p>
                  </div>
                  <div className="h_160 flex-column d-flex justify-content-between">
                    <article>
                      <h2 className="pt-2 mb-2 text-capitalize font_poppins text-black fw-medium fs_md">
                        {pkg.name}
                      </h2>
                      {pkg.discounted_price ? (
                        <div className="d-flex align-items-center gap-4">
                          <p className="mb-0 text-decoration-line-through clr_gray fs-md fw-normal">
                            ₹{pkg.price}
                          </p>
                          <p className="mb-0 d-flex align-items-center text-black fs-md fw-semibold">
                            ₹{pkg.discounted_price} per person
                          </p>
                        </div>
                      ) : (
                        <p className="mb-0 d-flex align-items-center text-black fs-md fw-semibold">
                          ₹{pkg.price} per person
                        </p>
                      )}
                      {pkg.discount && (
                        <p className="mb-0 text-decoration-line-through clr_gray fs-md fw-normal">
                          Discount: ₹{pkg.discount}
                        </p>
                      )}
                    </article>
                    <div className="d-flex flex-column flex-sm-row align-items-center flex-xl-column flex-xxl-row gap-2 mt-3">
                      <Link
                        href={`/trips/${encodeURIComponent(pkg.slug)}`}
                        className="tripDetail_btn white_space fs_xsm fw-medium text-center w-100 text-decoration-none"
                      >
                        Trip Details
                      </Link>
                      <a
                        className="white_space callback_btn fs_xsm fw-medium w-100 text-center text-decoration-none"
                        href="#"
                      >
                        Request Callback
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <section className=" py-5">
        <div className="container">
          <h2 className=" text-center">Spiti Valley Tour FAQs</h2>
          <div className="row justify-content-center">
            <div className="col-8">
              <Accordion id="accordian" defaultExpandedKeys={[]}>
                <AccordionItem
                  id="accordian"
                  className=" w-100 d-flex flex-column  "
                  title={
                    <span className="   py-2 px-3 me-2 me-sm-3  d-inline-block font_poppins fw-medium  fs_sm text-center text-black">
                      Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                      Lorem ipsum dolor sit
                    </span>
                  }
                >
                  <p className=" mb-0 fw-normal fs_xsm font_poppins text-black">
                    {" "}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Explicabo perferendis fugit delectus maxime quae itaque
                    recusandae minima, eos provident quaerat.
                  </p>
                </AccordionItem>
                <AccordionItem
                  id="accordian"
                  className=" w-100 d-flex flex-column  "
                  title={
                    <span className="   py-2 px-3 me-2 me-sm-3  d-inline-block font_poppins fw-medium  fs_sm text-center text-black">
                      Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                      Lorem ipsum dolor sit
                    </span>
                  }
                >
                  <p className=" mb-0 fw-normal fs_xsm font_poppins text-black">
                    {" "}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Explicabo perferendis fugit delectus maxime quae itaque
                    recusandae minima, eos provident quaerat.
                  </p>
                </AccordionItem>
                <AccordionItem
                  id="accordian"
                  className=" w-100 d-flex flex-column  "
                  title={
                    <span className="   py-2 px-3 me-2 me-sm-3  d-inline-block font_poppins fw-medium  fs_sm text-center text-black">
                      Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                      Lorem ipsum dolor sit
                    </span>
                  }
                >
                  <p className=" mb-0 fw-normal fs_xsm font_poppins text-black">
                    {" "}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Explicabo perferendis fugit delectus maxime quae itaque
                    recusandae minima, eos provident quaerat.
                  </p>
                </AccordionItem>
                <AccordionItem
                  id="accordian"
                  className=" w-100 d-flex flex-column  "
                  title={
                    <span className="   py-2 px-3 me-2 me-sm-3  d-inline-block font_poppins fw-medium  fs_sm text-center text-black">
                      Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                      Lorem ipsum dolor sit
                    </span>
                  }
                >
                  <p className=" mb-0 fw-normal fs_xsm font_poppins text-black">
                    {" "}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Explicabo perferendis fugit delectus maxime quae itaque
                    recusandae minima, eos provident quaerat.
                  </p>
                </AccordionItem>
                <AccordionItem
                  id="accordian"
                  className=" w-100 d-flex flex-column  "
                  title={
                    <span className="   py-2 px-3 me-2 me-sm-3  d-inline-block font_poppins fw-medium  fs_sm text-center text-black">
                      Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                      Lorem ipsum dolor sit
                    </span>
                  }
                >
                  <p className=" mb-0 fw-normal fs_xsm font_poppins text-black">
                    {" "}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Explicabo perferendis fugit delectus maxime quae itaque
                    recusandae minima, eos provident quaerat.
                  </p>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      <Reviews />
      <section className=" py-5">
        <div className="container">
          <h2 className=" text-center">
            Places to visit in Spiti Valley Tour Packages
          </h2>
          <div className="row mt-5">
            <div className="col-4 mt-4">
              <div className="blue_border rounded-4 p-3">
                <Image
                  className=" rounded-4 w-100"
                  height={200}
                  src={image1}
                  alt="image1"
                />
                <p className=" mb-0 fw-medium fs_sm text-black font_poppins mt-3">
                  Lorem ipsum dolor sit amet consectetur
                </p>
                <p className=" mb-0 fw-normal fs_xsm text-black font_poppins mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                  vitae!
                </p>
              </div>
            </div>
            <div className="col-4 mt-4">
              <div className="blue_border rounded-4 p-3">
                <Image
                  className=" rounded-4 w-100"
                  height={200}
                  src={image1}
                  alt="image1"
                />
                <p className=" mb-0 fw-medium fs_sm text-black font_poppins mt-3">
                  Lorem ipsum dolor sit amet consectetur
                </p>
                <p className=" mb-0 fw-normal fs_xsm text-black font_poppins mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                  vitae!
                </p>
              </div>
            </div>
            <div className="col-4 mt-4">
              <div className="blue_border rounded-4 p-3">
                <Image
                  className=" rounded-4 w-100"
                  height={200}
                  src={image1}
                  alt="image1"
                />
                <p className=" mb-0 fw-medium fs_sm text-black font_poppins mt-3">
                  Lorem ipsum dolor sit amet consectetur
                </p>
                <p className=" mb-0 fw-normal fs_xsm text-black font_poppins mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                  vitae!
                </p>
              </div>
            </div>
            <div className="col-4 mt-4">
              <div className="blue_border rounded-4 p-3">
                <Image
                  className=" rounded-4 w-100"
                  height={200}
                  src={image1}
                  alt="image1"
                />
                <p className=" mb-0 fw-medium fs_sm text-black font_poppins mt-3">
                  Lorem ipsum dolor sit amet consectetur
                </p>
                <p className=" mb-0 fw-normal fs_xsm text-black font_poppins mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                  vitae!
                </p>
              </div>
            </div>
            <div className="col-4 mt-4">
              <div className="blue_border rounded-4 p-3">
                <Image
                  className=" rounded-4 w-100"
                  height={200}
                  src={image1}
                  alt="image1"
                />
                <p className=" mb-0 fw-medium fs_sm text-black font_poppins mt-3">
                  Lorem ipsum dolor sit amet consectetur
                </p>
                <p className=" mb-0 fw-normal fs_xsm text-black font_poppins mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                  vitae!
                </p>
              </div>
            </div>
            <div className="col-4 mt-4">
              <div className="blue_border rounded-4 p-3">
                <Image
                  className=" rounded-4 w-100"
                  height={200}
                  src={image1}
                  alt="image1"
                />
                <p className=" mb-0 fw-medium fs_sm text-black font_poppins mt-3">
                  Lorem ipsum dolor sit amet consectetur
                </p>
                <p className=" mb-0 fw-normal fs_xsm text-black font_poppins mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                  vitae!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TravelWithUs />
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.params;

  try {
    const res = await axios.get(
      `https://go4explore-api.cyberoze.com/api/trips/offers/${slug}`
    );
    const data = res.data;
    console.log(data);
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        data: { error: true },
      },
    };
  }
}

export default Test;
