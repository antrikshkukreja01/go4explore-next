"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Slider from "react-slick";
import "../../App.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
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
  const [expandedpage_data, setExpandedpage_data] = useState(null);
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
    ? data.data.page_data.description
    : `${data.data.page_data.descriptions.substring(0, 509)}...`;

  return (
    <>
      <Head>
        <title>{data.data.page_data.metatitle}</title>
        <meta
          name="description"
          content={data.data.page_data.metadescription}
        />
        <meta name="keywords" content={data.data.page_data.metakeywords} />
      </Head>
      <NavBar />

      <section id="trippage" className="py-5 ">
        <div className="container">
          <div className=" px-3">
            <header key={data.data.page_data.id} className="position-relative ">
              <div
                className="image-container"
                style={{ position: "relative", width: "100%", height: "500px" }}
              >
                <Image
                  className="rounded-4 height_200"
                  src={data.data.page_data.image}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "500px" }}
                  alt={data.data.page_data.title}
                />
                <div
                  className="overlay rounded-4"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.3)", // adjust the opacity as needed
                    pointerEvents: "none", // allows clicks to pass through to the image
                  }}
                ></div>
              </div>

              <h1 className="text-white w-100 text-center fw-semibold fs_xxl font_poppins position-absolute top-50 start-50 translate-middle">
                {data.data.page_data.title}
              </h1>
            </header>

            <div className="bg_gray p-4 rounded-3 mt-4 mb-5 ">
              <h2 className="mb-0 fw-semibold fs_lg text-black font_poppins border-bottom border-2 pb-3">
                About {data.data.page_data.title}
              </h2>
              <p
                className="fs_xsm fw-normal text-black font_poppins mb-0 mt-4"
                dangerouslySetInnerHTML={{ __html: text }}
              ></p>
              <div className="d-flex justify-content-end">
                {data.data.page_data.descriptions.length > 509 && (
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
        </div>
      </section>

      <Reviews />
      <TravelWithUs />
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const { city, slug } = context.params;

  try {
    const res = await axios.get(
      `https://go4explore-api.cyberoze.com/api/tours/${city}/${slug}`
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
