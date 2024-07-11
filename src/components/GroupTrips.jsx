"use client";
import { useEffect, useState } from "react";
import { fetchHomeData } from "./Api";
import Slider from "react-slick";
import star_emoji from "../assets/img/png/star_emoji.png";
import Image from "next/image";
import Link from "next/link";

const GroupTrips = () => {
  const [activeMonth, setActiveMonth] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchHomeData()
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
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
          arrows: false,
          centerMode: true,
          centerPadding: "20px , 40px ",
        },
      },
    ],
  };

  const handleMonthClick = (month) => {
    setActiveMonth(month); // Set active month
  };

  return (
    <>
      <section id="grouptrips" className="py-5 ">
        <div className="container">
          <p className="font_poppins mb-4 mb-sm-5 fs_xl fw-semibold text-capitalize text-black text-center">
            Upcoming Group Trips For You{" "}
            <Image
              width={30}
              className=" w_30 h-25"
              src={star_emoji}
              alt="star_emoji"
            />
          </p>

          {/* Month Selector */}
          <div className="d-flex align-items-center gap-2 gap-sm-4 justify-content-lg-center mb-4  mb-md-5 overflow_scroll">
            {[
              "June 2024",
              "July 2024",
              "Aug 2024",
              "Sept 2024",
              "Oct 2024",
              "Nov 2024",
            ].map((month) => (
              <button
                className={`trip_btn fs_xsm fw-semibold white_space ${
                  activeMonth === month ? "active" : ""
                }`}
                onClick={() => handleMonthClick(month)}
                style={{
                  backgroundColor:
                    activeMonth === month ? "#f4f6fc" : "transparent",
                  borderColor: activeMonth === month ? "#2755b0" : "#000",
                  color: activeMonth === month ? "#2755b0" : "#000",
                }}
              >
                {month}
              </button>
            ))}
          </div>

          <Slider {...settings}>
            {data.data.packages.map((pkg) => (
              <div className="px-3" key={pkg.id}>
                <div className="position-relative mb-4">
                  <Link href={`/trips/${encodeURIComponent(pkg.slug)}`}>
                    <div className=" image_280 rounded-4">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "100%" }} // optional
                        src={pkg.image}
                        alt="img"
                      />
                    </div>
                    <p className="bg_yellow rounded-3 position-absolute text-black top-100 start-50 translate-middle fw-normal fs_xsm font_poppins px-2 py-1">
                      {pkg.duration}
                    </p>
                  </Link>
                </div>
                <div className="h_160 flex-column d-flex justify-content-between">
                  <article>
                    <Link
                      className="text-decoration-none"
                      href={`/trips/${encodeURIComponent(pkg.slug)}`}
                    >
                      <h2 className="pt-2 mb-2 text-capitalize font_poppins text-black  fw-medium fs_md">
                        {pkg.name}
                      </h2>{" "}
                    </Link>
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
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default GroupTrips;
