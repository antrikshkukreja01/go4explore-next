"use client";
import React, { useState } from "react";

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [paymentAmount, setPaymentAmount] = useState(0);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    if (checked) {
      if (name === "fullPayment") {
        setSelectedPayment("fullPayment");
        setPaymentAmount(73500);
      } else if (name === "advancePayment") {
        setSelectedPayment("advancePayment");
        setPaymentAmount(21000);
      }
    } else {
      setSelectedPayment(null);
      setPaymentAmount(0);
    }
  };

  return (
    <>
      <section className="py-5">
        <div className=" container pt-5 mt-5">
          <div className="text-center mb-5">
            <p className="mb-0 fw-bold fs_xxl text-black font_poppins">
              Kindly Confirm Your Details
            </p>
            <p className="mb-0 fw-medium fs_xsm text-black font_poppins">
              Please Proceed The Payment After Confirming Your Details
            </p>
          </div>
          <div className="grayborder boxshadow py-4 px-3 p-sm-5 Payment_width mx-auto rounded-3 bg-white">
            <article className="d-flex align-items-center justify-content-between pb-2 border_dashed">
              <p className="mb-0 fs_xsm fw-normal font_poppins text-black">
                Booking ID
              </p>
              <p className="mb-0 fs_sm fw-semibold font_poppins text-black">
                Booking Id
              </p>
            </article>
            <article className="d-flex align-items-center justify-content-between pb-2 mt-4 pt-2 border_dashed">
              <p className="mb-0 fs_xsm fw-normal font_poppins text-black">
                Customer
              </p>
              <p className="mb-0 fs_sm fw-semibold font_poppins text-black">
                Customer Name
              </p>
            </article>
            <article className="d-flex align-items-center justify-content-between pb-2 mt-4 pt-2 border_dashed">
              <p className="mb-0 fs_xsm fw-normal font_poppins text-black">
                Paid to
              </p>
              <p className="mb-0 fs_sm fw-semibold font_poppins text-black">
                Go4Explore
              </p>
            </article>
            <article className="d-flex align-items-center justify-content-between pb-2 mt-4 pt-2 border_dashed">
              <p className="mb-0 fs_xsm fw-normal font_poppins text-black">
                Booking for
              </p>
              <p className="mb-0 fs_sm fw-semibold font_poppins text-black">
                Location Name
              </p>
            </article>
            <article className="d-flex align-items-center justify-content-between pb-2 mt-4 pt-2 border_dashed">
              <p className="mb-0 fs_xsm fw-normal font_poppins text-black">
                Price Amount
              </p>
              <p className="mb-0 fs_sm fw-semibold font_poppins text-black">
                Amount
              </p>
            </article>
            <article className="d-flex align-items-center justify-content-between pb-2 mt-4 pt-2 border_dashed">
              <p className="mb-0 fs_xsm fw-normal font_poppins text-black">
                GST (5%)
              </p>
              <p className="mb-0 fs_sm fw-semibold font_poppins text-black">
                Amount
              </p>
            </article>
            <article className="d-flex align-items-center justify-content-between pb-2 mt-4 pt-2 border_dashed">
              <p className="mb-0 fs_xsm fw-normal font_poppins text-black">
                Amount to be paid
              </p>
              <p className="mb-0 fs_sm fw-semibold font_poppins text-black">
                Total Amount
              </p>
            </article>
            <article className="d-flex align-items-center justify-content-between pb-2 mt-4 pt-2 border_dashed">
              <p className="mb-0 fs_xsm fw-normal font_poppins text-black">
                Coupon Discount (#)
              </p>
              <p className="mb-0 fs_sm fw-semibold font_poppins text-black">
                Discount
              </p>
            </article>
            <div className="d-flex align-items-center flex-column flex-xxl-row justify-content-between mt-4">
              <form className="d-flex align-items-center gap-2">
                <input type="checkbox" />
                <p className="fw-normal fs_xsm mb-0 text-black font_poppins">
                  I Accept All The{" "}
                  <a
                    href="/TermsAndConditions"
                    target="_blank"
                    className="fw-semibold clr_blue text-decoration-none"
                  >
                    Terms And Conditions
                  </a>
                </p>
              </form>
              <form className="d-flex align-items-center flex-column flex-md-row mt-3 mt-xxl-0 gap-2 gap-md-4">
                <article className="d-flex align-items-center gap-2">
                  <input
                    type="checkbox"
                    name="fullPayment"
                    checked={selectedPayment === "fullPayment"}
                    onChange={handleCheckboxChange}
                  />
                  <p className="fw-normal fs_xsm mb-0 text-black font_poppins">
                    Full Payment ( &#8377;73500)
                  </p>
                </article>
                <article className="d-flex align-items-center gap-2">
                  <input
                    type="checkbox"
                    name="advancePayment"
                    checked={selectedPayment === "advancePayment"}
                    onChange={handleCheckboxChange}
                  />
                  <p className="fw-normal fs_xsm mb-0 text-black font_poppins">
                    Advance Payment ( &#8377;21000)
                  </p>
                </article>
              </form>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <button
                type="submit"
                className="bg-primary text-white input_style_2 fw-bold fs_md rounded-3 mt-3 px-4 py-3"
              >
                Proceed To Pay {paymentAmount > 0 && `(₹${paymentAmount})`}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
