import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../App.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import axios from "axios";
import downarrow from "@/assets/img/webp/down_img.webp";
import Image from "next/image";
import TravelWithUs from "@/components/TravelWithUs";

const Test = ({ data }) => {
  const [showviewMore, setShowviewMore] = useState(false);
  const [activeMonth, setActiveMonth] = useState(null);
  const activeMonthRef = useRef(null);

  useEffect(() => {
    if (activeMonthRef.current) {
      activeMonthRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    }
  }, [activeMonth]);

  if (!data) return <div>Loading...</div>;
  if (data.error) return <div>Error loading data</div>;

  const handleMonthClick = (month) => {
    setActiveMonth(month); // Set active month
  };

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
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
          centerMode: true,
          centerPadding: "20px , 40px ",
        },
      },
    ],
  };

  return (
    <>
      <NavBar />

      <section className="py-5">
        <div className="container">
          <h2 className=" mb-4 fw-semibold fs_xl font_poppins text-black text-center">
            {data.data.category.categoryname} For You
          </h2>
          <div className="d-flex align-items-center gap-2 gap-sm-4 justify-content-lg-center mb-5 overflow_scroll">
            {[
              "All Trips",
              "June 2024",
              "July 2024",
              "Aug 2024",
              "Sept 2024",
              "Oct 2024",
              "Nov 2024",
            ].map((month) => (
              <button
                key={month}
                ref={activeMonth === month ? activeMonthRef : null}
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
                  {pkg.image && (
                    <Image
                      className="rounded-4"
                      src={pkg.image}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "280px" }} // optional
                      alt="img"
                    />
                  )}
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
              </div>
            ))}
          </Slider>

          <div className=" bg-light p-4 rounded-3 mt-5">
            <p className=" mb-0 fw-semibold fs_lg text-black font_poppins border-bottom border-2 pb-3 ">
              About "Lorem" Tour Packages
            </p>
            <p className=" fs_xsm fw-normal text-black font_poppins mb-0 mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              ipsa voluptas pariatur ad nesciunt ipsum facere? Libero, dolore
              id! Reprehenderit ipsam suscipit, possimus a mollitia voluptatibus
              numquam maxime nihil delectus quibusdam, cumque id, saepe minus
              tempora excepturi fuga provident? Exercitationem.
            </p>
            {!showviewMore && (
              <div className=" d-flex justify-content-end w-100">
                <button
                  className="btn btn-link text-decoration-none fw-medium fs_sm font_poppins text-black mt-3"
                  onClick={() => setShowviewMore(true)}
                >
                  View More{" "}
                  <Image
                    width={15}
                    className="  ms-1 "
                    src={downarrow}
                    alt="downarrow"
                  />
                </button>
              </div>
            )}

            {showviewMore && (
              <>
                <p className="fs_xsm fw-normal text-black font_poppins mb-0 mt-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                  ipsa voluptas pariatur ad nesciunt ipsum facere? Libero,
                  dolore id! Reprehenderit ipsam suscipit, possimus a mollitia
                  voluptatibus numquam maxime nihil delectus quibusdam, cumque
                  id, saepe minus tempora excepturi fuga provident?
                  Exercitationem.
                </p>
                <div className=" d-flex justify-content-end w-100">
                  <button
                    className="btn btn-link text-decoration-none  fw-medium fs_sm font_poppins text-black mt-3"
                    onClick={() => setShowviewMore(false)}
                  >
                    View Less{" "}
                    <Image
                      width={15}
                      className=" rotate_180 ms-1 "
                      src={downarrow}
                      alt="downarrow"
                    />
                  </button>
                </div>
              </>
            )}
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
      `https://go4explore-api.cyberoze.com/api/trips-category/${slug}`
    );
    const data = res.data;
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
