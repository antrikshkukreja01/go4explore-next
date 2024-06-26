import React from "react";

const Passreset = () => {
  return (
    <>
      <section className=" py-5">
        <div className=" pt-5 mt-5 container ">
          <p className="mb-4 fw-bold fs_3xl font_poppins text-black">
            Password Reset
          </p>
          <p className=" mb-3 fw-normal fs_xsm font_poppins text-black">
            Restore your forgotten password
          </p>
          <p className=" mb-3 fw-normal fs_xsm mx_width font_poppins text-black">
            Enter the email associated with your account in the field below and
            we'll email you a link to reset your password.
          </p>
          <input
            className=" mb-0 input_style_2 inputwidth blue_border p-3 rounded-3 "
            type="text"
            placeholder="Email Address"
          />
          <div className=" d-flex align-items-center flex-column flex-sm-row gap-2 gap-sm-3 mt-2">
            {" "}
            <button className=" bg-black fw-medium text-white fs_xsm text-uppercase rounded-3 px-4 py-2">
              Reset Password
            </button>{" "}
            <a
              className=" fw-normal fs_xsm text-primary font_poppins text-decoration-none"
              href="#"
            >
              {" "}
              Remember the Password?
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Passreset;
