"use client";
import React, { useState } from "react";

// import Accordion from "react-bootstrap/Accordion";

const FaqSpiti = () => {
  const [showSpitiFaqMore, setShowSpitiFaqMore] = useState(false);
  return (
    <>
      <section className=" py-4 py-sm-5">
        <div className=" container">
          <div className=" d-flex align-items-center justify-content-center w-100">
            <h2 className=" font_poppins text-black fw-bold fs_xl mb-0 border-bottom border-3 d-inline-block pb-3">
              Spiti Valley Tour FAQs
            </h2>
          </div>

          {/* <Accordion
            className=" faq_width mx-auto mt-4"
            defaultActiveKey={["0"]}
          >
            <Accordion.Item eventKey="0" className=" mb-4 ">
              <Accordion.Header>
                <p className=" mb-0 fw-medium fs_sm font_poppins text-black">
                  Do we need any permits to visit Spiti Valley?
                </p>
              </Accordion.Header>
              <Accordion.Body>
                <p className=" mb-0 fw-medium fs_xsm text-black font_poppins d-flex gap-2">
                  Yes, there may be some health issues like AMS is the a common
                  problem that affects individuals when they are travelling in
                  higher altitude regions because most of us live in plain
                  regions and hence our bodies get plenty of oxygen from the air
                  but when you move to high - altitude regions, the air pressure
                  changes and the oxygen level decreases.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className=" mb-4 ">
              <Accordion.Header>
                <p className=" mb-0 fw-medium fs_sm font_poppins text-black">
                  Are there any health problems that one might face in Spiti
                  Valley ?
                </p>
              </Accordion.Header>
              <Accordion.Body>
                <p className=" mb-0 fw-medium fs_xsm text-black font_poppins d-flex gap-2">
                  Yes, there may be some health issues like AMS is the a common
                  problem that affects individuals when they are travelling in
                  higher altitude regions because most of us live in plain
                  regions and hence our bodies get plenty of oxygen from the air
                  but when you move to high - altitude regions, the air pressure
                  changes and the oxygen level decreases.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className=" mb-4 ">
              <Accordion.Header>
                <p className=" mb-0 fw-medium fs_sm font_poppins text-black">
                  Is there mobile network available in Spiti Valley?
                </p>
              </Accordion.Header>
              <Accordion.Body>
                <p className=" mb-0 fw-medium fs_xsm text-black font_poppins d-flex gap-2">
                  Yes, there may be some health issues like AMS is the a common
                  problem that affects individuals when they are travelling in
                  higher altitude regions because most of us live in plain
                  regions and hence our bodies get plenty of oxygen from the air
                  but when you move to high - altitude regions, the air pressure
                  changes and the oxygen level decreases.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className=" mb-4 ">
              <Accordion.Header>
                <p className=" mb-0 fw-medium fs_sm font_poppins text-black">
                  Is it difficult to find ATMs in Spiti Valley?
                </p>
              </Accordion.Header>
              <Accordion.Body>
                <p className=" mb-0 fw-medium fs_xsm text-black font_poppins d-flex gap-2">
                  Yes, there may be some health issues like AMS is the a common
                  problem that affects individuals when they are travelling in
                  higher altitude regions because most of us live in plain
                  regions and hence our bodies get plenty of oxygen from the air
                  but when you move to high - altitude regions, the air pressure
                  changes and the oxygen level decreases.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            {!showSpitiFaqMore && (
              <div className=" d-flex justify-content-center w-100">
                <button
                  className="btn btn-link text-decoration-none fw-medium fs_sm font_poppins text-black mt-3"
                  onClick={() => setShowSpitiFaqMore(true)}
                >
                  View More
                </button>
              </div>
            )}

            {showSpitiFaqMore && (
              <>
                <Accordion.Item eventKey="4" className=" mb-4 ">
                  <Accordion.Header>
                    <p className=" mb-0 fw-medium fs_sm font_poppins text-black">
                      Do we need any permits to visit Spiti Valley?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className=" mb-0 fw-medium fs_xsm text-black font_poppins d-flex gap-2">
                      Yes, there may be some health issues like AMS is the a
                      common problem that affects individuals when they are
                      travelling in higher altitude regions because most of us
                      live in plain regions and hence our bodies get plenty of
                      oxygen from the air but when you move to high - altitude
                      regions, the air pressure changes and the oxygen level
                      decreases.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" className=" mb-4 ">
                  <Accordion.Header>
                    <p className=" mb-0 fw-medium fs_sm font_poppins text-black">
                      Are there any health problems that one might face in Spiti
                      Valley ?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className=" mb-0 fw-medium fs_xsm text-black font_poppins d-flex gap-2">
                      Yes, there may be some health issues like AMS is the a
                      common problem that affects individuals when they are
                      travelling in higher altitude regions because most of us
                      live in plain regions and hence our bodies get plenty of
                      oxygen from the air but when you move to high - altitude
                      regions, the air pressure changes and the oxygen level
                      decreases.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6" className=" mb-4 ">
                  <Accordion.Header>
                    <p className=" mb-0 fw-medium fs_sm font_poppins text-black">
                      Is there mobile network available in Spiti Valley?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className=" mb-0 fw-medium fs_xsm text-black font_poppins d-flex gap-2">
                      Yes, there may be some health issues like AMS is the a
                      common problem that affects individuals when they are
                      travelling in higher altitude regions because most of us
                      live in plain regions and hence our bodies get plenty of
                      oxygen from the air but when you move to high - altitude
                      regions, the air pressure changes and the oxygen level
                      decreases.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7" className=" mb-4 ">
                  <Accordion.Header>
                    <p className=" mb-0 fw-medium fs_sm font_poppins text-black">
                      Is it difficult to find ATMs in Spiti Valley?
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className=" mb-0 fw-medium fs_xsm text-black font_poppins d-flex gap-2">
                      Yes, there may be some health issues like AMS is the a
                      common problem that affects individuals when they are
                      travelling in higher altitude regions because most of us
                      live in plain regions and hence our bodies get plenty of
                      oxygen from the air but when you move to high - altitude
                      regions, the air pressure changes and the oxygen level
                      decreases.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <div className=" d-flex justify-content-center w-100">
                  <button
                    className="btn btn-link text-decoration-none  fw-medium fs_sm font_poppins text-black mt-3"
                    onClick={() => setShowSpitiFaqMore(false)}
                  >
                    View Less
                  </button>
                </div>
              </>
            )}
          </Accordion> */}
        </div>
      </section>
    </>
  );
};

export default FaqSpiti;
