"use client";
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
import Head from "next/head";

function formatPrice(number) {
  return new Intl.NumberFormat("en-IN", {
    useGrouping: true,
  }).format(number);
}

const Test = ({ data }) => {
  if (!data) return <div>Loading...</div>;
  if (data.error) return <div>Error loading data</div>;
  const [expandedOffer, setExpandedOffer] = useState(null);
  const metadata = {
    title: data.error ? "Error" : data.data.metatitle,
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const renderPackages = (packages) => {
    if (!packages || !packages.length) return null;

    return packages.length > 1 ? (
      <Slider {...sliderSettings}>
        {packages.map((pkg) => (
          <div key={pkg.id} className="px-3 col-sm-4">
            <div className="position-relative mb-4">
              <Link href={`/trips/${encodeURIComponent(pkg.slug)}`}>
                <Image
                  className="w-100 rounded-4"
                  src={pkg.image}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "350px" }} // optional
                  alt="img"
                />
              </Link>
              <p className="bg_yellow rounded-3 position-absolute text-black top-100 start-50 translate-middle fw-normal fs_xsm font_poppins px-2 py-1">
                {pkg.duration}
              </p>
            </div>
            <div className="h_160 flex-column d-flex justify-content-between">
              <article>
                <Link
                  className="text-decoration-none"
                  href={`/trips/${encodeURIComponent(pkg.slug)}`}
                >
                  <p className="pt-2 mb-2 text-capitalize font_poppins text-black fw-medium fs_md">
                    {pkg.name}
                  </p>
                </Link>
                {pkg.discounted_price ? (
                  <div className="d-flex align-items-center gap-4">
                    <p className="mb-0 text-decoration-line-through clr_gray fs-md fw-normal">
                      ₹{formatPrice(pkg.price)}
                    </p>
                    <p className="mb-0 d-flex align-items-center text-black fs-md fw-semibold">
                      ₹{formatPrice(pkg.discounted_price)} per person
                    </p>
                  </div>
                ) : (
                  <p className="mb-0 d-flex align-items-center text-black fs-md fw-semibold">
                    ₹{formatPrice(pkg.price)} per person
                  </p>
                )}
                {pkg.discount && (
                  <p className="mb-0 text-decoration-line-through clr_gray fs-md fw-normal">
                    Discount: ₹{formatPrice(pkg.discount)}
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
          </div>
        ))}
      </Slider>
    ) : (
      packages.map((pkg) => (
        <div className="px-3 col-sm-4" key={pkg.id}>
          <div className="position-relative mb-4">
            <Link
              className="text-decoration-none"
              href={`/trips/${encodeURIComponent(pkg.slug)}`}
            >
              <Image
                className="w-100 rounded-4"
                src={pkg.image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "350px" }} // optional
                alt="img"
              />
            </Link>
            <p className="bg_yellow rounded-3 position-absolute text-black top-100 start-50 translate-middle fw-normal fs_xsm font_poppins px-2 py-1">
              {pkg.duration}
            </p>
          </div>
          <div className="h_160 flex-column d-flex justify-content-between">
            <article>
              <Link
                className="text-decoration-none"
                href={`/trips/${encodeURIComponent(pkg.slug)}`}
              >
                <p className="pt-2 mb-2 text-capitalize font_poppins text-black fw-medium fs_md">
                  {pkg.name}
                </p>
              </Link>
              {pkg.discounted_price ? (
                <div className="d-flex align-items-center gap-4">
                  <p className="mb-0 text-decoration-line-through clr_gray fs-md fw-normal">
                    ₹{formatPrice(pkg.price)}
                  </p>
                  <p className="mb-0 d-flex align-items-center text-black fs-md fw-semibold">
                    ₹{formatPrice(pkg.discounted_price)} per person
                  </p>
                </div>
              ) : (
                <p className="mb-0 d-flex align-items-center text-black fs-md fw-semibold">
                  ₹{formatPrice(pkg.price)} per person
                </p>
              )}
              {pkg.discount && (
                <p className="mb-0 text-decoration-line-through clr_gray fs-md fw-normal">
                  Discount: ₹{formatPrice(pkg.discount)}
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
        </div>
      ))
    );
  };

  const [expanded, setExpanded] = React.useState(false);

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  const text = expanded
    ? data.data.offer.description
    : `${data.data.offer.description.substring(0, 509)}...`;

  return (
    <>
      <Head>
        <title>{data.data.offer.metatitle}</title>
        <meta name="description" content={data.data.offer.metadescription} />
        <meta name="keywords" content={data.data.offer.metakeywords} />
      </Head>
      <Nav />

      <section id="trippage" className="py-5 ">
        <div className="container">
          <div className=" px-3">
            <header key={data.data.offer.id} className="position-relative ">
              <Image
                className="rounded-4 height_200"
                src={data.data.offer.uri}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "500px" }}
                alt={data.data.offer.title}
              />
              <h1 className="text-white w-100 text-center fw-semibold fs_xxl font_poppins position-absolute top-50 start-50 translate-middle">
                {data.data.offer.title}
              </h1>
            </header>

            <div className="bg_gray p-4 rounded-3 mt-4 mb-5 ">
              <h2 className="mb-0 fw-semibold fs_lg text-black font_poppins border-bottom border-2 pb-3">
                About {data.data.offer.title}
              </h2>
              <p
                className="fs_xsm fw-normal text-black font_poppins mb-0 mt-4"
                dangerouslySetInnerHTML={{ __html: text }}
              ></p>
              <div className="d-flex justify-content-end">
                {data.data.offer.description.length > 509 && (
                  <button
                    onClick={toggleReadMore}
                    className="btn btn-link text-decoration-none fw-medium fs_sm font_poppins text-black mt-3"
                  >
                    {expanded ? "View Less" : "View More"}
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-sm-8">
              <div>
                <div className="mb-3" key={data.data.offer.id}>
                  <h2 className="font_poppins text-black fw-bold fs_xl mb-0 ms-3">
                    {data.data.offer.category1}
                  </h2>
                </div>

                {renderPackages(data.data.trip.code1)}
              </div>
            </div>
            <div className="col-sm-4 mt-4 mt-xl-0">
              <div className="border_box rounded-4 p-4 p-sm-5">
                <p className="text-center mb-0 fw-semibold fs_xl font_poppins text-black">
                  Have Doubts? Talk To Our Travel Experts!
                </p>
                <p className="mb-0 text-center fs_xsm fw-normal mt-3 font_poppins text-black">
                  Make your move, fill out your details now!
                </p>
                <div className="d-flex flex-column align-items-center gap-3 gap-sm-4 mt-4">
                  <input
                    className="w-100 input_style_2 fs_xsm bg_gray text-black fw-normal rounded-5 py-2 text-center"
                    type="text"
                    placeholder="Full Name"
                  />
                  <input
                    className="w-100 input_style_2 fs_xsm bg_gray text-black fw-normal rounded-5 py-2 text-center"
                    type="tel"
                    placeholder="Phone Number"
                  />
                  <input
                    className="w-100 input_style_2 fs_xsm bg_gray text-black fw-normal rounded-5 py-2 text-center"
                    type="email"
                    placeholder="Email"
                  />
                  <a
                    className="callback_btn white_space w-100 text-center text-decoration-none fs_xsm fw-medium"
                    href="#"
                  >
                    Request Callback
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="mb-3" key={data.data.offer.id}>
              <h2 className="font_poppins text-black fw-bold fs_xl mb-0 ms-3">
                {data.data.offer.category2}
              </h2>
            </div>

            {renderPackages(data.data.trip.code2)}
          </div>
          <div className="mt-5">
            <div className="mb-3" key={data.data.offer.id}>
              <h2 className="font_poppins text-black fw-bold fs_xl mb-0 ms-3">
                {data.data.offer.category3}
              </h2>
            </div>

            {renderPackages(data.data.trip.code3)}
          </div>
          <div className="mt-5">
            <div className="mb-3" key={data.data.offer.id}>
              <h2 className="font_poppins text-black fw-bold fs_xl mb-0 ms-3">
                {data.data.offer.category4}
              </h2>
            </div>

            {renderPackages(data.data.trip.code4)}
          </div>
          <div className="mt-5">
            <div className="mb-3" key={data.data.offer.id}>
              <h2 className="font_poppins text-black fw-bold fs_xl mb-0 ms-3">
                {data.data.offer.category5}
              </h2>
            </div>

            {renderPackages(data.data.trip.code5)}
          </div>
        </div>
      </section>

      <Reviews />
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
